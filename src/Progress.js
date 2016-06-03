import React from 'react';
import VideoStyle from './style/video.scss';

class Progress extends React.Component{

    constructor(){
        super();
    }

    componentWillMount(){
        let colors = this.props.colors;
        if( !colors.start || !colors.end || !colors.back )
            console.error( "Colors prop must have \"start\", \"end\" and \"back\" attributes." );
    }

    componentWillUnmount(){}

    render(){
        let value = 100/parseInt(this.props.max)*this.props.value;
        let style = {
            backgroundImage: `linear-gradient(to right, ${this.props.colors.start} 0%, ${this.props.colors.end} ${value}%, ${this.props.colors.back} ${value}%, ${this.props.colors.back} )`
        };
        return (
            <input
                type="range"
                step={this.props.step}
                min={this.props.min}
                max={this.props.max}
                value={this.props.value}
                className={this.props.className}
                style={style}
                ref={ ref => this._progress = ref }
                {...this.props.attributes}
            />
        );
    }

}

Progress.propTypes = {
    step: React.PropTypes.oneOfType([
        React.PropTypes.number,
        React.PropTypes.string
    ]),
    min: React.PropTypes.oneOfType([
        React.PropTypes.number,
        React.PropTypes.string
    ]),
    max: React.PropTypes.oneOfType([
        React.PropTypes.number,
        React.PropTypes.string
    ]),
    value: React.PropTypes.oneOfType([
        React.PropTypes.number,
        React.PropTypes.string
    ]),
    className: React.PropTypes.string,
    // Standard html tag attributes
    attributes: React.PropTypes.object,
    // Color pattern object
    colors: React.PropTypes.object
}

Progress.defaultProps = {
    step: 0.1,
    min: 0,
    max: 100,
    value: 0,
    className: "",
    attributes: {},
    // Start and End produce a linear from left to right on the track of the progress bar
    // Back is the color for the right side of the track
    colors: {
        start: "#A90329",
        end: "#6D0019",
        back: "rgba( 0, 0, 0, 0.4 )"
    }
}

export default Progress;
