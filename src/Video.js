import React from 'react';
import Radium from 'radium';

class Video extends React.Component{

    styles = {
        base: {
            maxWidth: "100%",
            maxHeight: "100%",
            margin: "0 auto",
            verticalAlign: "middle",
            display: "inline-block"
        }
    }

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
        //console.log( "Meta data loaded", e );
    }

    referenceVideoTag = video => {
        this.setState({ video }, () => {
            video.addEventListener( "loadedmetadata", this.onMetaDataLoaded );
            this.createListeners(video);
        });
    }

    constructor(){
        super();
    }

    componentWillUnmount(){
        let video = this.state.video;
        if( video !== undefined ){
            for( let i = 0; i < this.eventListeners.length; i++ ){
                video.removeEventListener(this.eventListeners[i].event, this.eventListeners[i].listener);
            }
            this.eventListeners = [];
            video.removeEventListener( "loadedmetadata", this.onMetaDataLoaded );
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
        })
        let style = Object.assign({}, this.styles.base, this.props.style);
        return (
            <video
                ref={this.referenceVideoTag}
                style={style}
                width={this.props.width || "auto" }
                height={this.props.height || "auto" }
                controls
                >
                    {
                        sources.map( (s, i) => <source key={i} src={s.src} type={s.type || null} />)
                    }
            </video>
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
    ])
};

Video.defaultProps = {
    sources: [],
    style: {}
};

export default Video;
