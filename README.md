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

<table>
    <thead>
        <tr>
            <th>Property</th>
            <th>Type</th>
            <th>Default</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>sources</td>
            <td>Array</td>
            <td>[]</td>
            <td>Defines sources for the video. Must be an array of objects or strings, representing the url of the video. If object is given, it must have `src` key representing the url.</td>
        </tr>
        <tr>
            <td>style</td>
            <td>Object</td>
            <td>{}</td>
            <td>Style object that will apply to video tag element.</td>
        </tr>
        <tr>
            <td>className</td>
            <td>String</td>
            <td>""</td>
            <td>Name of the class that will apply to video tag element.</td>
        </tr>
        <tr>
            <td>attributes</td>
            <td>Object</td>
            <td>{}</td>
            <td>Standard props of the video element ( e.g. "loop", "controls" ).</td>
        </tr>
        <tr>
            <td>controls</td>
            <td>Bool</td>
            <td>true</td>
            <td>Show or hide controls.</td>
        </tr>
        <tr>
            <td>autohide</td>
            <td>Bool</td>
            <td>true</td>
            <td>Automatically hide controls and overlay ( if "fixedoverlay" set to false ) when playing.</td>
        </tr>
        <tr>
            <td>autohidecursor</td>
            <td>Bool</td>
            <td>true</td>
            <td>Automatically hide cursor when playing.</td>
        </tr>
        <tr>
            <td>overlay</td>
            <td>Bool</td>
            <td>true</td>
            <td>Show or hide overlay.</td>
        </tr>
        <tr>
            <td>fixedoverlay</td>
            <td>Bool</td>
            <td>false</td>
            <td>Disable autohide for overlay.</td>
        </tr>
        <tr>
            <td>shortcuts</td>
            <td>Bool</td>
            <td>true</td>
            <td>Enable or disable keyboard shortcuts.</td>
        </tr>
        <tr>
            <td>tabIndex</td>
            <td>String</td>
            <td>"1"</td>
            <td>Tab index of the wrapper element.</td>
        </tr>
        <tr>
            <td>width</td>
            <td>String</td>
            <td>"auto"</td>
            <td>Width of the video element.</td>
        </tr>
        <tr>
            <td>height</td>
            <td>String</td>
            <td>"100%"</td>
            <td>Height of the video element.</td>
        </tr>
    </tbody>
</table>

### Known issues

+ Weird IE render issues. Custom controls will be disabled.
