import icons from './assets/icons';
import Progress from './Progress';
import React from 'react';
import VideoActions from './lib/VideoActions';
import VideoEventHandler from './lib/VideoEventHandler';
import VideoStyle from './style/video.scss';
import VideoUtils from './lib/VideoUtils';

class Video extends React.Component{

    constructor(){
        super();
        this.eventHandler = new VideoEventHandler(this);
        this.videoUtils = new VideoUtils(this);
        this.videoActions = new VideoActions(this);
        this.state = {
            buffer: 0,
            progress: 0,
            volume: 1,
            fullscreen: false,
            time: "00:00:00",
            playing: false,
            loaded: false,
            isIE: false,
            currentTime: 0
        };
        this.bufferCheckTimer = {};
        this.fullscreenCheckTimer = {};
    }

    componentWillUnmount(){
        let video = this._video;
        if( !video )
            return;
        this.eventHandler.removeListeners();
        this.eventHandler.detachListeners();
        clearInterval( this.bufferCheckTimer );
        clearInterval( this.fullscreenCheckTimer );
    }

    onMetaDataLoaded = e => {
        let isIE = this.videoUtils.isIE();
        this.setState({
            isIE
        }, () => {
            if( isIE ){
                this.videoUtils.disableControls();
                this.videoUtils.moveOverlay();
            }else{
                this.videoUtils.enableControls();
            }
            this.videoUtils.enableOverlay();
            this.setState({ loaded: true });
        });
    }

    onTimeUpdate = e => {
        let {currentTime, duration} = e.target
        let progress = this.videoUtils.calculatePercentage(currentTime, duration);
        let time = this.videoUtils.formatTimeFromSeconds(currentTime);
        this.setState({
            progress,
            time,
            currentTime
        });
    }

    onProgressChange = e => {
        let progress = parseFloat(e.target.value);
        this.setState({
            progress
        }, () => {
            let {duration} = this._video;
            let time = progress*duration/100;
            this._video.currentTime = time;
        })
    }

    onVolumeSet = e => {
        let volume = parseFloat(e.target.value);
        this.videoActions.setVolume(volume);
    }

    checkBuffer = () => {
        let buffer = this.videoUtils.calculateBuffer();
        this.setState({
            buffer
        });
    }

    referenceVideoTag = video => {
        this._video = video;
        this.eventHandler.attachListeners();
        this.eventHandler.createListeners();
        this.bufferCheckTimer = setInterval( this.checkBuffer, 500 );
        this.fullscreenCheckTimer = setInterval( this.checkFullscreen, 500 );
    }

    checkFullscreen = () => {
        let fullscreen = this.videoUtils.isFullscreen();
        if( fullscreen !== undefined ){
            this.setState({ fullscreen });
        }
    }

    onMouseMove = e => {
        this.triggerMouseMove();
    }

    triggerMouseMove = () => {
        if( this.state.loaded ){
            if( !this.props.autohide )
                return;
            if( this.props.controls && !this.props.attributes.controls )
                this._controlsWrapper.style.opacity = "1";
            if( this.props.overlay )
                this._overlay.style.opacity = "1";
            this._wrapper.style.cursor = "auto";
            if( this.hideTimer )
                clearTimeout(this.hideTimer);
            this.hideTimer = setTimeout(() => {
                if( this.state.playing ){
                    this._controlsWrapper.style.opacity = "0";
                    if( this.props.overlay && !this.props.fixedoverlay )
                        this._overlay.style.opacity = "0";
                    if( this.props.autohidecursor )
                        this._wrapper.style.cursor = "none";
                }

            }, 3000 );
        }
    }

    onPlay = e => {
        this.setState({
            playing: true
        }, () => {
            this.triggerMouseMove();
        });
    }

    onPause = e => {
        this.setState({
            playing: false
        }, () => {
            this.triggerMouseMove();
        });
    }

    onVolumeChange = e => {
        let volume = parseInt(e.target.volume*100)/100;
        this.setState({
            volume
        });
    }

    onFullscreenSet = e => {
        this.videoActions.goFullscreen(this._wrapper);
    }

    onDefaultscreenSet = e => {
        this.videoActions.exitFullscreen();
    }

    onKeyDown = e => {
        if( this.props.shortcuts ){
            let keyCode = e.keyCode;
            switch( keyCode ){
                case 32: { // Space
                    this.videoActions.togglePlay();
                    break;
                }
                case 39: {
                    this.videoActions.forward(); // Right arrow
                    break;
                }
                case 37: {
                    this.videoActions.back(); // Left arrow
                    break;
                }
                case 38: {
                    this.videoActions.volumeUp(); // Up arrow
                    break;
                }
                case 40: {
                    this.videoActions.volumeDown(); // Down arrow
                    break;
                }
                case 70: { // F
                    this.videoActions.toggleFullscreen();
                    break;
                }
                case 77: {
                    this.videoActions.toggleMute();
                    break;
                }
            }
        }
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

        let videoProps = this.props.attributes;
        if( this.state.isIE ){
            videoProps.controls = true;
        }

        return (
            <div
                className="reactVideoWrapper"
                onMouseMove={this.onMouseMove}
                tabIndex={this.props.tabIndex}
                onKeyDown={this.onKeyDown}
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
                    {...videoProps}
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
                                readOnly: true
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
    autohidecursor: React.PropTypes.bool,
    // Overlay enabled
    overlay: React.PropTypes.bool,
    // Overlay does not autohide
    fixedoverlay: React.PropTypes.bool,
    // Enable or disable keyboard shortcuts
    shortcuts: React.PropTypes.bool,
    tabIndex: React.PropTypes.string
};

Video.defaultProps = {
    sources: [],
    style: {},
    className: "",
    attributes: {},
    controls: true,
    autohide: true,
    autohidecursor: true,
    overlay: true,
    fixedoverlay: false,
    width: "auto",
    height: "100%",
    shortcuts: true,
    tabIndex: "1"
};

export default Video;
