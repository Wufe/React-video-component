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
        if( this.props.attributes.controls )
            this._controlsWrapper.style.display = "none";
        if( this.props.controls )
            this._controlsWrapper.style.opacity = "1";
        if( this.props.overlay )
            this._overlay.style.opacity = "1";
    }

    onTimeUpdate = e => {
        let current = e.target.currentTime;
        let end = e.target.seekable.end(0);
        let percentage = parseInt(current/end*100*100)/100; // in order to approximate to 2 digits
        let seconds = parseInt(current);
        let hours = parseInt(seconds / 3600);
        seconds -= hours*3600;
        let minutes = parseInt(seconds / 60);
        seconds -= minutes*60;
        let time = `${hours > 9 ? hours : ("0" + hours)}:${minutes > 9 ? minutes : ("0" + minutes) }:${seconds > 9 ? seconds : ("0" + seconds)}`;
        this.setState({
            progress: percentage,
            time
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

    onVolumeSet = e => {
        let volume = parseFloat(e.target.value);
        this.setState({
            volume
        }, () => {
            this._video.volume = volume;
        });
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
            video.addEventListener( "volumechange", this.onVolumeChange );
            this.bufferCheckTimer = setInterval( this.checkBuffer, 500 );
            this.createListeners(video);
        });
    }

    onMouseMove = e => {
        this.triggerMouseMove();
    }

    triggerMouseMove = () => {
        if( this.props.attributes.controls )
            return;
        if( !this.props.autohide )
            return;
        if( this.props.controls )
            this._controlsWrapper.style.opacity = "1";
        if( this.props.overlay )
            this._overlay.style.opacity = "1";
        if( this.hideTimer )
            clearTimeout(this.hideTimer);
        this.hideTimer = setTimeout(() => {
            if( this.state.playing ){
                this._controlsWrapper.style.opacity = "0";
                if( this.props.overlay && !this.props.fixedoverlay )
                    this._overlay.style.opacity = "0";
            }

        }, 3000 );
    }

    onPlay = e => {
        // this._play.style.display = "none";
        // this._pause.style.display = "block";
        this.setState({
            playing: true
        }, () => {
            this.triggerMouseMove();
        });
    }

    onPause = e => {
        // this._pause.style.display = "none";
        // this._play.style.display = "block";
        this.setState({
            playing: false
        });
    }

    onVolumeChange = e => {
        let volume = parseInt(e.target.volume*100)/100;
        this.setState({
            volume
        });
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

    mute = () => {
        if( !this._video )
            return;
        this.beforeMute = this.state.volume;
        this.setState({
            volume: 0
        }, () => {
            this._video.volume = 0;
            this._muteButton.style.display = "none";
            this._unmuteButton.style.display = "block";
        })
    }

    unmute = () => {
        if( !this._video )
            return;
        let volume = this.beforeMute || 1;
        this.setState({
            volume
        }, () => {
            this._video.volume = volume;
            this._muteButton.style.display = "block";
            this._unmuteButton.style.display = "none";
        })
    }

    goFullscreen = element => {
        if( element.requestFullscreen ){
            return element.requestFullscreen();
        }else if( element.msRequestFullscreen ){
            return element.msRequestFullscreen();
        }else if( element.mozRequestFullScreen ){
            return element.mozRequestFullScreen();
        }else if( element.webkitRequestFullscreen ){
            return element.webkitRequestFullscreen();
        }
    }

    exitFullscreen = () => {
        if( document.exitFullscreen ){
            return document.exitFullscreen();
        }else if( document.msExitFullscreen ){
            return document.msExitFullscreen();
        }else if( document.mozCancelFullScreen ){
            return document.mozCancelFullScreen();
        }else if( document.webkitExitFullscreen ){
            return document.webkitExitFullscreen();
        }
    }

    onFullscreenSet = e => {
        this.goFullscreen(this._wrapper);
        this.setState({
            fullscreen: true
        });
    }

    onDefaultscreenSet = e => {
        this.exitFullscreen();
        this.setState({
            fullscreen: false
        });
    }

    constructor(){
        super();
        this._controlsWrapper = {};
        this._buffer = {};
        this._progress = {};
        this.state = {
            buffer: 0,
            progress: 0,
            volume: 1,
            fullscreen: false,
            time: "00:00:00",
            playing: false
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
            video.removeEventListener( "volumechange", this.onVolumeChange );
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
            <div
                className="reactVideoWrapper"
                onMouseMove={this.onMouseMove}
                ref={ref => this._wrapper = ref}
            >
                <div
                    className="overlayContainer"
                    onMouseMove={this.onMouseMove}
                    ref={ref => this._overlay = ref}
                    style={{
                        display: this.props.overlay ? "block" : "none"
                    }}
                >
                    {this.props.children}
                </div>
                <video
                    className={`${this.props.className}`}
                    onMouseMove={this.onMouseMove}
                    ref={this.referenceVideoTag}
                    style={this.props.style}
                    width={this.props.width}
                    height={this.props.height}
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
                    <div
                        className="playButton"
                        ref={ref => this._play = ref}
                        onClick={this.play}
                        style={{
                            display: this.state.playing ? "none" : "block"
                        }}
                    >
                        {icons.play}
                    </div>
                    <div
                        className="pauseButton"
                        ref={ ref => this._pause = ref}
                        onClick={this.pause}
                        style={{
                            display: this.state.playing ? "block" : "none"
                        }}
                    >
                        {icons.pause}
                    </div>
                    <div
                        className="muteButton"
                        ref={ref => this._muteButton = ref}
                        onClick={this.mute}
                    >
                        {icons.volume}
                    </div>
                    <div
                        className="unmuteButton"
                        ref={ref => this._unmuteButton = ref}
                        onClick={this.unmute}
                    >
                        {icons.mute}
                    </div>
                    <div className="volumeBar">
                        <Progress
                            min="0"
                            max="1"
                            step="any"
                            ref={ref => this._volume = ref}
                            value={this.state.volume}
                            attributes={{
                                onChange: this.onVolumeSet
                            }}
                            colors={{
                                start: "#FFF",
                                end: "#FFF",
                                back: "rgba( 0, 0, 0, 0.3 )"
                            }}
                            className="volume"
                        />
                    </div>

                    <div
                        className="time"
                    >
                        {this.state.time}
                    </div>

                    <div
                        className="fullscreenButton"
                        onClick={this.onFullscreenSet}
                        style={{
                            display: this.state.fullscren ? "none" : "block"
                        }}
                    >
                        {icons.fullscreen}
                    </div>
                    <div
                        className="defaultscreenButton"
                        onClick={this.onDefaultscreenSet}
                        style={{
                            display: this.state.fullscreen ? "block" : "none"
                        }}
                    >
                        {icons.defaultscreen}
                    </div>

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
    controls: React.PropTypes.bool,
    // Autohide controls and overlay
    autohide: React.PropTypes.bool,
    // Overlay enabled
    overlay: React.PropTypes.bool,
    // Overlay does not autohide
    fixedoverlay: React.PropTypes.bool
};

Video.defaultProps = {
    sources: [],
    style: {},
    className: "",
    attributes: {},
    controls: true,
    autohide: true,
    overlay: true,
    fixedoverlay: false,
    width: "auto",
    height: "auto"
};

export default Video;
