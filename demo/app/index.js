import React from 'react';
import ReactDOM from 'react-dom';
import Radium from 'radium';
import Video from '../../build/components/video';

@Radium
class App extends React.Component{

    styles = {
        container: {
            width: "100vw",
            height: "100vh",
            lineHeight: "100vh",
            textAlign: "center",
            overflow: "hidden"
        }
    }

    componentWillMount(){

    }

    onTimeUpdate = event => {
        if( !history || !history.replaceState ){
            document.location.hash = parseInt(event.target.currentTime);
        }else{
            history.replaceState( null, null, "#" + parseInt(event.target.currentTime) );
        }
    }

    onMetaDataLoaded = event => {
        this._video._wrapper.focus();
    }

    play = event => {
        event.target.play();
    }

    render(){
        return (
            <div style={[
                this.styles.container
            ]}>
                <Video
                    attributes={{
                        loop: true
                    }}
                    loadedmetadata={this.onMetaDataLoaded}
                    timeupdate={this.onTimeUpdate}
                    ref={ref => this._video = ref}
                    sources={[
                        {
                            src: "https://wufe.me/sample.mp4",
                            type: "video/mp4"
                        }
                    ]}
                >
                    <div style={{
                        color: "white",
                        width: "100%",
                        height: "50px",
                        textShadow: "0px 1px 0px #777, 0px 0px 1px #777, 0px -1px 0px #555, 0px 0px -1px #555",
                        fontFamily: "Helvetica Neue, Segoe UI, sans-serif",
                        fontWeight: 300,
                        fontSize: "20px",
                        lineHeight: "50px",
                        boxSizing: "border-box",
                        padding: "0px 30px",
                        backgroundColor: "rgba(0,0,0,0.8)"

                    }}>
                        <span>React Video Component - Overlay</span>
                    </div>
                </Video>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById( "app" )
);
