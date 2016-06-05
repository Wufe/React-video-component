(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _icons = __webpack_require__(1);
	
	var _icons2 = _interopRequireDefault(_icons);
	
	var _Progress = __webpack_require__(39);
	
	var _Progress2 = _interopRequireDefault(_Progress);
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _VideoActions = __webpack_require__(40);
	
	var _VideoActions2 = _interopRequireDefault(_VideoActions);
	
	var _VideoEventHandler = __webpack_require__(41);
	
	var _VideoEventHandler2 = _interopRequireDefault(_VideoEventHandler);
	
	var _video = __webpack_require__(42);
	
	var _video2 = _interopRequireDefault(_video);
	
	var _VideoUtils = __webpack_require__(46);
	
	var _VideoUtils2 = _interopRequireDefault(_VideoUtils);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Video = function (_React$Component) {
	    _inherits(Video, _React$Component);
	
	    function Video() {
	        _classCallCheck(this, Video);
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Video).call(this));
	
	        _this.onMetaDataLoaded = function (e) {
	            var isIE = _this.videoUtils.isIE();
	            _this.setState({
	                isIE: isIE
	            }, function () {
	                if (isIE) {
	                    _this.videoUtils.disableControls();
	                    _this.videoUtils.moveOverlay();
	                } else {
	                    _this.videoUtils.enableControls();
	                }
	                _this.videoUtils.enableOverlay();
	                _this.setState({ loaded: true });
	            });
	        };
	
	        _this.onTimeUpdate = function (e) {
	            var _e$target = e.target;
	            var currentTime = _e$target.currentTime;
	            var duration = _e$target.duration;
	
	            var progress = _this.videoUtils.calculatePercentage(currentTime, duration);
	            var time = _this.videoUtils.formatTimeFromSeconds(currentTime);
	            _this.setState({
	                progress: progress,
	                time: time,
	                currentTime: currentTime
	            });
	        };
	
	        _this.onProgressChange = function (e) {
	            var progress = parseFloat(e.target.value);
	            _this.setState({
	                progress: progress
	            }, function () {
	                var duration = _this._video.duration;
	
	                var time = progress * duration / 100;
	                _this._video.currentTime = time;
	            });
	        };
	
	        _this.onVolumeSet = function (e) {
	            var volume = parseFloat(e.target.value);
	            _this.videoActions.setVolume(volume);
	        };
	
	        _this.checkBuffer = function () {
	            var buffer = _this.videoUtils.calculateBuffer();
	            _this.setState({
	                buffer: buffer
	            });
	        };
	
	        _this.referenceVideoTag = function (video) {
	            _this._video = video;
	            _this.eventHandler.attachListeners();
	            _this.eventHandler.createListeners();
	            _this.bufferCheckTimer = setInterval(_this.checkBuffer, 500);
	            _this.fullscreenCheckTimer = setInterval(_this.checkFullscreen, 500);
	        };
	
	        _this.checkFullscreen = function () {
	            var fullscreen = _this.videoUtils.isFullscreen();
	            if (fullscreen !== undefined) {
	                _this.setState({ fullscreen: fullscreen });
	            }
	        };
	
	        _this.onMouseMove = function (e) {
	            _this.triggerMouseMove();
	        };
	
	        _this.triggerMouseMove = function () {
	            if (_this.state.loaded) {
	                if (!_this.props.autohide) return;
	                if (_this.props.controls && !_this.props.attributes.controls) _this._controlsWrapper.style.opacity = "1";
	                if (_this.props.overlay) _this._overlay.style.opacity = "1";
	                _this._wrapper.style.cursor = "auto";
	                if (_this.hideTimer) clearTimeout(_this.hideTimer);
	                _this.hideTimer = setTimeout(function () {
	                    if (_this.state.playing) {
	                        _this._controlsWrapper.style.opacity = "0";
	                        if (_this.props.overlay && !_this.props.fixedoverlay) _this._overlay.style.opacity = "0";
	                        if (_this.props.autohidecursor) _this._wrapper.style.cursor = "none";
	                    }
	                }, 3000);
	            }
	        };
	
	        _this.onPlay = function (e) {
	            _this.setState({
	                playing: true
	            }, function () {
	                _this.triggerMouseMove();
	            });
	        };
	
	        _this.onPause = function (e) {
	            _this.setState({
	                playing: false
	            }, function () {
	                _this.triggerMouseMove();
	            });
	        };
	
	        _this.onVolumeChange = function (e) {
	            var volume = parseInt(e.target.volume * 100) / 100;
	            _this.setState({
	                volume: volume
	            });
	        };
	
	        _this.onFullscreenSet = function (e) {
	            _this.videoActions.goFullscreen(_this._wrapper);
	        };
	
	        _this.onDefaultscreenSet = function (e) {
	            _this.videoActions.exitFullscreen();
	        };
	
	        _this.onWheel = function (e) {
	            if (e.deltaY < 0) {
	                _this.videoActions.volumeUp();
	            } else {
	                _this.videoActions.volumeDown();
	            }
	        };
	
	        _this.onKeyDown = function (e) {
	            if (_this.props.shortcuts) {
	                var keyCode = e.keyCode;
	                switch (keyCode) {
	                    case 32:
	                        {
	                            // Space
	                            _this.videoActions.togglePlay();
	                            break;
	                        }
	                    case 39:
	                        {
	                            _this.videoActions.forward(); // Right arrow
	                            break;
	                        }
	                    case 37:
	                        {
	                            _this.videoActions.back(); // Left arrow
	                            break;
	                        }
	                    case 38:
	                        {
	                            _this.videoActions.volumeUp(); // Up arrow
	                            break;
	                        }
	                    case 40:
	                        {
	                            _this.videoActions.volumeDown(); // Down arrow
	                            break;
	                        }
	                    case 70:
	                        {
	                            // F
	                            _this.videoActions.toggleFullscreen();
	                            break;
	                        }
	                    case 77:
	                        {
	                            _this.videoActions.toggleMute();
	                            break;
	                        }
	                }
	            }
	        };
	
	        _this.eventHandler = new _VideoEventHandler2.default(_this);
	        _this.videoUtils = new _VideoUtils2.default(_this);
	        _this.videoActions = new _VideoActions2.default(_this);
	        _this.state = {
	            buffer: 0,
	            progress: 0,
	            volume: 1,
	            fullscreen: false,
	            time: "00:00:00",
	            playing: false,
	            loaded: false,
	            isIE: false,
	            currentTime: 0
	        };
	        _this.bufferCheckTimer = {};
	        _this.fullscreenCheckTimer = {};
	        return _this;
	    }
	
	    _createClass(Video, [{
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            var video = this._video;
	            if (!video) return;
	            this.eventHandler.removeListeners();
	            this.eventHandler.detachListeners();
	            clearInterval(this.bufferCheckTimer);
	            clearInterval(this.fullscreenCheckTimer);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;
	
	            var sources = this.props.sources.map(function (source) {
	                if (typeof source == "string") {
	                    return { src: source };
	                } else if ((typeof source === 'undefined' ? 'undefined' : _typeof(source)) == "object") {
	                    if (source.src === undefined || typeof source.src != "string") {
	                        console.error("Source must be a string or an object containing a 'src' key.\n", source);
	                    }
	                    return source;
	                }
	            });
	
	            var videoProps = this.props.attributes;
	            if (this.state.isIE) {
	                videoProps.controls = true;
	            }
	
	            return _react2.default.createElement(
	                'div',
	                {
	                    className: 'reactVideoWrapper',
	                    onMouseMove: this.onMouseMove,
	                    tabIndex: this.props.tabIndex,
	                    onKeyDown: this.onKeyDown,
	                    onWheel: this.onWheel,
	                    ref: function ref(_ref10) {
	                        return _this2._wrapper = _ref10;
	                    }
	                },
	                _react2.default.createElement(
	                    'div',
	                    {
	                        className: 'overlayContainer',
	                        onMouseMove: this.onMouseMove,
	                        onDoubleClick: this.videoActions.toggleFullscreen,
	                        ref: function ref(_ref) {
	                            return _this2._overlay = _ref;
	                        },
	                        style: {
	                            display: this.props.overlay ? "block" : "none"
	                        }
	                    },
	                    this.props.children
	                ),
	                _react2.default.createElement(
	                    'video',
	                    _extends({
	                        className: '' + this.props.className,
	                        onMouseMove: this.onMouseMove,
	                        onDoubleClick: this.videoActions.toggleFullscreen,
	                        ref: this.referenceVideoTag,
	                        style: this.props.style,
	                        width: this.props.width,
	                        height: this.props.height
	                    }, videoProps),
	                    sources.map(function (s, i) {
	                        return _react2.default.createElement('source', { key: i, src: s.src, type: s.type || null });
	                    })
	                ),
	                _react2.default.createElement(
	                    'div',
	                    {
	                        ref: function ref(_ref9) {
	                            return _this2._controlsWrapper = _ref9;
	                        },
	                        style: this.props.style.controlsWrapper || {},
	                        className: 'controlsWrapper'
	                    },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'seekBar' },
	                        _react2.default.createElement(_Progress2.default, {
	                            ref: function ref(_ref2) {
	                                return _this2._progress = _ref2;
	                            },
	                            value: this.state.progress,
	                            className: 'progress',
	                            attributes: {
	                                onChange: this.onProgressChange
	                            }
	                        }),
	                        _react2.default.createElement(_Progress2.default, {
	                            ref: function ref(_ref3) {
	                                return _this2._buffer = _ref3;
	                            },
	                            value: this.state.buffer,
	                            className: 'buffer',
	                            colors: {
	                                start: "#777",
	                                end: "#666",
	                                back: "#000"
	                            },
	                            attributes: {
	                                readOnly: true
	                            }
	                        })
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        {
	                            className: 'playButton',
	                            ref: function ref(_ref4) {
	                                return _this2._play = _ref4;
	                            },
	                            onClick: this.play,
	                            style: {
	                                display: this.state.playing ? "none" : "block"
	                            }
	                        },
	                        _icons2.default.play
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        {
	                            className: 'pauseButton',
	                            ref: function ref(_ref5) {
	                                return _this2._pause = _ref5;
	                            },
	                            onClick: this.pause,
	                            style: {
	                                display: this.state.playing ? "block" : "none"
	                            }
	                        },
	                        _icons2.default.pause
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        {
	                            className: 'muteButton',
	                            ref: function ref(_ref6) {
	                                return _this2._muteButton = _ref6;
	                            },
	                            onClick: this.mute
	                        },
	                        _icons2.default.volume
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        {
	                            className: 'unmuteButton',
	                            ref: function ref(_ref7) {
	                                return _this2._unmuteButton = _ref7;
	                            },
	                            onClick: this.unmute
	                        },
	                        _icons2.default.mute
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'volumeBar' },
	                        _react2.default.createElement(_Progress2.default, {
	                            min: '0',
	                            max: '1',
	                            step: 'any',
	                            ref: function ref(_ref8) {
	                                return _this2._volume = _ref8;
	                            },
	                            value: this.state.volume,
	                            attributes: {
	                                onChange: this.onVolumeSet
	                            },
	                            colors: {
	                                start: "#FFF",
	                                end: "#FFF",
	                                back: "rgba( 0, 0, 0, 0.3 )"
	                            },
	                            className: 'volume'
	                        })
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        {
	                            className: 'time'
	                        },
	                        this.state.time
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        {
	                            className: 'fullscreenButton',
	                            onClick: this.onFullscreenSet,
	                            style: {
	                                display: this.state.fullscren ? "none" : "block"
	                            }
	                        },
	                        _icons2.default.fullscreen
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        {
	                            className: 'defaultscreenButton',
	                            onClick: this.onDefaultscreenSet,
	                            style: {
	                                display: this.state.fullscreen ? "block" : "none"
	                            }
	                        },
	                        _icons2.default.defaultscreen
	                    )
	                )
	            );
	        }
	    }]);
	
	    return Video;
	}(_react2.default.Component);
	
	;
	
	Video.propTypes = {
	    sources: _react2.default.PropTypes.array.isRequired,
	    style: _react2.default.PropTypes.object,
	    width: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number]),
	    height: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number]),
	    className: _react2.default.PropTypes.string,
	    attributes: _react2.default.PropTypes.object,
	    controls: _react2.default.PropTypes.bool,
	    // Autohide controls and overlay
	    autohide: _react2.default.PropTypes.bool,
	    autohidecursor: _react2.default.PropTypes.bool,
	    // Overlay enabled
	    overlay: _react2.default.PropTypes.bool,
	    // Overlay does not autohide
	    fixedoverlay: _react2.default.PropTypes.bool,
	    // Enable or disable keyboard shortcuts
	    shortcuts: _react2.default.PropTypes.bool,
	    tabIndex: _react2.default.PropTypes.string
	};
	
	Video.defaultProps = {
	    sources: [],
	    style: {},
	    className: "",
	    attributes: {},
	    controls: true,
	    autohide: true,
	    autohidecursor: true,
	    overlay: true,
	    fixedoverlay: false,
	    width: "auto",
	    height: "100%",
	    shortcuts: true,
	    tabIndex: "1"
	};
	
	exports.default = Video;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var icons = {
	    play: _react2.default.createElement(
	        "svg",
	        { width: "24", height: "24", viewBox: "0 0 24 24" },
	        _react2.default.createElement("path", { d: "M8 5v14l11-7z", fill: "white" })
	    ),
	    pause: _react2.default.createElement(
	        "svg",
	        { width: "24", height: "24", viewBox: "0 0 24 24" },
	        _react2.default.createElement("path", { d: "M6 19h4V5H6v14zm8-14v14h4V5h-4z", fill: "white" })
	    ),
	    fullscreen: _react2.default.createElement(
	        "svg",
	        { width: "24", height: "24", viewBox: "0 0 24 24" },
	        _react2.default.createElement("path", { d: "M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z", fill: "white" })
	    ),
	    defaultscreen: _react2.default.createElement(
	        "svg",
	        { width: "24", height: "24", viewBox: "0 0 24 24" },
	        _react2.default.createElement("path", { d: "M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z", fill: "white" })
	    ),
	    volume: _react2.default.createElement(
	        "svg",
	        { width: "24", height: "24", viewBox: "0 0 24 24" },
	        _react2.default.createElement("path", { d: "M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z", fill: "white" })
	    ),
	    mute: _react2.default.createElement(
	        "svg",
	        { width: "24", height: "24", viewBox: "0 0 24 24" },
	        _react2.default.createElement("path", { d: "M7 9v6h4l5 5V4l-5 5H7z", fill: "white" })
	    )
	};
	exports.default = icons;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(3);


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule React
	 */
	
	'use strict';
	
	var _assign = __webpack_require__(5);
	
	var ReactChildren = __webpack_require__(6);
	var ReactComponent = __webpack_require__(17);
	var ReactClass = __webpack_require__(28);
	var ReactDOMFactories = __webpack_require__(33);
	var ReactElement = __webpack_require__(9);
	var ReactElementValidator = __webpack_require__(34);
	var ReactPropTypes = __webpack_require__(36);
	var ReactVersion = __webpack_require__(37);
	
	var onlyChild = __webpack_require__(38);
	var warning = __webpack_require__(11);
	
	var createElement = ReactElement.createElement;
	var createFactory = ReactElement.createFactory;
	var cloneElement = ReactElement.cloneElement;
	
	if (process.env.NODE_ENV !== 'production') {
	  createElement = ReactElementValidator.createElement;
	  createFactory = ReactElementValidator.createFactory;
	  cloneElement = ReactElementValidator.cloneElement;
	}
	
	var __spread = _assign;
	
	if (process.env.NODE_ENV !== 'production') {
	  var warned = false;
	  __spread = function () {
	    process.env.NODE_ENV !== 'production' ? warning(warned, 'React.__spread is deprecated and should not be used. Use ' + 'Object.assign directly or another helper function with similar ' + 'semantics. You may be seeing this warning due to your compiler. ' + 'See https://fb.me/react-spread-deprecation for more details.') : void 0;
	    warned = true;
	    return _assign.apply(null, arguments);
	  };
	}
	
	var React = {
	
	  // Modern
	
	  Children: {
	    map: ReactChildren.map,
	    forEach: ReactChildren.forEach,
	    count: ReactChildren.count,
	    toArray: ReactChildren.toArray,
	    only: onlyChild
	  },
	
	  Component: ReactComponent,
	
	  createElement: createElement,
	  cloneElement: cloneElement,
	  isValidElement: ReactElement.isValidElement,
	
	  // Classic
	
	  PropTypes: ReactPropTypes,
	  createClass: ReactClass.createClass,
	  createFactory: createFactory,
	  createMixin: function (mixin) {
	    // Currently a noop. Will be used to validate and trace mixins.
	    return mixin;
	  },
	
	  // This looks DOM specific but these are actually isomorphic helpers
	  // since they are just generating DOM strings.
	  DOM: ReactDOMFactories,
	
	  version: ReactVersion,
	
	  // Deprecated hook for JSX spread, don't use this for anything.
	  __spread: __spread
	};
	
	module.exports = React;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 4 */
/***/ function(module, exports) {

	// shim for using process in browser
	
	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';
	/* eslint-disable no-unused-vars */
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;
	
	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}
	
		return Object(val);
	}
	
	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}
	
			// Detect buggy property enumeration order in older V8 versions.
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}
	
			return true;
		} catch (e) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}
	
	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;
	
		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);
	
			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}
	
			if (Object.getOwnPropertySymbols) {
				symbols = Object.getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}
	
		return to;
	};


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactChildren
	 */
	
	'use strict';
	
	var PooledClass = __webpack_require__(7);
	var ReactElement = __webpack_require__(9);
	
	var emptyFunction = __webpack_require__(12);
	var traverseAllChildren = __webpack_require__(14);
	
	var twoArgumentPooler = PooledClass.twoArgumentPooler;
	var fourArgumentPooler = PooledClass.fourArgumentPooler;
	
	var userProvidedKeyEscapeRegex = /\/+/g;
	function escapeUserProvidedKey(text) {
	  return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
	}
	
	/**
	 * PooledClass representing the bookkeeping associated with performing a child
	 * traversal. Allows avoiding binding callbacks.
	 *
	 * @constructor ForEachBookKeeping
	 * @param {!function} forEachFunction Function to perform traversal with.
	 * @param {?*} forEachContext Context to perform context with.
	 */
	function ForEachBookKeeping(forEachFunction, forEachContext) {
	  this.func = forEachFunction;
	  this.context = forEachContext;
	  this.count = 0;
	}
	ForEachBookKeeping.prototype.destructor = function () {
	  this.func = null;
	  this.context = null;
	  this.count = 0;
	};
	PooledClass.addPoolingTo(ForEachBookKeeping, twoArgumentPooler);
	
	function forEachSingleChild(bookKeeping, child, name) {
	  var func = bookKeeping.func;
	  var context = bookKeeping.context;
	
	  func.call(context, child, bookKeeping.count++);
	}
	
	/**
	 * Iterates through children that are typically specified as `props.children`.
	 *
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.foreach
	 *
	 * The provided forEachFunc(child, index) will be called for each
	 * leaf child.
	 *
	 * @param {?*} children Children tree container.
	 * @param {function(*, int)} forEachFunc
	 * @param {*} forEachContext Context for forEachContext.
	 */
	function forEachChildren(children, forEachFunc, forEachContext) {
	  if (children == null) {
	    return children;
	  }
	  var traverseContext = ForEachBookKeeping.getPooled(forEachFunc, forEachContext);
	  traverseAllChildren(children, forEachSingleChild, traverseContext);
	  ForEachBookKeeping.release(traverseContext);
	}
	
	/**
	 * PooledClass representing the bookkeeping associated with performing a child
	 * mapping. Allows avoiding binding callbacks.
	 *
	 * @constructor MapBookKeeping
	 * @param {!*} mapResult Object containing the ordered map of results.
	 * @param {!function} mapFunction Function to perform mapping with.
	 * @param {?*} mapContext Context to perform mapping with.
	 */
	function MapBookKeeping(mapResult, keyPrefix, mapFunction, mapContext) {
	  this.result = mapResult;
	  this.keyPrefix = keyPrefix;
	  this.func = mapFunction;
	  this.context = mapContext;
	  this.count = 0;
	}
	MapBookKeeping.prototype.destructor = function () {
	  this.result = null;
	  this.keyPrefix = null;
	  this.func = null;
	  this.context = null;
	  this.count = 0;
	};
	PooledClass.addPoolingTo(MapBookKeeping, fourArgumentPooler);
	
	function mapSingleChildIntoContext(bookKeeping, child, childKey) {
	  var result = bookKeeping.result;
	  var keyPrefix = bookKeeping.keyPrefix;
	  var func = bookKeeping.func;
	  var context = bookKeeping.context;
	
	
	  var mappedChild = func.call(context, child, bookKeeping.count++);
	  if (Array.isArray(mappedChild)) {
	    mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, emptyFunction.thatReturnsArgument);
	  } else if (mappedChild != null) {
	    if (ReactElement.isValidElement(mappedChild)) {
	      mappedChild = ReactElement.cloneAndReplaceKey(mappedChild,
	      // Keep both the (mapped) and old keys if they differ, just as
	      // traverseAllChildren used to do for objects as children
	      keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
	    }
	    result.push(mappedChild);
	  }
	}
	
	function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
	  var escapedPrefix = '';
	  if (prefix != null) {
	    escapedPrefix = escapeUserProvidedKey(prefix) + '/';
	  }
	  var traverseContext = MapBookKeeping.getPooled(array, escapedPrefix, func, context);
	  traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
	  MapBookKeeping.release(traverseContext);
	}
	
	/**
	 * Maps children that are typically specified as `props.children`.
	 *
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.map
	 *
	 * The provided mapFunction(child, key, index) will be called for each
	 * leaf child.
	 *
	 * @param {?*} children Children tree container.
	 * @param {function(*, int)} func The map function.
	 * @param {*} context Context for mapFunction.
	 * @return {object} Object containing the ordered map of results.
	 */
	function mapChildren(children, func, context) {
	  if (children == null) {
	    return children;
	  }
	  var result = [];
	  mapIntoWithKeyPrefixInternal(children, result, null, func, context);
	  return result;
	}
	
	function forEachSingleChildDummy(traverseContext, child, name) {
	  return null;
	}
	
	/**
	 * Count the number of children that are typically specified as
	 * `props.children`.
	 *
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.count
	 *
	 * @param {?*} children Children tree container.
	 * @return {number} The number of children.
	 */
	function countChildren(children, context) {
	  return traverseAllChildren(children, forEachSingleChildDummy, null);
	}
	
	/**
	 * Flatten a children object (typically specified as `props.children`) and
	 * return an array with appropriately re-keyed children.
	 *
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.toarray
	 */
	function toArray(children) {
	  var result = [];
	  mapIntoWithKeyPrefixInternal(children, result, null, emptyFunction.thatReturnsArgument);
	  return result;
	}
	
	var ReactChildren = {
	  forEach: forEachChildren,
	  map: mapChildren,
	  mapIntoWithKeyPrefixInternal: mapIntoWithKeyPrefixInternal,
	  count: countChildren,
	  toArray: toArray
	};
	
	module.exports = ReactChildren;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule PooledClass
	 */
	
	'use strict';
	
	var invariant = __webpack_require__(8);
	
	/**
	 * Static poolers. Several custom versions for each potential number of
	 * arguments. A completely generic pooler is easy to implement, but would
	 * require accessing the `arguments` object. In each of these, `this` refers to
	 * the Class itself, not an instance. If any others are needed, simply add them
	 * here, or in their own files.
	 */
	var oneArgumentPooler = function (copyFieldsFrom) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, copyFieldsFrom);
	    return instance;
	  } else {
	    return new Klass(copyFieldsFrom);
	  }
	};
	
	var twoArgumentPooler = function (a1, a2) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, a1, a2);
	    return instance;
	  } else {
	    return new Klass(a1, a2);
	  }
	};
	
	var threeArgumentPooler = function (a1, a2, a3) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, a1, a2, a3);
	    return instance;
	  } else {
	    return new Klass(a1, a2, a3);
	  }
	};
	
	var fourArgumentPooler = function (a1, a2, a3, a4) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, a1, a2, a3, a4);
	    return instance;
	  } else {
	    return new Klass(a1, a2, a3, a4);
	  }
	};
	
	var fiveArgumentPooler = function (a1, a2, a3, a4, a5) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, a1, a2, a3, a4, a5);
	    return instance;
	  } else {
	    return new Klass(a1, a2, a3, a4, a5);
	  }
	};
	
	var standardReleaser = function (instance) {
	  var Klass = this;
	  !(instance instanceof Klass) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Trying to release an instance into a pool of a different type.') : invariant(false) : void 0;
	  instance.destructor();
	  if (Klass.instancePool.length < Klass.poolSize) {
	    Klass.instancePool.push(instance);
	  }
	};
	
	var DEFAULT_POOL_SIZE = 10;
	var DEFAULT_POOLER = oneArgumentPooler;
	
	/**
	 * Augments `CopyConstructor` to be a poolable class, augmenting only the class
	 * itself (statically) not adding any prototypical fields. Any CopyConstructor
	 * you give this may have a `poolSize` property, and will look for a
	 * prototypical `destructor` on instances (optional).
	 *
	 * @param {Function} CopyConstructor Constructor that can be used to reset.
	 * @param {Function} pooler Customizable pooler.
	 */
	var addPoolingTo = function (CopyConstructor, pooler) {
	  var NewKlass = CopyConstructor;
	  NewKlass.instancePool = [];
	  NewKlass.getPooled = pooler || DEFAULT_POOLER;
	  if (!NewKlass.poolSize) {
	    NewKlass.poolSize = DEFAULT_POOL_SIZE;
	  }
	  NewKlass.release = standardReleaser;
	  return NewKlass;
	};
	
	var PooledClass = {
	  addPoolingTo: addPoolingTo,
	  oneArgumentPooler: oneArgumentPooler,
	  twoArgumentPooler: twoArgumentPooler,
	  threeArgumentPooler: threeArgumentPooler,
	  fourArgumentPooler: fourArgumentPooler,
	  fiveArgumentPooler: fiveArgumentPooler
	};
	
	module.exports = PooledClass;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	
	'use strict';
	
	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */
	
	function invariant(condition, format, a, b, c, d, e, f) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }
	
	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	      error.name = 'Invariant Violation';
	    }
	
	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	}
	
	module.exports = invariant;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactElement
	 */
	
	'use strict';
	
	var _assign = __webpack_require__(5);
	
	var ReactCurrentOwner = __webpack_require__(10);
	
	var warning = __webpack_require__(11);
	var canDefineProperty = __webpack_require__(13);
	
	// The Symbol used to tag the ReactElement type. If there is no native Symbol
	// nor polyfill, then a plain number is used for performance.
	var REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol['for'] && Symbol['for']('react.element') || 0xeac7;
	
	var RESERVED_PROPS = {
	  key: true,
	  ref: true,
	  __self: true,
	  __source: true
	};
	
	var specialPropKeyWarningShown, specialPropRefWarningShown;
	
	/**
	 * Factory method to create a new React element. This no longer adheres to
	 * the class pattern, so do not use new to call it. Also, no instanceof check
	 * will work. Instead test $$typeof field against Symbol.for('react.element') to check
	 * if something is a React Element.
	 *
	 * @param {*} type
	 * @param {*} key
	 * @param {string|object} ref
	 * @param {*} self A *temporary* helper to detect places where `this` is
	 * different from the `owner` when React.createElement is called, so that we
	 * can warn. We want to get rid of owner and replace string `ref`s with arrow
	 * functions, and as long as `this` and owner are the same, there will be no
	 * change in behavior.
	 * @param {*} source An annotation object (added by a transpiler or otherwise)
	 * indicating filename, line number, and/or other information.
	 * @param {*} owner
	 * @param {*} props
	 * @internal
	 */
	var ReactElement = function (type, key, ref, self, source, owner, props) {
	  var element = {
	    // This tag allow us to uniquely identify this as a React Element
	    $$typeof: REACT_ELEMENT_TYPE,
	
	    // Built-in properties that belong on the element
	    type: type,
	    key: key,
	    ref: ref,
	    props: props,
	
	    // Record the component responsible for creating this element.
	    _owner: owner
	  };
	
	  if (process.env.NODE_ENV !== 'production') {
	    // The validation flag is currently mutative. We put it on
	    // an external backing store so that we can freeze the whole object.
	    // This can be replaced with a WeakMap once they are implemented in
	    // commonly used development environments.
	    element._store = {};
	
	    // To make comparing ReactElements easier for testing purposes, we make
	    // the validation flag non-enumerable (where possible, which should
	    // include every environment we run tests in), so the test framework
	    // ignores it.
	    if (canDefineProperty) {
	      Object.defineProperty(element._store, 'validated', {
	        configurable: false,
	        enumerable: false,
	        writable: true,
	        value: false
	      });
	      // self and source are DEV only properties.
	      Object.defineProperty(element, '_self', {
	        configurable: false,
	        enumerable: false,
	        writable: false,
	        value: self
	      });
	      // Two elements created in two different places should be considered
	      // equal for testing purposes and therefore we hide it from enumeration.
	      Object.defineProperty(element, '_source', {
	        configurable: false,
	        enumerable: false,
	        writable: false,
	        value: source
	      });
	    } else {
	      element._store.validated = false;
	      element._self = self;
	      element._source = source;
	    }
	    if (Object.freeze) {
	      Object.freeze(element.props);
	      Object.freeze(element);
	    }
	  }
	
	  return element;
	};
	
	/**
	 * Create and return a new ReactElement of the given type.
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.createelement
	 */
	ReactElement.createElement = function (type, config, children) {
	  var propName;
	
	  // Reserved names are extracted
	  var props = {};
	
	  var key = null;
	  var ref = null;
	  var self = null;
	  var source = null;
	
	  if (config != null) {
	    if (process.env.NODE_ENV !== 'production') {
	      process.env.NODE_ENV !== 'production' ? warning(
	      /* eslint-disable no-proto */
	      config.__proto__ == null || config.__proto__ === Object.prototype,
	      /* eslint-enable no-proto */
	      'React.createElement(...): Expected props argument to be a plain object. ' + 'Properties defined in its prototype chain will be ignored.') : void 0;
	      ref = !config.hasOwnProperty('ref') || Object.getOwnPropertyDescriptor(config, 'ref').get ? null : config.ref;
	      key = !config.hasOwnProperty('key') || Object.getOwnPropertyDescriptor(config, 'key').get ? null : '' + config.key;
	    } else {
	      ref = config.ref === undefined ? null : config.ref;
	      key = config.key === undefined ? null : '' + config.key;
	    }
	    self = config.__self === undefined ? null : config.__self;
	    source = config.__source === undefined ? null : config.__source;
	    // Remaining properties are added to a new props object
	    for (propName in config) {
	      if (config.hasOwnProperty(propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
	        props[propName] = config[propName];
	      }
	    }
	  }
	
	  // Children can be more than one argument, and those are transferred onto
	  // the newly allocated props object.
	  var childrenLength = arguments.length - 2;
	  if (childrenLength === 1) {
	    props.children = children;
	  } else if (childrenLength > 1) {
	    var childArray = Array(childrenLength);
	    for (var i = 0; i < childrenLength; i++) {
	      childArray[i] = arguments[i + 2];
	    }
	    props.children = childArray;
	  }
	
	  // Resolve default props
	  if (type && type.defaultProps) {
	    var defaultProps = type.defaultProps;
	    for (propName in defaultProps) {
	      if (props[propName] === undefined) {
	        props[propName] = defaultProps[propName];
	      }
	    }
	  }
	  if (process.env.NODE_ENV !== 'production') {
	    // Create dummy `key` and `ref` property to `props` to warn users
	    // against its use
	    if (typeof props.$$typeof === 'undefined' || props.$$typeof !== REACT_ELEMENT_TYPE) {
	      if (!props.hasOwnProperty('key')) {
	        Object.defineProperty(props, 'key', {
	          get: function () {
	            if (!specialPropKeyWarningShown) {
	              specialPropKeyWarningShown = true;
	              process.env.NODE_ENV !== 'production' ? warning(false, '%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', typeof type === 'function' && 'displayName' in type ? type.displayName : 'Element') : void 0;
	            }
	            return undefined;
	          },
	          configurable: true
	        });
	      }
	      if (!props.hasOwnProperty('ref')) {
	        Object.defineProperty(props, 'ref', {
	          get: function () {
	            if (!specialPropRefWarningShown) {
	              specialPropRefWarningShown = true;
	              process.env.NODE_ENV !== 'production' ? warning(false, '%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', typeof type === 'function' && 'displayName' in type ? type.displayName : 'Element') : void 0;
	            }
	            return undefined;
	          },
	          configurable: true
	        });
	      }
	    }
	  }
	  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
	};
	
	/**
	 * Return a function that produces ReactElements of a given type.
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.createfactory
	 */
	ReactElement.createFactory = function (type) {
	  var factory = ReactElement.createElement.bind(null, type);
	  // Expose the type on the factory and the prototype so that it can be
	  // easily accessed on elements. E.g. `<Foo />.type === Foo`.
	  // This should not be named `constructor` since this may not be the function
	  // that created the element, and it may not even be a constructor.
	  // Legacy hook TODO: Warn if this is accessed
	  factory.type = type;
	  return factory;
	};
	
	ReactElement.cloneAndReplaceKey = function (oldElement, newKey) {
	  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
	
	  return newElement;
	};
	
	/**
	 * Clone and return a new ReactElement using element as the starting point.
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.cloneelement
	 */
	ReactElement.cloneElement = function (element, config, children) {
	  var propName;
	
	  // Original props are copied
	  var props = _assign({}, element.props);
	
	  // Reserved names are extracted
	  var key = element.key;
	  var ref = element.ref;
	  // Self is preserved since the owner is preserved.
	  var self = element._self;
	  // Source is preserved since cloneElement is unlikely to be targeted by a
	  // transpiler, and the original source is probably a better indicator of the
	  // true owner.
	  var source = element._source;
	
	  // Owner will be preserved, unless ref is overridden
	  var owner = element._owner;
	
	  if (config != null) {
	    if (process.env.NODE_ENV !== 'production') {
	      process.env.NODE_ENV !== 'production' ? warning(
	      /* eslint-disable no-proto */
	      config.__proto__ == null || config.__proto__ === Object.prototype,
	      /* eslint-enable no-proto */
	      'React.cloneElement(...): Expected props argument to be a plain object. ' + 'Properties defined in its prototype chain will be ignored.') : void 0;
	    }
	    if (config.ref !== undefined) {
	      // Silently steal the ref from the parent.
	      ref = config.ref;
	      owner = ReactCurrentOwner.current;
	    }
	    if (config.key !== undefined) {
	      key = '' + config.key;
	    }
	    // Remaining properties override existing props
	    var defaultProps;
	    if (element.type && element.type.defaultProps) {
	      defaultProps = element.type.defaultProps;
	    }
	    for (propName in config) {
	      if (config.hasOwnProperty(propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
	        if (config[propName] === undefined && defaultProps !== undefined) {
	          // Resolve default props
	          props[propName] = defaultProps[propName];
	        } else {
	          props[propName] = config[propName];
	        }
	      }
	    }
	  }
	
	  // Children can be more than one argument, and those are transferred onto
	  // the newly allocated props object.
	  var childrenLength = arguments.length - 2;
	  if (childrenLength === 1) {
	    props.children = children;
	  } else if (childrenLength > 1) {
	    var childArray = Array(childrenLength);
	    for (var i = 0; i < childrenLength; i++) {
	      childArray[i] = arguments[i + 2];
	    }
	    props.children = childArray;
	  }
	
	  return ReactElement(element.type, key, ref, self, source, owner, props);
	};
	
	/**
	 * Verifies the object is a ReactElement.
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.isvalidelement
	 * @param {?object} object
	 * @return {boolean} True if `object` is a valid component.
	 * @final
	 */
	ReactElement.isValidElement = function (object) {
	  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	};
	
	module.exports = ReactElement;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 10 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactCurrentOwner
	 */
	
	'use strict';
	
	/**
	 * Keeps track of the current owner.
	 *
	 * The current owner is the component who should own any components that are
	 * currently being constructed.
	 */
	
	var ReactCurrentOwner = {
	
	  /**
	   * @internal
	   * @type {ReactComponent}
	   */
	  current: null
	
	};
	
	module.exports = ReactCurrentOwner;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	
	'use strict';
	
	var emptyFunction = __webpack_require__(12);
	
	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */
	
	var warning = emptyFunction;
	
	if (process.env.NODE_ENV !== 'production') {
	  warning = function warning(condition, format) {
	    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	      args[_key - 2] = arguments[_key];
	    }
	
	    if (format === undefined) {
	      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
	    }
	
	    if (format.indexOf('Failed Composite propType: ') === 0) {
	      return; // Ignore CompositeComponent proptype check.
	    }
	
	    if (!condition) {
	      var argIndex = 0;
	      var message = 'Warning: ' + format.replace(/%s/g, function () {
	        return args[argIndex++];
	      });
	      if (typeof console !== 'undefined') {
	        console.error(message);
	      }
	      try {
	        // --- Welcome to debugging React ---
	        // This error was thrown as a convenience so that you can use this stack
	        // to find the callsite that caused this warning to fire.
	        throw new Error(message);
	      } catch (x) {}
	    }
	  };
	}
	
	module.exports = warning;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 12 */
/***/ function(module, exports) {

	"use strict";
	
	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	
	function makeEmptyFunction(arg) {
	  return function () {
	    return arg;
	  };
	}
	
	/**
	 * This function accepts and discards inputs; it has no side effects. This is
	 * primarily useful idiomatically for overridable function endpoints which
	 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	 */
	var emptyFunction = function emptyFunction() {};
	
	emptyFunction.thatReturns = makeEmptyFunction;
	emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
	emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
	emptyFunction.thatReturnsNull = makeEmptyFunction(null);
	emptyFunction.thatReturnsThis = function () {
	  return this;
	};
	emptyFunction.thatReturnsArgument = function (arg) {
	  return arg;
	};
	
	module.exports = emptyFunction;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule canDefineProperty
	 */
	
	'use strict';
	
	var canDefineProperty = false;
	if (process.env.NODE_ENV !== 'production') {
	  try {
	    Object.defineProperty({}, 'x', { get: function () {} });
	    canDefineProperty = true;
	  } catch (x) {
	    // IE will fail on defineProperty
	  }
	}
	
	module.exports = canDefineProperty;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule traverseAllChildren
	 */
	
	'use strict';
	
	var ReactCurrentOwner = __webpack_require__(10);
	var ReactElement = __webpack_require__(9);
	
	var getIteratorFn = __webpack_require__(15);
	var invariant = __webpack_require__(8);
	var KeyEscapeUtils = __webpack_require__(16);
	var warning = __webpack_require__(11);
	
	var SEPARATOR = '.';
	var SUBSEPARATOR = ':';
	
	/**
	 * TODO: Test that a single child and an array with one item have the same key
	 * pattern.
	 */
	
	var didWarnAboutMaps = false;
	
	/**
	 * Generate a key string that identifies a component within a set.
	 *
	 * @param {*} component A component that could contain a manual key.
	 * @param {number} index Index that is used if a manual key is not provided.
	 * @return {string}
	 */
	function getComponentKey(component, index) {
	  // Do some typechecking here since we call this blindly. We want to ensure
	  // that we don't block potential future ES APIs.
	  if (component && typeof component === 'object' && component.key != null) {
	    // Explicit key
	    return KeyEscapeUtils.escape(component.key);
	  }
	  // Implicit key determined by the index in the set
	  return index.toString(36);
	}
	
	/**
	 * @param {?*} children Children tree container.
	 * @param {!string} nameSoFar Name of the key path so far.
	 * @param {!function} callback Callback to invoke with each child found.
	 * @param {?*} traverseContext Used to pass information throughout the traversal
	 * process.
	 * @return {!number} The number of children in this subtree.
	 */
	function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
	  var type = typeof children;
	
	  if (type === 'undefined' || type === 'boolean') {
	    // All of the above are perceived as null.
	    children = null;
	  }
	
	  if (children === null || type === 'string' || type === 'number' || ReactElement.isValidElement(children)) {
	    callback(traverseContext, children,
	    // If it's the only child, treat the name as if it was wrapped in an array
	    // so that it's consistent if the number of children grows.
	    nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
	    return 1;
	  }
	
	  var child;
	  var nextName;
	  var subtreeCount = 0; // Count of children found in the current subtree.
	  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;
	
	  if (Array.isArray(children)) {
	    for (var i = 0; i < children.length; i++) {
	      child = children[i];
	      nextName = nextNamePrefix + getComponentKey(child, i);
	      subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
	    }
	  } else {
	    var iteratorFn = getIteratorFn(children);
	    if (iteratorFn) {
	      var iterator = iteratorFn.call(children);
	      var step;
	      if (iteratorFn !== children.entries) {
	        var ii = 0;
	        while (!(step = iterator.next()).done) {
	          child = step.value;
	          nextName = nextNamePrefix + getComponentKey(child, ii++);
	          subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
	        }
	      } else {
	        if (process.env.NODE_ENV !== 'production') {
	          process.env.NODE_ENV !== 'production' ? warning(didWarnAboutMaps, 'Using Maps as children is not yet fully supported. It is an ' + 'experimental feature that might be removed. Convert it to a ' + 'sequence / iterable of keyed ReactElements instead.') : void 0;
	          didWarnAboutMaps = true;
	        }
	        // Iterator will provide entry [k,v] tuples rather than values.
	        while (!(step = iterator.next()).done) {
	          var entry = step.value;
	          if (entry) {
	            child = entry[1];
	            nextName = nextNamePrefix + KeyEscapeUtils.escape(entry[0]) + SUBSEPARATOR + getComponentKey(child, 0);
	            subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
	          }
	        }
	      }
	    } else if (type === 'object') {
	      var addendum = '';
	      if (process.env.NODE_ENV !== 'production') {
	        addendum = ' If you meant to render a collection of children, use an array ' + 'instead or wrap the object using createFragment(object) from the ' + 'React add-ons.';
	        if (children._isReactElement) {
	          addendum = ' It looks like you\'re using an element created by a different ' + 'version of React. Make sure to use only one copy of React.';
	        }
	        if (ReactCurrentOwner.current) {
	          var name = ReactCurrentOwner.current.getName();
	          if (name) {
	            addendum += ' Check the render method of `' + name + '`.';
	          }
	        }
	      }
	      var childrenString = String(children);
	       true ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Objects are not valid as a React child (found: %s).%s', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum) : invariant(false) : void 0;
	    }
	  }
	
	  return subtreeCount;
	}
	
	/**
	 * Traverses children that are typically specified as `props.children`, but
	 * might also be specified through attributes:
	 *
	 * - `traverseAllChildren(this.props.children, ...)`
	 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
	 *
	 * The `traverseContext` is an optional argument that is passed through the
	 * entire traversal. It can be used to store accumulations or anything else that
	 * the callback might find relevant.
	 *
	 * @param {?*} children Children tree object.
	 * @param {!function} callback To invoke upon traversing each child.
	 * @param {?*} traverseContext Context for traversal.
	 * @return {!number} The number of children in this subtree.
	 */
	function traverseAllChildren(children, callback, traverseContext) {
	  if (children == null) {
	    return 0;
	  }
	
	  return traverseAllChildrenImpl(children, '', callback, traverseContext);
	}
	
	module.exports = traverseAllChildren;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 15 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getIteratorFn
	 */
	
	'use strict';
	
	/* global Symbol */
	
	var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.
	
	/**
	 * Returns the iterator method function contained on the iterable object.
	 *
	 * Be sure to invoke the function with the iterable as context:
	 *
	 *     var iteratorFn = getIteratorFn(myIterable);
	 *     if (iteratorFn) {
	 *       var iterator = iteratorFn.call(myIterable);
	 *       ...
	 *     }
	 *
	 * @param {?object} maybeIterable
	 * @return {?function}
	 */
	function getIteratorFn(maybeIterable) {
	  var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	  if (typeof iteratorFn === 'function') {
	    return iteratorFn;
	  }
	}
	
	module.exports = getIteratorFn;

/***/ },
/* 16 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule KeyEscapeUtils
	 */
	
	'use strict';
	
	/**
	 * Escape and wrap key so it is safe to use as a reactid
	 *
	 * @param {*} key to be escaped.
	 * @return {string} the escaped key.
	 */
	
	function escape(key) {
	  var escapeRegex = /[=:]/g;
	  var escaperLookup = {
	    '=': '=0',
	    ':': '=2'
	  };
	  var escapedString = ('' + key).replace(escapeRegex, function (match) {
	    return escaperLookup[match];
	  });
	
	  return '$' + escapedString;
	}
	
	/**
	 * Unescape and unwrap key for human-readable display
	 *
	 * @param {string} key to unescape.
	 * @return {string} the unescaped key.
	 */
	function unescape(key) {
	  var unescapeRegex = /(=0|=2)/g;
	  var unescaperLookup = {
	    '=0': '=',
	    '=2': ':'
	  };
	  var keySubstring = key[0] === '.' && key[1] === '$' ? key.substring(2) : key.substring(1);
	
	  return ('' + keySubstring).replace(unescapeRegex, function (match) {
	    return unescaperLookup[match];
	  });
	}
	
	var KeyEscapeUtils = {
	  escape: escape,
	  unescape: unescape
	};
	
	module.exports = KeyEscapeUtils;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactComponent
	 */
	
	'use strict';
	
	var ReactNoopUpdateQueue = __webpack_require__(18);
	var ReactInstrumentation = __webpack_require__(19);
	
	var canDefineProperty = __webpack_require__(13);
	var emptyObject = __webpack_require__(27);
	var invariant = __webpack_require__(8);
	var warning = __webpack_require__(11);
	
	/**
	 * Base class helpers for the updating state of a component.
	 */
	function ReactComponent(props, context, updater) {
	  this.props = props;
	  this.context = context;
	  this.refs = emptyObject;
	  // We initialize the default updater but the real one gets injected by the
	  // renderer.
	  this.updater = updater || ReactNoopUpdateQueue;
	}
	
	ReactComponent.prototype.isReactComponent = {};
	
	/**
	 * Sets a subset of the state. Always use this to mutate
	 * state. You should treat `this.state` as immutable.
	 *
	 * There is no guarantee that `this.state` will be immediately updated, so
	 * accessing `this.state` after calling this method may return the old value.
	 *
	 * There is no guarantee that calls to `setState` will run synchronously,
	 * as they may eventually be batched together.  You can provide an optional
	 * callback that will be executed when the call to setState is actually
	 * completed.
	 *
	 * When a function is provided to setState, it will be called at some point in
	 * the future (not synchronously). It will be called with the up to date
	 * component arguments (state, props, context). These values can be different
	 * from this.* because your function may be called after receiveProps but before
	 * shouldComponentUpdate, and this new state, props, and context will not yet be
	 * assigned to this.
	 *
	 * @param {object|function} partialState Next partial state or function to
	 *        produce next partial state to be merged with current state.
	 * @param {?function} callback Called after state is updated.
	 * @final
	 * @protected
	 */
	ReactComponent.prototype.setState = function (partialState, callback) {
	  !(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'setState(...): takes an object of state variables to update or a ' + 'function which returns an object of state variables.') : invariant(false) : void 0;
	  if (process.env.NODE_ENV !== 'production') {
	    ReactInstrumentation.debugTool.onSetState();
	    process.env.NODE_ENV !== 'production' ? warning(partialState != null, 'setState(...): You passed an undefined or null state object; ' + 'instead, use forceUpdate().') : void 0;
	  }
	  this.updater.enqueueSetState(this, partialState);
	  if (callback) {
	    this.updater.enqueueCallback(this, callback, 'setState');
	  }
	};
	
	/**
	 * Forces an update. This should only be invoked when it is known with
	 * certainty that we are **not** in a DOM transaction.
	 *
	 * You may want to call this when you know that some deeper aspect of the
	 * component's state has changed but `setState` was not called.
	 *
	 * This will not invoke `shouldComponentUpdate`, but it will invoke
	 * `componentWillUpdate` and `componentDidUpdate`.
	 *
	 * @param {?function} callback Called after update is complete.
	 * @final
	 * @protected
	 */
	ReactComponent.prototype.forceUpdate = function (callback) {
	  this.updater.enqueueForceUpdate(this);
	  if (callback) {
	    this.updater.enqueueCallback(this, callback, 'forceUpdate');
	  }
	};
	
	/**
	 * Deprecated APIs. These APIs used to exist on classic React classes but since
	 * we would like to deprecate them, we're not going to move them over to this
	 * modern base class. Instead, we define a getter that warns if it's accessed.
	 */
	if (process.env.NODE_ENV !== 'production') {
	  var deprecatedAPIs = {
	    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
	    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
	  };
	  var defineDeprecationWarning = function (methodName, info) {
	    if (canDefineProperty) {
	      Object.defineProperty(ReactComponent.prototype, methodName, {
	        get: function () {
	          process.env.NODE_ENV !== 'production' ? warning(false, '%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]) : void 0;
	          return undefined;
	        }
	      });
	    }
	  };
	  for (var fnName in deprecatedAPIs) {
	    if (deprecatedAPIs.hasOwnProperty(fnName)) {
	      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
	    }
	  }
	}
	
	module.exports = ReactComponent;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2015-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactNoopUpdateQueue
	 */
	
	'use strict';
	
	var warning = __webpack_require__(11);
	
	function warnTDZ(publicInstance, callerName) {
	  if (process.env.NODE_ENV !== 'production') {
	    process.env.NODE_ENV !== 'production' ? warning(false, '%s(...): Can only update a mounted or mounting component. ' + 'This usually means you called %s() on an unmounted component. ' + 'This is a no-op. Please check the code for the %s component.', callerName, callerName, publicInstance.constructor && publicInstance.constructor.displayName || '') : void 0;
	  }
	}
	
	/**
	 * This is the abstract API for an update queue.
	 */
	var ReactNoopUpdateQueue = {
	
	  /**
	   * Checks whether or not this composite component is mounted.
	   * @param {ReactClass} publicInstance The instance we want to test.
	   * @return {boolean} True if mounted, false otherwise.
	   * @protected
	   * @final
	   */
	  isMounted: function (publicInstance) {
	    return false;
	  },
	
	  /**
	   * Enqueue a callback that will be executed after all the pending updates
	   * have processed.
	   *
	   * @param {ReactClass} publicInstance The instance to use as `this` context.
	   * @param {?function} callback Called after state is updated.
	   * @internal
	   */
	  enqueueCallback: function (publicInstance, callback) {},
	
	  /**
	   * Forces an update. This should only be invoked when it is known with
	   * certainty that we are **not** in a DOM transaction.
	   *
	   * You may want to call this when you know that some deeper aspect of the
	   * component's state has changed but `setState` was not called.
	   *
	   * This will not invoke `shouldComponentUpdate`, but it will invoke
	   * `componentWillUpdate` and `componentDidUpdate`.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @internal
	   */
	  enqueueForceUpdate: function (publicInstance) {
	    warnTDZ(publicInstance, 'forceUpdate');
	  },
	
	  /**
	   * Replaces all of the state. Always use this or `setState` to mutate state.
	   * You should treat `this.state` as immutable.
	   *
	   * There is no guarantee that `this.state` will be immediately updated, so
	   * accessing `this.state` after calling this method may return the old value.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @param {object} completeState Next state.
	   * @internal
	   */
	  enqueueReplaceState: function (publicInstance, completeState) {
	    warnTDZ(publicInstance, 'replaceState');
	  },
	
	  /**
	   * Sets a subset of the state. This only exists because _pendingState is
	   * internal. This provides a merging strategy that is not available to deep
	   * properties which is confusing. TODO: Expose pendingState or don't use it
	   * during the merge.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @param {object} partialState Next partial state to be merged with state.
	   * @internal
	   */
	  enqueueSetState: function (publicInstance, partialState) {
	    warnTDZ(publicInstance, 'setState');
	  }
	};
	
	module.exports = ReactNoopUpdateQueue;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2016-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactInstrumentation
	 */
	
	'use strict';
	
	var ReactDebugTool = __webpack_require__(20);
	
	module.exports = { debugTool: ReactDebugTool };

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2016-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDebugTool
	 */
	
	'use strict';
	
	var ExecutionEnvironment = __webpack_require__(21);
	
	var performanceNow = __webpack_require__(22);
	var warning = __webpack_require__(11);
	
	var eventHandlers = [];
	var handlerDoesThrowForEvent = {};
	
	function emitEvent(handlerFunctionName, arg1, arg2, arg3, arg4, arg5) {
	  if (process.env.NODE_ENV !== 'production') {
	    eventHandlers.forEach(function (handler) {
	      try {
	        if (handler[handlerFunctionName]) {
	          handler[handlerFunctionName](arg1, arg2, arg3, arg4, arg5);
	        }
	      } catch (e) {
	        process.env.NODE_ENV !== 'production' ? warning(!handlerDoesThrowForEvent[handlerFunctionName], 'exception thrown by devtool while handling %s: %s', handlerFunctionName, e.message) : void 0;
	        handlerDoesThrowForEvent[handlerFunctionName] = true;
	      }
	    });
	  }
	}
	
	var isProfiling = false;
	var flushHistory = [];
	var currentFlushNesting = 0;
	var currentFlushMeasurements = null;
	var currentFlushStartTime = null;
	var currentTimerDebugID = null;
	var currentTimerStartTime = null;
	var currentTimerType = null;
	
	function clearHistory() {
	  ReactComponentTreeDevtool.purgeUnmountedComponents();
	  ReactNativeOperationHistoryDevtool.clearHistory();
	}
	
	function getTreeSnapshot(registeredIDs) {
	  return registeredIDs.reduce(function (tree, id) {
	    var ownerID = ReactComponentTreeDevtool.getOwnerID(id);
	    var parentID = ReactComponentTreeDevtool.getParentID(id);
	    tree[id] = {
	      displayName: ReactComponentTreeDevtool.getDisplayName(id),
	      text: ReactComponentTreeDevtool.getText(id),
	      updateCount: ReactComponentTreeDevtool.getUpdateCount(id),
	      childIDs: ReactComponentTreeDevtool.getChildIDs(id),
	      // Text nodes don't have owners but this is close enough.
	      ownerID: ownerID || ReactComponentTreeDevtool.getOwnerID(parentID),
	      parentID: parentID
	    };
	    return tree;
	  }, {});
	}
	
	function resetMeasurements() {
	  if (process.env.NODE_ENV !== 'production') {
	    var previousStartTime = currentFlushStartTime;
	    var previousMeasurements = currentFlushMeasurements || [];
	    var previousOperations = ReactNativeOperationHistoryDevtool.getHistory();
	
	    if (!isProfiling || currentFlushNesting === 0) {
	      currentFlushStartTime = null;
	      currentFlushMeasurements = null;
	      clearHistory();
	      return;
	    }
	
	    if (previousMeasurements.length || previousOperations.length) {
	      var registeredIDs = ReactComponentTreeDevtool.getRegisteredIDs();
	      flushHistory.push({
	        duration: performanceNow() - previousStartTime,
	        measurements: previousMeasurements || [],
	        operations: previousOperations || [],
	        treeSnapshot: getTreeSnapshot(registeredIDs)
	      });
	    }
	
	    clearHistory();
	    currentFlushStartTime = performanceNow();
	    currentFlushMeasurements = [];
	  }
	}
	
	function checkDebugID(debugID) {
	  process.env.NODE_ENV !== 'production' ? warning(debugID, 'ReactDebugTool: debugID may not be empty.') : void 0;
	}
	
	var ReactDebugTool = {
	  addDevtool: function (devtool) {
	    eventHandlers.push(devtool);
	  },
	  removeDevtool: function (devtool) {
	    for (var i = 0; i < eventHandlers.length; i++) {
	      if (eventHandlers[i] === devtool) {
	        eventHandlers.splice(i, 1);
	        i--;
	      }
	    }
	  },
	  beginProfiling: function () {
	    if (process.env.NODE_ENV !== 'production') {
	      if (isProfiling) {
	        return;
	      }
	
	      isProfiling = true;
	      flushHistory.length = 0;
	      resetMeasurements();
	    }
	  },
	  endProfiling: function () {
	    if (process.env.NODE_ENV !== 'production') {
	      if (!isProfiling) {
	        return;
	      }
	
	      isProfiling = false;
	      resetMeasurements();
	    }
	  },
	  getFlushHistory: function () {
	    if (process.env.NODE_ENV !== 'production') {
	      return flushHistory;
	    }
	  },
	  onBeginFlush: function () {
	    if (process.env.NODE_ENV !== 'production') {
	      currentFlushNesting++;
	      resetMeasurements();
	    }
	    emitEvent('onBeginFlush');
	  },
	  onEndFlush: function () {
	    if (process.env.NODE_ENV !== 'production') {
	      resetMeasurements();
	      currentFlushNesting--;
	    }
	    emitEvent('onEndFlush');
	  },
	  onBeginLifeCycleTimer: function (debugID, timerType) {
	    checkDebugID(debugID);
	    emitEvent('onBeginLifeCycleTimer', debugID, timerType);
	    if (process.env.NODE_ENV !== 'production') {
	      if (isProfiling && currentFlushNesting > 0) {
	        process.env.NODE_ENV !== 'production' ? warning(!currentTimerType, 'There is an internal error in the React performance measurement code. ' + 'Did not expect %s timer to start while %s timer is still in ' + 'progress for %s instance.', timerType, currentTimerType || 'no', debugID === currentTimerDebugID ? 'the same' : 'another') : void 0;
	        currentTimerStartTime = performanceNow();
	        currentTimerDebugID = debugID;
	        currentTimerType = timerType;
	      }
	    }
	  },
	  onEndLifeCycleTimer: function (debugID, timerType) {
	    checkDebugID(debugID);
	    if (process.env.NODE_ENV !== 'production') {
	      if (isProfiling && currentFlushNesting > 0) {
	        process.env.NODE_ENV !== 'production' ? warning(currentTimerType === timerType, 'There is an internal error in the React performance measurement code. ' + 'We did not expect %s timer to stop while %s timer is still in ' + 'progress for %s instance. Please report this as a bug in React.', timerType, currentTimerType || 'no', debugID === currentTimerDebugID ? 'the same' : 'another') : void 0;
	        currentFlushMeasurements.push({
	          timerType: timerType,
	          instanceID: debugID,
	          duration: performanceNow() - currentTimerStartTime
	        });
	        currentTimerStartTime = null;
	        currentTimerDebugID = null;
	        currentTimerType = null;
	      }
	    }
	    emitEvent('onEndLifeCycleTimer', debugID, timerType);
	  },
	  onBeginReconcilerTimer: function (debugID, timerType) {
	    checkDebugID(debugID);
	    emitEvent('onBeginReconcilerTimer', debugID, timerType);
	  },
	  onEndReconcilerTimer: function (debugID, timerType) {
	    checkDebugID(debugID);
	    emitEvent('onEndReconcilerTimer', debugID, timerType);
	  },
	  onBeginProcessingChildContext: function () {
	    emitEvent('onBeginProcessingChildContext');
	  },
	  onEndProcessingChildContext: function () {
	    emitEvent('onEndProcessingChildContext');
	  },
	  onNativeOperation: function (debugID, type, payload) {
	    checkDebugID(debugID);
	    emitEvent('onNativeOperation', debugID, type, payload);
	  },
	  onSetState: function () {
	    emitEvent('onSetState');
	  },
	  onSetDisplayName: function (debugID, displayName) {
	    checkDebugID(debugID);
	    emitEvent('onSetDisplayName', debugID, displayName);
	  },
	  onSetChildren: function (debugID, childDebugIDs) {
	    checkDebugID(debugID);
	    emitEvent('onSetChildren', debugID, childDebugIDs);
	  },
	  onSetOwner: function (debugID, ownerDebugID) {
	    checkDebugID(debugID);
	    emitEvent('onSetOwner', debugID, ownerDebugID);
	  },
	  onSetText: function (debugID, text) {
	    checkDebugID(debugID);
	    emitEvent('onSetText', debugID, text);
	  },
	  onMountRootComponent: function (debugID) {
	    checkDebugID(debugID);
	    emitEvent('onMountRootComponent', debugID);
	  },
	  onMountComponent: function (debugID) {
	    checkDebugID(debugID);
	    emitEvent('onMountComponent', debugID);
	  },
	  onUpdateComponent: function (debugID) {
	    checkDebugID(debugID);
	    emitEvent('onUpdateComponent', debugID);
	  },
	  onUnmountComponent: function (debugID) {
	    checkDebugID(debugID);
	    emitEvent('onUnmountComponent', debugID);
	  }
	};
	
	if (process.env.NODE_ENV !== 'production') {
	  var ReactInvalidSetStateWarningDevTool = __webpack_require__(24);
	  var ReactNativeOperationHistoryDevtool = __webpack_require__(25);
	  var ReactComponentTreeDevtool = __webpack_require__(26);
	  ReactDebugTool.addDevtool(ReactInvalidSetStateWarningDevTool);
	  ReactDebugTool.addDevtool(ReactComponentTreeDevtool);
	  ReactDebugTool.addDevtool(ReactNativeOperationHistoryDevtool);
	  var url = ExecutionEnvironment.canUseDOM && window.location.href || '';
	  if (/[?&]react_perf\b/.test(url)) {
	    ReactDebugTool.beginProfiling();
	  }
	}
	
	module.exports = ReactDebugTool;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 21 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	
	'use strict';
	
	var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
	
	/**
	 * Simple, lightweight module assisting with the detection and context of
	 * Worker. Helps avoid circular dependencies and allows code to reason about
	 * whether or not they are in a Worker, even if they never include the main
	 * `ReactWorker` dependency.
	 */
	var ExecutionEnvironment = {
	
	  canUseDOM: canUseDOM,
	
	  canUseWorkers: typeof Worker !== 'undefined',
	
	  canUseEventListeners: canUseDOM && !!(window.addEventListener || window.attachEvent),
	
	  canUseViewport: canUseDOM && !!window.screen,
	
	  isInWorker: !canUseDOM // For now, this is true - might change in the future.
	
	};
	
	module.exports = ExecutionEnvironment;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 */
	
	var performance = __webpack_require__(23);
	
	var performanceNow;
	
	/**
	 * Detect if we can use `window.performance.now()` and gracefully fallback to
	 * `Date.now()` if it doesn't exist. We need to support Firefox < 15 for now
	 * because of Facebook's testing infrastructure.
	 */
	if (performance.now) {
	  performanceNow = function performanceNow() {
	    return performance.now();
	  };
	} else {
	  performanceNow = function performanceNow() {
	    return Date.now();
	  };
	}
	
	module.exports = performanceNow;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 */
	
	'use strict';
	
	var ExecutionEnvironment = __webpack_require__(21);
	
	var performance;
	
	if (ExecutionEnvironment.canUseDOM) {
	  performance = window.performance || window.msPerformance || window.webkitPerformance;
	}
	
	module.exports = performance || {};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2016-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactInvalidSetStateWarningDevTool
	 */
	
	'use strict';
	
	var warning = __webpack_require__(11);
	
	if (process.env.NODE_ENV !== 'production') {
	  var processingChildContext = false;
	
	  var warnInvalidSetState = function () {
	    process.env.NODE_ENV !== 'production' ? warning(!processingChildContext, 'setState(...): Cannot call setState() inside getChildContext()') : void 0;
	  };
	}
	
	var ReactInvalidSetStateWarningDevTool = {
	  onBeginProcessingChildContext: function () {
	    processingChildContext = true;
	  },
	  onEndProcessingChildContext: function () {
	    processingChildContext = false;
	  },
	  onSetState: function () {
	    warnInvalidSetState();
	  }
	};
	
	module.exports = ReactInvalidSetStateWarningDevTool;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 25 */
/***/ function(module, exports) {

	/**
	 * Copyright 2016-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactNativeOperationHistoryDevtool
	 */
	
	'use strict';
	
	var history = [];
	
	var ReactNativeOperationHistoryDevtool = {
	  onNativeOperation: function (debugID, type, payload) {
	    history.push({
	      instanceID: debugID,
	      type: type,
	      payload: payload
	    });
	  },
	  clearHistory: function () {
	    if (ReactNativeOperationHistoryDevtool._preventClearing) {
	      // Should only be used for tests.
	      return;
	    }
	
	    history = [];
	  },
	  getHistory: function () {
	    return history;
	  }
	};
	
	module.exports = ReactNativeOperationHistoryDevtool;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2016-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactComponentTreeDevtool
	 */
	
	'use strict';
	
	var invariant = __webpack_require__(8);
	
	var tree = {};
	var rootIDs = [];
	
	function updateTree(id, update) {
	  if (!tree[id]) {
	    tree[id] = {
	      parentID: null,
	      ownerID: null,
	      text: null,
	      childIDs: [],
	      displayName: 'Unknown',
	      isMounted: false,
	      updateCount: 0
	    };
	  }
	  update(tree[id]);
	}
	
	function purgeDeep(id) {
	  var item = tree[id];
	  if (item) {
	    var childIDs = item.childIDs;
	
	    delete tree[id];
	    childIDs.forEach(purgeDeep);
	  }
	}
	
	var ReactComponentTreeDevtool = {
	  onSetDisplayName: function (id, displayName) {
	    updateTree(id, function (item) {
	      return item.displayName = displayName;
	    });
	  },
	  onSetChildren: function (id, nextChildIDs) {
	    updateTree(id, function (item) {
	      var prevChildIDs = item.childIDs;
	      item.childIDs = nextChildIDs;
	
	      nextChildIDs.forEach(function (nextChildID) {
	        var nextChild = tree[nextChildID];
	        !nextChild ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected devtool events to fire for the child ' + 'before its parent includes it in onSetChildren().') : invariant(false) : void 0;
	        !(nextChild.displayName != null) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected onSetDisplayName() to fire for the child ' + 'before its parent includes it in onSetChildren().') : invariant(false) : void 0;
	        !(nextChild.childIDs != null || nextChild.text != null) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected onSetChildren() or onSetText() to fire for the child ' + 'before its parent includes it in onSetChildren().') : invariant(false) : void 0;
	        !nextChild.isMounted ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected onMountComponent() to fire for the child ' + 'before its parent includes it in onSetChildren().') : invariant(false) : void 0;
	
	        if (prevChildIDs.indexOf(nextChildID) === -1) {
	          nextChild.parentID = id;
	        }
	      });
	    });
	  },
	  onSetOwner: function (id, ownerID) {
	    updateTree(id, function (item) {
	      return item.ownerID = ownerID;
	    });
	  },
	  onSetText: function (id, text) {
	    updateTree(id, function (item) {
	      return item.text = text;
	    });
	  },
	  onMountComponent: function (id) {
	    updateTree(id, function (item) {
	      return item.isMounted = true;
	    });
	  },
	  onMountRootComponent: function (id) {
	    rootIDs.push(id);
	  },
	  onUpdateComponent: function (id) {
	    updateTree(id, function (item) {
	      return item.updateCount++;
	    });
	  },
	  onUnmountComponent: function (id) {
	    updateTree(id, function (item) {
	      return item.isMounted = false;
	    });
	    rootIDs = rootIDs.filter(function (rootID) {
	      return rootID !== id;
	    });
	  },
	  purgeUnmountedComponents: function () {
	    if (ReactComponentTreeDevtool._preventPurging) {
	      // Should only be used for testing.
	      return;
	    }
	
	    Object.keys(tree).filter(function (id) {
	      return !tree[id].isMounted;
	    }).forEach(purgeDeep);
	  },
	  isMounted: function (id) {
	    var item = tree[id];
	    return item ? item.isMounted : false;
	  },
	  getChildIDs: function (id) {
	    var item = tree[id];
	    return item ? item.childIDs : [];
	  },
	  getDisplayName: function (id) {
	    var item = tree[id];
	    return item ? item.displayName : 'Unknown';
	  },
	  getOwnerID: function (id) {
	    var item = tree[id];
	    return item ? item.ownerID : null;
	  },
	  getParentID: function (id) {
	    var item = tree[id];
	    return item ? item.parentID : null;
	  },
	  getText: function (id) {
	    var item = tree[id];
	    return item ? item.text : null;
	  },
	  getUpdateCount: function (id) {
	    var item = tree[id];
	    return item ? item.updateCount : 0;
	  },
	  getRootIDs: function () {
	    return rootIDs;
	  },
	  getRegisteredIDs: function () {
	    return Object.keys(tree);
	  }
	};
	
	module.exports = ReactComponentTreeDevtool;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	
	'use strict';
	
	var emptyObject = {};
	
	if (process.env.NODE_ENV !== 'production') {
	  Object.freeze(emptyObject);
	}
	
	module.exports = emptyObject;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactClass
	 */
	
	'use strict';
	
	var _assign = __webpack_require__(5);
	
	var ReactComponent = __webpack_require__(17);
	var ReactElement = __webpack_require__(9);
	var ReactPropTypeLocations = __webpack_require__(29);
	var ReactPropTypeLocationNames = __webpack_require__(31);
	var ReactNoopUpdateQueue = __webpack_require__(18);
	
	var emptyObject = __webpack_require__(27);
	var invariant = __webpack_require__(8);
	var keyMirror = __webpack_require__(30);
	var keyOf = __webpack_require__(32);
	var warning = __webpack_require__(11);
	
	var MIXINS_KEY = keyOf({ mixins: null });
	
	/**
	 * Policies that describe methods in `ReactClassInterface`.
	 */
	var SpecPolicy = keyMirror({
	  /**
	   * These methods may be defined only once by the class specification or mixin.
	   */
	  DEFINE_ONCE: null,
	  /**
	   * These methods may be defined by both the class specification and mixins.
	   * Subsequent definitions will be chained. These methods must return void.
	   */
	  DEFINE_MANY: null,
	  /**
	   * These methods are overriding the base class.
	   */
	  OVERRIDE_BASE: null,
	  /**
	   * These methods are similar to DEFINE_MANY, except we assume they return
	   * objects. We try to merge the keys of the return values of all the mixed in
	   * functions. If there is a key conflict we throw.
	   */
	  DEFINE_MANY_MERGED: null
	});
	
	var injectedMixins = [];
	
	/**
	 * Composite components are higher-level components that compose other composite
	 * or native components.
	 *
	 * To create a new type of `ReactClass`, pass a specification of
	 * your new class to `React.createClass`. The only requirement of your class
	 * specification is that you implement a `render` method.
	 *
	 *   var MyComponent = React.createClass({
	 *     render: function() {
	 *       return <div>Hello World</div>;
	 *     }
	 *   });
	 *
	 * The class specification supports a specific protocol of methods that have
	 * special meaning (e.g. `render`). See `ReactClassInterface` for
	 * more the comprehensive protocol. Any other properties and methods in the
	 * class specification will be available on the prototype.
	 *
	 * @interface ReactClassInterface
	 * @internal
	 */
	var ReactClassInterface = {
	
	  /**
	   * An array of Mixin objects to include when defining your component.
	   *
	   * @type {array}
	   * @optional
	   */
	  mixins: SpecPolicy.DEFINE_MANY,
	
	  /**
	   * An object containing properties and methods that should be defined on
	   * the component's constructor instead of its prototype (static methods).
	   *
	   * @type {object}
	   * @optional
	   */
	  statics: SpecPolicy.DEFINE_MANY,
	
	  /**
	   * Definition of prop types for this component.
	   *
	   * @type {object}
	   * @optional
	   */
	  propTypes: SpecPolicy.DEFINE_MANY,
	
	  /**
	   * Definition of context types for this component.
	   *
	   * @type {object}
	   * @optional
	   */
	  contextTypes: SpecPolicy.DEFINE_MANY,
	
	  /**
	   * Definition of context types this component sets for its children.
	   *
	   * @type {object}
	   * @optional
	   */
	  childContextTypes: SpecPolicy.DEFINE_MANY,
	
	  // ==== Definition methods ====
	
	  /**
	   * Invoked when the component is mounted. Values in the mapping will be set on
	   * `this.props` if that prop is not specified (i.e. using an `in` check).
	   *
	   * This method is invoked before `getInitialState` and therefore cannot rely
	   * on `this.state` or use `this.setState`.
	   *
	   * @return {object}
	   * @optional
	   */
	  getDefaultProps: SpecPolicy.DEFINE_MANY_MERGED,
	
	  /**
	   * Invoked once before the component is mounted. The return value will be used
	   * as the initial value of `this.state`.
	   *
	   *   getInitialState: function() {
	   *     return {
	   *       isOn: false,
	   *       fooBaz: new BazFoo()
	   *     }
	   *   }
	   *
	   * @return {object}
	   * @optional
	   */
	  getInitialState: SpecPolicy.DEFINE_MANY_MERGED,
	
	  /**
	   * @return {object}
	   * @optional
	   */
	  getChildContext: SpecPolicy.DEFINE_MANY_MERGED,
	
	  /**
	   * Uses props from `this.props` and state from `this.state` to render the
	   * structure of the component.
	   *
	   * No guarantees are made about when or how often this method is invoked, so
	   * it must not have side effects.
	   *
	   *   render: function() {
	   *     var name = this.props.name;
	   *     return <div>Hello, {name}!</div>;
	   *   }
	   *
	   * @return {ReactComponent}
	   * @nosideeffects
	   * @required
	   */
	  render: SpecPolicy.DEFINE_ONCE,
	
	  // ==== Delegate methods ====
	
	  /**
	   * Invoked when the component is initially created and about to be mounted.
	   * This may have side effects, but any external subscriptions or data created
	   * by this method must be cleaned up in `componentWillUnmount`.
	   *
	   * @optional
	   */
	  componentWillMount: SpecPolicy.DEFINE_MANY,
	
	  /**
	   * Invoked when the component has been mounted and has a DOM representation.
	   * However, there is no guarantee that the DOM node is in the document.
	   *
	   * Use this as an opportunity to operate on the DOM when the component has
	   * been mounted (initialized and rendered) for the first time.
	   *
	   * @param {DOMElement} rootNode DOM element representing the component.
	   * @optional
	   */
	  componentDidMount: SpecPolicy.DEFINE_MANY,
	
	  /**
	   * Invoked before the component receives new props.
	   *
	   * Use this as an opportunity to react to a prop transition by updating the
	   * state using `this.setState`. Current props are accessed via `this.props`.
	   *
	   *   componentWillReceiveProps: function(nextProps, nextContext) {
	   *     this.setState({
	   *       likesIncreasing: nextProps.likeCount > this.props.likeCount
	   *     });
	   *   }
	   *
	   * NOTE: There is no equivalent `componentWillReceiveState`. An incoming prop
	   * transition may cause a state change, but the opposite is not true. If you
	   * need it, you are probably looking for `componentWillUpdate`.
	   *
	   * @param {object} nextProps
	   * @optional
	   */
	  componentWillReceiveProps: SpecPolicy.DEFINE_MANY,
	
	  /**
	   * Invoked while deciding if the component should be updated as a result of
	   * receiving new props, state and/or context.
	   *
	   * Use this as an opportunity to `return false` when you're certain that the
	   * transition to the new props/state/context will not require a component
	   * update.
	   *
	   *   shouldComponentUpdate: function(nextProps, nextState, nextContext) {
	   *     return !equal(nextProps, this.props) ||
	   *       !equal(nextState, this.state) ||
	   *       !equal(nextContext, this.context);
	   *   }
	   *
	   * @param {object} nextProps
	   * @param {?object} nextState
	   * @param {?object} nextContext
	   * @return {boolean} True if the component should update.
	   * @optional
	   */
	  shouldComponentUpdate: SpecPolicy.DEFINE_ONCE,
	
	  /**
	   * Invoked when the component is about to update due to a transition from
	   * `this.props`, `this.state` and `this.context` to `nextProps`, `nextState`
	   * and `nextContext`.
	   *
	   * Use this as an opportunity to perform preparation before an update occurs.
	   *
	   * NOTE: You **cannot** use `this.setState()` in this method.
	   *
	   * @param {object} nextProps
	   * @param {?object} nextState
	   * @param {?object} nextContext
	   * @param {ReactReconcileTransaction} transaction
	   * @optional
	   */
	  componentWillUpdate: SpecPolicy.DEFINE_MANY,
	
	  /**
	   * Invoked when the component's DOM representation has been updated.
	   *
	   * Use this as an opportunity to operate on the DOM when the component has
	   * been updated.
	   *
	   * @param {object} prevProps
	   * @param {?object} prevState
	   * @param {?object} prevContext
	   * @param {DOMElement} rootNode DOM element representing the component.
	   * @optional
	   */
	  componentDidUpdate: SpecPolicy.DEFINE_MANY,
	
	  /**
	   * Invoked when the component is about to be removed from its parent and have
	   * its DOM representation destroyed.
	   *
	   * Use this as an opportunity to deallocate any external resources.
	   *
	   * NOTE: There is no `componentDidUnmount` since your component will have been
	   * destroyed by that point.
	   *
	   * @optional
	   */
	  componentWillUnmount: SpecPolicy.DEFINE_MANY,
	
	  // ==== Advanced methods ====
	
	  /**
	   * Updates the component's currently mounted DOM representation.
	   *
	   * By default, this implements React's rendering and reconciliation algorithm.
	   * Sophisticated clients may wish to override this.
	   *
	   * @param {ReactReconcileTransaction} transaction
	   * @internal
	   * @overridable
	   */
	  updateComponent: SpecPolicy.OVERRIDE_BASE
	
	};
	
	/**
	 * Mapping from class specification keys to special processing functions.
	 *
	 * Although these are declared like instance properties in the specification
	 * when defining classes using `React.createClass`, they are actually static
	 * and are accessible on the constructor instead of the prototype. Despite
	 * being static, they must be defined outside of the "statics" key under
	 * which all other static methods are defined.
	 */
	var RESERVED_SPEC_KEYS = {
	  displayName: function (Constructor, displayName) {
	    Constructor.displayName = displayName;
	  },
	  mixins: function (Constructor, mixins) {
	    if (mixins) {
	      for (var i = 0; i < mixins.length; i++) {
	        mixSpecIntoComponent(Constructor, mixins[i]);
	      }
	    }
	  },
	  childContextTypes: function (Constructor, childContextTypes) {
	    if (process.env.NODE_ENV !== 'production') {
	      validateTypeDef(Constructor, childContextTypes, ReactPropTypeLocations.childContext);
	    }
	    Constructor.childContextTypes = _assign({}, Constructor.childContextTypes, childContextTypes);
	  },
	  contextTypes: function (Constructor, contextTypes) {
	    if (process.env.NODE_ENV !== 'production') {
	      validateTypeDef(Constructor, contextTypes, ReactPropTypeLocations.context);
	    }
	    Constructor.contextTypes = _assign({}, Constructor.contextTypes, contextTypes);
	  },
	  /**
	   * Special case getDefaultProps which should move into statics but requires
	   * automatic merging.
	   */
	  getDefaultProps: function (Constructor, getDefaultProps) {
	    if (Constructor.getDefaultProps) {
	      Constructor.getDefaultProps = createMergedResultFunction(Constructor.getDefaultProps, getDefaultProps);
	    } else {
	      Constructor.getDefaultProps = getDefaultProps;
	    }
	  },
	  propTypes: function (Constructor, propTypes) {
	    if (process.env.NODE_ENV !== 'production') {
	      validateTypeDef(Constructor, propTypes, ReactPropTypeLocations.prop);
	    }
	    Constructor.propTypes = _assign({}, Constructor.propTypes, propTypes);
	  },
	  statics: function (Constructor, statics) {
	    mixStaticSpecIntoComponent(Constructor, statics);
	  },
	  autobind: function () {} };
	
	// noop
	function validateTypeDef(Constructor, typeDef, location) {
	  for (var propName in typeDef) {
	    if (typeDef.hasOwnProperty(propName)) {
	      // use a warning instead of an invariant so components
	      // don't show up in prod but only in __DEV__
	      process.env.NODE_ENV !== 'production' ? warning(typeof typeDef[propName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'React.PropTypes.', Constructor.displayName || 'ReactClass', ReactPropTypeLocationNames[location], propName) : void 0;
	    }
	  }
	}
	
	function validateMethodOverride(isAlreadyDefined, name) {
	  var specPolicy = ReactClassInterface.hasOwnProperty(name) ? ReactClassInterface[name] : null;
	
	  // Disallow overriding of base class methods unless explicitly allowed.
	  if (ReactClassMixin.hasOwnProperty(name)) {
	    !(specPolicy === SpecPolicy.OVERRIDE_BASE) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClassInterface: You are attempting to override ' + '`%s` from your class specification. Ensure that your method names ' + 'do not overlap with React methods.', name) : invariant(false) : void 0;
	  }
	
	  // Disallow defining methods more than once unless explicitly allowed.
	  if (isAlreadyDefined) {
	    !(specPolicy === SpecPolicy.DEFINE_MANY || specPolicy === SpecPolicy.DEFINE_MANY_MERGED) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClassInterface: You are attempting to define ' + '`%s` on your component more than once. This conflict may be due ' + 'to a mixin.', name) : invariant(false) : void 0;
	  }
	}
	
	/**
	 * Mixin helper which handles policy validation and reserved
	 * specification keys when building React classes.
	 */
	function mixSpecIntoComponent(Constructor, spec) {
	  if (!spec) {
	    return;
	  }
	
	  !(typeof spec !== 'function') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClass: You\'re attempting to ' + 'use a component class or function as a mixin. Instead, just use a ' + 'regular object.') : invariant(false) : void 0;
	  !!ReactElement.isValidElement(spec) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClass: You\'re attempting to ' + 'use a component as a mixin. Instead, just use a regular object.') : invariant(false) : void 0;
	
	  var proto = Constructor.prototype;
	  var autoBindPairs = proto.__reactAutoBindPairs;
	
	  // By handling mixins before any other properties, we ensure the same
	  // chaining order is applied to methods with DEFINE_MANY policy, whether
	  // mixins are listed before or after these methods in the spec.
	  if (spec.hasOwnProperty(MIXINS_KEY)) {
	    RESERVED_SPEC_KEYS.mixins(Constructor, spec.mixins);
	  }
	
	  for (var name in spec) {
	    if (!spec.hasOwnProperty(name)) {
	      continue;
	    }
	
	    if (name === MIXINS_KEY) {
	      // We have already handled mixins in a special case above.
	      continue;
	    }
	
	    var property = spec[name];
	    var isAlreadyDefined = proto.hasOwnProperty(name);
	    validateMethodOverride(isAlreadyDefined, name);
	
	    if (RESERVED_SPEC_KEYS.hasOwnProperty(name)) {
	      RESERVED_SPEC_KEYS[name](Constructor, property);
	    } else {
	      // Setup methods on prototype:
	      // The following member methods should not be automatically bound:
	      // 1. Expected ReactClass methods (in the "interface").
	      // 2. Overridden methods (that were mixed in).
	      var isReactClassMethod = ReactClassInterface.hasOwnProperty(name);
	      var isFunction = typeof property === 'function';
	      var shouldAutoBind = isFunction && !isReactClassMethod && !isAlreadyDefined && spec.autobind !== false;
	
	      if (shouldAutoBind) {
	        autoBindPairs.push(name, property);
	        proto[name] = property;
	      } else {
	        if (isAlreadyDefined) {
	          var specPolicy = ReactClassInterface[name];
	
	          // These cases should already be caught by validateMethodOverride.
	          !(isReactClassMethod && (specPolicy === SpecPolicy.DEFINE_MANY_MERGED || specPolicy === SpecPolicy.DEFINE_MANY)) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClass: Unexpected spec policy %s for key %s ' + 'when mixing in component specs.', specPolicy, name) : invariant(false) : void 0;
	
	          // For methods which are defined more than once, call the existing
	          // methods before calling the new property, merging if appropriate.
	          if (specPolicy === SpecPolicy.DEFINE_MANY_MERGED) {
	            proto[name] = createMergedResultFunction(proto[name], property);
	          } else if (specPolicy === SpecPolicy.DEFINE_MANY) {
	            proto[name] = createChainedFunction(proto[name], property);
	          }
	        } else {
	          proto[name] = property;
	          if (process.env.NODE_ENV !== 'production') {
	            // Add verbose displayName to the function, which helps when looking
	            // at profiling tools.
	            if (typeof property === 'function' && spec.displayName) {
	              proto[name].displayName = spec.displayName + '_' + name;
	            }
	          }
	        }
	      }
	    }
	  }
	}
	
	function mixStaticSpecIntoComponent(Constructor, statics) {
	  if (!statics) {
	    return;
	  }
	  for (var name in statics) {
	    var property = statics[name];
	    if (!statics.hasOwnProperty(name)) {
	      continue;
	    }
	
	    var isReserved = name in RESERVED_SPEC_KEYS;
	    !!isReserved ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClass: You are attempting to define a reserved ' + 'property, `%s`, that shouldn\'t be on the "statics" key. Define it ' + 'as an instance property instead; it will still be accessible on the ' + 'constructor.', name) : invariant(false) : void 0;
	
	    var isInherited = name in Constructor;
	    !!isInherited ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClass: You are attempting to define ' + '`%s` on your component more than once. This conflict may be ' + 'due to a mixin.', name) : invariant(false) : void 0;
	    Constructor[name] = property;
	  }
	}
	
	/**
	 * Merge two objects, but throw if both contain the same key.
	 *
	 * @param {object} one The first object, which is mutated.
	 * @param {object} two The second object
	 * @return {object} one after it has been mutated to contain everything in two.
	 */
	function mergeIntoWithNoDuplicateKeys(one, two) {
	  !(one && two && typeof one === 'object' && typeof two === 'object') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.') : invariant(false) : void 0;
	
	  for (var key in two) {
	    if (two.hasOwnProperty(key)) {
	      !(one[key] === undefined) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'mergeIntoWithNoDuplicateKeys(): ' + 'Tried to merge two objects with the same key: `%s`. This conflict ' + 'may be due to a mixin; in particular, this may be caused by two ' + 'getInitialState() or getDefaultProps() methods returning objects ' + 'with clashing keys.', key) : invariant(false) : void 0;
	      one[key] = two[key];
	    }
	  }
	  return one;
	}
	
	/**
	 * Creates a function that invokes two functions and merges their return values.
	 *
	 * @param {function} one Function to invoke first.
	 * @param {function} two Function to invoke second.
	 * @return {function} Function that invokes the two argument functions.
	 * @private
	 */
	function createMergedResultFunction(one, two) {
	  return function mergedResult() {
	    var a = one.apply(this, arguments);
	    var b = two.apply(this, arguments);
	    if (a == null) {
	      return b;
	    } else if (b == null) {
	      return a;
	    }
	    var c = {};
	    mergeIntoWithNoDuplicateKeys(c, a);
	    mergeIntoWithNoDuplicateKeys(c, b);
	    return c;
	  };
	}
	
	/**
	 * Creates a function that invokes two functions and ignores their return vales.
	 *
	 * @param {function} one Function to invoke first.
	 * @param {function} two Function to invoke second.
	 * @return {function} Function that invokes the two argument functions.
	 * @private
	 */
	function createChainedFunction(one, two) {
	  return function chainedFunction() {
	    one.apply(this, arguments);
	    two.apply(this, arguments);
	  };
	}
	
	/**
	 * Binds a method to the component.
	 *
	 * @param {object} component Component whose method is going to be bound.
	 * @param {function} method Method to be bound.
	 * @return {function} The bound method.
	 */
	function bindAutoBindMethod(component, method) {
	  var boundMethod = method.bind(component);
	  if (process.env.NODE_ENV !== 'production') {
	    boundMethod.__reactBoundContext = component;
	    boundMethod.__reactBoundMethod = method;
	    boundMethod.__reactBoundArguments = null;
	    var componentName = component.constructor.displayName;
	    var _bind = boundMethod.bind;
	    boundMethod.bind = function (newThis) {
	      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }
	
	      // User is trying to bind() an autobound method; we effectively will
	      // ignore the value of "this" that the user is trying to use, so
	      // let's warn.
	      if (newThis !== component && newThis !== null) {
	        process.env.NODE_ENV !== 'production' ? warning(false, 'bind(): React component methods may only be bound to the ' + 'component instance. See %s', componentName) : void 0;
	      } else if (!args.length) {
	        process.env.NODE_ENV !== 'production' ? warning(false, 'bind(): You are binding a component method to the component. ' + 'React does this for you automatically in a high-performance ' + 'way, so you can safely remove this call. See %s', componentName) : void 0;
	        return boundMethod;
	      }
	      var reboundMethod = _bind.apply(boundMethod, arguments);
	      reboundMethod.__reactBoundContext = component;
	      reboundMethod.__reactBoundMethod = method;
	      reboundMethod.__reactBoundArguments = args;
	      return reboundMethod;
	    };
	  }
	  return boundMethod;
	}
	
	/**
	 * Binds all auto-bound methods in a component.
	 *
	 * @param {object} component Component whose method is going to be bound.
	 */
	function bindAutoBindMethods(component) {
	  var pairs = component.__reactAutoBindPairs;
	  for (var i = 0; i < pairs.length; i += 2) {
	    var autoBindKey = pairs[i];
	    var method = pairs[i + 1];
	    component[autoBindKey] = bindAutoBindMethod(component, method);
	  }
	}
	
	/**
	 * Add more to the ReactClass base class. These are all legacy features and
	 * therefore not already part of the modern ReactComponent.
	 */
	var ReactClassMixin = {
	
	  /**
	   * TODO: This will be deprecated because state should always keep a consistent
	   * type signature and the only use case for this, is to avoid that.
	   */
	  replaceState: function (newState, callback) {
	    this.updater.enqueueReplaceState(this, newState);
	    if (callback) {
	      this.updater.enqueueCallback(this, callback, 'replaceState');
	    }
	  },
	
	  /**
	   * Checks whether or not this composite component is mounted.
	   * @return {boolean} True if mounted, false otherwise.
	   * @protected
	   * @final
	   */
	  isMounted: function () {
	    return this.updater.isMounted(this);
	  }
	};
	
	var ReactClassComponent = function () {};
	_assign(ReactClassComponent.prototype, ReactComponent.prototype, ReactClassMixin);
	
	/**
	 * Module for creating composite components.
	 *
	 * @class ReactClass
	 */
	var ReactClass = {
	
	  /**
	   * Creates a composite component class given a class specification.
	   * See https://facebook.github.io/react/docs/top-level-api.html#react.createclass
	   *
	   * @param {object} spec Class specification (which must define `render`).
	   * @return {function} Component constructor function.
	   * @public
	   */
	  createClass: function (spec) {
	    var Constructor = function (props, context, updater) {
	      // This constructor gets overridden by mocks. The argument is used
	      // by mocks to assert on what gets mounted.
	
	      if (process.env.NODE_ENV !== 'production') {
	        process.env.NODE_ENV !== 'production' ? warning(this instanceof Constructor, 'Something is calling a React component directly. Use a factory or ' + 'JSX instead. See: https://fb.me/react-legacyfactory') : void 0;
	      }
	
	      // Wire up auto-binding
	      if (this.__reactAutoBindPairs.length) {
	        bindAutoBindMethods(this);
	      }
	
	      this.props = props;
	      this.context = context;
	      this.refs = emptyObject;
	      this.updater = updater || ReactNoopUpdateQueue;
	
	      this.state = null;
	
	      // ReactClasses doesn't have constructors. Instead, they use the
	      // getInitialState and componentWillMount methods for initialization.
	
	      var initialState = this.getInitialState ? this.getInitialState() : null;
	      if (process.env.NODE_ENV !== 'production') {
	        // We allow auto-mocks to proceed as if they're returning null.
	        if (initialState === undefined && this.getInitialState._isMockFunction) {
	          // This is probably bad practice. Consider warning here and
	          // deprecating this convenience.
	          initialState = null;
	        }
	      }
	      !(typeof initialState === 'object' && !Array.isArray(initialState)) ? process.env.NODE_ENV !== 'production' ? invariant(false, '%s.getInitialState(): must return an object or null', Constructor.displayName || 'ReactCompositeComponent') : invariant(false) : void 0;
	
	      this.state = initialState;
	    };
	    Constructor.prototype = new ReactClassComponent();
	    Constructor.prototype.constructor = Constructor;
	    Constructor.prototype.__reactAutoBindPairs = [];
	
	    injectedMixins.forEach(mixSpecIntoComponent.bind(null, Constructor));
	
	    mixSpecIntoComponent(Constructor, spec);
	
	    // Initialize the defaultProps property after all mixins have been merged.
	    if (Constructor.getDefaultProps) {
	      Constructor.defaultProps = Constructor.getDefaultProps();
	    }
	
	    if (process.env.NODE_ENV !== 'production') {
	      // This is a tag to indicate that the use of these method names is ok,
	      // since it's used with createClass. If it's not, then it's likely a
	      // mistake so we'll warn you to use the static property, property
	      // initializer or constructor respectively.
	      if (Constructor.getDefaultProps) {
	        Constructor.getDefaultProps.isReactClassApproved = {};
	      }
	      if (Constructor.prototype.getInitialState) {
	        Constructor.prototype.getInitialState.isReactClassApproved = {};
	      }
	    }
	
	    !Constructor.prototype.render ? process.env.NODE_ENV !== 'production' ? invariant(false, 'createClass(...): Class specification must implement a `render` method.') : invariant(false) : void 0;
	
	    if (process.env.NODE_ENV !== 'production') {
	      process.env.NODE_ENV !== 'production' ? warning(!Constructor.prototype.componentShouldUpdate, '%s has a method called ' + 'componentShouldUpdate(). Did you mean shouldComponentUpdate()? ' + 'The name is phrased as a question because the function is ' + 'expected to return a value.', spec.displayName || 'A component') : void 0;
	      process.env.NODE_ENV !== 'production' ? warning(!Constructor.prototype.componentWillRecieveProps, '%s has a method called ' + 'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?', spec.displayName || 'A component') : void 0;
	    }
	
	    // Reduce time spent doing lookups by setting these on the prototype.
	    for (var methodName in ReactClassInterface) {
	      if (!Constructor.prototype[methodName]) {
	        Constructor.prototype[methodName] = null;
	      }
	    }
	
	    return Constructor;
	  },
	
	  injection: {
	    injectMixin: function (mixin) {
	      injectedMixins.push(mixin);
	    }
	  }
	
	};
	
	module.exports = ReactClass;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactPropTypeLocations
	 */
	
	'use strict';
	
	var keyMirror = __webpack_require__(30);
	
	var ReactPropTypeLocations = keyMirror({
	  prop: null,
	  context: null,
	  childContext: null
	});
	
	module.exports = ReactPropTypeLocations;

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks static-only
	 */
	
	'use strict';
	
	var invariant = __webpack_require__(8);
	
	/**
	 * Constructs an enumeration with keys equal to their value.
	 *
	 * For example:
	 *
	 *   var COLORS = keyMirror({blue: null, red: null});
	 *   var myColor = COLORS.blue;
	 *   var isColorValid = !!COLORS[myColor];
	 *
	 * The last line could not be performed if the values of the generated enum were
	 * not equal to their keys.
	 *
	 *   Input:  {key1: val1, key2: val2}
	 *   Output: {key1: key1, key2: key2}
	 *
	 * @param {object} obj
	 * @return {object}
	 */
	var keyMirror = function keyMirror(obj) {
	  var ret = {};
	  var key;
	  !(obj instanceof Object && !Array.isArray(obj)) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'keyMirror(...): Argument must be an object.') : invariant(false) : void 0;
	  for (key in obj) {
	    if (!obj.hasOwnProperty(key)) {
	      continue;
	    }
	    ret[key] = key;
	  }
	  return ret;
	};
	
	module.exports = keyMirror;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactPropTypeLocationNames
	 */
	
	'use strict';
	
	var ReactPropTypeLocationNames = {};
	
	if (process.env.NODE_ENV !== 'production') {
	  ReactPropTypeLocationNames = {
	    prop: 'prop',
	    context: 'context',
	    childContext: 'child context'
	  };
	}
	
	module.exports = ReactPropTypeLocationNames;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 32 */
/***/ function(module, exports) {

	"use strict";
	
	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	
	/**
	 * Allows extraction of a minified key. Let's the build system minify keys
	 * without losing the ability to dynamically use key strings as values
	 * themselves. Pass in an object with a single key/val pair and it will return
	 * you the string key of that single record. Suppose you want to grab the
	 * value for a key 'className' inside of an object. Key/val minification may
	 * have aliased that key to be 'xa12'. keyOf({className: null}) will return
	 * 'xa12' in that case. Resolve keys you want to use once at startup time, then
	 * reuse those resolutions.
	 */
	var keyOf = function keyOf(oneKeyObj) {
	  var key;
	  for (key in oneKeyObj) {
	    if (!oneKeyObj.hasOwnProperty(key)) {
	      continue;
	    }
	    return key;
	  }
	  return null;
	};
	
	module.exports = keyOf;

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDOMFactories
	 */
	
	'use strict';
	
	var ReactElement = __webpack_require__(9);
	var ReactElementValidator = __webpack_require__(34);
	
	var mapObject = __webpack_require__(35);
	
	/**
	 * Create a factory that creates HTML tag elements.
	 *
	 * @param {string} tag Tag name (e.g. `div`).
	 * @private
	 */
	function createDOMFactory(tag) {
	  if (process.env.NODE_ENV !== 'production') {
	    return ReactElementValidator.createFactory(tag);
	  }
	  return ReactElement.createFactory(tag);
	}
	
	/**
	 * Creates a mapping from supported HTML tags to `ReactDOMComponent` classes.
	 * This is also accessible via `React.DOM`.
	 *
	 * @public
	 */
	var ReactDOMFactories = mapObject({
	  a: 'a',
	  abbr: 'abbr',
	  address: 'address',
	  area: 'area',
	  article: 'article',
	  aside: 'aside',
	  audio: 'audio',
	  b: 'b',
	  base: 'base',
	  bdi: 'bdi',
	  bdo: 'bdo',
	  big: 'big',
	  blockquote: 'blockquote',
	  body: 'body',
	  br: 'br',
	  button: 'button',
	  canvas: 'canvas',
	  caption: 'caption',
	  cite: 'cite',
	  code: 'code',
	  col: 'col',
	  colgroup: 'colgroup',
	  data: 'data',
	  datalist: 'datalist',
	  dd: 'dd',
	  del: 'del',
	  details: 'details',
	  dfn: 'dfn',
	  dialog: 'dialog',
	  div: 'div',
	  dl: 'dl',
	  dt: 'dt',
	  em: 'em',
	  embed: 'embed',
	  fieldset: 'fieldset',
	  figcaption: 'figcaption',
	  figure: 'figure',
	  footer: 'footer',
	  form: 'form',
	  h1: 'h1',
	  h2: 'h2',
	  h3: 'h3',
	  h4: 'h4',
	  h5: 'h5',
	  h6: 'h6',
	  head: 'head',
	  header: 'header',
	  hgroup: 'hgroup',
	  hr: 'hr',
	  html: 'html',
	  i: 'i',
	  iframe: 'iframe',
	  img: 'img',
	  input: 'input',
	  ins: 'ins',
	  kbd: 'kbd',
	  keygen: 'keygen',
	  label: 'label',
	  legend: 'legend',
	  li: 'li',
	  link: 'link',
	  main: 'main',
	  map: 'map',
	  mark: 'mark',
	  menu: 'menu',
	  menuitem: 'menuitem',
	  meta: 'meta',
	  meter: 'meter',
	  nav: 'nav',
	  noscript: 'noscript',
	  object: 'object',
	  ol: 'ol',
	  optgroup: 'optgroup',
	  option: 'option',
	  output: 'output',
	  p: 'p',
	  param: 'param',
	  picture: 'picture',
	  pre: 'pre',
	  progress: 'progress',
	  q: 'q',
	  rp: 'rp',
	  rt: 'rt',
	  ruby: 'ruby',
	  s: 's',
	  samp: 'samp',
	  script: 'script',
	  section: 'section',
	  select: 'select',
	  small: 'small',
	  source: 'source',
	  span: 'span',
	  strong: 'strong',
	  style: 'style',
	  sub: 'sub',
	  summary: 'summary',
	  sup: 'sup',
	  table: 'table',
	  tbody: 'tbody',
	  td: 'td',
	  textarea: 'textarea',
	  tfoot: 'tfoot',
	  th: 'th',
	  thead: 'thead',
	  time: 'time',
	  title: 'title',
	  tr: 'tr',
	  track: 'track',
	  u: 'u',
	  ul: 'ul',
	  'var': 'var',
	  video: 'video',
	  wbr: 'wbr',
	
	  // SVG
	  circle: 'circle',
	  clipPath: 'clipPath',
	  defs: 'defs',
	  ellipse: 'ellipse',
	  g: 'g',
	  image: 'image',
	  line: 'line',
	  linearGradient: 'linearGradient',
	  mask: 'mask',
	  path: 'path',
	  pattern: 'pattern',
	  polygon: 'polygon',
	  polyline: 'polyline',
	  radialGradient: 'radialGradient',
	  rect: 'rect',
	  stop: 'stop',
	  svg: 'svg',
	  text: 'text',
	  tspan: 'tspan'
	
	}, createDOMFactory);
	
	module.exports = ReactDOMFactories;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactElementValidator
	 */
	
	/**
	 * ReactElementValidator provides a wrapper around a element factory
	 * which validates the props passed to the element. This is intended to be
	 * used only in DEV and could be replaced by a static type checker for languages
	 * that support it.
	 */
	
	'use strict';
	
	var ReactElement = __webpack_require__(9);
	var ReactPropTypeLocations = __webpack_require__(29);
	var ReactPropTypeLocationNames = __webpack_require__(31);
	var ReactCurrentOwner = __webpack_require__(10);
	
	var canDefineProperty = __webpack_require__(13);
	var getIteratorFn = __webpack_require__(15);
	var invariant = __webpack_require__(8);
	var warning = __webpack_require__(11);
	
	function getDeclarationErrorAddendum() {
	  if (ReactCurrentOwner.current) {
	    var name = ReactCurrentOwner.current.getName();
	    if (name) {
	      return ' Check the render method of `' + name + '`.';
	    }
	  }
	  return '';
	}
	
	/**
	 * Warn if there's no key explicitly set on dynamic arrays of children or
	 * object keys are not valid. This allows us to keep track of children between
	 * updates.
	 */
	var ownerHasKeyUseWarning = {};
	
	var loggedTypeFailures = {};
	
	/**
	 * Warn if the element doesn't have an explicit key assigned to it.
	 * This element is in an array. The array could grow and shrink or be
	 * reordered. All children that haven't already been validated are required to
	 * have a "key" property assigned to it.
	 *
	 * @internal
	 * @param {ReactElement} element Element that requires a key.
	 * @param {*} parentType element's parent's type.
	 */
	function validateExplicitKey(element, parentType) {
	  if (!element._store || element._store.validated || element.key != null) {
	    return;
	  }
	  element._store.validated = true;
	
	  var addenda = getAddendaForKeyUse('uniqueKey', element, parentType);
	  if (addenda === null) {
	    // we already showed the warning
	    return;
	  }
	  process.env.NODE_ENV !== 'production' ? warning(false, 'Each child in an array or iterator should have a unique "key" prop.' + '%s%s%s', addenda.parentOrOwner || '', addenda.childOwner || '', addenda.url || '') : void 0;
	}
	
	/**
	 * Shared warning and monitoring code for the key warnings.
	 *
	 * @internal
	 * @param {string} messageType A key used for de-duping warnings.
	 * @param {ReactElement} element Component that requires a key.
	 * @param {*} parentType element's parent's type.
	 * @returns {?object} A set of addenda to use in the warning message, or null
	 * if the warning has already been shown before (and shouldn't be shown again).
	 */
	function getAddendaForKeyUse(messageType, element, parentType) {
	  var addendum = getDeclarationErrorAddendum();
	  if (!addendum) {
	    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
	    if (parentName) {
	      addendum = ' Check the top-level render call using <' + parentName + '>.';
	    }
	  }
	
	  var memoizer = ownerHasKeyUseWarning[messageType] || (ownerHasKeyUseWarning[messageType] = {});
	  if (memoizer[addendum]) {
	    return null;
	  }
	  memoizer[addendum] = true;
	
	  var addenda = {
	    parentOrOwner: addendum,
	    url: ' See https://fb.me/react-warning-keys for more information.',
	    childOwner: null
	  };
	
	  // Usually the current owner is the offender, but if it accepts children as a
	  // property, it may be the creator of the child that's responsible for
	  // assigning it a key.
	  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
	    // Give the component that originally created this child.
	    addenda.childOwner = ' It was passed a child from ' + element._owner.getName() + '.';
	  }
	
	  return addenda;
	}
	
	/**
	 * Ensure that every element either is passed in a static location, in an
	 * array with an explicit keys property defined, or in an object literal
	 * with valid key property.
	 *
	 * @internal
	 * @param {ReactNode} node Statically passed child of any type.
	 * @param {*} parentType node's parent's type.
	 */
	function validateChildKeys(node, parentType) {
	  if (typeof node !== 'object') {
	    return;
	  }
	  if (Array.isArray(node)) {
	    for (var i = 0; i < node.length; i++) {
	      var child = node[i];
	      if (ReactElement.isValidElement(child)) {
	        validateExplicitKey(child, parentType);
	      }
	    }
	  } else if (ReactElement.isValidElement(node)) {
	    // This element was passed in a valid location.
	    if (node._store) {
	      node._store.validated = true;
	    }
	  } else if (node) {
	    var iteratorFn = getIteratorFn(node);
	    // Entry iterators provide implicit keys.
	    if (iteratorFn) {
	      if (iteratorFn !== node.entries) {
	        var iterator = iteratorFn.call(node);
	        var step;
	        while (!(step = iterator.next()).done) {
	          if (ReactElement.isValidElement(step.value)) {
	            validateExplicitKey(step.value, parentType);
	          }
	        }
	      }
	    }
	  }
	}
	
	/**
	 * Assert that the props are valid
	 *
	 * @param {string} componentName Name of the component for error messages.
	 * @param {object} propTypes Map of prop name to a ReactPropType
	 * @param {object} props
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @private
	 */
	function checkPropTypes(componentName, propTypes, props, location) {
	  for (var propName in propTypes) {
	    if (propTypes.hasOwnProperty(propName)) {
	      var error;
	      // Prop type validation may throw. In case they do, we don't want to
	      // fail the render phase where it didn't fail before. So we log it.
	      // After these have been cleaned up, we'll let them throw.
	      try {
	        // This is intentionally an invariant that gets caught. It's the same
	        // behavior as without this statement except with a better message.
	        !(typeof propTypes[propName] === 'function') ? process.env.NODE_ENV !== 'production' ? invariant(false, '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'React.PropTypes.', componentName || 'React class', ReactPropTypeLocationNames[location], propName) : invariant(false) : void 0;
	        error = propTypes[propName](props, propName, componentName, location);
	      } catch (ex) {
	        error = ex;
	      }
	      process.env.NODE_ENV !== 'production' ? warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', ReactPropTypeLocationNames[location], propName, typeof error) : void 0;
	      if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	        // Only monitor this failure once because there tends to be a lot of the
	        // same error.
	        loggedTypeFailures[error.message] = true;
	
	        var addendum = getDeclarationErrorAddendum();
	        process.env.NODE_ENV !== 'production' ? warning(false, 'Failed propType: %s%s', error.message, addendum) : void 0;
	      }
	    }
	  }
	}
	
	/**
	 * Given an element, validate that its props follow the propTypes definition,
	 * provided by the type.
	 *
	 * @param {ReactElement} element
	 */
	function validatePropTypes(element) {
	  var componentClass = element.type;
	  if (typeof componentClass !== 'function') {
	    return;
	  }
	  var name = componentClass.displayName || componentClass.name;
	  if (componentClass.propTypes) {
	    checkPropTypes(name, componentClass.propTypes, element.props, ReactPropTypeLocations.prop);
	  }
	  if (typeof componentClass.getDefaultProps === 'function') {
	    process.env.NODE_ENV !== 'production' ? warning(componentClass.getDefaultProps.isReactClassApproved, 'getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.') : void 0;
	  }
	}
	
	var ReactElementValidator = {
	
	  createElement: function (type, props, children) {
	    var validType = typeof type === 'string' || typeof type === 'function';
	    // We warn in this case but don't throw. We expect the element creation to
	    // succeed and there will likely be errors in render.
	    process.env.NODE_ENV !== 'production' ? warning(validType, 'React.createElement: type should not be null, undefined, boolean, or ' + 'number. It should be a string (for DOM elements) or a ReactClass ' + '(for composite components).%s', getDeclarationErrorAddendum()) : void 0;
	
	    var element = ReactElement.createElement.apply(this, arguments);
	
	    // The result can be nullish if a mock or a custom function is used.
	    // TODO: Drop this when these are no longer allowed as the type argument.
	    if (element == null) {
	      return element;
	    }
	
	    // Skip key warning if the type isn't valid since our key validation logic
	    // doesn't expect a non-string/function type and can throw confusing errors.
	    // We don't want exception behavior to differ between dev and prod.
	    // (Rendering will throw with a helpful message and as soon as the type is
	    // fixed, the key warnings will appear.)
	    if (validType) {
	      for (var i = 2; i < arguments.length; i++) {
	        validateChildKeys(arguments[i], type);
	      }
	    }
	
	    validatePropTypes(element);
	
	    return element;
	  },
	
	  createFactory: function (type) {
	    var validatedFactory = ReactElementValidator.createElement.bind(null, type);
	    // Legacy hook TODO: Warn if this is accessed
	    validatedFactory.type = type;
	
	    if (process.env.NODE_ENV !== 'production') {
	      if (canDefineProperty) {
	        Object.defineProperty(validatedFactory, 'type', {
	          enumerable: false,
	          get: function () {
	            process.env.NODE_ENV !== 'production' ? warning(false, 'Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.') : void 0;
	            Object.defineProperty(this, 'type', {
	              value: type
	            });
	            return type;
	          }
	        });
	      }
	    }
	
	    return validatedFactory;
	  },
	
	  cloneElement: function (element, props, children) {
	    var newElement = ReactElement.cloneElement.apply(this, arguments);
	    for (var i = 2; i < arguments.length; i++) {
	      validateChildKeys(arguments[i], newElement.type);
	    }
	    validatePropTypes(newElement);
	    return newElement;
	  }
	
	};
	
	module.exports = ReactElementValidator;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 35 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	
	'use strict';
	
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	
	/**
	 * Executes the provided `callback` once for each enumerable own property in the
	 * object and constructs a new object from the results. The `callback` is
	 * invoked with three arguments:
	 *
	 *  - the property value
	 *  - the property name
	 *  - the object being traversed
	 *
	 * Properties that are added after the call to `mapObject` will not be visited
	 * by `callback`. If the values of existing properties are changed, the value
	 * passed to `callback` will be the value at the time `mapObject` visits them.
	 * Properties that are deleted before being visited are not visited.
	 *
	 * @grep function objectMap()
	 * @grep function objMap()
	 *
	 * @param {?object} object
	 * @param {function} callback
	 * @param {*} context
	 * @return {?object}
	 */
	function mapObject(object, callback, context) {
	  if (!object) {
	    return null;
	  }
	  var result = {};
	  for (var name in object) {
	    if (hasOwnProperty.call(object, name)) {
	      result[name] = callback.call(context, object[name], name, object);
	    }
	  }
	  return result;
	}
	
	module.exports = mapObject;

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactPropTypes
	 */
	
	'use strict';
	
	var ReactElement = __webpack_require__(9);
	var ReactPropTypeLocationNames = __webpack_require__(31);
	
	var emptyFunction = __webpack_require__(12);
	var getIteratorFn = __webpack_require__(15);
	
	/**
	 * Collection of methods that allow declaration and validation of props that are
	 * supplied to React components. Example usage:
	 *
	 *   var Props = require('ReactPropTypes');
	 *   var MyArticle = React.createClass({
	 *     propTypes: {
	 *       // An optional string prop named "description".
	 *       description: Props.string,
	 *
	 *       // A required enum prop named "category".
	 *       category: Props.oneOf(['News','Photos']).isRequired,
	 *
	 *       // A prop named "dialog" that requires an instance of Dialog.
	 *       dialog: Props.instanceOf(Dialog).isRequired
	 *     },
	 *     render: function() { ... }
	 *   });
	 *
	 * A more formal specification of how these methods are used:
	 *
	 *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
	 *   decl := ReactPropTypes.{type}(.isRequired)?
	 *
	 * Each and every declaration produces a function with the same signature. This
	 * allows the creation of custom validation functions. For example:
	 *
	 *  var MyLink = React.createClass({
	 *    propTypes: {
	 *      // An optional string or URI prop named "href".
	 *      href: function(props, propName, componentName) {
	 *        var propValue = props[propName];
	 *        if (propValue != null && typeof propValue !== 'string' &&
	 *            !(propValue instanceof URI)) {
	 *          return new Error(
	 *            'Expected a string or an URI for ' + propName + ' in ' +
	 *            componentName
	 *          );
	 *        }
	 *      }
	 *    },
	 *    render: function() {...}
	 *  });
	 *
	 * @internal
	 */
	
	var ANONYMOUS = '<<anonymous>>';
	
	var ReactPropTypes = {
	  array: createPrimitiveTypeChecker('array'),
	  bool: createPrimitiveTypeChecker('boolean'),
	  func: createPrimitiveTypeChecker('function'),
	  number: createPrimitiveTypeChecker('number'),
	  object: createPrimitiveTypeChecker('object'),
	  string: createPrimitiveTypeChecker('string'),
	
	  any: createAnyTypeChecker(),
	  arrayOf: createArrayOfTypeChecker,
	  element: createElementTypeChecker(),
	  instanceOf: createInstanceTypeChecker,
	  node: createNodeChecker(),
	  objectOf: createObjectOfTypeChecker,
	  oneOf: createEnumTypeChecker,
	  oneOfType: createUnionTypeChecker,
	  shape: createShapeTypeChecker
	};
	
	/**
	 * inlined Object.is polyfill to avoid requiring consumers ship their own
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	 */
	/*eslint-disable no-self-compare*/
	function is(x, y) {
	  // SameValue algorithm
	  if (x === y) {
	    // Steps 1-5, 7-10
	    // Steps 6.b-6.e: +0 != -0
	    return x !== 0 || 1 / x === 1 / y;
	  } else {
	    // Step 6.a: NaN == NaN
	    return x !== x && y !== y;
	  }
	}
	/*eslint-enable no-self-compare*/
	
	function createChainableTypeChecker(validate) {
	  function checkType(isRequired, props, propName, componentName, location, propFullName) {
	    componentName = componentName || ANONYMOUS;
	    propFullName = propFullName || propName;
	    if (props[propName] == null) {
	      var locationName = ReactPropTypeLocationNames[location];
	      if (isRequired) {
	        return new Error('Required ' + locationName + ' `' + propFullName + '` was not specified in ' + ('`' + componentName + '`.'));
	      }
	      return null;
	    } else {
	      return validate(props, propName, componentName, location, propFullName);
	    }
	  }
	
	  var chainedCheckType = checkType.bind(null, false);
	  chainedCheckType.isRequired = checkType.bind(null, true);
	
	  return chainedCheckType;
	}
	
	function createPrimitiveTypeChecker(expectedType) {
	  function validate(props, propName, componentName, location, propFullName) {
	    var propValue = props[propName];
	    var propType = getPropType(propValue);
	    if (propType !== expectedType) {
	      var locationName = ReactPropTypeLocationNames[location];
	      // `propValue` being instance of, say, date/regexp, pass the 'object'
	      // check, but we can offer a more precise error message here rather than
	      // 'of type `object`'.
	      var preciseType = getPreciseType(propValue);
	
	      return new Error('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}
	
	function createAnyTypeChecker() {
	  return createChainableTypeChecker(emptyFunction.thatReturns(null));
	}
	
	function createArrayOfTypeChecker(typeChecker) {
	  function validate(props, propName, componentName, location, propFullName) {
	    if (typeof typeChecker !== 'function') {
	      return new Error('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
	    }
	    var propValue = props[propName];
	    if (!Array.isArray(propValue)) {
	      var locationName = ReactPropTypeLocationNames[location];
	      var propType = getPropType(propValue);
	      return new Error('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
	    }
	    for (var i = 0; i < propValue.length; i++) {
	      var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']');
	      if (error instanceof Error) {
	        return error;
	      }
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}
	
	function createElementTypeChecker() {
	  function validate(props, propName, componentName, location, propFullName) {
	    if (!ReactElement.isValidElement(props[propName])) {
	      var locationName = ReactPropTypeLocationNames[location];
	      return new Error('Invalid ' + locationName + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a single ReactElement.'));
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}
	
	function createInstanceTypeChecker(expectedClass) {
	  function validate(props, propName, componentName, location, propFullName) {
	    if (!(props[propName] instanceof expectedClass)) {
	      var locationName = ReactPropTypeLocationNames[location];
	      var expectedClassName = expectedClass.name || ANONYMOUS;
	      var actualClassName = getClassName(props[propName]);
	      return new Error('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}
	
	function createEnumTypeChecker(expectedValues) {
	  if (!Array.isArray(expectedValues)) {
	    return createChainableTypeChecker(function () {
	      return new Error('Invalid argument supplied to oneOf, expected an instance of array.');
	    });
	  }
	
	  function validate(props, propName, componentName, location, propFullName) {
	    var propValue = props[propName];
	    for (var i = 0; i < expectedValues.length; i++) {
	      if (is(propValue, expectedValues[i])) {
	        return null;
	      }
	    }
	
	    var locationName = ReactPropTypeLocationNames[location];
	    var valuesString = JSON.stringify(expectedValues);
	    return new Error('Invalid ' + locationName + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
	  }
	  return createChainableTypeChecker(validate);
	}
	
	function createObjectOfTypeChecker(typeChecker) {
	  function validate(props, propName, componentName, location, propFullName) {
	    if (typeof typeChecker !== 'function') {
	      return new Error('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
	    }
	    var propValue = props[propName];
	    var propType = getPropType(propValue);
	    if (propType !== 'object') {
	      var locationName = ReactPropTypeLocationNames[location];
	      return new Error('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
	    }
	    for (var key in propValue) {
	      if (propValue.hasOwnProperty(key)) {
	        var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key);
	        if (error instanceof Error) {
	          return error;
	        }
	      }
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}
	
	function createUnionTypeChecker(arrayOfTypeCheckers) {
	  if (!Array.isArray(arrayOfTypeCheckers)) {
	    return createChainableTypeChecker(function () {
	      return new Error('Invalid argument supplied to oneOfType, expected an instance of array.');
	    });
	  }
	
	  function validate(props, propName, componentName, location, propFullName) {
	    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	      var checker = arrayOfTypeCheckers[i];
	      if (checker(props, propName, componentName, location, propFullName) == null) {
	        return null;
	      }
	    }
	
	    var locationName = ReactPropTypeLocationNames[location];
	    return new Error('Invalid ' + locationName + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
	  }
	  return createChainableTypeChecker(validate);
	}
	
	function createNodeChecker() {
	  function validate(props, propName, componentName, location, propFullName) {
	    if (!isNode(props[propName])) {
	      var locationName = ReactPropTypeLocationNames[location];
	      return new Error('Invalid ' + locationName + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}
	
	function createShapeTypeChecker(shapeTypes) {
	  function validate(props, propName, componentName, location, propFullName) {
	    var propValue = props[propName];
	    var propType = getPropType(propValue);
	    if (propType !== 'object') {
	      var locationName = ReactPropTypeLocationNames[location];
	      return new Error('Invalid ' + locationName + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	    }
	    for (var key in shapeTypes) {
	      var checker = shapeTypes[key];
	      if (!checker) {
	        continue;
	      }
	      var error = checker(propValue, key, componentName, location, propFullName + '.' + key);
	      if (error) {
	        return error;
	      }
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}
	
	function isNode(propValue) {
	  switch (typeof propValue) {
	    case 'number':
	    case 'string':
	    case 'undefined':
	      return true;
	    case 'boolean':
	      return !propValue;
	    case 'object':
	      if (Array.isArray(propValue)) {
	        return propValue.every(isNode);
	      }
	      if (propValue === null || ReactElement.isValidElement(propValue)) {
	        return true;
	      }
	
	      var iteratorFn = getIteratorFn(propValue);
	      if (iteratorFn) {
	        var iterator = iteratorFn.call(propValue);
	        var step;
	        if (iteratorFn !== propValue.entries) {
	          while (!(step = iterator.next()).done) {
	            if (!isNode(step.value)) {
	              return false;
	            }
	          }
	        } else {
	          // Iterator will provide entry [k,v] tuples rather than values.
	          while (!(step = iterator.next()).done) {
	            var entry = step.value;
	            if (entry) {
	              if (!isNode(entry[1])) {
	                return false;
	              }
	            }
	          }
	        }
	      } else {
	        return false;
	      }
	
	      return true;
	    default:
	      return false;
	  }
	}
	
	// Equivalent of `typeof` but with special handling for array and regexp.
	function getPropType(propValue) {
	  var propType = typeof propValue;
	  if (Array.isArray(propValue)) {
	    return 'array';
	  }
	  if (propValue instanceof RegExp) {
	    // Old webkits (at least until Android 4.0) return 'function' rather than
	    // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
	    // passes PropTypes.object.
	    return 'object';
	  }
	  return propType;
	}
	
	// This handles more types than `getPropType`. Only used for error messages.
	// See `createPrimitiveTypeChecker`.
	function getPreciseType(propValue) {
	  var propType = getPropType(propValue);
	  if (propType === 'object') {
	    if (propValue instanceof Date) {
	      return 'date';
	    } else if (propValue instanceof RegExp) {
	      return 'regexp';
	    }
	  }
	  return propType;
	}
	
	// Returns class name of the object, if any.
	function getClassName(propValue) {
	  if (!propValue.constructor || !propValue.constructor.name) {
	    return ANONYMOUS;
	  }
	  return propValue.constructor.name;
	}
	
	module.exports = ReactPropTypes;

/***/ },
/* 37 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactVersion
	 */
	
	'use strict';
	
	module.exports = '15.1.0';

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule onlyChild
	 */
	'use strict';
	
	var ReactElement = __webpack_require__(9);
	
	var invariant = __webpack_require__(8);
	
	/**
	 * Returns the first child in a collection of children and verifies that there
	 * is only one child in the collection.
	 *
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.only
	 *
	 * The current implementation of this function assumes that a single child gets
	 * passed without a wrapper, but the purpose of this helper function is to
	 * abstract away the particular structure of children.
	 *
	 * @param {?object} children Child collection structure.
	 * @return {ReactElement} The first and only `ReactElement` contained in the
	 * structure.
	 */
	function onlyChild(children) {
	  !ReactElement.isValidElement(children) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'onlyChild must be passed a children with exactly one child.') : invariant(false) : void 0;
	  return children;
	}
	
	module.exports = onlyChild;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Progress = function (_React$Component) {
	    _inherits(Progress, _React$Component);
	
	    function Progress() {
	        _classCallCheck(this, Progress);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Progress).call(this));
	    }
	
	    _createClass(Progress, [{
	        key: "componentWillMount",
	        value: function componentWillMount() {
	            var colors = this.props.colors;
	            if (!colors.start || !colors.end || !colors.back) console.error("Colors prop must have \"start\", \"end\" and \"back\" attributes.");
	        }
	    }, {
	        key: "componentWillUnmount",
	        value: function componentWillUnmount() {}
	    }, {
	        key: "render",
	        value: function render() {
	            var _this2 = this;
	
	            var value = 100 / parseInt(this.props.max) * this.props.value;
	            var style = {
	                backgroundImage: "linear-gradient(to right, " + this.props.colors.start + " 0%, " + this.props.colors.end + " " + value + "%, " + this.props.colors.back + " " + value + "%, " + this.props.colors.back + " )"
	            };
	            return _react2.default.createElement("input", _extends({
	                type: "range",
	                step: this.props.step,
	                min: this.props.min,
	                max: this.props.max,
	                value: this.props.value,
	                className: this.props.className,
	                style: style,
	                ref: function ref(_ref) {
	                    return _this2._progress = _ref;
	                }
	            }, this.props.attributes));
	        }
	    }]);
	
	    return Progress;
	}(_react2.default.Component);
	
	Progress.propTypes = {
	    step: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.number, _react2.default.PropTypes.string]),
	    min: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.number, _react2.default.PropTypes.string]),
	    max: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.number, _react2.default.PropTypes.string]),
	    value: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.number, _react2.default.PropTypes.string]),
	    className: _react2.default.PropTypes.string,
	    // Standard html tag attributes
	    attributes: _react2.default.PropTypes.object,
	    // Color pattern object
	    colors: _react2.default.PropTypes.object
	};
	
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
	};
	
	exports.default = Progress;

/***/ },
/* 40 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var VideoActions = function () {
	    function VideoActions(videoComponent) {
	        var _this = this;
	
	        _classCallCheck(this, VideoActions);
	
	        this.toggleFullscreen = function () {
	            if (_this.videoComponent.state.fullscreen) {
	                _this.videoComponent.onDefaultscreenSet({});
	            } else {
	                _this.videoComponent.onFullscreenSet({});
	            }
	        };
	
	        this.toggleMute = function () {
	            if (!_this.muted) {
	                _this.mute();
	            } else {
	                _this.unmute();
	            }
	        };
	
	        this.togglePlay = function () {
	            if (_this.videoComponent.state.playing) {
	                _this.pause();
	            } else {
	                _this.play();
	            }
	        };
	
	        this.videoComponent = videoComponent;
	    }
	
	    _createClass(VideoActions, [{
	        key: "play",
	        value: function play() {
	            if (!this.videoComponent._video) return;
	            this.videoComponent._video.play();
	        }
	    }, {
	        key: "pause",
	        value: function pause() {
	            if (!this.videoComponent._video) return;
	            this.videoComponent._video.pause();
	        }
	    }, {
	        key: "mute",
	        value: function mute() {
	            var _this2 = this;
	
	            if (!this.videoComponent._video) return;
	            this.beforeMute = this.videoComponent.state.volume;
	            this.videoComponent.setState({
	                volume: 0
	            }, function () {
	                _this2.muted = true;
	                _this2.videoComponent._video.volume = 0;
	                _this2.videoComponent._muteButton.style.display = "none";
	                _this2.videoComponent._unmuteButton.style.display = "block";
	            });
	        }
	    }, {
	        key: "unmute",
	        value: function unmute() {
	            var _this3 = this;
	
	            if (!this.videoComponent._video) return;
	            var volume = this.beforeMute || 1;
	            this.videoComponent.setState({
	                volume: volume
	            }, function () {
	                _this3.muted = false;
	                _this3.videoComponent._video.volume = volume;
	                _this3.videoComponent._muteButton.style.display = "block";
	                _this3.videoComponent._unmuteButton.style.display = "none";
	            });
	        }
	    }, {
	        key: "volumeUp",
	        value: function volumeUp() {
	            var volume = this.videoComponent.state.volume;
	            if (volume >= 1) return;
	            volume += 0.1;
	            this.setVolume(volume);
	        }
	    }, {
	        key: "volumeDown",
	        value: function volumeDown() {
	            var volume = this.videoComponent.state.volume;
	            if (volume <= 0) return;
	            volume -= 0.1;
	            this.setVolume(volume);
	        }
	    }, {
	        key: "setVolume",
	        value: function setVolume(volume) {
	            var _this4 = this;
	
	            this.videoComponent.setState({
	                volume: volume
	            }, function () {
	                _this4.videoComponent._video.volume = volume;
	            });
	        }
	    }, {
	        key: "back",
	        value: function back() {
	            var _this5 = this;
	
	            if (!this.videoComponent._video) return;
	            var _videoComponent$_vide = this.videoComponent._video;
	            var currentTime = _videoComponent$_vide.currentTime;
	            var duration = _videoComponent$_vide.duration;
	
	            var newTime = 0;
	            if (currentTime - 5 > 0) {
	                newTime = currentTime - 5;
	            }
	            this.videoComponent._video.currentTime = newTime;
	            var progress = newTime / duration * 100;
	            this.videoComponent.setState({
	                progress: progress
	            }, function () {
	                _this5.videoComponent.onTimeUpdate({ target: _this5.videoComponent._video });
	            });
	        }
	    }, {
	        key: "forward",
	        value: function forward() {
	            var _this6 = this;
	
	            if (!this.videoComponent._video) return;
	            var _videoComponent$_vide2 = this.videoComponent._video;
	            var currentTime = _videoComponent$_vide2.currentTime;
	            var duration = _videoComponent$_vide2.duration;
	
	            var newTime = duration;
	            if (currentTime + 5 < duration) {
	                newTime = currentTime + 5;
	            }
	            this.videoComponent._video.currentTime = newTime;
	            var progress = newTime / duration * 100;
	            this.videoComponent.setState({
	                progress: progress
	            }, function () {
	                _this6.videoComponent.onTimeUpdate({ target: _this6.videoComponent._video });
	            });
	        }
	    }, {
	        key: "goFullscreen",
	        value: function goFullscreen(element) {
	            if (element.requestFullscreen) {
	                return element.requestFullscreen();
	            } else if (element.msRequestFullscreen) {
	                return element.msRequestFullscreen();
	            } else if (element.mozRequestFullScreen) {
	                return element.mozRequestFullScreen();
	            } else if (element.webkitRequestFullscreen) {
	                return element.webkitRequestFullscreen();
	            }
	            this.videoComponent.setState({
	                fullscreen: true
	            });
	        }
	    }, {
	        key: "exitFullscreen",
	        value: function exitFullscreen() {
	            if (document.exitFullscreen) {
	                return document.exitFullscreen();
	            } else if (document.msExitFullscreen) {
	                return document.msExitFullscreen();
	            } else if (document.mozCancelFullScreen) {
	                return document.mozCancelFullScreen();
	            } else if (document.webkitExitFullscreen) {
	                return document.webkitExitFullscreen();
	            }
	            this.videoComponent.setState({
	                fullscreen: false
	            });
	        }
	    }]);
	
	    return VideoActions;
	}();
	
	exports.default = VideoActions;
	;

/***/ },
/* 41 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var VideoEventHandler = function () {
	    function VideoEventHandler(videoComponent) {
	        _classCallCheck(this, VideoEventHandler);
	
	        this.eventListeners = [];
	        this.events = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "ended", "error", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "seeked", "seeking", "stalled", "timeupdate", "volumechange", "waiting"];
	
	        this.videoComponent = videoComponent;
	    }
	
	    _createClass(VideoEventHandler, [{
	        key: "attachListeners",
	        value: function attachListeners() {
	            var video = this.videoComponent._video;
	            video.addEventListener("loadedmetadata", this.videoComponent.onMetaDataLoaded);
	            video.addEventListener("timeupdate", this.videoComponent.onTimeUpdate);
	            video.addEventListener("play", this.videoComponent.onPlay);
	            video.addEventListener("pause", this.videoComponent.onPause);
	            video.addEventListener("volumechange", this.videoComponent.onVolumeChange);
	        }
	    }, {
	        key: "detachListeners",
	        value: function detachListeners() {
	            var video = this.videoComponent._video;
	            video.removeEventListener("loadedmetadata", this.videoComponent.onMetaDataLoaded);
	            video.removeEventListener("timeupdate", this.videoComponent.onTimeUpdate);
	            video.removeEventListener("play", this.videoComponent.onPlay);
	            video.removeEventListener("pause", this.videoComponent.onPause);
	            video.removeEventListener("volumechange", this.videoComponent.onVolumeChange);
	        }
	    }, {
	        key: "createListeners",
	        value: function createListeners() {
	            var _this = this;
	
	            this.eventListeners = [];
	            this.events.map(function (eventName) {
	                var listener = function listener(event) {
	                    if (typeof _this.videoComponent.props[eventName] == "function") {
	                        _this.videoComponent.props[eventName](event);
	                    }
	                };
	                _this.videoComponent._video.addEventListener(eventName, listener);
	                _this.eventListeners.push({
	                    event: eventName,
	                    listener: listener
	                });
	            });
	        }
	    }, {
	        key: "removeListeners",
	        value: function removeListeners() {
	            for (var i = 0; i < this.eventListeners.length; i++) {
	                this.videoComponent._video.removeEventListener(this.eventListeners[i].event, this.eventListeners[i].listener);
	            }
	            this.eventListeners = [];
	        }
	    }]);
	
	    return VideoEventHandler;
	}();
	
	exports.default = VideoEventHandler;

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(43);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(45)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!!./video.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!!./video.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(44)();
	// imports
	
	
	// module
	exports.push([module.id, ".reactVideoWrapper {\n  display: inline-block;\n  position: relative;\n  vertical-align: middle;\n  margin: 0 auto;\n  line-height: 100%;\n  background: black;\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n  max-height: 100%;\n  outline: none; }\n  .reactVideoWrapper .overlayContainer {\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    z-index: 2;\n    text-align: left;\n    transition: opacity 0.5s;\n    opacity: 0; }\n  .reactVideoWrapper video {\n    max-width: 100%;\n    max-height: 100%;\n    z-index: 1; }\n    .reactVideoWrapper video::-webkit-media-controls {\n      z-index: 2; }\n  .reactVideoWrapper .controlsWrapper {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    height: 40px;\n    background-color: #000;\n    transition: opacity 0.5s;\n    opacity: 0;\n    z-index: 2147483647; }\n    .reactVideoWrapper .controlsWrapper .seekBar .buffer {\n      position: absolute;\n      left: 0;\n      top: 0;\n      right: 0;\n      width: 100%;\n      height: 8px;\n      z-index: 1;\n      margin: 0;\n      background-color: #666; }\n    .reactVideoWrapper .controlsWrapper .seekBar .progress {\n      position: absolute;\n      left: 0;\n      top: 0;\n      right: 0;\n      width: 100%;\n      height: 8px;\n      z-index: 2;\n      margin: 0;\n      background-color: transparent;\n      background-image: rgba(0, 0, 0, 0.4);\n      box-shadow: inset 0px 0px 6px #000; }\n    .reactVideoWrapper .controlsWrapper .playButton {\n      width: 24px;\n      height: 24px;\n      position: absolute;\n      left: 5px;\n      bottom: 5px;\n      cursor: pointer; }\n    .reactVideoWrapper .controlsWrapper .pauseButton {\n      width: 24px;\n      height: 24px;\n      position: absolute;\n      left: 5px;\n      bottom: 5px;\n      cursor: pointer;\n      display: none; }\n    .reactVideoWrapper .controlsWrapper .muteButton {\n      width: 24px;\n      height: 24px;\n      position: absolute;\n      left: 34px;\n      bottom: 5px;\n      cursor: pointer; }\n    .reactVideoWrapper .controlsWrapper .unmuteButton {\n      width: 24px;\n      height: 24px;\n      position: absolute;\n      left: 34px;\n      bottom: 5px;\n      cursor: pointer;\n      display: none; }\n    .reactVideoWrapper .controlsWrapper .volumeBar {\n      position: absolute;\n      width: 100px;\n      height: 5px;\n      bottom: 14px;\n      left: 65px;\n      background: black; }\n    .reactVideoWrapper .controlsWrapper .volume {\n      position: absolute;\n      left: 0;\n      top: 0;\n      right: 0;\n      width: 100%;\n      height: 5px;\n      margin: 0;\n      padding: 0;\n      background-color: transparent;\n      background-image: rgba(0, 0, 0, 0.4);\n      box-shadow: inset 0px 0px 3px #444; }\n      .reactVideoWrapper .controlsWrapper .volume::-ms-fill-lower {\n        background: #222; }\n      .reactVideoWrapper .controlsWrapper .volume::-ms-fill-upper {\n        background: #EEE; }\n    .reactVideoWrapper .controlsWrapper .time {\n      width: 100px;\n      height: 24px;\n      position: absolute;\n      right: 35px;\n      top: 8px;\n      bottom: 0px;\n      font-family: \"Helvetica Neue\", \"Segoe UI\", arial, sans-serif;\n      font-size: 14px;\n      font-weight: 300;\n      color: white;\n      line-height: 30px;\n      text-align: right; }\n    .reactVideoWrapper .controlsWrapper .fullscreenButton {\n      width: 24px;\n      height: 24px;\n      position: absolute;\n      right: 5px;\n      bottom: 5px;\n      cursor: pointer; }\n    .reactVideoWrapper .controlsWrapper .defaultscreenButton {\n      width: 24px;\n      height: 24px;\n      position: absolute;\n      right: 5px;\n      bottom: 5px;\n      cursor: pointer;\n      display: none; }\n  .reactVideoWrapper input[type=range] {\n    -webkit-appearance: none; }\n    .reactVideoWrapper input[type=range]:focus {\n      outline: none; }\n    .reactVideoWrapper input[type=range]::-webkit-slider-runnable-track {\n      cursor: pointer;\n      transition: all .2s ease; }\n    .reactVideoWrapper input[type=range]::-webkit-slider-thumb {\n      -webkit-appearance: none;\n      border: 1px solid transparent;\n      height: 5px;\n      width: 0px;\n      border-radius: 0px;\n      background: transparent;\n      cursor: pointer; }\n    .reactVideoWrapper input[type=range]::-moz-range-track {\n      cursor: pointer;\n      transition: all .2s ease;\n      width: 100%;\n      height: 8px;\n      background: transparent; }\n    .reactVideoWrapper input[type=range]::-moz-range-thumb {\n      height: 5px;\n      width: 0px;\n      background: transparent;\n      cursor: pointer;\n      border: 1px solid transparent; }\n    .reactVideoWrapper input[type=range]::-ms-track {\n      cursor: pointer;\n      transition: all .2s ease;\n      color: transparent;\n      width: 100%;\n      height: 8px;\n      background: transparent; }\n    .reactVideoWrapper input[type=range]::-ms-thumb {\n      height: 5px;\n      width: 0px;\n      background: transparent;\n      cursor: pointer; }\n", ""]);
	
	// exports


/***/ },
/* 44 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 46 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var VideoUtils = function () {
	    function VideoUtils(videoComponent) {
	        _classCallCheck(this, VideoUtils);
	
	        this.videoComponent = videoComponent;
	    }
	
	    _createClass(VideoUtils, [{
	        key: "formatTimeFromSeconds",
	        value: function formatTimeFromSeconds(seconds) {
	            seconds = parseInt(seconds);
	            var hours = parseInt(seconds / 3600);
	            seconds -= hours * 3600;
	            var minutes = parseInt(seconds / 60);
	            seconds -= minutes * 60;
	            var time = (hours > 9 ? hours : "0" + hours) + ":" + (minutes > 9 ? minutes : "0" + minutes) + ":" + (seconds > 9 ? seconds : "0" + seconds);
	            return time;
	        }
	    }, {
	        key: "calculatePercentage",
	        value: function calculatePercentage(fraction, total) {
	            var percentage = parseInt(fraction / total * 100 * 100) / 100; // in order to approximate to 2 digits
	            return percentage;
	        }
	    }, {
	        key: "isIE",
	        value: function isIE() {
	            var UA = window.navigator.userAgent;
	            if (UA.match(/MSIE/i) || UA.match(/Edge/i) || UA.match(/Trident\//i)) return true;
	            return false;
	        }
	    }, {
	        key: "disableControls",
	        value: function disableControls() {
	            this.videoComponent._controlsWrapper.style.display = "none";
	        }
	    }, {
	        key: "enableControls",
	        value: function enableControls() {
	            if (this.videoComponent.props.attributes.controls) this.videoComponent._controlsWrapper.style.display = "none";
	            if (this.videoComponent.props.controls) this.videoComponent._controlsWrapper.style.opacity = "1";
	        }
	    }, {
	        key: "moveOverlay",
	        value: function moveOverlay() {
	            this.videoComponent._overlay.style.bottom = "65px";
	        }
	    }, {
	        key: "enableOverlay",
	        value: function enableOverlay() {
	            if (this.videoComponent.props.overlay) this.videoComponent._overlay.style.opacity = "1";
	        }
	    }, {
	        key: "calculateBuffer",
	        value: function calculateBuffer() {
	            if (!this.videoComponent._video) return 0;
	            if (!this.lastBuffered) this.lastBuffered = 0;
	            if (this.videoComponent._video.buffered.length < 1) return 0;
	            var buffered = this.videoComponent._video.buffered.end(this.videoComponent._video.buffered.length - 1);
	            if (!this.videoComponent._video.duration) return 0;
	            this.lastBuffered = buffered;
	            var duration = this.videoComponent._video.duration;
	
	            var percentage = parseInt(buffered / duration * 100);
	            return percentage;
	        }
	    }, {
	        key: "isFullscreen",
	        value: function isFullscreen() {
	            var isFullscreen = undefined;
	            if (document.webkitIsFullScreen !== undefined) {
	                isFullscreen = document.webkitIsFullScreen;
	            } else if (document.fullscreenElement !== undefined) {
	                isFullscreen = document.fullscreenElement !== null;
	            } else if (document.msFullscreenElement !== undefined) {
	                isFullscreen = document.msFullscreenElement !== null;
	            }
	            return isFullscreen;
	        }
	    }]);
	
	    return VideoUtils;
	}();
	
	exports.default = VideoUtils;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA1YjQ3ZTRjZjBkZmMyMDA2MjlmNiIsIndlYnBhY2s6Ly8vLi9zcmMvdmlkZW8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pY29ucy5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0L3JlYWN0LmpzIiwid2VicGFjazovLy8uL34vcmVhY3QvbGliL1JlYWN0LmpzIiwid2VicGFjazovLy8uL34vcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL34vb2JqZWN0LWFzc2lnbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0L2xpYi9SZWFjdENoaWxkcmVuLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QvbGliL1Bvb2xlZENsYXNzLmpzIiwid2VicGFjazovLy8uL34vZmJqcy9saWIvaW52YXJpYW50LmpzIiwid2VicGFjazovLy8uL34vcmVhY3QvbGliL1JlYWN0RWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0L2xpYi9SZWFjdEN1cnJlbnRPd25lci5qcyIsIndlYnBhY2s6Ly8vLi9+L2ZianMvbGliL3dhcm5pbmcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9mYmpzL2xpYi9lbXB0eUZ1bmN0aW9uLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QvbGliL2NhbkRlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL34vcmVhY3QvbGliL3RyYXZlcnNlQWxsQ2hpbGRyZW4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC9saWIvZ2V0SXRlcmF0b3JGbi5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0L2xpYi9LZXlFc2NhcGVVdGlscy5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0L2xpYi9SZWFjdENvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0L2xpYi9SZWFjdE5vb3BVcGRhdGVRdWV1ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0L2xpYi9SZWFjdEluc3RydW1lbnRhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0L2xpYi9SZWFjdERlYnVnVG9vbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2ZianMvbGliL0V4ZWN1dGlvbkVudmlyb25tZW50LmpzIiwid2VicGFjazovLy8uL34vZmJqcy9saWIvcGVyZm9ybWFuY2VOb3cuanMiLCJ3ZWJwYWNrOi8vLy4vfi9mYmpzL2xpYi9wZXJmb3JtYW5jZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0L2xpYi9SZWFjdEludmFsaWRTZXRTdGF0ZVdhcm5pbmdEZXZUb29sLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QvbGliL1JlYWN0TmF0aXZlT3BlcmF0aW9uSGlzdG9yeURldnRvb2wuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC9saWIvUmVhY3RDb21wb25lbnRUcmVlRGV2dG9vbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2ZianMvbGliL2VtcHR5T2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vcmVhY3QvbGliL1JlYWN0Q2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC9saWIvUmVhY3RQcm9wVHlwZUxvY2F0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9+L2ZianMvbGliL2tleU1pcnJvci5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0L2xpYi9SZWFjdFByb3BUeXBlTG9jYXRpb25OYW1lcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2ZianMvbGliL2tleU9mLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QvbGliL1JlYWN0RE9NRmFjdG9yaWVzLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QvbGliL1JlYWN0RWxlbWVudFZhbGlkYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2ZianMvbGliL21hcE9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0L2xpYi9SZWFjdFByb3BUeXBlcy5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0L2xpYi9SZWFjdFZlcnNpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC9saWIvb25seUNoaWxkLmpzIiwid2VicGFjazovLy8uL3NyYy9Qcm9ncmVzcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL1ZpZGVvQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL1ZpZGVvRXZlbnRIYW5kbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZS92aWRlby5zY3NzPzA2ZjciLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlL3ZpZGVvLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9WaWRlb1V0aWxzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0tBRU0sSzs7O0FBRUYsc0JBQWE7QUFBQTs7QUFBQTs7QUFBQSxlQThCYixnQkE5QmEsR0E4Qk0sYUFBSztBQUNwQixpQkFBSSxPQUFPLE1BQUssVUFBTCxDQUFnQixJQUFoQixFQUFYO0FBQ0EsbUJBQUssUUFBTCxDQUFjO0FBQ1Y7QUFEVSxjQUFkLEVBRUcsWUFBTTtBQUNMLHFCQUFJLElBQUosRUFBVTtBQUNOLDJCQUFLLFVBQUwsQ0FBZ0IsZUFBaEI7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QTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHdCOzs7Ozs7O0FDdEZBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXFCO0FBQ3JCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSw0QkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsNkJBQTRCLFVBQVU7Ozs7Ozs7QUM3RnRDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLGlDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNILG1DQUFrQztBQUNsQztBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWdCLHNCQUFzQjtBQUN0Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQkFBa0Isb0JBQW9CO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLFVBQVU7QUFDckIsWUFBVyxHQUFHO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLEdBQUc7QUFDZCxZQUFXLGlCQUFpQjtBQUM1QixZQUFXLEVBQUU7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsR0FBRztBQUNkLFlBQVcsVUFBVTtBQUNyQixZQUFXLEdBQUc7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxHQUFHO0FBQ2QsWUFBVyxpQkFBaUI7QUFDNUIsWUFBVyxFQUFFO0FBQ2IsYUFBWSxPQUFPO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxHQUFHO0FBQ2QsYUFBWSxPQUFPO0FBQ25CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0M7Ozs7OztBQzlMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxTQUFTO0FBQ3BCLFlBQVcsU0FBUztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsOEI7Ozs7Ozs7QUN0SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzREFBcUQ7QUFDckQsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7O0FBRUEsMkJBQTBCO0FBQzFCO0FBQ0E7QUFDQTs7QUFFQSw0Qjs7Ozs7OztBQ2hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxFQUFFO0FBQ2IsWUFBVyxFQUFFO0FBQ2IsWUFBVyxjQUFjO0FBQ3pCLFlBQVcsRUFBRTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxFQUFFO0FBQ2I7QUFDQSxZQUFXLEVBQUU7QUFDYixZQUFXLEVBQUU7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFB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QUM5RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsbUJBQWtCLDZCOzs7Ozs7QUNmbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUcsSUFBSTtBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBLG9CQUFtQiwwQkFBMEI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQzs7Ozs7OztBQ3pQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsdUM7Ozs7OztBQ2xDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUM7Ozs7OztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsb0M7Ozs7OztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFEOzs7Ozs7O0FDbkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTCxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxRDs7Ozs7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTCxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUCxNQUFLO0FBQ0wsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTCxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0wsSUFBRztBQUNIO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxN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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxFQUFDOztBQUVELG9DOzs7Ozs7O0FDL0tBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxhQUFhO0FBQ3hCLFlBQVcsRUFBRTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsT0FBTztBQUNsQixZQUFXLGFBQWE7QUFDeEIsWUFBVyxF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O0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW1CLHNCQUFzQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMOztBQUVBO0FBQ0E7QUFDQSxvQkFBbUIsMkJBQTJCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMOztBQUVBO0FBQ0Esb0JBQW1CLGdDQUFnQztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUM7Ozs7OztBQzNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSwyQjs7Ozs7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsUUFBUTtBQUNuQixhQUFZLGFBQWE7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDRCOzs7Ozs7Ozs7Ozs7Ozs7OztBQ25DQTs7Ozs7Ozs7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QW9CLE1BQXBCLENBQTJCLFFBQWhDLEVBQ0ksT0FBTyxDQUFQO0FBQ0osa0JBQUssWUFBTCxHQUFvQixRQUFwQjtBQVZhLGlCQVdSLFFBWFEsR0FXSSxLQUFLLGNBQUwsQ0FBb0IsTUFYeEIsQ0FXUixRQVhROztBQVliLGlCQUFJLGFBQWEsU0FBVSxXQUFXLFFBQVgsR0FBc0IsR0FBaEMsQ0FBakI7QUFDQSxvQkFBTyxVQUFQO0FBQ0g7Ozt3Q0FFYTtBQUNWLGlCQUFJLGVBQWUsU0FBbkI7QUFDQSxpQkFBSSxTQUFTLGtCQUFULEtBQWdDLFNBQXBDLEVBQStDO0FBQzNDLGdDQUFlLFNBQVMsa0JBQXhCO0FBQ0gsY0FGRCxNQUVNLElBQUksU0FBUyxpQkFBVCxLQUErQixTQUFuQyxFQUE4QztBQUNoRCxnQ0FBZSxTQUFTLGlCQUFULEtBQStCLElBQTlDO0FBQ0gsY0FGSyxNQUVBLElBQUksU0FBUyxtQkFBVCxLQUFpQyxTQUFyQyxFQUFnRDtBQUNsRCxnQ0FBZSxTQUFTLG1CQUFULEtBQWlDLElBQWhEO0FBQ0g7QUFDRCxvQkFBTyxZQUFQO0FBQ0g7Ozs7OzttQkF6RWdCLFUiLCJmaWxlIjoidmlkZW8uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gZmFjdG9yeSgpO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uXG4gKiovIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCA1YjQ3ZTRjZjBkZmMyMDA2MjlmNlxuICoqLyIsImltcG9ydCBpY29ucyBmcm9tICcuL2Fzc2V0cy9pY29ucyc7XHJcbmltcG9ydCBQcm9ncmVzcyBmcm9tICcuL1Byb2dyZXNzJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFZpZGVvQWN0aW9ucyBmcm9tICcuL2xpYi9WaWRlb0FjdGlvbnMnO1xyXG5pbXBvcnQgVmlkZW9FdmVudEhhbmRsZXIgZnJvbSAnLi9saWIvVmlkZW9FdmVudEhhbmRsZXInO1xyXG5pbXBvcnQgVmlkZW9TdHlsZSBmcm9tICcuL3N0eWxlL3ZpZGVvLnNjc3MnO1xyXG5pbXBvcnQgVmlkZW9VdGlscyBmcm9tICcuL2xpYi9WaWRlb1V0aWxzJztcclxuXHJcbmNsYXNzIFZpZGVvIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmV2ZW50SGFuZGxlciA9IG5ldyBWaWRlb0V2ZW50SGFuZGxlcih0aGlzKTtcclxuICAgICAgICB0aGlzLnZpZGVvVXRpbHMgPSBuZXcgVmlkZW9VdGlscyh0aGlzKTtcclxuICAgICAgICB0aGlzLnZpZGVvQWN0aW9ucyA9IG5ldyBWaWRlb0FjdGlvbnModGhpcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgYnVmZmVyOiAwLFxyXG4gICAgICAgICAgICBwcm9ncmVzczogMCxcclxuICAgICAgICAgICAgdm9sdW1lOiAxLFxyXG4gICAgICAgICAgICBmdWxsc2NyZWVuOiBmYWxzZSxcclxuICAgICAgICAgICAgdGltZTogXCIwMDowMDowMFwiLFxyXG4gICAgICAgICAgICBwbGF5aW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgbG9hZGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgaXNJRTogZmFsc2UsXHJcbiAgICAgICAgICAgIGN1cnJlbnRUaW1lOiAwXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmJ1ZmZlckNoZWNrVGltZXIgPSB7fTtcclxuICAgICAgICB0aGlzLmZ1bGxzY3JlZW5DaGVja1RpbWVyID0ge307XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKXtcclxuICAgICAgICBsZXQgdmlkZW8gPSB0aGlzLl92aWRlbztcclxuICAgICAgICBpZiggIXZpZGVvIClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuZXZlbnRIYW5kbGVyLnJlbW92ZUxpc3RlbmVycygpO1xyXG4gICAgICAgIHRoaXMuZXZlbnRIYW5kbGVyLmRldGFjaExpc3RlbmVycygpO1xyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwoIHRoaXMuYnVmZmVyQ2hlY2tUaW1lciApO1xyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwoIHRoaXMuZnVsbHNjcmVlbkNoZWNrVGltZXIgKTtcclxuICAgIH1cclxuXHJcbiAgICBvbk1ldGFEYXRhTG9hZGVkID0gZSA9PiB7XHJcbiAgICAgICAgbGV0IGlzSUUgPSB0aGlzLnZpZGVvVXRpbHMuaXNJRSgpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBpc0lFXHJcbiAgICAgICAgfSwgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiggaXNJRSApe1xyXG4gICAgICAgICAgICAgICAgdGhpcy52aWRlb1V0aWxzLmRpc2FibGVDb250cm9scygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy52aWRlb1V0aWxzLm1vdmVPdmVybGF5KCk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgdGhpcy52aWRlb1V0aWxzLmVuYWJsZUNvbnRyb2xzKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy52aWRlb1V0aWxzLmVuYWJsZU92ZXJsYXkoKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRlZDogdHJ1ZSB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvblRpbWVVcGRhdGUgPSBlID0+IHtcclxuICAgICAgICBsZXQge2N1cnJlbnRUaW1lLCBkdXJhdGlvbn0gPSBlLnRhcmdldFxyXG4gICAgICAgIGxldCBwcm9ncmVzcyA9IHRoaXMudmlkZW9VdGlscy5jYWxjdWxhdGVQZXJjZW50YWdlKGN1cnJlbnRUaW1lLCBkdXJhdGlvbik7XHJcbiAgICAgICAgbGV0IHRpbWUgPSB0aGlzLnZpZGVvVXRpbHMuZm9ybWF0VGltZUZyb21TZWNvbmRzKGN1cnJlbnRUaW1lKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgcHJvZ3Jlc3MsXHJcbiAgICAgICAgICAgIHRpbWUsXHJcbiAgICAgICAgICAgIGN1cnJlbnRUaW1lXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Qcm9ncmVzc0NoYW5nZSA9IGUgPT4ge1xyXG4gICAgICAgIGxldCBwcm9ncmVzcyA9IHBhcnNlRmxvYXQoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBwcm9ncmVzc1xyXG4gICAgICAgIH0sICgpID0+IHtcclxuICAgICAgICAgICAgbGV0IHtkdXJhdGlvbn0gPSB0aGlzLl92aWRlbztcclxuICAgICAgICAgICAgbGV0IHRpbWUgPSBwcm9ncmVzcypkdXJhdGlvbi8xMDA7XHJcbiAgICAgICAgICAgIHRoaXMuX3ZpZGVvLmN1cnJlbnRUaW1lID0gdGltZTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIG9uVm9sdW1lU2V0ID0gZSA9PiB7XHJcbiAgICAgICAgbGV0IHZvbHVtZSA9IHBhcnNlRmxvYXQoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgIHRoaXMudmlkZW9BY3Rpb25zLnNldFZvbHVtZSh2b2x1bWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrQnVmZmVyID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCBidWZmZXIgPSB0aGlzLnZpZGVvVXRpbHMuY2FsY3VsYXRlQnVmZmVyKCk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGJ1ZmZlclxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZmVyZW5jZVZpZGVvVGFnID0gdmlkZW8gPT4ge1xyXG4gICAgICAgIHRoaXMuX3ZpZGVvID0gdmlkZW87XHJcbiAgICAgICAgdGhpcy5ldmVudEhhbmRsZXIuYXR0YWNoTGlzdGVuZXJzKCk7XHJcbiAgICAgICAgdGhpcy5ldmVudEhhbmRsZXIuY3JlYXRlTGlzdGVuZXJzKCk7XHJcbiAgICAgICAgdGhpcy5idWZmZXJDaGVja1RpbWVyID0gc2V0SW50ZXJ2YWwoIHRoaXMuY2hlY2tCdWZmZXIsIDUwMCApO1xyXG4gICAgICAgIHRoaXMuZnVsbHNjcmVlbkNoZWNrVGltZXIgPSBzZXRJbnRlcnZhbCggdGhpcy5jaGVja0Z1bGxzY3JlZW4sIDUwMCApO1xyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrRnVsbHNjcmVlbiA9ICgpID0+IHtcclxuICAgICAgICBsZXQgZnVsbHNjcmVlbiA9IHRoaXMudmlkZW9VdGlscy5pc0Z1bGxzY3JlZW4oKTtcclxuICAgICAgICBpZiggZnVsbHNjcmVlbiAhPT0gdW5kZWZpbmVkICl7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBmdWxsc2NyZWVuIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbk1vdXNlTW92ZSA9IGUgPT4ge1xyXG4gICAgICAgIHRoaXMudHJpZ2dlck1vdXNlTW92ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHRyaWdnZXJNb3VzZU1vdmUgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYoIHRoaXMuc3RhdGUubG9hZGVkICl7XHJcbiAgICAgICAgICAgIGlmKCAhdGhpcy5wcm9wcy5hdXRvaGlkZSApXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIGlmKCB0aGlzLnByb3BzLmNvbnRyb2xzICYmICF0aGlzLnByb3BzLmF0dHJpYnV0ZXMuY29udHJvbHMgKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5fY29udHJvbHNXcmFwcGVyLnN0eWxlLm9wYWNpdHkgPSBcIjFcIjtcclxuICAgICAgICAgICAgaWYoIHRoaXMucHJvcHMub3ZlcmxheSApXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9vdmVybGF5LnN0eWxlLm9wYWNpdHkgPSBcIjFcIjtcclxuICAgICAgICAgICAgdGhpcy5fd3JhcHBlci5zdHlsZS5jdXJzb3IgPSBcImF1dG9cIjtcclxuICAgICAgICAgICAgaWYoIHRoaXMuaGlkZVRpbWVyIClcclxuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmhpZGVUaW1lcik7XHJcbiAgICAgICAgICAgIHRoaXMuaGlkZVRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiggdGhpcy5zdGF0ZS5wbGF5aW5nICl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY29udHJvbHNXcmFwcGVyLnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcclxuICAgICAgICAgICAgICAgICAgICBpZiggdGhpcy5wcm9wcy5vdmVybGF5ICYmICF0aGlzLnByb3BzLmZpeGVkb3ZlcmxheSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX292ZXJsYXkuc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKCB0aGlzLnByb3BzLmF1dG9oaWRlY3Vyc29yIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fd3JhcHBlci5zdHlsZS5jdXJzb3IgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH0sIDMwMDAgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25QbGF5ID0gZSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHBsYXlpbmc6IHRydWVcclxuICAgICAgICB9LCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlck1vdXNlTW92ZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uUGF1c2UgPSBlID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgcGxheWluZzogZmFsc2VcclxuICAgICAgICB9LCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlck1vdXNlTW92ZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uVm9sdW1lQ2hhbmdlID0gZSA9PiB7XHJcbiAgICAgICAgbGV0IHZvbHVtZSA9IHBhcnNlSW50KGUudGFyZ2V0LnZvbHVtZSoxMDApLzEwMDtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgdm9sdW1lXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25GdWxsc2NyZWVuU2V0ID0gZSA9PiB7XHJcbiAgICAgICAgdGhpcy52aWRlb0FjdGlvbnMuZ29GdWxsc2NyZWVuKHRoaXMuX3dyYXBwZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGVmYXVsdHNjcmVlblNldCA9IGUgPT4ge1xyXG4gICAgICAgIHRoaXMudmlkZW9BY3Rpb25zLmV4aXRGdWxsc2NyZWVuKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25XaGVlbCA9IGUgPT4ge1xyXG4gICAgICAgIGlmKGUuZGVsdGFZIDwgMCl7XHJcbiAgICAgICAgICAgIHRoaXMudmlkZW9BY3Rpb25zLnZvbHVtZVVwKCk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMudmlkZW9BY3Rpb25zLnZvbHVtZURvd24oKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25LZXlEb3duID0gZSA9PiB7XHJcbiAgICAgICAgaWYoIHRoaXMucHJvcHMuc2hvcnRjdXRzICl7XHJcbiAgICAgICAgICAgIGxldCBrZXlDb2RlID0gZS5rZXlDb2RlO1xyXG4gICAgICAgICAgICBzd2l0Y2goIGtleUNvZGUgKXtcclxuICAgICAgICAgICAgICAgIGNhc2UgMzI6IHsgLy8gU3BhY2VcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZpZGVvQWN0aW9ucy50b2dnbGVQbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXNlIDM5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52aWRlb0FjdGlvbnMuZm9yd2FyZCgpOyAvLyBSaWdodCBhcnJvd1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2FzZSAzNzoge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmlkZW9BY3Rpb25zLmJhY2soKTsgLy8gTGVmdCBhcnJvd1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2FzZSAzODoge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmlkZW9BY3Rpb25zLnZvbHVtZVVwKCk7IC8vIFVwIGFycm93XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQwOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52aWRlb0FjdGlvbnMudm9sdW1lRG93bigpOyAvLyBEb3duIGFycm93XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXNlIDcwOiB7IC8vIEZcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZpZGVvQWN0aW9ucy50b2dnbGVGdWxsc2NyZWVuKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc3OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52aWRlb0FjdGlvbnMudG9nZ2xlTXV0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGxldCBzb3VyY2VzID0gdGhpcy5wcm9wcy5zb3VyY2VzLm1hcCggc291cmNlID0+IHtcclxuICAgICAgICAgICAgaWYoIHR5cGVvZiBzb3VyY2UgPT0gXCJzdHJpbmdcIiApe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgc3JjOiBzb3VyY2UgfTtcclxuICAgICAgICAgICAgfWVsc2UgaWYoIHR5cGVvZiBzb3VyY2UgPT0gXCJvYmplY3RcIiApe1xyXG4gICAgICAgICAgICAgICAgaWYoIHNvdXJjZS5zcmMgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2Ygc291cmNlLnNyYyAhPSBcInN0cmluZ1wiICl7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvciggXCJTb3VyY2UgbXVzdCBiZSBhIHN0cmluZyBvciBhbiBvYmplY3QgY29udGFpbmluZyBhICdzcmMnIGtleS5cXG5cIiwgc291cmNlICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc291cmNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxldCB2aWRlb1Byb3BzID0gdGhpcy5wcm9wcy5hdHRyaWJ1dGVzO1xyXG4gICAgICAgIGlmKCB0aGlzLnN0YXRlLmlzSUUgKXtcclxuICAgICAgICAgICAgdmlkZW9Qcm9wcy5jb250cm9scyA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZWFjdFZpZGVvV3JhcHBlclwiXHJcbiAgICAgICAgICAgICAgICBvbk1vdXNlTW92ZT17dGhpcy5vbk1vdXNlTW92ZX1cclxuICAgICAgICAgICAgICAgIHRhYkluZGV4PXt0aGlzLnByb3BzLnRhYkluZGV4fVxyXG4gICAgICAgICAgICAgICAgb25LZXlEb3duPXt0aGlzLm9uS2V5RG93bn1cclxuICAgICAgICAgICAgICAgIG9uV2hlZWw9e3RoaXMub25XaGVlbH1cclxuICAgICAgICAgICAgICAgIHJlZj17cmVmID0+IHRoaXMuX3dyYXBwZXIgPSByZWZ9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvdmVybGF5Q29udGFpbmVyXCJcclxuICAgICAgICAgICAgICAgICAgICBvbk1vdXNlTW92ZT17dGhpcy5vbk1vdXNlTW92ZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkRvdWJsZUNsaWNrPXt0aGlzLnZpZGVvQWN0aW9ucy50b2dnbGVGdWxsc2NyZWVufVxyXG4gICAgICAgICAgICAgICAgICAgIHJlZj17cmVmID0+IHRoaXMuX292ZXJsYXkgPSByZWZ9XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogdGhpcy5wcm9wcy5vdmVybGF5ID8gXCJibG9ja1wiIDogXCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8dmlkZW9cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3RoaXMucHJvcHMuY2xhc3NOYW1lfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgb25Nb3VzZU1vdmU9e3RoaXMub25Nb3VzZU1vdmV9XHJcbiAgICAgICAgICAgICAgICAgICAgb25Eb3VibGVDbGljaz17dGhpcy52aWRlb0FjdGlvbnMudG9nZ2xlRnVsbHNjcmVlbn1cclxuICAgICAgICAgICAgICAgICAgICByZWY9e3RoaXMucmVmZXJlbmNlVmlkZW9UYWd9XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9e3RoaXMucHJvcHMud2lkdGh9XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXt0aGlzLnByb3BzLmhlaWdodH1cclxuICAgICAgICAgICAgICAgICAgICB7Li4udmlkZW9Qcm9wc31cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZXMubWFwKCAocywgaSkgPT4gPHNvdXJjZSBrZXk9e2l9IHNyYz17cy5zcmN9IHR5cGU9e3MudHlwZSB8fCBudWxsfSAvPilcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC92aWRlbz5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICByZWY9eyByZWYgPT4gdGhpcy5fY29udHJvbHNXcmFwcGVyID0gcmVmIH1cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZS5jb250cm9sc1dyYXBwZXIgfHwge319XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29udHJvbHNXcmFwcGVyXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlZWtCYXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFByb2dyZXNzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9eyByZWYgPT4gdGhpcy5fcHJvZ3Jlc3MgPSByZWYgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucHJvZ3Jlc3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwcm9ncmVzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U6IHRoaXMub25Qcm9ncmVzc0NoYW5nZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFByb2dyZXNzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9eyByZWYgPT4gdGhpcy5fYnVmZmVyID0gcmVmIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmJ1ZmZlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9IFwiYnVmZmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9ycz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0OiBcIiM3NzdcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmQ6IFwiIzY2NlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2s6IFwiIzAwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRPbmx5OiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicGxheUJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17cmVmID0+IHRoaXMuX3BsYXkgPSByZWZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMucGxheX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRoaXMuc3RhdGUucGxheWluZyA/IFwibm9uZVwiIDogXCJibG9ja1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7aWNvbnMucGxheX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBhdXNlQnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXsgcmVmID0+IHRoaXMuX3BhdXNlID0gcmVmfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnBhdXNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogdGhpcy5zdGF0ZS5wbGF5aW5nID8gXCJibG9ja1wiIDogXCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtpY29ucy5wYXVzZX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm11dGVCdXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWY9e3JlZiA9PiB0aGlzLl9tdXRlQnV0dG9uID0gcmVmfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm11dGV9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7aWNvbnMudm9sdW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidW5tdXRlQnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtyZWYgPT4gdGhpcy5fdW5tdXRlQnV0dG9uID0gcmVmfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnVubXV0ZX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtpY29ucy5tdXRlfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidm9sdW1lQmFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9ncmVzc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluPVwiMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXg9XCIxXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXA9XCJhbnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtyZWYgPT4gdGhpcy5fdm9sdW1lID0gcmVmfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudm9sdW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiB0aGlzLm9uVm9sdW1lU2V0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IFwiI0ZGRlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZDogXCIjRkZGXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFjazogXCJyZ2JhKCAwLCAwLCAwLCAwLjMgKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidm9sdW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0aW1lXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnRpbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZnVsbHNjcmVlbkJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25GdWxsc2NyZWVuU2V0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogdGhpcy5zdGF0ZS5mdWxsc2NyZW4gPyBcIm5vbmVcIiA6IFwiYmxvY2tcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2ljb25zLmZ1bGxzY3JlZW59XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkZWZhdWx0c2NyZWVuQnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vbkRlZmF1bHRzY3JlZW5TZXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiB0aGlzLnN0YXRlLmZ1bGxzY3JlZW4gPyBcImJsb2NrXCIgOiBcIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2ljb25zLmRlZmF1bHRzY3JlZW59XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59O1xyXG5cclxuVmlkZW8ucHJvcFR5cGVzID0ge1xyXG4gICAgc291cmNlczogUmVhY3QuUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXHJcbiAgICBzdHlsZTogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcclxuICAgIHdpZHRoOiBSZWFjdC5Qcm9wVHlwZXMub25lT2ZUeXBlKFtcclxuICAgICAgICBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgIFJlYWN0LlByb3BUeXBlcy5udW1iZXJcclxuICAgIF0pLFxyXG4gICAgaGVpZ2h0OiBSZWFjdC5Qcm9wVHlwZXMub25lT2ZUeXBlKFtcclxuICAgICAgICBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgIFJlYWN0LlByb3BUeXBlcy5udW1iZXJcclxuICAgIF0pLFxyXG4gICAgY2xhc3NOYW1lOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgYXR0cmlidXRlczogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcclxuICAgIGNvbnRyb2xzOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcclxuICAgIC8vIEF1dG9oaWRlIGNvbnRyb2xzIGFuZCBvdmVybGF5XHJcbiAgICBhdXRvaGlkZTogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBhdXRvaGlkZWN1cnNvcjogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXHJcbiAgICAvLyBPdmVybGF5IGVuYWJsZWRcclxuICAgIG92ZXJsYXk6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxyXG4gICAgLy8gT3ZlcmxheSBkb2VzIG5vdCBhdXRvaGlkZVxyXG4gICAgZml4ZWRvdmVybGF5OiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcclxuICAgIC8vIEVuYWJsZSBvciBkaXNhYmxlIGtleWJvYXJkIHNob3J0Y3V0c1xyXG4gICAgc2hvcnRjdXRzOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcclxuICAgIHRhYkluZGV4OiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nXHJcbn07XHJcblxyXG5WaWRlby5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgICBzb3VyY2VzOiBbXSxcclxuICAgIHN0eWxlOiB7fSxcclxuICAgIGNsYXNzTmFtZTogXCJcIixcclxuICAgIGF0dHJpYnV0ZXM6IHt9LFxyXG4gICAgY29udHJvbHM6IHRydWUsXHJcbiAgICBhdXRvaGlkZTogdHJ1ZSxcclxuICAgIGF1dG9oaWRlY3Vyc29yOiB0cnVlLFxyXG4gICAgb3ZlcmxheTogdHJ1ZSxcclxuICAgIGZpeGVkb3ZlcmxheTogZmFsc2UsXHJcbiAgICB3aWR0aDogXCJhdXRvXCIsXHJcbiAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgc2hvcnRjdXRzOiB0cnVlLFxyXG4gICAgdGFiSW5kZXg6IFwiMVwiXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBWaWRlbztcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdmlkZW8uanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xubGV0IGljb25zID0ge1xuICAgIHBsYXk6IChcbiAgICAgICAgPHN2ZyB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTTggNXYxNGwxMS03elwiIGZpbGw9XCJ3aGl0ZVwiPjwvcGF0aD5cbiAgICAgICAgPC9zdmc+XG4gICAgKSxcbiAgICBwYXVzZTogKFxuICAgICAgICA8c3ZnIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNNiAxOWg0VjVINnYxNHptOC0xNHYxNGg0VjVoLTR6XCIgZmlsbD1cIndoaXRlXCIvPlxuICAgICAgICA8L3N2Zz5cbiAgICApLFxuICAgIGZ1bGxzY3JlZW46IChcbiAgICAgICAgPHN2ZyB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTTcgMTRINXY1aDV2LTJIN3YtM3ptLTItNGgyVjdoM1Y1SDV2NXptMTIgN2gtM3YyaDV2LTVoLTJ2M3pNMTQgNXYyaDN2M2gyVjVoLTV6XCIgZmlsbD1cIndoaXRlXCIvPlxuICAgICAgICA8L3N2Zz5cbiAgICApLFxuICAgIGRlZmF1bHRzY3JlZW46IChcbiAgICAgICAgPHN2ZyB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTTUgMTZoM3YzaDJ2LTVINXYyem0zLThINXYyaDVWNUg4djN6bTYgMTFoMnYtM2gzdi0yaC01djV6bTItMTFWNWgtMnY1aDVWOGgtM3pcIiBmaWxsPVwid2hpdGVcIi8+XG4gICAgICAgIDwvc3ZnPlxuICAgICksXG4gICAgdm9sdW1lOiAoXG4gICAgICAgIDxzdmcgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxuICAgICAgICAgICAgPHBhdGggZD1cIk0zIDl2Nmg0bDUgNVY0TDcgOUgzem0xMy41IDNjMC0xLjc3LTEuMDItMy4yOS0yLjUtNC4wM3Y4LjA1YzEuNDgtLjczIDIuNS0yLjI1IDIuNS00LjAyek0xNCAzLjIzdjIuMDZjMi44OS44NiA1IDMuNTQgNSA2Ljcxcy0yLjExIDUuODUtNSA2LjcxdjIuMDZjNC4wMS0uOTEgNy00LjQ5IDctOC43N3MtMi45OS03Ljg2LTctOC43N3pcIiBmaWxsPVwid2hpdGVcIi8+XG4gICAgICAgIDwvc3ZnPlxuICAgICksXG4gICAgbXV0ZTogKFxuICAgICAgICA8c3ZnIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNNyA5djZoNGw1IDVWNGwtNSA1SDd6XCIgZmlsbD1cIndoaXRlXCIvPlxuICAgICAgICA8L3N2Zz5cbiAgICApLFxufTtcbmV4cG9ydCBkZWZhdWx0IGljb25zO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYXNzZXRzL2ljb25zLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbGliL1JlYWN0Jyk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC9yZWFjdC5qc1xuICoqIG1vZHVsZSBpZCA9IDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBSZWFjdFxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIF9hc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG5cbnZhciBSZWFjdENoaWxkcmVuID0gcmVxdWlyZSgnLi9SZWFjdENoaWxkcmVuJyk7XG52YXIgUmVhY3RDb21wb25lbnQgPSByZXF1aXJlKCcuL1JlYWN0Q29tcG9uZW50Jyk7XG52YXIgUmVhY3RDbGFzcyA9IHJlcXVpcmUoJy4vUmVhY3RDbGFzcycpO1xudmFyIFJlYWN0RE9NRmFjdG9yaWVzID0gcmVxdWlyZSgnLi9SZWFjdERPTUZhY3RvcmllcycpO1xudmFyIFJlYWN0RWxlbWVudCA9IHJlcXVpcmUoJy4vUmVhY3RFbGVtZW50Jyk7XG52YXIgUmVhY3RFbGVtZW50VmFsaWRhdG9yID0gcmVxdWlyZSgnLi9SZWFjdEVsZW1lbnRWYWxpZGF0b3InKTtcbnZhciBSZWFjdFByb3BUeXBlcyA9IHJlcXVpcmUoJy4vUmVhY3RQcm9wVHlwZXMnKTtcbnZhciBSZWFjdFZlcnNpb24gPSByZXF1aXJlKCcuL1JlYWN0VmVyc2lvbicpO1xuXG52YXIgb25seUNoaWxkID0gcmVxdWlyZSgnLi9vbmx5Q2hpbGQnKTtcbnZhciB3YXJuaW5nID0gcmVxdWlyZSgnZmJqcy9saWIvd2FybmluZycpO1xuXG52YXIgY3JlYXRlRWxlbWVudCA9IFJlYWN0RWxlbWVudC5jcmVhdGVFbGVtZW50O1xudmFyIGNyZWF0ZUZhY3RvcnkgPSBSZWFjdEVsZW1lbnQuY3JlYXRlRmFjdG9yeTtcbnZhciBjbG9uZUVsZW1lbnQgPSBSZWFjdEVsZW1lbnQuY2xvbmVFbGVtZW50O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICBjcmVhdGVFbGVtZW50ID0gUmVhY3RFbGVtZW50VmFsaWRhdG9yLmNyZWF0ZUVsZW1lbnQ7XG4gIGNyZWF0ZUZhY3RvcnkgPSBSZWFjdEVsZW1lbnRWYWxpZGF0b3IuY3JlYXRlRmFjdG9yeTtcbiAgY2xvbmVFbGVtZW50ID0gUmVhY3RFbGVtZW50VmFsaWRhdG9yLmNsb25lRWxlbWVudDtcbn1cblxudmFyIF9fc3ByZWFkID0gX2Fzc2lnbjtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIHdhcm5lZCA9IGZhbHNlO1xuICBfX3NwcmVhZCA9IGZ1bmN0aW9uICgpIHtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gd2FybmluZyh3YXJuZWQsICdSZWFjdC5fX3NwcmVhZCBpcyBkZXByZWNhdGVkIGFuZCBzaG91bGQgbm90IGJlIHVzZWQuIFVzZSAnICsgJ09iamVjdC5hc3NpZ24gZGlyZWN0bHkgb3IgYW5vdGhlciBoZWxwZXIgZnVuY3Rpb24gd2l0aCBzaW1pbGFyICcgKyAnc2VtYW50aWNzLiBZb3UgbWF5IGJlIHNlZWluZyB0aGlzIHdhcm5pbmcgZHVlIHRvIHlvdXIgY29tcGlsZXIuICcgKyAnU2VlIGh0dHBzOi8vZmIubWUvcmVhY3Qtc3ByZWFkLWRlcHJlY2F0aW9uIGZvciBtb3JlIGRldGFpbHMuJykgOiB2b2lkIDA7XG4gICAgd2FybmVkID0gdHJ1ZTtcbiAgICByZXR1cm4gX2Fzc2lnbi5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICB9O1xufVxuXG52YXIgUmVhY3QgPSB7XG5cbiAgLy8gTW9kZXJuXG5cbiAgQ2hpbGRyZW46IHtcbiAgICBtYXA6IFJlYWN0Q2hpbGRyZW4ubWFwLFxuICAgIGZvckVhY2g6IFJlYWN0Q2hpbGRyZW4uZm9yRWFjaCxcbiAgICBjb3VudDogUmVhY3RDaGlsZHJlbi5jb3VudCxcbiAgICB0b0FycmF5OiBSZWFjdENoaWxkcmVuLnRvQXJyYXksXG4gICAgb25seTogb25seUNoaWxkXG4gIH0sXG5cbiAgQ29tcG9uZW50OiBSZWFjdENvbXBvbmVudCxcblxuICBjcmVhdGVFbGVtZW50OiBjcmVhdGVFbGVtZW50LFxuICBjbG9uZUVsZW1lbnQ6IGNsb25lRWxlbWVudCxcbiAgaXNWYWxpZEVsZW1lbnQ6IFJlYWN0RWxlbWVudC5pc1ZhbGlkRWxlbWVudCxcblxuICAvLyBDbGFzc2ljXG5cbiAgUHJvcFR5cGVzOiBSZWFjdFByb3BUeXBlcyxcbiAgY3JlYXRlQ2xhc3M6IFJlYWN0Q2xhc3MuY3JlYXRlQ2xhc3MsXG4gIGNyZWF0ZUZhY3Rvcnk6IGNyZWF0ZUZhY3RvcnksXG4gIGNyZWF0ZU1peGluOiBmdW5jdGlvbiAobWl4aW4pIHtcbiAgICAvLyBDdXJyZW50bHkgYSBub29wLiBXaWxsIGJlIHVzZWQgdG8gdmFsaWRhdGUgYW5kIHRyYWNlIG1peGlucy5cbiAgICByZXR1cm4gbWl4aW47XG4gIH0sXG5cbiAgLy8gVGhpcyBsb29rcyBET00gc3BlY2lmaWMgYnV0IHRoZXNlIGFyZSBhY3R1YWxseSBpc29tb3JwaGljIGhlbHBlcnNcbiAgLy8gc2luY2UgdGhleSBhcmUganVzdCBnZW5lcmF0aW5nIERPTSBzdHJpbmdzLlxuICBET006IFJlYWN0RE9NRmFjdG9yaWVzLFxuXG4gIHZlcnNpb246IFJlYWN0VmVyc2lvbixcblxuICAvLyBEZXByZWNhdGVkIGhvb2sgZm9yIEpTWCBzcHJlYWQsIGRvbid0IHVzZSB0aGlzIGZvciBhbnl0aGluZy5cbiAgX19zcHJlYWQ6IF9fc3ByZWFkXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0L2xpYi9SZWFjdC5qc1xuICoqIG1vZHVsZSBpZCA9IDNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxuXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBzZXRUaW1lb3V0KGRyYWluUXVldWUsIDApO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcHJvY2Vzcy9icm93c2VyLmpzXG4gKiogbW9kdWxlIGlkID0gNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgcHJvcElzRW51bWVyYWJsZSA9IE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbmZ1bmN0aW9uIHRvT2JqZWN0KHZhbCkge1xuXHRpZiAodmFsID09PSBudWxsIHx8IHZhbCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignT2JqZWN0LmFzc2lnbiBjYW5ub3QgYmUgY2FsbGVkIHdpdGggbnVsbCBvciB1bmRlZmluZWQnKTtcblx0fVxuXG5cdHJldHVybiBPYmplY3QodmFsKTtcbn1cblxuZnVuY3Rpb24gc2hvdWxkVXNlTmF0aXZlKCkge1xuXHR0cnkge1xuXHRcdGlmICghT2JqZWN0LmFzc2lnbikge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIERldGVjdCBidWdneSBwcm9wZXJ0eSBlbnVtZXJhdGlvbiBvcmRlciBpbiBvbGRlciBWOCB2ZXJzaW9ucy5cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTQxMThcblx0XHR2YXIgdGVzdDEgPSBuZXcgU3RyaW5nKCdhYmMnKTsgIC8vIGVzbGludC1kaXNhYmxlLWxpbmVcblx0XHR0ZXN0MVs1XSA9ICdkZSc7XG5cdFx0aWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QxKVswXSA9PT0gJzUnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MiA9IHt9O1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgMTA7IGkrKykge1xuXHRcdFx0dGVzdDJbJ18nICsgU3RyaW5nLmZyb21DaGFyQ29kZShpKV0gPSBpO1xuXHRcdH1cblx0XHR2YXIgb3JkZXIyID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDIpLm1hcChmdW5jdGlvbiAobikge1xuXHRcdFx0cmV0dXJuIHRlc3QyW25dO1xuXHRcdH0pO1xuXHRcdGlmIChvcmRlcjIuam9pbignJykgIT09ICcwMTIzNDU2Nzg5Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDMgPSB7fTtcblx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uIChsZXR0ZXIpIHtcblx0XHRcdHRlc3QzW2xldHRlcl0gPSBsZXR0ZXI7XG5cdFx0fSk7XG5cdFx0aWYgKE9iamVjdC5rZXlzKE9iamVjdC5hc3NpZ24oe30sIHRlc3QzKSkuam9pbignJykgIT09XG5cdFx0XHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdC8vIFdlIGRvbid0IGV4cGVjdCBhbnkgb2YgdGhlIGFib3ZlIHRvIHRocm93LCBidXQgYmV0dGVyIHRvIGJlIHNhZmUuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2hvdWxkVXNlTmF0aXZlKCkgPyBPYmplY3QuYXNzaWduIDogZnVuY3Rpb24gKHRhcmdldCwgc291cmNlKSB7XG5cdHZhciBmcm9tO1xuXHR2YXIgdG8gPSB0b09iamVjdCh0YXJnZXQpO1xuXHR2YXIgc3ltYm9scztcblxuXHRmb3IgKHZhciBzID0gMTsgcyA8IGFyZ3VtZW50cy5sZW5ndGg7IHMrKykge1xuXHRcdGZyb20gPSBPYmplY3QoYXJndW1lbnRzW3NdKTtcblxuXHRcdGZvciAodmFyIGtleSBpbiBmcm9tKSB7XG5cdFx0XHRpZiAoaGFzT3duUHJvcGVydHkuY2FsbChmcm9tLCBrZXkpKSB7XG5cdFx0XHRcdHRvW2tleV0gPSBmcm9tW2tleV07XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcblx0XHRcdHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKGZyb20pO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzeW1ib2xzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmIChwcm9wSXNFbnVtZXJhYmxlLmNhbGwoZnJvbSwgc3ltYm9sc1tpXSkpIHtcblx0XHRcdFx0XHR0b1tzeW1ib2xzW2ldXSA9IGZyb21bc3ltYm9sc1tpXV07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gdG87XG59O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vb2JqZWN0LWFzc2lnbi9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBSZWFjdENoaWxkcmVuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUG9vbGVkQ2xhc3MgPSByZXF1aXJlKCcuL1Bvb2xlZENsYXNzJyk7XG52YXIgUmVhY3RFbGVtZW50ID0gcmVxdWlyZSgnLi9SZWFjdEVsZW1lbnQnKTtcblxudmFyIGVtcHR5RnVuY3Rpb24gPSByZXF1aXJlKCdmYmpzL2xpYi9lbXB0eUZ1bmN0aW9uJyk7XG52YXIgdHJhdmVyc2VBbGxDaGlsZHJlbiA9IHJlcXVpcmUoJy4vdHJhdmVyc2VBbGxDaGlsZHJlbicpO1xuXG52YXIgdHdvQXJndW1lbnRQb29sZXIgPSBQb29sZWRDbGFzcy50d29Bcmd1bWVudFBvb2xlcjtcbnZhciBmb3VyQXJndW1lbnRQb29sZXIgPSBQb29sZWRDbGFzcy5mb3VyQXJndW1lbnRQb29sZXI7XG5cbnZhciB1c2VyUHJvdmlkZWRLZXlFc2NhcGVSZWdleCA9IC9cXC8rL2c7XG5mdW5jdGlvbiBlc2NhcGVVc2VyUHJvdmlkZWRLZXkodGV4dCkge1xuICByZXR1cm4gKCcnICsgdGV4dCkucmVwbGFjZSh1c2VyUHJvdmlkZWRLZXlFc2NhcGVSZWdleCwgJyQmLycpO1xufVxuXG4vKipcbiAqIFBvb2xlZENsYXNzIHJlcHJlc2VudGluZyB0aGUgYm9va2tlZXBpbmcgYXNzb2NpYXRlZCB3aXRoIHBlcmZvcm1pbmcgYSBjaGlsZFxuICogdHJhdmVyc2FsLiBBbGxvd3MgYXZvaWRpbmcgYmluZGluZyBjYWxsYmFja3MuXG4gKlxuICogQGNvbnN0cnVjdG9yIEZvckVhY2hCb29rS2VlcGluZ1xuICogQHBhcmFtIHshZnVuY3Rpb259IGZvckVhY2hGdW5jdGlvbiBGdW5jdGlvbiB0byBwZXJmb3JtIHRyYXZlcnNhbCB3aXRoLlxuICogQHBhcmFtIHs/Kn0gZm9yRWFjaENvbnRleHQgQ29udGV4dCB0byBwZXJmb3JtIGNvbnRleHQgd2l0aC5cbiAqL1xuZnVuY3Rpb24gRm9yRWFjaEJvb2tLZWVwaW5nKGZvckVhY2hGdW5jdGlvbiwgZm9yRWFjaENvbnRleHQpIHtcbiAgdGhpcy5mdW5jID0gZm9yRWFjaEZ1bmN0aW9uO1xuICB0aGlzLmNvbnRleHQgPSBmb3JFYWNoQ29udGV4dDtcbiAgdGhpcy5jb3VudCA9IDA7XG59XG5Gb3JFYWNoQm9va0tlZXBpbmcucHJvdG90eXBlLmRlc3RydWN0b3IgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuZnVuYyA9IG51bGw7XG4gIHRoaXMuY29udGV4dCA9IG51bGw7XG4gIHRoaXMuY291bnQgPSAwO1xufTtcblBvb2xlZENsYXNzLmFkZFBvb2xpbmdUbyhGb3JFYWNoQm9va0tlZXBpbmcsIHR3b0FyZ3VtZW50UG9vbGVyKTtcblxuZnVuY3Rpb24gZm9yRWFjaFNpbmdsZUNoaWxkKGJvb2tLZWVwaW5nLCBjaGlsZCwgbmFtZSkge1xuICB2YXIgZnVuYyA9IGJvb2tLZWVwaW5nLmZ1bmM7XG4gIHZhciBjb250ZXh0ID0gYm9va0tlZXBpbmcuY29udGV4dDtcblxuICBmdW5jLmNhbGwoY29udGV4dCwgY2hpbGQsIGJvb2tLZWVwaW5nLmNvdW50KyspO1xufVxuXG4vKipcbiAqIEl0ZXJhdGVzIHRocm91Z2ggY2hpbGRyZW4gdGhhdCBhcmUgdHlwaWNhbGx5IHNwZWNpZmllZCBhcyBgcHJvcHMuY2hpbGRyZW5gLlxuICpcbiAqIFNlZSBodHRwczovL2ZhY2Vib29rLmdpdGh1Yi5pby9yZWFjdC9kb2NzL3RvcC1sZXZlbC1hcGkuaHRtbCNyZWFjdC5jaGlsZHJlbi5mb3JlYWNoXG4gKlxuICogVGhlIHByb3ZpZGVkIGZvckVhY2hGdW5jKGNoaWxkLCBpbmRleCkgd2lsbCBiZSBjYWxsZWQgZm9yIGVhY2hcbiAqIGxlYWYgY2hpbGQuXG4gKlxuICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBjb250YWluZXIuXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKCosIGludCl9IGZvckVhY2hGdW5jXG4gKiBAcGFyYW0geyp9IGZvckVhY2hDb250ZXh0IENvbnRleHQgZm9yIGZvckVhY2hDb250ZXh0LlxuICovXG5mdW5jdGlvbiBmb3JFYWNoQ2hpbGRyZW4oY2hpbGRyZW4sIGZvckVhY2hGdW5jLCBmb3JFYWNoQ29udGV4dCkge1xuICBpZiAoY2hpbGRyZW4gPT0gbnVsbCkge1xuICAgIHJldHVybiBjaGlsZHJlbjtcbiAgfVxuICB2YXIgdHJhdmVyc2VDb250ZXh0ID0gRm9yRWFjaEJvb2tLZWVwaW5nLmdldFBvb2xlZChmb3JFYWNoRnVuYywgZm9yRWFjaENvbnRleHQpO1xuICB0cmF2ZXJzZUFsbENoaWxkcmVuKGNoaWxkcmVuLCBmb3JFYWNoU2luZ2xlQ2hpbGQsIHRyYXZlcnNlQ29udGV4dCk7XG4gIEZvckVhY2hCb29rS2VlcGluZy5yZWxlYXNlKHRyYXZlcnNlQ29udGV4dCk7XG59XG5cbi8qKlxuICogUG9vbGVkQ2xhc3MgcmVwcmVzZW50aW5nIHRoZSBib29ra2VlcGluZyBhc3NvY2lhdGVkIHdpdGggcGVyZm9ybWluZyBhIGNoaWxkXG4gKiBtYXBwaW5nLiBBbGxvd3MgYXZvaWRpbmcgYmluZGluZyBjYWxsYmFja3MuXG4gKlxuICogQGNvbnN0cnVjdG9yIE1hcEJvb2tLZWVwaW5nXG4gKiBAcGFyYW0geyEqfSBtYXBSZXN1bHQgT2JqZWN0IGNvbnRhaW5pbmcgdGhlIG9yZGVyZWQgbWFwIG9mIHJlc3VsdHMuXG4gKiBAcGFyYW0geyFmdW5jdGlvbn0gbWFwRnVuY3Rpb24gRnVuY3Rpb24gdG8gcGVyZm9ybSBtYXBwaW5nIHdpdGguXG4gKiBAcGFyYW0gez8qfSBtYXBDb250ZXh0IENvbnRleHQgdG8gcGVyZm9ybSBtYXBwaW5nIHdpdGguXG4gKi9cbmZ1bmN0aW9uIE1hcEJvb2tLZWVwaW5nKG1hcFJlc3VsdCwga2V5UHJlZml4LCBtYXBGdW5jdGlvbiwgbWFwQ29udGV4dCkge1xuICB0aGlzLnJlc3VsdCA9IG1hcFJlc3VsdDtcbiAgdGhpcy5rZXlQcmVmaXggPSBrZXlQcmVmaXg7XG4gIHRoaXMuZnVuYyA9IG1hcEZ1bmN0aW9uO1xuICB0aGlzLmNvbnRleHQgPSBtYXBDb250ZXh0O1xuICB0aGlzLmNvdW50ID0gMDtcbn1cbk1hcEJvb2tLZWVwaW5nLnByb3RvdHlwZS5kZXN0cnVjdG9yID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLnJlc3VsdCA9IG51bGw7XG4gIHRoaXMua2V5UHJlZml4ID0gbnVsbDtcbiAgdGhpcy5mdW5jID0gbnVsbDtcbiAgdGhpcy5jb250ZXh0ID0gbnVsbDtcbiAgdGhpcy5jb3VudCA9IDA7XG59O1xuUG9vbGVkQ2xhc3MuYWRkUG9vbGluZ1RvKE1hcEJvb2tLZWVwaW5nLCBmb3VyQXJndW1lbnRQb29sZXIpO1xuXG5mdW5jdGlvbiBtYXBTaW5nbGVDaGlsZEludG9Db250ZXh0KGJvb2tLZWVwaW5nLCBjaGlsZCwgY2hpbGRLZXkpIHtcbiAgdmFyIHJlc3VsdCA9IGJvb2tLZWVwaW5nLnJlc3VsdDtcbiAgdmFyIGtleVByZWZpeCA9IGJvb2tLZWVwaW5nLmtleVByZWZpeDtcbiAgdmFyIGZ1bmMgPSBib29rS2VlcGluZy5mdW5jO1xuICB2YXIgY29udGV4dCA9IGJvb2tLZWVwaW5nLmNvbnRleHQ7XG5cblxuICB2YXIgbWFwcGVkQ2hpbGQgPSBmdW5jLmNhbGwoY29udGV4dCwgY2hpbGQsIGJvb2tLZWVwaW5nLmNvdW50KyspO1xuICBpZiAoQXJyYXkuaXNBcnJheShtYXBwZWRDaGlsZCkpIHtcbiAgICBtYXBJbnRvV2l0aEtleVByZWZpeEludGVybmFsKG1hcHBlZENoaWxkLCByZXN1bHQsIGNoaWxkS2V5LCBlbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zQXJndW1lbnQpO1xuICB9IGVsc2UgaWYgKG1hcHBlZENoaWxkICE9IG51bGwpIHtcbiAgICBpZiAoUmVhY3RFbGVtZW50LmlzVmFsaWRFbGVtZW50KG1hcHBlZENoaWxkKSkge1xuICAgICAgbWFwcGVkQ2hpbGQgPSBSZWFjdEVsZW1lbnQuY2xvbmVBbmRSZXBsYWNlS2V5KG1hcHBlZENoaWxkLFxuICAgICAgLy8gS2VlcCBib3RoIHRoZSAobWFwcGVkKSBhbmQgb2xkIGtleXMgaWYgdGhleSBkaWZmZXIsIGp1c3QgYXNcbiAgICAgIC8vIHRyYXZlcnNlQWxsQ2hpbGRyZW4gdXNlZCB0byBkbyBmb3Igb2JqZWN0cyBhcyBjaGlsZHJlblxuICAgICAga2V5UHJlZml4ICsgKG1hcHBlZENoaWxkLmtleSAmJiAoIWNoaWxkIHx8IGNoaWxkLmtleSAhPT0gbWFwcGVkQ2hpbGQua2V5KSA/IGVzY2FwZVVzZXJQcm92aWRlZEtleShtYXBwZWRDaGlsZC5rZXkpICsgJy8nIDogJycpICsgY2hpbGRLZXkpO1xuICAgIH1cbiAgICByZXN1bHQucHVzaChtYXBwZWRDaGlsZCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbWFwSW50b1dpdGhLZXlQcmVmaXhJbnRlcm5hbChjaGlsZHJlbiwgYXJyYXksIHByZWZpeCwgZnVuYywgY29udGV4dCkge1xuICB2YXIgZXNjYXBlZFByZWZpeCA9ICcnO1xuICBpZiAocHJlZml4ICE9IG51bGwpIHtcbiAgICBlc2NhcGVkUHJlZml4ID0gZXNjYXBlVXNlclByb3ZpZGVkS2V5KHByZWZpeCkgKyAnLyc7XG4gIH1cbiAgdmFyIHRyYXZlcnNlQ29udGV4dCA9IE1hcEJvb2tLZWVwaW5nLmdldFBvb2xlZChhcnJheSwgZXNjYXBlZFByZWZpeCwgZnVuYywgY29udGV4dCk7XG4gIHRyYXZlcnNlQWxsQ2hpbGRyZW4oY2hpbGRyZW4sIG1hcFNpbmdsZUNoaWxkSW50b0NvbnRleHQsIHRyYXZlcnNlQ29udGV4dCk7XG4gIE1hcEJvb2tLZWVwaW5nLnJlbGVhc2UodHJhdmVyc2VDb250ZXh0KTtcbn1cblxuLyoqXG4gKiBNYXBzIGNoaWxkcmVuIHRoYXQgYXJlIHR5cGljYWxseSBzcGVjaWZpZWQgYXMgYHByb3BzLmNoaWxkcmVuYC5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9mYWNlYm9vay5naXRodWIuaW8vcmVhY3QvZG9jcy90b3AtbGV2ZWwtYXBpLmh0bWwjcmVhY3QuY2hpbGRyZW4ubWFwXG4gKlxuICogVGhlIHByb3ZpZGVkIG1hcEZ1bmN0aW9uKGNoaWxkLCBrZXksIGluZGV4KSB3aWxsIGJlIGNhbGxlZCBmb3IgZWFjaFxuICogbGVhZiBjaGlsZC5cbiAqXG4gKiBAcGFyYW0gez8qfSBjaGlsZHJlbiBDaGlsZHJlbiB0cmVlIGNvbnRhaW5lci5cbiAqIEBwYXJhbSB7ZnVuY3Rpb24oKiwgaW50KX0gZnVuYyBUaGUgbWFwIGZ1bmN0aW9uLlxuICogQHBhcmFtIHsqfSBjb250ZXh0IENvbnRleHQgZm9yIG1hcEZ1bmN0aW9uLlxuICogQHJldHVybiB7b2JqZWN0fSBPYmplY3QgY29udGFpbmluZyB0aGUgb3JkZXJlZCBtYXAgb2YgcmVzdWx0cy5cbiAqL1xuZnVuY3Rpb24gbWFwQ2hpbGRyZW4oY2hpbGRyZW4sIGZ1bmMsIGNvbnRleHQpIHtcbiAgaWYgKGNoaWxkcmVuID09IG51bGwpIHtcbiAgICByZXR1cm4gY2hpbGRyZW47XG4gIH1cbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBtYXBJbnRvV2l0aEtleVByZWZpeEludGVybmFsKGNoaWxkcmVuLCByZXN1bHQsIG51bGwsIGZ1bmMsIGNvbnRleHQpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBmb3JFYWNoU2luZ2xlQ2hpbGREdW1teSh0cmF2ZXJzZUNvbnRleHQsIGNoaWxkLCBuYW1lKSB7XG4gIHJldHVybiBudWxsO1xufVxuXG4vKipcbiAqIENvdW50IHRoZSBudW1iZXIgb2YgY2hpbGRyZW4gdGhhdCBhcmUgdHlwaWNhbGx5IHNwZWNpZmllZCBhc1xuICogYHByb3BzLmNoaWxkcmVuYC5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9mYWNlYm9vay5naXRodWIuaW8vcmVhY3QvZG9jcy90b3AtbGV2ZWwtYXBpLmh0bWwjcmVhY3QuY2hpbGRyZW4uY291bnRcbiAqXG4gKiBAcGFyYW0gez8qfSBjaGlsZHJlbiBDaGlsZHJlbiB0cmVlIGNvbnRhaW5lci5cbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIG51bWJlciBvZiBjaGlsZHJlbi5cbiAqL1xuZnVuY3Rpb24gY291bnRDaGlsZHJlbihjaGlsZHJlbiwgY29udGV4dCkge1xuICByZXR1cm4gdHJhdmVyc2VBbGxDaGlsZHJlbihjaGlsZHJlbiwgZm9yRWFjaFNpbmdsZUNoaWxkRHVtbXksIG51bGwpO1xufVxuXG4vKipcbiAqIEZsYXR0ZW4gYSBjaGlsZHJlbiBvYmplY3QgKHR5cGljYWxseSBzcGVjaWZpZWQgYXMgYHByb3BzLmNoaWxkcmVuYCkgYW5kXG4gKiByZXR1cm4gYW4gYXJyYXkgd2l0aCBhcHByb3ByaWF0ZWx5IHJlLWtleWVkIGNoaWxkcmVuLlxuICpcbiAqIFNlZSBodHRwczovL2ZhY2Vib29rLmdpdGh1Yi5pby9yZWFjdC9kb2NzL3RvcC1sZXZlbC1hcGkuaHRtbCNyZWFjdC5jaGlsZHJlbi50b2FycmF5XG4gKi9cbmZ1bmN0aW9uIHRvQXJyYXkoY2hpbGRyZW4pIHtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBtYXBJbnRvV2l0aEtleVByZWZpeEludGVybmFsKGNoaWxkcmVuLCByZXN1bHQsIG51bGwsIGVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNBcmd1bWVudCk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbnZhciBSZWFjdENoaWxkcmVuID0ge1xuICBmb3JFYWNoOiBmb3JFYWNoQ2hpbGRyZW4sXG4gIG1hcDogbWFwQ2hpbGRyZW4sXG4gIG1hcEludG9XaXRoS2V5UHJlZml4SW50ZXJuYWw6IG1hcEludG9XaXRoS2V5UHJlZml4SW50ZXJuYWwsXG4gIGNvdW50OiBjb3VudENoaWxkcmVuLFxuICB0b0FycmF5OiB0b0FycmF5XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0Q2hpbGRyZW47XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QvbGliL1JlYWN0Q2hpbGRyZW4uanNcbiAqKiBtb2R1bGUgaWQgPSA2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENvcHlyaWdodCAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAcHJvdmlkZXNNb2R1bGUgUG9vbGVkQ2xhc3NcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBpbnZhcmlhbnQgPSByZXF1aXJlKCdmYmpzL2xpYi9pbnZhcmlhbnQnKTtcblxuLyoqXG4gKiBTdGF0aWMgcG9vbGVycy4gU2V2ZXJhbCBjdXN0b20gdmVyc2lvbnMgZm9yIGVhY2ggcG90ZW50aWFsIG51bWJlciBvZlxuICogYXJndW1lbnRzLiBBIGNvbXBsZXRlbHkgZ2VuZXJpYyBwb29sZXIgaXMgZWFzeSB0byBpbXBsZW1lbnQsIGJ1dCB3b3VsZFxuICogcmVxdWlyZSBhY2Nlc3NpbmcgdGhlIGBhcmd1bWVudHNgIG9iamVjdC4gSW4gZWFjaCBvZiB0aGVzZSwgYHRoaXNgIHJlZmVycyB0b1xuICogdGhlIENsYXNzIGl0c2VsZiwgbm90IGFuIGluc3RhbmNlLiBJZiBhbnkgb3RoZXJzIGFyZSBuZWVkZWQsIHNpbXBseSBhZGQgdGhlbVxuICogaGVyZSwgb3IgaW4gdGhlaXIgb3duIGZpbGVzLlxuICovXG52YXIgb25lQXJndW1lbnRQb29sZXIgPSBmdW5jdGlvbiAoY29weUZpZWxkc0Zyb20pIHtcbiAgdmFyIEtsYXNzID0gdGhpcztcbiAgaWYgKEtsYXNzLmluc3RhbmNlUG9vbC5sZW5ndGgpIHtcbiAgICB2YXIgaW5zdGFuY2UgPSBLbGFzcy5pbnN0YW5jZVBvb2wucG9wKCk7XG4gICAgS2xhc3MuY2FsbChpbnN0YW5jZSwgY29weUZpZWxkc0Zyb20pO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbmV3IEtsYXNzKGNvcHlGaWVsZHNGcm9tKTtcbiAgfVxufTtcblxudmFyIHR3b0FyZ3VtZW50UG9vbGVyID0gZnVuY3Rpb24gKGExLCBhMikge1xuICB2YXIgS2xhc3MgPSB0aGlzO1xuICBpZiAoS2xhc3MuaW5zdGFuY2VQb29sLmxlbmd0aCkge1xuICAgIHZhciBpbnN0YW5jZSA9IEtsYXNzLmluc3RhbmNlUG9vbC5wb3AoKTtcbiAgICBLbGFzcy5jYWxsKGluc3RhbmNlLCBhMSwgYTIpO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbmV3IEtsYXNzKGExLCBhMik7XG4gIH1cbn07XG5cbnZhciB0aHJlZUFyZ3VtZW50UG9vbGVyID0gZnVuY3Rpb24gKGExLCBhMiwgYTMpIHtcbiAgdmFyIEtsYXNzID0gdGhpcztcbiAgaWYgKEtsYXNzLmluc3RhbmNlUG9vbC5sZW5ndGgpIHtcbiAgICB2YXIgaW5zdGFuY2UgPSBLbGFzcy5pbnN0YW5jZVBvb2wucG9wKCk7XG4gICAgS2xhc3MuY2FsbChpbnN0YW5jZSwgYTEsIGEyLCBhMyk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBuZXcgS2xhc3MoYTEsIGEyLCBhMyk7XG4gIH1cbn07XG5cbnZhciBmb3VyQXJndW1lbnRQb29sZXIgPSBmdW5jdGlvbiAoYTEsIGEyLCBhMywgYTQpIHtcbiAgdmFyIEtsYXNzID0gdGhpcztcbiAgaWYgKEtsYXNzLmluc3RhbmNlUG9vbC5sZW5ndGgpIHtcbiAgICB2YXIgaW5zdGFuY2UgPSBLbGFzcy5pbnN0YW5jZVBvb2wucG9wKCk7XG4gICAgS2xhc3MuY2FsbChpbnN0YW5jZSwgYTEsIGEyLCBhMywgYTQpO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbmV3IEtsYXNzKGExLCBhMiwgYTMsIGE0KTtcbiAgfVxufTtcblxudmFyIGZpdmVBcmd1bWVudFBvb2xlciA9IGZ1bmN0aW9uIChhMSwgYTIsIGEzLCBhNCwgYTUpIHtcbiAgdmFyIEtsYXNzID0gdGhpcztcbiAgaWYgKEtsYXNzLmluc3RhbmNlUG9vbC5sZW5ndGgpIHtcbiAgICB2YXIgaW5zdGFuY2UgPSBLbGFzcy5pbnN0YW5jZVBvb2wucG9wKCk7XG4gICAgS2xhc3MuY2FsbChpbnN0YW5jZSwgYTEsIGEyLCBhMywgYTQsIGE1KTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG5ldyBLbGFzcyhhMSwgYTIsIGEzLCBhNCwgYTUpO1xuICB9XG59O1xuXG52YXIgc3RhbmRhcmRSZWxlYXNlciA9IGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuICB2YXIgS2xhc3MgPSB0aGlzO1xuICAhKGluc3RhbmNlIGluc3RhbmNlb2YgS2xhc3MpID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IGludmFyaWFudChmYWxzZSwgJ1RyeWluZyB0byByZWxlYXNlIGFuIGluc3RhbmNlIGludG8gYSBwb29sIG9mIGEgZGlmZmVyZW50IHR5cGUuJykgOiBpbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICBpbnN0YW5jZS5kZXN0cnVjdG9yKCk7XG4gIGlmIChLbGFzcy5pbnN0YW5jZVBvb2wubGVuZ3RoIDwgS2xhc3MucG9vbFNpemUpIHtcbiAgICBLbGFzcy5pbnN0YW5jZVBvb2wucHVzaChpbnN0YW5jZSk7XG4gIH1cbn07XG5cbnZhciBERUZBVUxUX1BPT0xfU0laRSA9IDEwO1xudmFyIERFRkFVTFRfUE9PTEVSID0gb25lQXJndW1lbnRQb29sZXI7XG5cbi8qKlxuICogQXVnbWVudHMgYENvcHlDb25zdHJ1Y3RvcmAgdG8gYmUgYSBwb29sYWJsZSBjbGFzcywgYXVnbWVudGluZyBvbmx5IHRoZSBjbGFzc1xuICogaXRzZWxmIChzdGF0aWNhbGx5KSBub3QgYWRkaW5nIGFueSBwcm90b3R5cGljYWwgZmllbGRzLiBBbnkgQ29weUNvbnN0cnVjdG9yXG4gKiB5b3UgZ2l2ZSB0aGlzIG1heSBoYXZlIGEgYHBvb2xTaXplYCBwcm9wZXJ0eSwgYW5kIHdpbGwgbG9vayBmb3IgYVxuICogcHJvdG90eXBpY2FsIGBkZXN0cnVjdG9yYCBvbiBpbnN0YW5jZXMgKG9wdGlvbmFsKS5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBDb3B5Q29uc3RydWN0b3IgQ29uc3RydWN0b3IgdGhhdCBjYW4gYmUgdXNlZCB0byByZXNldC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHBvb2xlciBDdXN0b21pemFibGUgcG9vbGVyLlxuICovXG52YXIgYWRkUG9vbGluZ1RvID0gZnVuY3Rpb24gKENvcHlDb25zdHJ1Y3RvciwgcG9vbGVyKSB7XG4gIHZhciBOZXdLbGFzcyA9IENvcHlDb25zdHJ1Y3RvcjtcbiAgTmV3S2xhc3MuaW5zdGFuY2VQb29sID0gW107XG4gIE5ld0tsYXNzLmdldFBvb2xlZCA9IHBvb2xlciB8fCBERUZBVUxUX1BPT0xFUjtcbiAgaWYgKCFOZXdLbGFzcy5wb29sU2l6ZSkge1xuICAgIE5ld0tsYXNzLnBvb2xTaXplID0gREVGQVVMVF9QT09MX1NJWkU7XG4gIH1cbiAgTmV3S2xhc3MucmVsZWFzZSA9IHN0YW5kYXJkUmVsZWFzZXI7XG4gIHJldHVybiBOZXdLbGFzcztcbn07XG5cbnZhciBQb29sZWRDbGFzcyA9IHtcbiAgYWRkUG9vbGluZ1RvOiBhZGRQb29saW5nVG8sXG4gIG9uZUFyZ3VtZW50UG9vbGVyOiBvbmVBcmd1bWVudFBvb2xlcixcbiAgdHdvQXJndW1lbnRQb29sZXI6IHR3b0FyZ3VtZW50UG9vbGVyLFxuICB0aHJlZUFyZ3VtZW50UG9vbGVyOiB0aHJlZUFyZ3VtZW50UG9vbGVyLFxuICBmb3VyQXJndW1lbnRQb29sZXI6IGZvdXJBcmd1bWVudFBvb2xlcixcbiAgZml2ZUFyZ3VtZW50UG9vbGVyOiBmaXZlQXJndW1lbnRQb29sZXJcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUG9vbGVkQ2xhc3M7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QvbGliL1Bvb2xlZENsYXNzLmpzXG4gKiogbW9kdWxlIGlkID0gN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogVXNlIGludmFyaWFudCgpIHRvIGFzc2VydCBzdGF0ZSB3aGljaCB5b3VyIHByb2dyYW0gYXNzdW1lcyB0byBiZSB0cnVlLlxuICpcbiAqIFByb3ZpZGUgc3ByaW50Zi1zdHlsZSBmb3JtYXQgKG9ubHkgJXMgaXMgc3VwcG9ydGVkKSBhbmQgYXJndW1lbnRzXG4gKiB0byBwcm92aWRlIGluZm9ybWF0aW9uIGFib3V0IHdoYXQgYnJva2UgYW5kIHdoYXQgeW91IHdlcmVcbiAqIGV4cGVjdGluZy5cbiAqXG4gKiBUaGUgaW52YXJpYW50IG1lc3NhZ2Ugd2lsbCBiZSBzdHJpcHBlZCBpbiBwcm9kdWN0aW9uLCBidXQgdGhlIGludmFyaWFudFxuICogd2lsbCByZW1haW4gdG8gZW5zdXJlIGxvZ2ljIGRvZXMgbm90IGRpZmZlciBpbiBwcm9kdWN0aW9uLlxuICovXG5cbmZ1bmN0aW9uIGludmFyaWFudChjb25kaXRpb24sIGZvcm1hdCwgYSwgYiwgYywgZCwgZSwgZikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhcmlhbnQgcmVxdWlyZXMgYW4gZXJyb3IgbWVzc2FnZSBhcmd1bWVudCcpO1xuICAgIH1cbiAgfVxuXG4gIGlmICghY29uZGl0aW9uKSB7XG4gICAgdmFyIGVycm9yO1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoJ01pbmlmaWVkIGV4Y2VwdGlvbiBvY2N1cnJlZDsgdXNlIHRoZSBub24tbWluaWZpZWQgZGV2IGVudmlyb25tZW50ICcgKyAnZm9yIHRoZSBmdWxsIGVycm9yIG1lc3NhZ2UgYW5kIGFkZGl0aW9uYWwgaGVscGZ1bCB3YXJuaW5ncy4nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGFyZ3MgPSBbYSwgYiwgYywgZCwgZSwgZl07XG4gICAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107XG4gICAgICB9KSk7XG4gICAgICBlcnJvci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgIH1cblxuICAgIGVycm9yLmZyYW1lc1RvUG9wID0gMTsgLy8gd2UgZG9uJ3QgY2FyZSBhYm91dCBpbnZhcmlhbnQncyBvd24gZnJhbWVcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGludmFyaWFudDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9mYmpzL2xpYi9pbnZhcmlhbnQuanNcbiAqKiBtb2R1bGUgaWQgPSA4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENvcHlyaWdodCAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAcHJvdmlkZXNNb2R1bGUgUmVhY3RFbGVtZW50XG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2Fzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcblxudmFyIFJlYWN0Q3VycmVudE93bmVyID0gcmVxdWlyZSgnLi9SZWFjdEN1cnJlbnRPd25lcicpO1xuXG52YXIgd2FybmluZyA9IHJlcXVpcmUoJ2ZianMvbGliL3dhcm5pbmcnKTtcbnZhciBjYW5EZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vY2FuRGVmaW5lUHJvcGVydHknKTtcblxuLy8gVGhlIFN5bWJvbCB1c2VkIHRvIHRhZyB0aGUgUmVhY3RFbGVtZW50IHR5cGUuIElmIHRoZXJlIGlzIG5vIG5hdGl2ZSBTeW1ib2xcbi8vIG5vciBwb2x5ZmlsbCwgdGhlbiBhIHBsYWluIG51bWJlciBpcyB1c2VkIGZvciBwZXJmb3JtYW5jZS5cbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbFsnZm9yJ10gJiYgU3ltYm9sWydmb3InXSgncmVhY3QuZWxlbWVudCcpIHx8IDB4ZWFjNztcblxudmFyIFJFU0VSVkVEX1BST1BTID0ge1xuICBrZXk6IHRydWUsXG4gIHJlZjogdHJ1ZSxcbiAgX19zZWxmOiB0cnVlLFxuICBfX3NvdXJjZTogdHJ1ZVxufTtcblxudmFyIHNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duLCBzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93bjtcblxuLyoqXG4gKiBGYWN0b3J5IG1ldGhvZCB0byBjcmVhdGUgYSBuZXcgUmVhY3QgZWxlbWVudC4gVGhpcyBubyBsb25nZXIgYWRoZXJlcyB0b1xuICogdGhlIGNsYXNzIHBhdHRlcm4sIHNvIGRvIG5vdCB1c2UgbmV3IHRvIGNhbGwgaXQuIEFsc28sIG5vIGluc3RhbmNlb2YgY2hlY2tcbiAqIHdpbGwgd29yay4gSW5zdGVhZCB0ZXN0ICQkdHlwZW9mIGZpZWxkIGFnYWluc3QgU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpIHRvIGNoZWNrXG4gKiBpZiBzb21ldGhpbmcgaXMgYSBSZWFjdCBFbGVtZW50LlxuICpcbiAqIEBwYXJhbSB7Kn0gdHlwZVxuICogQHBhcmFtIHsqfSBrZXlcbiAqIEBwYXJhbSB7c3RyaW5nfG9iamVjdH0gcmVmXG4gKiBAcGFyYW0geyp9IHNlbGYgQSAqdGVtcG9yYXJ5KiBoZWxwZXIgdG8gZGV0ZWN0IHBsYWNlcyB3aGVyZSBgdGhpc2AgaXNcbiAqIGRpZmZlcmVudCBmcm9tIHRoZSBgb3duZXJgIHdoZW4gUmVhY3QuY3JlYXRlRWxlbWVudCBpcyBjYWxsZWQsIHNvIHRoYXQgd2VcbiAqIGNhbiB3YXJuLiBXZSB3YW50IHRvIGdldCByaWQgb2Ygb3duZXIgYW5kIHJlcGxhY2Ugc3RyaW5nIGByZWZgcyB3aXRoIGFycm93XG4gKiBmdW5jdGlvbnMsIGFuZCBhcyBsb25nIGFzIGB0aGlzYCBhbmQgb3duZXIgYXJlIHRoZSBzYW1lLCB0aGVyZSB3aWxsIGJlIG5vXG4gKiBjaGFuZ2UgaW4gYmVoYXZpb3IuXG4gKiBAcGFyYW0geyp9IHNvdXJjZSBBbiBhbm5vdGF0aW9uIG9iamVjdCAoYWRkZWQgYnkgYSB0cmFuc3BpbGVyIG9yIG90aGVyd2lzZSlcbiAqIGluZGljYXRpbmcgZmlsZW5hbWUsIGxpbmUgbnVtYmVyLCBhbmQvb3Igb3RoZXIgaW5mb3JtYXRpb24uXG4gKiBAcGFyYW0geyp9IG93bmVyXG4gKiBAcGFyYW0geyp9IHByb3BzXG4gKiBAaW50ZXJuYWxcbiAqL1xudmFyIFJlYWN0RWxlbWVudCA9IGZ1bmN0aW9uICh0eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBvd25lciwgcHJvcHMpIHtcbiAgdmFyIGVsZW1lbnQgPSB7XG4gICAgLy8gVGhpcyB0YWcgYWxsb3cgdXMgdG8gdW5pcXVlbHkgaWRlbnRpZnkgdGhpcyBhcyBhIFJlYWN0IEVsZW1lbnRcbiAgICAkJHR5cGVvZjogUkVBQ1RfRUxFTUVOVF9UWVBFLFxuXG4gICAgLy8gQnVpbHQtaW4gcHJvcGVydGllcyB0aGF0IGJlbG9uZyBvbiB0aGUgZWxlbWVudFxuICAgIHR5cGU6IHR5cGUsXG4gICAga2V5OiBrZXksXG4gICAgcmVmOiByZWYsXG4gICAgcHJvcHM6IHByb3BzLFxuXG4gICAgLy8gUmVjb3JkIHRoZSBjb21wb25lbnQgcmVzcG9uc2libGUgZm9yIGNyZWF0aW5nIHRoaXMgZWxlbWVudC5cbiAgICBfb3duZXI6IG93bmVyXG4gIH07XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAvLyBUaGUgdmFsaWRhdGlvbiBmbGFnIGlzIGN1cnJlbnRseSBtdXRhdGl2ZS4gV2UgcHV0IGl0IG9uXG4gICAgLy8gYW4gZXh0ZXJuYWwgYmFja2luZyBzdG9yZSBzbyB0aGF0IHdlIGNhbiBmcmVlemUgdGhlIHdob2xlIG9iamVjdC5cbiAgICAvLyBUaGlzIGNhbiBiZSByZXBsYWNlZCB3aXRoIGEgV2Vha01hcCBvbmNlIHRoZXkgYXJlIGltcGxlbWVudGVkIGluXG4gICAgLy8gY29tbW9ubHkgdXNlZCBkZXZlbG9wbWVudCBlbnZpcm9ubWVudHMuXG4gICAgZWxlbWVudC5fc3RvcmUgPSB7fTtcblxuICAgIC8vIFRvIG1ha2UgY29tcGFyaW5nIFJlYWN0RWxlbWVudHMgZWFzaWVyIGZvciB0ZXN0aW5nIHB1cnBvc2VzLCB3ZSBtYWtlXG4gICAgLy8gdGhlIHZhbGlkYXRpb24gZmxhZyBub24tZW51bWVyYWJsZSAod2hlcmUgcG9zc2libGUsIHdoaWNoIHNob3VsZFxuICAgIC8vIGluY2x1ZGUgZXZlcnkgZW52aXJvbm1lbnQgd2UgcnVuIHRlc3RzIGluKSwgc28gdGhlIHRlc3QgZnJhbWV3b3JrXG4gICAgLy8gaWdub3JlcyBpdC5cbiAgICBpZiAoY2FuRGVmaW5lUHJvcGVydHkpIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50Ll9zdG9yZSwgJ3ZhbGlkYXRlZCcsIHtcbiAgICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICB2YWx1ZTogZmFsc2VcbiAgICAgIH0pO1xuICAgICAgLy8gc2VsZiBhbmQgc291cmNlIGFyZSBERVYgb25seSBwcm9wZXJ0aWVzLlxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQsICdfc2VsZicsIHtcbiAgICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgICAgdmFsdWU6IHNlbGZcbiAgICAgIH0pO1xuICAgICAgLy8gVHdvIGVsZW1lbnRzIGNyZWF0ZWQgaW4gdHdvIGRpZmZlcmVudCBwbGFjZXMgc2hvdWxkIGJlIGNvbnNpZGVyZWRcbiAgICAgIC8vIGVxdWFsIGZvciB0ZXN0aW5nIHB1cnBvc2VzIGFuZCB0aGVyZWZvcmUgd2UgaGlkZSBpdCBmcm9tIGVudW1lcmF0aW9uLlxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQsICdfc291cmNlJywge1xuICAgICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgICB2YWx1ZTogc291cmNlXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbWVudC5fc3RvcmUudmFsaWRhdGVkID0gZmFsc2U7XG4gICAgICBlbGVtZW50Ll9zZWxmID0gc2VsZjtcbiAgICAgIGVsZW1lbnQuX3NvdXJjZSA9IHNvdXJjZTtcbiAgICB9XG4gICAgaWYgKE9iamVjdC5mcmVlemUpIHtcbiAgICAgIE9iamVjdC5mcmVlemUoZWxlbWVudC5wcm9wcyk7XG4gICAgICBPYmplY3QuZnJlZXplKGVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlbGVtZW50O1xufTtcblxuLyoqXG4gKiBDcmVhdGUgYW5kIHJldHVybiBhIG5ldyBSZWFjdEVsZW1lbnQgb2YgdGhlIGdpdmVuIHR5cGUuXG4gKiBTZWUgaHR0cHM6Ly9mYWNlYm9vay5naXRodWIuaW8vcmVhY3QvZG9jcy90b3AtbGV2ZWwtYXBpLmh0bWwjcmVhY3QuY3JlYXRlZWxlbWVudFxuICovXG5SZWFjdEVsZW1lbnQuY3JlYXRlRWxlbWVudCA9IGZ1bmN0aW9uICh0eXBlLCBjb25maWcsIGNoaWxkcmVuKSB7XG4gIHZhciBwcm9wTmFtZTtcblxuICAvLyBSZXNlcnZlZCBuYW1lcyBhcmUgZXh0cmFjdGVkXG4gIHZhciBwcm9wcyA9IHt9O1xuXG4gIHZhciBrZXkgPSBudWxsO1xuICB2YXIgcmVmID0gbnVsbDtcbiAgdmFyIHNlbGYgPSBudWxsO1xuICB2YXIgc291cmNlID0gbnVsbDtcblxuICBpZiAoY29uZmlnICE9IG51bGwpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IHdhcm5pbmcoXG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1wcm90byAqL1xuICAgICAgY29uZmlnLl9fcHJvdG9fXyA9PSBudWxsIHx8IGNvbmZpZy5fX3Byb3RvX18gPT09IE9iamVjdC5wcm90b3R5cGUsXG4gICAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLXByb3RvICovXG4gICAgICAnUmVhY3QuY3JlYXRlRWxlbWVudCguLi4pOiBFeHBlY3RlZCBwcm9wcyBhcmd1bWVudCB0byBiZSBhIHBsYWluIG9iamVjdC4gJyArICdQcm9wZXJ0aWVzIGRlZmluZWQgaW4gaXRzIHByb3RvdHlwZSBjaGFpbiB3aWxsIGJlIGlnbm9yZWQuJykgOiB2b2lkIDA7XG4gICAgICByZWYgPSAhY29uZmlnLmhhc093blByb3BlcnR5KCdyZWYnKSB8fCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGNvbmZpZywgJ3JlZicpLmdldCA/IG51bGwgOiBjb25maWcucmVmO1xuICAgICAga2V5ID0gIWNvbmZpZy5oYXNPd25Qcm9wZXJ0eSgna2V5JykgfHwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdrZXknKS5nZXQgPyBudWxsIDogJycgKyBjb25maWcua2V5O1xuICAgIH0gZWxzZSB7XG4gICAgICByZWYgPSBjb25maWcucmVmID09PSB1bmRlZmluZWQgPyBudWxsIDogY29uZmlnLnJlZjtcbiAgICAgIGtleSA9IGNvbmZpZy5rZXkgPT09IHVuZGVmaW5lZCA/IG51bGwgOiAnJyArIGNvbmZpZy5rZXk7XG4gICAgfVxuICAgIHNlbGYgPSBjb25maWcuX19zZWxmID09PSB1bmRlZmluZWQgPyBudWxsIDogY29uZmlnLl9fc2VsZjtcbiAgICBzb3VyY2UgPSBjb25maWcuX19zb3VyY2UgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBjb25maWcuX19zb3VyY2U7XG4gICAgLy8gUmVtYWluaW5nIHByb3BlcnRpZXMgYXJlIGFkZGVkIHRvIGEgbmV3IHByb3BzIG9iamVjdFxuICAgIGZvciAocHJvcE5hbWUgaW4gY29uZmlnKSB7XG4gICAgICBpZiAoY29uZmlnLmhhc093blByb3BlcnR5KHByb3BOYW1lKSAmJiAhUkVTRVJWRURfUFJPUFMuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpKSB7XG4gICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGNvbmZpZ1twcm9wTmFtZV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gQ2hpbGRyZW4gY2FuIGJlIG1vcmUgdGhhbiBvbmUgYXJndW1lbnQsIGFuZCB0aG9zZSBhcmUgdHJhbnNmZXJyZWQgb250b1xuICAvLyB0aGUgbmV3bHkgYWxsb2NhdGVkIHByb3BzIG9iamVjdC5cbiAgdmFyIGNoaWxkcmVuTGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aCAtIDI7XG4gIGlmIChjaGlsZHJlbkxlbmd0aCA9PT0gMSkge1xuICAgIHByb3BzLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gIH0gZWxzZSBpZiAoY2hpbGRyZW5MZW5ndGggPiAxKSB7XG4gICAgdmFyIGNoaWxkQXJyYXkgPSBBcnJheShjaGlsZHJlbkxlbmd0aCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbkxlbmd0aDsgaSsrKSB7XG4gICAgICBjaGlsZEFycmF5W2ldID0gYXJndW1lbnRzW2kgKyAyXTtcbiAgICB9XG4gICAgcHJvcHMuY2hpbGRyZW4gPSBjaGlsZEFycmF5O1xuICB9XG5cbiAgLy8gUmVzb2x2ZSBkZWZhdWx0IHByb3BzXG4gIGlmICh0eXBlICYmIHR5cGUuZGVmYXVsdFByb3BzKSB7XG4gICAgdmFyIGRlZmF1bHRQcm9wcyA9IHR5cGUuZGVmYXVsdFByb3BzO1xuICAgIGZvciAocHJvcE5hbWUgaW4gZGVmYXVsdFByb3BzKSB7XG4gICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gZGVmYXVsdFByb3BzW3Byb3BOYW1lXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAvLyBDcmVhdGUgZHVtbXkgYGtleWAgYW5kIGByZWZgIHByb3BlcnR5IHRvIGBwcm9wc2AgdG8gd2FybiB1c2Vyc1xuICAgIC8vIGFnYWluc3QgaXRzIHVzZVxuICAgIGlmICh0eXBlb2YgcHJvcHMuJCR0eXBlb2YgPT09ICd1bmRlZmluZWQnIHx8IHByb3BzLiQkdHlwZW9mICE9PSBSRUFDVF9FTEVNRU5UX1RZUEUpIHtcbiAgICAgIGlmICghcHJvcHMuaGFzT3duUHJvcGVydHkoJ2tleScpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9wcywgJ2tleScsIHtcbiAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICghc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24pIHtcbiAgICAgICAgICAgICAgc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24gPSB0cnVlO1xuICAgICAgICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gd2FybmluZyhmYWxzZSwgJyVzOiBga2V5YCBpcyBub3QgYSBwcm9wLiBUcnlpbmcgdG8gYWNjZXNzIGl0IHdpbGwgcmVzdWx0ICcgKyAnaW4gYHVuZGVmaW5lZGAgYmVpbmcgcmV0dXJuZWQuIElmIHlvdSBuZWVkIHRvIGFjY2VzcyB0aGUgc2FtZSAnICsgJ3ZhbHVlIHdpdGhpbiB0aGUgY2hpbGQgY29tcG9uZW50LCB5b3Ugc2hvdWxkIHBhc3MgaXQgYXMgYSBkaWZmZXJlbnQgJyArICdwcm9wLiAoaHR0cHM6Ly9mYi5tZS9yZWFjdC1zcGVjaWFsLXByb3BzKScsIHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nICYmICdkaXNwbGF5TmFtZScgaW4gdHlwZSA/IHR5cGUuZGlzcGxheU5hbWUgOiAnRWxlbWVudCcpIDogdm9pZCAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmICghcHJvcHMuaGFzT3duUHJvcGVydHkoJ3JlZicpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9wcywgJ3JlZicsIHtcbiAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICghc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24pIHtcbiAgICAgICAgICAgICAgc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24gPSB0cnVlO1xuICAgICAgICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gd2FybmluZyhmYWxzZSwgJyVzOiBgcmVmYCBpcyBub3QgYSBwcm9wLiBUcnlpbmcgdG8gYWNjZXNzIGl0IHdpbGwgcmVzdWx0ICcgKyAnaW4gYHVuZGVmaW5lZGAgYmVpbmcgcmV0dXJuZWQuIElmIHlvdSBuZWVkIHRvIGFjY2VzcyB0aGUgc2FtZSAnICsgJ3ZhbHVlIHdpdGhpbiB0aGUgY2hpbGQgY29tcG9uZW50LCB5b3Ugc2hvdWxkIHBhc3MgaXQgYXMgYSBkaWZmZXJlbnQgJyArICdwcm9wLiAoaHR0cHM6Ly9mYi5tZS9yZWFjdC1zcGVjaWFsLXByb3BzKScsIHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nICYmICdkaXNwbGF5TmFtZScgaW4gdHlwZSA/IHR5cGUuZGlzcGxheU5hbWUgOiAnRWxlbWVudCcpIDogdm9pZCAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIFJlYWN0RWxlbWVudCh0eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LCBwcm9wcyk7XG59O1xuXG4vKipcbiAqIFJldHVybiBhIGZ1bmN0aW9uIHRoYXQgcHJvZHVjZXMgUmVhY3RFbGVtZW50cyBvZiBhIGdpdmVuIHR5cGUuXG4gKiBTZWUgaHR0cHM6Ly9mYWNlYm9vay5naXRodWIuaW8vcmVhY3QvZG9jcy90b3AtbGV2ZWwtYXBpLmh0bWwjcmVhY3QuY3JlYXRlZmFjdG9yeVxuICovXG5SZWFjdEVsZW1lbnQuY3JlYXRlRmFjdG9yeSA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gIHZhciBmYWN0b3J5ID0gUmVhY3RFbGVtZW50LmNyZWF0ZUVsZW1lbnQuYmluZChudWxsLCB0eXBlKTtcbiAgLy8gRXhwb3NlIHRoZSB0eXBlIG9uIHRoZSBmYWN0b3J5IGFuZCB0aGUgcHJvdG90eXBlIHNvIHRoYXQgaXQgY2FuIGJlXG4gIC8vIGVhc2lseSBhY2Nlc3NlZCBvbiBlbGVtZW50cy4gRS5nLiBgPEZvbyAvPi50eXBlID09PSBGb29gLlxuICAvLyBUaGlzIHNob3VsZCBub3QgYmUgbmFtZWQgYGNvbnN0cnVjdG9yYCBzaW5jZSB0aGlzIG1heSBub3QgYmUgdGhlIGZ1bmN0aW9uXG4gIC8vIHRoYXQgY3JlYXRlZCB0aGUgZWxlbWVudCwgYW5kIGl0IG1heSBub3QgZXZlbiBiZSBhIGNvbnN0cnVjdG9yLlxuICAvLyBMZWdhY3kgaG9vayBUT0RPOiBXYXJuIGlmIHRoaXMgaXMgYWNjZXNzZWRcbiAgZmFjdG9yeS50eXBlID0gdHlwZTtcbiAgcmV0dXJuIGZhY3Rvcnk7XG59O1xuXG5SZWFjdEVsZW1lbnQuY2xvbmVBbmRSZXBsYWNlS2V5ID0gZnVuY3Rpb24gKG9sZEVsZW1lbnQsIG5ld0tleSkge1xuICB2YXIgbmV3RWxlbWVudCA9IFJlYWN0RWxlbWVudChvbGRFbGVtZW50LnR5cGUsIG5ld0tleSwgb2xkRWxlbWVudC5yZWYsIG9sZEVsZW1lbnQuX3NlbGYsIG9sZEVsZW1lbnQuX3NvdXJjZSwgb2xkRWxlbWVudC5fb3duZXIsIG9sZEVsZW1lbnQucHJvcHMpO1xuXG4gIHJldHVybiBuZXdFbGVtZW50O1xufTtcblxuLyoqXG4gKiBDbG9uZSBhbmQgcmV0dXJuIGEgbmV3IFJlYWN0RWxlbWVudCB1c2luZyBlbGVtZW50IGFzIHRoZSBzdGFydGluZyBwb2ludC5cbiAqIFNlZSBodHRwczovL2ZhY2Vib29rLmdpdGh1Yi5pby9yZWFjdC9kb2NzL3RvcC1sZXZlbC1hcGkuaHRtbCNyZWFjdC5jbG9uZWVsZW1lbnRcbiAqL1xuUmVhY3RFbGVtZW50LmNsb25lRWxlbWVudCA9IGZ1bmN0aW9uIChlbGVtZW50LCBjb25maWcsIGNoaWxkcmVuKSB7XG4gIHZhciBwcm9wTmFtZTtcblxuICAvLyBPcmlnaW5hbCBwcm9wcyBhcmUgY29waWVkXG4gIHZhciBwcm9wcyA9IF9hc3NpZ24oe30sIGVsZW1lbnQucHJvcHMpO1xuXG4gIC8vIFJlc2VydmVkIG5hbWVzIGFyZSBleHRyYWN0ZWRcbiAgdmFyIGtleSA9IGVsZW1lbnQua2V5O1xuICB2YXIgcmVmID0gZWxlbWVudC5yZWY7XG4gIC8vIFNlbGYgaXMgcHJlc2VydmVkIHNpbmNlIHRoZSBvd25lciBpcyBwcmVzZXJ2ZWQuXG4gIHZhciBzZWxmID0gZWxlbWVudC5fc2VsZjtcbiAgLy8gU291cmNlIGlzIHByZXNlcnZlZCBzaW5jZSBjbG9uZUVsZW1lbnQgaXMgdW5saWtlbHkgdG8gYmUgdGFyZ2V0ZWQgYnkgYVxuICAvLyB0cmFuc3BpbGVyLCBhbmQgdGhlIG9yaWdpbmFsIHNvdXJjZSBpcyBwcm9iYWJseSBhIGJldHRlciBpbmRpY2F0b3Igb2YgdGhlXG4gIC8vIHRydWUgb3duZXIuXG4gIHZhciBzb3VyY2UgPSBlbGVtZW50Ll9zb3VyY2U7XG5cbiAgLy8gT3duZXIgd2lsbCBiZSBwcmVzZXJ2ZWQsIHVubGVzcyByZWYgaXMgb3ZlcnJpZGRlblxuICB2YXIgb3duZXIgPSBlbGVtZW50Ll9vd25lcjtcblxuICBpZiAoY29uZmlnICE9IG51bGwpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IHdhcm5pbmcoXG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1wcm90byAqL1xuICAgICAgY29uZmlnLl9fcHJvdG9fXyA9PSBudWxsIHx8IGNvbmZpZy5fX3Byb3RvX18gPT09IE9iamVjdC5wcm90b3R5cGUsXG4gICAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLXByb3RvICovXG4gICAgICAnUmVhY3QuY2xvbmVFbGVtZW50KC4uLik6IEV4cGVjdGVkIHByb3BzIGFyZ3VtZW50IHRvIGJlIGEgcGxhaW4gb2JqZWN0LiAnICsgJ1Byb3BlcnRpZXMgZGVmaW5lZCBpbiBpdHMgcHJvdG90eXBlIGNoYWluIHdpbGwgYmUgaWdub3JlZC4nKSA6IHZvaWQgMDtcbiAgICB9XG4gICAgaWYgKGNvbmZpZy5yZWYgIT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gU2lsZW50bHkgc3RlYWwgdGhlIHJlZiBmcm9tIHRoZSBwYXJlbnQuXG4gICAgICByZWYgPSBjb25maWcucmVmO1xuICAgICAgb3duZXIgPSBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50O1xuICAgIH1cbiAgICBpZiAoY29uZmlnLmtleSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBrZXkgPSAnJyArIGNvbmZpZy5rZXk7XG4gICAgfVxuICAgIC8vIFJlbWFpbmluZyBwcm9wZXJ0aWVzIG92ZXJyaWRlIGV4aXN0aW5nIHByb3BzXG4gICAgdmFyIGRlZmF1bHRQcm9wcztcbiAgICBpZiAoZWxlbWVudC50eXBlICYmIGVsZW1lbnQudHlwZS5kZWZhdWx0UHJvcHMpIHtcbiAgICAgIGRlZmF1bHRQcm9wcyA9IGVsZW1lbnQudHlwZS5kZWZhdWx0UHJvcHM7XG4gICAgfVxuICAgIGZvciAocHJvcE5hbWUgaW4gY29uZmlnKSB7XG4gICAgICBpZiAoY29uZmlnLmhhc093blByb3BlcnR5KHByb3BOYW1lKSAmJiAhUkVTRVJWRURfUFJPUFMuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpKSB7XG4gICAgICAgIGlmIChjb25maWdbcHJvcE5hbWVdID09PSB1bmRlZmluZWQgJiYgZGVmYXVsdFByb3BzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAvLyBSZXNvbHZlIGRlZmF1bHQgcHJvcHNcbiAgICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBkZWZhdWx0UHJvcHNbcHJvcE5hbWVdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGNvbmZpZ1twcm9wTmFtZV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBDaGlsZHJlbiBjYW4gYmUgbW9yZSB0aGFuIG9uZSBhcmd1bWVudCwgYW5kIHRob3NlIGFyZSB0cmFuc2ZlcnJlZCBvbnRvXG4gIC8vIHRoZSBuZXdseSBhbGxvY2F0ZWQgcHJvcHMgb2JqZWN0LlxuICB2YXIgY2hpbGRyZW5MZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoIC0gMjtcbiAgaWYgKGNoaWxkcmVuTGVuZ3RoID09PSAxKSB7XG4gICAgcHJvcHMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgfSBlbHNlIGlmIChjaGlsZHJlbkxlbmd0aCA+IDEpIHtcbiAgICB2YXIgY2hpbGRBcnJheSA9IEFycmF5KGNoaWxkcmVuTGVuZ3RoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuTGVuZ3RoOyBpKyspIHtcbiAgICAgIGNoaWxkQXJyYXlbaV0gPSBhcmd1bWVudHNbaSArIDJdO1xuICAgIH1cbiAgICBwcm9wcy5jaGlsZHJlbiA9IGNoaWxkQXJyYXk7XG4gIH1cblxuICByZXR1cm4gUmVhY3RFbGVtZW50KGVsZW1lbnQudHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgb3duZXIsIHByb3BzKTtcbn07XG5cbi8qKlxuICogVmVyaWZpZXMgdGhlIG9iamVjdCBpcyBhIFJlYWN0RWxlbWVudC5cbiAqIFNlZSBodHRwczovL2ZhY2Vib29rLmdpdGh1Yi5pby9yZWFjdC9kb2NzL3RvcC1sZXZlbC1hcGkuaHRtbCNyZWFjdC5pc3ZhbGlkZWxlbWVudFxuICogQHBhcmFtIHs/b2JqZWN0fSBvYmplY3RcbiAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgYG9iamVjdGAgaXMgYSB2YWxpZCBjb21wb25lbnQuXG4gKiBAZmluYWxcbiAqL1xuUmVhY3RFbGVtZW50LmlzVmFsaWRFbGVtZW50ID0gZnVuY3Rpb24gKG9iamVjdCkge1xuICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsICYmIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdEVsZW1lbnQ7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QvbGliL1JlYWN0RWxlbWVudC5qc1xuICoqIG1vZHVsZSBpZCA9IDlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBSZWFjdEN1cnJlbnRPd25lclxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBLZWVwcyB0cmFjayBvZiB0aGUgY3VycmVudCBvd25lci5cbiAqXG4gKiBUaGUgY3VycmVudCBvd25lciBpcyB0aGUgY29tcG9uZW50IHdobyBzaG91bGQgb3duIGFueSBjb21wb25lbnRzIHRoYXQgYXJlXG4gKiBjdXJyZW50bHkgYmVpbmcgY29uc3RydWN0ZWQuXG4gKi9cblxudmFyIFJlYWN0Q3VycmVudE93bmVyID0ge1xuXG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICogQHR5cGUge1JlYWN0Q29tcG9uZW50fVxuICAgKi9cbiAgY3VycmVudDogbnVsbFxuXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0Q3VycmVudE93bmVyO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0L2xpYi9SZWFjdEN1cnJlbnRPd25lci5qc1xuICoqIG1vZHVsZSBpZCA9IDEwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENvcHlyaWdodCAyMDE0LTIwMTUsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgZW1wdHlGdW5jdGlvbiA9IHJlcXVpcmUoJy4vZW1wdHlGdW5jdGlvbicpO1xuXG4vKipcbiAqIFNpbWlsYXIgdG8gaW52YXJpYW50IGJ1dCBvbmx5IGxvZ3MgYSB3YXJuaW5nIGlmIHRoZSBjb25kaXRpb24gaXMgbm90IG1ldC5cbiAqIFRoaXMgY2FuIGJlIHVzZWQgdG8gbG9nIGlzc3VlcyBpbiBkZXZlbG9wbWVudCBlbnZpcm9ubWVudHMgaW4gY3JpdGljYWxcbiAqIHBhdGhzLiBSZW1vdmluZyB0aGUgbG9nZ2luZyBjb2RlIGZvciBwcm9kdWN0aW9uIGVudmlyb25tZW50cyB3aWxsIGtlZXAgdGhlXG4gKiBzYW1lIGxvZ2ljIGFuZCBmb2xsb3cgdGhlIHNhbWUgY29kZSBwYXRocy5cbiAqL1xuXG52YXIgd2FybmluZyA9IGVtcHR5RnVuY3Rpb247XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHdhcm5pbmcgPSBmdW5jdGlvbiB3YXJuaW5nKGNvbmRpdGlvbiwgZm9ybWF0KSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuID4gMiA/IF9sZW4gLSAyIDogMCksIF9rZXkgPSAyOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXkgLSAyXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignYHdhcm5pbmcoY29uZGl0aW9uLCBmb3JtYXQsIC4uLmFyZ3MpYCByZXF1aXJlcyBhIHdhcm5pbmcgJyArICdtZXNzYWdlIGFyZ3VtZW50Jyk7XG4gICAgfVxuXG4gICAgaWYgKGZvcm1hdC5pbmRleE9mKCdGYWlsZWQgQ29tcG9zaXRlIHByb3BUeXBlOiAnKSA9PT0gMCkge1xuICAgICAgcmV0dXJuOyAvLyBJZ25vcmUgQ29tcG9zaXRlQ29tcG9uZW50IHByb3B0eXBlIGNoZWNrLlxuICAgIH1cblxuICAgIGlmICghY29uZGl0aW9uKSB7XG4gICAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArIGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBhcmdzW2FyZ0luZGV4KytdO1xuICAgICAgfSk7XG4gICAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgICB9XG4gICAgICB0cnkge1xuICAgICAgICAvLyAtLS0gV2VsY29tZSB0byBkZWJ1Z2dpbmcgUmVhY3QgLS0tXG4gICAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgICAgfSBjYXRjaCAoeCkge31cbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gd2FybmluZztcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9mYmpzL2xpYi93YXJuaW5nLmpzXG4gKiogbW9kdWxlIGlkID0gMTFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogXG4gKi9cblxuZnVuY3Rpb24gbWFrZUVtcHR5RnVuY3Rpb24oYXJnKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGFyZztcbiAgfTtcbn1cblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGFjY2VwdHMgYW5kIGRpc2NhcmRzIGlucHV0czsgaXQgaGFzIG5vIHNpZGUgZWZmZWN0cy4gVGhpcyBpc1xuICogcHJpbWFyaWx5IHVzZWZ1bCBpZGlvbWF0aWNhbGx5IGZvciBvdmVycmlkYWJsZSBmdW5jdGlvbiBlbmRwb2ludHMgd2hpY2hcbiAqIGFsd2F5cyBuZWVkIHRvIGJlIGNhbGxhYmxlLCBzaW5jZSBKUyBsYWNrcyBhIG51bGwtY2FsbCBpZGlvbSBhbGEgQ29jb2EuXG4gKi9cbnZhciBlbXB0eUZ1bmN0aW9uID0gZnVuY3Rpb24gZW1wdHlGdW5jdGlvbigpIHt9O1xuXG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zID0gbWFrZUVtcHR5RnVuY3Rpb247XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zRmFsc2UgPSBtYWtlRW1wdHlGdW5jdGlvbihmYWxzZSk7XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zVHJ1ZSA9IG1ha2VFbXB0eUZ1bmN0aW9uKHRydWUpO1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc051bGwgPSBtYWtlRW1wdHlGdW5jdGlvbihudWxsKTtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNUaGlzID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcztcbn07XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zQXJndW1lbnQgPSBmdW5jdGlvbiAoYXJnKSB7XG4gIHJldHVybiBhcmc7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGVtcHR5RnVuY3Rpb247XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZmJqcy9saWIvZW1wdHlGdW5jdGlvbi5qc1xuICoqIG1vZHVsZSBpZCA9IDEyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENvcHlyaWdodCAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAcHJvdmlkZXNNb2R1bGUgY2FuRGVmaW5lUHJvcGVydHlcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBjYW5EZWZpbmVQcm9wZXJ0eSA9IGZhbHNlO1xuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdHJ5IHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICd4JywgeyBnZXQ6IGZ1bmN0aW9uICgpIHt9IH0pO1xuICAgIGNhbkRlZmluZVByb3BlcnR5ID0gdHJ1ZTtcbiAgfSBjYXRjaCAoeCkge1xuICAgIC8vIElFIHdpbGwgZmFpbCBvbiBkZWZpbmVQcm9wZXJ0eVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2FuRGVmaW5lUHJvcGVydHk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QvbGliL2NhbkRlZmluZVByb3BlcnR5LmpzXG4gKiogbW9kdWxlIGlkID0gMTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSB0cmF2ZXJzZUFsbENoaWxkcmVuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3RDdXJyZW50T3duZXIgPSByZXF1aXJlKCcuL1JlYWN0Q3VycmVudE93bmVyJyk7XG52YXIgUmVhY3RFbGVtZW50ID0gcmVxdWlyZSgnLi9SZWFjdEVsZW1lbnQnKTtcblxudmFyIGdldEl0ZXJhdG9yRm4gPSByZXF1aXJlKCcuL2dldEl0ZXJhdG9yRm4nKTtcbnZhciBpbnZhcmlhbnQgPSByZXF1aXJlKCdmYmpzL2xpYi9pbnZhcmlhbnQnKTtcbnZhciBLZXlFc2NhcGVVdGlscyA9IHJlcXVpcmUoJy4vS2V5RXNjYXBlVXRpbHMnKTtcbnZhciB3YXJuaW5nID0gcmVxdWlyZSgnZmJqcy9saWIvd2FybmluZycpO1xuXG52YXIgU0VQQVJBVE9SID0gJy4nO1xudmFyIFNVQlNFUEFSQVRPUiA9ICc6JztcblxuLyoqXG4gKiBUT0RPOiBUZXN0IHRoYXQgYSBzaW5nbGUgY2hpbGQgYW5kIGFuIGFycmF5IHdpdGggb25lIGl0ZW0gaGF2ZSB0aGUgc2FtZSBrZXlcbiAqIHBhdHRlcm4uXG4gKi9cblxudmFyIGRpZFdhcm5BYm91dE1hcHMgPSBmYWxzZTtcblxuLyoqXG4gKiBHZW5lcmF0ZSBhIGtleSBzdHJpbmcgdGhhdCBpZGVudGlmaWVzIGEgY29tcG9uZW50IHdpdGhpbiBhIHNldC5cbiAqXG4gKiBAcGFyYW0geyp9IGNvbXBvbmVudCBBIGNvbXBvbmVudCB0aGF0IGNvdWxkIGNvbnRhaW4gYSBtYW51YWwga2V5LlxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IEluZGV4IHRoYXQgaXMgdXNlZCBpZiBhIG1hbnVhbCBrZXkgaXMgbm90IHByb3ZpZGVkLlxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBnZXRDb21wb25lbnRLZXkoY29tcG9uZW50LCBpbmRleCkge1xuICAvLyBEbyBzb21lIHR5cGVjaGVja2luZyBoZXJlIHNpbmNlIHdlIGNhbGwgdGhpcyBibGluZGx5LiBXZSB3YW50IHRvIGVuc3VyZVxuICAvLyB0aGF0IHdlIGRvbid0IGJsb2NrIHBvdGVudGlhbCBmdXR1cmUgRVMgQVBJcy5cbiAgaWYgKGNvbXBvbmVudCAmJiB0eXBlb2YgY29tcG9uZW50ID09PSAnb2JqZWN0JyAmJiBjb21wb25lbnQua2V5ICE9IG51bGwpIHtcbiAgICAvLyBFeHBsaWNpdCBrZXlcbiAgICByZXR1cm4gS2V5RXNjYXBlVXRpbHMuZXNjYXBlKGNvbXBvbmVudC5rZXkpO1xuICB9XG4gIC8vIEltcGxpY2l0IGtleSBkZXRlcm1pbmVkIGJ5IHRoZSBpbmRleCBpbiB0aGUgc2V0XG4gIHJldHVybiBpbmRleC50b1N0cmluZygzNik7XG59XG5cbi8qKlxuICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBjb250YWluZXIuXG4gKiBAcGFyYW0geyFzdHJpbmd9IG5hbWVTb0ZhciBOYW1lIG9mIHRoZSBrZXkgcGF0aCBzbyBmYXIuXG4gKiBAcGFyYW0geyFmdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGJhY2sgdG8gaW52b2tlIHdpdGggZWFjaCBjaGlsZCBmb3VuZC5cbiAqIEBwYXJhbSB7Pyp9IHRyYXZlcnNlQ29udGV4dCBVc2VkIHRvIHBhc3MgaW5mb3JtYXRpb24gdGhyb3VnaG91dCB0aGUgdHJhdmVyc2FsXG4gKiBwcm9jZXNzLlxuICogQHJldHVybiB7IW51bWJlcn0gVGhlIG51bWJlciBvZiBjaGlsZHJlbiBpbiB0aGlzIHN1YnRyZWUuXG4gKi9cbmZ1bmN0aW9uIHRyYXZlcnNlQWxsQ2hpbGRyZW5JbXBsKGNoaWxkcmVuLCBuYW1lU29GYXIsIGNhbGxiYWNrLCB0cmF2ZXJzZUNvbnRleHQpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgY2hpbGRyZW47XG5cbiAgaWYgKHR5cGUgPT09ICd1bmRlZmluZWQnIHx8IHR5cGUgPT09ICdib29sZWFuJykge1xuICAgIC8vIEFsbCBvZiB0aGUgYWJvdmUgYXJlIHBlcmNlaXZlZCBhcyBudWxsLlxuICAgIGNoaWxkcmVuID0gbnVsbDtcbiAgfVxuXG4gIGlmIChjaGlsZHJlbiA9PT0gbnVsbCB8fCB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlID09PSAnbnVtYmVyJyB8fCBSZWFjdEVsZW1lbnQuaXNWYWxpZEVsZW1lbnQoY2hpbGRyZW4pKSB7XG4gICAgY2FsbGJhY2sodHJhdmVyc2VDb250ZXh0LCBjaGlsZHJlbixcbiAgICAvLyBJZiBpdCdzIHRoZSBvbmx5IGNoaWxkLCB0cmVhdCB0aGUgbmFtZSBhcyBpZiBpdCB3YXMgd3JhcHBlZCBpbiBhbiBhcnJheVxuICAgIC8vIHNvIHRoYXQgaXQncyBjb25zaXN0ZW50IGlmIHRoZSBudW1iZXIgb2YgY2hpbGRyZW4gZ3Jvd3MuXG4gICAgbmFtZVNvRmFyID09PSAnJyA/IFNFUEFSQVRPUiArIGdldENvbXBvbmVudEtleShjaGlsZHJlbiwgMCkgOiBuYW1lU29GYXIpO1xuICAgIHJldHVybiAxO1xuICB9XG5cbiAgdmFyIGNoaWxkO1xuICB2YXIgbmV4dE5hbWU7XG4gIHZhciBzdWJ0cmVlQ291bnQgPSAwOyAvLyBDb3VudCBvZiBjaGlsZHJlbiBmb3VuZCBpbiB0aGUgY3VycmVudCBzdWJ0cmVlLlxuICB2YXIgbmV4dE5hbWVQcmVmaXggPSBuYW1lU29GYXIgPT09ICcnID8gU0VQQVJBVE9SIDogbmFtZVNvRmFyICsgU1VCU0VQQVJBVE9SO1xuXG4gIGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNoaWxkID0gY2hpbGRyZW5baV07XG4gICAgICBuZXh0TmFtZSA9IG5leHROYW1lUHJlZml4ICsgZ2V0Q29tcG9uZW50S2V5KGNoaWxkLCBpKTtcbiAgICAgIHN1YnRyZWVDb3VudCArPSB0cmF2ZXJzZUFsbENoaWxkcmVuSW1wbChjaGlsZCwgbmV4dE5hbWUsIGNhbGxiYWNrLCB0cmF2ZXJzZUNvbnRleHQpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4oY2hpbGRyZW4pO1xuICAgIGlmIChpdGVyYXRvckZuKSB7XG4gICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwoY2hpbGRyZW4pO1xuICAgICAgdmFyIHN0ZXA7XG4gICAgICBpZiAoaXRlcmF0b3JGbiAhPT0gY2hpbGRyZW4uZW50cmllcykge1xuICAgICAgICB2YXIgaWkgPSAwO1xuICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgY2hpbGQgPSBzdGVwLnZhbHVlO1xuICAgICAgICAgIG5leHROYW1lID0gbmV4dE5hbWVQcmVmaXggKyBnZXRDb21wb25lbnRLZXkoY2hpbGQsIGlpKyspO1xuICAgICAgICAgIHN1YnRyZWVDb3VudCArPSB0cmF2ZXJzZUFsbENoaWxkcmVuSW1wbChjaGlsZCwgbmV4dE5hbWUsIGNhbGxiYWNrLCB0cmF2ZXJzZUNvbnRleHQpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyB3YXJuaW5nKGRpZFdhcm5BYm91dE1hcHMsICdVc2luZyBNYXBzIGFzIGNoaWxkcmVuIGlzIG5vdCB5ZXQgZnVsbHkgc3VwcG9ydGVkLiBJdCBpcyBhbiAnICsgJ2V4cGVyaW1lbnRhbCBmZWF0dXJlIHRoYXQgbWlnaHQgYmUgcmVtb3ZlZC4gQ29udmVydCBpdCB0byBhICcgKyAnc2VxdWVuY2UgLyBpdGVyYWJsZSBvZiBrZXllZCBSZWFjdEVsZW1lbnRzIGluc3RlYWQuJykgOiB2b2lkIDA7XG4gICAgICAgICAgZGlkV2FybkFib3V0TWFwcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSXRlcmF0b3Igd2lsbCBwcm92aWRlIGVudHJ5IFtrLHZdIHR1cGxlcyByYXRoZXIgdGhhbiB2YWx1ZXMuXG4gICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICB2YXIgZW50cnkgPSBzdGVwLnZhbHVlO1xuICAgICAgICAgIGlmIChlbnRyeSkge1xuICAgICAgICAgICAgY2hpbGQgPSBlbnRyeVsxXTtcbiAgICAgICAgICAgIG5leHROYW1lID0gbmV4dE5hbWVQcmVmaXggKyBLZXlFc2NhcGVVdGlscy5lc2NhcGUoZW50cnlbMF0pICsgU1VCU0VQQVJBVE9SICsgZ2V0Q29tcG9uZW50S2V5KGNoaWxkLCAwKTtcbiAgICAgICAgICAgIHN1YnRyZWVDb3VudCArPSB0cmF2ZXJzZUFsbENoaWxkcmVuSW1wbChjaGlsZCwgbmV4dE5hbWUsIGNhbGxiYWNrLCB0cmF2ZXJzZUNvbnRleHQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHZhciBhZGRlbmR1bSA9ICcnO1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgYWRkZW5kdW0gPSAnIElmIHlvdSBtZWFudCB0byByZW5kZXIgYSBjb2xsZWN0aW9uIG9mIGNoaWxkcmVuLCB1c2UgYW4gYXJyYXkgJyArICdpbnN0ZWFkIG9yIHdyYXAgdGhlIG9iamVjdCB1c2luZyBjcmVhdGVGcmFnbWVudChvYmplY3QpIGZyb20gdGhlICcgKyAnUmVhY3QgYWRkLW9ucy4nO1xuICAgICAgICBpZiAoY2hpbGRyZW4uX2lzUmVhY3RFbGVtZW50KSB7XG4gICAgICAgICAgYWRkZW5kdW0gPSAnIEl0IGxvb2tzIGxpa2UgeW91XFwncmUgdXNpbmcgYW4gZWxlbWVudCBjcmVhdGVkIGJ5IGEgZGlmZmVyZW50ICcgKyAndmVyc2lvbiBvZiBSZWFjdC4gTWFrZSBzdXJlIHRvIHVzZSBvbmx5IG9uZSBjb3B5IG9mIFJlYWN0Lic7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQpIHtcbiAgICAgICAgICB2YXIgbmFtZSA9IFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQuZ2V0TmFtZSgpO1xuICAgICAgICAgIGlmIChuYW1lKSB7XG4gICAgICAgICAgICBhZGRlbmR1bSArPSAnIENoZWNrIHRoZSByZW5kZXIgbWV0aG9kIG9mIGAnICsgbmFtZSArICdgLic7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICB2YXIgY2hpbGRyZW5TdHJpbmcgPSBTdHJpbmcoY2hpbGRyZW4pO1xuICAgICAgIWZhbHNlID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IGludmFyaWFudChmYWxzZSwgJ09iamVjdHMgYXJlIG5vdCB2YWxpZCBhcyBhIFJlYWN0IGNoaWxkIChmb3VuZDogJXMpLiVzJywgY2hpbGRyZW5TdHJpbmcgPT09ICdbb2JqZWN0IE9iamVjdF0nID8gJ29iamVjdCB3aXRoIGtleXMgeycgKyBPYmplY3Qua2V5cyhjaGlsZHJlbikuam9pbignLCAnKSArICd9JyA6IGNoaWxkcmVuU3RyaW5nLCBhZGRlbmR1bSkgOiBpbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdWJ0cmVlQ291bnQ7XG59XG5cbi8qKlxuICogVHJhdmVyc2VzIGNoaWxkcmVuIHRoYXQgYXJlIHR5cGljYWxseSBzcGVjaWZpZWQgYXMgYHByb3BzLmNoaWxkcmVuYCwgYnV0XG4gKiBtaWdodCBhbHNvIGJlIHNwZWNpZmllZCB0aHJvdWdoIGF0dHJpYnV0ZXM6XG4gKlxuICogLSBgdHJhdmVyc2VBbGxDaGlsZHJlbih0aGlzLnByb3BzLmNoaWxkcmVuLCAuLi4pYFxuICogLSBgdHJhdmVyc2VBbGxDaGlsZHJlbih0aGlzLnByb3BzLmxlZnRQYW5lbENoaWxkcmVuLCAuLi4pYFxuICpcbiAqIFRoZSBgdHJhdmVyc2VDb250ZXh0YCBpcyBhbiBvcHRpb25hbCBhcmd1bWVudCB0aGF0IGlzIHBhc3NlZCB0aHJvdWdoIHRoZVxuICogZW50aXJlIHRyYXZlcnNhbC4gSXQgY2FuIGJlIHVzZWQgdG8gc3RvcmUgYWNjdW11bGF0aW9ucyBvciBhbnl0aGluZyBlbHNlIHRoYXRcbiAqIHRoZSBjYWxsYmFjayBtaWdodCBmaW5kIHJlbGV2YW50LlxuICpcbiAqIEBwYXJhbSB7Pyp9IGNoaWxkcmVuIENoaWxkcmVuIHRyZWUgb2JqZWN0LlxuICogQHBhcmFtIHshZnVuY3Rpb259IGNhbGxiYWNrIFRvIGludm9rZSB1cG9uIHRyYXZlcnNpbmcgZWFjaCBjaGlsZC5cbiAqIEBwYXJhbSB7Pyp9IHRyYXZlcnNlQ29udGV4dCBDb250ZXh0IGZvciB0cmF2ZXJzYWwuXG4gKiBAcmV0dXJuIHshbnVtYmVyfSBUaGUgbnVtYmVyIG9mIGNoaWxkcmVuIGluIHRoaXMgc3VidHJlZS5cbiAqL1xuZnVuY3Rpb24gdHJhdmVyc2VBbGxDaGlsZHJlbihjaGlsZHJlbiwgY2FsbGJhY2ssIHRyYXZlcnNlQ29udGV4dCkge1xuICBpZiAoY2hpbGRyZW4gPT0gbnVsbCkge1xuICAgIHJldHVybiAwO1xuICB9XG5cbiAgcmV0dXJuIHRyYXZlcnNlQWxsQ2hpbGRyZW5JbXBsKGNoaWxkcmVuLCAnJywgY2FsbGJhY2ssIHRyYXZlcnNlQ29udGV4dCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdHJhdmVyc2VBbGxDaGlsZHJlbjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC9saWIvdHJhdmVyc2VBbGxDaGlsZHJlbi5qc1xuICoqIG1vZHVsZSBpZCA9IDE0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENvcHlyaWdodCAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAcHJvdmlkZXNNb2R1bGUgZ2V0SXRlcmF0b3JGblxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyogZ2xvYmFsIFN5bWJvbCAqL1xuXG52YXIgSVRFUkFUT1JfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuaXRlcmF0b3I7XG52YXIgRkFVWF9JVEVSQVRPUl9TWU1CT0wgPSAnQEBpdGVyYXRvcic7IC8vIEJlZm9yZSBTeW1ib2wgc3BlYy5cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBpdGVyYXRvciBtZXRob2QgZnVuY3Rpb24gY29udGFpbmVkIG9uIHRoZSBpdGVyYWJsZSBvYmplY3QuXG4gKlxuICogQmUgc3VyZSB0byBpbnZva2UgdGhlIGZ1bmN0aW9uIHdpdGggdGhlIGl0ZXJhYmxlIGFzIGNvbnRleHQ6XG4gKlxuICogICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihteUl0ZXJhYmxlKTtcbiAqICAgICBpZiAoaXRlcmF0b3JGbikge1xuICogICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKG15SXRlcmFibGUpO1xuICogICAgICAgLi4uXG4gKiAgICAgfVxuICpcbiAqIEBwYXJhbSB7P29iamVjdH0gbWF5YmVJdGVyYWJsZVxuICogQHJldHVybiB7P2Z1bmN0aW9ufVxuICovXG5mdW5jdGlvbiBnZXRJdGVyYXRvckZuKG1heWJlSXRlcmFibGUpIHtcbiAgdmFyIGl0ZXJhdG9yRm4gPSBtYXliZUl0ZXJhYmxlICYmIChJVEVSQVRPUl9TWU1CT0wgJiYgbWF5YmVJdGVyYWJsZVtJVEVSQVRPUl9TWU1CT0xdIHx8IG1heWJlSXRlcmFibGVbRkFVWF9JVEVSQVRPUl9TWU1CT0xdKTtcbiAgaWYgKHR5cGVvZiBpdGVyYXRvckZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIGl0ZXJhdG9yRm47XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRJdGVyYXRvckZuO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0L2xpYi9nZXRJdGVyYXRvckZuLmpzXG4gKiogbW9kdWxlIGlkID0gMTVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBLZXlFc2NhcGVVdGlsc1xuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBFc2NhcGUgYW5kIHdyYXAga2V5IHNvIGl0IGlzIHNhZmUgdG8gdXNlIGFzIGEgcmVhY3RpZFxuICpcbiAqIEBwYXJhbSB7Kn0ga2V5IHRvIGJlIGVzY2FwZWQuXG4gKiBAcmV0dXJuIHtzdHJpbmd9IHRoZSBlc2NhcGVkIGtleS5cbiAqL1xuXG5mdW5jdGlvbiBlc2NhcGUoa2V5KSB7XG4gIHZhciBlc2NhcGVSZWdleCA9IC9bPTpdL2c7XG4gIHZhciBlc2NhcGVyTG9va3VwID0ge1xuICAgICc9JzogJz0wJyxcbiAgICAnOic6ICc9MidcbiAgfTtcbiAgdmFyIGVzY2FwZWRTdHJpbmcgPSAoJycgKyBrZXkpLnJlcGxhY2UoZXNjYXBlUmVnZXgsIGZ1bmN0aW9uIChtYXRjaCkge1xuICAgIHJldHVybiBlc2NhcGVyTG9va3VwW21hdGNoXTtcbiAgfSk7XG5cbiAgcmV0dXJuICckJyArIGVzY2FwZWRTdHJpbmc7XG59XG5cbi8qKlxuICogVW5lc2NhcGUgYW5kIHVud3JhcCBrZXkgZm9yIGh1bWFuLXJlYWRhYmxlIGRpc3BsYXlcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IHRvIHVuZXNjYXBlLlxuICogQHJldHVybiB7c3RyaW5nfSB0aGUgdW5lc2NhcGVkIGtleS5cbiAqL1xuZnVuY3Rpb24gdW5lc2NhcGUoa2V5KSB7XG4gIHZhciB1bmVzY2FwZVJlZ2V4ID0gLyg9MHw9MikvZztcbiAgdmFyIHVuZXNjYXBlckxvb2t1cCA9IHtcbiAgICAnPTAnOiAnPScsXG4gICAgJz0yJzogJzonXG4gIH07XG4gIHZhciBrZXlTdWJzdHJpbmcgPSBrZXlbMF0gPT09ICcuJyAmJiBrZXlbMV0gPT09ICckJyA/IGtleS5zdWJzdHJpbmcoMikgOiBrZXkuc3Vic3RyaW5nKDEpO1xuXG4gIHJldHVybiAoJycgKyBrZXlTdWJzdHJpbmcpLnJlcGxhY2UodW5lc2NhcGVSZWdleCwgZnVuY3Rpb24gKG1hdGNoKSB7XG4gICAgcmV0dXJuIHVuZXNjYXBlckxvb2t1cFttYXRjaF07XG4gIH0pO1xufVxuXG52YXIgS2V5RXNjYXBlVXRpbHMgPSB7XG4gIGVzY2FwZTogZXNjYXBlLFxuICB1bmVzY2FwZTogdW5lc2NhcGVcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gS2V5RXNjYXBlVXRpbHM7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QvbGliL0tleUVzY2FwZVV0aWxzLmpzXG4gKiogbW9kdWxlIGlkID0gMTZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBSZWFjdENvbXBvbmVudFxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0Tm9vcFVwZGF0ZVF1ZXVlID0gcmVxdWlyZSgnLi9SZWFjdE5vb3BVcGRhdGVRdWV1ZScpO1xudmFyIFJlYWN0SW5zdHJ1bWVudGF0aW9uID0gcmVxdWlyZSgnLi9SZWFjdEluc3RydW1lbnRhdGlvbicpO1xuXG52YXIgY2FuRGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuL2NhbkRlZmluZVByb3BlcnR5Jyk7XG52YXIgZW1wdHlPYmplY3QgPSByZXF1aXJlKCdmYmpzL2xpYi9lbXB0eU9iamVjdCcpO1xudmFyIGludmFyaWFudCA9IHJlcXVpcmUoJ2ZianMvbGliL2ludmFyaWFudCcpO1xudmFyIHdhcm5pbmcgPSByZXF1aXJlKCdmYmpzL2xpYi93YXJuaW5nJyk7XG5cbi8qKlxuICogQmFzZSBjbGFzcyBoZWxwZXJzIGZvciB0aGUgdXBkYXRpbmcgc3RhdGUgb2YgYSBjb21wb25lbnQuXG4gKi9cbmZ1bmN0aW9uIFJlYWN0Q29tcG9uZW50KHByb3BzLCBjb250ZXh0LCB1cGRhdGVyKSB7XG4gIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgdGhpcy5yZWZzID0gZW1wdHlPYmplY3Q7XG4gIC8vIFdlIGluaXRpYWxpemUgdGhlIGRlZmF1bHQgdXBkYXRlciBidXQgdGhlIHJlYWwgb25lIGdldHMgaW5qZWN0ZWQgYnkgdGhlXG4gIC8vIHJlbmRlcmVyLlxuICB0aGlzLnVwZGF0ZXIgPSB1cGRhdGVyIHx8IFJlYWN0Tm9vcFVwZGF0ZVF1ZXVlO1xufVxuXG5SZWFjdENvbXBvbmVudC5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudCA9IHt9O1xuXG4vKipcbiAqIFNldHMgYSBzdWJzZXQgb2YgdGhlIHN0YXRlLiBBbHdheXMgdXNlIHRoaXMgdG8gbXV0YXRlXG4gKiBzdGF0ZS4gWW91IHNob3VsZCB0cmVhdCBgdGhpcy5zdGF0ZWAgYXMgaW1tdXRhYmxlLlxuICpcbiAqIFRoZXJlIGlzIG5vIGd1YXJhbnRlZSB0aGF0IGB0aGlzLnN0YXRlYCB3aWxsIGJlIGltbWVkaWF0ZWx5IHVwZGF0ZWQsIHNvXG4gKiBhY2Nlc3NpbmcgYHRoaXMuc3RhdGVgIGFmdGVyIGNhbGxpbmcgdGhpcyBtZXRob2QgbWF5IHJldHVybiB0aGUgb2xkIHZhbHVlLlxuICpcbiAqIFRoZXJlIGlzIG5vIGd1YXJhbnRlZSB0aGF0IGNhbGxzIHRvIGBzZXRTdGF0ZWAgd2lsbCBydW4gc3luY2hyb25vdXNseSxcbiAqIGFzIHRoZXkgbWF5IGV2ZW50dWFsbHkgYmUgYmF0Y2hlZCB0b2dldGhlci4gIFlvdSBjYW4gcHJvdmlkZSBhbiBvcHRpb25hbFxuICogY2FsbGJhY2sgdGhhdCB3aWxsIGJlIGV4ZWN1dGVkIHdoZW4gdGhlIGNhbGwgdG8gc2V0U3RhdGUgaXMgYWN0dWFsbHlcbiAqIGNvbXBsZXRlZC5cbiAqXG4gKiBXaGVuIGEgZnVuY3Rpb24gaXMgcHJvdmlkZWQgdG8gc2V0U3RhdGUsIGl0IHdpbGwgYmUgY2FsbGVkIGF0IHNvbWUgcG9pbnQgaW5cbiAqIHRoZSBmdXR1cmUgKG5vdCBzeW5jaHJvbm91c2x5KS4gSXQgd2lsbCBiZSBjYWxsZWQgd2l0aCB0aGUgdXAgdG8gZGF0ZVxuICogY29tcG9uZW50IGFyZ3VtZW50cyAoc3RhdGUsIHByb3BzLCBjb250ZXh0KS4gVGhlc2UgdmFsdWVzIGNhbiBiZSBkaWZmZXJlbnRcbiAqIGZyb20gdGhpcy4qIGJlY2F1c2UgeW91ciBmdW5jdGlvbiBtYXkgYmUgY2FsbGVkIGFmdGVyIHJlY2VpdmVQcm9wcyBidXQgYmVmb3JlXG4gKiBzaG91bGRDb21wb25lbnRVcGRhdGUsIGFuZCB0aGlzIG5ldyBzdGF0ZSwgcHJvcHMsIGFuZCBjb250ZXh0IHdpbGwgbm90IHlldCBiZVxuICogYXNzaWduZWQgdG8gdGhpcy5cbiAqXG4gKiBAcGFyYW0ge29iamVjdHxmdW5jdGlvbn0gcGFydGlhbFN0YXRlIE5leHQgcGFydGlhbCBzdGF0ZSBvciBmdW5jdGlvbiB0b1xuICogICAgICAgIHByb2R1Y2UgbmV4dCBwYXJ0aWFsIHN0YXRlIHRvIGJlIG1lcmdlZCB3aXRoIGN1cnJlbnQgc3RhdGUuXG4gKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIHN0YXRlIGlzIHVwZGF0ZWQuXG4gKiBAZmluYWxcbiAqIEBwcm90ZWN0ZWRcbiAqL1xuUmVhY3RDb21wb25lbnQucHJvdG90eXBlLnNldFN0YXRlID0gZnVuY3Rpb24gKHBhcnRpYWxTdGF0ZSwgY2FsbGJhY2spIHtcbiAgISh0eXBlb2YgcGFydGlhbFN0YXRlID09PSAnb2JqZWN0JyB8fCB0eXBlb2YgcGFydGlhbFN0YXRlID09PSAnZnVuY3Rpb24nIHx8IHBhcnRpYWxTdGF0ZSA9PSBudWxsKSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBpbnZhcmlhbnQoZmFsc2UsICdzZXRTdGF0ZSguLi4pOiB0YWtlcyBhbiBvYmplY3Qgb2Ygc3RhdGUgdmFyaWFibGVzIHRvIHVwZGF0ZSBvciBhICcgKyAnZnVuY3Rpb24gd2hpY2ggcmV0dXJucyBhbiBvYmplY3Qgb2Ygc3RhdGUgdmFyaWFibGVzLicpIDogaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBSZWFjdEluc3RydW1lbnRhdGlvbi5kZWJ1Z1Rvb2wub25TZXRTdGF0ZSgpO1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyB3YXJuaW5nKHBhcnRpYWxTdGF0ZSAhPSBudWxsLCAnc2V0U3RhdGUoLi4uKTogWW91IHBhc3NlZCBhbiB1bmRlZmluZWQgb3IgbnVsbCBzdGF0ZSBvYmplY3Q7ICcgKyAnaW5zdGVhZCwgdXNlIGZvcmNlVXBkYXRlKCkuJykgOiB2b2lkIDA7XG4gIH1cbiAgdGhpcy51cGRhdGVyLmVucXVldWVTZXRTdGF0ZSh0aGlzLCBwYXJ0aWFsU3RhdGUpO1xuICBpZiAoY2FsbGJhY2spIHtcbiAgICB0aGlzLnVwZGF0ZXIuZW5xdWV1ZUNhbGxiYWNrKHRoaXMsIGNhbGxiYWNrLCAnc2V0U3RhdGUnKTtcbiAgfVxufTtcblxuLyoqXG4gKiBGb3JjZXMgYW4gdXBkYXRlLiBUaGlzIHNob3VsZCBvbmx5IGJlIGludm9rZWQgd2hlbiBpdCBpcyBrbm93biB3aXRoXG4gKiBjZXJ0YWludHkgdGhhdCB3ZSBhcmUgKipub3QqKiBpbiBhIERPTSB0cmFuc2FjdGlvbi5cbiAqXG4gKiBZb3UgbWF5IHdhbnQgdG8gY2FsbCB0aGlzIHdoZW4geW91IGtub3cgdGhhdCBzb21lIGRlZXBlciBhc3BlY3Qgb2YgdGhlXG4gKiBjb21wb25lbnQncyBzdGF0ZSBoYXMgY2hhbmdlZCBidXQgYHNldFN0YXRlYCB3YXMgbm90IGNhbGxlZC5cbiAqXG4gKiBUaGlzIHdpbGwgbm90IGludm9rZSBgc2hvdWxkQ29tcG9uZW50VXBkYXRlYCwgYnV0IGl0IHdpbGwgaW52b2tlXG4gKiBgY29tcG9uZW50V2lsbFVwZGF0ZWAgYW5kIGBjb21wb25lbnREaWRVcGRhdGVgLlxuICpcbiAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsZWQgYWZ0ZXIgdXBkYXRlIGlzIGNvbXBsZXRlLlxuICogQGZpbmFsXG4gKiBAcHJvdGVjdGVkXG4gKi9cblJlYWN0Q29tcG9uZW50LnByb3RvdHlwZS5mb3JjZVVwZGF0ZSA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICB0aGlzLnVwZGF0ZXIuZW5xdWV1ZUZvcmNlVXBkYXRlKHRoaXMpO1xuICBpZiAoY2FsbGJhY2spIHtcbiAgICB0aGlzLnVwZGF0ZXIuZW5xdWV1ZUNhbGxiYWNrKHRoaXMsIGNhbGxiYWNrLCAnZm9yY2VVcGRhdGUnKTtcbiAgfVxufTtcblxuLyoqXG4gKiBEZXByZWNhdGVkIEFQSXMuIFRoZXNlIEFQSXMgdXNlZCB0byBleGlzdCBvbiBjbGFzc2ljIFJlYWN0IGNsYXNzZXMgYnV0IHNpbmNlXG4gKiB3ZSB3b3VsZCBsaWtlIHRvIGRlcHJlY2F0ZSB0aGVtLCB3ZSdyZSBub3QgZ29pbmcgdG8gbW92ZSB0aGVtIG92ZXIgdG8gdGhpc1xuICogbW9kZXJuIGJhc2UgY2xhc3MuIEluc3RlYWQsIHdlIGRlZmluZSBhIGdldHRlciB0aGF0IHdhcm5zIGlmIGl0J3MgYWNjZXNzZWQuXG4gKi9cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBkZXByZWNhdGVkQVBJcyA9IHtcbiAgICBpc01vdW50ZWQ6IFsnaXNNb3VudGVkJywgJ0luc3RlYWQsIG1ha2Ugc3VyZSB0byBjbGVhbiB1cCBzdWJzY3JpcHRpb25zIGFuZCBwZW5kaW5nIHJlcXVlc3RzIGluICcgKyAnY29tcG9uZW50V2lsbFVubW91bnQgdG8gcHJldmVudCBtZW1vcnkgbGVha3MuJ10sXG4gICAgcmVwbGFjZVN0YXRlOiBbJ3JlcGxhY2VTdGF0ZScsICdSZWZhY3RvciB5b3VyIGNvZGUgdG8gdXNlIHNldFN0YXRlIGluc3RlYWQgKHNlZSAnICsgJ2h0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMzIzNikuJ11cbiAgfTtcbiAgdmFyIGRlZmluZURlcHJlY2F0aW9uV2FybmluZyA9IGZ1bmN0aW9uIChtZXRob2ROYW1lLCBpbmZvKSB7XG4gICAgaWYgKGNhbkRlZmluZVByb3BlcnR5KSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUmVhY3RDb21wb25lbnQucHJvdG90eXBlLCBtZXRob2ROYW1lLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyB3YXJuaW5nKGZhbHNlLCAnJXMoLi4uKSBpcyBkZXByZWNhdGVkIGluIHBsYWluIEphdmFTY3JpcHQgUmVhY3QgY2xhc3Nlcy4gJXMnLCBpbmZvWzBdLCBpbmZvWzFdKSA6IHZvaWQgMDtcbiAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG4gIGZvciAodmFyIGZuTmFtZSBpbiBkZXByZWNhdGVkQVBJcykge1xuICAgIGlmIChkZXByZWNhdGVkQVBJcy5oYXNPd25Qcm9wZXJ0eShmbk5hbWUpKSB7XG4gICAgICBkZWZpbmVEZXByZWNhdGlvbldhcm5pbmcoZm5OYW1lLCBkZXByZWNhdGVkQVBJc1tmbk5hbWVdKTtcbiAgICB9XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdENvbXBvbmVudDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC9saWIvUmVhY3RDb21wb25lbnQuanNcbiAqKiBtb2R1bGUgaWQgPSAxN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxNS1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHByb3ZpZGVzTW9kdWxlIFJlYWN0Tm9vcFVwZGF0ZVF1ZXVlXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgd2FybmluZyA9IHJlcXVpcmUoJ2ZianMvbGliL3dhcm5pbmcnKTtcblxuZnVuY3Rpb24gd2FyblREWihwdWJsaWNJbnN0YW5jZSwgY2FsbGVyTmFtZSkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyB3YXJuaW5nKGZhbHNlLCAnJXMoLi4uKTogQ2FuIG9ubHkgdXBkYXRlIGEgbW91bnRlZCBvciBtb3VudGluZyBjb21wb25lbnQuICcgKyAnVGhpcyB1c3VhbGx5IG1lYW5zIHlvdSBjYWxsZWQgJXMoKSBvbiBhbiB1bm1vdW50ZWQgY29tcG9uZW50LiAnICsgJ1RoaXMgaXMgYSBuby1vcC4gUGxlYXNlIGNoZWNrIHRoZSBjb2RlIGZvciB0aGUgJXMgY29tcG9uZW50LicsIGNhbGxlck5hbWUsIGNhbGxlck5hbWUsIHB1YmxpY0luc3RhbmNlLmNvbnN0cnVjdG9yICYmIHB1YmxpY0luc3RhbmNlLmNvbnN0cnVjdG9yLmRpc3BsYXlOYW1lIHx8ICcnKSA6IHZvaWQgMDtcbiAgfVxufVxuXG4vKipcbiAqIFRoaXMgaXMgdGhlIGFic3RyYWN0IEFQSSBmb3IgYW4gdXBkYXRlIHF1ZXVlLlxuICovXG52YXIgUmVhY3ROb29wVXBkYXRlUXVldWUgPSB7XG5cbiAgLyoqXG4gICAqIENoZWNrcyB3aGV0aGVyIG9yIG5vdCB0aGlzIGNvbXBvc2l0ZSBjb21wb25lbnQgaXMgbW91bnRlZC5cbiAgICogQHBhcmFtIHtSZWFjdENsYXNzfSBwdWJsaWNJbnN0YW5jZSBUaGUgaW5zdGFuY2Ugd2Ugd2FudCB0byB0ZXN0LlxuICAgKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIG1vdW50ZWQsIGZhbHNlIG90aGVyd2lzZS5cbiAgICogQHByb3RlY3RlZFxuICAgKiBAZmluYWxcbiAgICovXG4gIGlzTW91bnRlZDogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9LFxuXG4gIC8qKlxuICAgKiBFbnF1ZXVlIGEgY2FsbGJhY2sgdGhhdCB3aWxsIGJlIGV4ZWN1dGVkIGFmdGVyIGFsbCB0aGUgcGVuZGluZyB1cGRhdGVzXG4gICAqIGhhdmUgcHJvY2Vzc2VkLlxuICAgKlxuICAgKiBAcGFyYW0ge1JlYWN0Q2xhc3N9IHB1YmxpY0luc3RhbmNlIFRoZSBpbnN0YW5jZSB0byB1c2UgYXMgYHRoaXNgIGNvbnRleHQuXG4gICAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsZWQgYWZ0ZXIgc3RhdGUgaXMgdXBkYXRlZC5cbiAgICogQGludGVybmFsXG4gICAqL1xuICBlbnF1ZXVlQ2FsbGJhY2s6IGZ1bmN0aW9uIChwdWJsaWNJbnN0YW5jZSwgY2FsbGJhY2spIHt9LFxuXG4gIC8qKlxuICAgKiBGb3JjZXMgYW4gdXBkYXRlLiBUaGlzIHNob3VsZCBvbmx5IGJlIGludm9rZWQgd2hlbiBpdCBpcyBrbm93biB3aXRoXG4gICAqIGNlcnRhaW50eSB0aGF0IHdlIGFyZSAqKm5vdCoqIGluIGEgRE9NIHRyYW5zYWN0aW9uLlxuICAgKlxuICAgKiBZb3UgbWF5IHdhbnQgdG8gY2FsbCB0aGlzIHdoZW4geW91IGtub3cgdGhhdCBzb21lIGRlZXBlciBhc3BlY3Qgb2YgdGhlXG4gICAqIGNvbXBvbmVudCdzIHN0YXRlIGhhcyBjaGFuZ2VkIGJ1dCBgc2V0U3RhdGVgIHdhcyBub3QgY2FsbGVkLlxuICAgKlxuICAgKiBUaGlzIHdpbGwgbm90IGludm9rZSBgc2hvdWxkQ29tcG9uZW50VXBkYXRlYCwgYnV0IGl0IHdpbGwgaW52b2tlXG4gICAqIGBjb21wb25lbnRXaWxsVXBkYXRlYCBhbmQgYGNvbXBvbmVudERpZFVwZGF0ZWAuXG4gICAqXG4gICAqIEBwYXJhbSB7UmVhY3RDbGFzc30gcHVibGljSW5zdGFuY2UgVGhlIGluc3RhbmNlIHRoYXQgc2hvdWxkIHJlcmVuZGVyLlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGVucXVldWVGb3JjZVVwZGF0ZTogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlKSB7XG4gICAgd2FyblREWihwdWJsaWNJbnN0YW5jZSwgJ2ZvcmNlVXBkYXRlJyk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJlcGxhY2VzIGFsbCBvZiB0aGUgc3RhdGUuIEFsd2F5cyB1c2UgdGhpcyBvciBgc2V0U3RhdGVgIHRvIG11dGF0ZSBzdGF0ZS5cbiAgICogWW91IHNob3VsZCB0cmVhdCBgdGhpcy5zdGF0ZWAgYXMgaW1tdXRhYmxlLlxuICAgKlxuICAgKiBUaGVyZSBpcyBubyBndWFyYW50ZWUgdGhhdCBgdGhpcy5zdGF0ZWAgd2lsbCBiZSBpbW1lZGlhdGVseSB1cGRhdGVkLCBzb1xuICAgKiBhY2Nlc3NpbmcgYHRoaXMuc3RhdGVgIGFmdGVyIGNhbGxpbmcgdGhpcyBtZXRob2QgbWF5IHJldHVybiB0aGUgb2xkIHZhbHVlLlxuICAgKlxuICAgKiBAcGFyYW0ge1JlYWN0Q2xhc3N9IHB1YmxpY0luc3RhbmNlIFRoZSBpbnN0YW5jZSB0aGF0IHNob3VsZCByZXJlbmRlci5cbiAgICogQHBhcmFtIHtvYmplY3R9IGNvbXBsZXRlU3RhdGUgTmV4dCBzdGF0ZS5cbiAgICogQGludGVybmFsXG4gICAqL1xuICBlbnF1ZXVlUmVwbGFjZVN0YXRlOiBmdW5jdGlvbiAocHVibGljSW5zdGFuY2UsIGNvbXBsZXRlU3RhdGUpIHtcbiAgICB3YXJuVERaKHB1YmxpY0luc3RhbmNlLCAncmVwbGFjZVN0YXRlJyk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNldHMgYSBzdWJzZXQgb2YgdGhlIHN0YXRlLiBUaGlzIG9ubHkgZXhpc3RzIGJlY2F1c2UgX3BlbmRpbmdTdGF0ZSBpc1xuICAgKiBpbnRlcm5hbC4gVGhpcyBwcm92aWRlcyBhIG1lcmdpbmcgc3RyYXRlZ3kgdGhhdCBpcyBub3QgYXZhaWxhYmxlIHRvIGRlZXBcbiAgICogcHJvcGVydGllcyB3aGljaCBpcyBjb25mdXNpbmcuIFRPRE86IEV4cG9zZSBwZW5kaW5nU3RhdGUgb3IgZG9uJ3QgdXNlIGl0XG4gICAqIGR1cmluZyB0aGUgbWVyZ2UuXG4gICAqXG4gICAqIEBwYXJhbSB7UmVhY3RDbGFzc30gcHVibGljSW5zdGFuY2UgVGhlIGluc3RhbmNlIHRoYXQgc2hvdWxkIHJlcmVuZGVyLlxuICAgKiBAcGFyYW0ge29iamVjdH0gcGFydGlhbFN0YXRlIE5leHQgcGFydGlhbCBzdGF0ZSB0byBiZSBtZXJnZWQgd2l0aCBzdGF0ZS5cbiAgICogQGludGVybmFsXG4gICAqL1xuICBlbnF1ZXVlU2V0U3RhdGU6IGZ1bmN0aW9uIChwdWJsaWNJbnN0YW5jZSwgcGFydGlhbFN0YXRlKSB7XG4gICAgd2FyblREWihwdWJsaWNJbnN0YW5jZSwgJ3NldFN0YXRlJyk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3ROb29wVXBkYXRlUXVldWU7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QvbGliL1JlYWN0Tm9vcFVwZGF0ZVF1ZXVlLmpzXG4gKiogbW9kdWxlIGlkID0gMThcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTYtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBSZWFjdEluc3RydW1lbnRhdGlvblxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0RGVidWdUb29sID0gcmVxdWlyZSgnLi9SZWFjdERlYnVnVG9vbCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHsgZGVidWdUb29sOiBSZWFjdERlYnVnVG9vbCB9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0L2xpYi9SZWFjdEluc3RydW1lbnRhdGlvbi5qc1xuICoqIG1vZHVsZSBpZCA9IDE5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENvcHlyaWdodCAyMDE2LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAcHJvdmlkZXNNb2R1bGUgUmVhY3REZWJ1Z1Rvb2xcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBFeGVjdXRpb25FbnZpcm9ubWVudCA9IHJlcXVpcmUoJ2ZianMvbGliL0V4ZWN1dGlvbkVudmlyb25tZW50Jyk7XG5cbnZhciBwZXJmb3JtYW5jZU5vdyA9IHJlcXVpcmUoJ2ZianMvbGliL3BlcmZvcm1hbmNlTm93Jyk7XG52YXIgd2FybmluZyA9IHJlcXVpcmUoJ2ZianMvbGliL3dhcm5pbmcnKTtcblxudmFyIGV2ZW50SGFuZGxlcnMgPSBbXTtcbnZhciBoYW5kbGVyRG9lc1Rocm93Rm9yRXZlbnQgPSB7fTtcblxuZnVuY3Rpb24gZW1pdEV2ZW50KGhhbmRsZXJGdW5jdGlvbk5hbWUsIGFyZzEsIGFyZzIsIGFyZzMsIGFyZzQsIGFyZzUpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBldmVudEhhbmRsZXJzLmZvckVhY2goZnVuY3Rpb24gKGhhbmRsZXIpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmIChoYW5kbGVyW2hhbmRsZXJGdW5jdGlvbk5hbWVdKSB7XG4gICAgICAgICAgaGFuZGxlcltoYW5kbGVyRnVuY3Rpb25OYW1lXShhcmcxLCBhcmcyLCBhcmczLCBhcmc0LCBhcmc1KTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gd2FybmluZyghaGFuZGxlckRvZXNUaHJvd0ZvckV2ZW50W2hhbmRsZXJGdW5jdGlvbk5hbWVdLCAnZXhjZXB0aW9uIHRocm93biBieSBkZXZ0b29sIHdoaWxlIGhhbmRsaW5nICVzOiAlcycsIGhhbmRsZXJGdW5jdGlvbk5hbWUsIGUubWVzc2FnZSkgOiB2b2lkIDA7XG4gICAgICAgIGhhbmRsZXJEb2VzVGhyb3dGb3JFdmVudFtoYW5kbGVyRnVuY3Rpb25OYW1lXSA9IHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxudmFyIGlzUHJvZmlsaW5nID0gZmFsc2U7XG52YXIgZmx1c2hIaXN0b3J5ID0gW107XG52YXIgY3VycmVudEZsdXNoTmVzdGluZyA9IDA7XG52YXIgY3VycmVudEZsdXNoTWVhc3VyZW1lbnRzID0gbnVsbDtcbnZhciBjdXJyZW50Rmx1c2hTdGFydFRpbWUgPSBudWxsO1xudmFyIGN1cnJlbnRUaW1lckRlYnVnSUQgPSBudWxsO1xudmFyIGN1cnJlbnRUaW1lclN0YXJ0VGltZSA9IG51bGw7XG52YXIgY3VycmVudFRpbWVyVHlwZSA9IG51bGw7XG5cbmZ1bmN0aW9uIGNsZWFySGlzdG9yeSgpIHtcbiAgUmVhY3RDb21wb25lbnRUcmVlRGV2dG9vbC5wdXJnZVVubW91bnRlZENvbXBvbmVudHMoKTtcbiAgUmVhY3ROYXRpdmVPcGVyYXRpb25IaXN0b3J5RGV2dG9vbC5jbGVhckhpc3RvcnkoKTtcbn1cblxuZnVuY3Rpb24gZ2V0VHJlZVNuYXBzaG90KHJlZ2lzdGVyZWRJRHMpIHtcbiAgcmV0dXJuIHJlZ2lzdGVyZWRJRHMucmVkdWNlKGZ1bmN0aW9uICh0cmVlLCBpZCkge1xuICAgIHZhciBvd25lcklEID0gUmVhY3RDb21wb25lbnRUcmVlRGV2dG9vbC5nZXRPd25lcklEKGlkKTtcbiAgICB2YXIgcGFyZW50SUQgPSBSZWFjdENvbXBvbmVudFRyZWVEZXZ0b29sLmdldFBhcmVudElEKGlkKTtcbiAgICB0cmVlW2lkXSA9IHtcbiAgICAgIGRpc3BsYXlOYW1lOiBSZWFjdENvbXBvbmVudFRyZWVEZXZ0b29sLmdldERpc3BsYXlOYW1lKGlkKSxcbiAgICAgIHRleHQ6IFJlYWN0Q29tcG9uZW50VHJlZURldnRvb2wuZ2V0VGV4dChpZCksXG4gICAgICB1cGRhdGVDb3VudDogUmVhY3RDb21wb25lbnRUcmVlRGV2dG9vbC5nZXRVcGRhdGVDb3VudChpZCksXG4gICAgICBjaGlsZElEczogUmVhY3RDb21wb25lbnRUcmVlRGV2dG9vbC5nZXRDaGlsZElEcyhpZCksXG4gICAgICAvLyBUZXh0IG5vZGVzIGRvbid0IGhhdmUgb3duZXJzIGJ1dCB0aGlzIGlzIGNsb3NlIGVub3VnaC5cbiAgICAgIG93bmVySUQ6IG93bmVySUQgfHwgUmVhY3RDb21wb25lbnRUcmVlRGV2dG9vbC5nZXRPd25lcklEKHBhcmVudElEKSxcbiAgICAgIHBhcmVudElEOiBwYXJlbnRJRFxuICAgIH07XG4gICAgcmV0dXJuIHRyZWU7XG4gIH0sIHt9KTtcbn1cblxuZnVuY3Rpb24gcmVzZXRNZWFzdXJlbWVudHMoKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgdmFyIHByZXZpb3VzU3RhcnRUaW1lID0gY3VycmVudEZsdXNoU3RhcnRUaW1lO1xuICAgIHZhciBwcmV2aW91c01lYXN1cmVtZW50cyA9IGN1cnJlbnRGbHVzaE1lYXN1cmVtZW50cyB8fCBbXTtcbiAgICB2YXIgcHJldmlvdXNPcGVyYXRpb25zID0gUmVhY3ROYXRpdmVPcGVyYXRpb25IaXN0b3J5RGV2dG9vbC5nZXRIaXN0b3J5KCk7XG5cbiAgICBpZiAoIWlzUHJvZmlsaW5nIHx8IGN1cnJlbnRGbHVzaE5lc3RpbmcgPT09IDApIHtcbiAgICAgIGN1cnJlbnRGbHVzaFN0YXJ0VGltZSA9IG51bGw7XG4gICAgICBjdXJyZW50Rmx1c2hNZWFzdXJlbWVudHMgPSBudWxsO1xuICAgICAgY2xlYXJIaXN0b3J5KCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHByZXZpb3VzTWVhc3VyZW1lbnRzLmxlbmd0aCB8fCBwcmV2aW91c09wZXJhdGlvbnMubGVuZ3RoKSB7XG4gICAgICB2YXIgcmVnaXN0ZXJlZElEcyA9IFJlYWN0Q29tcG9uZW50VHJlZURldnRvb2wuZ2V0UmVnaXN0ZXJlZElEcygpO1xuICAgICAgZmx1c2hIaXN0b3J5LnB1c2goe1xuICAgICAgICBkdXJhdGlvbjogcGVyZm9ybWFuY2VOb3coKSAtIHByZXZpb3VzU3RhcnRUaW1lLFxuICAgICAgICBtZWFzdXJlbWVudHM6IHByZXZpb3VzTWVhc3VyZW1lbnRzIHx8IFtdLFxuICAgICAgICBvcGVyYXRpb25zOiBwcmV2aW91c09wZXJhdGlvbnMgfHwgW10sXG4gICAgICAgIHRyZWVTbmFwc2hvdDogZ2V0VHJlZVNuYXBzaG90KHJlZ2lzdGVyZWRJRHMpXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBjbGVhckhpc3RvcnkoKTtcbiAgICBjdXJyZW50Rmx1c2hTdGFydFRpbWUgPSBwZXJmb3JtYW5jZU5vdygpO1xuICAgIGN1cnJlbnRGbHVzaE1lYXN1cmVtZW50cyA9IFtdO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNoZWNrRGVidWdJRChkZWJ1Z0lEKSB7XG4gIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyB3YXJuaW5nKGRlYnVnSUQsICdSZWFjdERlYnVnVG9vbDogZGVidWdJRCBtYXkgbm90IGJlIGVtcHR5LicpIDogdm9pZCAwO1xufVxuXG52YXIgUmVhY3REZWJ1Z1Rvb2wgPSB7XG4gIGFkZERldnRvb2w6IGZ1bmN0aW9uIChkZXZ0b29sKSB7XG4gICAgZXZlbnRIYW5kbGVycy5wdXNoKGRldnRvb2wpO1xuICB9LFxuICByZW1vdmVEZXZ0b29sOiBmdW5jdGlvbiAoZGV2dG9vbCkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXZlbnRIYW5kbGVycy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGV2ZW50SGFuZGxlcnNbaV0gPT09IGRldnRvb2wpIHtcbiAgICAgICAgZXZlbnRIYW5kbGVycy5zcGxpY2UoaSwgMSk7XG4gICAgICAgIGktLTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGJlZ2luUHJvZmlsaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmIChpc1Byb2ZpbGluZykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlzUHJvZmlsaW5nID0gdHJ1ZTtcbiAgICAgIGZsdXNoSGlzdG9yeS5sZW5ndGggPSAwO1xuICAgICAgcmVzZXRNZWFzdXJlbWVudHMoKTtcbiAgICB9XG4gIH0sXG4gIGVuZFByb2ZpbGluZzogZnVuY3Rpb24gKCkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAoIWlzUHJvZmlsaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaXNQcm9maWxpbmcgPSBmYWxzZTtcbiAgICAgIHJlc2V0TWVhc3VyZW1lbnRzKCk7XG4gICAgfVxuICB9LFxuICBnZXRGbHVzaEhpc3Rvcnk6IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgcmV0dXJuIGZsdXNoSGlzdG9yeTtcbiAgICB9XG4gIH0sXG4gIG9uQmVnaW5GbHVzaDogZnVuY3Rpb24gKCkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBjdXJyZW50Rmx1c2hOZXN0aW5nKys7XG4gICAgICByZXNldE1lYXN1cmVtZW50cygpO1xuICAgIH1cbiAgICBlbWl0RXZlbnQoJ29uQmVnaW5GbHVzaCcpO1xuICB9LFxuICBvbkVuZEZsdXNoOiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHJlc2V0TWVhc3VyZW1lbnRzKCk7XG4gICAgICBjdXJyZW50Rmx1c2hOZXN0aW5nLS07XG4gICAgfVxuICAgIGVtaXRFdmVudCgnb25FbmRGbHVzaCcpO1xuICB9LFxuICBvbkJlZ2luTGlmZUN5Y2xlVGltZXI6IGZ1bmN0aW9uIChkZWJ1Z0lELCB0aW1lclR5cGUpIHtcbiAgICBjaGVja0RlYnVnSUQoZGVidWdJRCk7XG4gICAgZW1pdEV2ZW50KCdvbkJlZ2luTGlmZUN5Y2xlVGltZXInLCBkZWJ1Z0lELCB0aW1lclR5cGUpO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAoaXNQcm9maWxpbmcgJiYgY3VycmVudEZsdXNoTmVzdGluZyA+IDApIHtcbiAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IHdhcm5pbmcoIWN1cnJlbnRUaW1lclR5cGUsICdUaGVyZSBpcyBhbiBpbnRlcm5hbCBlcnJvciBpbiB0aGUgUmVhY3QgcGVyZm9ybWFuY2UgbWVhc3VyZW1lbnQgY29kZS4gJyArICdEaWQgbm90IGV4cGVjdCAlcyB0aW1lciB0byBzdGFydCB3aGlsZSAlcyB0aW1lciBpcyBzdGlsbCBpbiAnICsgJ3Byb2dyZXNzIGZvciAlcyBpbnN0YW5jZS4nLCB0aW1lclR5cGUsIGN1cnJlbnRUaW1lclR5cGUgfHwgJ25vJywgZGVidWdJRCA9PT0gY3VycmVudFRpbWVyRGVidWdJRCA/ICd0aGUgc2FtZScgOiAnYW5vdGhlcicpIDogdm9pZCAwO1xuICAgICAgICBjdXJyZW50VGltZXJTdGFydFRpbWUgPSBwZXJmb3JtYW5jZU5vdygpO1xuICAgICAgICBjdXJyZW50VGltZXJEZWJ1Z0lEID0gZGVidWdJRDtcbiAgICAgICAgY3VycmVudFRpbWVyVHlwZSA9IHRpbWVyVHlwZTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIG9uRW5kTGlmZUN5Y2xlVGltZXI6IGZ1bmN0aW9uIChkZWJ1Z0lELCB0aW1lclR5cGUpIHtcbiAgICBjaGVja0RlYnVnSUQoZGVidWdJRCk7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmIChpc1Byb2ZpbGluZyAmJiBjdXJyZW50Rmx1c2hOZXN0aW5nID4gMCkge1xuICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gd2FybmluZyhjdXJyZW50VGltZXJUeXBlID09PSB0aW1lclR5cGUsICdUaGVyZSBpcyBhbiBpbnRlcm5hbCBlcnJvciBpbiB0aGUgUmVhY3QgcGVyZm9ybWFuY2UgbWVhc3VyZW1lbnQgY29kZS4gJyArICdXZSBkaWQgbm90IGV4cGVjdCAlcyB0aW1lciB0byBzdG9wIHdoaWxlICVzIHRpbWVyIGlzIHN0aWxsIGluICcgKyAncHJvZ3Jlc3MgZm9yICVzIGluc3RhbmNlLiBQbGVhc2UgcmVwb3J0IHRoaXMgYXMgYSBidWcgaW4gUmVhY3QuJywgdGltZXJUeXBlLCBjdXJyZW50VGltZXJUeXBlIHx8ICdubycsIGRlYnVnSUQgPT09IGN1cnJlbnRUaW1lckRlYnVnSUQgPyAndGhlIHNhbWUnIDogJ2Fub3RoZXInKSA6IHZvaWQgMDtcbiAgICAgICAgY3VycmVudEZsdXNoTWVhc3VyZW1lbnRzLnB1c2goe1xuICAgICAgICAgIHRpbWVyVHlwZTogdGltZXJUeXBlLFxuICAgICAgICAgIGluc3RhbmNlSUQ6IGRlYnVnSUQsXG4gICAgICAgICAgZHVyYXRpb246IHBlcmZvcm1hbmNlTm93KCkgLSBjdXJyZW50VGltZXJTdGFydFRpbWVcbiAgICAgICAgfSk7XG4gICAgICAgIGN1cnJlbnRUaW1lclN0YXJ0VGltZSA9IG51bGw7XG4gICAgICAgIGN1cnJlbnRUaW1lckRlYnVnSUQgPSBudWxsO1xuICAgICAgICBjdXJyZW50VGltZXJUeXBlID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgZW1pdEV2ZW50KCdvbkVuZExpZmVDeWNsZVRpbWVyJywgZGVidWdJRCwgdGltZXJUeXBlKTtcbiAgfSxcbiAgb25CZWdpblJlY29uY2lsZXJUaW1lcjogZnVuY3Rpb24gKGRlYnVnSUQsIHRpbWVyVHlwZSkge1xuICAgIGNoZWNrRGVidWdJRChkZWJ1Z0lEKTtcbiAgICBlbWl0RXZlbnQoJ29uQmVnaW5SZWNvbmNpbGVyVGltZXInLCBkZWJ1Z0lELCB0aW1lclR5cGUpO1xuICB9LFxuICBvbkVuZFJlY29uY2lsZXJUaW1lcjogZnVuY3Rpb24gKGRlYnVnSUQsIHRpbWVyVHlwZSkge1xuICAgIGNoZWNrRGVidWdJRChkZWJ1Z0lEKTtcbiAgICBlbWl0RXZlbnQoJ29uRW5kUmVjb25jaWxlclRpbWVyJywgZGVidWdJRCwgdGltZXJUeXBlKTtcbiAgfSxcbiAgb25CZWdpblByb2Nlc3NpbmdDaGlsZENvbnRleHQ6IGZ1bmN0aW9uICgpIHtcbiAgICBlbWl0RXZlbnQoJ29uQmVnaW5Qcm9jZXNzaW5nQ2hpbGRDb250ZXh0Jyk7XG4gIH0sXG4gIG9uRW5kUHJvY2Vzc2luZ0NoaWxkQ29udGV4dDogZnVuY3Rpb24gKCkge1xuICAgIGVtaXRFdmVudCgnb25FbmRQcm9jZXNzaW5nQ2hpbGRDb250ZXh0Jyk7XG4gIH0sXG4gIG9uTmF0aXZlT3BlcmF0aW9uOiBmdW5jdGlvbiAoZGVidWdJRCwgdHlwZSwgcGF5bG9hZCkge1xuICAgIGNoZWNrRGVidWdJRChkZWJ1Z0lEKTtcbiAgICBlbWl0RXZlbnQoJ29uTmF0aXZlT3BlcmF0aW9uJywgZGVidWdJRCwgdHlwZSwgcGF5bG9hZCk7XG4gIH0sXG4gIG9uU2V0U3RhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICBlbWl0RXZlbnQoJ29uU2V0U3RhdGUnKTtcbiAgfSxcbiAgb25TZXREaXNwbGF5TmFtZTogZnVuY3Rpb24gKGRlYnVnSUQsIGRpc3BsYXlOYW1lKSB7XG4gICAgY2hlY2tEZWJ1Z0lEKGRlYnVnSUQpO1xuICAgIGVtaXRFdmVudCgnb25TZXREaXNwbGF5TmFtZScsIGRlYnVnSUQsIGRpc3BsYXlOYW1lKTtcbiAgfSxcbiAgb25TZXRDaGlsZHJlbjogZnVuY3Rpb24gKGRlYnVnSUQsIGNoaWxkRGVidWdJRHMpIHtcbiAgICBjaGVja0RlYnVnSUQoZGVidWdJRCk7XG4gICAgZW1pdEV2ZW50KCdvblNldENoaWxkcmVuJywgZGVidWdJRCwgY2hpbGREZWJ1Z0lEcyk7XG4gIH0sXG4gIG9uU2V0T3duZXI6IGZ1bmN0aW9uIChkZWJ1Z0lELCBvd25lckRlYnVnSUQpIHtcbiAgICBjaGVja0RlYnVnSUQoZGVidWdJRCk7XG4gICAgZW1pdEV2ZW50KCdvblNldE93bmVyJywgZGVidWdJRCwgb3duZXJEZWJ1Z0lEKTtcbiAgfSxcbiAgb25TZXRUZXh0OiBmdW5jdGlvbiAoZGVidWdJRCwgdGV4dCkge1xuICAgIGNoZWNrRGVidWdJRChkZWJ1Z0lEKTtcbiAgICBlbWl0RXZlbnQoJ29uU2V0VGV4dCcsIGRlYnVnSUQsIHRleHQpO1xuICB9LFxuICBvbk1vdW50Um9vdENvbXBvbmVudDogZnVuY3Rpb24gKGRlYnVnSUQpIHtcbiAgICBjaGVja0RlYnVnSUQoZGVidWdJRCk7XG4gICAgZW1pdEV2ZW50KCdvbk1vdW50Um9vdENvbXBvbmVudCcsIGRlYnVnSUQpO1xuICB9LFxuICBvbk1vdW50Q29tcG9uZW50OiBmdW5jdGlvbiAoZGVidWdJRCkge1xuICAgIGNoZWNrRGVidWdJRChkZWJ1Z0lEKTtcbiAgICBlbWl0RXZlbnQoJ29uTW91bnRDb21wb25lbnQnLCBkZWJ1Z0lEKTtcbiAgfSxcbiAgb25VcGRhdGVDb21wb25lbnQ6IGZ1bmN0aW9uIChkZWJ1Z0lEKSB7XG4gICAgY2hlY2tEZWJ1Z0lEKGRlYnVnSUQpO1xuICAgIGVtaXRFdmVudCgnb25VcGRhdGVDb21wb25lbnQnLCBkZWJ1Z0lEKTtcbiAgfSxcbiAgb25Vbm1vdW50Q29tcG9uZW50OiBmdW5jdGlvbiAoZGVidWdJRCkge1xuICAgIGNoZWNrRGVidWdJRChkZWJ1Z0lEKTtcbiAgICBlbWl0RXZlbnQoJ29uVW5tb3VudENvbXBvbmVudCcsIGRlYnVnSUQpO1xuICB9XG59O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgUmVhY3RJbnZhbGlkU2V0U3RhdGVXYXJuaW5nRGV2VG9vbCA9IHJlcXVpcmUoJy4vUmVhY3RJbnZhbGlkU2V0U3RhdGVXYXJuaW5nRGV2VG9vbCcpO1xuICB2YXIgUmVhY3ROYXRpdmVPcGVyYXRpb25IaXN0b3J5RGV2dG9vbCA9IHJlcXVpcmUoJy4vUmVhY3ROYXRpdmVPcGVyYXRpb25IaXN0b3J5RGV2dG9vbCcpO1xuICB2YXIgUmVhY3RDb21wb25lbnRUcmVlRGV2dG9vbCA9IHJlcXVpcmUoJy4vUmVhY3RDb21wb25lbnRUcmVlRGV2dG9vbCcpO1xuICBSZWFjdERlYnVnVG9vbC5hZGREZXZ0b29sKFJlYWN0SW52YWxpZFNldFN0YXRlV2FybmluZ0RldlRvb2wpO1xuICBSZWFjdERlYnVnVG9vbC5hZGREZXZ0b29sKFJlYWN0Q29tcG9uZW50VHJlZURldnRvb2wpO1xuICBSZWFjdERlYnVnVG9vbC5hZGREZXZ0b29sKFJlYWN0TmF0aXZlT3BlcmF0aW9uSGlzdG9yeURldnRvb2wpO1xuICB2YXIgdXJsID0gRXhlY3V0aW9uRW52aXJvbm1lbnQuY2FuVXNlRE9NICYmIHdpbmRvdy5sb2NhdGlvbi5ocmVmIHx8ICcnO1xuICBpZiAoL1s/Jl1yZWFjdF9wZXJmXFxiLy50ZXN0KHVybCkpIHtcbiAgICBSZWFjdERlYnVnVG9vbC5iZWdpblByb2ZpbGluZygpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3REZWJ1Z1Rvb2w7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QvbGliL1JlYWN0RGVidWdUb29sLmpzXG4gKiogbW9kdWxlIGlkID0gMjBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgY2FuVXNlRE9NID0gISEodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50ICYmIHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcblxuLyoqXG4gKiBTaW1wbGUsIGxpZ2h0d2VpZ2h0IG1vZHVsZSBhc3Npc3Rpbmcgd2l0aCB0aGUgZGV0ZWN0aW9uIGFuZCBjb250ZXh0IG9mXG4gKiBXb3JrZXIuIEhlbHBzIGF2b2lkIGNpcmN1bGFyIGRlcGVuZGVuY2llcyBhbmQgYWxsb3dzIGNvZGUgdG8gcmVhc29uIGFib3V0XG4gKiB3aGV0aGVyIG9yIG5vdCB0aGV5IGFyZSBpbiBhIFdvcmtlciwgZXZlbiBpZiB0aGV5IG5ldmVyIGluY2x1ZGUgdGhlIG1haW5cbiAqIGBSZWFjdFdvcmtlcmAgZGVwZW5kZW5jeS5cbiAqL1xudmFyIEV4ZWN1dGlvbkVudmlyb25tZW50ID0ge1xuXG4gIGNhblVzZURPTTogY2FuVXNlRE9NLFxuXG4gIGNhblVzZVdvcmtlcnM6IHR5cGVvZiBXb3JrZXIgIT09ICd1bmRlZmluZWQnLFxuXG4gIGNhblVzZUV2ZW50TGlzdGVuZXJzOiBjYW5Vc2VET00gJiYgISEod2luZG93LmFkZEV2ZW50TGlzdGVuZXIgfHwgd2luZG93LmF0dGFjaEV2ZW50KSxcblxuICBjYW5Vc2VWaWV3cG9ydDogY2FuVXNlRE9NICYmICEhd2luZG93LnNjcmVlbixcblxuICBpc0luV29ya2VyOiAhY2FuVXNlRE9NIC8vIEZvciBub3csIHRoaXMgaXMgdHJ1ZSAtIG1pZ2h0IGNoYW5nZSBpbiB0aGUgZnV0dXJlLlxuXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEV4ZWN1dGlvbkVudmlyb25tZW50O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2ZianMvbGliL0V4ZWN1dGlvbkVudmlyb25tZW50LmpzXG4gKiogbW9kdWxlIGlkID0gMjFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEB0eXBlY2hlY2tzXG4gKi9cblxudmFyIHBlcmZvcm1hbmNlID0gcmVxdWlyZSgnLi9wZXJmb3JtYW5jZScpO1xuXG52YXIgcGVyZm9ybWFuY2VOb3c7XG5cbi8qKlxuICogRGV0ZWN0IGlmIHdlIGNhbiB1c2UgYHdpbmRvdy5wZXJmb3JtYW5jZS5ub3coKWAgYW5kIGdyYWNlZnVsbHkgZmFsbGJhY2sgdG9cbiAqIGBEYXRlLm5vdygpYCBpZiBpdCBkb2Vzbid0IGV4aXN0LiBXZSBuZWVkIHRvIHN1cHBvcnQgRmlyZWZveCA8IDE1IGZvciBub3dcbiAqIGJlY2F1c2Ugb2YgRmFjZWJvb2sncyB0ZXN0aW5nIGluZnJhc3RydWN0dXJlLlxuICovXG5pZiAocGVyZm9ybWFuY2Uubm93KSB7XG4gIHBlcmZvcm1hbmNlTm93ID0gZnVuY3Rpb24gcGVyZm9ybWFuY2VOb3coKSB7XG4gICAgcmV0dXJuIHBlcmZvcm1hbmNlLm5vdygpO1xuICB9O1xufSBlbHNlIHtcbiAgcGVyZm9ybWFuY2VOb3cgPSBmdW5jdGlvbiBwZXJmb3JtYW5jZU5vdygpIHtcbiAgICByZXR1cm4gRGF0ZS5ub3coKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBwZXJmb3JtYW5jZU5vdztcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9mYmpzL2xpYi9wZXJmb3JtYW5jZU5vdy5qc1xuICoqIG1vZHVsZSBpZCA9IDIyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHR5cGVjaGVja3NcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBFeGVjdXRpb25FbnZpcm9ubWVudCA9IHJlcXVpcmUoJy4vRXhlY3V0aW9uRW52aXJvbm1lbnQnKTtcblxudmFyIHBlcmZvcm1hbmNlO1xuXG5pZiAoRXhlY3V0aW9uRW52aXJvbm1lbnQuY2FuVXNlRE9NKSB7XG4gIHBlcmZvcm1hbmNlID0gd2luZG93LnBlcmZvcm1hbmNlIHx8IHdpbmRvdy5tc1BlcmZvcm1hbmNlIHx8IHdpbmRvdy53ZWJraXRQZXJmb3JtYW5jZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBwZXJmb3JtYW5jZSB8fCB7fTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9mYmpzL2xpYi9wZXJmb3JtYW5jZS5qc1xuICoqIG1vZHVsZSBpZCA9IDIzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENvcHlyaWdodCAyMDE2LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAcHJvdmlkZXNNb2R1bGUgUmVhY3RJbnZhbGlkU2V0U3RhdGVXYXJuaW5nRGV2VG9vbFxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIHdhcm5pbmcgPSByZXF1aXJlKCdmYmpzL2xpYi93YXJuaW5nJyk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBwcm9jZXNzaW5nQ2hpbGRDb250ZXh0ID0gZmFsc2U7XG5cbiAgdmFyIHdhcm5JbnZhbGlkU2V0U3RhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IHdhcm5pbmcoIXByb2Nlc3NpbmdDaGlsZENvbnRleHQsICdzZXRTdGF0ZSguLi4pOiBDYW5ub3QgY2FsbCBzZXRTdGF0ZSgpIGluc2lkZSBnZXRDaGlsZENvbnRleHQoKScpIDogdm9pZCAwO1xuICB9O1xufVxuXG52YXIgUmVhY3RJbnZhbGlkU2V0U3RhdGVXYXJuaW5nRGV2VG9vbCA9IHtcbiAgb25CZWdpblByb2Nlc3NpbmdDaGlsZENvbnRleHQ6IGZ1bmN0aW9uICgpIHtcbiAgICBwcm9jZXNzaW5nQ2hpbGRDb250ZXh0ID0gdHJ1ZTtcbiAgfSxcbiAgb25FbmRQcm9jZXNzaW5nQ2hpbGRDb250ZXh0OiBmdW5jdGlvbiAoKSB7XG4gICAgcHJvY2Vzc2luZ0NoaWxkQ29udGV4dCA9IGZhbHNlO1xuICB9LFxuICBvblNldFN0YXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgd2FybkludmFsaWRTZXRTdGF0ZSgpO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0SW52YWxpZFNldFN0YXRlV2FybmluZ0RldlRvb2w7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QvbGliL1JlYWN0SW52YWxpZFNldFN0YXRlV2FybmluZ0RldlRvb2wuanNcbiAqKiBtb2R1bGUgaWQgPSAyNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxNi1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHByb3ZpZGVzTW9kdWxlIFJlYWN0TmF0aXZlT3BlcmF0aW9uSGlzdG9yeURldnRvb2xcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBoaXN0b3J5ID0gW107XG5cbnZhciBSZWFjdE5hdGl2ZU9wZXJhdGlvbkhpc3RvcnlEZXZ0b29sID0ge1xuICBvbk5hdGl2ZU9wZXJhdGlvbjogZnVuY3Rpb24gKGRlYnVnSUQsIHR5cGUsIHBheWxvYWQpIHtcbiAgICBoaXN0b3J5LnB1c2goe1xuICAgICAgaW5zdGFuY2VJRDogZGVidWdJRCxcbiAgICAgIHR5cGU6IHR5cGUsXG4gICAgICBwYXlsb2FkOiBwYXlsb2FkXG4gICAgfSk7XG4gIH0sXG4gIGNsZWFySGlzdG9yeTogZnVuY3Rpb24gKCkge1xuICAgIGlmIChSZWFjdE5hdGl2ZU9wZXJhdGlvbkhpc3RvcnlEZXZ0b29sLl9wcmV2ZW50Q2xlYXJpbmcpIHtcbiAgICAgIC8vIFNob3VsZCBvbmx5IGJlIHVzZWQgZm9yIHRlc3RzLlxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGhpc3RvcnkgPSBbXTtcbiAgfSxcbiAgZ2V0SGlzdG9yeTogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBoaXN0b3J5O1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0TmF0aXZlT3BlcmF0aW9uSGlzdG9yeURldnRvb2w7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QvbGliL1JlYWN0TmF0aXZlT3BlcmF0aW9uSGlzdG9yeURldnRvb2wuanNcbiAqKiBtb2R1bGUgaWQgPSAyNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxNi1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHByb3ZpZGVzTW9kdWxlIFJlYWN0Q29tcG9uZW50VHJlZURldnRvb2xcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBpbnZhcmlhbnQgPSByZXF1aXJlKCdmYmpzL2xpYi9pbnZhcmlhbnQnKTtcblxudmFyIHRyZWUgPSB7fTtcbnZhciByb290SURzID0gW107XG5cbmZ1bmN0aW9uIHVwZGF0ZVRyZWUoaWQsIHVwZGF0ZSkge1xuICBpZiAoIXRyZWVbaWRdKSB7XG4gICAgdHJlZVtpZF0gPSB7XG4gICAgICBwYXJlbnRJRDogbnVsbCxcbiAgICAgIG93bmVySUQ6IG51bGwsXG4gICAgICB0ZXh0OiBudWxsLFxuICAgICAgY2hpbGRJRHM6IFtdLFxuICAgICAgZGlzcGxheU5hbWU6ICdVbmtub3duJyxcbiAgICAgIGlzTW91bnRlZDogZmFsc2UsXG4gICAgICB1cGRhdGVDb3VudDogMFxuICAgIH07XG4gIH1cbiAgdXBkYXRlKHRyZWVbaWRdKTtcbn1cblxuZnVuY3Rpb24gcHVyZ2VEZWVwKGlkKSB7XG4gIHZhciBpdGVtID0gdHJlZVtpZF07XG4gIGlmIChpdGVtKSB7XG4gICAgdmFyIGNoaWxkSURzID0gaXRlbS5jaGlsZElEcztcblxuICAgIGRlbGV0ZSB0cmVlW2lkXTtcbiAgICBjaGlsZElEcy5mb3JFYWNoKHB1cmdlRGVlcCk7XG4gIH1cbn1cblxudmFyIFJlYWN0Q29tcG9uZW50VHJlZURldnRvb2wgPSB7XG4gIG9uU2V0RGlzcGxheU5hbWU6IGZ1bmN0aW9uIChpZCwgZGlzcGxheU5hbWUpIHtcbiAgICB1cGRhdGVUcmVlKGlkLCBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgcmV0dXJuIGl0ZW0uZGlzcGxheU5hbWUgPSBkaXNwbGF5TmFtZTtcbiAgICB9KTtcbiAgfSxcbiAgb25TZXRDaGlsZHJlbjogZnVuY3Rpb24gKGlkLCBuZXh0Q2hpbGRJRHMpIHtcbiAgICB1cGRhdGVUcmVlKGlkLCBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIHByZXZDaGlsZElEcyA9IGl0ZW0uY2hpbGRJRHM7XG4gICAgICBpdGVtLmNoaWxkSURzID0gbmV4dENoaWxkSURzO1xuXG4gICAgICBuZXh0Q2hpbGRJRHMuZm9yRWFjaChmdW5jdGlvbiAobmV4dENoaWxkSUQpIHtcbiAgICAgICAgdmFyIG5leHRDaGlsZCA9IHRyZWVbbmV4dENoaWxkSURdO1xuICAgICAgICAhbmV4dENoaWxkID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IGludmFyaWFudChmYWxzZSwgJ0V4cGVjdGVkIGRldnRvb2wgZXZlbnRzIHRvIGZpcmUgZm9yIHRoZSBjaGlsZCAnICsgJ2JlZm9yZSBpdHMgcGFyZW50IGluY2x1ZGVzIGl0IGluIG9uU2V0Q2hpbGRyZW4oKS4nKSA6IGludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gICAgICAgICEobmV4dENoaWxkLmRpc3BsYXlOYW1lICE9IG51bGwpID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IGludmFyaWFudChmYWxzZSwgJ0V4cGVjdGVkIG9uU2V0RGlzcGxheU5hbWUoKSB0byBmaXJlIGZvciB0aGUgY2hpbGQgJyArICdiZWZvcmUgaXRzIHBhcmVudCBpbmNsdWRlcyBpdCBpbiBvblNldENoaWxkcmVuKCkuJykgOiBpbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICAgICAgICAhKG5leHRDaGlsZC5jaGlsZElEcyAhPSBudWxsIHx8IG5leHRDaGlsZC50ZXh0ICE9IG51bGwpID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IGludmFyaWFudChmYWxzZSwgJ0V4cGVjdGVkIG9uU2V0Q2hpbGRyZW4oKSBvciBvblNldFRleHQoKSB0byBmaXJlIGZvciB0aGUgY2hpbGQgJyArICdiZWZvcmUgaXRzIHBhcmVudCBpbmNsdWRlcyBpdCBpbiBvblNldENoaWxkcmVuKCkuJykgOiBpbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICAgICAgICAhbmV4dENoaWxkLmlzTW91bnRlZCA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBpbnZhcmlhbnQoZmFsc2UsICdFeHBlY3RlZCBvbk1vdW50Q29tcG9uZW50KCkgdG8gZmlyZSBmb3IgdGhlIGNoaWxkICcgKyAnYmVmb3JlIGl0cyBwYXJlbnQgaW5jbHVkZXMgaXQgaW4gb25TZXRDaGlsZHJlbigpLicpIDogaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcblxuICAgICAgICBpZiAocHJldkNoaWxkSURzLmluZGV4T2YobmV4dENoaWxkSUQpID09PSAtMSkge1xuICAgICAgICAgIG5leHRDaGlsZC5wYXJlbnRJRCA9IGlkO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSxcbiAgb25TZXRPd25lcjogZnVuY3Rpb24gKGlkLCBvd25lcklEKSB7XG4gICAgdXBkYXRlVHJlZShpZCwgZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHJldHVybiBpdGVtLm93bmVySUQgPSBvd25lcklEO1xuICAgIH0pO1xuICB9LFxuICBvblNldFRleHQ6IGZ1bmN0aW9uIChpZCwgdGV4dCkge1xuICAgIHVwZGF0ZVRyZWUoaWQsIGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICByZXR1cm4gaXRlbS50ZXh0ID0gdGV4dDtcbiAgICB9KTtcbiAgfSxcbiAgb25Nb3VudENvbXBvbmVudDogZnVuY3Rpb24gKGlkKSB7XG4gICAgdXBkYXRlVHJlZShpZCwgZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHJldHVybiBpdGVtLmlzTW91bnRlZCA9IHRydWU7XG4gICAgfSk7XG4gIH0sXG4gIG9uTW91bnRSb290Q29tcG9uZW50OiBmdW5jdGlvbiAoaWQpIHtcbiAgICByb290SURzLnB1c2goaWQpO1xuICB9LFxuICBvblVwZGF0ZUNvbXBvbmVudDogZnVuY3Rpb24gKGlkKSB7XG4gICAgdXBkYXRlVHJlZShpZCwgZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHJldHVybiBpdGVtLnVwZGF0ZUNvdW50Kys7XG4gICAgfSk7XG4gIH0sXG4gIG9uVW5tb3VudENvbXBvbmVudDogZnVuY3Rpb24gKGlkKSB7XG4gICAgdXBkYXRlVHJlZShpZCwgZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHJldHVybiBpdGVtLmlzTW91bnRlZCA9IGZhbHNlO1xuICAgIH0pO1xuICAgIHJvb3RJRHMgPSByb290SURzLmZpbHRlcihmdW5jdGlvbiAocm9vdElEKSB7XG4gICAgICByZXR1cm4gcm9vdElEICE9PSBpZDtcbiAgICB9KTtcbiAgfSxcbiAgcHVyZ2VVbm1vdW50ZWRDb21wb25lbnRzOiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKFJlYWN0Q29tcG9uZW50VHJlZURldnRvb2wuX3ByZXZlbnRQdXJnaW5nKSB7XG4gICAgICAvLyBTaG91bGQgb25seSBiZSB1c2VkIGZvciB0ZXN0aW5nLlxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIE9iamVjdC5rZXlzKHRyZWUpLmZpbHRlcihmdW5jdGlvbiAoaWQpIHtcbiAgICAgIHJldHVybiAhdHJlZVtpZF0uaXNNb3VudGVkO1xuICAgIH0pLmZvckVhY2gocHVyZ2VEZWVwKTtcbiAgfSxcbiAgaXNNb3VudGVkOiBmdW5jdGlvbiAoaWQpIHtcbiAgICB2YXIgaXRlbSA9IHRyZWVbaWRdO1xuICAgIHJldHVybiBpdGVtID8gaXRlbS5pc01vdW50ZWQgOiBmYWxzZTtcbiAgfSxcbiAgZ2V0Q2hpbGRJRHM6IGZ1bmN0aW9uIChpZCkge1xuICAgIHZhciBpdGVtID0gdHJlZVtpZF07XG4gICAgcmV0dXJuIGl0ZW0gPyBpdGVtLmNoaWxkSURzIDogW107XG4gIH0sXG4gIGdldERpc3BsYXlOYW1lOiBmdW5jdGlvbiAoaWQpIHtcbiAgICB2YXIgaXRlbSA9IHRyZWVbaWRdO1xuICAgIHJldHVybiBpdGVtID8gaXRlbS5kaXNwbGF5TmFtZSA6ICdVbmtub3duJztcbiAgfSxcbiAgZ2V0T3duZXJJRDogZnVuY3Rpb24gKGlkKSB7XG4gICAgdmFyIGl0ZW0gPSB0cmVlW2lkXTtcbiAgICByZXR1cm4gaXRlbSA/IGl0ZW0ub3duZXJJRCA6IG51bGw7XG4gIH0sXG4gIGdldFBhcmVudElEOiBmdW5jdGlvbiAoaWQpIHtcbiAgICB2YXIgaXRlbSA9IHRyZWVbaWRdO1xuICAgIHJldHVybiBpdGVtID8gaXRlbS5wYXJlbnRJRCA6IG51bGw7XG4gIH0sXG4gIGdldFRleHQ6IGZ1bmN0aW9uIChpZCkge1xuICAgIHZhciBpdGVtID0gdHJlZVtpZF07XG4gICAgcmV0dXJuIGl0ZW0gPyBpdGVtLnRleHQgOiBudWxsO1xuICB9LFxuICBnZXRVcGRhdGVDb3VudDogZnVuY3Rpb24gKGlkKSB7XG4gICAgdmFyIGl0ZW0gPSB0cmVlW2lkXTtcbiAgICByZXR1cm4gaXRlbSA/IGl0ZW0udXBkYXRlQ291bnQgOiAwO1xuICB9LFxuICBnZXRSb290SURzOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHJvb3RJRHM7XG4gIH0sXG4gIGdldFJlZ2lzdGVyZWRJRHM6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXModHJlZSk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RDb21wb25lbnRUcmVlRGV2dG9vbDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC9saWIvUmVhY3RDb21wb25lbnRUcmVlRGV2dG9vbC5qc1xuICoqIG1vZHVsZSBpZCA9IDI2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGVtcHR5T2JqZWN0ID0ge307XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIE9iamVjdC5mcmVlemUoZW1wdHlPYmplY3QpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVtcHR5T2JqZWN0O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2ZianMvbGliL2VtcHR5T2JqZWN0LmpzXG4gKiogbW9kdWxlIGlkID0gMjdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBSZWFjdENsYXNzXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2Fzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcblxudmFyIFJlYWN0Q29tcG9uZW50ID0gcmVxdWlyZSgnLi9SZWFjdENvbXBvbmVudCcpO1xudmFyIFJlYWN0RWxlbWVudCA9IHJlcXVpcmUoJy4vUmVhY3RFbGVtZW50Jyk7XG52YXIgUmVhY3RQcm9wVHlwZUxvY2F0aW9ucyA9IHJlcXVpcmUoJy4vUmVhY3RQcm9wVHlwZUxvY2F0aW9ucycpO1xudmFyIFJlYWN0UHJvcFR5cGVMb2NhdGlvbk5hbWVzID0gcmVxdWlyZSgnLi9SZWFjdFByb3BUeXBlTG9jYXRpb25OYW1lcycpO1xudmFyIFJlYWN0Tm9vcFVwZGF0ZVF1ZXVlID0gcmVxdWlyZSgnLi9SZWFjdE5vb3BVcGRhdGVRdWV1ZScpO1xuXG52YXIgZW1wdHlPYmplY3QgPSByZXF1aXJlKCdmYmpzL2xpYi9lbXB0eU9iamVjdCcpO1xudmFyIGludmFyaWFudCA9IHJlcXVpcmUoJ2ZianMvbGliL2ludmFyaWFudCcpO1xudmFyIGtleU1pcnJvciA9IHJlcXVpcmUoJ2ZianMvbGliL2tleU1pcnJvcicpO1xudmFyIGtleU9mID0gcmVxdWlyZSgnZmJqcy9saWIva2V5T2YnKTtcbnZhciB3YXJuaW5nID0gcmVxdWlyZSgnZmJqcy9saWIvd2FybmluZycpO1xuXG52YXIgTUlYSU5TX0tFWSA9IGtleU9mKHsgbWl4aW5zOiBudWxsIH0pO1xuXG4vKipcbiAqIFBvbGljaWVzIHRoYXQgZGVzY3JpYmUgbWV0aG9kcyBpbiBgUmVhY3RDbGFzc0ludGVyZmFjZWAuXG4gKi9cbnZhciBTcGVjUG9saWN5ID0ga2V5TWlycm9yKHtcbiAgLyoqXG4gICAqIFRoZXNlIG1ldGhvZHMgbWF5IGJlIGRlZmluZWQgb25seSBvbmNlIGJ5IHRoZSBjbGFzcyBzcGVjaWZpY2F0aW9uIG9yIG1peGluLlxuICAgKi9cbiAgREVGSU5FX09OQ0U6IG51bGwsXG4gIC8qKlxuICAgKiBUaGVzZSBtZXRob2RzIG1heSBiZSBkZWZpbmVkIGJ5IGJvdGggdGhlIGNsYXNzIHNwZWNpZmljYXRpb24gYW5kIG1peGlucy5cbiAgICogU3Vic2VxdWVudCBkZWZpbml0aW9ucyB3aWxsIGJlIGNoYWluZWQuIFRoZXNlIG1ldGhvZHMgbXVzdCByZXR1cm4gdm9pZC5cbiAgICovXG4gIERFRklORV9NQU5ZOiBudWxsLFxuICAvKipcbiAgICogVGhlc2UgbWV0aG9kcyBhcmUgb3ZlcnJpZGluZyB0aGUgYmFzZSBjbGFzcy5cbiAgICovXG4gIE9WRVJSSURFX0JBU0U6IG51bGwsXG4gIC8qKlxuICAgKiBUaGVzZSBtZXRob2RzIGFyZSBzaW1pbGFyIHRvIERFRklORV9NQU5ZLCBleGNlcHQgd2UgYXNzdW1lIHRoZXkgcmV0dXJuXG4gICAqIG9iamVjdHMuIFdlIHRyeSB0byBtZXJnZSB0aGUga2V5cyBvZiB0aGUgcmV0dXJuIHZhbHVlcyBvZiBhbGwgdGhlIG1peGVkIGluXG4gICAqIGZ1bmN0aW9ucy4gSWYgdGhlcmUgaXMgYSBrZXkgY29uZmxpY3Qgd2UgdGhyb3cuXG4gICAqL1xuICBERUZJTkVfTUFOWV9NRVJHRUQ6IG51bGxcbn0pO1xuXG52YXIgaW5qZWN0ZWRNaXhpbnMgPSBbXTtcblxuLyoqXG4gKiBDb21wb3NpdGUgY29tcG9uZW50cyBhcmUgaGlnaGVyLWxldmVsIGNvbXBvbmVudHMgdGhhdCBjb21wb3NlIG90aGVyIGNvbXBvc2l0ZVxuICogb3IgbmF0aXZlIGNvbXBvbmVudHMuXG4gKlxuICogVG8gY3JlYXRlIGEgbmV3IHR5cGUgb2YgYFJlYWN0Q2xhc3NgLCBwYXNzIGEgc3BlY2lmaWNhdGlvbiBvZlxuICogeW91ciBuZXcgY2xhc3MgdG8gYFJlYWN0LmNyZWF0ZUNsYXNzYC4gVGhlIG9ubHkgcmVxdWlyZW1lbnQgb2YgeW91ciBjbGFzc1xuICogc3BlY2lmaWNhdGlvbiBpcyB0aGF0IHlvdSBpbXBsZW1lbnQgYSBgcmVuZGVyYCBtZXRob2QuXG4gKlxuICogICB2YXIgTXlDb21wb25lbnQgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gKiAgICAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAqICAgICAgIHJldHVybiA8ZGl2PkhlbGxvIFdvcmxkPC9kaXY+O1xuICogICAgIH1cbiAqICAgfSk7XG4gKlxuICogVGhlIGNsYXNzIHNwZWNpZmljYXRpb24gc3VwcG9ydHMgYSBzcGVjaWZpYyBwcm90b2NvbCBvZiBtZXRob2RzIHRoYXQgaGF2ZVxuICogc3BlY2lhbCBtZWFuaW5nIChlLmcuIGByZW5kZXJgKS4gU2VlIGBSZWFjdENsYXNzSW50ZXJmYWNlYCBmb3JcbiAqIG1vcmUgdGhlIGNvbXByZWhlbnNpdmUgcHJvdG9jb2wuIEFueSBvdGhlciBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIGluIHRoZVxuICogY2xhc3Mgc3BlY2lmaWNhdGlvbiB3aWxsIGJlIGF2YWlsYWJsZSBvbiB0aGUgcHJvdG90eXBlLlxuICpcbiAqIEBpbnRlcmZhY2UgUmVhY3RDbGFzc0ludGVyZmFjZVxuICogQGludGVybmFsXG4gKi9cbnZhciBSZWFjdENsYXNzSW50ZXJmYWNlID0ge1xuXG4gIC8qKlxuICAgKiBBbiBhcnJheSBvZiBNaXhpbiBvYmplY3RzIHRvIGluY2x1ZGUgd2hlbiBkZWZpbmluZyB5b3VyIGNvbXBvbmVudC5cbiAgICpcbiAgICogQHR5cGUge2FycmF5fVxuICAgKiBAb3B0aW9uYWxcbiAgICovXG4gIG1peGluczogU3BlY1BvbGljeS5ERUZJTkVfTUFOWSxcblxuICAvKipcbiAgICogQW4gb2JqZWN0IGNvbnRhaW5pbmcgcHJvcGVydGllcyBhbmQgbWV0aG9kcyB0aGF0IHNob3VsZCBiZSBkZWZpbmVkIG9uXG4gICAqIHRoZSBjb21wb25lbnQncyBjb25zdHJ1Y3RvciBpbnN0ZWFkIG9mIGl0cyBwcm90b3R5cGUgKHN0YXRpYyBtZXRob2RzKS5cbiAgICpcbiAgICogQHR5cGUge29iamVjdH1cbiAgICogQG9wdGlvbmFsXG4gICAqL1xuICBzdGF0aWNzOiBTcGVjUG9saWN5LkRFRklORV9NQU5ZLFxuXG4gIC8qKlxuICAgKiBEZWZpbml0aW9uIG9mIHByb3AgdHlwZXMgZm9yIHRoaXMgY29tcG9uZW50LlxuICAgKlxuICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgKiBAb3B0aW9uYWxcbiAgICovXG4gIHByb3BUeXBlczogU3BlY1BvbGljeS5ERUZJTkVfTUFOWSxcblxuICAvKipcbiAgICogRGVmaW5pdGlvbiBvZiBjb250ZXh0IHR5cGVzIGZvciB0aGlzIGNvbXBvbmVudC5cbiAgICpcbiAgICogQHR5cGUge29iamVjdH1cbiAgICogQG9wdGlvbmFsXG4gICAqL1xuICBjb250ZXh0VHlwZXM6IFNwZWNQb2xpY3kuREVGSU5FX01BTlksXG5cbiAgLyoqXG4gICAqIERlZmluaXRpb24gb2YgY29udGV4dCB0eXBlcyB0aGlzIGNvbXBvbmVudCBzZXRzIGZvciBpdHMgY2hpbGRyZW4uXG4gICAqXG4gICAqIEB0eXBlIHtvYmplY3R9XG4gICAqIEBvcHRpb25hbFxuICAgKi9cbiAgY2hpbGRDb250ZXh0VHlwZXM6IFNwZWNQb2xpY3kuREVGSU5FX01BTlksXG5cbiAgLy8gPT09PSBEZWZpbml0aW9uIG1ldGhvZHMgPT09PVxuXG4gIC8qKlxuICAgKiBJbnZva2VkIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBtb3VudGVkLiBWYWx1ZXMgaW4gdGhlIG1hcHBpbmcgd2lsbCBiZSBzZXQgb25cbiAgICogYHRoaXMucHJvcHNgIGlmIHRoYXQgcHJvcCBpcyBub3Qgc3BlY2lmaWVkIChpLmUuIHVzaW5nIGFuIGBpbmAgY2hlY2spLlxuICAgKlxuICAgKiBUaGlzIG1ldGhvZCBpcyBpbnZva2VkIGJlZm9yZSBgZ2V0SW5pdGlhbFN0YXRlYCBhbmQgdGhlcmVmb3JlIGNhbm5vdCByZWx5XG4gICAqIG9uIGB0aGlzLnN0YXRlYCBvciB1c2UgYHRoaXMuc2V0U3RhdGVgLlxuICAgKlxuICAgKiBAcmV0dXJuIHtvYmplY3R9XG4gICAqIEBvcHRpb25hbFxuICAgKi9cbiAgZ2V0RGVmYXVsdFByb3BzOiBTcGVjUG9saWN5LkRFRklORV9NQU5ZX01FUkdFRCxcblxuICAvKipcbiAgICogSW52b2tlZCBvbmNlIGJlZm9yZSB0aGUgY29tcG9uZW50IGlzIG1vdW50ZWQuIFRoZSByZXR1cm4gdmFsdWUgd2lsbCBiZSB1c2VkXG4gICAqIGFzIHRoZSBpbml0aWFsIHZhbHVlIG9mIGB0aGlzLnN0YXRlYC5cbiAgICpcbiAgICogICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCkge1xuICAgKiAgICAgcmV0dXJuIHtcbiAgICogICAgICAgaXNPbjogZmFsc2UsXG4gICAqICAgICAgIGZvb0JhejogbmV3IEJhekZvbygpXG4gICAqICAgICB9XG4gICAqICAgfVxuICAgKlxuICAgKiBAcmV0dXJuIHtvYmplY3R9XG4gICAqIEBvcHRpb25hbFxuICAgKi9cbiAgZ2V0SW5pdGlhbFN0YXRlOiBTcGVjUG9saWN5LkRFRklORV9NQU5ZX01FUkdFRCxcblxuICAvKipcbiAgICogQHJldHVybiB7b2JqZWN0fVxuICAgKiBAb3B0aW9uYWxcbiAgICovXG4gIGdldENoaWxkQ29udGV4dDogU3BlY1BvbGljeS5ERUZJTkVfTUFOWV9NRVJHRUQsXG5cbiAgLyoqXG4gICAqIFVzZXMgcHJvcHMgZnJvbSBgdGhpcy5wcm9wc2AgYW5kIHN0YXRlIGZyb20gYHRoaXMuc3RhdGVgIHRvIHJlbmRlciB0aGVcbiAgICogc3RydWN0dXJlIG9mIHRoZSBjb21wb25lbnQuXG4gICAqXG4gICAqIE5vIGd1YXJhbnRlZXMgYXJlIG1hZGUgYWJvdXQgd2hlbiBvciBob3cgb2Z0ZW4gdGhpcyBtZXRob2QgaXMgaW52b2tlZCwgc29cbiAgICogaXQgbXVzdCBub3QgaGF2ZSBzaWRlIGVmZmVjdHMuXG4gICAqXG4gICAqICAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICogICAgIHZhciBuYW1lID0gdGhpcy5wcm9wcy5uYW1lO1xuICAgKiAgICAgcmV0dXJuIDxkaXY+SGVsbG8sIHtuYW1lfSE8L2Rpdj47XG4gICAqICAgfVxuICAgKlxuICAgKiBAcmV0dXJuIHtSZWFjdENvbXBvbmVudH1cbiAgICogQG5vc2lkZWVmZmVjdHNcbiAgICogQHJlcXVpcmVkXG4gICAqL1xuICByZW5kZXI6IFNwZWNQb2xpY3kuREVGSU5FX09OQ0UsXG5cbiAgLy8gPT09PSBEZWxlZ2F0ZSBtZXRob2RzID09PT1cblxuICAvKipcbiAgICogSW52b2tlZCB3aGVuIHRoZSBjb21wb25lbnQgaXMgaW5pdGlhbGx5IGNyZWF0ZWQgYW5kIGFib3V0IHRvIGJlIG1vdW50ZWQuXG4gICAqIFRoaXMgbWF5IGhhdmUgc2lkZSBlZmZlY3RzLCBidXQgYW55IGV4dGVybmFsIHN1YnNjcmlwdGlvbnMgb3IgZGF0YSBjcmVhdGVkXG4gICAqIGJ5IHRoaXMgbWV0aG9kIG11c3QgYmUgY2xlYW5lZCB1cCBpbiBgY29tcG9uZW50V2lsbFVubW91bnRgLlxuICAgKlxuICAgKiBAb3B0aW9uYWxcbiAgICovXG4gIGNvbXBvbmVudFdpbGxNb3VudDogU3BlY1BvbGljeS5ERUZJTkVfTUFOWSxcblxuICAvKipcbiAgICogSW52b2tlZCB3aGVuIHRoZSBjb21wb25lbnQgaGFzIGJlZW4gbW91bnRlZCBhbmQgaGFzIGEgRE9NIHJlcHJlc2VudGF0aW9uLlxuICAgKiBIb3dldmVyLCB0aGVyZSBpcyBubyBndWFyYW50ZWUgdGhhdCB0aGUgRE9NIG5vZGUgaXMgaW4gdGhlIGRvY3VtZW50LlxuICAgKlxuICAgKiBVc2UgdGhpcyBhcyBhbiBvcHBvcnR1bml0eSB0byBvcGVyYXRlIG9uIHRoZSBET00gd2hlbiB0aGUgY29tcG9uZW50IGhhc1xuICAgKiBiZWVuIG1vdW50ZWQgKGluaXRpYWxpemVkIGFuZCByZW5kZXJlZCkgZm9yIHRoZSBmaXJzdCB0aW1lLlxuICAgKlxuICAgKiBAcGFyYW0ge0RPTUVsZW1lbnR9IHJvb3ROb2RlIERPTSBlbGVtZW50IHJlcHJlc2VudGluZyB0aGUgY29tcG9uZW50LlxuICAgKiBAb3B0aW9uYWxcbiAgICovXG4gIGNvbXBvbmVudERpZE1vdW50OiBTcGVjUG9saWN5LkRFRklORV9NQU5ZLFxuXG4gIC8qKlxuICAgKiBJbnZva2VkIGJlZm9yZSB0aGUgY29tcG9uZW50IHJlY2VpdmVzIG5ldyBwcm9wcy5cbiAgICpcbiAgICogVXNlIHRoaXMgYXMgYW4gb3Bwb3J0dW5pdHkgdG8gcmVhY3QgdG8gYSBwcm9wIHRyYW5zaXRpb24gYnkgdXBkYXRpbmcgdGhlXG4gICAqIHN0YXRlIHVzaW5nIGB0aGlzLnNldFN0YXRlYC4gQ3VycmVudCBwcm9wcyBhcmUgYWNjZXNzZWQgdmlhIGB0aGlzLnByb3BzYC5cbiAgICpcbiAgICogICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzOiBmdW5jdGlvbihuZXh0UHJvcHMsIG5leHRDb250ZXh0KSB7XG4gICAqICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICogICAgICAgbGlrZXNJbmNyZWFzaW5nOiBuZXh0UHJvcHMubGlrZUNvdW50ID4gdGhpcy5wcm9wcy5saWtlQ291bnRcbiAgICogICAgIH0pO1xuICAgKiAgIH1cbiAgICpcbiAgICogTk9URTogVGhlcmUgaXMgbm8gZXF1aXZhbGVudCBgY29tcG9uZW50V2lsbFJlY2VpdmVTdGF0ZWAuIEFuIGluY29taW5nIHByb3BcbiAgICogdHJhbnNpdGlvbiBtYXkgY2F1c2UgYSBzdGF0ZSBjaGFuZ2UsIGJ1dCB0aGUgb3Bwb3NpdGUgaXMgbm90IHRydWUuIElmIHlvdVxuICAgKiBuZWVkIGl0LCB5b3UgYXJlIHByb2JhYmx5IGxvb2tpbmcgZm9yIGBjb21wb25lbnRXaWxsVXBkYXRlYC5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IG5leHRQcm9wc1xuICAgKiBAb3B0aW9uYWxcbiAgICovXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHM6IFNwZWNQb2xpY3kuREVGSU5FX01BTlksXG5cbiAgLyoqXG4gICAqIEludm9rZWQgd2hpbGUgZGVjaWRpbmcgaWYgdGhlIGNvbXBvbmVudCBzaG91bGQgYmUgdXBkYXRlZCBhcyBhIHJlc3VsdCBvZlxuICAgKiByZWNlaXZpbmcgbmV3IHByb3BzLCBzdGF0ZSBhbmQvb3IgY29udGV4dC5cbiAgICpcbiAgICogVXNlIHRoaXMgYXMgYW4gb3Bwb3J0dW5pdHkgdG8gYHJldHVybiBmYWxzZWAgd2hlbiB5b3UncmUgY2VydGFpbiB0aGF0IHRoZVxuICAgKiB0cmFuc2l0aW9uIHRvIHRoZSBuZXcgcHJvcHMvc3RhdGUvY29udGV4dCB3aWxsIG5vdCByZXF1aXJlIGEgY29tcG9uZW50XG4gICAqIHVwZGF0ZS5cbiAgICpcbiAgICogICBzaG91bGRDb21wb25lbnRVcGRhdGU6IGZ1bmN0aW9uKG5leHRQcm9wcywgbmV4dFN0YXRlLCBuZXh0Q29udGV4dCkge1xuICAgKiAgICAgcmV0dXJuICFlcXVhbChuZXh0UHJvcHMsIHRoaXMucHJvcHMpIHx8XG4gICAqICAgICAgICFlcXVhbChuZXh0U3RhdGUsIHRoaXMuc3RhdGUpIHx8XG4gICAqICAgICAgICFlcXVhbChuZXh0Q29udGV4dCwgdGhpcy5jb250ZXh0KTtcbiAgICogICB9XG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBuZXh0UHJvcHNcbiAgICogQHBhcmFtIHs/b2JqZWN0fSBuZXh0U3RhdGVcbiAgICogQHBhcmFtIHs/b2JqZWN0fSBuZXh0Q29udGV4dFxuICAgKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIHRoZSBjb21wb25lbnQgc2hvdWxkIHVwZGF0ZS5cbiAgICogQG9wdGlvbmFsXG4gICAqL1xuICBzaG91bGRDb21wb25lbnRVcGRhdGU6IFNwZWNQb2xpY3kuREVGSU5FX09OQ0UsXG5cbiAgLyoqXG4gICAqIEludm9rZWQgd2hlbiB0aGUgY29tcG9uZW50IGlzIGFib3V0IHRvIHVwZGF0ZSBkdWUgdG8gYSB0cmFuc2l0aW9uIGZyb21cbiAgICogYHRoaXMucHJvcHNgLCBgdGhpcy5zdGF0ZWAgYW5kIGB0aGlzLmNvbnRleHRgIHRvIGBuZXh0UHJvcHNgLCBgbmV4dFN0YXRlYFxuICAgKiBhbmQgYG5leHRDb250ZXh0YC5cbiAgICpcbiAgICogVXNlIHRoaXMgYXMgYW4gb3Bwb3J0dW5pdHkgdG8gcGVyZm9ybSBwcmVwYXJhdGlvbiBiZWZvcmUgYW4gdXBkYXRlIG9jY3Vycy5cbiAgICpcbiAgICogTk9URTogWW91ICoqY2Fubm90KiogdXNlIGB0aGlzLnNldFN0YXRlKClgIGluIHRoaXMgbWV0aG9kLlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gbmV4dFByb3BzXG4gICAqIEBwYXJhbSB7P29iamVjdH0gbmV4dFN0YXRlXG4gICAqIEBwYXJhbSB7P29iamVjdH0gbmV4dENvbnRleHRcbiAgICogQHBhcmFtIHtSZWFjdFJlY29uY2lsZVRyYW5zYWN0aW9ufSB0cmFuc2FjdGlvblxuICAgKiBAb3B0aW9uYWxcbiAgICovXG4gIGNvbXBvbmVudFdpbGxVcGRhdGU6IFNwZWNQb2xpY3kuREVGSU5FX01BTlksXG5cbiAgLyoqXG4gICAqIEludm9rZWQgd2hlbiB0aGUgY29tcG9uZW50J3MgRE9NIHJlcHJlc2VudGF0aW9uIGhhcyBiZWVuIHVwZGF0ZWQuXG4gICAqXG4gICAqIFVzZSB0aGlzIGFzIGFuIG9wcG9ydHVuaXR5IHRvIG9wZXJhdGUgb24gdGhlIERPTSB3aGVuIHRoZSBjb21wb25lbnQgaGFzXG4gICAqIGJlZW4gdXBkYXRlZC5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IHByZXZQcm9wc1xuICAgKiBAcGFyYW0gez9vYmplY3R9IHByZXZTdGF0ZVxuICAgKiBAcGFyYW0gez9vYmplY3R9IHByZXZDb250ZXh0XG4gICAqIEBwYXJhbSB7RE9NRWxlbWVudH0gcm9vdE5vZGUgRE9NIGVsZW1lbnQgcmVwcmVzZW50aW5nIHRoZSBjb21wb25lbnQuXG4gICAqIEBvcHRpb25hbFxuICAgKi9cbiAgY29tcG9uZW50RGlkVXBkYXRlOiBTcGVjUG9saWN5LkRFRklORV9NQU5ZLFxuXG4gIC8qKlxuICAgKiBJbnZva2VkIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBhYm91dCB0byBiZSByZW1vdmVkIGZyb20gaXRzIHBhcmVudCBhbmQgaGF2ZVxuICAgKiBpdHMgRE9NIHJlcHJlc2VudGF0aW9uIGRlc3Ryb3llZC5cbiAgICpcbiAgICogVXNlIHRoaXMgYXMgYW4gb3Bwb3J0dW5pdHkgdG8gZGVhbGxvY2F0ZSBhbnkgZXh0ZXJuYWwgcmVzb3VyY2VzLlxuICAgKlxuICAgKiBOT1RFOiBUaGVyZSBpcyBubyBgY29tcG9uZW50RGlkVW5tb3VudGAgc2luY2UgeW91ciBjb21wb25lbnQgd2lsbCBoYXZlIGJlZW5cbiAgICogZGVzdHJveWVkIGJ5IHRoYXQgcG9pbnQuXG4gICAqXG4gICAqIEBvcHRpb25hbFxuICAgKi9cbiAgY29tcG9uZW50V2lsbFVubW91bnQ6IFNwZWNQb2xpY3kuREVGSU5FX01BTlksXG5cbiAgLy8gPT09PSBBZHZhbmNlZCBtZXRob2RzID09PT1cblxuICAvKipcbiAgICogVXBkYXRlcyB0aGUgY29tcG9uZW50J3MgY3VycmVudGx5IG1vdW50ZWQgRE9NIHJlcHJlc2VudGF0aW9uLlxuICAgKlxuICAgKiBCeSBkZWZhdWx0LCB0aGlzIGltcGxlbWVudHMgUmVhY3QncyByZW5kZXJpbmcgYW5kIHJlY29uY2lsaWF0aW9uIGFsZ29yaXRobS5cbiAgICogU29waGlzdGljYXRlZCBjbGllbnRzIG1heSB3aXNoIHRvIG92ZXJyaWRlIHRoaXMuXG4gICAqXG4gICAqIEBwYXJhbSB7UmVhY3RSZWNvbmNpbGVUcmFuc2FjdGlvbn0gdHJhbnNhY3Rpb25cbiAgICogQGludGVybmFsXG4gICAqIEBvdmVycmlkYWJsZVxuICAgKi9cbiAgdXBkYXRlQ29tcG9uZW50OiBTcGVjUG9saWN5Lk9WRVJSSURFX0JBU0VcblxufTtcblxuLyoqXG4gKiBNYXBwaW5nIGZyb20gY2xhc3Mgc3BlY2lmaWNhdGlvbiBrZXlzIHRvIHNwZWNpYWwgcHJvY2Vzc2luZyBmdW5jdGlvbnMuXG4gKlxuICogQWx0aG91Z2ggdGhlc2UgYXJlIGRlY2xhcmVkIGxpa2UgaW5zdGFuY2UgcHJvcGVydGllcyBpbiB0aGUgc3BlY2lmaWNhdGlvblxuICogd2hlbiBkZWZpbmluZyBjbGFzc2VzIHVzaW5nIGBSZWFjdC5jcmVhdGVDbGFzc2AsIHRoZXkgYXJlIGFjdHVhbGx5IHN0YXRpY1xuICogYW5kIGFyZSBhY2Nlc3NpYmxlIG9uIHRoZSBjb25zdHJ1Y3RvciBpbnN0ZWFkIG9mIHRoZSBwcm90b3R5cGUuIERlc3BpdGVcbiAqIGJlaW5nIHN0YXRpYywgdGhleSBtdXN0IGJlIGRlZmluZWQgb3V0c2lkZSBvZiB0aGUgXCJzdGF0aWNzXCIga2V5IHVuZGVyXG4gKiB3aGljaCBhbGwgb3RoZXIgc3RhdGljIG1ldGhvZHMgYXJlIGRlZmluZWQuXG4gKi9cbnZhciBSRVNFUlZFRF9TUEVDX0tFWVMgPSB7XG4gIGRpc3BsYXlOYW1lOiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIGRpc3BsYXlOYW1lKSB7XG4gICAgQ29uc3RydWN0b3IuZGlzcGxheU5hbWUgPSBkaXNwbGF5TmFtZTtcbiAgfSxcbiAgbWl4aW5zOiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIG1peGlucykge1xuICAgIGlmIChtaXhpbnMpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbWl4aW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIG1peFNwZWNJbnRvQ29tcG9uZW50KENvbnN0cnVjdG9yLCBtaXhpbnNbaV0pO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgY2hpbGRDb250ZXh0VHlwZXM6IGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgY2hpbGRDb250ZXh0VHlwZXMpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgdmFsaWRhdGVUeXBlRGVmKENvbnN0cnVjdG9yLCBjaGlsZENvbnRleHRUeXBlcywgUmVhY3RQcm9wVHlwZUxvY2F0aW9ucy5jaGlsZENvbnRleHQpO1xuICAgIH1cbiAgICBDb25zdHJ1Y3Rvci5jaGlsZENvbnRleHRUeXBlcyA9IF9hc3NpZ24oe30sIENvbnN0cnVjdG9yLmNoaWxkQ29udGV4dFR5cGVzLCBjaGlsZENvbnRleHRUeXBlcyk7XG4gIH0sXG4gIGNvbnRleHRUeXBlczogZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBjb250ZXh0VHlwZXMpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgdmFsaWRhdGVUeXBlRGVmKENvbnN0cnVjdG9yLCBjb250ZXh0VHlwZXMsIFJlYWN0UHJvcFR5cGVMb2NhdGlvbnMuY29udGV4dCk7XG4gICAgfVxuICAgIENvbnN0cnVjdG9yLmNvbnRleHRUeXBlcyA9IF9hc3NpZ24oe30sIENvbnN0cnVjdG9yLmNvbnRleHRUeXBlcywgY29udGV4dFR5cGVzKTtcbiAgfSxcbiAgLyoqXG4gICAqIFNwZWNpYWwgY2FzZSBnZXREZWZhdWx0UHJvcHMgd2hpY2ggc2hvdWxkIG1vdmUgaW50byBzdGF0aWNzIGJ1dCByZXF1aXJlc1xuICAgKiBhdXRvbWF0aWMgbWVyZ2luZy5cbiAgICovXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBnZXREZWZhdWx0UHJvcHMpIHtcbiAgICBpZiAoQ29uc3RydWN0b3IuZ2V0RGVmYXVsdFByb3BzKSB7XG4gICAgICBDb25zdHJ1Y3Rvci5nZXREZWZhdWx0UHJvcHMgPSBjcmVhdGVNZXJnZWRSZXN1bHRGdW5jdGlvbihDb25zdHJ1Y3Rvci5nZXREZWZhdWx0UHJvcHMsIGdldERlZmF1bHRQcm9wcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIENvbnN0cnVjdG9yLmdldERlZmF1bHRQcm9wcyA9IGdldERlZmF1bHRQcm9wcztcbiAgICB9XG4gIH0sXG4gIHByb3BUeXBlczogZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm9wVHlwZXMpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgdmFsaWRhdGVUeXBlRGVmKENvbnN0cnVjdG9yLCBwcm9wVHlwZXMsIFJlYWN0UHJvcFR5cGVMb2NhdGlvbnMucHJvcCk7XG4gICAgfVxuICAgIENvbnN0cnVjdG9yLnByb3BUeXBlcyA9IF9hc3NpZ24oe30sIENvbnN0cnVjdG9yLnByb3BUeXBlcywgcHJvcFR5cGVzKTtcbiAgfSxcbiAgc3RhdGljczogZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBzdGF0aWNzKSB7XG4gICAgbWl4U3RhdGljU3BlY0ludG9Db21wb25lbnQoQ29uc3RydWN0b3IsIHN0YXRpY3MpO1xuICB9LFxuICBhdXRvYmluZDogZnVuY3Rpb24gKCkge30gfTtcblxuLy8gbm9vcFxuZnVuY3Rpb24gdmFsaWRhdGVUeXBlRGVmKENvbnN0cnVjdG9yLCB0eXBlRGVmLCBsb2NhdGlvbikge1xuICBmb3IgKHZhciBwcm9wTmFtZSBpbiB0eXBlRGVmKSB7XG4gICAgaWYgKHR5cGVEZWYuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpKSB7XG4gICAgICAvLyB1c2UgYSB3YXJuaW5nIGluc3RlYWQgb2YgYW4gaW52YXJpYW50IHNvIGNvbXBvbmVudHNcbiAgICAgIC8vIGRvbid0IHNob3cgdXAgaW4gcHJvZCBidXQgb25seSBpbiBfX0RFVl9fXG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gd2FybmluZyh0eXBlb2YgdHlwZURlZltwcm9wTmFtZV0gPT09ICdmdW5jdGlvbicsICclczogJXMgdHlwZSBgJXNgIGlzIGludmFsaWQ7IGl0IG11c3QgYmUgYSBmdW5jdGlvbiwgdXN1YWxseSBmcm9tICcgKyAnUmVhY3QuUHJvcFR5cGVzLicsIENvbnN0cnVjdG9yLmRpc3BsYXlOYW1lIHx8ICdSZWFjdENsYXNzJywgUmVhY3RQcm9wVHlwZUxvY2F0aW9uTmFtZXNbbG9jYXRpb25dLCBwcm9wTmFtZSkgOiB2b2lkIDA7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlTWV0aG9kT3ZlcnJpZGUoaXNBbHJlYWR5RGVmaW5lZCwgbmFtZSkge1xuICB2YXIgc3BlY1BvbGljeSA9IFJlYWN0Q2xhc3NJbnRlcmZhY2UuaGFzT3duUHJvcGVydHkobmFtZSkgPyBSZWFjdENsYXNzSW50ZXJmYWNlW25hbWVdIDogbnVsbDtcblxuICAvLyBEaXNhbGxvdyBvdmVycmlkaW5nIG9mIGJhc2UgY2xhc3MgbWV0aG9kcyB1bmxlc3MgZXhwbGljaXRseSBhbGxvd2VkLlxuICBpZiAoUmVhY3RDbGFzc01peGluLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgIShzcGVjUG9saWN5ID09PSBTcGVjUG9saWN5Lk9WRVJSSURFX0JBU0UpID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IGludmFyaWFudChmYWxzZSwgJ1JlYWN0Q2xhc3NJbnRlcmZhY2U6IFlvdSBhcmUgYXR0ZW1wdGluZyB0byBvdmVycmlkZSAnICsgJ2Alc2AgZnJvbSB5b3VyIGNsYXNzIHNwZWNpZmljYXRpb24uIEVuc3VyZSB0aGF0IHlvdXIgbWV0aG9kIG5hbWVzICcgKyAnZG8gbm90IG92ZXJsYXAgd2l0aCBSZWFjdCBtZXRob2RzLicsIG5hbWUpIDogaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcbiAgfVxuXG4gIC8vIERpc2FsbG93IGRlZmluaW5nIG1ldGhvZHMgbW9yZSB0aGFuIG9uY2UgdW5sZXNzIGV4cGxpY2l0bHkgYWxsb3dlZC5cbiAgaWYgKGlzQWxyZWFkeURlZmluZWQpIHtcbiAgICAhKHNwZWNQb2xpY3kgPT09IFNwZWNQb2xpY3kuREVGSU5FX01BTlkgfHwgc3BlY1BvbGljeSA9PT0gU3BlY1BvbGljeS5ERUZJTkVfTUFOWV9NRVJHRUQpID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IGludmFyaWFudChmYWxzZSwgJ1JlYWN0Q2xhc3NJbnRlcmZhY2U6IFlvdSBhcmUgYXR0ZW1wdGluZyB0byBkZWZpbmUgJyArICdgJXNgIG9uIHlvdXIgY29tcG9uZW50IG1vcmUgdGhhbiBvbmNlLiBUaGlzIGNvbmZsaWN0IG1heSBiZSBkdWUgJyArICd0byBhIG1peGluLicsIG5hbWUpIDogaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcbiAgfVxufVxuXG4vKipcbiAqIE1peGluIGhlbHBlciB3aGljaCBoYW5kbGVzIHBvbGljeSB2YWxpZGF0aW9uIGFuZCByZXNlcnZlZFxuICogc3BlY2lmaWNhdGlvbiBrZXlzIHdoZW4gYnVpbGRpbmcgUmVhY3QgY2xhc3Nlcy5cbiAqL1xuZnVuY3Rpb24gbWl4U3BlY0ludG9Db21wb25lbnQoQ29uc3RydWN0b3IsIHNwZWMpIHtcbiAgaWYgKCFzcGVjKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgISh0eXBlb2Ygc3BlYyAhPT0gJ2Z1bmN0aW9uJykgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gaW52YXJpYW50KGZhbHNlLCAnUmVhY3RDbGFzczogWW91XFwncmUgYXR0ZW1wdGluZyB0byAnICsgJ3VzZSBhIGNvbXBvbmVudCBjbGFzcyBvciBmdW5jdGlvbiBhcyBhIG1peGluLiBJbnN0ZWFkLCBqdXN0IHVzZSBhICcgKyAncmVndWxhciBvYmplY3QuJykgOiBpbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICAhIVJlYWN0RWxlbWVudC5pc1ZhbGlkRWxlbWVudChzcGVjKSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBpbnZhcmlhbnQoZmFsc2UsICdSZWFjdENsYXNzOiBZb3VcXCdyZSBhdHRlbXB0aW5nIHRvICcgKyAndXNlIGEgY29tcG9uZW50IGFzIGEgbWl4aW4uIEluc3RlYWQsIGp1c3QgdXNlIGEgcmVndWxhciBvYmplY3QuJykgOiBpbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuXG4gIHZhciBwcm90byA9IENvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiAgdmFyIGF1dG9CaW5kUGFpcnMgPSBwcm90by5fX3JlYWN0QXV0b0JpbmRQYWlycztcblxuICAvLyBCeSBoYW5kbGluZyBtaXhpbnMgYmVmb3JlIGFueSBvdGhlciBwcm9wZXJ0aWVzLCB3ZSBlbnN1cmUgdGhlIHNhbWVcbiAgLy8gY2hhaW5pbmcgb3JkZXIgaXMgYXBwbGllZCB0byBtZXRob2RzIHdpdGggREVGSU5FX01BTlkgcG9saWN5LCB3aGV0aGVyXG4gIC8vIG1peGlucyBhcmUgbGlzdGVkIGJlZm9yZSBvciBhZnRlciB0aGVzZSBtZXRob2RzIGluIHRoZSBzcGVjLlxuICBpZiAoc3BlYy5oYXNPd25Qcm9wZXJ0eShNSVhJTlNfS0VZKSkge1xuICAgIFJFU0VSVkVEX1NQRUNfS0VZUy5taXhpbnMoQ29uc3RydWN0b3IsIHNwZWMubWl4aW5zKTtcbiAgfVxuXG4gIGZvciAodmFyIG5hbWUgaW4gc3BlYykge1xuICAgIGlmICghc3BlYy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKG5hbWUgPT09IE1JWElOU19LRVkpIHtcbiAgICAgIC8vIFdlIGhhdmUgYWxyZWFkeSBoYW5kbGVkIG1peGlucyBpbiBhIHNwZWNpYWwgY2FzZSBhYm92ZS5cbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHZhciBwcm9wZXJ0eSA9IHNwZWNbbmFtZV07XG4gICAgdmFyIGlzQWxyZWFkeURlZmluZWQgPSBwcm90by5oYXNPd25Qcm9wZXJ0eShuYW1lKTtcbiAgICB2YWxpZGF0ZU1ldGhvZE92ZXJyaWRlKGlzQWxyZWFkeURlZmluZWQsIG5hbWUpO1xuXG4gICAgaWYgKFJFU0VSVkVEX1NQRUNfS0VZUy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgUkVTRVJWRURfU1BFQ19LRVlTW25hbWVdKENvbnN0cnVjdG9yLCBwcm9wZXJ0eSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFNldHVwIG1ldGhvZHMgb24gcHJvdG90eXBlOlxuICAgICAgLy8gVGhlIGZvbGxvd2luZyBtZW1iZXIgbWV0aG9kcyBzaG91bGQgbm90IGJlIGF1dG9tYXRpY2FsbHkgYm91bmQ6XG4gICAgICAvLyAxLiBFeHBlY3RlZCBSZWFjdENsYXNzIG1ldGhvZHMgKGluIHRoZSBcImludGVyZmFjZVwiKS5cbiAgICAgIC8vIDIuIE92ZXJyaWRkZW4gbWV0aG9kcyAodGhhdCB3ZXJlIG1peGVkIGluKS5cbiAgICAgIHZhciBpc1JlYWN0Q2xhc3NNZXRob2QgPSBSZWFjdENsYXNzSW50ZXJmYWNlLmhhc093blByb3BlcnR5KG5hbWUpO1xuICAgICAgdmFyIGlzRnVuY3Rpb24gPSB0eXBlb2YgcHJvcGVydHkgPT09ICdmdW5jdGlvbic7XG4gICAgICB2YXIgc2hvdWxkQXV0b0JpbmQgPSBpc0Z1bmN0aW9uICYmICFpc1JlYWN0Q2xhc3NNZXRob2QgJiYgIWlzQWxyZWFkeURlZmluZWQgJiYgc3BlYy5hdXRvYmluZCAhPT0gZmFsc2U7XG5cbiAgICAgIGlmIChzaG91bGRBdXRvQmluZCkge1xuICAgICAgICBhdXRvQmluZFBhaXJzLnB1c2gobmFtZSwgcHJvcGVydHkpO1xuICAgICAgICBwcm90b1tuYW1lXSA9IHByb3BlcnR5O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGlzQWxyZWFkeURlZmluZWQpIHtcbiAgICAgICAgICB2YXIgc3BlY1BvbGljeSA9IFJlYWN0Q2xhc3NJbnRlcmZhY2VbbmFtZV07XG5cbiAgICAgICAgICAvLyBUaGVzZSBjYXNlcyBzaG91bGQgYWxyZWFkeSBiZSBjYXVnaHQgYnkgdmFsaWRhdGVNZXRob2RPdmVycmlkZS5cbiAgICAgICAgICAhKGlzUmVhY3RDbGFzc01ldGhvZCAmJiAoc3BlY1BvbGljeSA9PT0gU3BlY1BvbGljeS5ERUZJTkVfTUFOWV9NRVJHRUQgfHwgc3BlY1BvbGljeSA9PT0gU3BlY1BvbGljeS5ERUZJTkVfTUFOWSkpID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IGludmFyaWFudChmYWxzZSwgJ1JlYWN0Q2xhc3M6IFVuZXhwZWN0ZWQgc3BlYyBwb2xpY3kgJXMgZm9yIGtleSAlcyAnICsgJ3doZW4gbWl4aW5nIGluIGNvbXBvbmVudCBzcGVjcy4nLCBzcGVjUG9saWN5LCBuYW1lKSA6IGludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG5cbiAgICAgICAgICAvLyBGb3IgbWV0aG9kcyB3aGljaCBhcmUgZGVmaW5lZCBtb3JlIHRoYW4gb25jZSwgY2FsbCB0aGUgZXhpc3RpbmdcbiAgICAgICAgICAvLyBtZXRob2RzIGJlZm9yZSBjYWxsaW5nIHRoZSBuZXcgcHJvcGVydHksIG1lcmdpbmcgaWYgYXBwcm9wcmlhdGUuXG4gICAgICAgICAgaWYgKHNwZWNQb2xpY3kgPT09IFNwZWNQb2xpY3kuREVGSU5FX01BTllfTUVSR0VEKSB7XG4gICAgICAgICAgICBwcm90b1tuYW1lXSA9IGNyZWF0ZU1lcmdlZFJlc3VsdEZ1bmN0aW9uKHByb3RvW25hbWVdLCBwcm9wZXJ0eSk7XG4gICAgICAgICAgfSBlbHNlIGlmIChzcGVjUG9saWN5ID09PSBTcGVjUG9saWN5LkRFRklORV9NQU5ZKSB7XG4gICAgICAgICAgICBwcm90b1tuYW1lXSA9IGNyZWF0ZUNoYWluZWRGdW5jdGlvbihwcm90b1tuYW1lXSwgcHJvcGVydHkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcm90b1tuYW1lXSA9IHByb3BlcnR5O1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAvLyBBZGQgdmVyYm9zZSBkaXNwbGF5TmFtZSB0byB0aGUgZnVuY3Rpb24sIHdoaWNoIGhlbHBzIHdoZW4gbG9va2luZ1xuICAgICAgICAgICAgLy8gYXQgcHJvZmlsaW5nIHRvb2xzLlxuICAgICAgICAgICAgaWYgKHR5cGVvZiBwcm9wZXJ0eSA9PT0gJ2Z1bmN0aW9uJyAmJiBzcGVjLmRpc3BsYXlOYW1lKSB7XG4gICAgICAgICAgICAgIHByb3RvW25hbWVdLmRpc3BsYXlOYW1lID0gc3BlYy5kaXNwbGF5TmFtZSArICdfJyArIG5hbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIG1peFN0YXRpY1NwZWNJbnRvQ29tcG9uZW50KENvbnN0cnVjdG9yLCBzdGF0aWNzKSB7XG4gIGlmICghc3RhdGljcykge1xuICAgIHJldHVybjtcbiAgfVxuICBmb3IgKHZhciBuYW1lIGluIHN0YXRpY3MpIHtcbiAgICB2YXIgcHJvcGVydHkgPSBzdGF0aWNzW25hbWVdO1xuICAgIGlmICghc3RhdGljcy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgdmFyIGlzUmVzZXJ2ZWQgPSBuYW1lIGluIFJFU0VSVkVEX1NQRUNfS0VZUztcbiAgICAhIWlzUmVzZXJ2ZWQgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gaW52YXJpYW50KGZhbHNlLCAnUmVhY3RDbGFzczogWW91IGFyZSBhdHRlbXB0aW5nIHRvIGRlZmluZSBhIHJlc2VydmVkICcgKyAncHJvcGVydHksIGAlc2AsIHRoYXQgc2hvdWxkblxcJ3QgYmUgb24gdGhlIFwic3RhdGljc1wiIGtleS4gRGVmaW5lIGl0ICcgKyAnYXMgYW4gaW5zdGFuY2UgcHJvcGVydHkgaW5zdGVhZDsgaXQgd2lsbCBzdGlsbCBiZSBhY2Nlc3NpYmxlIG9uIHRoZSAnICsgJ2NvbnN0cnVjdG9yLicsIG5hbWUpIDogaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcblxuICAgIHZhciBpc0luaGVyaXRlZCA9IG5hbWUgaW4gQ29uc3RydWN0b3I7XG4gICAgISFpc0luaGVyaXRlZCA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBpbnZhcmlhbnQoZmFsc2UsICdSZWFjdENsYXNzOiBZb3UgYXJlIGF0dGVtcHRpbmcgdG8gZGVmaW5lICcgKyAnYCVzYCBvbiB5b3VyIGNvbXBvbmVudCBtb3JlIHRoYW4gb25jZS4gVGhpcyBjb25mbGljdCBtYXkgYmUgJyArICdkdWUgdG8gYSBtaXhpbi4nLCBuYW1lKSA6IGludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gICAgQ29uc3RydWN0b3JbbmFtZV0gPSBwcm9wZXJ0eTtcbiAgfVxufVxuXG4vKipcbiAqIE1lcmdlIHR3byBvYmplY3RzLCBidXQgdGhyb3cgaWYgYm90aCBjb250YWluIHRoZSBzYW1lIGtleS5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gb25lIFRoZSBmaXJzdCBvYmplY3QsIHdoaWNoIGlzIG11dGF0ZWQuXG4gKiBAcGFyYW0ge29iamVjdH0gdHdvIFRoZSBzZWNvbmQgb2JqZWN0XG4gKiBAcmV0dXJuIHtvYmplY3R9IG9uZSBhZnRlciBpdCBoYXMgYmVlbiBtdXRhdGVkIHRvIGNvbnRhaW4gZXZlcnl0aGluZyBpbiB0d28uXG4gKi9cbmZ1bmN0aW9uIG1lcmdlSW50b1dpdGhOb0R1cGxpY2F0ZUtleXMob25lLCB0d28pIHtcbiAgIShvbmUgJiYgdHdvICYmIHR5cGVvZiBvbmUgPT09ICdvYmplY3QnICYmIHR5cGVvZiB0d28gPT09ICdvYmplY3QnKSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBpbnZhcmlhbnQoZmFsc2UsICdtZXJnZUludG9XaXRoTm9EdXBsaWNhdGVLZXlzKCk6IENhbm5vdCBtZXJnZSBub24tb2JqZWN0cy4nKSA6IGludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG5cbiAgZm9yICh2YXIga2V5IGluIHR3bykge1xuICAgIGlmICh0d28uaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgIShvbmVba2V5XSA9PT0gdW5kZWZpbmVkKSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBpbnZhcmlhbnQoZmFsc2UsICdtZXJnZUludG9XaXRoTm9EdXBsaWNhdGVLZXlzKCk6ICcgKyAnVHJpZWQgdG8gbWVyZ2UgdHdvIG9iamVjdHMgd2l0aCB0aGUgc2FtZSBrZXk6IGAlc2AuIFRoaXMgY29uZmxpY3QgJyArICdtYXkgYmUgZHVlIHRvIGEgbWl4aW47IGluIHBhcnRpY3VsYXIsIHRoaXMgbWF5IGJlIGNhdXNlZCBieSB0d28gJyArICdnZXRJbml0aWFsU3RhdGUoKSBvciBnZXREZWZhdWx0UHJvcHMoKSBtZXRob2RzIHJldHVybmluZyBvYmplY3RzICcgKyAnd2l0aCBjbGFzaGluZyBrZXlzLicsIGtleSkgOiBpbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICAgICAgb25lW2tleV0gPSB0d29ba2V5XTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG9uZTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCBpbnZva2VzIHR3byBmdW5jdGlvbnMgYW5kIG1lcmdlcyB0aGVpciByZXR1cm4gdmFsdWVzLlxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IG9uZSBGdW5jdGlvbiB0byBpbnZva2UgZmlyc3QuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSB0d28gRnVuY3Rpb24gdG8gaW52b2tlIHNlY29uZC5cbiAqIEByZXR1cm4ge2Z1bmN0aW9ufSBGdW5jdGlvbiB0aGF0IGludm9rZXMgdGhlIHR3byBhcmd1bWVudCBmdW5jdGlvbnMuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjcmVhdGVNZXJnZWRSZXN1bHRGdW5jdGlvbihvbmUsIHR3bykge1xuICByZXR1cm4gZnVuY3Rpb24gbWVyZ2VkUmVzdWx0KCkge1xuICAgIHZhciBhID0gb25lLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgdmFyIGIgPSB0d28uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICBpZiAoYSA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gYjtcbiAgICB9IGVsc2UgaWYgKGIgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGE7XG4gICAgfVxuICAgIHZhciBjID0ge307XG4gICAgbWVyZ2VJbnRvV2l0aE5vRHVwbGljYXRlS2V5cyhjLCBhKTtcbiAgICBtZXJnZUludG9XaXRoTm9EdXBsaWNhdGVLZXlzKGMsIGIpO1xuICAgIHJldHVybiBjO1xuICB9O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiB0aGF0IGludm9rZXMgdHdvIGZ1bmN0aW9ucyBhbmQgaWdub3JlcyB0aGVpciByZXR1cm4gdmFsZXMuXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gb25lIEZ1bmN0aW9uIHRvIGludm9rZSBmaXJzdC5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IHR3byBGdW5jdGlvbiB0byBpbnZva2Ugc2Vjb25kLlxuICogQHJldHVybiB7ZnVuY3Rpb259IEZ1bmN0aW9uIHRoYXQgaW52b2tlcyB0aGUgdHdvIGFyZ3VtZW50IGZ1bmN0aW9ucy5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUNoYWluZWRGdW5jdGlvbihvbmUsIHR3bykge1xuICByZXR1cm4gZnVuY3Rpb24gY2hhaW5lZEZ1bmN0aW9uKCkge1xuICAgIG9uZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIHR3by5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xufVxuXG4vKipcbiAqIEJpbmRzIGEgbWV0aG9kIHRvIHRoZSBjb21wb25lbnQuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IGNvbXBvbmVudCBDb21wb25lbnQgd2hvc2UgbWV0aG9kIGlzIGdvaW5nIHRvIGJlIGJvdW5kLlxuICogQHBhcmFtIHtmdW5jdGlvbn0gbWV0aG9kIE1ldGhvZCB0byBiZSBib3VuZC5cbiAqIEByZXR1cm4ge2Z1bmN0aW9ufSBUaGUgYm91bmQgbWV0aG9kLlxuICovXG5mdW5jdGlvbiBiaW5kQXV0b0JpbmRNZXRob2QoY29tcG9uZW50LCBtZXRob2QpIHtcbiAgdmFyIGJvdW5kTWV0aG9kID0gbWV0aG9kLmJpbmQoY29tcG9uZW50KTtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBib3VuZE1ldGhvZC5fX3JlYWN0Qm91bmRDb250ZXh0ID0gY29tcG9uZW50O1xuICAgIGJvdW5kTWV0aG9kLl9fcmVhY3RCb3VuZE1ldGhvZCA9IG1ldGhvZDtcbiAgICBib3VuZE1ldGhvZC5fX3JlYWN0Qm91bmRBcmd1bWVudHMgPSBudWxsO1xuICAgIHZhciBjb21wb25lbnROYW1lID0gY29tcG9uZW50LmNvbnN0cnVjdG9yLmRpc3BsYXlOYW1lO1xuICAgIHZhciBfYmluZCA9IGJvdW5kTWV0aG9kLmJpbmQ7XG4gICAgYm91bmRNZXRob2QuYmluZCA9IGZ1bmN0aW9uIChuZXdUaGlzKSB7XG4gICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICB9XG5cbiAgICAgIC8vIFVzZXIgaXMgdHJ5aW5nIHRvIGJpbmQoKSBhbiBhdXRvYm91bmQgbWV0aG9kOyB3ZSBlZmZlY3RpdmVseSB3aWxsXG4gICAgICAvLyBpZ25vcmUgdGhlIHZhbHVlIG9mIFwidGhpc1wiIHRoYXQgdGhlIHVzZXIgaXMgdHJ5aW5nIHRvIHVzZSwgc29cbiAgICAgIC8vIGxldCdzIHdhcm4uXG4gICAgICBpZiAobmV3VGhpcyAhPT0gY29tcG9uZW50ICYmIG5ld1RoaXMgIT09IG51bGwpIHtcbiAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IHdhcm5pbmcoZmFsc2UsICdiaW5kKCk6IFJlYWN0IGNvbXBvbmVudCBtZXRob2RzIG1heSBvbmx5IGJlIGJvdW5kIHRvIHRoZSAnICsgJ2NvbXBvbmVudCBpbnN0YW5jZS4gU2VlICVzJywgY29tcG9uZW50TmFtZSkgOiB2b2lkIDA7XG4gICAgICB9IGVsc2UgaWYgKCFhcmdzLmxlbmd0aCkge1xuICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gd2FybmluZyhmYWxzZSwgJ2JpbmQoKTogWW91IGFyZSBiaW5kaW5nIGEgY29tcG9uZW50IG1ldGhvZCB0byB0aGUgY29tcG9uZW50LiAnICsgJ1JlYWN0IGRvZXMgdGhpcyBmb3IgeW91IGF1dG9tYXRpY2FsbHkgaW4gYSBoaWdoLXBlcmZvcm1hbmNlICcgKyAnd2F5LCBzbyB5b3UgY2FuIHNhZmVseSByZW1vdmUgdGhpcyBjYWxsLiBTZWUgJXMnLCBjb21wb25lbnROYW1lKSA6IHZvaWQgMDtcbiAgICAgICAgcmV0dXJuIGJvdW5kTWV0aG9kO1xuICAgICAgfVxuICAgICAgdmFyIHJlYm91bmRNZXRob2QgPSBfYmluZC5hcHBseShib3VuZE1ldGhvZCwgYXJndW1lbnRzKTtcbiAgICAgIHJlYm91bmRNZXRob2QuX19yZWFjdEJvdW5kQ29udGV4dCA9IGNvbXBvbmVudDtcbiAgICAgIHJlYm91bmRNZXRob2QuX19yZWFjdEJvdW5kTWV0aG9kID0gbWV0aG9kO1xuICAgICAgcmVib3VuZE1ldGhvZC5fX3JlYWN0Qm91bmRBcmd1bWVudHMgPSBhcmdzO1xuICAgICAgcmV0dXJuIHJlYm91bmRNZXRob2Q7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gYm91bmRNZXRob2Q7XG59XG5cbi8qKlxuICogQmluZHMgYWxsIGF1dG8tYm91bmQgbWV0aG9kcyBpbiBhIGNvbXBvbmVudC5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gY29tcG9uZW50IENvbXBvbmVudCB3aG9zZSBtZXRob2QgaXMgZ29pbmcgdG8gYmUgYm91bmQuXG4gKi9cbmZ1bmN0aW9uIGJpbmRBdXRvQmluZE1ldGhvZHMoY29tcG9uZW50KSB7XG4gIHZhciBwYWlycyA9IGNvbXBvbmVudC5fX3JlYWN0QXV0b0JpbmRQYWlycztcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYWlycy5sZW5ndGg7IGkgKz0gMikge1xuICAgIHZhciBhdXRvQmluZEtleSA9IHBhaXJzW2ldO1xuICAgIHZhciBtZXRob2QgPSBwYWlyc1tpICsgMV07XG4gICAgY29tcG9uZW50W2F1dG9CaW5kS2V5XSA9IGJpbmRBdXRvQmluZE1ldGhvZChjb21wb25lbnQsIG1ldGhvZCk7XG4gIH1cbn1cblxuLyoqXG4gKiBBZGQgbW9yZSB0byB0aGUgUmVhY3RDbGFzcyBiYXNlIGNsYXNzLiBUaGVzZSBhcmUgYWxsIGxlZ2FjeSBmZWF0dXJlcyBhbmRcbiAqIHRoZXJlZm9yZSBub3QgYWxyZWFkeSBwYXJ0IG9mIHRoZSBtb2Rlcm4gUmVhY3RDb21wb25lbnQuXG4gKi9cbnZhciBSZWFjdENsYXNzTWl4aW4gPSB7XG5cbiAgLyoqXG4gICAqIFRPRE86IFRoaXMgd2lsbCBiZSBkZXByZWNhdGVkIGJlY2F1c2Ugc3RhdGUgc2hvdWxkIGFsd2F5cyBrZWVwIGEgY29uc2lzdGVudFxuICAgKiB0eXBlIHNpZ25hdHVyZSBhbmQgdGhlIG9ubHkgdXNlIGNhc2UgZm9yIHRoaXMsIGlzIHRvIGF2b2lkIHRoYXQuXG4gICAqL1xuICByZXBsYWNlU3RhdGU6IGZ1bmN0aW9uIChuZXdTdGF0ZSwgY2FsbGJhY2spIHtcbiAgICB0aGlzLnVwZGF0ZXIuZW5xdWV1ZVJlcGxhY2VTdGF0ZSh0aGlzLCBuZXdTdGF0ZSk7XG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICB0aGlzLnVwZGF0ZXIuZW5xdWV1ZUNhbGxiYWNrKHRoaXMsIGNhbGxiYWNrLCAncmVwbGFjZVN0YXRlJyk7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBDaGVja3Mgd2hldGhlciBvciBub3QgdGhpcyBjb21wb3NpdGUgY29tcG9uZW50IGlzIG1vdW50ZWQuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgbW91bnRlZCwgZmFsc2Ugb3RoZXJ3aXNlLlxuICAgKiBAcHJvdGVjdGVkXG4gICAqIEBmaW5hbFxuICAgKi9cbiAgaXNNb3VudGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMudXBkYXRlci5pc01vdW50ZWQodGhpcyk7XG4gIH1cbn07XG5cbnZhciBSZWFjdENsYXNzQ29tcG9uZW50ID0gZnVuY3Rpb24gKCkge307XG5fYXNzaWduKFJlYWN0Q2xhc3NDb21wb25lbnQucHJvdG90eXBlLCBSZWFjdENvbXBvbmVudC5wcm90b3R5cGUsIFJlYWN0Q2xhc3NNaXhpbik7XG5cbi8qKlxuICogTW9kdWxlIGZvciBjcmVhdGluZyBjb21wb3NpdGUgY29tcG9uZW50cy5cbiAqXG4gKiBAY2xhc3MgUmVhY3RDbGFzc1xuICovXG52YXIgUmVhY3RDbGFzcyA9IHtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhIGNvbXBvc2l0ZSBjb21wb25lbnQgY2xhc3MgZ2l2ZW4gYSBjbGFzcyBzcGVjaWZpY2F0aW9uLlxuICAgKiBTZWUgaHR0cHM6Ly9mYWNlYm9vay5naXRodWIuaW8vcmVhY3QvZG9jcy90b3AtbGV2ZWwtYXBpLmh0bWwjcmVhY3QuY3JlYXRlY2xhc3NcbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IHNwZWMgQ2xhc3Mgc3BlY2lmaWNhdGlvbiAod2hpY2ggbXVzdCBkZWZpbmUgYHJlbmRlcmApLlxuICAgKiBAcmV0dXJuIHtmdW5jdGlvbn0gQ29tcG9uZW50IGNvbnN0cnVjdG9yIGZ1bmN0aW9uLlxuICAgKiBAcHVibGljXG4gICAqL1xuICBjcmVhdGVDbGFzczogZnVuY3Rpb24gKHNwZWMpIHtcbiAgICB2YXIgQ29uc3RydWN0b3IgPSBmdW5jdGlvbiAocHJvcHMsIGNvbnRleHQsIHVwZGF0ZXIpIHtcbiAgICAgIC8vIFRoaXMgY29uc3RydWN0b3IgZ2V0cyBvdmVycmlkZGVuIGJ5IG1vY2tzLiBUaGUgYXJndW1lbnQgaXMgdXNlZFxuICAgICAgLy8gYnkgbW9ja3MgdG8gYXNzZXJ0IG9uIHdoYXQgZ2V0cyBtb3VudGVkLlxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gd2FybmluZyh0aGlzIGluc3RhbmNlb2YgQ29uc3RydWN0b3IsICdTb21ldGhpbmcgaXMgY2FsbGluZyBhIFJlYWN0IGNvbXBvbmVudCBkaXJlY3RseS4gVXNlIGEgZmFjdG9yeSBvciAnICsgJ0pTWCBpbnN0ZWFkLiBTZWU6IGh0dHBzOi8vZmIubWUvcmVhY3QtbGVnYWN5ZmFjdG9yeScpIDogdm9pZCAwO1xuICAgICAgfVxuXG4gICAgICAvLyBXaXJlIHVwIGF1dG8tYmluZGluZ1xuICAgICAgaWYgKHRoaXMuX19yZWFjdEF1dG9CaW5kUGFpcnMubGVuZ3RoKSB7XG4gICAgICAgIGJpbmRBdXRvQmluZE1ldGhvZHModGhpcyk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgICB0aGlzLnJlZnMgPSBlbXB0eU9iamVjdDtcbiAgICAgIHRoaXMudXBkYXRlciA9IHVwZGF0ZXIgfHwgUmVhY3ROb29wVXBkYXRlUXVldWU7XG5cbiAgICAgIHRoaXMuc3RhdGUgPSBudWxsO1xuXG4gICAgICAvLyBSZWFjdENsYXNzZXMgZG9lc24ndCBoYXZlIGNvbnN0cnVjdG9ycy4gSW5zdGVhZCwgdGhleSB1c2UgdGhlXG4gICAgICAvLyBnZXRJbml0aWFsU3RhdGUgYW5kIGNvbXBvbmVudFdpbGxNb3VudCBtZXRob2RzIGZvciBpbml0aWFsaXphdGlvbi5cblxuICAgICAgdmFyIGluaXRpYWxTdGF0ZSA9IHRoaXMuZ2V0SW5pdGlhbFN0YXRlID8gdGhpcy5nZXRJbml0aWFsU3RhdGUoKSA6IG51bGw7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAvLyBXZSBhbGxvdyBhdXRvLW1vY2tzIHRvIHByb2NlZWQgYXMgaWYgdGhleSdyZSByZXR1cm5pbmcgbnVsbC5cbiAgICAgICAgaWYgKGluaXRpYWxTdGF0ZSA9PT0gdW5kZWZpbmVkICYmIHRoaXMuZ2V0SW5pdGlhbFN0YXRlLl9pc01vY2tGdW5jdGlvbikge1xuICAgICAgICAgIC8vIFRoaXMgaXMgcHJvYmFibHkgYmFkIHByYWN0aWNlLiBDb25zaWRlciB3YXJuaW5nIGhlcmUgYW5kXG4gICAgICAgICAgLy8gZGVwcmVjYXRpbmcgdGhpcyBjb252ZW5pZW5jZS5cbiAgICAgICAgICBpbml0aWFsU3RhdGUgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAhKHR5cGVvZiBpbml0aWFsU3RhdGUgPT09ICdvYmplY3QnICYmICFBcnJheS5pc0FycmF5KGluaXRpYWxTdGF0ZSkpID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IGludmFyaWFudChmYWxzZSwgJyVzLmdldEluaXRpYWxTdGF0ZSgpOiBtdXN0IHJldHVybiBhbiBvYmplY3Qgb3IgbnVsbCcsIENvbnN0cnVjdG9yLmRpc3BsYXlOYW1lIHx8ICdSZWFjdENvbXBvc2l0ZUNvbXBvbmVudCcpIDogaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcblxuICAgICAgdGhpcy5zdGF0ZSA9IGluaXRpYWxTdGF0ZTtcbiAgICB9O1xuICAgIENvbnN0cnVjdG9yLnByb3RvdHlwZSA9IG5ldyBSZWFjdENsYXNzQ29tcG9uZW50KCk7XG4gICAgQ29uc3RydWN0b3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gQ29uc3RydWN0b3I7XG4gICAgQ29uc3RydWN0b3IucHJvdG90eXBlLl9fcmVhY3RBdXRvQmluZFBhaXJzID0gW107XG5cbiAgICBpbmplY3RlZE1peGlucy5mb3JFYWNoKG1peFNwZWNJbnRvQ29tcG9uZW50LmJpbmQobnVsbCwgQ29uc3RydWN0b3IpKTtcblxuICAgIG1peFNwZWNJbnRvQ29tcG9uZW50KENvbnN0cnVjdG9yLCBzcGVjKTtcblxuICAgIC8vIEluaXRpYWxpemUgdGhlIGRlZmF1bHRQcm9wcyBwcm9wZXJ0eSBhZnRlciBhbGwgbWl4aW5zIGhhdmUgYmVlbiBtZXJnZWQuXG4gICAgaWYgKENvbnN0cnVjdG9yLmdldERlZmF1bHRQcm9wcykge1xuICAgICAgQ29uc3RydWN0b3IuZGVmYXVsdFByb3BzID0gQ29uc3RydWN0b3IuZ2V0RGVmYXVsdFByb3BzKCk7XG4gICAgfVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIC8vIFRoaXMgaXMgYSB0YWcgdG8gaW5kaWNhdGUgdGhhdCB0aGUgdXNlIG9mIHRoZXNlIG1ldGhvZCBuYW1lcyBpcyBvayxcbiAgICAgIC8vIHNpbmNlIGl0J3MgdXNlZCB3aXRoIGNyZWF0ZUNsYXNzLiBJZiBpdCdzIG5vdCwgdGhlbiBpdCdzIGxpa2VseSBhXG4gICAgICAvLyBtaXN0YWtlIHNvIHdlJ2xsIHdhcm4geW91IHRvIHVzZSB0aGUgc3RhdGljIHByb3BlcnR5LCBwcm9wZXJ0eVxuICAgICAgLy8gaW5pdGlhbGl6ZXIgb3IgY29uc3RydWN0b3IgcmVzcGVjdGl2ZWx5LlxuICAgICAgaWYgKENvbnN0cnVjdG9yLmdldERlZmF1bHRQcm9wcykge1xuICAgICAgICBDb25zdHJ1Y3Rvci5nZXREZWZhdWx0UHJvcHMuaXNSZWFjdENsYXNzQXBwcm92ZWQgPSB7fTtcbiAgICAgIH1cbiAgICAgIGlmIChDb25zdHJ1Y3Rvci5wcm90b3R5cGUuZ2V0SW5pdGlhbFN0YXRlKSB7XG4gICAgICAgIENvbnN0cnVjdG9yLnByb3RvdHlwZS5nZXRJbml0aWFsU3RhdGUuaXNSZWFjdENsYXNzQXBwcm92ZWQgPSB7fTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAhQ29uc3RydWN0b3IucHJvdG90eXBlLnJlbmRlciA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBpbnZhcmlhbnQoZmFsc2UsICdjcmVhdGVDbGFzcyguLi4pOiBDbGFzcyBzcGVjaWZpY2F0aW9uIG11c3QgaW1wbGVtZW50IGEgYHJlbmRlcmAgbWV0aG9kLicpIDogaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gd2FybmluZyghQ29uc3RydWN0b3IucHJvdG90eXBlLmNvbXBvbmVudFNob3VsZFVwZGF0ZSwgJyVzIGhhcyBhIG1ldGhvZCBjYWxsZWQgJyArICdjb21wb25lbnRTaG91bGRVcGRhdGUoKS4gRGlkIHlvdSBtZWFuIHNob3VsZENvbXBvbmVudFVwZGF0ZSgpPyAnICsgJ1RoZSBuYW1lIGlzIHBocmFzZWQgYXMgYSBxdWVzdGlvbiBiZWNhdXNlIHRoZSBmdW5jdGlvbiBpcyAnICsgJ2V4cGVjdGVkIHRvIHJldHVybiBhIHZhbHVlLicsIHNwZWMuZGlzcGxheU5hbWUgfHwgJ0EgY29tcG9uZW50JykgOiB2b2lkIDA7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gd2FybmluZyghQ29uc3RydWN0b3IucHJvdG90eXBlLmNvbXBvbmVudFdpbGxSZWNpZXZlUHJvcHMsICclcyBoYXMgYSBtZXRob2QgY2FsbGVkICcgKyAnY29tcG9uZW50V2lsbFJlY2lldmVQcm9wcygpLiBEaWQgeW91IG1lYW4gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcygpPycsIHNwZWMuZGlzcGxheU5hbWUgfHwgJ0EgY29tcG9uZW50JykgOiB2b2lkIDA7XG4gICAgfVxuXG4gICAgLy8gUmVkdWNlIHRpbWUgc3BlbnQgZG9pbmcgbG9va3VwcyBieSBzZXR0aW5nIHRoZXNlIG9uIHRoZSBwcm90b3R5cGUuXG4gICAgZm9yICh2YXIgbWV0aG9kTmFtZSBpbiBSZWFjdENsYXNzSW50ZXJmYWNlKSB7XG4gICAgICBpZiAoIUNvbnN0cnVjdG9yLnByb3RvdHlwZVttZXRob2ROYW1lXSkge1xuICAgICAgICBDb25zdHJ1Y3Rvci5wcm90b3R5cGVbbWV0aG9kTmFtZV0gPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBDb25zdHJ1Y3RvcjtcbiAgfSxcblxuICBpbmplY3Rpb246IHtcbiAgICBpbmplY3RNaXhpbjogZnVuY3Rpb24gKG1peGluKSB7XG4gICAgICBpbmplY3RlZE1peGlucy5wdXNoKG1peGluKTtcbiAgICB9XG4gIH1cblxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdENsYXNzO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0L2xpYi9SZWFjdENsYXNzLmpzXG4gKiogbW9kdWxlIGlkID0gMjhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBSZWFjdFByb3BUeXBlTG9jYXRpb25zXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIga2V5TWlycm9yID0gcmVxdWlyZSgnZmJqcy9saWIva2V5TWlycm9yJyk7XG5cbnZhciBSZWFjdFByb3BUeXBlTG9jYXRpb25zID0ga2V5TWlycm9yKHtcbiAgcHJvcDogbnVsbCxcbiAgY29udGV4dDogbnVsbCxcbiAgY2hpbGRDb250ZXh0OiBudWxsXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdFByb3BUeXBlTG9jYXRpb25zO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0L2xpYi9SZWFjdFByb3BUeXBlTG9jYXRpb25zLmpzXG4gKiogbW9kdWxlIGlkID0gMjlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAdHlwZWNoZWNrcyBzdGF0aWMtb25seVxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGludmFyaWFudCA9IHJlcXVpcmUoJy4vaW52YXJpYW50Jyk7XG5cbi8qKlxuICogQ29uc3RydWN0cyBhbiBlbnVtZXJhdGlvbiB3aXRoIGtleXMgZXF1YWwgdG8gdGhlaXIgdmFsdWUuXG4gKlxuICogRm9yIGV4YW1wbGU6XG4gKlxuICogICB2YXIgQ09MT1JTID0ga2V5TWlycm9yKHtibHVlOiBudWxsLCByZWQ6IG51bGx9KTtcbiAqICAgdmFyIG15Q29sb3IgPSBDT0xPUlMuYmx1ZTtcbiAqICAgdmFyIGlzQ29sb3JWYWxpZCA9ICEhQ09MT1JTW215Q29sb3JdO1xuICpcbiAqIFRoZSBsYXN0IGxpbmUgY291bGQgbm90IGJlIHBlcmZvcm1lZCBpZiB0aGUgdmFsdWVzIG9mIHRoZSBnZW5lcmF0ZWQgZW51bSB3ZXJlXG4gKiBub3QgZXF1YWwgdG8gdGhlaXIga2V5cy5cbiAqXG4gKiAgIElucHV0OiAge2tleTE6IHZhbDEsIGtleTI6IHZhbDJ9XG4gKiAgIE91dHB1dDoge2tleTE6IGtleTEsIGtleTI6IGtleTJ9XG4gKlxuICogQHBhcmFtIHtvYmplY3R9IG9ialxuICogQHJldHVybiB7b2JqZWN0fVxuICovXG52YXIga2V5TWlycm9yID0gZnVuY3Rpb24ga2V5TWlycm9yKG9iaikge1xuICB2YXIgcmV0ID0ge307XG4gIHZhciBrZXk7XG4gICEob2JqIGluc3RhbmNlb2YgT2JqZWN0ICYmICFBcnJheS5pc0FycmF5KG9iaikpID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IGludmFyaWFudChmYWxzZSwgJ2tleU1pcnJvciguLi4pOiBBcmd1bWVudCBtdXN0IGJlIGFuIG9iamVjdC4nKSA6IGludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gIGZvciAoa2V5IGluIG9iaikge1xuICAgIGlmICghb2JqLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICByZXRba2V5XSA9IGtleTtcbiAgfVxuICByZXR1cm4gcmV0O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBrZXlNaXJyb3I7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZmJqcy9saWIva2V5TWlycm9yLmpzXG4gKiogbW9kdWxlIGlkID0gMzBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBSZWFjdFByb3BUeXBlTG9jYXRpb25OYW1lc1xuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0UHJvcFR5cGVMb2NhdGlvbk5hbWVzID0ge307XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIFJlYWN0UHJvcFR5cGVMb2NhdGlvbk5hbWVzID0ge1xuICAgIHByb3A6ICdwcm9wJyxcbiAgICBjb250ZXh0OiAnY29udGV4dCcsXG4gICAgY2hpbGRDb250ZXh0OiAnY2hpbGQgY29udGV4dCdcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdFByb3BUeXBlTG9jYXRpb25OYW1lcztcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC9saWIvUmVhY3RQcm9wVHlwZUxvY2F0aW9uTmFtZXMuanNcbiAqKiBtb2R1bGUgaWQgPSAzMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKi9cblxuLyoqXG4gKiBBbGxvd3MgZXh0cmFjdGlvbiBvZiBhIG1pbmlmaWVkIGtleS4gTGV0J3MgdGhlIGJ1aWxkIHN5c3RlbSBtaW5pZnkga2V5c1xuICogd2l0aG91dCBsb3NpbmcgdGhlIGFiaWxpdHkgdG8gZHluYW1pY2FsbHkgdXNlIGtleSBzdHJpbmdzIGFzIHZhbHVlc1xuICogdGhlbXNlbHZlcy4gUGFzcyBpbiBhbiBvYmplY3Qgd2l0aCBhIHNpbmdsZSBrZXkvdmFsIHBhaXIgYW5kIGl0IHdpbGwgcmV0dXJuXG4gKiB5b3UgdGhlIHN0cmluZyBrZXkgb2YgdGhhdCBzaW5nbGUgcmVjb3JkLiBTdXBwb3NlIHlvdSB3YW50IHRvIGdyYWIgdGhlXG4gKiB2YWx1ZSBmb3IgYSBrZXkgJ2NsYXNzTmFtZScgaW5zaWRlIG9mIGFuIG9iamVjdC4gS2V5L3ZhbCBtaW5pZmljYXRpb24gbWF5XG4gKiBoYXZlIGFsaWFzZWQgdGhhdCBrZXkgdG8gYmUgJ3hhMTInLiBrZXlPZih7Y2xhc3NOYW1lOiBudWxsfSkgd2lsbCByZXR1cm5cbiAqICd4YTEyJyBpbiB0aGF0IGNhc2UuIFJlc29sdmUga2V5cyB5b3Ugd2FudCB0byB1c2Ugb25jZSBhdCBzdGFydHVwIHRpbWUsIHRoZW5cbiAqIHJldXNlIHRob3NlIHJlc29sdXRpb25zLlxuICovXG52YXIga2V5T2YgPSBmdW5jdGlvbiBrZXlPZihvbmVLZXlPYmopIHtcbiAgdmFyIGtleTtcbiAgZm9yIChrZXkgaW4gb25lS2V5T2JqKSB7XG4gICAgaWYgKCFvbmVLZXlPYmouaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIHJldHVybiBrZXk7XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGtleU9mO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2ZianMvbGliL2tleU9mLmpzXG4gKiogbW9kdWxlIGlkID0gMzJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBSZWFjdERPTUZhY3Rvcmllc1xuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0RWxlbWVudCA9IHJlcXVpcmUoJy4vUmVhY3RFbGVtZW50Jyk7XG52YXIgUmVhY3RFbGVtZW50VmFsaWRhdG9yID0gcmVxdWlyZSgnLi9SZWFjdEVsZW1lbnRWYWxpZGF0b3InKTtcblxudmFyIG1hcE9iamVjdCA9IHJlcXVpcmUoJ2ZianMvbGliL21hcE9iamVjdCcpO1xuXG4vKipcbiAqIENyZWF0ZSBhIGZhY3RvcnkgdGhhdCBjcmVhdGVzIEhUTUwgdGFnIGVsZW1lbnRzLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB0YWcgVGFnIG5hbWUgKGUuZy4gYGRpdmApLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY3JlYXRlRE9NRmFjdG9yeSh0YWcpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICByZXR1cm4gUmVhY3RFbGVtZW50VmFsaWRhdG9yLmNyZWF0ZUZhY3RvcnkodGFnKTtcbiAgfVxuICByZXR1cm4gUmVhY3RFbGVtZW50LmNyZWF0ZUZhY3RvcnkodGFnKTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbWFwcGluZyBmcm9tIHN1cHBvcnRlZCBIVE1MIHRhZ3MgdG8gYFJlYWN0RE9NQ29tcG9uZW50YCBjbGFzc2VzLlxuICogVGhpcyBpcyBhbHNvIGFjY2Vzc2libGUgdmlhIGBSZWFjdC5ET01gLlxuICpcbiAqIEBwdWJsaWNcbiAqL1xudmFyIFJlYWN0RE9NRmFjdG9yaWVzID0gbWFwT2JqZWN0KHtcbiAgYTogJ2EnLFxuICBhYmJyOiAnYWJicicsXG4gIGFkZHJlc3M6ICdhZGRyZXNzJyxcbiAgYXJlYTogJ2FyZWEnLFxuICBhcnRpY2xlOiAnYXJ0aWNsZScsXG4gIGFzaWRlOiAnYXNpZGUnLFxuICBhdWRpbzogJ2F1ZGlvJyxcbiAgYjogJ2InLFxuICBiYXNlOiAnYmFzZScsXG4gIGJkaTogJ2JkaScsXG4gIGJkbzogJ2JkbycsXG4gIGJpZzogJ2JpZycsXG4gIGJsb2NrcXVvdGU6ICdibG9ja3F1b3RlJyxcbiAgYm9keTogJ2JvZHknLFxuICBicjogJ2JyJyxcbiAgYnV0dG9uOiAnYnV0dG9uJyxcbiAgY2FudmFzOiAnY2FudmFzJyxcbiAgY2FwdGlvbjogJ2NhcHRpb24nLFxuICBjaXRlOiAnY2l0ZScsXG4gIGNvZGU6ICdjb2RlJyxcbiAgY29sOiAnY29sJyxcbiAgY29sZ3JvdXA6ICdjb2xncm91cCcsXG4gIGRhdGE6ICdkYXRhJyxcbiAgZGF0YWxpc3Q6ICdkYXRhbGlzdCcsXG4gIGRkOiAnZGQnLFxuICBkZWw6ICdkZWwnLFxuICBkZXRhaWxzOiAnZGV0YWlscycsXG4gIGRmbjogJ2RmbicsXG4gIGRpYWxvZzogJ2RpYWxvZycsXG4gIGRpdjogJ2RpdicsXG4gIGRsOiAnZGwnLFxuICBkdDogJ2R0JyxcbiAgZW06ICdlbScsXG4gIGVtYmVkOiAnZW1iZWQnLFxuICBmaWVsZHNldDogJ2ZpZWxkc2V0JyxcbiAgZmlnY2FwdGlvbjogJ2ZpZ2NhcHRpb24nLFxuICBmaWd1cmU6ICdmaWd1cmUnLFxuICBmb290ZXI6ICdmb290ZXInLFxuICBmb3JtOiAnZm9ybScsXG4gIGgxOiAnaDEnLFxuICBoMjogJ2gyJyxcbiAgaDM6ICdoMycsXG4gIGg0OiAnaDQnLFxuICBoNTogJ2g1JyxcbiAgaDY6ICdoNicsXG4gIGhlYWQ6ICdoZWFkJyxcbiAgaGVhZGVyOiAnaGVhZGVyJyxcbiAgaGdyb3VwOiAnaGdyb3VwJyxcbiAgaHI6ICdocicsXG4gIGh0bWw6ICdodG1sJyxcbiAgaTogJ2knLFxuICBpZnJhbWU6ICdpZnJhbWUnLFxuICBpbWc6ICdpbWcnLFxuICBpbnB1dDogJ2lucHV0JyxcbiAgaW5zOiAnaW5zJyxcbiAga2JkOiAna2JkJyxcbiAga2V5Z2VuOiAna2V5Z2VuJyxcbiAgbGFiZWw6ICdsYWJlbCcsXG4gIGxlZ2VuZDogJ2xlZ2VuZCcsXG4gIGxpOiAnbGknLFxuICBsaW5rOiAnbGluaycsXG4gIG1haW46ICdtYWluJyxcbiAgbWFwOiAnbWFwJyxcbiAgbWFyazogJ21hcmsnLFxuICBtZW51OiAnbWVudScsXG4gIG1lbnVpdGVtOiAnbWVudWl0ZW0nLFxuICBtZXRhOiAnbWV0YScsXG4gIG1ldGVyOiAnbWV0ZXInLFxuICBuYXY6ICduYXYnLFxuICBub3NjcmlwdDogJ25vc2NyaXB0JyxcbiAgb2JqZWN0OiAnb2JqZWN0JyxcbiAgb2w6ICdvbCcsXG4gIG9wdGdyb3VwOiAnb3B0Z3JvdXAnLFxuICBvcHRpb246ICdvcHRpb24nLFxuICBvdXRwdXQ6ICdvdXRwdXQnLFxuICBwOiAncCcsXG4gIHBhcmFtOiAncGFyYW0nLFxuICBwaWN0dXJlOiAncGljdHVyZScsXG4gIHByZTogJ3ByZScsXG4gIHByb2dyZXNzOiAncHJvZ3Jlc3MnLFxuICBxOiAncScsXG4gIHJwOiAncnAnLFxuICBydDogJ3J0JyxcbiAgcnVieTogJ3J1YnknLFxuICBzOiAncycsXG4gIHNhbXA6ICdzYW1wJyxcbiAgc2NyaXB0OiAnc2NyaXB0JyxcbiAgc2VjdGlvbjogJ3NlY3Rpb24nLFxuICBzZWxlY3Q6ICdzZWxlY3QnLFxuICBzbWFsbDogJ3NtYWxsJyxcbiAgc291cmNlOiAnc291cmNlJyxcbiAgc3BhbjogJ3NwYW4nLFxuICBzdHJvbmc6ICdzdHJvbmcnLFxuICBzdHlsZTogJ3N0eWxlJyxcbiAgc3ViOiAnc3ViJyxcbiAgc3VtbWFyeTogJ3N1bW1hcnknLFxuICBzdXA6ICdzdXAnLFxuICB0YWJsZTogJ3RhYmxlJyxcbiAgdGJvZHk6ICd0Ym9keScsXG4gIHRkOiAndGQnLFxuICB0ZXh0YXJlYTogJ3RleHRhcmVhJyxcbiAgdGZvb3Q6ICd0Zm9vdCcsXG4gIHRoOiAndGgnLFxuICB0aGVhZDogJ3RoZWFkJyxcbiAgdGltZTogJ3RpbWUnLFxuICB0aXRsZTogJ3RpdGxlJyxcbiAgdHI6ICd0cicsXG4gIHRyYWNrOiAndHJhY2snLFxuICB1OiAndScsXG4gIHVsOiAndWwnLFxuICAndmFyJzogJ3ZhcicsXG4gIHZpZGVvOiAndmlkZW8nLFxuICB3YnI6ICd3YnInLFxuXG4gIC8vIFNWR1xuICBjaXJjbGU6ICdjaXJjbGUnLFxuICBjbGlwUGF0aDogJ2NsaXBQYXRoJyxcbiAgZGVmczogJ2RlZnMnLFxuICBlbGxpcHNlOiAnZWxsaXBzZScsXG4gIGc6ICdnJyxcbiAgaW1hZ2U6ICdpbWFnZScsXG4gIGxpbmU6ICdsaW5lJyxcbiAgbGluZWFyR3JhZGllbnQ6ICdsaW5lYXJHcmFkaWVudCcsXG4gIG1hc2s6ICdtYXNrJyxcbiAgcGF0aDogJ3BhdGgnLFxuICBwYXR0ZXJuOiAncGF0dGVybicsXG4gIHBvbHlnb246ICdwb2x5Z29uJyxcbiAgcG9seWxpbmU6ICdwb2x5bGluZScsXG4gIHJhZGlhbEdyYWRpZW50OiAncmFkaWFsR3JhZGllbnQnLFxuICByZWN0OiAncmVjdCcsXG4gIHN0b3A6ICdzdG9wJyxcbiAgc3ZnOiAnc3ZnJyxcbiAgdGV4dDogJ3RleHQnLFxuICB0c3BhbjogJ3RzcGFuJ1xuXG59LCBjcmVhdGVET01GYWN0b3J5KTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdERPTUZhY3RvcmllcztcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC9saWIvUmVhY3RET01GYWN0b3JpZXMuanNcbiAqKiBtb2R1bGUgaWQgPSAzM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHByb3ZpZGVzTW9kdWxlIFJlYWN0RWxlbWVudFZhbGlkYXRvclxuICovXG5cbi8qKlxuICogUmVhY3RFbGVtZW50VmFsaWRhdG9yIHByb3ZpZGVzIGEgd3JhcHBlciBhcm91bmQgYSBlbGVtZW50IGZhY3RvcnlcbiAqIHdoaWNoIHZhbGlkYXRlcyB0aGUgcHJvcHMgcGFzc2VkIHRvIHRoZSBlbGVtZW50LiBUaGlzIGlzIGludGVuZGVkIHRvIGJlXG4gKiB1c2VkIG9ubHkgaW4gREVWIGFuZCBjb3VsZCBiZSByZXBsYWNlZCBieSBhIHN0YXRpYyB0eXBlIGNoZWNrZXIgZm9yIGxhbmd1YWdlc1xuICogdGhhdCBzdXBwb3J0IGl0LlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0RWxlbWVudCA9IHJlcXVpcmUoJy4vUmVhY3RFbGVtZW50Jyk7XG52YXIgUmVhY3RQcm9wVHlwZUxvY2F0aW9ucyA9IHJlcXVpcmUoJy4vUmVhY3RQcm9wVHlwZUxvY2F0aW9ucycpO1xudmFyIFJlYWN0UHJvcFR5cGVMb2NhdGlvbk5hbWVzID0gcmVxdWlyZSgnLi9SZWFjdFByb3BUeXBlTG9jYXRpb25OYW1lcycpO1xudmFyIFJlYWN0Q3VycmVudE93bmVyID0gcmVxdWlyZSgnLi9SZWFjdEN1cnJlbnRPd25lcicpO1xuXG52YXIgY2FuRGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuL2NhbkRlZmluZVByb3BlcnR5Jyk7XG52YXIgZ2V0SXRlcmF0b3JGbiA9IHJlcXVpcmUoJy4vZ2V0SXRlcmF0b3JGbicpO1xudmFyIGludmFyaWFudCA9IHJlcXVpcmUoJ2ZianMvbGliL2ludmFyaWFudCcpO1xudmFyIHdhcm5pbmcgPSByZXF1aXJlKCdmYmpzL2xpYi93YXJuaW5nJyk7XG5cbmZ1bmN0aW9uIGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpIHtcbiAgaWYgKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQpIHtcbiAgICB2YXIgbmFtZSA9IFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQuZ2V0TmFtZSgpO1xuICAgIGlmIChuYW1lKSB7XG4gICAgICByZXR1cm4gJyBDaGVjayB0aGUgcmVuZGVyIG1ldGhvZCBvZiBgJyArIG5hbWUgKyAnYC4nO1xuICAgIH1cbiAgfVxuICByZXR1cm4gJyc7XG59XG5cbi8qKlxuICogV2FybiBpZiB0aGVyZSdzIG5vIGtleSBleHBsaWNpdGx5IHNldCBvbiBkeW5hbWljIGFycmF5cyBvZiBjaGlsZHJlbiBvclxuICogb2JqZWN0IGtleXMgYXJlIG5vdCB2YWxpZC4gVGhpcyBhbGxvd3MgdXMgdG8ga2VlcCB0cmFjayBvZiBjaGlsZHJlbiBiZXR3ZWVuXG4gKiB1cGRhdGVzLlxuICovXG52YXIgb3duZXJIYXNLZXlVc2VXYXJuaW5nID0ge307XG5cbnZhciBsb2dnZWRUeXBlRmFpbHVyZXMgPSB7fTtcblxuLyoqXG4gKiBXYXJuIGlmIHRoZSBlbGVtZW50IGRvZXNuJ3QgaGF2ZSBhbiBleHBsaWNpdCBrZXkgYXNzaWduZWQgdG8gaXQuXG4gKiBUaGlzIGVsZW1lbnQgaXMgaW4gYW4gYXJyYXkuIFRoZSBhcnJheSBjb3VsZCBncm93IGFuZCBzaHJpbmsgb3IgYmVcbiAqIHJlb3JkZXJlZC4gQWxsIGNoaWxkcmVuIHRoYXQgaGF2ZW4ndCBhbHJlYWR5IGJlZW4gdmFsaWRhdGVkIGFyZSByZXF1aXJlZCB0b1xuICogaGF2ZSBhIFwia2V5XCIgcHJvcGVydHkgYXNzaWduZWQgdG8gaXQuXG4gKlxuICogQGludGVybmFsXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZWxlbWVudCBFbGVtZW50IHRoYXQgcmVxdWlyZXMgYSBrZXkuXG4gKiBAcGFyYW0geyp9IHBhcmVudFR5cGUgZWxlbWVudCdzIHBhcmVudCdzIHR5cGUuXG4gKi9cbmZ1bmN0aW9uIHZhbGlkYXRlRXhwbGljaXRLZXkoZWxlbWVudCwgcGFyZW50VHlwZSkge1xuICBpZiAoIWVsZW1lbnQuX3N0b3JlIHx8IGVsZW1lbnQuX3N0b3JlLnZhbGlkYXRlZCB8fCBlbGVtZW50LmtleSAhPSBudWxsKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGVsZW1lbnQuX3N0b3JlLnZhbGlkYXRlZCA9IHRydWU7XG5cbiAgdmFyIGFkZGVuZGEgPSBnZXRBZGRlbmRhRm9yS2V5VXNlKCd1bmlxdWVLZXknLCBlbGVtZW50LCBwYXJlbnRUeXBlKTtcbiAgaWYgKGFkZGVuZGEgPT09IG51bGwpIHtcbiAgICAvLyB3ZSBhbHJlYWR5IHNob3dlZCB0aGUgd2FybmluZ1xuICAgIHJldHVybjtcbiAgfVxuICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gd2FybmluZyhmYWxzZSwgJ0VhY2ggY2hpbGQgaW4gYW4gYXJyYXkgb3IgaXRlcmF0b3Igc2hvdWxkIGhhdmUgYSB1bmlxdWUgXCJrZXlcIiBwcm9wLicgKyAnJXMlcyVzJywgYWRkZW5kYS5wYXJlbnRPck93bmVyIHx8ICcnLCBhZGRlbmRhLmNoaWxkT3duZXIgfHwgJycsIGFkZGVuZGEudXJsIHx8ICcnKSA6IHZvaWQgMDtcbn1cblxuLyoqXG4gKiBTaGFyZWQgd2FybmluZyBhbmQgbW9uaXRvcmluZyBjb2RlIGZvciB0aGUga2V5IHdhcm5pbmdzLlxuICpcbiAqIEBpbnRlcm5hbFxuICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2VUeXBlIEEga2V5IHVzZWQgZm9yIGRlLWR1cGluZyB3YXJuaW5ncy5cbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBlbGVtZW50IENvbXBvbmVudCB0aGF0IHJlcXVpcmVzIGEga2V5LlxuICogQHBhcmFtIHsqfSBwYXJlbnRUeXBlIGVsZW1lbnQncyBwYXJlbnQncyB0eXBlLlxuICogQHJldHVybnMgez9vYmplY3R9IEEgc2V0IG9mIGFkZGVuZGEgdG8gdXNlIGluIHRoZSB3YXJuaW5nIG1lc3NhZ2UsIG9yIG51bGxcbiAqIGlmIHRoZSB3YXJuaW5nIGhhcyBhbHJlYWR5IGJlZW4gc2hvd24gYmVmb3JlIChhbmQgc2hvdWxkbid0IGJlIHNob3duIGFnYWluKS5cbiAqL1xuZnVuY3Rpb24gZ2V0QWRkZW5kYUZvcktleVVzZShtZXNzYWdlVHlwZSwgZWxlbWVudCwgcGFyZW50VHlwZSkge1xuICB2YXIgYWRkZW5kdW0gPSBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKTtcbiAgaWYgKCFhZGRlbmR1bSkge1xuICAgIHZhciBwYXJlbnROYW1lID0gdHlwZW9mIHBhcmVudFR5cGUgPT09ICdzdHJpbmcnID8gcGFyZW50VHlwZSA6IHBhcmVudFR5cGUuZGlzcGxheU5hbWUgfHwgcGFyZW50VHlwZS5uYW1lO1xuICAgIGlmIChwYXJlbnROYW1lKSB7XG4gICAgICBhZGRlbmR1bSA9ICcgQ2hlY2sgdGhlIHRvcC1sZXZlbCByZW5kZXIgY2FsbCB1c2luZyA8JyArIHBhcmVudE5hbWUgKyAnPi4nO1xuICAgIH1cbiAgfVxuXG4gIHZhciBtZW1vaXplciA9IG93bmVySGFzS2V5VXNlV2FybmluZ1ttZXNzYWdlVHlwZV0gfHwgKG93bmVySGFzS2V5VXNlV2FybmluZ1ttZXNzYWdlVHlwZV0gPSB7fSk7XG4gIGlmIChtZW1vaXplclthZGRlbmR1bV0pIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBtZW1vaXplclthZGRlbmR1bV0gPSB0cnVlO1xuXG4gIHZhciBhZGRlbmRhID0ge1xuICAgIHBhcmVudE9yT3duZXI6IGFkZGVuZHVtLFxuICAgIHVybDogJyBTZWUgaHR0cHM6Ly9mYi5tZS9yZWFjdC13YXJuaW5nLWtleXMgZm9yIG1vcmUgaW5mb3JtYXRpb24uJyxcbiAgICBjaGlsZE93bmVyOiBudWxsXG4gIH07XG5cbiAgLy8gVXN1YWxseSB0aGUgY3VycmVudCBvd25lciBpcyB0aGUgb2ZmZW5kZXIsIGJ1dCBpZiBpdCBhY2NlcHRzIGNoaWxkcmVuIGFzIGFcbiAgLy8gcHJvcGVydHksIGl0IG1heSBiZSB0aGUgY3JlYXRvciBvZiB0aGUgY2hpbGQgdGhhdCdzIHJlc3BvbnNpYmxlIGZvclxuICAvLyBhc3NpZ25pbmcgaXQgYSBrZXkuXG4gIGlmIChlbGVtZW50ICYmIGVsZW1lbnQuX293bmVyICYmIGVsZW1lbnQuX293bmVyICE9PSBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50KSB7XG4gICAgLy8gR2l2ZSB0aGUgY29tcG9uZW50IHRoYXQgb3JpZ2luYWxseSBjcmVhdGVkIHRoaXMgY2hpbGQuXG4gICAgYWRkZW5kYS5jaGlsZE93bmVyID0gJyBJdCB3YXMgcGFzc2VkIGEgY2hpbGQgZnJvbSAnICsgZWxlbWVudC5fb3duZXIuZ2V0TmFtZSgpICsgJy4nO1xuICB9XG5cbiAgcmV0dXJuIGFkZGVuZGE7XG59XG5cbi8qKlxuICogRW5zdXJlIHRoYXQgZXZlcnkgZWxlbWVudCBlaXRoZXIgaXMgcGFzc2VkIGluIGEgc3RhdGljIGxvY2F0aW9uLCBpbiBhblxuICogYXJyYXkgd2l0aCBhbiBleHBsaWNpdCBrZXlzIHByb3BlcnR5IGRlZmluZWQsIG9yIGluIGFuIG9iamVjdCBsaXRlcmFsXG4gKiB3aXRoIHZhbGlkIGtleSBwcm9wZXJ0eS5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqIEBwYXJhbSB7UmVhY3ROb2RlfSBub2RlIFN0YXRpY2FsbHkgcGFzc2VkIGNoaWxkIG9mIGFueSB0eXBlLlxuICogQHBhcmFtIHsqfSBwYXJlbnRUeXBlIG5vZGUncyBwYXJlbnQncyB0eXBlLlxuICovXG5mdW5jdGlvbiB2YWxpZGF0ZUNoaWxkS2V5cyhub2RlLCBwYXJlbnRUeXBlKSB7XG4gIGlmICh0eXBlb2Ygbm9kZSAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKEFycmF5LmlzQXJyYXkobm9kZSkpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGUubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBjaGlsZCA9IG5vZGVbaV07XG4gICAgICBpZiAoUmVhY3RFbGVtZW50LmlzVmFsaWRFbGVtZW50KGNoaWxkKSkge1xuICAgICAgICB2YWxpZGF0ZUV4cGxpY2l0S2V5KGNoaWxkLCBwYXJlbnRUeXBlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSBpZiAoUmVhY3RFbGVtZW50LmlzVmFsaWRFbGVtZW50KG5vZGUpKSB7XG4gICAgLy8gVGhpcyBlbGVtZW50IHdhcyBwYXNzZWQgaW4gYSB2YWxpZCBsb2NhdGlvbi5cbiAgICBpZiAobm9kZS5fc3RvcmUpIHtcbiAgICAgIG5vZGUuX3N0b3JlLnZhbGlkYXRlZCA9IHRydWU7XG4gICAgfVxuICB9IGVsc2UgaWYgKG5vZGUpIHtcbiAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4obm9kZSk7XG4gICAgLy8gRW50cnkgaXRlcmF0b3JzIHByb3ZpZGUgaW1wbGljaXQga2V5cy5cbiAgICBpZiAoaXRlcmF0b3JGbikge1xuICAgICAgaWYgKGl0ZXJhdG9yRm4gIT09IG5vZGUuZW50cmllcykge1xuICAgICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwobm9kZSk7XG4gICAgICAgIHZhciBzdGVwO1xuICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgaWYgKFJlYWN0RWxlbWVudC5pc1ZhbGlkRWxlbWVudChzdGVwLnZhbHVlKSkge1xuICAgICAgICAgICAgdmFsaWRhdGVFeHBsaWNpdEtleShzdGVwLnZhbHVlLCBwYXJlbnRUeXBlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBBc3NlcnQgdGhhdCB0aGUgcHJvcHMgYXJlIHZhbGlkXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbXBvbmVudE5hbWUgTmFtZSBvZiB0aGUgY29tcG9uZW50IGZvciBlcnJvciBtZXNzYWdlcy5cbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wVHlwZXMgTWFwIG9mIHByb3AgbmFtZSB0byBhIFJlYWN0UHJvcFR5cGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wc1xuICogQHBhcmFtIHtzdHJpbmd9IGxvY2F0aW9uIGUuZy4gXCJwcm9wXCIsIFwiY29udGV4dFwiLCBcImNoaWxkIGNvbnRleHRcIlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY2hlY2tQcm9wVHlwZXMoY29tcG9uZW50TmFtZSwgcHJvcFR5cGVzLCBwcm9wcywgbG9jYXRpb24pIHtcbiAgZm9yICh2YXIgcHJvcE5hbWUgaW4gcHJvcFR5cGVzKSB7XG4gICAgaWYgKHByb3BUeXBlcy5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcbiAgICAgIHZhciBlcnJvcjtcbiAgICAgIC8vIFByb3AgdHlwZSB2YWxpZGF0aW9uIG1heSB0aHJvdy4gSW4gY2FzZSB0aGV5IGRvLCB3ZSBkb24ndCB3YW50IHRvXG4gICAgICAvLyBmYWlsIHRoZSByZW5kZXIgcGhhc2Ugd2hlcmUgaXQgZGlkbid0IGZhaWwgYmVmb3JlLiBTbyB3ZSBsb2cgaXQuXG4gICAgICAvLyBBZnRlciB0aGVzZSBoYXZlIGJlZW4gY2xlYW5lZCB1cCwgd2UnbGwgbGV0IHRoZW0gdGhyb3cuXG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIGlzIGludGVudGlvbmFsbHkgYW4gaW52YXJpYW50IHRoYXQgZ2V0cyBjYXVnaHQuIEl0J3MgdGhlIHNhbWVcbiAgICAgICAgLy8gYmVoYXZpb3IgYXMgd2l0aG91dCB0aGlzIHN0YXRlbWVudCBleGNlcHQgd2l0aCBhIGJldHRlciBtZXNzYWdlLlxuICAgICAgICAhKHR5cGVvZiBwcm9wVHlwZXNbcHJvcE5hbWVdID09PSAnZnVuY3Rpb24nKSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBpbnZhcmlhbnQoZmFsc2UsICclczogJXMgdHlwZSBgJXNgIGlzIGludmFsaWQ7IGl0IG11c3QgYmUgYSBmdW5jdGlvbiwgdXN1YWxseSBmcm9tICcgKyAnUmVhY3QuUHJvcFR5cGVzLicsIGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJywgUmVhY3RQcm9wVHlwZUxvY2F0aW9uTmFtZXNbbG9jYXRpb25dLCBwcm9wTmFtZSkgOiBpbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICAgICAgICBlcnJvciA9IHByb3BUeXBlc1twcm9wTmFtZV0ocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbik7XG4gICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICBlcnJvciA9IGV4O1xuICAgICAgfVxuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IHdhcm5pbmcoIWVycm9yIHx8IGVycm9yIGluc3RhbmNlb2YgRXJyb3IsICclczogdHlwZSBzcGVjaWZpY2F0aW9uIG9mICVzIGAlc2AgaXMgaW52YWxpZDsgdGhlIHR5cGUgY2hlY2tlciAnICsgJ2Z1bmN0aW9uIG11c3QgcmV0dXJuIGBudWxsYCBvciBhbiBgRXJyb3JgIGJ1dCByZXR1cm5lZCBhICVzLiAnICsgJ1lvdSBtYXkgaGF2ZSBmb3Jnb3R0ZW4gdG8gcGFzcyBhbiBhcmd1bWVudCB0byB0aGUgdHlwZSBjaGVja2VyICcgKyAnY3JlYXRvciAoYXJyYXlPZiwgaW5zdGFuY2VPZiwgb2JqZWN0T2YsIG9uZU9mLCBvbmVPZlR5cGUsIGFuZCAnICsgJ3NoYXBlIGFsbCByZXF1aXJlIGFuIGFyZ3VtZW50KS4nLCBjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycsIFJlYWN0UHJvcFR5cGVMb2NhdGlvbk5hbWVzW2xvY2F0aW9uXSwgcHJvcE5hbWUsIHR5cGVvZiBlcnJvcikgOiB2b2lkIDA7XG4gICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvciAmJiAhKGVycm9yLm1lc3NhZ2UgaW4gbG9nZ2VkVHlwZUZhaWx1cmVzKSkge1xuICAgICAgICAvLyBPbmx5IG1vbml0b3IgdGhpcyBmYWlsdXJlIG9uY2UgYmVjYXVzZSB0aGVyZSB0ZW5kcyB0byBiZSBhIGxvdCBvZiB0aGVcbiAgICAgICAgLy8gc2FtZSBlcnJvci5cbiAgICAgICAgbG9nZ2VkVHlwZUZhaWx1cmVzW2Vycm9yLm1lc3NhZ2VdID0gdHJ1ZTtcblxuICAgICAgICB2YXIgYWRkZW5kdW0gPSBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKTtcbiAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IHdhcm5pbmcoZmFsc2UsICdGYWlsZWQgcHJvcFR5cGU6ICVzJXMnLCBlcnJvci5tZXNzYWdlLCBhZGRlbmR1bSkgOiB2b2lkIDA7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogR2l2ZW4gYW4gZWxlbWVudCwgdmFsaWRhdGUgdGhhdCBpdHMgcHJvcHMgZm9sbG93IHRoZSBwcm9wVHlwZXMgZGVmaW5pdGlvbixcbiAqIHByb3ZpZGVkIGJ5IHRoZSB0eXBlLlxuICpcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBlbGVtZW50XG4gKi9cbmZ1bmN0aW9uIHZhbGlkYXRlUHJvcFR5cGVzKGVsZW1lbnQpIHtcbiAgdmFyIGNvbXBvbmVudENsYXNzID0gZWxlbWVudC50eXBlO1xuICBpZiAodHlwZW9mIGNvbXBvbmVudENsYXNzICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBuYW1lID0gY29tcG9uZW50Q2xhc3MuZGlzcGxheU5hbWUgfHwgY29tcG9uZW50Q2xhc3MubmFtZTtcbiAgaWYgKGNvbXBvbmVudENsYXNzLnByb3BUeXBlcykge1xuICAgIGNoZWNrUHJvcFR5cGVzKG5hbWUsIGNvbXBvbmVudENsYXNzLnByb3BUeXBlcywgZWxlbWVudC5wcm9wcywgUmVhY3RQcm9wVHlwZUxvY2F0aW9ucy5wcm9wKTtcbiAgfVxuICBpZiAodHlwZW9mIGNvbXBvbmVudENsYXNzLmdldERlZmF1bHRQcm9wcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyB3YXJuaW5nKGNvbXBvbmVudENsYXNzLmdldERlZmF1bHRQcm9wcy5pc1JlYWN0Q2xhc3NBcHByb3ZlZCwgJ2dldERlZmF1bHRQcm9wcyBpcyBvbmx5IHVzZWQgb24gY2xhc3NpYyBSZWFjdC5jcmVhdGVDbGFzcyAnICsgJ2RlZmluaXRpb25zLiBVc2UgYSBzdGF0aWMgcHJvcGVydHkgbmFtZWQgYGRlZmF1bHRQcm9wc2AgaW5zdGVhZC4nKSA6IHZvaWQgMDtcbiAgfVxufVxuXG52YXIgUmVhY3RFbGVtZW50VmFsaWRhdG9yID0ge1xuXG4gIGNyZWF0ZUVsZW1lbnQ6IGZ1bmN0aW9uICh0eXBlLCBwcm9wcywgY2hpbGRyZW4pIHtcbiAgICB2YXIgdmFsaWRUeXBlID0gdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nO1xuICAgIC8vIFdlIHdhcm4gaW4gdGhpcyBjYXNlIGJ1dCBkb24ndCB0aHJvdy4gV2UgZXhwZWN0IHRoZSBlbGVtZW50IGNyZWF0aW9uIHRvXG4gICAgLy8gc3VjY2VlZCBhbmQgdGhlcmUgd2lsbCBsaWtlbHkgYmUgZXJyb3JzIGluIHJlbmRlci5cbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gd2FybmluZyh2YWxpZFR5cGUsICdSZWFjdC5jcmVhdGVFbGVtZW50OiB0eXBlIHNob3VsZCBub3QgYmUgbnVsbCwgdW5kZWZpbmVkLCBib29sZWFuLCBvciAnICsgJ251bWJlci4gSXQgc2hvdWxkIGJlIGEgc3RyaW5nIChmb3IgRE9NIGVsZW1lbnRzKSBvciBhIFJlYWN0Q2xhc3MgJyArICcoZm9yIGNvbXBvc2l0ZSBjb21wb25lbnRzKS4lcycsIGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpKSA6IHZvaWQgMDtcblxuICAgIHZhciBlbGVtZW50ID0gUmVhY3RFbGVtZW50LmNyZWF0ZUVsZW1lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblxuICAgIC8vIFRoZSByZXN1bHQgY2FuIGJlIG51bGxpc2ggaWYgYSBtb2NrIG9yIGEgY3VzdG9tIGZ1bmN0aW9uIGlzIHVzZWQuXG4gICAgLy8gVE9ETzogRHJvcCB0aGlzIHdoZW4gdGhlc2UgYXJlIG5vIGxvbmdlciBhbGxvd2VkIGFzIHRoZSB0eXBlIGFyZ3VtZW50LlxuICAgIGlmIChlbGVtZW50ID09IG51bGwpIHtcbiAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cblxuICAgIC8vIFNraXAga2V5IHdhcm5pbmcgaWYgdGhlIHR5cGUgaXNuJ3QgdmFsaWQgc2luY2Ugb3VyIGtleSB2YWxpZGF0aW9uIGxvZ2ljXG4gICAgLy8gZG9lc24ndCBleHBlY3QgYSBub24tc3RyaW5nL2Z1bmN0aW9uIHR5cGUgYW5kIGNhbiB0aHJvdyBjb25mdXNpbmcgZXJyb3JzLlxuICAgIC8vIFdlIGRvbid0IHdhbnQgZXhjZXB0aW9uIGJlaGF2aW9yIHRvIGRpZmZlciBiZXR3ZWVuIGRldiBhbmQgcHJvZC5cbiAgICAvLyAoUmVuZGVyaW5nIHdpbGwgdGhyb3cgd2l0aCBhIGhlbHBmdWwgbWVzc2FnZSBhbmQgYXMgc29vbiBhcyB0aGUgdHlwZSBpc1xuICAgIC8vIGZpeGVkLCB0aGUga2V5IHdhcm5pbmdzIHdpbGwgYXBwZWFyLilcbiAgICBpZiAodmFsaWRUeXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMjsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YWxpZGF0ZUNoaWxkS2V5cyhhcmd1bWVudHNbaV0sIHR5cGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhbGlkYXRlUHJvcFR5cGVzKGVsZW1lbnQpO1xuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH0sXG5cbiAgY3JlYXRlRmFjdG9yeTogZnVuY3Rpb24gKHR5cGUpIHtcbiAgICB2YXIgdmFsaWRhdGVkRmFjdG9yeSA9IFJlYWN0RWxlbWVudFZhbGlkYXRvci5jcmVhdGVFbGVtZW50LmJpbmQobnVsbCwgdHlwZSk7XG4gICAgLy8gTGVnYWN5IGhvb2sgVE9ETzogV2FybiBpZiB0aGlzIGlzIGFjY2Vzc2VkXG4gICAgdmFsaWRhdGVkRmFjdG9yeS50eXBlID0gdHlwZTtcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAoY2FuRGVmaW5lUHJvcGVydHkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHZhbGlkYXRlZEZhY3RvcnksICd0eXBlJywge1xuICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IHdhcm5pbmcoZmFsc2UsICdGYWN0b3J5LnR5cGUgaXMgZGVwcmVjYXRlZC4gQWNjZXNzIHRoZSBjbGFzcyBkaXJlY3RseSAnICsgJ2JlZm9yZSBwYXNzaW5nIGl0IHRvIGNyZWF0ZUZhY3RvcnkuJykgOiB2b2lkIDA7XG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ3R5cGUnLCB7XG4gICAgICAgICAgICAgIHZhbHVlOiB0eXBlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiB0eXBlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlZEZhY3Rvcnk7XG4gIH0sXG5cbiAgY2xvbmVFbGVtZW50OiBmdW5jdGlvbiAoZWxlbWVudCwgcHJvcHMsIGNoaWxkcmVuKSB7XG4gICAgdmFyIG5ld0VsZW1lbnQgPSBSZWFjdEVsZW1lbnQuY2xvbmVFbGVtZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgZm9yICh2YXIgaSA9IDI7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhbGlkYXRlQ2hpbGRLZXlzKGFyZ3VtZW50c1tpXSwgbmV3RWxlbWVudC50eXBlKTtcbiAgICB9XG4gICAgdmFsaWRhdGVQcm9wVHlwZXMobmV3RWxlbWVudCk7XG4gICAgcmV0dXJuIG5ld0VsZW1lbnQ7XG4gIH1cblxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdEVsZW1lbnRWYWxpZGF0b3I7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QvbGliL1JlYWN0RWxlbWVudFZhbGlkYXRvci5qc1xuICoqIG1vZHVsZSBpZCA9IDM0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBFeGVjdXRlcyB0aGUgcHJvdmlkZWQgYGNhbGxiYWNrYCBvbmNlIGZvciBlYWNoIGVudW1lcmFibGUgb3duIHByb3BlcnR5IGluIHRoZVxuICogb2JqZWN0IGFuZCBjb25zdHJ1Y3RzIGEgbmV3IG9iamVjdCBmcm9tIHRoZSByZXN1bHRzLiBUaGUgYGNhbGxiYWNrYCBpc1xuICogaW52b2tlZCB3aXRoIHRocmVlIGFyZ3VtZW50czpcbiAqXG4gKiAgLSB0aGUgcHJvcGVydHkgdmFsdWVcbiAqICAtIHRoZSBwcm9wZXJ0eSBuYW1lXG4gKiAgLSB0aGUgb2JqZWN0IGJlaW5nIHRyYXZlcnNlZFxuICpcbiAqIFByb3BlcnRpZXMgdGhhdCBhcmUgYWRkZWQgYWZ0ZXIgdGhlIGNhbGwgdG8gYG1hcE9iamVjdGAgd2lsbCBub3QgYmUgdmlzaXRlZFxuICogYnkgYGNhbGxiYWNrYC4gSWYgdGhlIHZhbHVlcyBvZiBleGlzdGluZyBwcm9wZXJ0aWVzIGFyZSBjaGFuZ2VkLCB0aGUgdmFsdWVcbiAqIHBhc3NlZCB0byBgY2FsbGJhY2tgIHdpbGwgYmUgdGhlIHZhbHVlIGF0IHRoZSB0aW1lIGBtYXBPYmplY3RgIHZpc2l0cyB0aGVtLlxuICogUHJvcGVydGllcyB0aGF0IGFyZSBkZWxldGVkIGJlZm9yZSBiZWluZyB2aXNpdGVkIGFyZSBub3QgdmlzaXRlZC5cbiAqXG4gKiBAZ3JlcCBmdW5jdGlvbiBvYmplY3RNYXAoKVxuICogQGdyZXAgZnVuY3Rpb24gb2JqTWFwKClcbiAqXG4gKiBAcGFyYW0gez9vYmplY3R9IG9iamVjdFxuICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEBwYXJhbSB7Kn0gY29udGV4dFxuICogQHJldHVybiB7P29iamVjdH1cbiAqL1xuZnVuY3Rpb24gbWFwT2JqZWN0KG9iamVjdCwgY2FsbGJhY2ssIGNvbnRleHQpIHtcbiAgaWYgKCFvYmplY3QpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICB2YXIgcmVzdWx0ID0ge307XG4gIGZvciAodmFyIG5hbWUgaW4gb2JqZWN0KSB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBuYW1lKSkge1xuICAgICAgcmVzdWx0W25hbWVdID0gY2FsbGJhY2suY2FsbChjb250ZXh0LCBvYmplY3RbbmFtZV0sIG5hbWUsIG9iamVjdCk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwT2JqZWN0O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2ZianMvbGliL21hcE9iamVjdC5qc1xuICoqIG1vZHVsZSBpZCA9IDM1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENvcHlyaWdodCAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAcHJvdmlkZXNNb2R1bGUgUmVhY3RQcm9wVHlwZXNcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdEVsZW1lbnQgPSByZXF1aXJlKCcuL1JlYWN0RWxlbWVudCcpO1xudmFyIFJlYWN0UHJvcFR5cGVMb2NhdGlvbk5hbWVzID0gcmVxdWlyZSgnLi9SZWFjdFByb3BUeXBlTG9jYXRpb25OYW1lcycpO1xuXG52YXIgZW1wdHlGdW5jdGlvbiA9IHJlcXVpcmUoJ2ZianMvbGliL2VtcHR5RnVuY3Rpb24nKTtcbnZhciBnZXRJdGVyYXRvckZuID0gcmVxdWlyZSgnLi9nZXRJdGVyYXRvckZuJyk7XG5cbi8qKlxuICogQ29sbGVjdGlvbiBvZiBtZXRob2RzIHRoYXQgYWxsb3cgZGVjbGFyYXRpb24gYW5kIHZhbGlkYXRpb24gb2YgcHJvcHMgdGhhdCBhcmVcbiAqIHN1cHBsaWVkIHRvIFJlYWN0IGNvbXBvbmVudHMuIEV4YW1wbGUgdXNhZ2U6XG4gKlxuICogICB2YXIgUHJvcHMgPSByZXF1aXJlKCdSZWFjdFByb3BUeXBlcycpO1xuICogICB2YXIgTXlBcnRpY2xlID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICogICAgIHByb3BUeXBlczoge1xuICogICAgICAgLy8gQW4gb3B0aW9uYWwgc3RyaW5nIHByb3AgbmFtZWQgXCJkZXNjcmlwdGlvblwiLlxuICogICAgICAgZGVzY3JpcHRpb246IFByb3BzLnN0cmluZyxcbiAqXG4gKiAgICAgICAvLyBBIHJlcXVpcmVkIGVudW0gcHJvcCBuYW1lZCBcImNhdGVnb3J5XCIuXG4gKiAgICAgICBjYXRlZ29yeTogUHJvcHMub25lT2YoWydOZXdzJywnUGhvdG9zJ10pLmlzUmVxdWlyZWQsXG4gKlxuICogICAgICAgLy8gQSBwcm9wIG5hbWVkIFwiZGlhbG9nXCIgdGhhdCByZXF1aXJlcyBhbiBpbnN0YW5jZSBvZiBEaWFsb2cuXG4gKiAgICAgICBkaWFsb2c6IFByb3BzLmluc3RhbmNlT2YoRGlhbG9nKS5pc1JlcXVpcmVkXG4gKiAgICAgfSxcbiAqICAgICByZW5kZXI6IGZ1bmN0aW9uKCkgeyAuLi4gfVxuICogICB9KTtcbiAqXG4gKiBBIG1vcmUgZm9ybWFsIHNwZWNpZmljYXRpb24gb2YgaG93IHRoZXNlIG1ldGhvZHMgYXJlIHVzZWQ6XG4gKlxuICogICB0eXBlIDo9IGFycmF5fGJvb2x8ZnVuY3xvYmplY3R8bnVtYmVyfHN0cmluZ3xvbmVPZihbLi4uXSl8aW5zdGFuY2VPZiguLi4pXG4gKiAgIGRlY2wgOj0gUmVhY3RQcm9wVHlwZXMue3R5cGV9KC5pc1JlcXVpcmVkKT9cbiAqXG4gKiBFYWNoIGFuZCBldmVyeSBkZWNsYXJhdGlvbiBwcm9kdWNlcyBhIGZ1bmN0aW9uIHdpdGggdGhlIHNhbWUgc2lnbmF0dXJlLiBUaGlzXG4gKiBhbGxvd3MgdGhlIGNyZWF0aW9uIG9mIGN1c3RvbSB2YWxpZGF0aW9uIGZ1bmN0aW9ucy4gRm9yIGV4YW1wbGU6XG4gKlxuICogIHZhciBNeUxpbmsgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gKiAgICBwcm9wVHlwZXM6IHtcbiAqICAgICAgLy8gQW4gb3B0aW9uYWwgc3RyaW5nIG9yIFVSSSBwcm9wIG5hbWVkIFwiaHJlZlwiLlxuICogICAgICBocmVmOiBmdW5jdGlvbihwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpIHtcbiAqICAgICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICogICAgICAgIGlmIChwcm9wVmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgcHJvcFZhbHVlICE9PSAnc3RyaW5nJyAmJlxuICogICAgICAgICAgICAhKHByb3BWYWx1ZSBpbnN0YW5jZW9mIFVSSSkpIHtcbiAqICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IoXG4gKiAgICAgICAgICAgICdFeHBlY3RlZCBhIHN0cmluZyBvciBhbiBVUkkgZm9yICcgKyBwcm9wTmFtZSArICcgaW4gJyArXG4gKiAgICAgICAgICAgIGNvbXBvbmVudE5hbWVcbiAqICAgICAgICAgICk7XG4gKiAgICAgICAgfVxuICogICAgICB9XG4gKiAgICB9LFxuICogICAgcmVuZGVyOiBmdW5jdGlvbigpIHsuLi59XG4gKiAgfSk7XG4gKlxuICogQGludGVybmFsXG4gKi9cblxudmFyIEFOT05ZTU9VUyA9ICc8PGFub255bW91cz4+JztcblxudmFyIFJlYWN0UHJvcFR5cGVzID0ge1xuICBhcnJheTogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2FycmF5JyksXG4gIGJvb2w6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdib29sZWFuJyksXG4gIGZ1bmM6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdmdW5jdGlvbicpLFxuICBudW1iZXI6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdudW1iZXInKSxcbiAgb2JqZWN0OiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignb2JqZWN0JyksXG4gIHN0cmluZzogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ3N0cmluZycpLFxuXG4gIGFueTogY3JlYXRlQW55VHlwZUNoZWNrZXIoKSxcbiAgYXJyYXlPZjogY3JlYXRlQXJyYXlPZlR5cGVDaGVja2VyLFxuICBlbGVtZW50OiBjcmVhdGVFbGVtZW50VHlwZUNoZWNrZXIoKSxcbiAgaW5zdGFuY2VPZjogY3JlYXRlSW5zdGFuY2VUeXBlQ2hlY2tlcixcbiAgbm9kZTogY3JlYXRlTm9kZUNoZWNrZXIoKSxcbiAgb2JqZWN0T2Y6IGNyZWF0ZU9iamVjdE9mVHlwZUNoZWNrZXIsXG4gIG9uZU9mOiBjcmVhdGVFbnVtVHlwZUNoZWNrZXIsXG4gIG9uZU9mVHlwZTogY3JlYXRlVW5pb25UeXBlQ2hlY2tlcixcbiAgc2hhcGU6IGNyZWF0ZVNoYXBlVHlwZUNoZWNrZXJcbn07XG5cbi8qKlxuICogaW5saW5lZCBPYmplY3QuaXMgcG9seWZpbGwgdG8gYXZvaWQgcmVxdWlyaW5nIGNvbnN1bWVycyBzaGlwIHRoZWlyIG93blxuICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvT2JqZWN0L2lzXG4gKi9cbi8qZXNsaW50LWRpc2FibGUgbm8tc2VsZi1jb21wYXJlKi9cbmZ1bmN0aW9uIGlzKHgsIHkpIHtcbiAgLy8gU2FtZVZhbHVlIGFsZ29yaXRobVxuICBpZiAoeCA9PT0geSkge1xuICAgIC8vIFN0ZXBzIDEtNSwgNy0xMFxuICAgIC8vIFN0ZXBzIDYuYi02LmU6ICswICE9IC0wXG4gICAgcmV0dXJuIHggIT09IDAgfHwgMSAvIHggPT09IDEgLyB5O1xuICB9IGVsc2Uge1xuICAgIC8vIFN0ZXAgNi5hOiBOYU4gPT0gTmFOXG4gICAgcmV0dXJuIHggIT09IHggJiYgeSAhPT0geTtcbiAgfVxufVxuLyplc2xpbnQtZW5hYmxlIG5vLXNlbGYtY29tcGFyZSovXG5cbmZ1bmN0aW9uIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKSB7XG4gIGZ1bmN0aW9uIGNoZWNrVHlwZShpc1JlcXVpcmVkLCBwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICBjb21wb25lbnROYW1lID0gY29tcG9uZW50TmFtZSB8fCBBTk9OWU1PVVM7XG4gICAgcHJvcEZ1bGxOYW1lID0gcHJvcEZ1bGxOYW1lIHx8IHByb3BOYW1lO1xuICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT0gbnVsbCkge1xuICAgICAgdmFyIGxvY2F0aW9uTmFtZSA9IFJlYWN0UHJvcFR5cGVMb2NhdGlvbk5hbWVzW2xvY2F0aW9uXTtcbiAgICAgIGlmIChpc1JlcXVpcmVkKSB7XG4gICAgICAgIHJldHVybiBuZXcgRXJyb3IoJ1JlcXVpcmVkICcgKyBsb2NhdGlvbk5hbWUgKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agd2FzIG5vdCBzcGVjaWZpZWQgaW4gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBjaGFpbmVkQ2hlY2tUeXBlID0gY2hlY2tUeXBlLmJpbmQobnVsbCwgZmFsc2UpO1xuICBjaGFpbmVkQ2hlY2tUeXBlLmlzUmVxdWlyZWQgPSBjaGVja1R5cGUuYmluZChudWxsLCB0cnVlKTtcblxuICByZXR1cm4gY2hhaW5lZENoZWNrVHlwZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoZXhwZWN0ZWRUeXBlKSB7XG4gIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICBpZiAocHJvcFR5cGUgIT09IGV4cGVjdGVkVHlwZSkge1xuICAgICAgdmFyIGxvY2F0aW9uTmFtZSA9IFJlYWN0UHJvcFR5cGVMb2NhdGlvbk5hbWVzW2xvY2F0aW9uXTtcbiAgICAgIC8vIGBwcm9wVmFsdWVgIGJlaW5nIGluc3RhbmNlIG9mLCBzYXksIGRhdGUvcmVnZXhwLCBwYXNzIHRoZSAnb2JqZWN0J1xuICAgICAgLy8gY2hlY2ssIGJ1dCB3ZSBjYW4gb2ZmZXIgYSBtb3JlIHByZWNpc2UgZXJyb3IgbWVzc2FnZSBoZXJlIHJhdGhlciB0aGFuXG4gICAgICAvLyAnb2YgdHlwZSBgb2JqZWN0YCcuXG4gICAgICB2YXIgcHJlY2lzZVR5cGUgPSBnZXRQcmVjaXNlVHlwZShwcm9wVmFsdWUpO1xuXG4gICAgICByZXR1cm4gbmV3IEVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbk5hbWUgKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByZWNpc2VUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkICcpICsgKCdgJyArIGV4cGVjdGVkVHlwZSArICdgLicpKTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQW55VHlwZUNoZWNrZXIoKSB7XG4gIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcihlbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zKG51bGwpKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQXJyYXlPZlR5cGVDaGVja2VyKHR5cGVDaGVja2VyKSB7XG4gIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgIGlmICh0eXBlb2YgdHlwZUNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoJ1Byb3BlcnR5IGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgY29tcG9uZW50IGAnICsgY29tcG9uZW50TmFtZSArICdgIGhhcyBpbnZhbGlkIFByb3BUeXBlIG5vdGF0aW9uIGluc2lkZSBhcnJheU9mLicpO1xuICAgIH1cbiAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgIGlmICghQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG4gICAgICB2YXIgbG9jYXRpb25OYW1lID0gUmVhY3RQcm9wVHlwZUxvY2F0aW9uTmFtZXNbbG9jYXRpb25dO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uTmFtZSArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYW4gYXJyYXkuJykpO1xuICAgIH1cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BWYWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGVycm9yID0gdHlwZUNoZWNrZXIocHJvcFZhbHVlLCBpLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJ1snICsgaSArICddJyk7XG4gICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRUeXBlQ2hlY2tlcigpIHtcbiAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgaWYgKCFSZWFjdEVsZW1lbnQuaXNWYWxpZEVsZW1lbnQocHJvcHNbcHJvcE5hbWVdKSkge1xuICAgICAgdmFyIGxvY2F0aW9uTmFtZSA9IFJlYWN0UHJvcFR5cGVMb2NhdGlvbk5hbWVzW2xvY2F0aW9uXTtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uTmFtZSArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBzdXBwbGllZCB0byAnICsgKCdgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYSBzaW5nbGUgUmVhY3RFbGVtZW50LicpKTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSW5zdGFuY2VUeXBlQ2hlY2tlcihleHBlY3RlZENsYXNzKSB7XG4gIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgIGlmICghKHByb3BzW3Byb3BOYW1lXSBpbnN0YW5jZW9mIGV4cGVjdGVkQ2xhc3MpKSB7XG4gICAgICB2YXIgbG9jYXRpb25OYW1lID0gUmVhY3RQcm9wVHlwZUxvY2F0aW9uTmFtZXNbbG9jYXRpb25dO1xuICAgICAgdmFyIGV4cGVjdGVkQ2xhc3NOYW1lID0gZXhwZWN0ZWRDbGFzcy5uYW1lIHx8IEFOT05ZTU9VUztcbiAgICAgIHZhciBhY3R1YWxDbGFzc05hbWUgPSBnZXRDbGFzc05hbWUocHJvcHNbcHJvcE5hbWVdKTtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uTmFtZSArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgYWN0dWFsQ2xhc3NOYW1lICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkICcpICsgKCdpbnN0YW5jZSBvZiBgJyArIGV4cGVjdGVkQ2xhc3NOYW1lICsgJ2AuJykpO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVFbnVtVHlwZUNoZWNrZXIoZXhwZWN0ZWRWYWx1ZXMpIHtcbiAgaWYgKCFBcnJheS5pc0FycmF5KGV4cGVjdGVkVmFsdWVzKSkge1xuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcihmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKCdJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIG9uZU9mLCBleHBlY3RlZCBhbiBpbnN0YW5jZSBvZiBhcnJheS4nKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBleHBlY3RlZFZhbHVlcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGlzKHByb3BWYWx1ZSwgZXhwZWN0ZWRWYWx1ZXNbaV0pKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBsb2NhdGlvbk5hbWUgPSBSZWFjdFByb3BUeXBlTG9jYXRpb25OYW1lc1tsb2NhdGlvbl07XG4gICAgdmFyIHZhbHVlc1N0cmluZyA9IEpTT04uc3RyaW5naWZ5KGV4cGVjdGVkVmFsdWVzKTtcbiAgICByZXR1cm4gbmV3IEVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbk5hbWUgKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdmFsdWUgYCcgKyBwcm9wVmFsdWUgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgb25lIG9mICcgKyB2YWx1ZXNTdHJpbmcgKyAnLicpKTtcbiAgfVxuICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVPYmplY3RPZlR5cGVDaGVja2VyKHR5cGVDaGVja2VyKSB7XG4gIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgIGlmICh0eXBlb2YgdHlwZUNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoJ1Byb3BlcnR5IGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgY29tcG9uZW50IGAnICsgY29tcG9uZW50TmFtZSArICdgIGhhcyBpbnZhbGlkIFByb3BUeXBlIG5vdGF0aW9uIGluc2lkZSBvYmplY3RPZi4nKTtcbiAgICB9XG4gICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgIHZhciBsb2NhdGlvbk5hbWUgPSBSZWFjdFByb3BUeXBlTG9jYXRpb25OYW1lc1tsb2NhdGlvbl07XG4gICAgICByZXR1cm4gbmV3IEVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbk5hbWUgKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGFuIG9iamVjdC4nKSk7XG4gICAgfVxuICAgIGZvciAodmFyIGtleSBpbiBwcm9wVmFsdWUpIHtcbiAgICAgIGlmIChwcm9wVmFsdWUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICB2YXIgZXJyb3IgPSB0eXBlQ2hlY2tlcihwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICcuJyArIGtleSk7XG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVVuaW9uVHlwZUNoZWNrZXIoYXJyYXlPZlR5cGVDaGVja2Vycykge1xuICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyYXlPZlR5cGVDaGVja2VycykpIHtcbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIoZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcignSW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCB0byBvbmVPZlR5cGUsIGV4cGVjdGVkIGFuIGluc3RhbmNlIG9mIGFycmF5LicpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheU9mVHlwZUNoZWNrZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgY2hlY2tlciA9IGFycmF5T2ZUeXBlQ2hlY2tlcnNbaV07XG4gICAgICBpZiAoY2hlY2tlcihwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGxvY2F0aW9uTmFtZSA9IFJlYWN0UHJvcFR5cGVMb2NhdGlvbk5hbWVzW2xvY2F0aW9uXTtcbiAgICByZXR1cm4gbmV3IEVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbk5hbWUgKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agc3VwcGxpZWQgdG8gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AuJykpO1xuICB9XG4gIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5vZGVDaGVja2VyKCkge1xuICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICBpZiAoIWlzTm9kZShwcm9wc1twcm9wTmFtZV0pKSB7XG4gICAgICB2YXIgbG9jYXRpb25OYW1lID0gUmVhY3RQcm9wVHlwZUxvY2F0aW9uTmFtZXNbbG9jYXRpb25dO1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb25OYW1lICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIHN1cHBsaWVkIHRvICcgKyAoJ2AnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhIFJlYWN0Tm9kZS4nKSk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVNoYXBlVHlwZUNoZWNrZXIoc2hhcGVUeXBlcykge1xuICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgaWYgKHByb3BUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgdmFyIGxvY2F0aW9uTmFtZSA9IFJlYWN0UHJvcFR5cGVMb2NhdGlvbk5hbWVzW2xvY2F0aW9uXTtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uTmFtZSArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlIGAnICsgcHJvcFR5cGUgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYG9iamVjdGAuJykpO1xuICAgIH1cbiAgICBmb3IgKHZhciBrZXkgaW4gc2hhcGVUeXBlcykge1xuICAgICAgdmFyIGNoZWNrZXIgPSBzaGFwZVR5cGVzW2tleV07XG4gICAgICBpZiAoIWNoZWNrZXIpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICB2YXIgZXJyb3IgPSBjaGVja2VyKHByb3BWYWx1ZSwga2V5LCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJy4nICsga2V5KTtcbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG59XG5cbmZ1bmN0aW9uIGlzTm9kZShwcm9wVmFsdWUpIHtcbiAgc3dpdGNoICh0eXBlb2YgcHJvcFZhbHVlKSB7XG4gICAgY2FzZSAnbnVtYmVyJzpcbiAgICBjYXNlICdzdHJpbmcnOlxuICAgIGNhc2UgJ3VuZGVmaW5lZCc6XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICBjYXNlICdib29sZWFuJzpcbiAgICAgIHJldHVybiAhcHJvcFZhbHVlO1xuICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG4gICAgICAgIHJldHVybiBwcm9wVmFsdWUuZXZlcnkoaXNOb2RlKTtcbiAgICAgIH1cbiAgICAgIGlmIChwcm9wVmFsdWUgPT09IG51bGwgfHwgUmVhY3RFbGVtZW50LmlzVmFsaWRFbGVtZW50KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihwcm9wVmFsdWUpO1xuICAgICAgaWYgKGl0ZXJhdG9yRm4pIHtcbiAgICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKHByb3BWYWx1ZSk7XG4gICAgICAgIHZhciBzdGVwO1xuICAgICAgICBpZiAoaXRlcmF0b3JGbiAhPT0gcHJvcFZhbHVlLmVudHJpZXMpIHtcbiAgICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgICBpZiAoIWlzTm9kZShzdGVwLnZhbHVlKSkge1xuICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIEl0ZXJhdG9yIHdpbGwgcHJvdmlkZSBlbnRyeSBbayx2XSB0dXBsZXMgcmF0aGVyIHRoYW4gdmFsdWVzLlxuICAgICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICAgIHZhciBlbnRyeSA9IHN0ZXAudmFsdWU7XG4gICAgICAgICAgICBpZiAoZW50cnkpIHtcbiAgICAgICAgICAgICAgaWYgKCFpc05vZGUoZW50cnlbMV0pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuLy8gRXF1aXZhbGVudCBvZiBgdHlwZW9mYCBidXQgd2l0aCBzcGVjaWFsIGhhbmRsaW5nIGZvciBhcnJheSBhbmQgcmVnZXhwLlxuZnVuY3Rpb24gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKSB7XG4gIHZhciBwcm9wVHlwZSA9IHR5cGVvZiBwcm9wVmFsdWU7XG4gIGlmIChBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkpIHtcbiAgICByZXR1cm4gJ2FycmF5JztcbiAgfVxuICBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgLy8gT2xkIHdlYmtpdHMgKGF0IGxlYXN0IHVudGlsIEFuZHJvaWQgNC4wKSByZXR1cm4gJ2Z1bmN0aW9uJyByYXRoZXIgdGhhblxuICAgIC8vICdvYmplY3QnIGZvciB0eXBlb2YgYSBSZWdFeHAuIFdlJ2xsIG5vcm1hbGl6ZSB0aGlzIGhlcmUgc28gdGhhdCAvYmxhL1xuICAgIC8vIHBhc3NlcyBQcm9wVHlwZXMub2JqZWN0LlxuICAgIHJldHVybiAnb2JqZWN0JztcbiAgfVxuICByZXR1cm4gcHJvcFR5cGU7XG59XG5cbi8vIFRoaXMgaGFuZGxlcyBtb3JlIHR5cGVzIHRoYW4gYGdldFByb3BUeXBlYC4gT25seSB1c2VkIGZvciBlcnJvciBtZXNzYWdlcy5cbi8vIFNlZSBgY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXJgLlxuZnVuY3Rpb24gZ2V0UHJlY2lzZVR5cGUocHJvcFZhbHVlKSB7XG4gIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gIGlmIChwcm9wVHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgcmV0dXJuICdkYXRlJztcbiAgICB9IGVsc2UgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgICAgcmV0dXJuICdyZWdleHAnO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcHJvcFR5cGU7XG59XG5cbi8vIFJldHVybnMgY2xhc3MgbmFtZSBvZiB0aGUgb2JqZWN0LCBpZiBhbnkuXG5mdW5jdGlvbiBnZXRDbGFzc05hbWUocHJvcFZhbHVlKSB7XG4gIGlmICghcHJvcFZhbHVlLmNvbnN0cnVjdG9yIHx8ICFwcm9wVmFsdWUuY29uc3RydWN0b3IubmFtZSkge1xuICAgIHJldHVybiBBTk9OWU1PVVM7XG4gIH1cbiAgcmV0dXJuIHByb3BWYWx1ZS5jb25zdHJ1Y3Rvci5uYW1lO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0UHJvcFR5cGVzO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0L2xpYi9SZWFjdFByb3BUeXBlcy5qc1xuICoqIG1vZHVsZSBpZCA9IDM2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENvcHlyaWdodCAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAcHJvdmlkZXNNb2R1bGUgUmVhY3RWZXJzaW9uXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9ICcxNS4xLjAnO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0L2xpYi9SZWFjdFZlcnNpb24uanNcbiAqKiBtb2R1bGUgaWQgPSAzN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHByb3ZpZGVzTW9kdWxlIG9ubHlDaGlsZFxuICovXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdEVsZW1lbnQgPSByZXF1aXJlKCcuL1JlYWN0RWxlbWVudCcpO1xuXG52YXIgaW52YXJpYW50ID0gcmVxdWlyZSgnZmJqcy9saWIvaW52YXJpYW50Jyk7XG5cbi8qKlxuICogUmV0dXJucyB0aGUgZmlyc3QgY2hpbGQgaW4gYSBjb2xsZWN0aW9uIG9mIGNoaWxkcmVuIGFuZCB2ZXJpZmllcyB0aGF0IHRoZXJlXG4gKiBpcyBvbmx5IG9uZSBjaGlsZCBpbiB0aGUgY29sbGVjdGlvbi5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9mYWNlYm9vay5naXRodWIuaW8vcmVhY3QvZG9jcy90b3AtbGV2ZWwtYXBpLmh0bWwjcmVhY3QuY2hpbGRyZW4ub25seVxuICpcbiAqIFRoZSBjdXJyZW50IGltcGxlbWVudGF0aW9uIG9mIHRoaXMgZnVuY3Rpb24gYXNzdW1lcyB0aGF0IGEgc2luZ2xlIGNoaWxkIGdldHNcbiAqIHBhc3NlZCB3aXRob3V0IGEgd3JhcHBlciwgYnV0IHRoZSBwdXJwb3NlIG9mIHRoaXMgaGVscGVyIGZ1bmN0aW9uIGlzIHRvXG4gKiBhYnN0cmFjdCBhd2F5IHRoZSBwYXJ0aWN1bGFyIHN0cnVjdHVyZSBvZiBjaGlsZHJlbi5cbiAqXG4gKiBAcGFyYW0gez9vYmplY3R9IGNoaWxkcmVuIENoaWxkIGNvbGxlY3Rpb24gc3RydWN0dXJlLlxuICogQHJldHVybiB7UmVhY3RFbGVtZW50fSBUaGUgZmlyc3QgYW5kIG9ubHkgYFJlYWN0RWxlbWVudGAgY29udGFpbmVkIGluIHRoZVxuICogc3RydWN0dXJlLlxuICovXG5mdW5jdGlvbiBvbmx5Q2hpbGQoY2hpbGRyZW4pIHtcbiAgIVJlYWN0RWxlbWVudC5pc1ZhbGlkRWxlbWVudChjaGlsZHJlbikgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gaW52YXJpYW50KGZhbHNlLCAnb25seUNoaWxkIG11c3QgYmUgcGFzc2VkIGEgY2hpbGRyZW4gd2l0aCBleGFjdGx5IG9uZSBjaGlsZC4nKSA6IGludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gIHJldHVybiBjaGlsZHJlbjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBvbmx5Q2hpbGQ7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QvbGliL29ubHlDaGlsZC5qc1xuICoqIG1vZHVsZSBpZCA9IDM4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY2xhc3MgUHJvZ3Jlc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpe1xyXG4gICAgICAgIGxldCBjb2xvcnMgPSB0aGlzLnByb3BzLmNvbG9ycztcclxuICAgICAgICBpZiggIWNvbG9ycy5zdGFydCB8fCAhY29sb3JzLmVuZCB8fCAhY29sb3JzLmJhY2sgKVxyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCBcIkNvbG9ycyBwcm9wIG11c3QgaGF2ZSBcXFwic3RhcnRcXFwiLCBcXFwiZW5kXFxcIiBhbmQgXFxcImJhY2tcXFwiIGF0dHJpYnV0ZXMuXCIgKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpe31cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBsZXQgdmFsdWUgPSAxMDAvcGFyc2VJbnQodGhpcy5wcm9wcy5tYXgpKnRoaXMucHJvcHMudmFsdWU7XHJcbiAgICAgICAgbGV0IHN0eWxlID0ge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICR7dGhpcy5wcm9wcy5jb2xvcnMuc3RhcnR9IDAlLCAke3RoaXMucHJvcHMuY29sb3JzLmVuZH0gJHt2YWx1ZX0lLCAke3RoaXMucHJvcHMuY29sb3JzLmJhY2t9ICR7dmFsdWV9JSwgJHt0aGlzLnByb3BzLmNvbG9ycy5iYWNrfSApYFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwicmFuZ2VcIlxyXG4gICAgICAgICAgICAgICAgc3RlcD17dGhpcy5wcm9wcy5zdGVwfVxyXG4gICAgICAgICAgICAgICAgbWluPXt0aGlzLnByb3BzLm1pbn1cclxuICAgICAgICAgICAgICAgIG1heD17dGhpcy5wcm9wcy5tYXh9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5wcm9wcy52YWx1ZX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc05hbWV9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17c3R5bGV9XHJcbiAgICAgICAgICAgICAgICByZWY9eyByZWYgPT4gdGhpcy5fcHJvZ3Jlc3MgPSByZWYgfVxyXG4gICAgICAgICAgICAgICAgey4uLnRoaXMucHJvcHMuYXR0cmlidXRlc31cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuUHJvZ3Jlc3MucHJvcFR5cGVzID0ge1xyXG4gICAgc3RlcDogUmVhY3QuUHJvcFR5cGVzLm9uZU9mVHlwZShbXHJcbiAgICAgICAgUmVhY3QuUHJvcFR5cGVzLm51bWJlcixcclxuICAgICAgICBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nXHJcbiAgICBdKSxcclxuICAgIG1pbjogUmVhY3QuUHJvcFR5cGVzLm9uZU9mVHlwZShbXHJcbiAgICAgICAgUmVhY3QuUHJvcFR5cGVzLm51bWJlcixcclxuICAgICAgICBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nXHJcbiAgICBdKSxcclxuICAgIG1heDogUmVhY3QuUHJvcFR5cGVzLm9uZU9mVHlwZShbXHJcbiAgICAgICAgUmVhY3QuUHJvcFR5cGVzLm51bWJlcixcclxuICAgICAgICBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nXHJcbiAgICBdKSxcclxuICAgIHZhbHVlOiBSZWFjdC5Qcm9wVHlwZXMub25lT2ZUeXBlKFtcclxuICAgICAgICBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgICAgIFJlYWN0LlByb3BUeXBlcy5zdHJpbmdcclxuICAgIF0pLFxyXG4gICAgY2xhc3NOYW1lOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgLy8gU3RhbmRhcmQgaHRtbCB0YWcgYXR0cmlidXRlc1xyXG4gICAgYXR0cmlidXRlczogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcclxuICAgIC8vIENvbG9yIHBhdHRlcm4gb2JqZWN0XHJcbiAgICBjb2xvcnM6IFJlYWN0LlByb3BUeXBlcy5vYmplY3RcclxufVxyXG5cclxuUHJvZ3Jlc3MuZGVmYXVsdFByb3BzID0ge1xyXG4gICAgc3RlcDogMC4xLFxyXG4gICAgbWluOiAwLFxyXG4gICAgbWF4OiAxMDAsXHJcbiAgICB2YWx1ZTogMCxcclxuICAgIGNsYXNzTmFtZTogXCJcIixcclxuICAgIGF0dHJpYnV0ZXM6IHt9LFxyXG4gICAgLy8gU3RhcnQgYW5kIEVuZCBwcm9kdWNlIGEgbGluZWFyIGZyb20gbGVmdCB0byByaWdodCBvbiB0aGUgdHJhY2sgb2YgdGhlIHByb2dyZXNzIGJhclxyXG4gICAgLy8gQmFjayBpcyB0aGUgY29sb3IgZm9yIHRoZSByaWdodCBzaWRlIG9mIHRoZSB0cmFja1xyXG4gICAgY29sb3JzOiB7XHJcbiAgICAgICAgc3RhcnQ6IFwiI0E5MDMyOVwiLFxyXG4gICAgICAgIGVuZDogXCIjNkQwMDE5XCIsXHJcbiAgICAgICAgYmFjazogXCJyZ2JhKCAwLCAwLCAwLCAwLjQgKVwiXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2dyZXNzO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9Qcm9ncmVzcy5qc1xuICoqLyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZGVvQWN0aW9uc3tcclxuICAgIGNvbnN0cnVjdG9yKHZpZGVvQ29tcG9uZW50KXtcclxuICAgICAgICB0aGlzLnZpZGVvQ29tcG9uZW50ID0gdmlkZW9Db21wb25lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgcGxheSgpe1xyXG4gICAgICAgIGlmKCAhdGhpcy52aWRlb0NvbXBvbmVudC5fdmlkZW8gKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgdGhpcy52aWRlb0NvbXBvbmVudC5fdmlkZW8ucGxheSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHBhdXNlKCl7XHJcbiAgICAgICAgaWYoICF0aGlzLnZpZGVvQ29tcG9uZW50Ll92aWRlbyApXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB0aGlzLnZpZGVvQ29tcG9uZW50Ll92aWRlby5wYXVzZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG11dGUoKXtcclxuICAgICAgICBpZiggIXRoaXMudmlkZW9Db21wb25lbnQuX3ZpZGVvIClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuYmVmb3JlTXV0ZSA9IHRoaXMudmlkZW9Db21wb25lbnQuc3RhdGUudm9sdW1lO1xyXG4gICAgICAgIHRoaXMudmlkZW9Db21wb25lbnQuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICB2b2x1bWU6IDBcclxuICAgICAgICB9LCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubXV0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnZpZGVvQ29tcG9uZW50Ll92aWRlby52b2x1bWUgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLnZpZGVvQ29tcG9uZW50Ll9tdXRlQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgdGhpcy52aWRlb0NvbXBvbmVudC5fdW5tdXRlQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdW5tdXRlKCl7XHJcbiAgICAgICAgaWYoICF0aGlzLnZpZGVvQ29tcG9uZW50Ll92aWRlbyApXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICBsZXQgdm9sdW1lID0gdGhpcy5iZWZvcmVNdXRlIHx8IDE7XHJcbiAgICAgICAgdGhpcy52aWRlb0NvbXBvbmVudC5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHZvbHVtZVxyXG4gICAgICAgIH0sICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5tdXRlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnZpZGVvQ29tcG9uZW50Ll92aWRlby52b2x1bWUgPSB2b2x1bWU7XHJcbiAgICAgICAgICAgIHRoaXMudmlkZW9Db21wb25lbnQuX211dGVCdXR0b24uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgICAgICAgdGhpcy52aWRlb0NvbXBvbmVudC5fdW5tdXRlQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB2b2x1bWVVcCgpe1xyXG4gICAgICAgIGxldCB2b2x1bWUgPSB0aGlzLnZpZGVvQ29tcG9uZW50LnN0YXRlLnZvbHVtZTtcclxuICAgICAgICBpZiggdm9sdW1lID49IDEgKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgdm9sdW1lICs9IDAuMVxyXG4gICAgICAgIHRoaXMuc2V0Vm9sdW1lKHZvbHVtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgdm9sdW1lRG93bigpe1xyXG4gICAgICAgIGxldCB2b2x1bWUgPSB0aGlzLnZpZGVvQ29tcG9uZW50LnN0YXRlLnZvbHVtZTtcclxuICAgICAgICBpZiggdm9sdW1lIDw9IDAgKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgdm9sdW1lIC09IDAuMVxyXG4gICAgICAgIHRoaXMuc2V0Vm9sdW1lKHZvbHVtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Vm9sdW1lKHZvbHVtZSl7XHJcbiAgICAgICAgdGhpcy52aWRlb0NvbXBvbmVudC5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHZvbHVtZVxyXG4gICAgICAgIH0sICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy52aWRlb0NvbXBvbmVudC5fdmlkZW8udm9sdW1lID0gdm9sdW1lO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGJhY2soKXtcclxuICAgICAgICBpZiggIXRoaXMudmlkZW9Db21wb25lbnQuX3ZpZGVvIClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIGxldCB7Y3VycmVudFRpbWUsIGR1cmF0aW9ufSA9IHRoaXMudmlkZW9Db21wb25lbnQuX3ZpZGVvO1xyXG4gICAgICAgIGxldCBuZXdUaW1lID0gMDtcclxuICAgICAgICBpZiggY3VycmVudFRpbWUgLTUgPiAwICl7XHJcbiAgICAgICAgICAgIG5ld1RpbWUgPSBjdXJyZW50VGltZSAtNTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy52aWRlb0NvbXBvbmVudC5fdmlkZW8uY3VycmVudFRpbWUgPSBuZXdUaW1lO1xyXG4gICAgICAgIGxldCBwcm9ncmVzcyA9IG5ld1RpbWUvZHVyYXRpb24qMTAwO1xyXG4gICAgICAgIHRoaXMudmlkZW9Db21wb25lbnQuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBwcm9ncmVzc1xyXG4gICAgICAgIH0sICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy52aWRlb0NvbXBvbmVudC5vblRpbWVVcGRhdGUoe3RhcmdldDogdGhpcy52aWRlb0NvbXBvbmVudC5fdmlkZW99KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmb3J3YXJkKCl7XHJcbiAgICAgICAgaWYoICF0aGlzLnZpZGVvQ29tcG9uZW50Ll92aWRlbyApXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICBsZXQge2N1cnJlbnRUaW1lLCBkdXJhdGlvbn0gPSB0aGlzLnZpZGVvQ29tcG9uZW50Ll92aWRlbztcclxuICAgICAgICBsZXQgbmV3VGltZSA9IGR1cmF0aW9uO1xyXG4gICAgICAgIGlmKCBjdXJyZW50VGltZSArNSA8IGR1cmF0aW9uICl7XHJcbiAgICAgICAgICAgIG5ld1RpbWUgPSBjdXJyZW50VGltZSArNTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy52aWRlb0NvbXBvbmVudC5fdmlkZW8uY3VycmVudFRpbWUgPSBuZXdUaW1lO1xyXG4gICAgICAgIGxldCBwcm9ncmVzcyA9IG5ld1RpbWUvZHVyYXRpb24qMTAwO1xyXG4gICAgICAgIHRoaXMudmlkZW9Db21wb25lbnQuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBwcm9ncmVzc1xyXG4gICAgICAgIH0sICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy52aWRlb0NvbXBvbmVudC5vblRpbWVVcGRhdGUoe3RhcmdldDogdGhpcy52aWRlb0NvbXBvbmVudC5fdmlkZW99KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBnb0Z1bGxzY3JlZW4oZWxlbWVudCl7XHJcbiAgICAgICAgaWYoIGVsZW1lbnQucmVxdWVzdEZ1bGxzY3JlZW4gKXtcclxuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQucmVxdWVzdEZ1bGxzY3JlZW4oKTtcclxuICAgICAgICB9ZWxzZSBpZiggZWxlbWVudC5tc1JlcXVlc3RGdWxsc2NyZWVuICl7XHJcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50Lm1zUmVxdWVzdEZ1bGxzY3JlZW4oKTtcclxuICAgICAgICB9ZWxzZSBpZiggZWxlbWVudC5tb3pSZXF1ZXN0RnVsbFNjcmVlbiApe1xyXG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudC5tb3pSZXF1ZXN0RnVsbFNjcmVlbigpO1xyXG4gICAgICAgIH1lbHNlIGlmKCBlbGVtZW50LndlYmtpdFJlcXVlc3RGdWxsc2NyZWVuICl7XHJcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50LndlYmtpdFJlcXVlc3RGdWxsc2NyZWVuKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudmlkZW9Db21wb25lbnQuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBmdWxsc2NyZWVuOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZXhpdEZ1bGxzY3JlZW4oKXtcclxuICAgICAgICBpZiggZG9jdW1lbnQuZXhpdEZ1bGxzY3JlZW4gKXtcclxuICAgICAgICAgICAgcmV0dXJuIGRvY3VtZW50LmV4aXRGdWxsc2NyZWVuKCk7XHJcbiAgICAgICAgfWVsc2UgaWYoIGRvY3VtZW50Lm1zRXhpdEZ1bGxzY3JlZW4gKXtcclxuICAgICAgICAgICAgcmV0dXJuIGRvY3VtZW50Lm1zRXhpdEZ1bGxzY3JlZW4oKTtcclxuICAgICAgICB9ZWxzZSBpZiggZG9jdW1lbnQubW96Q2FuY2VsRnVsbFNjcmVlbiApe1xyXG4gICAgICAgICAgICByZXR1cm4gZG9jdW1lbnQubW96Q2FuY2VsRnVsbFNjcmVlbigpO1xyXG4gICAgICAgIH1lbHNlIGlmKCBkb2N1bWVudC53ZWJraXRFeGl0RnVsbHNjcmVlbiApe1xyXG4gICAgICAgICAgICByZXR1cm4gZG9jdW1lbnQud2Via2l0RXhpdEZ1bGxzY3JlZW4oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy52aWRlb0NvbXBvbmVudC5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGZ1bGxzY3JlZW46IGZhbHNlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlRnVsbHNjcmVlbiA9ICgpID0+IHtcclxuICAgICAgICBpZiggdGhpcy52aWRlb0NvbXBvbmVudC5zdGF0ZS5mdWxsc2NyZWVuICl7XHJcbiAgICAgICAgICAgIHRoaXMudmlkZW9Db21wb25lbnQub25EZWZhdWx0c2NyZWVuU2V0KHt9KTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy52aWRlb0NvbXBvbmVudC5vbkZ1bGxzY3JlZW5TZXQoe30pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVNdXRlID0gKCkgPT4ge1xyXG4gICAgICAgIGlmKCAhdGhpcy5tdXRlZCApe1xyXG4gICAgICAgICAgICB0aGlzLm11dGUoKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy51bm11dGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlUGxheSA9ICgpID0+IHtcclxuICAgICAgICBpZiggdGhpcy52aWRlb0NvbXBvbmVudC5zdGF0ZS5wbGF5aW5nICl7XHJcbiAgICAgICAgICAgIHRoaXMucGF1c2UoKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5wbGF5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9saWIvVmlkZW9BY3Rpb25zLmpzXG4gKiovIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlkZW9FdmVudEhhbmRsZXJ7XHJcbiAgICBldmVudExpc3RlbmVycyA9IFtdO1xyXG4gICAgZXZlbnRzID0gW1xyXG4gICAgICAgIFwiYWJvcnRcIixcclxuICAgICAgICBcImNhbnBsYXlcIixcclxuICAgICAgICBcImNhbnBsYXl0aHJvdWdoXCIsXHJcbiAgICAgICAgXCJkdXJhdGlvbmNoYW5nZVwiLFxyXG4gICAgICAgIFwiZW1wdGllZFwiLFxyXG4gICAgICAgIFwiZW5kZWRcIixcclxuICAgICAgICBcImVycm9yXCIsXHJcbiAgICAgICAgXCJsb2FkZWRtZXRhZGF0YVwiLFxyXG4gICAgICAgIFwibG9hZHN0YXJ0XCIsXHJcbiAgICAgICAgXCJwYXVzZVwiLFxyXG4gICAgICAgIFwicGxheVwiLFxyXG4gICAgICAgIFwicGxheWluZ1wiLFxyXG4gICAgICAgIFwicHJvZ3Jlc3NcIixcclxuICAgICAgICBcInJhdGVjaGFuZ2VcIixcclxuICAgICAgICBcInNlZWtlZFwiLFxyXG4gICAgICAgIFwic2Vla2luZ1wiLFxyXG4gICAgICAgIFwic3RhbGxlZFwiLFxyXG4gICAgICAgIFwidGltZXVwZGF0ZVwiLFxyXG4gICAgICAgIFwidm9sdW1lY2hhbmdlXCIsXHJcbiAgICAgICAgXCJ3YWl0aW5nXCJcclxuICAgIF07XHJcblxyXG4gICAgY29uc3RydWN0b3IodmlkZW9Db21wb25lbnQpe1xyXG4gICAgICAgIHRoaXMudmlkZW9Db21wb25lbnQgPSB2aWRlb0NvbXBvbmVudDtcclxuICAgIH1cclxuXHJcbiAgICBhdHRhY2hMaXN0ZW5lcnMoKXtcclxuICAgICAgICBsZXQgdmlkZW8gPSB0aGlzLnZpZGVvQ29tcG9uZW50Ll92aWRlbztcclxuICAgICAgICB2aWRlby5hZGRFdmVudExpc3RlbmVyKCBcImxvYWRlZG1ldGFkYXRhXCIsIHRoaXMudmlkZW9Db21wb25lbnQub25NZXRhRGF0YUxvYWRlZCApO1xyXG4gICAgICAgIHZpZGVvLmFkZEV2ZW50TGlzdGVuZXIoIFwidGltZXVwZGF0ZVwiLCB0aGlzLnZpZGVvQ29tcG9uZW50Lm9uVGltZVVwZGF0ZSApO1xyXG4gICAgICAgIHZpZGVvLmFkZEV2ZW50TGlzdGVuZXIoIFwicGxheVwiLCB0aGlzLnZpZGVvQ29tcG9uZW50Lm9uUGxheSApO1xyXG4gICAgICAgIHZpZGVvLmFkZEV2ZW50TGlzdGVuZXIoIFwicGF1c2VcIiwgdGhpcy52aWRlb0NvbXBvbmVudC5vblBhdXNlICk7XHJcbiAgICAgICAgdmlkZW8uYWRkRXZlbnRMaXN0ZW5lciggXCJ2b2x1bWVjaGFuZ2VcIiwgdGhpcy52aWRlb0NvbXBvbmVudC5vblZvbHVtZUNoYW5nZSApO1xyXG4gICAgfVxyXG5cclxuICAgIGRldGFjaExpc3RlbmVycygpe1xyXG4gICAgICAgIGxldCB2aWRlbyA9IHRoaXMudmlkZW9Db21wb25lbnQuX3ZpZGVvO1xyXG4gICAgICAgIHZpZGVvLnJlbW92ZUV2ZW50TGlzdGVuZXIoIFwibG9hZGVkbWV0YWRhdGFcIiwgdGhpcy52aWRlb0NvbXBvbmVudC5vbk1ldGFEYXRhTG9hZGVkICk7XHJcbiAgICAgICAgdmlkZW8ucmVtb3ZlRXZlbnRMaXN0ZW5lciggXCJ0aW1ldXBkYXRlXCIsIHRoaXMudmlkZW9Db21wb25lbnQub25UaW1lVXBkYXRlICk7XHJcbiAgICAgICAgdmlkZW8ucmVtb3ZlRXZlbnRMaXN0ZW5lciggXCJwbGF5XCIsIHRoaXMudmlkZW9Db21wb25lbnQub25QbGF5ICk7XHJcbiAgICAgICAgdmlkZW8ucmVtb3ZlRXZlbnRMaXN0ZW5lciggXCJwYXVzZVwiLCB0aGlzLnZpZGVvQ29tcG9uZW50Lm9uUGF1c2UgKTtcclxuICAgICAgICB2aWRlby5yZW1vdmVFdmVudExpc3RlbmVyKCBcInZvbHVtZWNoYW5nZVwiLCB0aGlzLnZpZGVvQ29tcG9uZW50Lm9uVm9sdW1lQ2hhbmdlICk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlTGlzdGVuZXJzKCl7XHJcbiAgICAgICAgdGhpcy5ldmVudExpc3RlbmVycyA9IFtdO1xyXG4gICAgICAgIHRoaXMuZXZlbnRzLm1hcCggZXZlbnROYW1lID0+IHtcclxuICAgICAgICAgICAgbGV0IGxpc3RlbmVyID0gZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYoIHR5cGVvZiB0aGlzLnZpZGVvQ29tcG9uZW50LnByb3BzW2V2ZW50TmFtZV0gPT0gXCJmdW5jdGlvblwiICl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52aWRlb0NvbXBvbmVudC5wcm9wc1tldmVudE5hbWVdKCBldmVudCApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMudmlkZW9Db21wb25lbnQuX3ZpZGVvLmFkZEV2ZW50TGlzdGVuZXIoIGV2ZW50TmFtZSwgbGlzdGVuZXIgKTtcclxuICAgICAgICAgICAgdGhpcy5ldmVudExpc3RlbmVycy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGV2ZW50OiBldmVudE5hbWUsXHJcbiAgICAgICAgICAgICAgICBsaXN0ZW5lclxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgcmVtb3ZlTGlzdGVuZXJzKCl7XHJcbiAgICAgICAgZm9yKCBsZXQgaSA9IDA7IGkgPCB0aGlzLmV2ZW50TGlzdGVuZXJzLmxlbmd0aDsgaSsrICl7XHJcbiAgICAgICAgICAgIHRoaXMudmlkZW9Db21wb25lbnQuX3ZpZGVvLnJlbW92ZUV2ZW50TGlzdGVuZXIodGhpcy5ldmVudExpc3RlbmVyc1tpXS5ldmVudCwgdGhpcy5ldmVudExpc3RlbmVyc1tpXS5saXN0ZW5lcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZXZlbnRMaXN0ZW5lcnMgPSBbXTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9saWIvVmlkZW9FdmVudEhhbmRsZXIuanNcbiAqKi8iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEhLi92aWRlby5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEhLi92aWRlby5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzISEuL3ZpZGVvLnNjc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvc3R5bGUvdmlkZW8uc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDQyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5yZWFjdFZpZGVvV3JhcHBlciB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBsaW5lLWhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBtYXgtaGVpZ2h0OiAxMDAlO1xcbiAgb3V0bGluZTogbm9uZTsgfVxcbiAgLnJlYWN0VmlkZW9XcmFwcGVyIC5vdmVybGF5Q29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHotaW5kZXg6IDI7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cztcXG4gICAgb3BhY2l0eTogMDsgfVxcbiAgLnJlYWN0VmlkZW9XcmFwcGVyIHZpZGVvIHtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xcbiAgICB6LWluZGV4OiAxOyB9XFxuICAgIC5yZWFjdFZpZGVvV3JhcHBlciB2aWRlbzo6LXdlYmtpdC1tZWRpYS1jb250cm9scyB7XFxuICAgICAgei1pbmRleDogMjsgfVxcbiAgLnJlYWN0VmlkZW9XcmFwcGVyIC5jb250cm9sc1dyYXBwZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB6LWluZGV4OiAyMTQ3NDgzNjQ3OyB9XFxuICAgIC5yZWFjdFZpZGVvV3JhcHBlciAuY29udHJvbHNXcmFwcGVyIC5zZWVrQmFyIC5idWZmZXIge1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICBsZWZ0OiAwO1xcbiAgICAgIHRvcDogMDtcXG4gICAgICByaWdodDogMDtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgICBoZWlnaHQ6IDhweDtcXG4gICAgICB6LWluZGV4OiAxO1xcbiAgICAgIG1hcmdpbjogMDtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjY2OyB9XFxuICAgIC5yZWFjdFZpZGVvV3JhcHBlciAuY29udHJvbHNXcmFwcGVyIC5zZWVrQmFyIC5wcm9ncmVzcyB7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIGxlZnQ6IDA7XFxuICAgICAgdG9wOiAwO1xcbiAgICAgIHJpZ2h0OiAwO1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIGhlaWdodDogOHB4O1xcbiAgICAgIHotaW5kZXg6IDI7XFxuICAgICAgbWFyZ2luOiAwO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gICAgICBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDZweCAjMDAwOyB9XFxuICAgIC5yZWFjdFZpZGVvV3JhcHBlciAuY29udHJvbHNXcmFwcGVyIC5wbGF5QnV0dG9uIHtcXG4gICAgICB3aWR0aDogMjRweDtcXG4gICAgICBoZWlnaHQ6IDI0cHg7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIGxlZnQ6IDVweDtcXG4gICAgICBib3R0b206IDVweDtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG4gICAgLnJlYWN0VmlkZW9XcmFwcGVyIC5jb250cm9sc1dyYXBwZXIgLnBhdXNlQnV0dG9uIHtcXG4gICAgICB3aWR0aDogMjRweDtcXG4gICAgICBoZWlnaHQ6IDI0cHg7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIGxlZnQ6IDVweDtcXG4gICAgICBib3R0b206IDVweDtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgZGlzcGxheTogbm9uZTsgfVxcbiAgICAucmVhY3RWaWRlb1dyYXBwZXIgLmNvbnRyb2xzV3JhcHBlciAubXV0ZUJ1dHRvbiB7XFxuICAgICAgd2lkdGg6IDI0cHg7XFxuICAgICAgaGVpZ2h0OiAyNHB4O1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICBsZWZ0OiAzNHB4O1xcbiAgICAgIGJvdHRvbTogNXB4O1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcbiAgICAucmVhY3RWaWRlb1dyYXBwZXIgLmNvbnRyb2xzV3JhcHBlciAudW5tdXRlQnV0dG9uIHtcXG4gICAgICB3aWR0aDogMjRweDtcXG4gICAgICBoZWlnaHQ6IDI0cHg7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIGxlZnQ6IDM0cHg7XFxuICAgICAgYm90dG9tOiA1cHg7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgIGRpc3BsYXk6IG5vbmU7IH1cXG4gICAgLnJlYWN0VmlkZW9XcmFwcGVyIC5jb250cm9sc1dyYXBwZXIgLnZvbHVtZUJhciB7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIHdpZHRoOiAxMDBweDtcXG4gICAgICBoZWlnaHQ6IDVweDtcXG4gICAgICBib3R0b206IDE0cHg7XFxuICAgICAgbGVmdDogNjVweDtcXG4gICAgICBiYWNrZ3JvdW5kOiBibGFjazsgfVxcbiAgICAucmVhY3RWaWRlb1dyYXBwZXIgLmNvbnRyb2xzV3JhcHBlciAudm9sdW1lIHtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgbGVmdDogMDtcXG4gICAgICB0b3A6IDA7XFxuICAgICAgcmlnaHQ6IDA7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgaGVpZ2h0OiA1cHg7XFxuICAgICAgbWFyZ2luOiAwO1xcbiAgICAgIHBhZGRpbmc6IDA7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggM3B4ICM0NDQ7IH1cXG4gICAgICAucmVhY3RWaWRlb1dyYXBwZXIgLmNvbnRyb2xzV3JhcHBlciAudm9sdW1lOjotbXMtZmlsbC1sb3dlciB7XFxuICAgICAgICBiYWNrZ3JvdW5kOiAjMjIyOyB9XFxuICAgICAgLnJlYWN0VmlkZW9XcmFwcGVyIC5jb250cm9sc1dyYXBwZXIgLnZvbHVtZTo6LW1zLWZpbGwtdXBwZXIge1xcbiAgICAgICAgYmFja2dyb3VuZDogI0VFRTsgfVxcbiAgICAucmVhY3RWaWRlb1dyYXBwZXIgLmNvbnRyb2xzV3JhcHBlciAudGltZSB7XFxuICAgICAgd2lkdGg6IDEwMHB4O1xcbiAgICAgIGhlaWdodDogMjRweDtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgcmlnaHQ6IDM1cHg7XFxuICAgICAgdG9wOiA4cHg7XFxuICAgICAgYm90dG9tOiAwcHg7XFxuICAgICAgZm9udC1mYW1pbHk6IFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIFxcXCJTZWdvZSBVSVxcXCIsIGFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICBsaW5lLWhlaWdodDogMzBweDtcXG4gICAgICB0ZXh0LWFsaWduOiByaWdodDsgfVxcbiAgICAucmVhY3RWaWRlb1dyYXBwZXIgLmNvbnRyb2xzV3JhcHBlciAuZnVsbHNjcmVlbkJ1dHRvbiB7XFxuICAgICAgd2lkdGg6IDI0cHg7XFxuICAgICAgaGVpZ2h0OiAyNHB4O1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICByaWdodDogNXB4O1xcbiAgICAgIGJvdHRvbTogNXB4O1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcbiAgICAucmVhY3RWaWRlb1dyYXBwZXIgLmNvbnRyb2xzV3JhcHBlciAuZGVmYXVsdHNjcmVlbkJ1dHRvbiB7XFxuICAgICAgd2lkdGg6IDI0cHg7XFxuICAgICAgaGVpZ2h0OiAyNHB4O1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICByaWdodDogNXB4O1xcbiAgICAgIGJvdHRvbTogNXB4O1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICBkaXNwbGF5OiBub25lOyB9XFxuICAucmVhY3RWaWRlb1dyYXBwZXIgaW5wdXRbdHlwZT1yYW5nZV0ge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7IH1cXG4gICAgLnJlYWN0VmlkZW9XcmFwcGVyIGlucHV0W3R5cGU9cmFuZ2VdOmZvY3VzIHtcXG4gICAgICBvdXRsaW5lOiBub25lOyB9XFxuICAgIC5yZWFjdFZpZGVvV3JhcHBlciBpbnB1dFt0eXBlPXJhbmdlXTo6LXdlYmtpdC1zbGlkZXItcnVubmFibGUtdHJhY2sge1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2U7IH1cXG4gICAgLnJlYWN0VmlkZW9XcmFwcGVyIGlucHV0W3R5cGU9cmFuZ2VdOjotd2Via2l0LXNsaWRlci10aHVtYiB7XFxuICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICAgIGhlaWdodDogNXB4O1xcbiAgICAgIHdpZHRoOiAwcHg7XFxuICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcbiAgICAucmVhY3RWaWRlb1dyYXBwZXIgaW5wdXRbdHlwZT1yYW5nZV06Oi1tb3otcmFuZ2UtdHJhY2sge1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2U7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgaGVpZ2h0OiA4cHg7XFxuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IH1cXG4gICAgLnJlYWN0VmlkZW9XcmFwcGVyIGlucHV0W3R5cGU9cmFuZ2VdOjotbW96LXJhbmdlLXRodW1iIHtcXG4gICAgICBoZWlnaHQ6IDVweDtcXG4gICAgICB3aWR0aDogMHB4O1xcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDsgfVxcbiAgICAucmVhY3RWaWRlb1dyYXBwZXIgaW5wdXRbdHlwZT1yYW5nZV06Oi1tcy10cmFjayB7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZTtcXG4gICAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgaGVpZ2h0OiA4cHg7XFxuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IH1cXG4gICAgLnJlYWN0VmlkZW9XcmFwcGVyIGlucHV0W3R5cGU9cmFuZ2VdOjotbXMtdGh1bWIge1xcbiAgICAgIGhlaWdodDogNXB4O1xcbiAgICAgIHdpZHRoOiAwcHg7XFxuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyOyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlciEuL34vc2Fzcy1sb2FkZXIhLi9zcmMvc3R5bGUvdmlkZW8uc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDQzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKlxyXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXHJcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxyXG4qL1xyXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xyXG5cdHZhciBsaXN0ID0gW107XHJcblxyXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcclxuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XHJcblx0XHR2YXIgcmVzdWx0ID0gW107XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IHRoaXNbaV07XHJcblx0XHRcdGlmKGl0ZW1bMl0pIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGl0ZW1bMV0gKyBcIn1cIik7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmVzdWx0LnB1c2goaXRlbVsxXSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiByZXN1bHQuam9pbihcIlwiKTtcclxuXHR9O1xyXG5cclxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxyXG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcclxuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxyXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XHJcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcclxuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxyXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xyXG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXHJcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXHJcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXHJcblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXHJcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XHJcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XHJcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcclxuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxuXHRyZXR1cm4gbGlzdDtcclxufTtcclxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcbiAqKiBtb2R1bGUgaWQgPSA0NFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLypcclxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxyXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcclxuKi9cclxudmFyIHN0eWxlc0luRG9tID0ge30sXHJcblx0bWVtb2l6ZSA9IGZ1bmN0aW9uKGZuKSB7XHJcblx0XHR2YXIgbWVtbztcclxuXHRcdHJldHVybiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcblx0XHRcdHJldHVybiBtZW1vO1xyXG5cdFx0fTtcclxuXHR9LFxyXG5cdGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIC9tc2llIFs2LTldXFxiLy50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkpO1xyXG5cdH0pLFxyXG5cdGdldEhlYWRFbGVtZW50ID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XHJcblx0XHRyZXR1cm4gZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF07XHJcblx0fSksXHJcblx0c2luZ2xldG9uRWxlbWVudCA9IG51bGwsXHJcblx0c2luZ2xldG9uQ291bnRlciA9IDAsXHJcblx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AgPSBbXTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xyXG5cdGlmKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xyXG5cdFx0aWYodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XHJcblx0fVxyXG5cclxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cclxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXHJcblx0aWYgKHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiA9PT0gXCJ1bmRlZmluZWRcIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XHJcblxyXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiA8aGVhZD4uXHJcblx0aWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcInVuZGVmaW5lZFwiKSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcclxuXHJcblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0KTtcclxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xyXG5cclxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcclxuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XHJcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xyXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XHJcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcclxuXHRcdH1cclxuXHRcdGlmKG5ld0xpc3QpIHtcclxuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0KTtcclxuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcclxuXHRcdH1cclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xyXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XHJcblx0XHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKVxyXG5cdFx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oKTtcclxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKSB7XHJcblx0Zm9yKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XHJcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcclxuXHRcdGlmKGRvbVN0eWxlKSB7XHJcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcclxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XHJcblx0XHRcdH1cclxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dmFyIHBhcnRzID0gW107XHJcblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XHJcblx0XHRcdH1cclxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMobGlzdCkge1xyXG5cdHZhciBzdHlsZXMgPSBbXTtcclxuXHR2YXIgbmV3U3R5bGVzID0ge307XHJcblx0Zm9yKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcclxuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcclxuXHRcdHZhciBpZCA9IGl0ZW1bMF07XHJcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcclxuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XHJcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcclxuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcclxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKVxyXG5cdFx0XHRzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XHJcblx0fVxyXG5cdHJldHVybiBzdHlsZXM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZUVsZW1lbnQpIHtcclxuXHR2YXIgaGVhZCA9IGdldEhlYWRFbGVtZW50KCk7XHJcblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3Bbc3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XHJcblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcclxuXHRcdGlmKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xyXG5cdFx0XHRoZWFkLmluc2VydEJlZm9yZShzdHlsZUVsZW1lbnQsIGhlYWQuZmlyc3RDaGlsZCk7XHJcblx0XHR9IGVsc2UgaWYobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcclxuXHRcdFx0aGVhZC5pbnNlcnRCZWZvcmUoc3R5bGVFbGVtZW50LCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudCk7XHJcblx0XHR9XHJcblx0XHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlRWxlbWVudCk7XHJcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XHJcblx0XHRoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudCk7XHJcblx0fSBlbHNlIHtcclxuXHRcdHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnLiBNdXN0IGJlICd0b3AnIG9yICdib3R0b20nLlwiKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcclxuXHRzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xyXG5cdHZhciBpZHggPSBzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlRWxlbWVudCk7XHJcblx0aWYoaWR4ID49IDApIHtcclxuXHRcdHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcclxuXHR2YXIgc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xyXG5cdHN0eWxlRWxlbWVudC50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xyXG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZUVsZW1lbnQpO1xyXG5cdHJldHVybiBzdHlsZUVsZW1lbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpIHtcclxuXHR2YXIgbGlua0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcclxuXHRsaW5rRWxlbWVudC5yZWwgPSBcInN0eWxlc2hlZXRcIjtcclxuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGlua0VsZW1lbnQpO1xyXG5cdHJldHVybiBsaW5rRWxlbWVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XHJcblx0dmFyIHN0eWxlRWxlbWVudCwgdXBkYXRlLCByZW1vdmU7XHJcblxyXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xyXG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XHJcblx0XHRzdHlsZUVsZW1lbnQgPSBzaW5nbGV0b25FbGVtZW50IHx8IChzaW5nbGV0b25FbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcclxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIGZhbHNlKTtcclxuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIHRydWUpO1xyXG5cdH0gZWxzZSBpZihvYmouc291cmNlTWFwICYmXHJcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcclxuXHRcdHN0eWxlRWxlbWVudCA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xyXG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCk7XHJcblx0XHRyZW1vdmUgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XHJcblx0XHRcdGlmKHN0eWxlRWxlbWVudC5ocmVmKVxyXG5cdFx0XHRcdFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGVFbGVtZW50LmhyZWYpO1xyXG5cdFx0fTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0c3R5bGVFbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xyXG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCk7XHJcblx0XHRyZW1vdmUgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XHJcblx0XHR9O1xyXG5cdH1cclxuXHJcblx0dXBkYXRlKG9iaik7XHJcblxyXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcclxuXHRcdGlmKG5ld09iaikge1xyXG5cdFx0XHRpZihuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApXHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJlbW92ZSgpO1xyXG5cdFx0fVxyXG5cdH07XHJcbn1cclxuXHJcbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XHJcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xyXG5cclxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xyXG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xyXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XHJcblx0fTtcclxufSkoKTtcclxuXHJcbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGVFbGVtZW50LCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcclxuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XHJcblxyXG5cdGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xyXG5cdFx0c3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XHJcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlRWxlbWVudC5jaGlsZE5vZGVzO1xyXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xyXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XHJcblx0XHRcdHN0eWxlRWxlbWVudC5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0c3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGNzc05vZGUpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZUVsZW1lbnQsIG9iaikge1xyXG5cdHZhciBjc3MgPSBvYmouY3NzO1xyXG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcclxuXHJcblx0aWYobWVkaWEpIHtcclxuXHRcdHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcclxuXHR9XHJcblxyXG5cdGlmKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XHJcblx0XHRzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xyXG5cdH0gZWxzZSB7XHJcblx0XHR3aGlsZShzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xyXG5cdFx0XHRzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xyXG5cdFx0fVxyXG5cdFx0c3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlTGluayhsaW5rRWxlbWVudCwgb2JqKSB7XHJcblx0dmFyIGNzcyA9IG9iai5jc3M7XHJcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XHJcblxyXG5cdGlmKHNvdXJjZU1hcCkge1xyXG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcclxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcclxuXHR9XHJcblxyXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xyXG5cclxuXHR2YXIgb2xkU3JjID0gbGlua0VsZW1lbnQuaHJlZjtcclxuXHJcblx0bGlua0VsZW1lbnQuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XHJcblxyXG5cdGlmKG9sZFNyYylcclxuXHRcdFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcclxufVxyXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXG4gKiogbW9kdWxlIGlkID0gNDVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZGVvVXRpbHN7XHJcbiAgICBjb25zdHJ1Y3Rvcih2aWRlb0NvbXBvbmVudCl7XHJcbiAgICAgICAgdGhpcy52aWRlb0NvbXBvbmVudCA9IHZpZGVvQ29tcG9uZW50O1xyXG4gICAgfVxyXG5cclxuICAgIGZvcm1hdFRpbWVGcm9tU2Vjb25kcyhzZWNvbmRzKXtcclxuICAgICAgICBzZWNvbmRzID0gcGFyc2VJbnQoc2Vjb25kcyk7XHJcbiAgICAgICAgbGV0IGhvdXJzID0gcGFyc2VJbnQoc2Vjb25kcyAvIDM2MDApO1xyXG4gICAgICAgIHNlY29uZHMgLT0gaG91cnMqMzYwMDtcclxuICAgICAgICBsZXQgbWludXRlcyA9IHBhcnNlSW50KHNlY29uZHMgLyA2MCk7XHJcbiAgICAgICAgc2Vjb25kcyAtPSBtaW51dGVzKjYwO1xyXG4gICAgICAgIGxldCB0aW1lID0gYCR7aG91cnMgPiA5ID8gaG91cnMgOiAoXCIwXCIgKyBob3Vycyl9OiR7bWludXRlcyA+IDkgPyBtaW51dGVzIDogKFwiMFwiICsgbWludXRlcykgfToke3NlY29uZHMgPiA5ID8gc2Vjb25kcyA6IChcIjBcIiArIHNlY29uZHMpfWA7XHJcbiAgICAgICAgcmV0dXJuIHRpbWU7XHJcbiAgICB9XHJcblxyXG4gICAgY2FsY3VsYXRlUGVyY2VudGFnZShmcmFjdGlvbiwgdG90YWwpe1xyXG4gICAgICAgIGxldCBwZXJjZW50YWdlID0gcGFyc2VJbnQoZnJhY3Rpb24vdG90YWwqMTAwKjEwMCkvMTAwOyAvLyBpbiBvcmRlciB0byBhcHByb3hpbWF0ZSB0byAyIGRpZ2l0c1xyXG4gICAgICAgIHJldHVybiBwZXJjZW50YWdlO1xyXG4gICAgfVxyXG5cclxuICAgIGlzSUUoKXtcclxuICAgICAgICBsZXQgVUEgPSB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudDtcclxuICAgICAgICBpZiggVUEubWF0Y2goIC9NU0lFL2kgKSB8fCBVQS5tYXRjaCggL0VkZ2UvaSApIHx8IFVBLm1hdGNoKCAvVHJpZGVudFxcLy9pICkgKVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgZGlzYWJsZUNvbnRyb2xzKCl7XHJcbiAgICAgICAgdGhpcy52aWRlb0NvbXBvbmVudC5fY29udHJvbHNXcmFwcGVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIH1cclxuXHJcbiAgICBlbmFibGVDb250cm9scygpe1xyXG4gICAgICAgIGlmKCB0aGlzLnZpZGVvQ29tcG9uZW50LnByb3BzLmF0dHJpYnV0ZXMuY29udHJvbHMgKVxyXG4gICAgICAgICAgICB0aGlzLnZpZGVvQ29tcG9uZW50Ll9jb250cm9sc1dyYXBwZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgIGlmKCB0aGlzLnZpZGVvQ29tcG9uZW50LnByb3BzLmNvbnRyb2xzIClcclxuICAgICAgICAgICAgdGhpcy52aWRlb0NvbXBvbmVudC5fY29udHJvbHNXcmFwcGVyLnN0eWxlLm9wYWNpdHkgPSBcIjFcIjtcclxuICAgIH1cclxuXHJcbiAgICBtb3ZlT3ZlcmxheSgpe1xyXG4gICAgICAgIHRoaXMudmlkZW9Db21wb25lbnQuX292ZXJsYXkuc3R5bGUuYm90dG9tID0gXCI2NXB4XCI7XHJcbiAgICB9XHJcblxyXG4gICAgZW5hYmxlT3ZlcmxheSgpe1xyXG4gICAgICAgIGlmKCB0aGlzLnZpZGVvQ29tcG9uZW50LnByb3BzLm92ZXJsYXkgKVxyXG4gICAgICAgICAgICB0aGlzLnZpZGVvQ29tcG9uZW50Ll9vdmVybGF5LnN0eWxlLm9wYWNpdHkgPSBcIjFcIjtcclxuICAgIH1cclxuXHJcbiAgICBjYWxjdWxhdGVCdWZmZXIoKXtcclxuICAgICAgICBpZiggIXRoaXMudmlkZW9Db21wb25lbnQuX3ZpZGVvIClcclxuICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgaWYoICF0aGlzLmxhc3RCdWZmZXJlZCApXHJcbiAgICAgICAgICAgIHRoaXMubGFzdEJ1ZmZlcmVkID0gMDtcclxuICAgICAgICBpZiggdGhpcy52aWRlb0NvbXBvbmVudC5fdmlkZW8uYnVmZmVyZWQubGVuZ3RoIDwgMSApXHJcbiAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgIGxldCBidWZmZXJlZCA9IHRoaXMudmlkZW9Db21wb25lbnQuX3ZpZGVvLmJ1ZmZlcmVkLmVuZCh0aGlzLnZpZGVvQ29tcG9uZW50Ll92aWRlby5idWZmZXJlZC5sZW5ndGgtMSk7XHJcbiAgICAgICAgaWYoICF0aGlzLnZpZGVvQ29tcG9uZW50Ll92aWRlby5kdXJhdGlvbiApXHJcbiAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgIHRoaXMubGFzdEJ1ZmZlcmVkID0gYnVmZmVyZWQ7XHJcbiAgICAgICAgbGV0IHtkdXJhdGlvbn0gPSB0aGlzLnZpZGVvQ29tcG9uZW50Ll92aWRlbztcclxuICAgICAgICBsZXQgcGVyY2VudGFnZSA9IHBhcnNlSW50KCBidWZmZXJlZCAvIGR1cmF0aW9uICogMTAwICk7XHJcbiAgICAgICAgcmV0dXJuIHBlcmNlbnRhZ2U7XHJcbiAgICB9XHJcblxyXG4gICAgaXNGdWxsc2NyZWVuKCl7XHJcbiAgICAgICAgbGV0IGlzRnVsbHNjcmVlbiA9IHVuZGVmaW5lZDtcclxuICAgICAgICBpZiggZG9jdW1lbnQud2Via2l0SXNGdWxsU2NyZWVuICE9PSB1bmRlZmluZWQgKXtcclxuICAgICAgICAgICAgaXNGdWxsc2NyZWVuID0gZG9jdW1lbnQud2Via2l0SXNGdWxsU2NyZWVuO1xyXG4gICAgICAgIH1lbHNlIGlmKCBkb2N1bWVudC5mdWxsc2NyZWVuRWxlbWVudCAhPT0gdW5kZWZpbmVkICl7XHJcbiAgICAgICAgICAgIGlzRnVsbHNjcmVlbiA9IGRvY3VtZW50LmZ1bGxzY3JlZW5FbGVtZW50ICE9PSBudWxsO1xyXG4gICAgICAgIH1lbHNlIGlmKCBkb2N1bWVudC5tc0Z1bGxzY3JlZW5FbGVtZW50ICE9PSB1bmRlZmluZWQgKXtcclxuICAgICAgICAgICAgaXNGdWxsc2NyZWVuID0gZG9jdW1lbnQubXNGdWxsc2NyZWVuRWxlbWVudCAhPT0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGlzRnVsbHNjcmVlbjtcclxuICAgIH1cclxufVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9saWIvVmlkZW9VdGlscy5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=