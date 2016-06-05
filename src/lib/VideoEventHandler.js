export default class VideoEventHandler{
    eventListeners = [];
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

    constructor(videoComponent){
        this.videoComponent = videoComponent;
    }

    attachListeners(){
        let video = this.videoComponent._video;
        video.addEventListener( "loadedmetadata", this.videoComponent.onMetaDataLoaded );
        video.addEventListener( "timeupdate", this.videoComponent.onTimeUpdate );
        video.addEventListener( "play", this.videoComponent.onPlay );
        video.addEventListener( "pause", this.videoComponent.onPause );
        video.addEventListener( "volumechange", this.videoComponent.onVolumeChange );
    }

    detachListeners(){
        let video = this.videoComponent._video;
        video.removeEventListener( "loadedmetadata", this.videoComponent.onMetaDataLoaded );
        video.removeEventListener( "timeupdate", this.videoComponent.onTimeUpdate );
        video.removeEventListener( "play", this.videoComponent.onPlay );
        video.removeEventListener( "pause", this.videoComponent.onPause );
        video.removeEventListener( "volumechange", this.videoComponent.onVolumeChange );
    }

    createListeners(){
        this.eventListeners = [];
        this.events.map( eventName => {
            let listener = event => {
                if( typeof this.videoComponent.props[eventName] == "function" ){
                    this.videoComponent.props[eventName]( event );
                }
            }
            this.videoComponent._video.addEventListener( eventName, listener );
            this.eventListeners.push({
                event: eventName,
                listener
            });
        });
    };

    removeListeners(){
        for( let i = 0; i < this.eventListeners.length; i++ ){
            this.videoComponent._video.removeEventListener(this.eventListeners[i].event, this.eventListeners[i].listener);
        }
        this.eventListeners = [];
    }
}
