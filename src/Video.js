import React from 'react';
import VideoStyle from './style/video.scss';
import Progress from './Progress';
import icons from './assets/icons';

class Video extends React.Component{

    events = [
        "abort",
        "canplay",
        "canplaythrough",
        "durationchange",
        "emptied",
        "ended",
        "error",
        "loadedmetadata",
        "loadstart",
        "pause",
        "play",
        "playing",
        "progress",
        "ratechange",
        "seeked",
        "seeking",
        "stalled",
        "timeupdate",
        "volumechange",
        "waiting"
    ];

    eventListeners = [];

    createListeners = video => {
        this.eventListeners = [];
        this.events.map( eventName => {
            let listenerName = `on${eventName}`;
            let listener = event => {
                if( typeof this.props[eventName] == "function" ){
                    this.props[eventName]( event );
                }
            }
            video.addEventListener( eventName, listener );
            this.eventListeners.push({
                event: eventName,
                listener
            });
        });
    };

    onMetaDataLoaded = e => {
        // TODO: Uncomment this line after debug
        // if( this.props.attributes.controls )
        //     this._controlsWrapper.style.display = "none";
        if( this.props.controls )
            this._controlsWrapper.style.opacity = "1";
    }

    onTimeUpdate = e => {
        let current = e.target.currentTime;
        let end = e.target.seekable.end(0);
        let percentage = parseInt(current/end*100*100)/100; // in order to approximate to 2 digits
        this.setState({
            progress: percentage
        });
    }

    onProgressChange = e => {
        let progress = parseFloat(e.target.value);
        this.setState({
            progress
        }, () => {
            if( !this._video )
                return;
            if( this._video.seekable.length < 1 )
                return;
            let end = this._video.seekable.end(0);
            let time = progress*end/100;
            this._video.currentTime = time;
        })
    }

    checkBuffer = () => {
        if( !this._video )
            return;
        if( !this.lastSought ){
            this.lastBuffered = 0;
        }
        if( this._video.buffered.length < 1 )
            return;
        let buffered = this._video.buffered.end(this._video.buffered.length-1);
        if( this.lastBuffered != buffered ){
            if( this._video.seekable.length < 1 )
                return;
            this.lastBuffered = buffered;
            let end = this._video.seekable.end(0);
            let percentage = parseInt( buffered / end * 100 );
            this.setState({
                buffer: percentage
            });
        }
    }

    referenceVideoTag = video => {
        this._video = video;
        this.setState({ video }, () => {
            video.addEventListener( "loadedmetadata", this.onMetaDataLoaded );
            video.addEventListener( "timeupdate", this.onTimeUpdate );
            video.addEventListener( "play", this.onPlay );
            video.addEventListener( "pause", this.onPause );
            this.bufferCheckTimer = setInterval( this.checkBuffer, 500 );
            this.createListeners(video);
        });
    }

    onPlay = e => {
        this._play.style.display = "none";
        this._pause.style.display = "block";
    }

    onPause = e => {
        this._pause.style.display = "none";
        this._play.style.display = "block";
    }

    play = () => {
        if( !this._video )
            return;
        this._video.play();
    }

    pause = () => {
        if( !this._video )
            return;
        this._video.pause();
    }

    constructor(){
        super();
        this._controlsWrapper = {};
        this._buffer = {};
        this._progress = {};
        this.state = {
            buffer: 0,
            progress: 0
        };
        this.bufferCheckTimer = {};
    }

    componentWillUnmount(){
        let video = this.state.video;
        if( video !== undefined ){
            for( let i = 0; i < this.eventListeners.length; i++ ){
                video.removeEventListener(this.eventListeners[i].event, this.eventListeners[i].listener);
            }
            this.eventListeners = [];
            video.removeEventListener( "loadedmetadata", this.onMetaDataLoaded );
            video.removeEventListener( "timeupdate", this.onTimeUpdate );
            video.removeEventListener( "play", this.onPlay );
            video.removeEventListener( "pause", this.onPause );
        }
        clearInterval( this.bufferCheckTimer );
    }

    render(){
        let sources = this.props.sources.map( source => {
            if( typeof source == "string" ){
                return { src: source };
            }else if( typeof source == "object" ){
                if( source.src === undefined || typeof source.src != "string" ){
                    console.error( "Source must be a string or an object containing a 'src' key.\n", source );
                }
                return source;
            }
        });

        return (
            <div className="reactVideoWrapper">
                <video
                    className={`${this.props.className}`}
                    ref={this.referenceVideoTag}
                    style={this.props.style}
                    width={this.props.width || "auto" }
                    height={this.props.height || "auto" }
                    {...this.props.attributes}
                    >
                        {
                            sources.map( (s, i) => <source key={i} src={s.src} type={s.type || null} />)
                        }
                </video>
                <div
                    ref={ ref => this._controlsWrapper = ref }
                    style={this.props.style.controlsWrapper || {}}
                    className="controlsWrapper"
                >
                    <div className="seekBar">
                        <Progress
                            ref={ ref => this._progress = ref }
                            value={this.state.progress}
                            className="progress"
                            attributes={{
                                onChange: this.onProgressChange
                            }}
                        />
                        <Progress
                            ref={ ref => this._buffer = ref }
                            value={this.state.buffer}
                            className = "buffer"
                            colors={{
                                start: "#777",
                                end: "#666",
                                back: "#000"
                            }}
                            attributes={{
                                readonly: "readonly"
                            }}
                        />
                    </div>
                    <div className="playButton" ref={ref => this._play = ref} onClick={this.play}>
                        {icons.play}
                    </div>
                    <div className="pauseButton" ref={ ref => this._pause = ref} onClick={this.pause}>
                        {icons.pause}
                    </div>
                    <div className="volumeBar"></div>


                    <div className="fullscreenButton"></div>

                </div>
            </div>

        );
    }
};

Video.propTypes = {
    sources: React.PropTypes.array.isRequired,
    style: React.PropTypes.object,
    width: React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.number
    ]),
    height: React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.number
    ]),
    className: React.PropTypes.string,
    attributes: React.PropTypes.object,
    controls: React.PropTypes.bool
};

Video.defaultProps = {
    sources: [],
    style: {},
    className: "",
    attributes: {},
    controls: true
};

export default Video;
