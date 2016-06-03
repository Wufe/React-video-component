# React video component

### Development
```
npm install
npm run dev
```

### Utilization
```
import ReactVideoComponent from 'react-video-component';
```

### Warning
This repo should not be used in production.

### How to

The component can have every listener the origin video tag has.  
For example `<video sources={[url..]} metadataloaded={this._onLoaded.bind(this)}/>` calls the function _onLoaded, with the event as argument.
The video is so accessible through `event.target`.

A list of events can be found [here](http://www.w3schools.com/tags/ref_av_dom.asp).

Props:

| Property       | Type | Default | Description |
| :------------- | :------------- |
| sources | Array | [] | Defines sources for the video. Must be an array of objects or strings, representing the url of the video. If object is given, it must have `src` key representing the url. |
| style | Object | {} | Style object that will apply to video tag element. |
| className | String | "" | Name of the class that will apply to video tag element. |
| attributes | Object | {} | Standard props of the video element ( e.g. "loop", "controls" ). |
| controls | Bool | true | Show or hide controls. |
| width | String | "auto" | Width of the video element. |
| height | String | "auto" | Height of the video element. |
| autohide | Bool | true | Automatically hide controls and overlay ( if "fixedoverlay" set to false ) |
| overlay | Bool | true | Show or hide overlay. |
| fixedoverlay | Bool | false | Disable autohide for overlay. |

### Known issues

+ Weird IE render issues
+ Fullscreen mode is not detected
