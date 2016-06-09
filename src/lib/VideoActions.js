export default class VideoActions{
    constructor(videoComponent){
        this.videoComponent = videoComponent;
    }

    play = () => {
        if( !this.videoComponent._video )
            return;
        this.videoComponent._video.play();
    }

    pause = () => {
        if( !this.videoComponent._video )
            return;
        this.videoComponent._video.pause();
    }

    mute = () => {
        if( !this.videoComponent._video )
            return;
        this.beforeMute = this.videoComponent.state.volume;
        this.videoComponent.setState({
            volume: 0
        }, () => {
            this.muted = true;
            this.videoComponent._video.volume = 0;
            this.videoComponent._muteButton.style.display = "none";
            this.videoComponent._unmuteButton.style.display = "block";
        });
    }

    unmute = () => {
        if( !this.videoComponent._video )
            return;
        let volume = this.beforeMute || 1;
        this.videoComponent.setState({
            volume
        }, () => {
            this.muted = false;
            this.videoComponent._video.volume = volume;
            this.videoComponent._muteButton.style.display = "block";
            this.videoComponent._unmuteButton.style.display = "none";
        });
    }

    volumeUp = () => {
        let volume = this.videoComponent.state.volume;
        if( volume >= 1 )
            return;
        volume += 0.1
        this.setVolume(volume);
    }

    volumeDown = () => {
        let volume = this.videoComponent.state.volume;
        if( volume <= 0 )
            return;
        volume -= 0.1
        this.setVolume(volume);
    }

    setVolume = (volume) => {
        this.videoComponent.setState({
            volume
        }, () => {
            this.videoComponent._video.volume = volume;
        });
    }

    back = () => {
        if( !this.videoComponent._video )
            return;
        let {currentTime, duration} = this.videoComponent._video;
        let newTime = 0;
        if( currentTime -5 > 0 ){
            newTime = currentTime -5;
        }
        this.videoComponent._video.currentTime = newTime;
        let progress = newTime/duration*100;
        this.videoComponent.setState({
            progress
        }, () => {
            this.videoComponent.onTimeUpdate({target: this.videoComponent._video});
        });
    }

    forward = () => {
        if( !this.videoComponent._video )
            return;
        let {currentTime, duration} = this.videoComponent._video;
        let newTime = duration;
        if( currentTime +5 < duration ){
            newTime = currentTime +5;
        }
        this.videoComponent._video.currentTime = newTime;
        let progress = newTime/duration*100;
        this.videoComponent.setState({
            progress
        }, () => {
            this.videoComponent.onTimeUpdate({target: this.videoComponent._video});
        });
    }

    goFullscreen = (element) => {
        if( element.requestFullscreen ){
            return element.requestFullscreen();
        }else if( element.msRequestFullscreen ){
            return element.msRequestFullscreen();
        }else if( element.mozRequestFullScreen ){
            return element.mozRequestFullScreen();
        }else if( element.webkitRequestFullscreen ){
            return element.webkitRequestFullscreen();
        }
        this.videoComponent.setState({
            fullscreen: true
        });
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
        this.videoComponent.setState({
            fullscreen: false
        });
    }

    toggleFullscreen = () => {
        if( this.videoComponent.state.fullscreen ){
            this.videoComponent.onDefaultscreenSet({});
        }else{
            this.videoComponent.onFullscreenSet({});
        }
    }

    toggleMute = () => {
        if( !this.muted ){
            this.mute();
        }else{
            this.unmute();
        }
    }

    togglePlay = () => {
        if( this.videoComponent.state.playing ){
            this.pause();
        }else{
            this.play();
        }
    }
};
