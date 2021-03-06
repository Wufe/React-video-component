import React from 'react';
let icons = {
    play: (
        <svg width="24" height="24" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" fill="white"></path>
        </svg>
    ),
    pause: (
        <svg width="24" height="24" viewBox="0 0 24 24">
            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" fill="white"/>
        </svg>
    ),
    fullscreen: (
        <svg width="24" height="24" viewBox="0 0 24 24">
            <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" fill="white"/>
        </svg>
    ),
    defaultscreen: (
        <svg width="24" height="24" viewBox="0 0 24 24">
            <path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z" fill="white"/>
        </svg>
    ),
    volume: (
        <svg width="24" height="24" viewBox="0 0 24 24">
            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" fill="white"/>
        </svg>
    ),
    mute: (
        <svg width="24" height="24" viewBox="0 0 24 24">
            <path d="M7 9v6h4l5 5V4l-5 5H7z" fill="white"/>
        </svg>
    ),
};
export default icons;
