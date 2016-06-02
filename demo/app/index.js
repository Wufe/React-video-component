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
            textAlign: "center"
        }
    }

    componentWillMount(){

    }

    onTimeUpdate = event => {
        document.location.hash = parseInt(event.target.currentTime);
    }

    onMetaDataLoaded = event => {
        // setTimeout(() => {
        //     event.target.play();
        // }, 5000);
        window.video = event.target;
    }

    render(){
        return (
            <div style={[
                this.styles.container
            ]}>
                <Video
                    style={{
                        video: {

                        },
                        videoWrapper: {

                        },
                        controlsWrapper: {

                        }
                    }}
                    attributes={{
                        loop: true,
                        controls: true
                    }}
                    loadedmetadata={this.onMetaDataLoaded}
                    timeupdate={this.onTimeUpdate}
                    sources={[
                        {
                            src: "https://wufe.me/sample.mp4",
                            type: "video/mp4"
                        }
                    ]}
                />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById( "app" )
);
