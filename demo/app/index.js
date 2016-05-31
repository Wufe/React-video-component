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
            lineHeight: "100vh"
        }
    }

    componentWillMount(){

    }

    onTimeUpdate = event => {
        document.location.hash = parseInt(event.target.currentTime);
    }

    render(){
        return (
            <div style={[
                this.styles.container
            ]}>
                <Video
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
