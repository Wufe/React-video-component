import React from 'react';
import ReactDOM from 'react-dom';
import Radium from 'radium';
import Video from '../../build/components/video';

@Radium
class App extends React.Component{

    componentWillMount(){

    }

    render(){
        return (
            <div>
                <h1>App</h1>
                <h2>Video here:</h2>
                <Video />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById( "app" )
);
