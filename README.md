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
This is a test repo.
It should not be used in production.

### How to

The component can have every listener the origin video tag has.  
For example `<video sources={[url..]} metadataloaded={this._onLoaded.bind(this)}/>` calls the function _onLoaded, with the event as argument.  
The video is so accessible through `event.target`.

A list of events can be found [here](http://www.w3schools.com/tags/ref_av_dom.asp).

The `sources` prop must be an array of objects or strings, representing the url of the video.
If object is given, it must have `src` key representing the url.

Styles can also be injected defining the `style` prop.  

Standard video props can be injected into the component using the "attributes" prop, that requires an object defining them.
