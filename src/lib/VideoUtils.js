export default class VideoUtils{
    constructor(videoComponent){
        this.videoComponent = videoComponent;
    }

    formatTimeFromSeconds(seconds){
        seconds = parseInt(seconds);
        let hours = parseInt(seconds / 3600);
        seconds -= hours*3600;
        let minutes = parseInt(seconds / 60);
        seconds -= minutes*60;
        let time = `${hours > 9 ? hours : ("0" + hours)}:${minutes > 9 ? minutes : ("0" + minutes) }:${seconds > 9 ? seconds : ("0" + seconds)}`;
        return time;
    }

    calculatePercentage(fraction, total){
        let percentage = parseInt(fraction/total*100*100)/100; // in order to approximate to 2 digits
        return percentage;
    }

    isIE(){
        let UA = window.navigator.userAgent;
        if( UA.match( /MSIE/i ) || UA.match( /Edge/i ) || UA.match( /Trident\//i ) )
            return true;
        return false;
    }

    disableControls(){
        this.videoComponent._controlsWrapper.style.display = "none";
    }

    enableControls(){
        if( this.videoComponent.props.attributes.controls )
            this.videoComponent._controlsWrapper.style.display = "none";
        if( this.videoComponent.props.controls )
            this.videoComponent._controlsWrapper.style.opacity = "1";
    }

    moveOverlay(){
        this.videoComponent._overlay.style.bottom = "65px";
    }

    enableOverlay(){
        if( this.videoComponent.props.overlay )
            this.videoComponent._overlay.style.opacity = "1";
    }

    calculateBuffer(){
        if( !this.videoComponent._video )
            return 0;
        if( !this.lastBuffered )
            this.lastBuffered = 0;
        if( this.videoComponent._video.buffered.length < 1 )
            return 0;
        let buffered = this.videoComponent._video.buffered.end(this.videoComponent._video.buffered.length-1);
        if( !this.videoComponent._video.duration )
            return 0;
        this.lastBuffered = buffered;
        let {duration} = this.videoComponent._video;
        let percentage = parseInt( buffered / duration * 100 );
        return percentage;
    }

    isFullscreen(){
        let isFullscreen = undefined;
        if( document.webkitIsFullScreen !== undefined ){
            isFullscreen = document.webkitIsFullScreen;
        }else if( document.fullscreenElement !== undefined ){
            isFullscreen = document.fullscreenElement !== null;
        }else if( document.msFullscreenElement !== undefined ){
            isFullscreen = document.msFullscreenElement !== null;
        }
        return isFullscreen;
    }
}
