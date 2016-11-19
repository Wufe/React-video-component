(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react")) : factory(root["react"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
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
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _icons = __webpack_require__(1);
	
	var _icons2 = _interopRequireDefault(_icons);
	
	var _Progress = __webpack_require__(3);
	
	var _Progress2 = _interopRequireDefault(_Progress);
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _VideoActions = __webpack_require__(4);
	
	var _VideoActions2 = _interopRequireDefault(_VideoActions);
	
	var _VideoEventHandler = __webpack_require__(5);
	
	var _VideoEventHandler2 = _interopRequireDefault(_VideoEventHandler);
	
	var _video = __webpack_require__(6);
	
	var _video2 = _interopRequireDefault(_video);
	
	var _VideoUtils = __webpack_require__(10);
	
	var _VideoUtils2 = _interopRequireDefault(_VideoUtils);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Video = function (_React$Component) {
	    _inherits(Video, _React$Component);
	
	    function Video() {
	        _classCallCheck(this, Video);
	
	        var _this = _possibleConstructorReturn(this, (Video.__proto__ || Object.getPrototypeOf(Video)).call(this));
	
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
	            var _e$target = e.target,
	                currentTime = _e$target.currentTime,
	                duration = _e$target.duration;
	
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
	                            onClick: this.videoActions.play,
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
	                            onClick: this.videoActions.pause,
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
	                            onClick: this.videoActions.mute
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
	                            onClick: this.videoActions.unmute
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
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 3 */
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
	
	        return _possibleConstructorReturn(this, (Progress.__proto__ || Object.getPrototypeOf(Progress)).call(this));
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
/* 4 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var VideoActions = function VideoActions(videoComponent) {
	    var _this = this;
	
	    _classCallCheck(this, VideoActions);
	
	    this.play = function () {
	        if (!_this.videoComponent._video) return;
	        _this.videoComponent._video.play();
	    };
	
	    this.pause = function () {
	        if (!_this.videoComponent._video) return;
	        _this.videoComponent._video.pause();
	    };
	
	    this.mute = function () {
	        if (!_this.videoComponent._video) return;
	        _this.beforeMute = _this.videoComponent.state.volume;
	        _this.videoComponent.setState({
	            volume: 0
	        }, function () {
	            _this.muted = true;
	            _this.videoComponent._video.volume = 0;
	            _this.videoComponent._muteButton.style.display = "none";
	            _this.videoComponent._unmuteButton.style.display = "block";
	        });
	    };
	
	    this.unmute = function () {
	        if (!_this.videoComponent._video) return;
	        var volume = _this.beforeMute || 1;
	        _this.videoComponent.setState({
	            volume: volume
	        }, function () {
	            _this.muted = false;
	            _this.videoComponent._video.volume = volume;
	            _this.videoComponent._muteButton.style.display = "block";
	            _this.videoComponent._unmuteButton.style.display = "none";
	        });
	    };
	
	    this.volumeUp = function () {
	        var volume = _this.videoComponent.state.volume;
	        if (volume >= 1) return;
	        volume += 0.1;
	        _this.setVolume(volume);
	    };
	
	    this.volumeDown = function () {
	        var volume = _this.videoComponent.state.volume;
	        if (volume <= 0) return;
	        volume -= 0.1;
	        _this.setVolume(volume);
	    };
	
	    this.setVolume = function (volume) {
	        _this.videoComponent.setState({
	            volume: volume
	        }, function () {
	            _this.videoComponent._video.volume = volume;
	        });
	    };
	
	    this.back = function () {
	        if (!_this.videoComponent._video) return;
	        var _videoComponent$_vide = _this.videoComponent._video,
	            currentTime = _videoComponent$_vide.currentTime,
	            duration = _videoComponent$_vide.duration;
	
	        var newTime = 0;
	        if (currentTime - 5 > 0) {
	            newTime = currentTime - 5;
	        }
	        _this.videoComponent._video.currentTime = newTime;
	        var progress = newTime / duration * 100;
	        _this.videoComponent.setState({
	            progress: progress
	        }, function () {
	            _this.videoComponent.onTimeUpdate({ target: _this.videoComponent._video });
	        });
	    };
	
	    this.forward = function () {
	        if (!_this.videoComponent._video) return;
	        var _videoComponent$_vide2 = _this.videoComponent._video,
	            currentTime = _videoComponent$_vide2.currentTime,
	            duration = _videoComponent$_vide2.duration;
	
	        var newTime = duration;
	        if (currentTime + 5 < duration) {
	            newTime = currentTime + 5;
	        }
	        _this.videoComponent._video.currentTime = newTime;
	        var progress = newTime / duration * 100;
	        _this.videoComponent.setState({
	            progress: progress
	        }, function () {
	            _this.videoComponent.onTimeUpdate({ target: _this.videoComponent._video });
	        });
	    };
	
	    this.goFullscreen = function (element) {
	        if (element.requestFullscreen) {
	            return element.requestFullscreen();
	        } else if (element.msRequestFullscreen) {
	            return element.msRequestFullscreen();
	        } else if (element.mozRequestFullScreen) {
	            return element.mozRequestFullScreen();
	        } else if (element.webkitRequestFullscreen) {
	            return element.webkitRequestFullscreen();
	        }
	        _this.videoComponent.setState({
	            fullscreen: true
	        });
	    };
	
	    this.exitFullscreen = function () {
	        if (document.exitFullscreen) {
	            return document.exitFullscreen();
	        } else if (document.msExitFullscreen) {
	            return document.msExitFullscreen();
	        } else if (document.mozCancelFullScreen) {
	            return document.mozCancelFullScreen();
	        } else if (document.webkitExitFullscreen) {
	            return document.webkitExitFullscreen();
	        }
	        _this.videoComponent.setState({
	            fullscreen: false
	        });
	    };
	
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
	};
	
	exports.default = VideoActions;
	;

/***/ },
/* 5 */
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
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(7);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
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
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	
	
	// module
	exports.push([module.id, ".reactVideoWrapper {\n  display: inline-block;\n  position: relative;\n  vertical-align: middle;\n  margin: 0 auto;\n  line-height: 100%;\n  background: black;\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n  max-height: 100%;\n  outline: none; }\n  .reactVideoWrapper .overlayContainer {\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    z-index: 2;\n    text-align: left;\n    transition: opacity 0.5s;\n    opacity: 0; }\n  .reactVideoWrapper video {\n    max-width: 100%;\n    max-height: 100%;\n    z-index: 1; }\n    .reactVideoWrapper video::-webkit-media-controls {\n      z-index: 2; }\n  .reactVideoWrapper .controlsWrapper {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    height: 40px;\n    background-color: #000;\n    transition: opacity 0.5s;\n    opacity: 0;\n    z-index: 2147483647; }\n    .reactVideoWrapper .controlsWrapper .seekBar .buffer {\n      position: absolute;\n      left: 0;\n      top: 0;\n      right: 0;\n      width: 100%;\n      height: 8px;\n      z-index: 1;\n      margin: 0;\n      background-color: #666; }\n    .reactVideoWrapper .controlsWrapper .seekBar .progress {\n      position: absolute;\n      left: 0;\n      top: 0;\n      right: 0;\n      width: 100%;\n      height: 8px;\n      z-index: 2;\n      margin: 0;\n      background-color: transparent;\n      background-image: rgba(0, 0, 0, 0.4);\n      box-shadow: inset 0px 0px 6px #000; }\n    .reactVideoWrapper .controlsWrapper .playButton {\n      width: 24px;\n      height: 24px;\n      position: absolute;\n      left: 5px;\n      bottom: 5px;\n      cursor: pointer; }\n    .reactVideoWrapper .controlsWrapper .pauseButton {\n      width: 24px;\n      height: 24px;\n      position: absolute;\n      left: 5px;\n      bottom: 5px;\n      cursor: pointer;\n      display: none; }\n    .reactVideoWrapper .controlsWrapper .muteButton {\n      width: 24px;\n      height: 24px;\n      position: absolute;\n      left: 34px;\n      bottom: 5px;\n      cursor: pointer; }\n    .reactVideoWrapper .controlsWrapper .unmuteButton {\n      width: 24px;\n      height: 24px;\n      position: absolute;\n      left: 34px;\n      bottom: 5px;\n      cursor: pointer;\n      display: none; }\n    .reactVideoWrapper .controlsWrapper .volumeBar {\n      position: absolute;\n      width: 100px;\n      height: 5px;\n      bottom: 14px;\n      left: 65px;\n      background: black; }\n    .reactVideoWrapper .controlsWrapper .volume {\n      position: absolute;\n      left: 0;\n      top: 0;\n      right: 0;\n      width: 100%;\n      height: 5px;\n      margin: 0;\n      padding: 0;\n      background-color: transparent;\n      background-image: rgba(0, 0, 0, 0.4);\n      box-shadow: inset 0px 0px 3px #444; }\n      .reactVideoWrapper .controlsWrapper .volume::-ms-fill-lower {\n        background: #222; }\n      .reactVideoWrapper .controlsWrapper .volume::-ms-fill-upper {\n        background: #EEE; }\n    .reactVideoWrapper .controlsWrapper .time {\n      width: 100px;\n      height: 24px;\n      position: absolute;\n      right: 35px;\n      top: 8px;\n      bottom: 0px;\n      font-family: \"Helvetica Neue\", \"Segoe UI\", arial, sans-serif;\n      font-size: 14px;\n      font-weight: 300;\n      color: white;\n      line-height: 30px;\n      text-align: right; }\n    .reactVideoWrapper .controlsWrapper .fullscreenButton {\n      width: 24px;\n      height: 24px;\n      position: absolute;\n      right: 5px;\n      bottom: 5px;\n      cursor: pointer; }\n    .reactVideoWrapper .controlsWrapper .defaultscreenButton {\n      width: 24px;\n      height: 24px;\n      position: absolute;\n      right: 5px;\n      bottom: 5px;\n      cursor: pointer;\n      display: none; }\n  .reactVideoWrapper input[type=range] {\n    -webkit-appearance: none; }\n    .reactVideoWrapper input[type=range]:focus {\n      outline: none; }\n    .reactVideoWrapper input[type=range]::-webkit-slider-runnable-track {\n      cursor: pointer;\n      transition: all .2s ease; }\n    .reactVideoWrapper input[type=range]::-webkit-slider-thumb {\n      -webkit-appearance: none;\n      border: 1px solid transparent;\n      height: 5px;\n      width: 0px;\n      border-radius: 0px;\n      background: transparent;\n      cursor: pointer; }\n    .reactVideoWrapper input[type=range]::-moz-range-track {\n      cursor: pointer;\n      transition: all .2s ease;\n      width: 100%;\n      height: 8px;\n      background: transparent; }\n    .reactVideoWrapper input[type=range]::-moz-range-thumb {\n      height: 5px;\n      width: 0px;\n      background: transparent;\n      cursor: pointer;\n      border: 1px solid transparent; }\n    .reactVideoWrapper input[type=range]::-ms-track {\n      cursor: pointer;\n      transition: all .2s ease;\n      color: transparent;\n      width: 100%;\n      height: 8px;\n      background: transparent; }\n    .reactVideoWrapper input[type=range]::-ms-thumb {\n      height: 5px;\n      width: 0px;\n      background: transparent;\n      cursor: pointer; }\n", ""]);
	
	// exports


/***/ },
/* 8 */
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
/* 9 */
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
/* 10 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBlNmU0NDI1NWNiMjhlNDk1YjA3YyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlkZW8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pY29ucy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy8uL3NyYy9Qcm9ncmVzcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL1ZpZGVvQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL1ZpZGVvRXZlbnRIYW5kbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZS92aWRlby5zY3NzPzA2ZjciLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlL3ZpZGVvLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9WaWRlb1V0aWxzLmpzIl0sIm5hbWVzIjpbIlZpZGVvIiwib25NZXRhRGF0YUxvYWRlZCIsImlzSUUiLCJ2aWRlb1V0aWxzIiwic2V0U3RhdGUiLCJkaXNhYmxlQ29udHJvbHMiLCJtb3ZlT3ZlcmxheSIsImVuYWJsZUNvbnRyb2xzIiwiZW5hYmxlT3ZlcmxheSIsImxvYWRlZCIsIm9uVGltZVVwZGF0ZSIsImUiLCJ0YXJnZXQiLCJjdXJyZW50VGltZSIsImR1cmF0aW9uIiwicHJvZ3Jlc3MiLCJjYWxjdWxhdGVQZXJjZW50YWdlIiwidGltZSIsImZvcm1hdFRpbWVGcm9tU2Vjb25kcyIsIm9uUHJvZ3Jlc3NDaGFuZ2UiLCJwYXJzZUZsb2F0IiwidmFsdWUiLCJfdmlkZW8iLCJvblZvbHVtZVNldCIsInZvbHVtZSIsInZpZGVvQWN0aW9ucyIsInNldFZvbHVtZSIsImNoZWNrQnVmZmVyIiwiYnVmZmVyIiwiY2FsY3VsYXRlQnVmZmVyIiwicmVmZXJlbmNlVmlkZW9UYWciLCJ2aWRlbyIsImV2ZW50SGFuZGxlciIsImF0dGFjaExpc3RlbmVycyIsImNyZWF0ZUxpc3RlbmVycyIsImJ1ZmZlckNoZWNrVGltZXIiLCJzZXRJbnRlcnZhbCIsImZ1bGxzY3JlZW5DaGVja1RpbWVyIiwiY2hlY2tGdWxsc2NyZWVuIiwiZnVsbHNjcmVlbiIsImlzRnVsbHNjcmVlbiIsInVuZGVmaW5lZCIsIm9uTW91c2VNb3ZlIiwidHJpZ2dlck1vdXNlTW92ZSIsInN0YXRlIiwicHJvcHMiLCJhdXRvaGlkZSIsImNvbnRyb2xzIiwiYXR0cmlidXRlcyIsIl9jb250cm9sc1dyYXBwZXIiLCJzdHlsZSIsIm9wYWNpdHkiLCJvdmVybGF5IiwiX292ZXJsYXkiLCJfd3JhcHBlciIsImN1cnNvciIsImhpZGVUaW1lciIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJwbGF5aW5nIiwiZml4ZWRvdmVybGF5IiwiYXV0b2hpZGVjdXJzb3IiLCJvblBsYXkiLCJvblBhdXNlIiwib25Wb2x1bWVDaGFuZ2UiLCJwYXJzZUludCIsIm9uRnVsbHNjcmVlblNldCIsImdvRnVsbHNjcmVlbiIsIm9uRGVmYXVsdHNjcmVlblNldCIsImV4aXRGdWxsc2NyZWVuIiwib25XaGVlbCIsImRlbHRhWSIsInZvbHVtZVVwIiwidm9sdW1lRG93biIsIm9uS2V5RG93biIsInNob3J0Y3V0cyIsImtleUNvZGUiLCJ0b2dnbGVQbGF5IiwiZm9yd2FyZCIsImJhY2siLCJ0b2dnbGVGdWxsc2NyZWVuIiwidG9nZ2xlTXV0ZSIsInJlbW92ZUxpc3RlbmVycyIsImRldGFjaExpc3RlbmVycyIsImNsZWFySW50ZXJ2YWwiLCJzb3VyY2VzIiwibWFwIiwic291cmNlIiwic3JjIiwiY29uc29sZSIsImVycm9yIiwidmlkZW9Qcm9wcyIsInRhYkluZGV4IiwicmVmIiwiZGlzcGxheSIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwid2lkdGgiLCJoZWlnaHQiLCJzIiwiaSIsInR5cGUiLCJjb250cm9sc1dyYXBwZXIiLCJfcHJvZ3Jlc3MiLCJvbkNoYW5nZSIsIl9idWZmZXIiLCJzdGFydCIsImVuZCIsInJlYWRPbmx5IiwiX3BsYXkiLCJwbGF5IiwiX3BhdXNlIiwicGF1c2UiLCJfbXV0ZUJ1dHRvbiIsIm11dGUiLCJfdW5tdXRlQnV0dG9uIiwidW5tdXRlIiwiX3ZvbHVtZSIsImZ1bGxzY3JlbiIsImRlZmF1bHRzY3JlZW4iLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJhcnJheSIsImlzUmVxdWlyZWQiLCJvYmplY3QiLCJvbmVPZlR5cGUiLCJzdHJpbmciLCJudW1iZXIiLCJib29sIiwiZGVmYXVsdFByb3BzIiwiaWNvbnMiLCJQcm9ncmVzcyIsImNvbG9ycyIsIm1heCIsImJhY2tncm91bmRJbWFnZSIsInN0ZXAiLCJtaW4iLCJWaWRlb0FjdGlvbnMiLCJ2aWRlb0NvbXBvbmVudCIsImJlZm9yZU11dGUiLCJtdXRlZCIsIm5ld1RpbWUiLCJlbGVtZW50IiwicmVxdWVzdEZ1bGxzY3JlZW4iLCJtc1JlcXVlc3RGdWxsc2NyZWVuIiwibW96UmVxdWVzdEZ1bGxTY3JlZW4iLCJ3ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbiIsImRvY3VtZW50IiwibXNFeGl0RnVsbHNjcmVlbiIsIm1vekNhbmNlbEZ1bGxTY3JlZW4iLCJ3ZWJraXRFeGl0RnVsbHNjcmVlbiIsIlZpZGVvRXZlbnRIYW5kbGVyIiwiZXZlbnRMaXN0ZW5lcnMiLCJldmVudHMiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImxpc3RlbmVyIiwiZXZlbnROYW1lIiwiZXZlbnQiLCJwdXNoIiwibGVuZ3RoIiwiVmlkZW9VdGlscyIsInNlY29uZHMiLCJob3VycyIsIm1pbnV0ZXMiLCJmcmFjdGlvbiIsInRvdGFsIiwicGVyY2VudGFnZSIsIlVBIiwid2luZG93IiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwibWF0Y2giLCJib3R0b20iLCJsYXN0QnVmZmVyZWQiLCJidWZmZXJlZCIsIndlYmtpdElzRnVsbFNjcmVlbiIsImZ1bGxzY3JlZW5FbGVtZW50IiwibXNGdWxsc2NyZWVuRWxlbWVudCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdENBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7S0FFTUEsSzs7O0FBRUYsc0JBQWE7QUFBQTs7QUFBQTs7QUFBQSxlQThCYkMsZ0JBOUJhLEdBOEJNLGFBQUs7QUFDcEIsaUJBQUlDLE9BQU8sTUFBS0MsVUFBTCxDQUFnQkQsSUFBaEIsRUFBWDtBQUNBLG1CQUFLRSxRQUFMLENBQWM7QUFDVkY7QUFEVSxjQUFkLEVBRUcsWUFBTTtBQUNMLHFCQUFJQSxJQUFKLEVBQVU7QUFDTiwyQkFBS0MsVUFBTCxDQUFnQkUsZUFBaEI7QUFDQSwyQkFBS0YsVUFBTCxDQUFnQkcsV0FBaEI7QUFDSCxrQkFIRCxNQUdLO0FBQ0QsMkJBQUtILFVBQUwsQ0FBZ0JJLGNBQWhCO0FBQ0g7QUFDRCx1QkFBS0osVUFBTCxDQUFnQkssYUFBaEI7QUFDQSx1QkFBS0osUUFBTCxDQUFjLEVBQUVLLFFBQVEsSUFBVixFQUFkO0FBQ0gsY0FYRDtBQVlILFVBNUNZOztBQUFBLGVBOENiQyxZQTlDYSxHQThDRSxhQUFLO0FBQUEsNkJBQ2NDLEVBQUVDLE1BRGhCO0FBQUEsaUJBQ1hDLFdBRFcsYUFDWEEsV0FEVztBQUFBLGlCQUNFQyxRQURGLGFBQ0VBLFFBREY7O0FB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O0FBQ2xERCxnQ0FBZTRHLFNBQVMrQixtQkFBVCxLQUFpQyxJQUFoRDtBQUNIO0FBQ0Qsb0JBQU8zSSxZQUFQO0FBQ0g7Ozs7OzttQkF6RWdCMEgsVSIsImZpbGUiOiJ2aWRlby5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcInJlYWN0XCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcInJlYWN0XCJdLCBmYWN0b3J5KTtcblx0ZWxzZSB7XG5cdFx0dmFyIGEgPSB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSkgOiBmYWN0b3J5KHJvb3RbXCJyZWFjdFwiXSk7XG5cdFx0Zm9yKHZhciBpIGluIGEpICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuXHR9XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzJfXykge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBlNmU0NDI1NWNiMjhlNDk1YjA3YyIsImltcG9ydCBpY29ucyBmcm9tICcuL2Fzc2V0cy9pY29ucyc7XHJcbmltcG9ydCBQcm9ncmVzcyBmcm9tICcuL1Byb2dyZXNzJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFZpZGVvQWN0aW9ucyBmcm9tICcuL2xpYi9WaWRlb0FjdGlvbnMnO1xyXG5pbXBvcnQgVmlkZW9FdmVudEhhbmRsZXIgZnJvbSAnLi9saWIvVmlkZW9FdmVudEhhbmRsZXInO1xyXG5pbXBvcnQgVmlkZW9TdHlsZSBmcm9tICcuL3N0eWxlL3ZpZGVvLnNjc3MnO1xyXG5pbXBvcnQgVmlkZW9VdGlscyBmcm9tICcuL2xpYi9WaWRlb1V0aWxzJztcclxuXHJcbmNsYXNzIFZpZGVvIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmV2ZW50SGFuZGxlciA9IG5ldyBWaWRlb0V2ZW50SGFuZGxlcih0aGlzKTtcclxuICAgICAgICB0aGlzLnZpZGVvVXRpbHMgPSBuZXcgVmlkZW9VdGlscyh0aGlzKTtcclxuICAgICAgICB0aGlzLnZpZGVvQWN0aW9ucyA9IG5ldyBWaWRlb0FjdGlvbnModGhpcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgYnVmZmVyOiAwLFxyXG4gICAgICAgICAgICBwcm9ncmVzczogMCxcclxuICAgICAgICAgICAgdm9sdW1lOiAxLFxyXG4gICAgICAgICAgICBmdWxsc2NyZWVuOiBmYWxzZSxcclxuICAgICAgICAgICAgdGltZTogXCIwMDowMDowMFwiLFxyXG4gICAgICAgICAgICBwbGF5aW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgbG9hZGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgaXNJRTogZmFsc2UsXHJcbiAgICAgICAgICAgIGN1cnJlbnRUaW1lOiAwXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmJ1ZmZlckNoZWNrVGltZXIgPSB7fTtcclxuICAgICAgICB0aGlzLmZ1bGxzY3JlZW5DaGVja1RpbWVyID0ge307XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKXtcclxuICAgICAgICBsZXQgdmlkZW8gPSB0aGlzLl92aWRlbztcclxuICAgICAgICBpZiggIXZpZGVvIClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuZXZlbnRIYW5kbGVyLnJlbW92ZUxpc3RlbmVycygpO1xyXG4gICAgICAgIHRoaXMuZXZlbnRIYW5kbGVyLmRldGFjaExpc3RlbmVycygpO1xyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwoIHRoaXMuYnVmZmVyQ2hlY2tUaW1lciApO1xyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwoIHRoaXMuZnVsbHNjcmVlbkNoZWNrVGltZXIgKTtcclxuICAgIH1cclxuXHJcbiAgICBvbk1ldGFEYXRhTG9hZGVkID0gZSA9PiB7XHJcbiAgICAgICAgbGV0IGlzSUUgPSB0aGlzLnZpZGVvVXRpbHMuaXNJRSgpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBpc0lFXHJcbiAgICAgICAgfSwgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiggaXNJRSApe1xyXG4gICAgICAgICAgICAgICAgdGhpcy52aWRlb1V0aWxzLmRpc2FibGVDb250cm9scygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy52aWRlb1V0aWxzLm1vdmVPdmVybGF5KCk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgdGhpcy52aWRlb1V0aWxzLmVuYWJsZUNvbnRyb2xzKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy52aWRlb1V0aWxzLmVuYWJsZU92ZXJsYXkoKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRlZDogdHJ1ZSB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvblRpbWVVcGRhdGUgPSBlID0+IHtcclxuICAgICAgICBsZXQge2N1cnJlbnRUaW1lLCBkdXJhdGlvbn0gPSBlLnRhcmdldFxyXG4gICAgICAgIGxldCBwcm9ncmVzcyA9IHRoaXMudmlkZW9VdGlscy5jYWxjdWxhdGVQZXJjZW50YWdlKGN1cnJlbnRUaW1lLCBkdXJhdGlvbik7XHJcbiAgICAgICAgbGV0IHRpbWUgPSB0aGlzLnZpZGVvVXRpbHMuZm9ybWF0VGltZUZyb21TZWNvbmRzKGN1cnJlbnRUaW1lKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgcHJvZ3Jlc3MsXHJcbiAgICAgICAgICAgIHRpbWUsXHJcbiAgICAgICAgICAgIGN1cnJlbnRUaW1lXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Qcm9ncmVzc0NoYW5nZSA9IGUgPT4ge1xyXG4gICAgICAgIGxldCBwcm9ncmVzcyA9IHBhcnNlRmxvYXQoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBwcm9ncmVzc1xyXG4gICAgICAgIH0sICgpID0+IHtcclxuICAgICAgICAgICAgbGV0IHtkdXJhdGlvbn0gPSB0aGlzLl92aWRlbztcclxuICAgICAgICAgICAgbGV0IHRpbWUgPSBwcm9ncmVzcypkdXJhdGlvbi8xMDA7XHJcbiAgICAgICAgICAgIHRoaXMuX3ZpZGVvLmN1cnJlbnRUaW1lID0gdGltZTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIG9uVm9sdW1lU2V0ID0gZSA9PiB7XHJcbiAgICAgICAgbGV0IHZvbHVtZSA9IHBhcnNlRmxvYXQoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgIHRoaXMudmlkZW9BY3Rpb25zLnNldFZvbHVtZSh2b2x1bWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrQnVmZmVyID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCBidWZmZXIgPSB0aGlzLnZpZGVvVXRpbHMuY2FsY3VsYXRlQnVmZmVyKCk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGJ1ZmZlclxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZmVyZW5jZVZpZGVvVGFnID0gdmlkZW8gPT4ge1xyXG4gICAgICAgIHRoaXMuX3ZpZGVvID0gdmlkZW87XHJcbiAgICAgICAgdGhpcy5ldmVudEhhbmRsZXIuYXR0YWNoTGlzdGVuZXJzKCk7XHJcbiAgICAgICAgdGhpcy5ldmVudEhhbmRsZXIuY3JlYXRlTGlzdGVuZXJzKCk7XHJcbiAgICAgICAgdGhpcy5idWZmZXJDaGVja1RpbWVyID0gc2V0SW50ZXJ2YWwoIHRoaXMuY2hlY2tCdWZmZXIsIDUwMCApO1xyXG4gICAgICAgIHRoaXMuZnVsbHNjcmVlbkNoZWNrVGltZXIgPSBzZXRJbnRlcnZhbCggdGhpcy5jaGVja0Z1bGxzY3JlZW4sIDUwMCApO1xyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrRnVsbHNjcmVlbiA9ICgpID0+IHtcclxuICAgICAgICBsZXQgZnVsbHNjcmVlbiA9IHRoaXMudmlkZW9VdGlscy5pc0Z1bGxzY3JlZW4oKTtcclxuICAgICAgICBpZiggZnVsbHNjcmVlbiAhPT0gdW5kZWZpbmVkICl7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBmdWxsc2NyZWVuIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbk1vdXNlTW92ZSA9IGUgPT4ge1xyXG4gICAgICAgIHRoaXMudHJpZ2dlck1vdXNlTW92ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHRyaWdnZXJNb3VzZU1vdmUgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYoIHRoaXMuc3RhdGUubG9hZGVkICl7XHJcbiAgICAgICAgICAgIGlmKCAhdGhpcy5wcm9wcy5hdXRvaGlkZSApXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIGlmKCB0aGlzLnByb3BzLmNvbnRyb2xzICYmICF0aGlzLnByb3BzLmF0dHJpYnV0ZXMuY29udHJvbHMgKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5fY29udHJvbHNXcmFwcGVyLnN0eWxlLm9wYWNpdHkgPSBcIjFcIjtcclxuICAgICAgICAgICAgaWYoIHRoaXMucHJvcHMub3ZlcmxheSApXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9vdmVybGF5LnN0eWxlLm9wYWNpdHkgPSBcIjFcIjtcclxuICAgICAgICAgICAgdGhpcy5fd3JhcHBlci5zdHlsZS5jdXJzb3IgPSBcImF1dG9cIjtcclxuICAgICAgICAgICAgaWYoIHRoaXMuaGlkZVRpbWVyIClcclxuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmhpZGVUaW1lcik7XHJcbiAgICAgICAgICAgIHRoaXMuaGlkZVRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiggdGhpcy5zdGF0ZS5wbGF5aW5nICl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY29udHJvbHNXcmFwcGVyLnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcclxuICAgICAgICAgICAgICAgICAgICBpZiggdGhpcy5wcm9wcy5vdmVybGF5ICYmICF0aGlzLnByb3BzLmZpeGVkb3ZlcmxheSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX292ZXJsYXkuc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKCB0aGlzLnByb3BzLmF1dG9oaWRlY3Vyc29yIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fd3JhcHBlci5zdHlsZS5jdXJzb3IgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH0sIDMwMDAgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25QbGF5ID0gZSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHBsYXlpbmc6IHRydWVcclxuICAgICAgICB9LCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlck1vdXNlTW92ZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uUGF1c2UgPSBlID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgcGxheWluZzogZmFsc2VcclxuICAgICAgICB9LCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlck1vdXNlTW92ZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uVm9sdW1lQ2hhbmdlID0gZSA9PiB7XHJcbiAgICAgICAgbGV0IHZvbHVtZSA9IHBhcnNlSW50KGUudGFyZ2V0LnZvbHVtZSoxMDApLzEwMDtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgdm9sdW1lXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25GdWxsc2NyZWVuU2V0ID0gZSA9PiB7XHJcbiAgICAgICAgdGhpcy52aWRlb0FjdGlvbnMuZ29GdWxsc2NyZWVuKHRoaXMuX3dyYXBwZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGVmYXVsdHNjcmVlblNldCA9IGUgPT4ge1xyXG4gICAgICAgIHRoaXMudmlkZW9BY3Rpb25zLmV4aXRGdWxsc2NyZWVuKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25XaGVlbCA9IGUgPT4ge1xyXG4gICAgICAgIGlmKGUuZGVsdGFZIDwgMCl7XHJcbiAgICAgICAgICAgIHRoaXMudmlkZW9BY3Rpb25zLnZvbHVtZVVwKCk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMudmlkZW9BY3Rpb25zLnZvbHVtZURvd24oKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25LZXlEb3duID0gZSA9PiB7XHJcbiAgICAgICAgaWYoIHRoaXMucHJvcHMuc2hvcnRjdXRzICl7XHJcbiAgICAgICAgICAgIGxldCBrZXlDb2RlID0gZS5rZXlDb2RlO1xyXG4gICAgICAgICAgICBzd2l0Y2goIGtleUNvZGUgKXtcclxuICAgICAgICAgICAgICAgIGNhc2UgMzI6IHsgLy8gU3BhY2VcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZpZGVvQWN0aW9ucy50b2dnbGVQbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXNlIDM5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52aWRlb0FjdGlvbnMuZm9yd2FyZCgpOyAvLyBSaWdodCBhcnJvd1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2FzZSAzNzoge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmlkZW9BY3Rpb25zLmJhY2soKTsgLy8gTGVmdCBhcnJvd1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2FzZSAzODoge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmlkZW9BY3Rpb25zLnZvbHVtZVVwKCk7IC8vIFVwIGFycm93XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQwOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52aWRlb0FjdGlvbnMudm9sdW1lRG93bigpOyAvLyBEb3duIGFycm93XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXNlIDcwOiB7IC8vIEZcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZpZGVvQWN0aW9ucy50b2dnbGVGdWxsc2NyZWVuKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc3OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52aWRlb0FjdGlvbnMudG9nZ2xlTXV0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGxldCBzb3VyY2VzID0gdGhpcy5wcm9wcy5zb3VyY2VzLm1hcCggc291cmNlID0+IHtcclxuICAgICAgICAgICAgaWYoIHR5cGVvZiBzb3VyY2UgPT0gXCJzdHJpbmdcIiApe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgc3JjOiBzb3VyY2UgfTtcclxuICAgICAgICAgICAgfWVsc2UgaWYoIHR5cGVvZiBzb3VyY2UgPT0gXCJvYmplY3RcIiApe1xyXG4gICAgICAgICAgICAgICAgaWYoIHNvdXJjZS5zcmMgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2Ygc291cmNlLnNyYyAhPSBcInN0cmluZ1wiICl7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvciggXCJTb3VyY2UgbXVzdCBiZSBhIHN0cmluZyBvciBhbiBvYmplY3QgY29udGFpbmluZyBhICdzcmMnIGtleS5cXG5cIiwgc291cmNlICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc291cmNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxldCB2aWRlb1Byb3BzID0gdGhpcy5wcm9wcy5hdHRyaWJ1dGVzO1xyXG4gICAgICAgIGlmKCB0aGlzLnN0YXRlLmlzSUUgKXtcclxuICAgICAgICAgICAgdmlkZW9Qcm9wcy5jb250cm9scyA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZWFjdFZpZGVvV3JhcHBlclwiXHJcbiAgICAgICAgICAgICAgICBvbk1vdXNlTW92ZT17dGhpcy5vbk1vdXNlTW92ZX1cclxuICAgICAgICAgICAgICAgIHRhYkluZGV4PXt0aGlzLnByb3BzLnRhYkluZGV4fVxyXG4gICAgICAgICAgICAgICAgb25LZXlEb3duPXt0aGlzLm9uS2V5RG93bn1cclxuICAgICAgICAgICAgICAgIG9uV2hlZWw9e3RoaXMub25XaGVlbH1cclxuICAgICAgICAgICAgICAgIHJlZj17cmVmID0+IHRoaXMuX3dyYXBwZXIgPSByZWZ9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvdmVybGF5Q29udGFpbmVyXCJcclxuICAgICAgICAgICAgICAgICAgICBvbk1vdXNlTW92ZT17dGhpcy5vbk1vdXNlTW92ZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkRvdWJsZUNsaWNrPXt0aGlzLnZpZGVvQWN0aW9ucy50b2dnbGVGdWxsc2NyZWVufVxyXG4gICAgICAgICAgICAgICAgICAgIHJlZj17cmVmID0+IHRoaXMuX292ZXJsYXkgPSByZWZ9XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogdGhpcy5wcm9wcy5vdmVybGF5ID8gXCJibG9ja1wiIDogXCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8dmlkZW9cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3RoaXMucHJvcHMuY2xhc3NOYW1lfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgb25Nb3VzZU1vdmU9e3RoaXMub25Nb3VzZU1vdmV9XHJcbiAgICAgICAgICAgICAgICAgICAgb25Eb3VibGVDbGljaz17dGhpcy52aWRlb0FjdGlvbnMudG9nZ2xlRnVsbHNjcmVlbn1cclxuICAgICAgICAgICAgICAgICAgICByZWY9e3RoaXMucmVmZXJlbmNlVmlkZW9UYWd9XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9e3RoaXMucHJvcHMud2lkdGh9XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXt0aGlzLnByb3BzLmhlaWdodH1cclxuICAgICAgICAgICAgICAgICAgICB7Li4udmlkZW9Qcm9wc31cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZXMubWFwKCAocywgaSkgPT4gPHNvdXJjZSBrZXk9e2l9IHNyYz17cy5zcmN9IHR5cGU9e3MudHlwZSB8fCBudWxsfSAvPilcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC92aWRlbz5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICByZWY9eyByZWYgPT4gdGhpcy5fY29udHJvbHNXcmFwcGVyID0gcmVmIH1cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZS5jb250cm9sc1dyYXBwZXIgfHwge319XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29udHJvbHNXcmFwcGVyXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlZWtCYXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFByb2dyZXNzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9eyByZWYgPT4gdGhpcy5fcHJvZ3Jlc3MgPSByZWYgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucHJvZ3Jlc3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwcm9ncmVzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U6IHRoaXMub25Qcm9ncmVzc0NoYW5nZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFByb2dyZXNzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9eyByZWYgPT4gdGhpcy5fYnVmZmVyID0gcmVmIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmJ1ZmZlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9IFwiYnVmZmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9ycz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0OiBcIiM3NzdcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmQ6IFwiIzY2NlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2s6IFwiIzAwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRPbmx5OiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicGxheUJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17cmVmID0+IHRoaXMuX3BsYXkgPSByZWZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMudmlkZW9BY3Rpb25zLnBsYXl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiB0aGlzLnN0YXRlLnBsYXlpbmcgPyBcIm5vbmVcIiA6IFwiYmxvY2tcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2ljb25zLnBsYXl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwYXVzZUJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17IHJlZiA9PiB0aGlzLl9wYXVzZSA9IHJlZn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy52aWRlb0FjdGlvbnMucGF1c2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiB0aGlzLnN0YXRlLnBsYXlpbmcgPyBcImJsb2NrXCIgOiBcIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2ljb25zLnBhdXNlfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXV0ZUJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17cmVmID0+IHRoaXMuX211dGVCdXR0b24gPSByZWZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMudmlkZW9BY3Rpb25zLm11dGV9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7aWNvbnMudm9sdW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidW5tdXRlQnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtyZWYgPT4gdGhpcy5fdW5tdXRlQnV0dG9uID0gcmVmfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnZpZGVvQWN0aW9ucy51bm11dGV9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7aWNvbnMubXV0ZX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZvbHVtZUJhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UHJvZ3Jlc3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbj1cIjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4PVwiMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGVwPVwiYW55XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17cmVmID0+IHRoaXMuX3ZvbHVtZSA9IHJlZn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnZvbHVtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZTogdGhpcy5vblZvbHVtZVNldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9ycz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0OiBcIiNGRkZcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmQ6IFwiI0ZGRlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2s6IFwicmdiYSggMCwgMCwgMCwgMC4zIClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInZvbHVtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGltZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS50aW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZ1bGxzY3JlZW5CdXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uRnVsbHNjcmVlblNldH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRoaXMuc3RhdGUuZnVsbHNjcmVuID8gXCJub25lXCIgOiBcImJsb2NrXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtpY29ucy5mdWxsc2NyZWVufVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGVmYXVsdHNjcmVlbkJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25EZWZhdWx0c2NyZWVuU2V0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogdGhpcy5zdGF0ZS5mdWxsc2NyZWVuID8gXCJibG9ja1wiIDogXCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtpY29ucy5kZWZhdWx0c2NyZWVufVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufTtcclxuXHJcblZpZGVvLnByb3BUeXBlcyA9IHtcclxuICAgIHNvdXJjZXM6IFJlYWN0LlByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxyXG4gICAgc3R5bGU6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsXHJcbiAgICB3aWR0aDogUmVhY3QuUHJvcFR5cGVzLm9uZU9mVHlwZShbXHJcbiAgICAgICAgUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgICBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyXHJcbiAgICBdKSxcclxuICAgIGhlaWdodDogUmVhY3QuUHJvcFR5cGVzLm9uZU9mVHlwZShbXHJcbiAgICAgICAgUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgICBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyXHJcbiAgICBdKSxcclxuICAgIGNsYXNzTmFtZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGF0dHJpYnV0ZXM6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsXHJcbiAgICBjb250cm9sczogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXHJcbiAgICAvLyBBdXRvaGlkZSBjb250cm9scyBhbmQgb3ZlcmxheVxyXG4gICAgYXV0b2hpZGU6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxyXG4gICAgYXV0b2hpZGVjdXJzb3I6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxyXG4gICAgLy8gT3ZlcmxheSBlbmFibGVkXHJcbiAgICBvdmVybGF5OiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcclxuICAgIC8vIE92ZXJsYXkgZG9lcyBub3QgYXV0b2hpZGVcclxuICAgIGZpeGVkb3ZlcmxheTogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXHJcbiAgICAvLyBFbmFibGUgb3IgZGlzYWJsZSBrZXlib2FyZCBzaG9ydGN1dHNcclxuICAgIHNob3J0Y3V0czogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXHJcbiAgICB0YWJJbmRleDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZ1xyXG59O1xyXG5cclxuVmlkZW8uZGVmYXVsdFByb3BzID0ge1xyXG4gICAgc291cmNlczogW10sXHJcbiAgICBzdHlsZToge30sXHJcbiAgICBjbGFzc05hbWU6IFwiXCIsXHJcbiAgICBhdHRyaWJ1dGVzOiB7fSxcclxuICAgIGNvbnRyb2xzOiB0cnVlLFxyXG4gICAgYXV0b2hpZGU6IHRydWUsXHJcbiAgICBhdXRvaGlkZWN1cnNvcjogdHJ1ZSxcclxuICAgIG92ZXJsYXk6IHRydWUsXHJcbiAgICBmaXhlZG92ZXJsYXk6IGZhbHNlLFxyXG4gICAgd2lkdGg6IFwiYXV0b1wiLFxyXG4gICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgIHNob3J0Y3V0czogdHJ1ZSxcclxuICAgIHRhYkluZGV4OiBcIjFcIlxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVmlkZW87XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92aWRlby5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5sZXQgaWNvbnMgPSB7XG4gICAgcGxheTogKFxuICAgICAgICA8c3ZnIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNOCA1djE0bDExLTd6XCIgZmlsbD1cIndoaXRlXCI+PC9wYXRoPlxuICAgICAgICA8L3N2Zz5cbiAgICApLFxuICAgIHBhdXNlOiAoXG4gICAgICAgIDxzdmcgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxuICAgICAgICAgICAgPHBhdGggZD1cIk02IDE5aDRWNUg2djE0em04LTE0djE0aDRWNWgtNHpcIiBmaWxsPVwid2hpdGVcIi8+XG4gICAgICAgIDwvc3ZnPlxuICAgICksXG4gICAgZnVsbHNjcmVlbjogKFxuICAgICAgICA8c3ZnIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNNyAxNEg1djVoNXYtMkg3di0zem0tMi00aDJWN2gzVjVINXY1em0xMiA3aC0zdjJoNXYtNWgtMnYzek0xNCA1djJoM3YzaDJWNWgtNXpcIiBmaWxsPVwid2hpdGVcIi8+XG4gICAgICAgIDwvc3ZnPlxuICAgICksXG4gICAgZGVmYXVsdHNjcmVlbjogKFxuICAgICAgICA8c3ZnIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNNSAxNmgzdjNoMnYtNUg1djJ6bTMtOEg1djJoNVY1SDh2M3ptNiAxMWgydi0zaDN2LTJoLTV2NXptMi0xMVY1aC0ydjVoNVY4aC0zelwiIGZpbGw9XCJ3aGl0ZVwiLz5cbiAgICAgICAgPC9zdmc+XG4gICAgKSxcbiAgICB2b2x1bWU6IChcbiAgICAgICAgPHN2ZyB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTTMgOXY2aDRsNSA1VjRMNyA5SDN6bTEzLjUgM2MwLTEuNzctMS4wMi0zLjI5LTIuNS00LjAzdjguMDVjMS40OC0uNzMgMi41LTIuMjUgMi41LTQuMDJ6TTE0IDMuMjN2Mi4wNmMyLjg5Ljg2IDUgMy41NCA1IDYuNzFzLTIuMTEgNS44NS01IDYuNzF2Mi4wNmM0LjAxLS45MSA3LTQuNDkgNy04Ljc3cy0yLjk5LTcuODYtNy04Ljc3elwiIGZpbGw9XCJ3aGl0ZVwiLz5cbiAgICAgICAgPC9zdmc+XG4gICAgKSxcbiAgICBtdXRlOiAoXG4gICAgICAgIDxzdmcgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxuICAgICAgICAgICAgPHBhdGggZD1cIk03IDl2Nmg0bDUgNVY0bC01IDVIN3pcIiBmaWxsPVwid2hpdGVcIi8+XG4gICAgICAgIDwvc3ZnPlxuICAgICksXG59O1xuZXhwb3J0IGRlZmF1bHQgaWNvbnM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXNzZXRzL2ljb25zLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWFjdFwiXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jbGFzcyBQcm9ncmVzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50V2lsbE1vdW50KCl7XHJcbiAgICAgICAgbGV0IGNvbG9ycyA9IHRoaXMucHJvcHMuY29sb3JzO1xyXG4gICAgICAgIGlmKCAhY29sb3JzLnN0YXJ0IHx8ICFjb2xvcnMuZW5kIHx8ICFjb2xvcnMuYmFjayApXHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoIFwiQ29sb3JzIHByb3AgbXVzdCBoYXZlIFxcXCJzdGFydFxcXCIsIFxcXCJlbmRcXFwiIGFuZCBcXFwiYmFja1xcXCIgYXR0cmlidXRlcy5cIiApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCl7fVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGxldCB2YWx1ZSA9IDEwMC9wYXJzZUludCh0aGlzLnByb3BzLm1heCkqdGhpcy5wcm9wcy52YWx1ZTtcclxuICAgICAgICBsZXQgc3R5bGUgPSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJHt0aGlzLnByb3BzLmNvbG9ycy5zdGFydH0gMCUsICR7dGhpcy5wcm9wcy5jb2xvcnMuZW5kfSAke3ZhbHVlfSUsICR7dGhpcy5wcm9wcy5jb2xvcnMuYmFja30gJHt2YWx1ZX0lLCAke3RoaXMucHJvcHMuY29sb3JzLmJhY2t9IClgXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJyYW5nZVwiXHJcbiAgICAgICAgICAgICAgICBzdGVwPXt0aGlzLnByb3BzLnN0ZXB9XHJcbiAgICAgICAgICAgICAgICBtaW49e3RoaXMucHJvcHMubWlufVxyXG4gICAgICAgICAgICAgICAgbWF4PXt0aGlzLnByb3BzLm1heH1cclxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzTmFtZX1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZX1cclxuICAgICAgICAgICAgICAgIHJlZj17IHJlZiA9PiB0aGlzLl9wcm9ncmVzcyA9IHJlZiB9XHJcbiAgICAgICAgICAgICAgICB7Li4udGhpcy5wcm9wcy5hdHRyaWJ1dGVzfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5Qcm9ncmVzcy5wcm9wVHlwZXMgPSB7XHJcbiAgICBzdGVwOiBSZWFjdC5Qcm9wVHlwZXMub25lT2ZUeXBlKFtcclxuICAgICAgICBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgICAgIFJlYWN0LlByb3BUeXBlcy5zdHJpbmdcclxuICAgIF0pLFxyXG4gICAgbWluOiBSZWFjdC5Qcm9wVHlwZXMub25lT2ZUeXBlKFtcclxuICAgICAgICBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgICAgIFJlYWN0LlByb3BUeXBlcy5zdHJpbmdcclxuICAgIF0pLFxyXG4gICAgbWF4OiBSZWFjdC5Qcm9wVHlwZXMub25lT2ZUeXBlKFtcclxuICAgICAgICBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgICAgIFJlYWN0LlByb3BUeXBlcy5zdHJpbmdcclxuICAgIF0pLFxyXG4gICAgdmFsdWU6IFJlYWN0LlByb3BUeXBlcy5vbmVPZlR5cGUoW1xyXG4gICAgICAgIFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXHJcbiAgICAgICAgUmVhY3QuUHJvcFR5cGVzLnN0cmluZ1xyXG4gICAgXSksXHJcbiAgICBjbGFzc05hbWU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAvLyBTdGFuZGFyZCBodG1sIHRhZyBhdHRyaWJ1dGVzXHJcbiAgICBhdHRyaWJ1dGVzOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgLy8gQ29sb3IgcGF0dGVybiBvYmplY3RcclxuICAgIGNvbG9yczogUmVhY3QuUHJvcFR5cGVzLm9iamVjdFxyXG59XHJcblxyXG5Qcm9ncmVzcy5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgICBzdGVwOiAwLjEsXHJcbiAgICBtaW46IDAsXHJcbiAgICBtYXg6IDEwMCxcclxuICAgIHZhbHVlOiAwLFxyXG4gICAgY2xhc3NOYW1lOiBcIlwiLFxyXG4gICAgYXR0cmlidXRlczoge30sXHJcbiAgICAvLyBTdGFydCBhbmQgRW5kIHByb2R1Y2UgYSBsaW5lYXIgZnJvbSBsZWZ0IHRvIHJpZ2h0IG9uIHRoZSB0cmFjayBvZiB0aGUgcHJvZ3Jlc3MgYmFyXHJcbiAgICAvLyBCYWNrIGlzIHRoZSBjb2xvciBmb3IgdGhlIHJpZ2h0IHNpZGUgb2YgdGhlIHRyYWNrXHJcbiAgICBjb2xvcnM6IHtcclxuICAgICAgICBzdGFydDogXCIjQTkwMzI5XCIsXHJcbiAgICAgICAgZW5kOiBcIiM2RDAwMTlcIixcclxuICAgICAgICBiYWNrOiBcInJnYmEoIDAsIDAsIDAsIDAuNCApXCJcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZ3Jlc3M7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9Qcm9ncmVzcy5qcyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZGVvQWN0aW9uc3tcclxuICAgIGNvbnN0cnVjdG9yKHZpZGVvQ29tcG9uZW50KXtcclxuICAgICAgICB0aGlzLnZpZGVvQ29tcG9uZW50ID0gdmlkZW9Db21wb25lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgcGxheSA9ICgpID0+IHtcclxuICAgICAgICBpZiggIXRoaXMudmlkZW9Db21wb25lbnQuX3ZpZGVvIClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMudmlkZW9Db21wb25lbnQuX3ZpZGVvLnBsYXkoKTtcclxuICAgIH1cclxuXHJcbiAgICBwYXVzZSA9ICgpID0+IHtcclxuICAgICAgICBpZiggIXRoaXMudmlkZW9Db21wb25lbnQuX3ZpZGVvIClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMudmlkZW9Db21wb25lbnQuX3ZpZGVvLnBhdXNlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbXV0ZSA9ICgpID0+IHtcclxuICAgICAgICBpZiggIXRoaXMudmlkZW9Db21wb25lbnQuX3ZpZGVvIClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuYmVmb3JlTXV0ZSA9IHRoaXMudmlkZW9Db21wb25lbnQuc3RhdGUudm9sdW1lO1xyXG4gICAgICAgIHRoaXMudmlkZW9Db21wb25lbnQuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICB2b2x1bWU6IDBcclxuICAgICAgICB9LCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubXV0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnZpZGVvQ29tcG9uZW50Ll92aWRlby52b2x1bWUgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLnZpZGVvQ29tcG9uZW50Ll9tdXRlQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgdGhpcy52aWRlb0NvbXBvbmVudC5fdW5tdXRlQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdW5tdXRlID0gKCkgPT4ge1xyXG4gICAgICAgIGlmKCAhdGhpcy52aWRlb0NvbXBvbmVudC5fdmlkZW8gKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgbGV0IHZvbHVtZSA9IHRoaXMuYmVmb3JlTXV0ZSB8fCAxO1xyXG4gICAgICAgIHRoaXMudmlkZW9Db21wb25lbnQuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICB2b2x1bWVcclxuICAgICAgICB9LCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubXV0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy52aWRlb0NvbXBvbmVudC5fdmlkZW8udm9sdW1lID0gdm9sdW1lO1xyXG4gICAgICAgICAgICB0aGlzLnZpZGVvQ29tcG9uZW50Ll9tdXRlQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgICAgIHRoaXMudmlkZW9Db21wb25lbnQuX3VubXV0ZUJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdm9sdW1lVXAgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHZvbHVtZSA9IHRoaXMudmlkZW9Db21wb25lbnQuc3RhdGUudm9sdW1lO1xyXG4gICAgICAgIGlmKCB2b2x1bWUgPj0gMSApXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB2b2x1bWUgKz0gMC4xXHJcbiAgICAgICAgdGhpcy5zZXRWb2x1bWUodm9sdW1lKTtcclxuICAgIH1cclxuXHJcbiAgICB2b2x1bWVEb3duID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCB2b2x1bWUgPSB0aGlzLnZpZGVvQ29tcG9uZW50LnN0YXRlLnZvbHVtZTtcclxuICAgICAgICBpZiggdm9sdW1lIDw9IDAgKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgdm9sdW1lIC09IDAuMVxyXG4gICAgICAgIHRoaXMuc2V0Vm9sdW1lKHZvbHVtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Vm9sdW1lID0gKHZvbHVtZSkgPT4ge1xyXG4gICAgICAgIHRoaXMudmlkZW9Db21wb25lbnQuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICB2b2x1bWVcclxuICAgICAgICB9LCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudmlkZW9Db21wb25lbnQuX3ZpZGVvLnZvbHVtZSA9IHZvbHVtZTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBiYWNrID0gKCkgPT4ge1xyXG4gICAgICAgIGlmKCAhdGhpcy52aWRlb0NvbXBvbmVudC5fdmlkZW8gKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgbGV0IHtjdXJyZW50VGltZSwgZHVyYXRpb259ID0gdGhpcy52aWRlb0NvbXBvbmVudC5fdmlkZW87XHJcbiAgICAgICAgbGV0IG5ld1RpbWUgPSAwO1xyXG4gICAgICAgIGlmKCBjdXJyZW50VGltZSAtNSA+IDAgKXtcclxuICAgICAgICAgICAgbmV3VGltZSA9IGN1cnJlbnRUaW1lIC01O1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnZpZGVvQ29tcG9uZW50Ll92aWRlby5jdXJyZW50VGltZSA9IG5ld1RpbWU7XHJcbiAgICAgICAgbGV0IHByb2dyZXNzID0gbmV3VGltZS9kdXJhdGlvbioxMDA7XHJcbiAgICAgICAgdGhpcy52aWRlb0NvbXBvbmVudC5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHByb2dyZXNzXHJcbiAgICAgICAgfSwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnZpZGVvQ29tcG9uZW50Lm9uVGltZVVwZGF0ZSh7dGFyZ2V0OiB0aGlzLnZpZGVvQ29tcG9uZW50Ll92aWRlb30pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZvcndhcmQgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYoICF0aGlzLnZpZGVvQ29tcG9uZW50Ll92aWRlbyApXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICBsZXQge2N1cnJlbnRUaW1lLCBkdXJhdGlvbn0gPSB0aGlzLnZpZGVvQ29tcG9uZW50Ll92aWRlbztcclxuICAgICAgICBsZXQgbmV3VGltZSA9IGR1cmF0aW9uO1xyXG4gICAgICAgIGlmKCBjdXJyZW50VGltZSArNSA8IGR1cmF0aW9uICl7XHJcbiAgICAgICAgICAgIG5ld1RpbWUgPSBjdXJyZW50VGltZSArNTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy52aWRlb0NvbXBvbmVudC5fdmlkZW8uY3VycmVudFRpbWUgPSBuZXdUaW1lO1xyXG4gICAgICAgIGxldCBwcm9ncmVzcyA9IG5ld1RpbWUvZHVyYXRpb24qMTAwO1xyXG4gICAgICAgIHRoaXMudmlkZW9Db21wb25lbnQuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBwcm9ncmVzc1xyXG4gICAgICAgIH0sICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy52aWRlb0NvbXBvbmVudC5vblRpbWVVcGRhdGUoe3RhcmdldDogdGhpcy52aWRlb0NvbXBvbmVudC5fdmlkZW99KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBnb0Z1bGxzY3JlZW4gPSAoZWxlbWVudCkgPT4ge1xyXG4gICAgICAgIGlmKCBlbGVtZW50LnJlcXVlc3RGdWxsc2NyZWVuICl7XHJcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50LnJlcXVlc3RGdWxsc2NyZWVuKCk7XHJcbiAgICAgICAgfWVsc2UgaWYoIGVsZW1lbnQubXNSZXF1ZXN0RnVsbHNjcmVlbiApe1xyXG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudC5tc1JlcXVlc3RGdWxsc2NyZWVuKCk7XHJcbiAgICAgICAgfWVsc2UgaWYoIGVsZW1lbnQubW96UmVxdWVzdEZ1bGxTY3JlZW4gKXtcclxuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQubW96UmVxdWVzdEZ1bGxTY3JlZW4oKTtcclxuICAgICAgICB9ZWxzZSBpZiggZWxlbWVudC53ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbiApe1xyXG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudC53ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnZpZGVvQ29tcG9uZW50LnNldFN0YXRlKHtcclxuICAgICAgICAgICAgZnVsbHNjcmVlbjogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGV4aXRGdWxsc2NyZWVuID0gKCkgPT4ge1xyXG4gICAgICAgIGlmKCBkb2N1bWVudC5leGl0RnVsbHNjcmVlbiApe1xyXG4gICAgICAgICAgICByZXR1cm4gZG9jdW1lbnQuZXhpdEZ1bGxzY3JlZW4oKTtcclxuICAgICAgICB9ZWxzZSBpZiggZG9jdW1lbnQubXNFeGl0RnVsbHNjcmVlbiApe1xyXG4gICAgICAgICAgICByZXR1cm4gZG9jdW1lbnQubXNFeGl0RnVsbHNjcmVlbigpO1xyXG4gICAgICAgIH1lbHNlIGlmKCBkb2N1bWVudC5tb3pDYW5jZWxGdWxsU2NyZWVuICl7XHJcbiAgICAgICAgICAgIHJldHVybiBkb2N1bWVudC5tb3pDYW5jZWxGdWxsU2NyZWVuKCk7XHJcbiAgICAgICAgfWVsc2UgaWYoIGRvY3VtZW50LndlYmtpdEV4aXRGdWxsc2NyZWVuICl7XHJcbiAgICAgICAgICAgIHJldHVybiBkb2N1bWVudC53ZWJraXRFeGl0RnVsbHNjcmVlbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnZpZGVvQ29tcG9uZW50LnNldFN0YXRlKHtcclxuICAgICAgICAgICAgZnVsbHNjcmVlbjogZmFsc2VcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVGdWxsc2NyZWVuID0gKCkgPT4ge1xyXG4gICAgICAgIGlmKCB0aGlzLnZpZGVvQ29tcG9uZW50LnN0YXRlLmZ1bGxzY3JlZW4gKXtcclxuICAgICAgICAgICAgdGhpcy52aWRlb0NvbXBvbmVudC5vbkRlZmF1bHRzY3JlZW5TZXQoe30pO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLnZpZGVvQ29tcG9uZW50Lm9uRnVsbHNjcmVlblNldCh7fSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZU11dGUgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYoICF0aGlzLm11dGVkICl7XHJcbiAgICAgICAgICAgIHRoaXMubXV0ZSgpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLnVubXV0ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVQbGF5ID0gKCkgPT4ge1xyXG4gICAgICAgIGlmKCB0aGlzLnZpZGVvQ29tcG9uZW50LnN0YXRlLnBsYXlpbmcgKXtcclxuICAgICAgICAgICAgdGhpcy5wYXVzZSgpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLnBsYXkoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9saWIvVmlkZW9BY3Rpb25zLmpzIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlkZW9FdmVudEhhbmRsZXJ7XHJcbiAgICBldmVudExpc3RlbmVycyA9IFtdO1xyXG4gICAgZXZlbnRzID0gW1xyXG4gICAgICAgIFwiYWJvcnRcIixcclxuICAgICAgICBcImNhbnBsYXlcIixcclxuICAgICAgICBcImNhbnBsYXl0aHJvdWdoXCIsXHJcbiAgICAgICAgXCJkdXJhdGlvbmNoYW5nZVwiLFxyXG4gICAgICAgIFwiZW1wdGllZFwiLFxyXG4gICAgICAgIFwiZW5kZWRcIixcclxuICAgICAgICBcImVycm9yXCIsXHJcbiAgICAgICAgXCJsb2FkZWRtZXRhZGF0YVwiLFxyXG4gICAgICAgIFwibG9hZHN0YXJ0XCIsXHJcbiAgICAgICAgXCJwYXVzZVwiLFxyXG4gICAgICAgIFwicGxheVwiLFxyXG4gICAgICAgIFwicGxheWluZ1wiLFxyXG4gICAgICAgIFwicHJvZ3Jlc3NcIixcclxuICAgICAgICBcInJhdGVjaGFuZ2VcIixcclxuICAgICAgICBcInNlZWtlZFwiLFxyXG4gICAgICAgIFwic2Vla2luZ1wiLFxyXG4gICAgICAgIFwic3RhbGxlZFwiLFxyXG4gICAgICAgIFwidGltZXVwZGF0ZVwiLFxyXG4gICAgICAgIFwidm9sdW1lY2hhbmdlXCIsXHJcbiAgICAgICAgXCJ3YWl0aW5nXCJcclxuICAgIF07XHJcblxyXG4gICAgY29uc3RydWN0b3IodmlkZW9Db21wb25lbnQpe1xyXG4gICAgICAgIHRoaXMudmlkZW9Db21wb25lbnQgPSB2aWRlb0NvbXBvbmVudDtcclxuICAgIH1cclxuXHJcbiAgICBhdHRhY2hMaXN0ZW5lcnMoKXtcclxuICAgICAgICBsZXQgdmlkZW8gPSB0aGlzLnZpZGVvQ29tcG9uZW50Ll92aWRlbztcclxuICAgICAgICB2aWRlby5hZGRFdmVudExpc3RlbmVyKCBcImxvYWRlZG1ldGFkYXRhXCIsIHRoaXMudmlkZW9Db21wb25lbnQub25NZXRhRGF0YUxvYWRlZCApO1xyXG4gICAgICAgIHZpZGVvLmFkZEV2ZW50TGlzdGVuZXIoIFwidGltZXVwZGF0ZVwiLCB0aGlzLnZpZGVvQ29tcG9uZW50Lm9uVGltZVVwZGF0ZSApO1xyXG4gICAgICAgIHZpZGVvLmFkZEV2ZW50TGlzdGVuZXIoIFwicGxheVwiLCB0aGlzLnZpZGVvQ29tcG9uZW50Lm9uUGxheSApO1xyXG4gICAgICAgIHZpZGVvLmFkZEV2ZW50TGlzdGVuZXIoIFwicGF1c2VcIiwgdGhpcy52aWRlb0NvbXBvbmVudC5vblBhdXNlICk7XHJcbiAgICAgICAgdmlkZW8uYWRkRXZlbnRMaXN0ZW5lciggXCJ2b2x1bWVjaGFuZ2VcIiwgdGhpcy52aWRlb0NvbXBvbmVudC5vblZvbHVtZUNoYW5nZSApO1xyXG4gICAgfVxyXG5cclxuICAgIGRldGFjaExpc3RlbmVycygpe1xyXG4gICAgICAgIGxldCB2aWRlbyA9IHRoaXMudmlkZW9Db21wb25lbnQuX3ZpZGVvO1xyXG4gICAgICAgIHZpZGVvLnJlbW92ZUV2ZW50TGlzdGVuZXIoIFwibG9hZGVkbWV0YWRhdGFcIiwgdGhpcy52aWRlb0NvbXBvbmVudC5vbk1ldGFEYXRhTG9hZGVkICk7XHJcbiAgICAgICAgdmlkZW8ucmVtb3ZlRXZlbnRMaXN0ZW5lciggXCJ0aW1ldXBkYXRlXCIsIHRoaXMudmlkZW9Db21wb25lbnQub25UaW1lVXBkYXRlICk7XHJcbiAgICAgICAgdmlkZW8ucmVtb3ZlRXZlbnRMaXN0ZW5lciggXCJwbGF5XCIsIHRoaXMudmlkZW9Db21wb25lbnQub25QbGF5ICk7XHJcbiAgICAgICAgdmlkZW8ucmVtb3ZlRXZlbnRMaXN0ZW5lciggXCJwYXVzZVwiLCB0aGlzLnZpZGVvQ29tcG9uZW50Lm9uUGF1c2UgKTtcclxuICAgICAgICB2aWRlby5yZW1vdmVFdmVudExpc3RlbmVyKCBcInZvbHVtZWNoYW5nZVwiLCB0aGlzLnZpZGVvQ29tcG9uZW50Lm9uVm9sdW1lQ2hhbmdlICk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlTGlzdGVuZXJzKCl7XHJcbiAgICAgICAgdGhpcy5ldmVudExpc3RlbmVycyA9IFtdO1xyXG4gICAgICAgIHRoaXMuZXZlbnRzLm1hcCggZXZlbnROYW1lID0+IHtcclxuICAgICAgICAgICAgbGV0IGxpc3RlbmVyID0gZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYoIHR5cGVvZiB0aGlzLnZpZGVvQ29tcG9uZW50LnByb3BzW2V2ZW50TmFtZV0gPT0gXCJmdW5jdGlvblwiICl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52aWRlb0NvbXBvbmVudC5wcm9wc1tldmVudE5hbWVdKCBldmVudCApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMudmlkZW9Db21wb25lbnQuX3ZpZGVvLmFkZEV2ZW50TGlzdGVuZXIoIGV2ZW50TmFtZSwgbGlzdGVuZXIgKTtcclxuICAgICAgICAgICAgdGhpcy5ldmVudExpc3RlbmVycy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGV2ZW50OiBldmVudE5hbWUsXHJcbiAgICAgICAgICAgICAgICBsaXN0ZW5lclxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgcmVtb3ZlTGlzdGVuZXJzKCl7XHJcbiAgICAgICAgZm9yKCBsZXQgaSA9IDA7IGkgPCB0aGlzLmV2ZW50TGlzdGVuZXJzLmxlbmd0aDsgaSsrICl7XHJcbiAgICAgICAgICAgIHRoaXMudmlkZW9Db21wb25lbnQuX3ZpZGVvLnJlbW92ZUV2ZW50TGlzdGVuZXIodGhpcy5ldmVudExpc3RlbmVyc1tpXS5ldmVudCwgdGhpcy5ldmVudExpc3RlbmVyc1tpXS5saXN0ZW5lcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZXZlbnRMaXN0ZW5lcnMgPSBbXTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbGliL1ZpZGVvRXZlbnRIYW5kbGVyLmpzIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhIS4vdmlkZW8uc2Nzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhIS4vdmlkZW8uc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEhLi92aWRlby5zY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zdHlsZS92aWRlby5zY3NzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnJlYWN0VmlkZW9XcmFwcGVyIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGxpbmUtaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZDogYmxhY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIG1heC1oZWlnaHQ6IDEwMCU7XFxuICBvdXRsaW5lOiBub25lOyB9XFxuICAucmVhY3RWaWRlb1dyYXBwZXIgLm92ZXJsYXlDb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgei1pbmRleDogMjtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzO1xcbiAgICBvcGFjaXR5OiAwOyB9XFxuICAucmVhY3RWaWRlb1dyYXBwZXIgdmlkZW8ge1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIG1heC1oZWlnaHQ6IDEwMCU7XFxuICAgIHotaW5kZXg6IDE7IH1cXG4gICAgLnJlYWN0VmlkZW9XcmFwcGVyIHZpZGVvOjotd2Via2l0LW1lZGlhLWNvbnRyb2xzIHtcXG4gICAgICB6LWluZGV4OiAyOyB9XFxuICAucmVhY3RWaWRlb1dyYXBwZXIgLmNvbnRyb2xzV3JhcHBlciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXM7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHotaW5kZXg6IDIxNDc0ODM2NDc7IH1cXG4gICAgLnJlYWN0VmlkZW9XcmFwcGVyIC5jb250cm9sc1dyYXBwZXIgLnNlZWtCYXIgLmJ1ZmZlciB7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIGxlZnQ6IDA7XFxuICAgICAgdG9wOiAwO1xcbiAgICAgIHJpZ2h0OiAwO1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIGhlaWdodDogOHB4O1xcbiAgICAgIHotaW5kZXg6IDE7XFxuICAgICAgbWFyZ2luOiAwO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2NjY7IH1cXG4gICAgLnJlYWN0VmlkZW9XcmFwcGVyIC5jb250cm9sc1dyYXBwZXIgLnNlZWtCYXIgLnByb2dyZXNzIHtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgbGVmdDogMDtcXG4gICAgICB0b3A6IDA7XFxuICAgICAgcmlnaHQ6IDA7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgaGVpZ2h0OiA4cHg7XFxuICAgICAgei1pbmRleDogMjtcXG4gICAgICBtYXJnaW46IDA7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggNnB4ICMwMDA7IH1cXG4gICAgLnJlYWN0VmlkZW9XcmFwcGVyIC5jb250cm9sc1dyYXBwZXIgLnBsYXlCdXR0b24ge1xcbiAgICAgIHdpZHRoOiAyNHB4O1xcbiAgICAgIGhlaWdodDogMjRweDtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgbGVmdDogNXB4O1xcbiAgICAgIGJvdHRvbTogNXB4O1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcbiAgICAucmVhY3RWaWRlb1dyYXBwZXIgLmNvbnRyb2xzV3JhcHBlciAucGF1c2VCdXR0b24ge1xcbiAgICAgIHdpZHRoOiAyNHB4O1xcbiAgICAgIGhlaWdodDogMjRweDtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgbGVmdDogNXB4O1xcbiAgICAgIGJvdHRvbTogNXB4O1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICBkaXNwbGF5OiBub25lOyB9XFxuICAgIC5yZWFjdFZpZGVvV3JhcHBlciAuY29udHJvbHNXcmFwcGVyIC5tdXRlQnV0dG9uIHtcXG4gICAgICB3aWR0aDogMjRweDtcXG4gICAgICBoZWlnaHQ6IDI0cHg7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIGxlZnQ6IDM0cHg7XFxuICAgICAgYm90dG9tOiA1cHg7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyOyB9XFxuICAgIC5yZWFjdFZpZGVvV3JhcHBlciAuY29udHJvbHNXcmFwcGVyIC51bm11dGVCdXR0b24ge1xcbiAgICAgIHdpZHRoOiAyNHB4O1xcbiAgICAgIGhlaWdodDogMjRweDtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgbGVmdDogMzRweDtcXG4gICAgICBib3R0b206IDVweDtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgZGlzcGxheTogbm9uZTsgfVxcbiAgICAucmVhY3RWaWRlb1dyYXBwZXIgLmNvbnRyb2xzV3JhcHBlciAudm9sdW1lQmFyIHtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgd2lkdGg6IDEwMHB4O1xcbiAgICAgIGhlaWdodDogNXB4O1xcbiAgICAgIGJvdHRvbTogMTRweDtcXG4gICAgICBsZWZ0OiA2NXB4O1xcbiAgICAgIGJhY2tncm91bmQ6IGJsYWNrOyB9XFxuICAgIC5yZWFjdFZpZGVvV3JhcHBlciAuY29udHJvbHNXcmFwcGVyIC52b2x1bWUge1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICBsZWZ0OiAwO1xcbiAgICAgIHRvcDogMDtcXG4gICAgICByaWdodDogMDtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgICBoZWlnaHQ6IDVweDtcXG4gICAgICBtYXJnaW46IDA7XFxuICAgICAgcGFkZGluZzogMDtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICAgICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCAzcHggIzQ0NDsgfVxcbiAgICAgIC5yZWFjdFZpZGVvV3JhcHBlciAuY29udHJvbHNXcmFwcGVyIC52b2x1bWU6Oi1tcy1maWxsLWxvd2VyIHtcXG4gICAgICAgIGJhY2tncm91bmQ6ICMyMjI7IH1cXG4gICAgICAucmVhY3RWaWRlb1dyYXBwZXIgLmNvbnRyb2xzV3JhcHBlciAudm9sdW1lOjotbXMtZmlsbC11cHBlciB7XFxuICAgICAgICBiYWNrZ3JvdW5kOiAjRUVFOyB9XFxuICAgIC5yZWFjdFZpZGVvV3JhcHBlciAuY29udHJvbHNXcmFwcGVyIC50aW1lIHtcXG4gICAgICB3aWR0aDogMTAwcHg7XFxuICAgICAgaGVpZ2h0OiAyNHB4O1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICByaWdodDogMzVweDtcXG4gICAgICB0b3A6IDhweDtcXG4gICAgICBib3R0b206IDBweDtcXG4gICAgICBmb250LWZhbWlseTogXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgXFxcIlNlZ29lIFVJXFxcIiwgYXJpYWwsIHNhbnMtc2VyaWY7XFxuICAgICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0OyB9XFxuICAgIC5yZWFjdFZpZGVvV3JhcHBlciAuY29udHJvbHNXcmFwcGVyIC5mdWxsc2NyZWVuQnV0dG9uIHtcXG4gICAgICB3aWR0aDogMjRweDtcXG4gICAgICBoZWlnaHQ6IDI0cHg7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIHJpZ2h0OiA1cHg7XFxuICAgICAgYm90dG9tOiA1cHg7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyOyB9XFxuICAgIC5yZWFjdFZpZGVvV3JhcHBlciAuY29udHJvbHNXcmFwcGVyIC5kZWZhdWx0c2NyZWVuQnV0dG9uIHtcXG4gICAgICB3aWR0aDogMjRweDtcXG4gICAgICBoZWlnaHQ6IDI0cHg7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIHJpZ2h0OiA1cHg7XFxuICAgICAgYm90dG9tOiA1cHg7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgIGRpc3BsYXk6IG5vbmU7IH1cXG4gIC5yZWFjdFZpZGVvV3JhcHBlciBpbnB1dFt0eXBlPXJhbmdlXSB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTsgfVxcbiAgICAucmVhY3RWaWRlb1dyYXBwZXIgaW5wdXRbdHlwZT1yYW5nZV06Zm9jdXMge1xcbiAgICAgIG91dGxpbmU6IG5vbmU7IH1cXG4gICAgLnJlYWN0VmlkZW9XcmFwcGVyIGlucHV0W3R5cGU9cmFuZ2VdOjotd2Via2l0LXNsaWRlci1ydW5uYWJsZS10cmFjayB7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZTsgfVxcbiAgICAucmVhY3RWaWRlb1dyYXBwZXIgaW5wdXRbdHlwZT1yYW5nZV06Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcXG4gICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgICAgaGVpZ2h0OiA1cHg7XFxuICAgICAgd2lkdGg6IDBweDtcXG4gICAgICBib3JkZXItcmFkaXVzOiAwcHg7XFxuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyOyB9XFxuICAgIC5yZWFjdFZpZGVvV3JhcHBlciBpbnB1dFt0eXBlPXJhbmdlXTo6LW1vei1yYW5nZS10cmFjayB7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZTtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgICBoZWlnaHQ6IDhweDtcXG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgfVxcbiAgICAucmVhY3RWaWRlb1dyYXBwZXIgaW5wdXRbdHlwZT1yYW5nZV06Oi1tb3otcmFuZ2UtdGh1bWIge1xcbiAgICAgIGhlaWdodDogNXB4O1xcbiAgICAgIHdpZHRoOiAwcHg7XFxuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50OyB9XFxuICAgIC5yZWFjdFZpZGVvV3JhcHBlciBpbnB1dFt0eXBlPXJhbmdlXTo6LW1zLXRyYWNrIHtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlO1xcbiAgICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgICBoZWlnaHQ6IDhweDtcXG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgfVxcbiAgICAucmVhY3RWaWRlb1dyYXBwZXIgaW5wdXRbdHlwZT1yYW5nZV06Oi1tcy10aHVtYiB7XFxuICAgICAgaGVpZ2h0OiA1cHg7XFxuICAgICAgd2lkdGg6IDBweDtcXG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL34vc2Fzcy1sb2FkZXIhLi9zcmMvc3R5bGUvdmlkZW8uc2Nzc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxyXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXHJcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxyXG4qL1xyXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xyXG5cdHZhciBsaXN0ID0gW107XHJcblxyXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcclxuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XHJcblx0XHR2YXIgcmVzdWx0ID0gW107XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IHRoaXNbaV07XHJcblx0XHRcdGlmKGl0ZW1bMl0pIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGl0ZW1bMV0gKyBcIn1cIik7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmVzdWx0LnB1c2goaXRlbVsxXSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiByZXN1bHQuam9pbihcIlwiKTtcclxuXHR9O1xyXG5cclxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxyXG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcclxuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxyXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XHJcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcclxuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxyXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xyXG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXHJcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXHJcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXHJcblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXHJcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XHJcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XHJcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcclxuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxuXHRyZXR1cm4gbGlzdDtcclxufTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXHJcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcclxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXHJcbiovXHJcbnZhciBzdHlsZXNJbkRvbSA9IHt9LFxyXG5cdG1lbW9pemUgPSBmdW5jdGlvbihmbikge1xyXG5cdFx0dmFyIG1lbW87XHJcblx0XHRyZXR1cm4gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG5cdFx0XHRyZXR1cm4gbWVtbztcclxuXHRcdH07XHJcblx0fSxcclxuXHRpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiAvbXNpZSBbNi05XVxcYi8udGVzdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpKTtcclxuXHR9KSxcclxuXHRnZXRIZWFkRWxlbWVudCA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xyXG5cdFx0cmV0dXJuIGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdO1xyXG5cdH0pLFxyXG5cdHNpbmdsZXRvbkVsZW1lbnQgPSBudWxsLFxyXG5cdHNpbmdsZXRvbkNvdW50ZXIgPSAwLFxyXG5cdHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wID0gW107XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcclxuXHRpZih0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcclxuXHRcdGlmKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xyXG5cdH1cclxuXHJcblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XHJcblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XHJcblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxyXG5cdGlmICh0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gPT09IFwidW5kZWZpbmVkXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xyXG5cclxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgPGhlYWQ+LlxyXG5cdGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ1bmRlZmluZWRcIikgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XHJcblxyXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCk7XHJcblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcclxuXHJcblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XHJcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xyXG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcclxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xyXG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XHJcblx0XHR9XHJcblx0XHRpZihuZXdMaXN0KSB7XHJcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCk7XHJcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XHJcblx0XHR9XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcclxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xyXG5cdFx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKylcclxuXHRcdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKCk7XHJcblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucykge1xyXG5cdGZvcih2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xyXG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XHJcblx0XHRpZihkb21TdHlsZSkge1xyXG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XHJcblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xyXG5cdFx0XHR9XHJcblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xyXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzKGxpc3QpIHtcclxuXHR2YXIgc3R5bGVzID0gW107XHJcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xyXG5cdGZvcih2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XHJcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XHJcblx0XHR2YXIgaWQgPSBpdGVtWzBdO1xyXG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XHJcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xyXG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XHJcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XHJcblx0XHRpZighbmV3U3R5bGVzW2lkXSlcclxuXHRcdFx0c3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcclxuXHRcdGVsc2VcclxuXHRcdFx0bmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xyXG5cdH1cclxuXHRyZXR1cm4gc3R5bGVzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGVFbGVtZW50KSB7XHJcblx0dmFyIGhlYWQgPSBnZXRIZWFkRWxlbWVudCgpO1xyXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wW3N0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xyXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XHJcblx0XHRpZighbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcclxuXHRcdFx0aGVhZC5pbnNlcnRCZWZvcmUoc3R5bGVFbGVtZW50LCBoZWFkLmZpcnN0Q2hpbGQpO1xyXG5cdFx0fSBlbHNlIGlmKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XHJcblx0XHRcdGhlYWQuaW5zZXJ0QmVmb3JlKHN0eWxlRWxlbWVudCwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpO1xyXG5cdFx0fVxyXG5cdFx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AucHVzaChzdHlsZUVsZW1lbnQpO1xyXG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xyXG5cdFx0aGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0Jy4gTXVzdCBiZSAndG9wJyBvciAnYm90dG9tJy5cIik7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XHJcblx0c3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcclxuXHR2YXIgaWR4ID0gc3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZUVsZW1lbnQpO1xyXG5cdGlmKGlkeCA+PSAwKSB7XHJcblx0XHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSB7XHJcblx0dmFyIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcclxuXHRzdHlsZUVsZW1lbnQudHlwZSA9IFwidGV4dC9jc3NcIjtcclxuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGVFbGVtZW50KTtcclxuXHRyZXR1cm4gc3R5bGVFbGVtZW50O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKSB7XHJcblx0dmFyIGxpbmtFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XHJcblx0bGlua0VsZW1lbnQucmVsID0gXCJzdHlsZXNoZWV0XCI7XHJcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmtFbGVtZW50KTtcclxuXHRyZXR1cm4gbGlua0VsZW1lbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xyXG5cdHZhciBzdHlsZUVsZW1lbnQsIHVwZGF0ZSwgcmVtb3ZlO1xyXG5cclxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcclxuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xyXG5cdFx0c3R5bGVFbGVtZW50ID0gc2luZ2xldG9uRWxlbWVudCB8fCAoc2luZ2xldG9uRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XHJcblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCBmYWxzZSk7XHJcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCB0cnVlKTtcclxuXHR9IGVsc2UgaWYob2JqLnNvdXJjZU1hcCAmJlxyXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXHJcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXHJcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXHJcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXHJcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcblx0XHRzdHlsZUVsZW1lbnQgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcclxuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZUVsZW1lbnQpO1xyXG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xyXG5cdFx0XHRpZihzdHlsZUVsZW1lbnQuaHJlZilcclxuXHRcdFx0XHRVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlRWxlbWVudC5ocmVmKTtcclxuXHRcdH07XHJcblx0fSBlbHNlIHtcclxuXHRcdHN0eWxlRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcclxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQpO1xyXG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xyXG5cdFx0fTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZShvYmopO1xyXG5cclxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XHJcblx0XHRpZihuZXdPYmopIHtcclxuXHRcdFx0aWYobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKVxyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZW1vdmUoKTtcclxuXHRcdH1cclxuXHR9O1xyXG59XHJcblxyXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xyXG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcclxuXHJcblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcclxuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcclxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xyXG5cdH07XHJcbn0pKCk7XHJcblxyXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlRWxlbWVudCwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XHJcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xyXG5cclxuXHRpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcclxuXHRcdHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xyXG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZUVsZW1lbnQuY2hpbGROb2RlcztcclxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcclxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xyXG5cdFx0XHRzdHlsZUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChjc3NOb2RlKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGVFbGVtZW50LCBvYmopIHtcclxuXHR2YXIgY3NzID0gb2JqLmNzcztcclxuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XHJcblxyXG5cdGlmKG1lZGlhKSB7XHJcblx0XHRzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXHJcblx0fVxyXG5cclxuXHRpZihzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xyXG5cdFx0c3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcclxuXHR9IGVsc2Uge1xyXG5cdFx0d2hpbGUoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcclxuXHRcdFx0c3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcclxuXHRcdH1cclxuXHRcdHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZUxpbmsobGlua0VsZW1lbnQsIG9iaikge1xyXG5cdHZhciBjc3MgPSBvYmouY3NzO1xyXG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xyXG5cclxuXHRpZihzb3VyY2VNYXApIHtcclxuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XHJcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XHJcblx0fVxyXG5cclxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcclxuXHJcblx0dmFyIG9sZFNyYyA9IGxpbmtFbGVtZW50LmhyZWY7XHJcblxyXG5cdGxpbmtFbGVtZW50LmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xyXG5cclxuXHRpZihvbGRTcmMpXHJcblx0XHRVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlkZW9VdGlsc3tcclxuICAgIGNvbnN0cnVjdG9yKHZpZGVvQ29tcG9uZW50KXtcclxuICAgICAgICB0aGlzLnZpZGVvQ29tcG9uZW50ID0gdmlkZW9Db21wb25lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgZm9ybWF0VGltZUZyb21TZWNvbmRzKHNlY29uZHMpe1xyXG4gICAgICAgIHNlY29uZHMgPSBwYXJzZUludChzZWNvbmRzKTtcclxuICAgICAgICBsZXQgaG91cnMgPSBwYXJzZUludChzZWNvbmRzIC8gMzYwMCk7XHJcbiAgICAgICAgc2Vjb25kcyAtPSBob3VycyozNjAwO1xyXG4gICAgICAgIGxldCBtaW51dGVzID0gcGFyc2VJbnQoc2Vjb25kcyAvIDYwKTtcclxuICAgICAgICBzZWNvbmRzIC09IG1pbnV0ZXMqNjA7XHJcbiAgICAgICAgbGV0IHRpbWUgPSBgJHtob3VycyA+IDkgPyBob3VycyA6IChcIjBcIiArIGhvdXJzKX06JHttaW51dGVzID4gOSA/IG1pbnV0ZXMgOiAoXCIwXCIgKyBtaW51dGVzKSB9OiR7c2Vjb25kcyA+IDkgPyBzZWNvbmRzIDogKFwiMFwiICsgc2Vjb25kcyl9YDtcclxuICAgICAgICByZXR1cm4gdGltZTtcclxuICAgIH1cclxuXHJcbiAgICBjYWxjdWxhdGVQZXJjZW50YWdlKGZyYWN0aW9uLCB0b3RhbCl7XHJcbiAgICAgICAgbGV0IHBlcmNlbnRhZ2UgPSBwYXJzZUludChmcmFjdGlvbi90b3RhbCoxMDAqMTAwKS8xMDA7IC8vIGluIG9yZGVyIHRvIGFwcHJveGltYXRlIHRvIDIgZGlnaXRzXHJcbiAgICAgICAgcmV0dXJuIHBlcmNlbnRhZ2U7XHJcbiAgICB9XHJcblxyXG4gICAgaXNJRSgpe1xyXG4gICAgICAgIGxldCBVQSA9IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50O1xyXG4gICAgICAgIGlmKCBVQS5tYXRjaCggL01TSUUvaSApIHx8IFVBLm1hdGNoKCAvRWRnZS9pICkgfHwgVUEubWF0Y2goIC9UcmlkZW50XFwvL2kgKSApXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBkaXNhYmxlQ29udHJvbHMoKXtcclxuICAgICAgICB0aGlzLnZpZGVvQ29tcG9uZW50Ll9jb250cm9sc1dyYXBwZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgfVxyXG5cclxuICAgIGVuYWJsZUNvbnRyb2xzKCl7XHJcbiAgICAgICAgaWYoIHRoaXMudmlkZW9Db21wb25lbnQucHJvcHMuYXR0cmlidXRlcy5jb250cm9scyApXHJcbiAgICAgICAgICAgIHRoaXMudmlkZW9Db21wb25lbnQuX2NvbnRyb2xzV3JhcHBlci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgaWYoIHRoaXMudmlkZW9Db21wb25lbnQucHJvcHMuY29udHJvbHMgKVxyXG4gICAgICAgICAgICB0aGlzLnZpZGVvQ29tcG9uZW50Ll9jb250cm9sc1dyYXBwZXIuc3R5bGUub3BhY2l0eSA9IFwiMVwiO1xyXG4gICAgfVxyXG5cclxuICAgIG1vdmVPdmVybGF5KCl7XHJcbiAgICAgICAgdGhpcy52aWRlb0NvbXBvbmVudC5fb3ZlcmxheS5zdHlsZS5ib3R0b20gPSBcIjY1cHhcIjtcclxuICAgIH1cclxuXHJcbiAgICBlbmFibGVPdmVybGF5KCl7XHJcbiAgICAgICAgaWYoIHRoaXMudmlkZW9Db21wb25lbnQucHJvcHMub3ZlcmxheSApXHJcbiAgICAgICAgICAgIHRoaXMudmlkZW9Db21wb25lbnQuX292ZXJsYXkuc3R5bGUub3BhY2l0eSA9IFwiMVwiO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbGN1bGF0ZUJ1ZmZlcigpe1xyXG4gICAgICAgIGlmKCAhdGhpcy52aWRlb0NvbXBvbmVudC5fdmlkZW8gKVxyXG4gICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICBpZiggIXRoaXMubGFzdEJ1ZmZlcmVkIClcclxuICAgICAgICAgICAgdGhpcy5sYXN0QnVmZmVyZWQgPSAwO1xyXG4gICAgICAgIGlmKCB0aGlzLnZpZGVvQ29tcG9uZW50Ll92aWRlby5idWZmZXJlZC5sZW5ndGggPCAxIClcclxuICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgbGV0IGJ1ZmZlcmVkID0gdGhpcy52aWRlb0NvbXBvbmVudC5fdmlkZW8uYnVmZmVyZWQuZW5kKHRoaXMudmlkZW9Db21wb25lbnQuX3ZpZGVvLmJ1ZmZlcmVkLmxlbmd0aC0xKTtcclxuICAgICAgICBpZiggIXRoaXMudmlkZW9Db21wb25lbnQuX3ZpZGVvLmR1cmF0aW9uIClcclxuICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgdGhpcy5sYXN0QnVmZmVyZWQgPSBidWZmZXJlZDtcclxuICAgICAgICBsZXQge2R1cmF0aW9ufSA9IHRoaXMudmlkZW9Db21wb25lbnQuX3ZpZGVvO1xyXG4gICAgICAgIGxldCBwZXJjZW50YWdlID0gcGFyc2VJbnQoIGJ1ZmZlcmVkIC8gZHVyYXRpb24gKiAxMDAgKTtcclxuICAgICAgICByZXR1cm4gcGVyY2VudGFnZTtcclxuICAgIH1cclxuXHJcbiAgICBpc0Z1bGxzY3JlZW4oKXtcclxuICAgICAgICBsZXQgaXNGdWxsc2NyZWVuID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIGlmKCBkb2N1bWVudC53ZWJraXRJc0Z1bGxTY3JlZW4gIT09IHVuZGVmaW5lZCApe1xyXG4gICAgICAgICAgICBpc0Z1bGxzY3JlZW4gPSBkb2N1bWVudC53ZWJraXRJc0Z1bGxTY3JlZW47XHJcbiAgICAgICAgfWVsc2UgaWYoIGRvY3VtZW50LmZ1bGxzY3JlZW5FbGVtZW50ICE9PSB1bmRlZmluZWQgKXtcclxuICAgICAgICAgICAgaXNGdWxsc2NyZWVuID0gZG9jdW1lbnQuZnVsbHNjcmVlbkVsZW1lbnQgIT09IG51bGw7XHJcbiAgICAgICAgfWVsc2UgaWYoIGRvY3VtZW50Lm1zRnVsbHNjcmVlbkVsZW1lbnQgIT09IHVuZGVmaW5lZCApe1xyXG4gICAgICAgICAgICBpc0Z1bGxzY3JlZW4gPSBkb2N1bWVudC5tc0Z1bGxzY3JlZW5FbGVtZW50ICE9PSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaXNGdWxsc2NyZWVuO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9saWIvVmlkZW9VdGlscy5qcyJdLCJzb3VyY2VSb290IjoiIn0=