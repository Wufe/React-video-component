/******/ (function(modules) { // webpackBootstrap
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
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _class;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(2);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _radium = __webpack_require__(3);
	
	var _radium2 = _interopRequireDefault(_radium);
	
	var _video = __webpack_require__(4);
	
	var _video2 = _interopRequireDefault(_video);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var App = (0, _radium2.default)(_class = function (_React$Component) {
	    _inherits(App, _React$Component);
	
	    function App() {
	        var _ref;
	
	        var _temp, _this, _ret;
	
	        _classCallCheck(this, App);
	
	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }
	
	        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = App.__proto__ || Object.getPrototypeOf(App)).call.apply(_ref, [this].concat(args))), _this), _this.styles = {
	            container: {
	                width: "100vw",
	                height: "100vh",
	                lineHeight: "100vh",
	                textAlign: "center",
	                overflow: "hidden"
	            }
	        }, _this.onTimeUpdate = function (event) {
	            if (!history || !history.replaceState) {
	                document.location.hash = parseInt(event.target.currentTime);
	            } else {
	                history.replaceState(null, null, "#" + parseInt(event.target.currentTime));
	            }
	        }, _this.onMetaDataLoaded = function (event) {
	            _this._video._wrapper.focus();
	        }, _this.play = function (event) {
	            event.target.play();
	        }, _temp), _possibleConstructorReturn(_this, _ret);
	    }
	
	    _createClass(App, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {}
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;
	
	            return _react2.default.createElement(
	                'div',
	                { style: [this.styles.container] },
	                _react2.default.createElement(
	                    _video2.default,
	                    {
	                        attributes: {
	                            loop: true
	                        },
	                        loadedmetadata: this.onMetaDataLoaded,
	                        timeupdate: this.onTimeUpdate,
	                        ref: function ref(_ref2) {
	                            return _this2._video = _ref2;
	                        },
	                        sources: [{
	                            src: "https://wufe.me/sample.mp4",
	                            type: "video/mp4"
	                        }]
	                    },
	                    _react2.default.createElement(
	                        'div',
	                        { style: {
	                                color: "white",
	                                width: "100%",
	                                height: "50px",
	                                textShadow: "0px 1px 0px #777, 0px 0px 1px #777, 0px -1px 0px #555, 0px 0px -1px #555",
	                                fontFamily: "Helvetica Neue, Segoe UI, sans-serif",
	                                fontWeight: 300,
	                                fontSize: "20px",
	                                lineHeight: "50px",
	                                boxSizing: "border-box",
	                                padding: "0px 30px",
	                                backgroundColor: "rgba(0,0,0,0.8)"
	
	                            } },
	                        _react2.default.createElement(
	                            'span',
	                            null,
	                            'React Video Component - Overlay'
	                        )
	                    )
	                )
	            );
	        }
	    }]);
	
	    return App;
	}(_react2.default.Component)) || _class;
	
	_reactDom2.default.render(_react2.default.createElement(App, null), document.getElementById("app"));

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("react-dom");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("radium");

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	(function webpackUniversalModuleDefinition(root, factory) {
		if (( false ? 'undefined' : _typeof2(exports)) === 'object' && ( false ? 'undefined' : _typeof2(module)) === 'object') module.exports = factory(__webpack_require__(1));else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {
			var a = (typeof exports === 'undefined' ? 'undefined' : _typeof2(exports)) === 'object' ? factory(require("react")) : factory(root["react"]);
			for (var i in a) {
				((typeof exports === 'undefined' ? 'undefined' : _typeof2(exports)) === 'object' ? exports : root)[i] = a[i];
			}
		}
	})(undefined, function (__WEBPACK_EXTERNAL_MODULE_2__) {
		return (/******/function (modules) {
				// webpackBootstrap
				/******/ // The module cache
				/******/var installedModules = {};
				/******/
				/******/ // The require function
				/******/function __webpack_require__(moduleId) {
					/******/
					/******/ // Check if module is in cache
					/******/if (installedModules[moduleId])
						/******/return installedModules[moduleId].exports;
					/******/
					/******/ // Create a new module (and put it into the cache)
					/******/var module = installedModules[moduleId] = {
						/******/exports: {},
						/******/id: moduleId,
						/******/loaded: false
						/******/ };
					/******/
					/******/ // Execute the module function
					/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
					/******/
					/******/ // Flag the module as loaded
					/******/module.loaded = true;
					/******/
					/******/ // Return the exports of the module
					/******/return module.exports;
					/******/
				}
				/******/
				/******/
				/******/ // expose the modules object (__webpack_modules__)
				/******/__webpack_require__.m = modules;
				/******/
				/******/ // expose the module cache
				/******/__webpack_require__.c = installedModules;
				/******/
				/******/ // __webpack_public_path__
				/******/__webpack_require__.p = "";
				/******/
				/******/ // Load entry module and return exports
				/******/return __webpack_require__(0);
				/******/
			}(
			/************************************************************************/
			/******/[
			/* 0 */
			/***/function (module, exports, __webpack_require__) {
	
				'use strict';
	
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
	
				var _extends = Object.assign || function (target) {
					for (var i = 1; i < arguments.length; i++) {
						var source = arguments[i];for (var key in source) {
							if (Object.prototype.hasOwnProperty.call(source, key)) {
								target[key] = source[key];
							}
						}
					}return target;
				};
	
				var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
					return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
				} : function (obj) {
					return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
				};
	
				var _createClass = function () {
					function defineProperties(target, props) {
						for (var i = 0; i < props.length; i++) {
							var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
						}
					}return function (Constructor, protoProps, staticProps) {
						if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
					};
				}();
	
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
	
				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}
	
				function _classCallCheck(instance, Constructor) {
					if (!(instance instanceof Constructor)) {
						throw new TypeError("Cannot call a class as a function");
					}
				}
	
				function _possibleConstructorReturn(self, call) {
					if (!self) {
						throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					}return call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
				}
	
				function _inherits(subClass, superClass) {
					if (typeof superClass !== "function" && superClass !== null) {
						throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof2(superClass)));
					}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
				}
	
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
	
							return _react2.default.createElement('div', {
								className: 'reactVideoWrapper',
								onMouseMove: this.onMouseMove,
								tabIndex: this.props.tabIndex,
								onKeyDown: this.onKeyDown,
								onWheel: this.onWheel,
								ref: function ref(_ref10) {
									return _this2._wrapper = _ref10;
								}
							}, _react2.default.createElement('div', {
								className: 'overlayContainer',
								onMouseMove: this.onMouseMove,
								onDoubleClick: this.videoActions.toggleFullscreen,
								ref: function ref(_ref) {
									return _this2._overlay = _ref;
								},
								style: {
									display: this.props.overlay ? "block" : "none"
								}
							}, this.props.children), _react2.default.createElement('video', _extends({
								className: '' + this.props.className,
								onMouseMove: this.onMouseMove,
								onDoubleClick: this.videoActions.toggleFullscreen,
								ref: this.referenceVideoTag,
								style: this.props.style,
								width: this.props.width,
								height: this.props.height
							}, videoProps), sources.map(function (s, i) {
								return _react2.default.createElement('source', { key: i, src: s.src, type: s.type || null });
							})), _react2.default.createElement('div', {
								ref: function ref(_ref9) {
									return _this2._controlsWrapper = _ref9;
								},
								style: this.props.style.controlsWrapper || {},
								className: 'controlsWrapper'
							}, _react2.default.createElement('div', { className: 'seekBar' }, _react2.default.createElement(_Progress2.default, {
								ref: function ref(_ref2) {
									return _this2._progress = _ref2;
								},
								value: this.state.progress,
								className: 'progress',
								attributes: {
									onChange: this.onProgressChange
								}
							}), _react2.default.createElement(_Progress2.default, {
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
							})), _react2.default.createElement('div', {
								className: 'playButton',
								ref: function ref(_ref4) {
									return _this2._play = _ref4;
								},
								onClick: this.videoActions.play,
								style: {
									display: this.state.playing ? "none" : "block"
								}
							}, _icons2.default.play), _react2.default.createElement('div', {
								className: 'pauseButton',
								ref: function ref(_ref5) {
									return _this2._pause = _ref5;
								},
								onClick: this.videoActions.pause,
								style: {
									display: this.state.playing ? "block" : "none"
								}
							}, _icons2.default.pause), _react2.default.createElement('div', {
								className: 'muteButton',
								ref: function ref(_ref6) {
									return _this2._muteButton = _ref6;
								},
								onClick: this.videoActions.mute
							}, _icons2.default.volume), _react2.default.createElement('div', {
								className: 'unmuteButton',
								ref: function ref(_ref7) {
									return _this2._unmuteButton = _ref7;
								},
								onClick: this.videoActions.unmute
							}, _icons2.default.mute), _react2.default.createElement('div', { className: 'volumeBar' }, _react2.default.createElement(_Progress2.default, {
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
							})), _react2.default.createElement('div', {
								className: 'time'
							}, this.state.time), _react2.default.createElement('div', {
								className: 'fullscreenButton',
								onClick: this.onFullscreenSet,
								style: {
									display: this.state.fullscren ? "none" : "block"
								}
							}, _icons2.default.fullscreen), _react2.default.createElement('div', {
								className: 'defaultscreenButton',
								onClick: this.onDefaultscreenSet,
								style: {
									display: this.state.fullscreen ? "block" : "none"
								}
							}, _icons2.default.defaultscreen)));
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
	
				/***/
			},
			/* 1 */
			/***/function (module, exports, __webpack_require__) {
	
				"use strict";
	
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
	
				var _react = __webpack_require__(2);
	
				var _react2 = _interopRequireDefault(_react);
	
				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}
	
				var icons = {
					play: _react2.default.createElement("svg", { width: "24", height: "24", viewBox: "0 0 24 24" }, _react2.default.createElement("path", { d: "M8 5v14l11-7z", fill: "white" })),
					pause: _react2.default.createElement("svg", { width: "24", height: "24", viewBox: "0 0 24 24" }, _react2.default.createElement("path", { d: "M6 19h4V5H6v14zm8-14v14h4V5h-4z", fill: "white" })),
					fullscreen: _react2.default.createElement("svg", { width: "24", height: "24", viewBox: "0 0 24 24" }, _react2.default.createElement("path", { d: "M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z", fill: "white" })),
					defaultscreen: _react2.default.createElement("svg", { width: "24", height: "24", viewBox: "0 0 24 24" }, _react2.default.createElement("path", { d: "M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z", fill: "white" })),
					volume: _react2.default.createElement("svg", { width: "24", height: "24", viewBox: "0 0 24 24" }, _react2.default.createElement("path", { d: "M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z", fill: "white" })),
					mute: _react2.default.createElement("svg", { width: "24", height: "24", viewBox: "0 0 24 24" }, _react2.default.createElement("path", { d: "M7 9v6h4l5 5V4l-5 5H7z", fill: "white" }))
				};
				exports.default = icons;
	
				/***/
			},
			/* 2 */
			/***/function (module, exports) {
	
				module.exports = __webpack_require__(1);
	
				/***/
			},
			/* 3 */
			/***/function (module, exports, __webpack_require__) {
	
				"use strict";
	
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
	
				var _extends = Object.assign || function (target) {
					for (var i = 1; i < arguments.length; i++) {
						var source = arguments[i];for (var key in source) {
							if (Object.prototype.hasOwnProperty.call(source, key)) {
								target[key] = source[key];
							}
						}
					}return target;
				};
	
				var _createClass = function () {
					function defineProperties(target, props) {
						for (var i = 0; i < props.length; i++) {
							var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
						}
					}return function (Constructor, protoProps, staticProps) {
						if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
					};
				}();
	
				var _react = __webpack_require__(2);
	
				var _react2 = _interopRequireDefault(_react);
	
				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}
	
				function _classCallCheck(instance, Constructor) {
					if (!(instance instanceof Constructor)) {
						throw new TypeError("Cannot call a class as a function");
					}
				}
	
				function _possibleConstructorReturn(self, call) {
					if (!self) {
						throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					}return call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
				}
	
				function _inherits(subClass, superClass) {
					if (typeof superClass !== "function" && superClass !== null) {
						throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof2(superClass)));
					}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
				}
	
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
	
				/***/
			},
			/* 4 */
			/***/function (module, exports) {
	
				"use strict";
	
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
	
				function _classCallCheck(instance, Constructor) {
					if (!(instance instanceof Constructor)) {
						throw new TypeError("Cannot call a class as a function");
					}
				}
	
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
	
				/***/
			},
			/* 5 */
			/***/function (module, exports) {
	
				"use strict";
	
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
	
				var _createClass = function () {
					function defineProperties(target, props) {
						for (var i = 0; i < props.length; i++) {
							var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
						}
					}return function (Constructor, protoProps, staticProps) {
						if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
					};
				}();
	
				function _classCallCheck(instance, Constructor) {
					if (!(instance instanceof Constructor)) {
						throw new TypeError("Cannot call a class as a function");
					}
				}
	
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
	
				/***/
			},
			/* 6 */
			/***/function (module, exports, __webpack_require__) {
	
				// style-loader: Adds some css to the DOM by adding a <style> tag
	
				// load the styles
				var content = __webpack_require__(7);
				if (typeof content === 'string') content = [[module.id, content, '']];
				// add the styles to the DOM
				var update = __webpack_require__(9)(content, {});
				if (content.locals) module.exports = content.locals;
				// Hot Module Replacement
				if (false) {
					// When the styles change, update the <style> tags
					if (!content.locals) {
						module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!!./video.scss", function () {
							var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!!./video.scss");
							if (typeof newContent === 'string') newContent = [[module.id, newContent, '']];
							update(newContent);
						});
					}
					// When the module is disposed, remove the <style> tags
					module.hot.dispose(function () {
						update();
					});
				}
	
				/***/
			},
			/* 7 */
			/***/function (module, exports, __webpack_require__) {
	
				exports = module.exports = __webpack_require__(8)();
				// imports
	
	
				// module
				exports.push([module.id, ".reactVideoWrapper {\n  display: inline-block;\n  position: relative;\n  vertical-align: middle;\n  margin: 0 auto;\n  line-height: 100%;\n  background: black;\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n  max-height: 100%;\n  outline: none; }\n  .reactVideoWrapper .overlayContainer {\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    z-index: 2;\n    text-align: left;\n    transition: opacity 0.5s;\n    opacity: 0; }\n  .reactVideoWrapper video {\n    max-width: 100%;\n    max-height: 100%;\n    z-index: 1; }\n    .reactVideoWrapper video::-webkit-media-controls {\n      z-index: 2; }\n  .reactVideoWrapper .controlsWrapper {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    height: 40px;\n    background-color: #000;\n    transition: opacity 0.5s;\n    opacity: 0;\n    z-index: 2147483647; }\n    .reactVideoWrapper .controlsWrapper .seekBar .buffer {\n      position: absolute;\n      left: 0;\n      top: 0;\n      right: 0;\n      width: 100%;\n      height: 8px;\n      z-index: 1;\n      margin: 0;\n      background-color: #666; }\n    .reactVideoWrapper .controlsWrapper .seekBar .progress {\n      position: absolute;\n      left: 0;\n      top: 0;\n      right: 0;\n      width: 100%;\n      height: 8px;\n      z-index: 2;\n      margin: 0;\n      background-color: transparent;\n      background-image: rgba(0, 0, 0, 0.4);\n      box-shadow: inset 0px 0px 6px #000; }\n    .reactVideoWrapper .controlsWrapper .playButton {\n      width: 24px;\n      height: 24px;\n      position: absolute;\n      left: 5px;\n      bottom: 5px;\n      cursor: pointer; }\n    .reactVideoWrapper .controlsWrapper .pauseButton {\n      width: 24px;\n      height: 24px;\n      position: absolute;\n      left: 5px;\n      bottom: 5px;\n      cursor: pointer;\n      display: none; }\n    .reactVideoWrapper .controlsWrapper .muteButton {\n      width: 24px;\n      height: 24px;\n      position: absolute;\n      left: 34px;\n      bottom: 5px;\n      cursor: pointer; }\n    .reactVideoWrapper .controlsWrapper .unmuteButton {\n      width: 24px;\n      height: 24px;\n      position: absolute;\n      left: 34px;\n      bottom: 5px;\n      cursor: pointer;\n      display: none; }\n    .reactVideoWrapper .controlsWrapper .volumeBar {\n      position: absolute;\n      width: 100px;\n      height: 5px;\n      bottom: 14px;\n      left: 65px;\n      background: black; }\n    .reactVideoWrapper .controlsWrapper .volume {\n      position: absolute;\n      left: 0;\n      top: 0;\n      right: 0;\n      width: 100%;\n      height: 5px;\n      margin: 0;\n      padding: 0;\n      background-color: transparent;\n      background-image: rgba(0, 0, 0, 0.4);\n      box-shadow: inset 0px 0px 3px #444; }\n      .reactVideoWrapper .controlsWrapper .volume::-ms-fill-lower {\n        background: #222; }\n      .reactVideoWrapper .controlsWrapper .volume::-ms-fill-upper {\n        background: #EEE; }\n    .reactVideoWrapper .controlsWrapper .time {\n      width: 100px;\n      height: 24px;\n      position: absolute;\n      right: 35px;\n      top: 8px;\n      bottom: 0px;\n      font-family: \"Helvetica Neue\", \"Segoe UI\", arial, sans-serif;\n      font-size: 14px;\n      font-weight: 300;\n      color: white;\n      line-height: 30px;\n      text-align: right; }\n    .reactVideoWrapper .controlsWrapper .fullscreenButton {\n      width: 24px;\n      height: 24px;\n      position: absolute;\n      right: 5px;\n      bottom: 5px;\n      cursor: pointer; }\n    .reactVideoWrapper .controlsWrapper .defaultscreenButton {\n      width: 24px;\n      height: 24px;\n      position: absolute;\n      right: 5px;\n      bottom: 5px;\n      cursor: pointer;\n      display: none; }\n  .reactVideoWrapper input[type=range] {\n    -webkit-appearance: none; }\n    .reactVideoWrapper input[type=range]:focus {\n      outline: none; }\n    .reactVideoWrapper input[type=range]::-webkit-slider-runnable-track {\n      cursor: pointer;\n      transition: all .2s ease; }\n    .reactVideoWrapper input[type=range]::-webkit-slider-thumb {\n      -webkit-appearance: none;\n      border: 1px solid transparent;\n      height: 5px;\n      width: 0px;\n      border-radius: 0px;\n      background: transparent;\n      cursor: pointer; }\n    .reactVideoWrapper input[type=range]::-moz-range-track {\n      cursor: pointer;\n      transition: all .2s ease;\n      width: 100%;\n      height: 8px;\n      background: transparent; }\n    .reactVideoWrapper input[type=range]::-moz-range-thumb {\n      height: 5px;\n      width: 0px;\n      background: transparent;\n      cursor: pointer;\n      border: 1px solid transparent; }\n    .reactVideoWrapper input[type=range]::-ms-track {\n      cursor: pointer;\n      transition: all .2s ease;\n      color: transparent;\n      width: 100%;\n      height: 8px;\n      background: transparent; }\n    .reactVideoWrapper input[type=range]::-ms-thumb {\n      height: 5px;\n      width: 0px;\n      background: transparent;\n      cursor: pointer; }\n", ""]);
	
				// exports
	
	
				/***/
			},
			/* 8 */
			/***/function (module, exports) {
	
				/*
	   	MIT License http://www.opensource.org/licenses/mit-license.php
	   	Author Tobias Koppers @sokra
	   */
				// css base code, injected by the css-loader
				module.exports = function () {
					var list = [];
	
					// return the list of modules as css string
					list.toString = function toString() {
						var result = [];
						for (var i = 0; i < this.length; i++) {
							var item = this[i];
							if (item[2]) {
								result.push("@media " + item[2] + "{" + item[1] + "}");
							} else {
								result.push(item[1]);
							}
						}
						return result.join("");
					};
	
					// import a list of modules into the list
					list.i = function (modules, mediaQuery) {
						if (typeof modules === "string") modules = [[null, modules, ""]];
						var alreadyImportedModules = {};
						for (var i = 0; i < this.length; i++) {
							var id = this[i][0];
							if (typeof id === "number") alreadyImportedModules[id] = true;
						}
						for (i = 0; i < modules.length; i++) {
							var item = modules[i];
							// skip already imported module
							// this implementation is not 100% perfect for weird media query combinations
							//  when a module is imported multiple times with different media queries.
							//  I hope this will never occur (Hey this way we have smaller bundles)
							if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
								if (mediaQuery && !item[2]) {
									item[2] = mediaQuery;
								} else if (mediaQuery) {
									item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
								}
								list.push(item);
							}
						}
					};
					return list;
				};
	
				/***/
			},
			/* 9 */
			/***/function (module, exports, __webpack_require__) {
	
				/*
	   	MIT License http://www.opensource.org/licenses/mit-license.php
	   	Author Tobias Koppers @sokra
	   */
				var stylesInDom = {},
				    memoize = function memoize(fn) {
					var memo;
					return function () {
						if (typeof memo === "undefined") memo = fn.apply(this, arguments);
						return memo;
					};
				},
				    isOldIE = memoize(function () {
					return (/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())
					);
				}),
				    getHeadElement = memoize(function () {
					return document.head || document.getElementsByTagName("head")[0];
				}),
				    singletonElement = null,
				    singletonCounter = 0,
				    styleElementsInsertedAtTop = [];
	
				module.exports = function (list, options) {
					if (false) {
						if ((typeof document === 'undefined' ? 'undefined' : _typeof2(document)) !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
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
						for (var i = 0; i < styles.length; i++) {
							var item = styles[i];
							var domStyle = stylesInDom[item.id];
							domStyle.refs--;
							mayRemove.push(domStyle);
						}
						if (newList) {
							var newStyles = listToStyles(newList);
							addStylesToDom(newStyles, options);
						}
						for (var i = 0; i < mayRemove.length; i++) {
							var domStyle = mayRemove[i];
							if (domStyle.refs === 0) {
								for (var j = 0; j < domStyle.parts.length; j++) {
									domStyle.parts[j]();
								}delete stylesInDom[domStyle.id];
							}
						}
					};
				};
	
				function addStylesToDom(styles, options) {
					for (var i = 0; i < styles.length; i++) {
						var item = styles[i];
						var domStyle = stylesInDom[item.id];
						if (domStyle) {
							domStyle.refs++;
							for (var j = 0; j < domStyle.parts.length; j++) {
								domStyle.parts[j](item.parts[j]);
							}
							for (; j < item.parts.length; j++) {
								domStyle.parts.push(addStyle(item.parts[j], options));
							}
						} else {
							var parts = [];
							for (var j = 0; j < item.parts.length; j++) {
								parts.push(addStyle(item.parts[j], options));
							}
							stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts };
						}
					}
				}
	
				function listToStyles(list) {
					var styles = [];
					var newStyles = {};
					for (var i = 0; i < list.length; i++) {
						var item = list[i];
						var id = item[0];
						var css = item[1];
						var media = item[2];
						var sourceMap = item[3];
						var part = { css: css, media: media, sourceMap: sourceMap };
						if (!newStyles[id]) styles.push(newStyles[id] = { id: id, parts: [part] });else newStyles[id].parts.push(part);
					}
					return styles;
				}
	
				function insertStyleElement(options, styleElement) {
					var head = getHeadElement();
					var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
					if (options.insertAt === "top") {
						if (!lastStyleElementInsertedAtTop) {
							head.insertBefore(styleElement, head.firstChild);
						} else if (lastStyleElementInsertedAtTop.nextSibling) {
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
					if (idx >= 0) {
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
					} else if (obj.sourceMap && typeof URL === "function" && typeof URL.createObjectURL === "function" && typeof URL.revokeObjectURL === "function" && typeof Blob === "function" && typeof btoa === "function") {
						styleElement = createLinkElement(options);
						update = updateLink.bind(null, styleElement);
						remove = function remove() {
							removeStyleElement(styleElement);
							if (styleElement.href) URL.revokeObjectURL(styleElement.href);
						};
					} else {
						styleElement = createStyleElement(options);
						update = applyToTag.bind(null, styleElement);
						remove = function remove() {
							removeStyleElement(styleElement);
						};
					}
	
					update(obj);
	
					return function updateStyle(newObj) {
						if (newObj) {
							if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) return;
							update(obj = newObj);
						} else {
							remove();
						}
					};
				}
	
				var replaceText = function () {
					var textStore = [];
	
					return function (index, replacement) {
						textStore[index] = replacement;
						return textStore.filter(Boolean).join('\n');
					};
				}();
	
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
	
					if (media) {
						styleElement.setAttribute("media", media);
					}
	
					if (styleElement.styleSheet) {
						styleElement.styleSheet.cssText = css;
					} else {
						while (styleElement.firstChild) {
							styleElement.removeChild(styleElement.firstChild);
						}
						styleElement.appendChild(document.createTextNode(css));
					}
				}
	
				function updateLink(linkElement, obj) {
					var css = obj.css;
					var sourceMap = obj.sourceMap;
	
					if (sourceMap) {
						// http://stackoverflow.com/a/26603875
						css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
					}
	
					var blob = new Blob([css], { type: "text/css" });
	
					var oldSrc = linkElement.href;
	
					linkElement.href = URL.createObjectURL(blob);
	
					if (oldSrc) URL.revokeObjectURL(oldSrc);
				}
	
				/***/
			},
			/* 10 */
			/***/function (module, exports) {
	
				"use strict";
	
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
	
				var _createClass = function () {
					function defineProperties(target, props) {
						for (var i = 0; i < props.length; i++) {
							var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
						}
					}return function (Constructor, protoProps, staticProps) {
						if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
					};
				}();
	
				function _classCallCheck(instance, Constructor) {
					if (!(instance instanceof Constructor)) {
						throw new TypeError("Cannot call a class as a function");
					}
				}
	
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
	
				/***/
			}
			/******/])
		);
	});
	;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)(module)))

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOTE2MzNiMzBmYmMwOTFkZjE2ZDAiLCJ3ZWJwYWNrOi8vLy4vZGVtby9hcHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1kb21cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyYWRpdW1cIiIsIndlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6L3dlYnBhY2svYm9vdHN0cmFwIGU2ZTQ0MjU1Y2IyOGU0OTViMDdjIiwid2VicGFjazovLy93ZWJwYWNrOi8vL3NyYy92aWRlby5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9zcmMvYXNzZXRzL2ljb25zLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vc3JjL1Byb2dyZXNzLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL3NyYy9saWIvVmlkZW9BY3Rpb25zLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL3NyYy9saWIvVmlkZW9FdmVudEhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vc3JjL3N0eWxlL3ZpZGVvLnNjc3M/ZDk3YSIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9zcmMvc3R5bGUvdmlkZW8uc2NzcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9zcmMvbGliL1ZpZGVvVXRpbHMuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyJdLCJuYW1lcyI6WyJBcHAiLCJzdHlsZXMiLCJjb250YWluZXIiLCJ3aWR0aCIsImhlaWdodCIsImxpbmVIZWlnaHQiLCJ0ZXh0QWxpZ24iLCJvdmVyZmxvdyIsIm9uVGltZVVwZGF0ZSIsImhpc3RvcnkiLCJyZXBsYWNlU3RhdGUiLCJkb2N1bWVudCIsImxvY2F0aW9uIiwiaGFzaCIsInBhcnNlSW50IiwiZXZlbnQiLCJ0YXJnZXQiLCJjdXJyZW50VGltZSIsIm9uTWV0YURhdGFMb2FkZWQiLCJfdmlkZW8iLCJfd3JhcHBlciIsImZvY3VzIiwicGxheSIsImxvb3AiLCJyZWYiLCJzcmMiLCJ0eXBlIiwiY29sb3IiLCJ0ZXh0U2hhZG93IiwiZm9udEZhbWlseSIsImZvbnRXZWlnaHQiLCJmb250U2l6ZSIsImJveFNpemluZyIsInBhZGRpbmciLCJiYWNrZ3JvdW5kQ29sb3IiLCJDb21wb25lbnQiLCJyZW5kZXIiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN0Q0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztLQUdNQSxHOzs7Ozs7Ozs7Ozs7OztxTEFFRkMsTSxHQUFTO0FBQ0xDLHdCQUFXO0FBQ1BDLHdCQUFPLE9BREE7QUFFUEMseUJBQVEsT0FGRDtBQUdQQyw2QkFBWSxPQUhMO0FBSVBDLDRCQUFXLFFBSko7QUFLUEMsMkJBQVU7QUFMSDtBQUROLFUsUUFjVEMsWSxHQUFlLGlCQUFTO0FBQ3BCLGlCQUFJLENBQUNDLE9BQUQsSUFBWSxDQUFDQSxRQUFRQyxZQUF6QixFQUF1QztBQUNuQ0MsMEJBQVNDLFFBQVQsQ0FBa0JDLElBQWxCLEdBQXlCQyxTQUFTQyxNQUFNQyxNQUFOLENBQWFDLFdBQXRCLENB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SUFBSSxTQUFTLHdCQUF3QixXQUN2Qzt1QkFBZSxTQUFTLHdCQUMzQjtBQUNEO2NBQ0g7Ozs7Ozs7c0JBekVnQjs7Ozs7Ozs7Ozs7Ozs7QUNBckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgOTE2MzNiMzBmYmMwOTFkZjE2ZDAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcclxuaW1wb3J0IFJhZGl1bSBmcm9tICdyYWRpdW0nO1xyXG5pbXBvcnQgVmlkZW8gZnJvbSAnLi4vLi4vYnVpbGQvY29tcG9uZW50cy92aWRlbyc7XHJcblxyXG5AUmFkaXVtXHJcbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuXHJcbiAgICBzdHlsZXMgPSB7XHJcbiAgICAgICAgY29udGFpbmVyOiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiBcIjEwMHZ3XCIsXHJcbiAgICAgICAgICAgIGhlaWdodDogXCIxMDB2aFwiLFxyXG4gICAgICAgICAgICBsaW5lSGVpZ2h0OiBcIjEwMHZoXCIsXHJcbiAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50V2lsbE1vdW50KCl7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG9uVGltZVVwZGF0ZSA9IGV2ZW50ID0+IHtcclxuICAgICAgICBpZiggIWhpc3RvcnkgfHwgIWhpc3RvcnkucmVwbGFjZVN0YXRlICl7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmxvY2F0aW9uLmhhc2ggPSBwYXJzZUludChldmVudC50YXJnZXQuY3VycmVudFRpbWUpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBoaXN0b3J5LnJlcGxhY2VTdGF0ZSggbnVsbCwgbnVsbCwgXCIjXCIgKyBwYXJzZUludChldmVudC50YXJnZXQuY3VycmVudFRpbWUpICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uTWV0YURhdGFMb2FkZWQgPSBldmVudCA9PiB7XHJcbiAgICAgICAgdGhpcy5fdmlkZW8uX3dyYXBwZXIuZm9jdXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBwbGF5ID0gZXZlbnQgPT4ge1xyXG4gICAgICAgIGV2ZW50LnRhcmdldC5wbGF5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17W1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdHlsZXMuY29udGFpbmVyXHJcbiAgICAgICAgICAgIF19PlxyXG4gICAgICAgICAgICAgICAgPFZpZGVvXHJcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb29wOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICBsb2FkZWRtZXRhZGF0YT17dGhpcy5vbk1ldGFEYXRhTG9hZGVkfVxyXG4gICAgICAgICAgICAgICAgICAgIHRpbWV1cGRhdGU9e3RoaXMub25UaW1lVXBkYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlZj17cmVmID0+IHRoaXMuX3ZpZGVvID0gcmVmfVxyXG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZXM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiBcImh0dHBzOi8vd3VmZS5tZS9zYW1wbGUubXA0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInZpZGVvL21wNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiNTBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0U2hhZG93OiBcIjBweCAxcHggMHB4ICM3NzcsIDBweCAwcHggMXB4ICM3NzcsIDBweCAtMXB4IDBweCAjNTU1LCAwcHggMHB4IC0xcHggIzU1NVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBcIkhlbHZldGljYSBOZXVlLCBTZWdvZSBVSSwgc2Fucy1zZXJpZlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiAzMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjIwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZUhlaWdodDogXCI1MHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveFNpemluZzogXCJib3JkZXItYm94XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiMHB4IDMwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMCwwLDAsMC44KVwiXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5SZWFjdCBWaWRlbyBDb21wb25lbnQgLSBPdmVybGF5PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9WaWRlbz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuUmVhY3RET00ucmVuZGVyKFxyXG4gICAgPEFwcCAvPixcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCBcImFwcFwiIClcclxuKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZGVtby9hcHAvaW5kZXguanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0XCJcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZG9tXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVhY3QtZG9tXCJcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmFkaXVtXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmFkaXVtXCJcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwicmVhY3RcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wicmVhY3RcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIHtcblx0XHR2YXIgYSA9IHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGZhY3RvcnkocmVxdWlyZShcInJlYWN0XCIpKSA6IGZhY3Rvcnkocm9vdFtcInJlYWN0XCJdKTtcblx0XHRmb3IodmFyIGkgaW4gYSkgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGV4cG9ydHMgOiByb290KVtpXSA9IGFbaV07XG5cdH1cbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMl9fKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGU2ZTQ0MjU1Y2IyOGU0OTViMDdjXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6L3dlYnBhY2svYm9vdHN0cmFwIGU2ZTQ0MjU1Y2IyOGU0OTViMDdjIiwiaW1wb3J0IGljb25zIGZyb20gJy4vYXNzZXRzL2ljb25zJztcclxuaW1wb3J0IFByb2dyZXNzIGZyb20gJy4vUHJvZ3Jlc3MnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgVmlkZW9BY3Rpb25zIGZyb20gJy4vbGliL1ZpZGVvQWN0aW9ucyc7XHJcbmltcG9ydCBWaWRlb0V2ZW50SGFuZGxlciBmcm9tICcuL2xpYi9WaWRlb0V2ZW50SGFuZGxlcic7XHJcbmltcG9ydCBWaWRlb1N0eWxlIGZyb20gJy4vc3R5bGUvdmlkZW8uc2Nzcyc7XHJcbmltcG9ydCBWaWRlb1V0aWxzIGZyb20gJy4vbGliL1ZpZGVvVXRpbHMnO1xyXG5cclxuY2xhc3MgVmlkZW8gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuZXZlbnRIYW5kbGVyID0gbmV3IFZpZGVvRXZlbnRIYW5kbGVyKHRoaXMpO1xyXG4gICAgICAgIHRoaXMudmlkZW9VdGlscyA9IG5ldyBWaWRlb1V0aWxzKHRoaXMpO1xyXG4gICAgICAgIHRoaXMudmlkZW9BY3Rpb25zID0gbmV3IFZpZGVvQWN0aW9ucyh0aGlzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBidWZmZXI6IDAsXHJcbiAgICAgICAgICAgIHByb2dyZXNzOiAwLFxyXG4gICAgICAgICAgICB2b2x1bWU6IDEsXHJcbiAgICAgICAgICAgIGZ1bGxzY3JlZW46IGZhbHNlLFxyXG4gICAgICAgICAgICB0aW1lOiBcIjAwOjAwOjAwXCIsXHJcbiAgICAgICAgICAgIHBsYXlpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICBsb2FkZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBpc0lFOiBmYWxzZSxcclxuICAgICAgICAgICAgY3VycmVudFRpbWU6IDBcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuYnVmZmVyQ2hlY2tUaW1lciA9IHt9O1xyXG4gICAgICAgIHRoaXMuZnVsbHNjcmVlbkNoZWNrVGltZXIgPSB7fTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpe1xyXG4gICAgICAgIGxldCB2aWRlbyA9IHRoaXMuX3ZpZGVvO1xyXG4gICAgICAgIGlmKCAhdmlkZW8gKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgdGhpcy5ldmVudEhhbmRsZXIucmVtb3ZlTGlzdGVuZXJzKCk7XHJcbiAgICAgICAgdGhpcy5ldmVudEhhbmRsZXIuZGV0YWNoTGlzdGVuZXJzKCk7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbCggdGhpcy5idWZmZXJDaGVja1RpbWVyICk7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbCggdGhpcy5mdWxsc2NyZWVuQ2hlY2tUaW1lciApO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTWV0YURhdGFMb2FkZWQgPSBlID0+IHtcclxuICAgICAgICBsZXQgaXNJRSA9IHRoaXMudmlkZW9VdGlscy5pc0lFKCk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGlzSUVcclxuICAgICAgICB9LCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKCBpc0lFICl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZpZGVvVXRpbHMuZGlzYWJsZUNvbnRyb2xzKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZpZGVvVXRpbHMubW92ZU92ZXJsYXkoKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZpZGVvVXRpbHMuZW5hYmxlQ29udHJvbHMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnZpZGVvVXRpbHMuZW5hYmxlT3ZlcmxheSgpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGVkOiB0cnVlIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uVGltZVVwZGF0ZSA9IGUgPT4ge1xyXG4gICAgICAgIGxldCB7Y3VycmVudFRpbWUsIGR1cmF0aW9ufSA9IGUudGFyZ2V0XHJcbiAgICAgICAgbGV0IHByb2dyZXNzID0gdGhpcy52aWRlb1V0aWxzLmNhbGN1bGF0ZVBlcmNlbnRhZ2UoY3VycmVudFRpbWUsIGR1cmF0aW9uKTtcclxuICAgICAgICBsZXQgdGltZSA9IHRoaXMudmlkZW9VdGlscy5mb3JtYXRUaW1lRnJvbVNlY29uZHMoY3VycmVudFRpbWUpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBwcm9ncmVzcyxcclxuICAgICAgICAgICAgdGltZSxcclxuICAgICAgICAgICAgY3VycmVudFRpbWVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvblByb2dyZXNzQ2hhbmdlID0gZSA9PiB7XHJcbiAgICAgICAgbGV0IHByb2dyZXNzID0gcGFyc2VGbG9hdChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHByb2dyZXNzXHJcbiAgICAgICAgfSwgKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQge2R1cmF0aW9ufSA9IHRoaXMuX3ZpZGVvO1xyXG4gICAgICAgICAgICBsZXQgdGltZSA9IHByb2dyZXNzKmR1cmF0aW9uLzEwMDtcclxuICAgICAgICAgICAgdGhpcy5fdmlkZW8uY3VycmVudFRpbWUgPSB0aW1lO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgb25Wb2x1bWVTZXQgPSBlID0+IHtcclxuICAgICAgICBsZXQgdm9sdW1lID0gcGFyc2VGbG9hdChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgdGhpcy52aWRlb0FjdGlvbnMuc2V0Vm9sdW1lKHZvbHVtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tCdWZmZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IGJ1ZmZlciA9IHRoaXMudmlkZW9VdGlscy5jYWxjdWxhdGVCdWZmZXIoKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgYnVmZmVyXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVmZXJlbmNlVmlkZW9UYWcgPSB2aWRlbyA9PiB7XHJcbiAgICAgICAgdGhpcy5fdmlkZW8gPSB2aWRlbztcclxuICAgICAgICB0aGlzLmV2ZW50SGFuZGxlci5hdHRhY2hMaXN0ZW5lcnMoKTtcclxuICAgICAgICB0aGlzLmV2ZW50SGFuZGxlci5jcmVhdGVMaXN0ZW5lcnMoKTtcclxuICAgICAgICB0aGlzLmJ1ZmZlckNoZWNrVGltZXIgPSBzZXRJbnRlcnZhbCggdGhpcy5jaGVja0J1ZmZlciwgNTAwICk7XHJcbiAgICAgICAgdGhpcy5mdWxsc2NyZWVuQ2hlY2tUaW1lciA9IHNldEludGVydmFsKCB0aGlzLmNoZWNrRnVsbHNjcmVlbiwgNTAwICk7XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tGdWxsc2NyZWVuID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCBmdWxsc2NyZWVuID0gdGhpcy52aWRlb1V0aWxzLmlzRnVsbHNjcmVlbigpO1xyXG4gICAgICAgIGlmKCBmdWxsc2NyZWVuICE9PSB1bmRlZmluZWQgKXtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGZ1bGxzY3JlZW4gfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uTW91c2VNb3ZlID0gZSA9PiB7XHJcbiAgICAgICAgdGhpcy50cmlnZ2VyTW91c2VNb3ZlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJpZ2dlck1vdXNlTW92ZSA9ICgpID0+IHtcclxuICAgICAgICBpZiggdGhpcy5zdGF0ZS5sb2FkZWQgKXtcclxuICAgICAgICAgICAgaWYoICF0aGlzLnByb3BzLmF1dG9oaWRlIClcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgaWYoIHRoaXMucHJvcHMuY29udHJvbHMgJiYgIXRoaXMucHJvcHMuYXR0cmlidXRlcy5jb250cm9scyApXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jb250cm9sc1dyYXBwZXIuc3R5bGUub3BhY2l0eSA9IFwiMVwiO1xyXG4gICAgICAgICAgICBpZiggdGhpcy5wcm9wcy5vdmVybGF5IClcclxuICAgICAgICAgICAgICAgIHRoaXMuX292ZXJsYXkuc3R5bGUub3BhY2l0eSA9IFwiMVwiO1xyXG4gICAgICAgICAgICB0aGlzLl93cmFwcGVyLnN0eWxlLmN1cnNvciA9IFwiYXV0b1wiO1xyXG4gICAgICAgICAgICBpZiggdGhpcy5oaWRlVGltZXIgKVxyXG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuaGlkZVRpbWVyKTtcclxuICAgICAgICAgICAgdGhpcy5oaWRlVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKCB0aGlzLnN0YXRlLnBsYXlpbmcgKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jb250cm9sc1dyYXBwZXIuc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKCB0aGlzLnByb3BzLm92ZXJsYXkgJiYgIXRoaXMucHJvcHMuZml4ZWRvdmVybGF5IClcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fb3ZlcmxheS5zdHlsZS5vcGFjaXR5ID0gXCIwXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoIHRoaXMucHJvcHMuYXV0b2hpZGVjdXJzb3IgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl93cmFwcGVyLnN0eWxlLmN1cnNvciA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfSwgMzAwMCApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvblBsYXkgPSBlID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgcGxheWluZzogdHJ1ZVxyXG4gICAgICAgIH0sICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy50cmlnZ2VyTW91c2VNb3ZlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25QYXVzZSA9IGUgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBwbGF5aW5nOiBmYWxzZVxyXG4gICAgICAgIH0sICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy50cmlnZ2VyTW91c2VNb3ZlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Wb2x1bWVDaGFuZ2UgPSBlID0+IHtcclxuICAgICAgICBsZXQgdm9sdW1lID0gcGFyc2VJbnQoZS50YXJnZXQudm9sdW1lKjEwMCkvMTAwO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICB2b2x1bWVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkZ1bGxzY3JlZW5TZXQgPSBlID0+IHtcclxuICAgICAgICB0aGlzLnZpZGVvQWN0aW9ucy5nb0Z1bGxzY3JlZW4odGhpcy5fd3JhcHBlcik7XHJcbiAgICB9XHJcblxyXG4gICAgb25EZWZhdWx0c2NyZWVuU2V0ID0gZSA9PiB7XHJcbiAgICAgICAgdGhpcy52aWRlb0FjdGlvbnMuZXhpdEZ1bGxzY3JlZW4oKTtcclxuICAgIH1cclxuXHJcbiAgICBvbldoZWVsID0gZSA9PiB7XHJcbiAgICAgICAgaWYoZS5kZWx0YVkgPCAwKXtcclxuICAgICAgICAgICAgdGhpcy52aWRlb0FjdGlvbnMudm9sdW1lVXAoKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy52aWRlb0FjdGlvbnMudm9sdW1lRG93bigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbktleURvd24gPSBlID0+IHtcclxuICAgICAgICBpZiggdGhpcy5wcm9wcy5zaG9ydGN1dHMgKXtcclxuICAgICAgICAgICAgbGV0IGtleUNvZGUgPSBlLmtleUNvZGU7XHJcbiAgICAgICAgICAgIHN3aXRjaCgga2V5Q29kZSApe1xyXG4gICAgICAgICAgICAgICAgY2FzZSAzMjogeyAvLyBTcGFjZVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmlkZW9BY3Rpb25zLnRvZ2dsZVBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhc2UgMzk6IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZpZGVvQWN0aW9ucy5mb3J3YXJkKCk7IC8vIFJpZ2h0IGFycm93XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXNlIDM3OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52aWRlb0FjdGlvbnMuYmFjaygpOyAvLyBMZWZ0IGFycm93XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXNlIDM4OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52aWRlb0FjdGlvbnMudm9sdW1lVXAoKTsgLy8gVXAgYXJyb3dcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhc2UgNDA6IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZpZGVvQWN0aW9ucy52b2x1bWVEb3duKCk7IC8vIERvd24gYXJyb3dcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhc2UgNzA6IHsgLy8gRlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmlkZW9BY3Rpb25zLnRvZ2dsZUZ1bGxzY3JlZW4oKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhc2UgNzc6IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZpZGVvQWN0aW9ucy50b2dnbGVNdXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgbGV0IHNvdXJjZXMgPSB0aGlzLnByb3BzLnNvdXJjZXMubWFwKCBzb3VyY2UgPT4ge1xyXG4gICAgICAgICAgICBpZiggdHlwZW9mIHNvdXJjZSA9PSBcInN0cmluZ1wiICl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4geyBzcmM6IHNvdXJjZSB9O1xyXG4gICAgICAgICAgICB9ZWxzZSBpZiggdHlwZW9mIHNvdXJjZSA9PSBcIm9iamVjdFwiICl7XHJcbiAgICAgICAgICAgICAgICBpZiggc291cmNlLnNyYyA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiBzb3VyY2Uuc3JjICE9IFwic3RyaW5nXCIgKXtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCBcIlNvdXJjZSBtdXN0IGJlIGEgc3RyaW5nIG9yIGFuIG9iamVjdCBjb250YWluaW5nIGEgJ3NyYycga2V5LlxcblwiLCBzb3VyY2UgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBzb3VyY2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0IHZpZGVvUHJvcHMgPSB0aGlzLnByb3BzLmF0dHJpYnV0ZXM7XHJcbiAgICAgICAgaWYoIHRoaXMuc3RhdGUuaXNJRSApe1xyXG4gICAgICAgICAgICB2aWRlb1Byb3BzLmNvbnRyb2xzID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlYWN0VmlkZW9XcmFwcGVyXCJcclxuICAgICAgICAgICAgICAgIG9uTW91c2VNb3ZlPXt0aGlzLm9uTW91c2VNb3ZlfVxyXG4gICAgICAgICAgICAgICAgdGFiSW5kZXg9e3RoaXMucHJvcHMudGFiSW5kZXh9XHJcbiAgICAgICAgICAgICAgICBvbktleURvd249e3RoaXMub25LZXlEb3dufVxyXG4gICAgICAgICAgICAgICAgb25XaGVlbD17dGhpcy5vbldoZWVsfVxyXG4gICAgICAgICAgICAgICAgcmVmPXtyZWYgPT4gdGhpcy5fd3JhcHBlciA9IHJlZn1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm92ZXJsYXlDb250YWluZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uTW91c2VNb3ZlPXt0aGlzLm9uTW91c2VNb3ZlfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uRG91YmxlQ2xpY2s9e3RoaXMudmlkZW9BY3Rpb25zLnRvZ2dsZUZ1bGxzY3JlZW59XHJcbiAgICAgICAgICAgICAgICAgICAgcmVmPXtyZWYgPT4gdGhpcy5fb3ZlcmxheSA9IHJlZn1cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiB0aGlzLnByb3BzLm92ZXJsYXkgPyBcImJsb2NrXCIgOiBcIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDx2aWRlb1xyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7dGhpcy5wcm9wcy5jbGFzc05hbWV9YH1cclxuICAgICAgICAgICAgICAgICAgICBvbk1vdXNlTW92ZT17dGhpcy5vbk1vdXNlTW92ZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkRvdWJsZUNsaWNrPXt0aGlzLnZpZGVvQWN0aW9ucy50b2dnbGVGdWxsc2NyZWVufVxyXG4gICAgICAgICAgICAgICAgICAgIHJlZj17dGhpcy5yZWZlcmVuY2VWaWRlb1RhZ31cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX1cclxuICAgICAgICAgICAgICAgICAgICB3aWR0aD17dGhpcy5wcm9wcy53aWR0aH1cclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9e3RoaXMucHJvcHMuaGVpZ2h0fVxyXG4gICAgICAgICAgICAgICAgICAgIHsuLi52aWRlb1Byb3BzfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlcy5tYXAoIChzLCBpKSA9PiA8c291cmNlIGtleT17aX0gc3JjPXtzLnNyY30gdHlwZT17cy50eXBlIHx8IG51bGx9IC8+KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L3ZpZGVvPlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIHJlZj17IHJlZiA9PiB0aGlzLl9jb250cm9sc1dyYXBwZXIgPSByZWYgfVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlLmNvbnRyb2xzV3JhcHBlciB8fCB7fX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb250cm9sc1dyYXBwZXJcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2Vla0JhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UHJvZ3Jlc3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17IHJlZiA9PiB0aGlzLl9wcm9ncmVzcyA9IHJlZiB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5wcm9ncmVzc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInByb2dyZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZTogdGhpcy5vblByb2dyZXNzQ2hhbmdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UHJvZ3Jlc3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17IHJlZiA9PiB0aGlzLl9idWZmZXIgPSByZWYgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuYnVmZmVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lID0gXCJidWZmZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IFwiIzc3N1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZDogXCIjNjY2XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFjazogXCIjMDAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZE9ubHk6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwbGF5QnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtyZWYgPT4gdGhpcy5fcGxheSA9IHJlZn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy52aWRlb0FjdGlvbnMucGxheX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRoaXMuc3RhdGUucGxheWluZyA/IFwibm9uZVwiIDogXCJibG9ja1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7aWNvbnMucGxheX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBhdXNlQnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXsgcmVmID0+IHRoaXMuX3BhdXNlID0gcmVmfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnZpZGVvQWN0aW9ucy5wYXVzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRoaXMuc3RhdGUucGxheWluZyA/IFwiYmxvY2tcIiA6IFwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7aWNvbnMucGF1c2V9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdXRlQnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtyZWYgPT4gdGhpcy5fbXV0ZUJ1dHRvbiA9IHJlZn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy52aWRlb0FjdGlvbnMubXV0ZX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtpY29ucy52b2x1bWV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ1bm11dGVCdXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWY9e3JlZiA9PiB0aGlzLl91bm11dGVCdXR0b24gPSByZWZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMudmlkZW9BY3Rpb25zLnVubXV0ZX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtpY29ucy5tdXRlfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidm9sdW1lQmFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9ncmVzc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluPVwiMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXg9XCIxXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXA9XCJhbnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtyZWYgPT4gdGhpcy5fdm9sdW1lID0gcmVmfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudm9sdW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiB0aGlzLm9uVm9sdW1lU2V0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IFwiI0ZGRlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZDogXCIjRkZGXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFjazogXCJyZ2JhKCAwLCAwLCAwLCAwLjMgKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidm9sdW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0aW1lXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnRpbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZnVsbHNjcmVlbkJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25GdWxsc2NyZWVuU2V0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogdGhpcy5zdGF0ZS5mdWxsc2NyZW4gPyBcIm5vbmVcIiA6IFwiYmxvY2tcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2ljb25zLmZ1bGxzY3JlZW59XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkZWZhdWx0c2NyZWVuQnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vbkRlZmF1bHRzY3JlZW5TZXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiB0aGlzLnN0YXRlLmZ1bGxzY3JlZW4gPyBcImJsb2NrXCIgOiBcIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2ljb25zLmRlZmF1bHRzY3JlZW59XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59O1xyXG5cclxuVmlkZW8ucHJvcFR5cGVzID0ge1xyXG4gICAgc291cmNlczogUmVhY3QuUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXHJcbiAgICBzdHlsZTogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcclxuICAgIHdpZHRoOiBSZWFjdC5Qcm9wVHlwZXMub25lT2ZUeXBlKFtcclxuICAgICAgICBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgIFJlYWN0LlByb3BUeXBlcy5udW1iZXJcclxuICAgIF0pLFxyXG4gICAgaGVpZ2h0OiBSZWFjdC5Qcm9wVHlwZXMub25lT2ZUeXBlKFtcclxuICAgICAgICBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgIFJlYWN0LlByb3BUeXBlcy5udW1iZXJcclxuICAgIF0pLFxyXG4gICAgY2xhc3NOYW1lOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgYXR0cmlidXRlczogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcclxuICAgIGNvbnRyb2xzOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcclxuICAgIC8vIEF1dG9oaWRlIGNvbnRyb2xzIGFuZCBvdmVybGF5XHJcbiAgICBhdXRvaGlkZTogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBhdXRvaGlkZWN1cnNvcjogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXHJcbiAgICAvLyBPdmVybGF5IGVuYWJsZWRcclxuICAgIG92ZXJsYXk6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxyXG4gICAgLy8gT3ZlcmxheSBkb2VzIG5vdCBhdXRvaGlkZVxyXG4gICAgZml4ZWRvdmVybGF5OiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcclxuICAgIC8vIEVuYWJsZSBvciBkaXNhYmxlIGtleWJvYXJkIHNob3J0Y3V0c1xyXG4gICAgc2hvcnRjdXRzOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcclxuICAgIHRhYkluZGV4OiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nXHJcbn07XHJcblxyXG5WaWRlby5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgICBzb3VyY2VzOiBbXSxcclxuICAgIHN0eWxlOiB7fSxcclxuICAgIGNsYXNzTmFtZTogXCJcIixcclxuICAgIGF0dHJpYnV0ZXM6IHt9LFxyXG4gICAgY29udHJvbHM6IHRydWUsXHJcbiAgICBhdXRvaGlkZTogdHJ1ZSxcclxuICAgIGF1dG9oaWRlY3Vyc29yOiB0cnVlLFxyXG4gICAgb3ZlcmxheTogdHJ1ZSxcclxuICAgIGZpeGVkb3ZlcmxheTogZmFsc2UsXHJcbiAgICB3aWR0aDogXCJhdXRvXCIsXHJcbiAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgc2hvcnRjdXRzOiB0cnVlLFxyXG4gICAgdGFiSW5kZXg6IFwiMVwiXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBWaWRlbztcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZpZGVvLmpzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vc3JjL3ZpZGVvLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmxldCBpY29ucyA9IHtcbiAgICBwbGF5OiAoXG4gICAgICAgIDxzdmcgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxuICAgICAgICAgICAgPHBhdGggZD1cIk04IDV2MTRsMTEtN3pcIiBmaWxsPVwid2hpdGVcIj48L3BhdGg+XG4gICAgICAgIDwvc3ZnPlxuICAgICksXG4gICAgcGF1c2U6IChcbiAgICAgICAgPHN2ZyB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTTYgMTloNFY1SDZ2MTR6bTgtMTR2MTRoNFY1aC00elwiIGZpbGw9XCJ3aGl0ZVwiLz5cbiAgICAgICAgPC9zdmc+XG4gICAgKSxcbiAgICBmdWxsc2NyZWVuOiAoXG4gICAgICAgIDxzdmcgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxuICAgICAgICAgICAgPHBhdGggZD1cIk03IDE0SDV2NWg1di0ySDd2LTN6bS0yLTRoMlY3aDNWNUg1djV6bTEyIDdoLTN2Mmg1di01aC0ydjN6TTE0IDV2MmgzdjNoMlY1aC01elwiIGZpbGw9XCJ3aGl0ZVwiLz5cbiAgICAgICAgPC9zdmc+XG4gICAgKSxcbiAgICBkZWZhdWx0c2NyZWVuOiAoXG4gICAgICAgIDxzdmcgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxuICAgICAgICAgICAgPHBhdGggZD1cIk01IDE2aDN2M2gydi01SDV2MnptMy04SDV2Mmg1VjVIOHYzem02IDExaDJ2LTNoM3YtMmgtNXY1em0yLTExVjVoLTJ2NWg1VjhoLTN6XCIgZmlsbD1cIndoaXRlXCIvPlxuICAgICAgICA8L3N2Zz5cbiAgICApLFxuICAgIHZvbHVtZTogKFxuICAgICAgICA8c3ZnIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNMyA5djZoNGw1IDVWNEw3IDlIM3ptMTMuNSAzYzAtMS43Ny0xLjAyLTMuMjktMi41LTQuMDN2OC4wNWMxLjQ4LS43MyAyLjUtMi4yNSAyLjUtNC4wMnpNMTQgMy4yM3YyLjA2YzIuODkuODYgNSAzLjU0IDUgNi43MXMtMi4xMSA1Ljg1LTUgNi43MXYyLjA2YzQuMDEtLjkxIDctNC40OSA3LTguNzdzLTIuOTktNy44Ni03LTguNzd6XCIgZmlsbD1cIndoaXRlXCIvPlxuICAgICAgICA8L3N2Zz5cbiAgICApLFxuICAgIG11dGU6IChcbiAgICAgICAgPHN2ZyB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTTcgOXY2aDRsNSA1VjRsLTUgNUg3elwiIGZpbGw9XCJ3aGl0ZVwiLz5cbiAgICAgICAgPC9zdmc+XG4gICAgKSxcbn07XG5leHBvcnQgZGVmYXVsdCBpY29ucztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hc3NldHMvaWNvbnMuanNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9zcmMvYXNzZXRzL2ljb25zLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWFjdFwiXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi9leHRlcm5hbCBcInJlYWN0XCIiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY2xhc3MgUHJvZ3Jlc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpe1xyXG4gICAgICAgIGxldCBjb2xvcnMgPSB0aGlzLnByb3BzLmNvbG9ycztcclxuICAgICAgICBpZiggIWNvbG9ycy5zdGFydCB8fCAhY29sb3JzLmVuZCB8fCAhY29sb3JzLmJhY2sgKVxyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCBcIkNvbG9ycyBwcm9wIG11c3QgaGF2ZSBcXFwic3RhcnRcXFwiLCBcXFwiZW5kXFxcIiBhbmQgXFxcImJhY2tcXFwiIGF0dHJpYnV0ZXMuXCIgKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpe31cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBsZXQgdmFsdWUgPSAxMDAvcGFyc2VJbnQodGhpcy5wcm9wcy5tYXgpKnRoaXMucHJvcHMudmFsdWU7XHJcbiAgICAgICAgbGV0IHN0eWxlID0ge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICR7dGhpcy5wcm9wcy5jb2xvcnMuc3RhcnR9IDAlLCAke3RoaXMucHJvcHMuY29sb3JzLmVuZH0gJHt2YWx1ZX0lLCAke3RoaXMucHJvcHMuY29sb3JzLmJhY2t9ICR7dmFsdWV9JSwgJHt0aGlzLnByb3BzLmNvbG9ycy5iYWNrfSApYFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwicmFuZ2VcIlxyXG4gICAgICAgICAgICAgICAgc3RlcD17dGhpcy5wcm9wcy5zdGVwfVxyXG4gICAgICAgICAgICAgICAgbWluPXt0aGlzLnByb3BzLm1pbn1cclxuICAgICAgICAgICAgICAgIG1heD17dGhpcy5wcm9wcy5tYXh9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5wcm9wcy52YWx1ZX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc05hbWV9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17c3R5bGV9XHJcbiAgICAgICAgICAgICAgICByZWY9eyByZWYgPT4gdGhpcy5fcHJvZ3Jlc3MgPSByZWYgfVxyXG4gICAgICAgICAgICAgICAgey4uLnRoaXMucHJvcHMuYXR0cmlidXRlc31cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuUHJvZ3Jlc3MucHJvcFR5cGVzID0ge1xyXG4gICAgc3RlcDogUmVhY3QuUHJvcFR5cGVzLm9uZU9mVHlwZShbXHJcbiAgICAgICAgUmVhY3QuUHJvcFR5cGVzLm51bWJlcixcclxuICAgICAgICBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nXHJcbiAgICBdKSxcclxuICAgIG1pbjogUmVhY3QuUHJvcFR5cGVzLm9uZU9mVHlwZShbXHJcbiAgICAgICAgUmVhY3QuUHJvcFR5cGVzLm51bWJlcixcclxuICAgICAgICBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nXHJcbiAgICBdKSxcclxuICAgIG1heDogUmVhY3QuUHJvcFR5cGVzLm9uZU9mVHlwZShbXHJcbiAgICAgICAgUmVhY3QuUHJvcFR5cGVzLm51bWJlcixcclxuICAgICAgICBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nXHJcbiAgICBdKSxcclxuICAgIHZhbHVlOiBSZWFjdC5Qcm9wVHlwZXMub25lT2ZUeXBlKFtcclxuICAgICAgICBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgICAgIFJlYWN0LlByb3BUeXBlcy5zdHJpbmdcclxuICAgIF0pLFxyXG4gICAgY2xhc3NOYW1lOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgLy8gU3RhbmRhcmQgaHRtbCB0YWcgYXR0cmlidXRlc1xyXG4gICAgYXR0cmlidXRlczogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcclxuICAgIC8vIENvbG9yIHBhdHRlcm4gb2JqZWN0XHJcbiAgICBjb2xvcnM6IFJlYWN0LlByb3BUeXBlcy5vYmplY3RcclxufVxyXG5cclxuUHJvZ3Jlc3MuZGVmYXVsdFByb3BzID0ge1xyXG4gICAgc3RlcDogMC4xLFxyXG4gICAgbWluOiAwLFxyXG4gICAgbWF4OiAxMDAsXHJcbiAgICB2YWx1ZTogMCxcclxuICAgIGNsYXNzTmFtZTogXCJcIixcclxuICAgIGF0dHJpYnV0ZXM6IHt9LFxyXG4gICAgLy8gU3RhcnQgYW5kIEVuZCBwcm9kdWNlIGEgbGluZWFyIGZyb20gbGVmdCB0byByaWdodCBvbiB0aGUgdHJhY2sgb2YgdGhlIHByb2dyZXNzIGJhclxyXG4gICAgLy8gQmFjayBpcyB0aGUgY29sb3IgZm9yIHRoZSByaWdodCBzaWRlIG9mIHRoZSB0cmFja1xyXG4gICAgY29sb3JzOiB7XHJcbiAgICAgICAgc3RhcnQ6IFwiI0E5MDMyOVwiLFxyXG4gICAgICAgIGVuZDogXCIjNkQwMDE5XCIsXHJcbiAgICAgICAgYmFjazogXCJyZ2JhKCAwLCAwLCAwLCAwLjQgKVwiXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2dyZXNzO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvUHJvZ3Jlc3MuanNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9zcmMvUHJvZ3Jlc3MuanMiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBWaWRlb0FjdGlvbnN7XHJcbiAgICBjb25zdHJ1Y3Rvcih2aWRlb0NvbXBvbmVudCl7XHJcbiAgICAgICAgdGhpcy52aWRlb0NvbXBvbmVudCA9IHZpZGVvQ29tcG9uZW50O1xyXG4gICAgfVxyXG5cclxuICAgIHBsYXkgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYoICF0aGlzLnZpZGVvQ29tcG9uZW50Ll92aWRlbyApXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB0aGlzLnZpZGVvQ29tcG9uZW50Ll92aWRlby5wbGF5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcGF1c2UgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYoICF0aGlzLnZpZGVvQ29tcG9uZW50Ll92aWRlbyApXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB0aGlzLnZpZGVvQ29tcG9uZW50Ll92aWRlby5wYXVzZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG11dGUgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYoICF0aGlzLnZpZGVvQ29tcG9uZW50Ll92aWRlbyApXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB0aGlzLmJlZm9yZU11dGUgPSB0aGlzLnZpZGVvQ29tcG9uZW50LnN0YXRlLnZvbHVtZTtcclxuICAgICAgICB0aGlzLnZpZGVvQ29tcG9uZW50LnNldFN0YXRlKHtcclxuICAgICAgICAgICAgdm9sdW1lOiAwXHJcbiAgICAgICAgfSwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm11dGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy52aWRlb0NvbXBvbmVudC5fdmlkZW8udm9sdW1lID0gMDtcclxuICAgICAgICAgICAgdGhpcy52aWRlb0NvbXBvbmVudC5fbXV0ZUJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgIHRoaXMudmlkZW9Db21wb25lbnQuX3VubXV0ZUJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHVubXV0ZSA9ICgpID0+IHtcclxuICAgICAgICBpZiggIXRoaXMudmlkZW9Db21wb25lbnQuX3ZpZGVvIClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIGxldCB2b2x1bWUgPSB0aGlzLmJlZm9yZU11dGUgfHwgMTtcclxuICAgICAgICB0aGlzLnZpZGVvQ29tcG9uZW50LnNldFN0YXRlKHtcclxuICAgICAgICAgICAgdm9sdW1lXHJcbiAgICAgICAgfSwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm11dGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMudmlkZW9Db21wb25lbnQuX3ZpZGVvLnZvbHVtZSA9IHZvbHVtZTtcclxuICAgICAgICAgICAgdGhpcy52aWRlb0NvbXBvbmVudC5fbXV0ZUJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgICAgICB0aGlzLnZpZGVvQ29tcG9uZW50Ll91bm11dGVCdXR0b24uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHZvbHVtZVVwID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCB2b2x1bWUgPSB0aGlzLnZpZGVvQ29tcG9uZW50LnN0YXRlLnZvbHVtZTtcclxuICAgICAgICBpZiggdm9sdW1lID49IDEgKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgdm9sdW1lICs9IDAuMVxyXG4gICAgICAgIHRoaXMuc2V0Vm9sdW1lKHZvbHVtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgdm9sdW1lRG93biA9ICgpID0+IHtcclxuICAgICAgICBsZXQgdm9sdW1lID0gdGhpcy52aWRlb0NvbXBvbmVudC5zdGF0ZS52b2x1bWU7XHJcbiAgICAgICAgaWYoIHZvbHVtZSA8PSAwIClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIHZvbHVtZSAtPSAwLjFcclxuICAgICAgICB0aGlzLnNldFZvbHVtZSh2b2x1bWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFZvbHVtZSA9ICh2b2x1bWUpID0+IHtcclxuICAgICAgICB0aGlzLnZpZGVvQ29tcG9uZW50LnNldFN0YXRlKHtcclxuICAgICAgICAgICAgdm9sdW1lXHJcbiAgICAgICAgfSwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnZpZGVvQ29tcG9uZW50Ll92aWRlby52b2x1bWUgPSB2b2x1bWU7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYmFjayA9ICgpID0+IHtcclxuICAgICAgICBpZiggIXRoaXMudmlkZW9Db21wb25lbnQuX3ZpZGVvIClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIGxldCB7Y3VycmVudFRpbWUsIGR1cmF0aW9ufSA9IHRoaXMudmlkZW9Db21wb25lbnQuX3ZpZGVvO1xyXG4gICAgICAgIGxldCBuZXdUaW1lID0gMDtcclxuICAgICAgICBpZiggY3VycmVudFRpbWUgLTUgPiAwICl7XHJcbiAgICAgICAgICAgIG5ld1RpbWUgPSBjdXJyZW50VGltZSAtNTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy52aWRlb0NvbXBvbmVudC5fdmlkZW8uY3VycmVudFRpbWUgPSBuZXdUaW1lO1xyXG4gICAgICAgIGxldCBwcm9ncmVzcyA9IG5ld1RpbWUvZHVyYXRpb24qMTAwO1xyXG4gICAgICAgIHRoaXMudmlkZW9Db21wb25lbnQuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBwcm9ncmVzc1xyXG4gICAgICAgIH0sICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy52aWRlb0NvbXBvbmVudC5vblRpbWVVcGRhdGUoe3RhcmdldDogdGhpcy52aWRlb0NvbXBvbmVudC5fdmlkZW99KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmb3J3YXJkID0gKCkgPT4ge1xyXG4gICAgICAgIGlmKCAhdGhpcy52aWRlb0NvbXBvbmVudC5fdmlkZW8gKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgbGV0IHtjdXJyZW50VGltZSwgZHVyYXRpb259ID0gdGhpcy52aWRlb0NvbXBvbmVudC5fdmlkZW87XHJcbiAgICAgICAgbGV0IG5ld1RpbWUgPSBkdXJhdGlvbjtcclxuICAgICAgICBpZiggY3VycmVudFRpbWUgKzUgPCBkdXJhdGlvbiApe1xyXG4gICAgICAgICAgICBuZXdUaW1lID0gY3VycmVudFRpbWUgKzU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudmlkZW9Db21wb25lbnQuX3ZpZGVvLmN1cnJlbnRUaW1lID0gbmV3VGltZTtcclxuICAgICAgICBsZXQgcHJvZ3Jlc3MgPSBuZXdUaW1lL2R1cmF0aW9uKjEwMDtcclxuICAgICAgICB0aGlzLnZpZGVvQ29tcG9uZW50LnNldFN0YXRlKHtcclxuICAgICAgICAgICAgcHJvZ3Jlc3NcclxuICAgICAgICB9LCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudmlkZW9Db21wb25lbnQub25UaW1lVXBkYXRlKHt0YXJnZXQ6IHRoaXMudmlkZW9Db21wb25lbnQuX3ZpZGVvfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ29GdWxsc2NyZWVuID0gKGVsZW1lbnQpID0+IHtcclxuICAgICAgICBpZiggZWxlbWVudC5yZXF1ZXN0RnVsbHNjcmVlbiApe1xyXG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudC5yZXF1ZXN0RnVsbHNjcmVlbigpO1xyXG4gICAgICAgIH1lbHNlIGlmKCBlbGVtZW50Lm1zUmVxdWVzdEZ1bGxzY3JlZW4gKXtcclxuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQubXNSZXF1ZXN0RnVsbHNjcmVlbigpO1xyXG4gICAgICAgIH1lbHNlIGlmKCBlbGVtZW50Lm1velJlcXVlc3RGdWxsU2NyZWVuICl7XHJcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50Lm1velJlcXVlc3RGdWxsU2NyZWVuKCk7XHJcbiAgICAgICAgfWVsc2UgaWYoIGVsZW1lbnQud2Via2l0UmVxdWVzdEZ1bGxzY3JlZW4gKXtcclxuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQud2Via2l0UmVxdWVzdEZ1bGxzY3JlZW4oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy52aWRlb0NvbXBvbmVudC5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGZ1bGxzY3JlZW46IHRydWVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBleGl0RnVsbHNjcmVlbiA9ICgpID0+IHtcclxuICAgICAgICBpZiggZG9jdW1lbnQuZXhpdEZ1bGxzY3JlZW4gKXtcclxuICAgICAgICAgICAgcmV0dXJuIGRvY3VtZW50LmV4aXRGdWxsc2NyZWVuKCk7XHJcbiAgICAgICAgfWVsc2UgaWYoIGRvY3VtZW50Lm1zRXhpdEZ1bGxzY3JlZW4gKXtcclxuICAgICAgICAgICAgcmV0dXJuIGRvY3VtZW50Lm1zRXhpdEZ1bGxzY3JlZW4oKTtcclxuICAgICAgICB9ZWxzZSBpZiggZG9jdW1lbnQubW96Q2FuY2VsRnVsbFNjcmVlbiApe1xyXG4gICAgICAgICAgICByZXR1cm4gZG9jdW1lbnQubW96Q2FuY2VsRnVsbFNjcmVlbigpO1xyXG4gICAgICAgIH1lbHNlIGlmKCBkb2N1bWVudC53ZWJraXRFeGl0RnVsbHNjcmVlbiApe1xyXG4gICAgICAgICAgICByZXR1cm4gZG9jdW1lbnQud2Via2l0RXhpdEZ1bGxzY3JlZW4oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy52aWRlb0NvbXBvbmVudC5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGZ1bGxzY3JlZW46IGZhbHNlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlRnVsbHNjcmVlbiA9ICgpID0+IHtcclxuICAgICAgICBpZiggdGhpcy52aWRlb0NvbXBvbmVudC5zdGF0ZS5mdWxsc2NyZWVuICl7XHJcbiAgICAgICAgICAgIHRoaXMudmlkZW9Db21wb25lbnQub25EZWZhdWx0c2NyZWVuU2V0KHt9KTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy52aWRlb0NvbXBvbmVudC5vbkZ1bGxzY3JlZW5TZXQoe30pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVNdXRlID0gKCkgPT4ge1xyXG4gICAgICAgIGlmKCAhdGhpcy5tdXRlZCApe1xyXG4gICAgICAgICAgICB0aGlzLm11dGUoKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy51bm11dGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlUGxheSA9ICgpID0+IHtcclxuICAgICAgICBpZiggdGhpcy52aWRlb0NvbXBvbmVudC5zdGF0ZS5wbGF5aW5nICl7XHJcbiAgICAgICAgICAgIHRoaXMucGF1c2UoKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5wbGF5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbGliL1ZpZGVvQWN0aW9ucy5qc1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL3NyYy9saWIvVmlkZW9BY3Rpb25zLmpzIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlkZW9FdmVudEhhbmRsZXJ7XHJcbiAgICBldmVudExpc3RlbmVycyA9IFtdO1xyXG4gICAgZXZlbnRzID0gW1xyXG4gICAgICAgIFwiYWJvcnRcIixcclxuICAgICAgICBcImNhbnBsYXlcIixcclxuICAgICAgICBcImNhbnBsYXl0aHJvdWdoXCIsXHJcbiAgICAgICAgXCJkdXJhdGlvbmNoYW5nZVwiLFxyXG4gICAgICAgIFwiZW1wdGllZFwiLFxyXG4gICAgICAgIFwiZW5kZWRcIixcclxuICAgICAgICBcImVycm9yXCIsXHJcbiAgICAgICAgXCJsb2FkZWRtZXRhZGF0YVwiLFxyXG4gICAgICAgIFwibG9hZHN0YXJ0XCIsXHJcbiAgICAgICAgXCJwYXVzZVwiLFxyXG4gICAgICAgIFwicGxheVwiLFxyXG4gICAgICAgIFwicGxheWluZ1wiLFxyXG4gICAgICAgIFwicHJvZ3Jlc3NcIixcclxuICAgICAgICBcInJhdGVjaGFuZ2VcIixcclxuICAgICAgICBcInNlZWtlZFwiLFxyXG4gICAgICAgIFwic2Vla2luZ1wiLFxyXG4gICAgICAgIFwic3RhbGxlZFwiLFxyXG4gICAgICAgIFwidGltZXVwZGF0ZVwiLFxyXG4gICAgICAgIFwidm9sdW1lY2hhbmdlXCIsXHJcbiAgICAgICAgXCJ3YWl0aW5nXCJcclxuICAgIF07XHJcblxyXG4gICAgY29uc3RydWN0b3IodmlkZW9Db21wb25lbnQpe1xyXG4gICAgICAgIHRoaXMudmlkZW9Db21wb25lbnQgPSB2aWRlb0NvbXBvbmVudDtcclxuICAgIH1cclxuXHJcbiAgICBhdHRhY2hMaXN0ZW5lcnMoKXtcclxuICAgICAgICBsZXQgdmlkZW8gPSB0aGlzLnZpZGVvQ29tcG9uZW50Ll92aWRlbztcclxuICAgICAgICB2aWRlby5hZGRFdmVudExpc3RlbmVyKCBcImxvYWRlZG1ldGFkYXRhXCIsIHRoaXMudmlkZW9Db21wb25lbnQub25NZXRhRGF0YUxvYWRlZCApO1xyXG4gICAgICAgIHZpZGVvLmFkZEV2ZW50TGlzdGVuZXIoIFwidGltZXVwZGF0ZVwiLCB0aGlzLnZpZGVvQ29tcG9uZW50Lm9uVGltZVVwZGF0ZSApO1xyXG4gICAgICAgIHZpZGVvLmFkZEV2ZW50TGlzdGVuZXIoIFwicGxheVwiLCB0aGlzLnZpZGVvQ29tcG9uZW50Lm9uUGxheSApO1xyXG4gICAgICAgIHZpZGVvLmFkZEV2ZW50TGlzdGVuZXIoIFwicGF1c2VcIiwgdGhpcy52aWRlb0NvbXBvbmVudC5vblBhdXNlICk7XHJcbiAgICAgICAgdmlkZW8uYWRkRXZlbnRMaXN0ZW5lciggXCJ2b2x1bWVjaGFuZ2VcIiwgdGhpcy52aWRlb0NvbXBvbmVudC5vblZvbHVtZUNoYW5nZSApO1xyXG4gICAgfVxyXG5cclxuICAgIGRldGFjaExpc3RlbmVycygpe1xyXG4gICAgICAgIGxldCB2aWRlbyA9IHRoaXMudmlkZW9Db21wb25lbnQuX3ZpZGVvO1xyXG4gICAgICAgIHZpZGVvLnJlbW92ZUV2ZW50TGlzdGVuZXIoIFwibG9hZGVkbWV0YWRhdGFcIiwgdGhpcy52aWRlb0NvbXBvbmVudC5vbk1ldGFEYXRhTG9hZGVkICk7XHJcbiAgICAgICAgdmlkZW8ucmVtb3ZlRXZlbnRMaXN0ZW5lciggXCJ0aW1ldXBkYXRlXCIsIHRoaXMudmlkZW9Db21wb25lbnQub25UaW1lVXBkYXRlICk7XHJcbiAgICAgICAgdmlkZW8ucmVtb3ZlRXZlbnRMaXN0ZW5lciggXCJwbGF5XCIsIHRoaXMudmlkZW9Db21wb25lbnQub25QbGF5ICk7XHJcbiAgICAgICAgdmlkZW8ucmVtb3ZlRXZlbnRMaXN0ZW5lciggXCJwYXVzZVwiLCB0aGlzLnZpZGVvQ29tcG9uZW50Lm9uUGF1c2UgKTtcclxuICAgICAgICB2aWRlby5yZW1vdmVFdmVudExpc3RlbmVyKCBcInZvbHVtZWNoYW5nZVwiLCB0aGlzLnZpZGVvQ29tcG9uZW50Lm9uVm9sdW1lQ2hhbmdlICk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlTGlzdGVuZXJzKCl7XHJcbiAgICAgICAgdGhpcy5ldmVudExpc3RlbmVycyA9IFtdO1xyXG4gICAgICAgIHRoaXMuZXZlbnRzLm1hcCggZXZlbnROYW1lID0+IHtcclxuICAgICAgICAgICAgbGV0IGxpc3RlbmVyID0gZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYoIHR5cGVvZiB0aGlzLnZpZGVvQ29tcG9uZW50LnByb3BzW2V2ZW50TmFtZV0gPT0gXCJmdW5jdGlvblwiICl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52aWRlb0NvbXBvbmVudC5wcm9wc1tldmVudE5hbWVdKCBldmVudCApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMudmlkZW9Db21wb25lbnQuX3ZpZGVvLmFkZEV2ZW50TGlzdGVuZXIoIGV2ZW50TmFtZSwgbGlzdGVuZXIgKTtcclxuICAgICAgICAgICAgdGhpcy5ldmVudExpc3RlbmVycy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGV2ZW50OiBldmVudE5hbWUsXHJcbiAgICAgICAgICAgICAgICBsaXN0ZW5lclxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgcmVtb3ZlTGlzdGVuZXJzKCl7XHJcbiAgICAgICAgZm9yKCBsZXQgaSA9IDA7IGkgPCB0aGlzLmV2ZW50TGlzdGVuZXJzLmxlbmd0aDsgaSsrICl7XHJcbiAgICAgICAgICAgIHRoaXMudmlkZW9Db21wb25lbnQuX3ZpZGVvLnJlbW92ZUV2ZW50TGlzdGVuZXIodGhpcy5ldmVudExpc3RlbmVyc1tpXS5ldmVudCwgdGhpcy5ldmVudExpc3RlbmVyc1tpXS5saXN0ZW5lcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZXZlbnRMaXN0ZW5lcnMgPSBbXTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbGliL1ZpZGVvRXZlbnRIYW5kbGVyLmpzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vc3JjL2xpYi9WaWRlb0V2ZW50SGFuZGxlci5qcyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzISEuL3ZpZGVvLnNjc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzISEuL3ZpZGVvLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhIS4vdmlkZW8uc2Nzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc3R5bGUvdmlkZW8uc2Nzc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9zcmMvc3R5bGUvdmlkZW8uc2Nzcz8wNmY3IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIucmVhY3RWaWRlb1dyYXBwZXIge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgbGluZS1oZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiBibGFjaztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgbWF4LWhlaWdodDogMTAwJTtcXG4gIG91dGxpbmU6IG5vbmU7IH1cXG4gIC5yZWFjdFZpZGVvV3JhcHBlciAub3ZlcmxheUNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICB6LWluZGV4OiAyO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXM7XFxuICAgIG9wYWNpdHk6IDA7IH1cXG4gIC5yZWFjdFZpZGVvV3JhcHBlciB2aWRlbyB7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgbWF4LWhlaWdodDogMTAwJTtcXG4gICAgei1pbmRleDogMTsgfVxcbiAgICAucmVhY3RWaWRlb1dyYXBwZXIgdmlkZW86Oi13ZWJraXQtbWVkaWEtY29udHJvbHMge1xcbiAgICAgIHotaW5kZXg6IDI7IH1cXG4gIC5yZWFjdFZpZGVvV3JhcHBlciAuY29udHJvbHNXcmFwcGVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cztcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgei1pbmRleDogMjE0NzQ4MzY0NzsgfVxcbiAgICAucmVhY3RWaWRlb1dyYXBwZXIgLmNvbnRyb2xzV3JhcHBlciAuc2Vla0JhciAuYnVmZmVyIHtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgbGVmdDogMDtcXG4gICAgICB0b3A6IDA7XFxuICAgICAgcmlnaHQ6IDA7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgaGVpZ2h0OiA4cHg7XFxuICAgICAgei1pbmRleDogMTtcXG4gICAgICBtYXJnaW46IDA7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzY2NjsgfVxcbiAgICAucmVhY3RWaWRlb1dyYXBwZXIgLmNvbnRyb2xzV3JhcHBlciAuc2Vla0JhciAucHJvZ3Jlc3Mge1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICBsZWZ0OiAwO1xcbiAgICAgIHRvcDogMDtcXG4gICAgICByaWdodDogMDtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgICBoZWlnaHQ6IDhweDtcXG4gICAgICB6LWluZGV4OiAyO1xcbiAgICAgIG1hcmdpbjogMDtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICAgICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCA2cHggIzAwMDsgfVxcbiAgICAucmVhY3RWaWRlb1dyYXBwZXIgLmNvbnRyb2xzV3JhcHBlciAucGxheUJ1dHRvbiB7XFxuICAgICAgd2lkdGg6IDI0cHg7XFxuICAgICAgaGVpZ2h0OiAyNHB4O1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICBsZWZ0OiA1cHg7XFxuICAgICAgYm90dG9tOiA1cHg7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyOyB9XFxuICAgIC5yZWFjdFZpZGVvV3JhcHBlciAuY29udHJvbHNXcmFwcGVyIC5wYXVzZUJ1dHRvbiB7XFxuICAgICAgd2lkdGg6IDI0cHg7XFxuICAgICAgaGVpZ2h0OiAyNHB4O1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICBsZWZ0OiA1cHg7XFxuICAgICAgYm90dG9tOiA1cHg7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgIGRpc3BsYXk6IG5vbmU7IH1cXG4gICAgLnJlYWN0VmlkZW9XcmFwcGVyIC5jb250cm9sc1dyYXBwZXIgLm11dGVCdXR0b24ge1xcbiAgICAgIHdpZHRoOiAyNHB4O1xcbiAgICAgIGhlaWdodDogMjRweDtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgbGVmdDogMzRweDtcXG4gICAgICBib3R0b206IDVweDtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG4gICAgLnJlYWN0VmlkZW9XcmFwcGVyIC5jb250cm9sc1dyYXBwZXIgLnVubXV0ZUJ1dHRvbiB7XFxuICAgICAgd2lkdGg6IDI0cHg7XFxuICAgICAgaGVpZ2h0OiAyNHB4O1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICBsZWZ0OiAzNHB4O1xcbiAgICAgIGJvdHRvbTogNXB4O1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICBkaXNwbGF5OiBub25lOyB9XFxuICAgIC5yZWFjdFZpZGVvV3JhcHBlciAuY29udHJvbHNXcmFwcGVyIC52b2x1bWVCYXIge1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICB3aWR0aDogMTAwcHg7XFxuICAgICAgaGVpZ2h0OiA1cHg7XFxuICAgICAgYm90dG9tOiAxNHB4O1xcbiAgICAgIGxlZnQ6IDY1cHg7XFxuICAgICAgYmFja2dyb3VuZDogYmxhY2s7IH1cXG4gICAgLnJlYWN0VmlkZW9XcmFwcGVyIC5jb250cm9sc1dyYXBwZXIgLnZvbHVtZSB7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIGxlZnQ6IDA7XFxuICAgICAgdG9wOiAwO1xcbiAgICAgIHJpZ2h0OiAwO1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIGhlaWdodDogNXB4O1xcbiAgICAgIG1hcmdpbjogMDtcXG4gICAgICBwYWRkaW5nOiAwO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gICAgICBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDNweCAjNDQ0OyB9XFxuICAgICAgLnJlYWN0VmlkZW9XcmFwcGVyIC5jb250cm9sc1dyYXBwZXIgLnZvbHVtZTo6LW1zLWZpbGwtbG93ZXIge1xcbiAgICAgICAgYmFja2dyb3VuZDogIzIyMjsgfVxcbiAgICAgIC5yZWFjdFZpZGVvV3JhcHBlciAuY29udHJvbHNXcmFwcGVyIC52b2x1bWU6Oi1tcy1maWxsLXVwcGVyIHtcXG4gICAgICAgIGJhY2tncm91bmQ6ICNFRUU7IH1cXG4gICAgLnJlYWN0VmlkZW9XcmFwcGVyIC5jb250cm9sc1dyYXBwZXIgLnRpbWUge1xcbiAgICAgIHdpZHRoOiAxMDBweDtcXG4gICAgICBoZWlnaHQ6IDI0cHg7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIHJpZ2h0OiAzNXB4O1xcbiAgICAgIHRvcDogOHB4O1xcbiAgICAgIGJvdHRvbTogMHB4O1xcbiAgICAgIGZvbnQtZmFtaWx5OiBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBcXFwiU2Vnb2UgVUlcXFwiLCBhcmlhbCwgc2Fucy1zZXJpZjtcXG4gICAgICBmb250LXNpemU6IDE0cHg7XFxuICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XFxuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7IH1cXG4gICAgLnJlYWN0VmlkZW9XcmFwcGVyIC5jb250cm9sc1dyYXBwZXIgLmZ1bGxzY3JlZW5CdXR0b24ge1xcbiAgICAgIHdpZHRoOiAyNHB4O1xcbiAgICAgIGhlaWdodDogMjRweDtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgcmlnaHQ6IDVweDtcXG4gICAgICBib3R0b206IDVweDtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG4gICAgLnJlYWN0VmlkZW9XcmFwcGVyIC5jb250cm9sc1dyYXBwZXIgLmRlZmF1bHRzY3JlZW5CdXR0b24ge1xcbiAgICAgIHdpZHRoOiAyNHB4O1xcbiAgICAgIGhlaWdodDogMjRweDtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgcmlnaHQ6IDVweDtcXG4gICAgICBib3R0b206IDVweDtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgZGlzcGxheTogbm9uZTsgfVxcbiAgLnJlYWN0VmlkZW9XcmFwcGVyIGlucHV0W3R5cGU9cmFuZ2VdIHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lOyB9XFxuICAgIC5yZWFjdFZpZGVvV3JhcHBlciBpbnB1dFt0eXBlPXJhbmdlXTpmb2N1cyB7XFxuICAgICAgb3V0bGluZTogbm9uZTsgfVxcbiAgICAucmVhY3RWaWRlb1dyYXBwZXIgaW5wdXRbdHlwZT1yYW5nZV06Oi13ZWJraXQtc2xpZGVyLXJ1bm5hYmxlLXRyYWNrIHtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlOyB9XFxuICAgIC5yZWFjdFZpZGVvV3JhcHBlciBpbnB1dFt0eXBlPXJhbmdlXTo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xcbiAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgICBoZWlnaHQ6IDVweDtcXG4gICAgICB3aWR0aDogMHB4O1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcXG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG4gICAgLnJlYWN0VmlkZW9XcmFwcGVyIGlucHV0W3R5cGU9cmFuZ2VdOjotbW96LXJhbmdlLXRyYWNrIHtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlO1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIGhlaWdodDogOHB4O1xcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50OyB9XFxuICAgIC5yZWFjdFZpZGVvV3JhcHBlciBpbnB1dFt0eXBlPXJhbmdlXTo6LW1vei1yYW5nZS10aHVtYiB7XFxuICAgICAgaGVpZ2h0OiA1cHg7XFxuICAgICAgd2lkdGg6IDBweDtcXG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7IH1cXG4gICAgLnJlYWN0VmlkZW9XcmFwcGVyIGlucHV0W3R5cGU9cmFuZ2VdOjotbXMtdHJhY2sge1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2U7XFxuICAgICAgY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIGhlaWdodDogOHB4O1xcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50OyB9XFxuICAgIC5yZWFjdFZpZGVvV3JhcHBlciBpbnB1dFt0eXBlPXJhbmdlXTo6LW1zLXRodW1iIHtcXG4gICAgICBoZWlnaHQ6IDVweDtcXG4gICAgICB3aWR0aDogMHB4O1xcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vfi9zYXNzLWxvYWRlciEuL3NyYy9zdHlsZS92aWRlby5zY3NzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL3NyYy9zdHlsZS92aWRlby5zY3NzIiwiLypcclxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxyXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcclxuKi9cclxuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcclxuXHR2YXIgbGlzdCA9IFtdO1xyXG5cclxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXHJcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xyXG5cdFx0dmFyIHJlc3VsdCA9IFtdO1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSB0aGlzW2ldO1xyXG5cdFx0XHRpZihpdGVtWzJdKSB7XHJcblx0XHRcdFx0cmVzdWx0LnB1c2goXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBpdGVtWzFdICsgXCJ9XCIpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKGl0ZW1bMV0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmVzdWx0LmpvaW4oXCJcIik7XHJcblx0fTtcclxuXHJcblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcclxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XHJcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcclxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xyXG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XHJcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcclxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XHJcblx0XHR9XHJcblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcclxuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxyXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xyXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxyXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxyXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xyXG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcclxuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xyXG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XHJcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcblx0cmV0dXJuIGxpc3Q7XHJcbn07XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwiLypcclxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxyXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcclxuKi9cclxudmFyIHN0eWxlc0luRG9tID0ge30sXHJcblx0bWVtb2l6ZSA9IGZ1bmN0aW9uKGZuKSB7XHJcblx0XHR2YXIgbWVtbztcclxuXHRcdHJldHVybiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcblx0XHRcdHJldHVybiBtZW1vO1xyXG5cdFx0fTtcclxuXHR9LFxyXG5cdGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIC9tc2llIFs2LTldXFxiLy50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkpO1xyXG5cdH0pLFxyXG5cdGdldEhlYWRFbGVtZW50ID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XHJcblx0XHRyZXR1cm4gZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF07XHJcblx0fSksXHJcblx0c2luZ2xldG9uRWxlbWVudCA9IG51bGwsXHJcblx0c2luZ2xldG9uQ291bnRlciA9IDAsXHJcblx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AgPSBbXTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xyXG5cdGlmKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xyXG5cdFx0aWYodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XHJcblx0fVxyXG5cclxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cclxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXHJcblx0aWYgKHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiA9PT0gXCJ1bmRlZmluZWRcIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XHJcblxyXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiA8aGVhZD4uXHJcblx0aWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcInVuZGVmaW5lZFwiKSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcclxuXHJcblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0KTtcclxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xyXG5cclxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcclxuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XHJcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xyXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XHJcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcclxuXHRcdH1cclxuXHRcdGlmKG5ld0xpc3QpIHtcclxuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0KTtcclxuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcclxuXHRcdH1cclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xyXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XHJcblx0XHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKVxyXG5cdFx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oKTtcclxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKSB7XHJcblx0Zm9yKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XHJcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcclxuXHRcdGlmKGRvbVN0eWxlKSB7XHJcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcclxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XHJcblx0XHRcdH1cclxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dmFyIHBhcnRzID0gW107XHJcblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XHJcblx0XHRcdH1cclxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMobGlzdCkge1xyXG5cdHZhciBzdHlsZXMgPSBbXTtcclxuXHR2YXIgbmV3U3R5bGVzID0ge307XHJcblx0Zm9yKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcclxuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcclxuXHRcdHZhciBpZCA9IGl0ZW1bMF07XHJcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcclxuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XHJcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcclxuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcclxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKVxyXG5cdFx0XHRzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XHJcblx0fVxyXG5cdHJldHVybiBzdHlsZXM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZUVsZW1lbnQpIHtcclxuXHR2YXIgaGVhZCA9IGdldEhlYWRFbGVtZW50KCk7XHJcblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3Bbc3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XHJcblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcclxuXHRcdGlmKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xyXG5cdFx0XHRoZWFkLmluc2VydEJlZm9yZShzdHlsZUVsZW1lbnQsIGhlYWQuZmlyc3RDaGlsZCk7XHJcblx0XHR9IGVsc2UgaWYobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcclxuXHRcdFx0aGVhZC5pbnNlcnRCZWZvcmUoc3R5bGVFbGVtZW50LCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudCk7XHJcblx0XHR9XHJcblx0XHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlRWxlbWVudCk7XHJcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XHJcblx0XHRoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudCk7XHJcblx0fSBlbHNlIHtcclxuXHRcdHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnLiBNdXN0IGJlICd0b3AnIG9yICdib3R0b20nLlwiKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcclxuXHRzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xyXG5cdHZhciBpZHggPSBzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlRWxlbWVudCk7XHJcblx0aWYoaWR4ID49IDApIHtcclxuXHRcdHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcclxuXHR2YXIgc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xyXG5cdHN0eWxlRWxlbWVudC50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xyXG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZUVsZW1lbnQpO1xyXG5cdHJldHVybiBzdHlsZUVsZW1lbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpIHtcclxuXHR2YXIgbGlua0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcclxuXHRsaW5rRWxlbWVudC5yZWwgPSBcInN0eWxlc2hlZXRcIjtcclxuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGlua0VsZW1lbnQpO1xyXG5cdHJldHVybiBsaW5rRWxlbWVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XHJcblx0dmFyIHN0eWxlRWxlbWVudCwgdXBkYXRlLCByZW1vdmU7XHJcblxyXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xyXG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XHJcblx0XHRzdHlsZUVsZW1lbnQgPSBzaW5nbGV0b25FbGVtZW50IHx8IChzaW5nbGV0b25FbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcclxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIGZhbHNlKTtcclxuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIHRydWUpO1xyXG5cdH0gZWxzZSBpZihvYmouc291cmNlTWFwICYmXHJcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcclxuXHRcdHN0eWxlRWxlbWVudCA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xyXG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCk7XHJcblx0XHRyZW1vdmUgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XHJcblx0XHRcdGlmKHN0eWxlRWxlbWVudC5ocmVmKVxyXG5cdFx0XHRcdFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGVFbGVtZW50LmhyZWYpO1xyXG5cdFx0fTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0c3R5bGVFbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xyXG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCk7XHJcblx0XHRyZW1vdmUgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XHJcblx0XHR9O1xyXG5cdH1cclxuXHJcblx0dXBkYXRlKG9iaik7XHJcblxyXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcclxuXHRcdGlmKG5ld09iaikge1xyXG5cdFx0XHRpZihuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApXHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJlbW92ZSgpO1xyXG5cdFx0fVxyXG5cdH07XHJcbn1cclxuXHJcbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XHJcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xyXG5cclxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xyXG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xyXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XHJcblx0fTtcclxufSkoKTtcclxuXHJcbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGVFbGVtZW50LCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcclxuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XHJcblxyXG5cdGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xyXG5cdFx0c3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XHJcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlRWxlbWVudC5jaGlsZE5vZGVzO1xyXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xyXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XHJcblx0XHRcdHN0eWxlRWxlbWVudC5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0c3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGNzc05vZGUpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZUVsZW1lbnQsIG9iaikge1xyXG5cdHZhciBjc3MgPSBvYmouY3NzO1xyXG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcclxuXHJcblx0aWYobWVkaWEpIHtcclxuXHRcdHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcclxuXHR9XHJcblxyXG5cdGlmKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XHJcblx0XHRzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xyXG5cdH0gZWxzZSB7XHJcblx0XHR3aGlsZShzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xyXG5cdFx0XHRzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xyXG5cdFx0fVxyXG5cdFx0c3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlTGluayhsaW5rRWxlbWVudCwgb2JqKSB7XHJcblx0dmFyIGNzcyA9IG9iai5jc3M7XHJcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XHJcblxyXG5cdGlmKHNvdXJjZU1hcCkge1xyXG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcclxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcclxuXHR9XHJcblxyXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xyXG5cclxuXHR2YXIgb2xkU3JjID0gbGlua0VsZW1lbnQuaHJlZjtcclxuXHJcblx0bGlua0VsZW1lbnQuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XHJcblxyXG5cdGlmKG9sZFNyYylcclxuXHRcdFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanMiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBWaWRlb1V0aWxze1xyXG4gICAgY29uc3RydWN0b3IodmlkZW9Db21wb25lbnQpe1xyXG4gICAgICAgIHRoaXMudmlkZW9Db21wb25lbnQgPSB2aWRlb0NvbXBvbmVudDtcclxuICAgIH1cclxuXHJcbiAgICBmb3JtYXRUaW1lRnJvbVNlY29uZHMoc2Vjb25kcyl7XHJcbiAgICAgICAgc2Vjb25kcyA9IHBhcnNlSW50KHNlY29uZHMpO1xyXG4gICAgICAgIGxldCBob3VycyA9IHBhcnNlSW50KHNlY29uZHMgLyAzNjAwKTtcclxuICAgICAgICBzZWNvbmRzIC09IGhvdXJzKjM2MDA7XHJcbiAgICAgICAgbGV0IG1pbnV0ZXMgPSBwYXJzZUludChzZWNvbmRzIC8gNjApO1xyXG4gICAgICAgIHNlY29uZHMgLT0gbWludXRlcyo2MDtcclxuICAgICAgICBsZXQgdGltZSA9IGAke2hvdXJzID4gOSA/IGhvdXJzIDogKFwiMFwiICsgaG91cnMpfToke21pbnV0ZXMgPiA5ID8gbWludXRlcyA6IChcIjBcIiArIG1pbnV0ZXMpIH06JHtzZWNvbmRzID4gOSA/IHNlY29uZHMgOiAoXCIwXCIgKyBzZWNvbmRzKX1gO1xyXG4gICAgICAgIHJldHVybiB0aW1lO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbGN1bGF0ZVBlcmNlbnRhZ2UoZnJhY3Rpb24sIHRvdGFsKXtcclxuICAgICAgICBsZXQgcGVyY2VudGFnZSA9IHBhcnNlSW50KGZyYWN0aW9uL3RvdGFsKjEwMCoxMDApLzEwMDsgLy8gaW4gb3JkZXIgdG8gYXBwcm94aW1hdGUgdG8gMiBkaWdpdHNcclxuICAgICAgICByZXR1cm4gcGVyY2VudGFnZTtcclxuICAgIH1cclxuXHJcbiAgICBpc0lFKCl7XHJcbiAgICAgICAgbGV0IFVBID0gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQ7XHJcbiAgICAgICAgaWYoIFVBLm1hdGNoKCAvTVNJRS9pICkgfHwgVUEubWF0Y2goIC9FZGdlL2kgKSB8fCBVQS5tYXRjaCggL1RyaWRlbnRcXC8vaSApIClcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGRpc2FibGVDb250cm9scygpe1xyXG4gICAgICAgIHRoaXMudmlkZW9Db21wb25lbnQuX2NvbnRyb2xzV3JhcHBlci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICB9XHJcblxyXG4gICAgZW5hYmxlQ29udHJvbHMoKXtcclxuICAgICAgICBpZiggdGhpcy52aWRlb0NvbXBvbmVudC5wcm9wcy5hdHRyaWJ1dGVzLmNvbnRyb2xzIClcclxuICAgICAgICAgICAgdGhpcy52aWRlb0NvbXBvbmVudC5fY29udHJvbHNXcmFwcGVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICBpZiggdGhpcy52aWRlb0NvbXBvbmVudC5wcm9wcy5jb250cm9scyApXHJcbiAgICAgICAgICAgIHRoaXMudmlkZW9Db21wb25lbnQuX2NvbnRyb2xzV3JhcHBlci5zdHlsZS5vcGFjaXR5ID0gXCIxXCI7XHJcbiAgICB9XHJcblxyXG4gICAgbW92ZU92ZXJsYXkoKXtcclxuICAgICAgICB0aGlzLnZpZGVvQ29tcG9uZW50Ll9vdmVybGF5LnN0eWxlLmJvdHRvbSA9IFwiNjVweFwiO1xyXG4gICAgfVxyXG5cclxuICAgIGVuYWJsZU92ZXJsYXkoKXtcclxuICAgICAgICBpZiggdGhpcy52aWRlb0NvbXBvbmVudC5wcm9wcy5vdmVybGF5IClcclxuICAgICAgICAgICAgdGhpcy52aWRlb0NvbXBvbmVudC5fb3ZlcmxheS5zdHlsZS5vcGFjaXR5ID0gXCIxXCI7XHJcbiAgICB9XHJcblxyXG4gICAgY2FsY3VsYXRlQnVmZmVyKCl7XHJcbiAgICAgICAgaWYoICF0aGlzLnZpZGVvQ29tcG9uZW50Ll92aWRlbyApXHJcbiAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgIGlmKCAhdGhpcy5sYXN0QnVmZmVyZWQgKVxyXG4gICAgICAgICAgICB0aGlzLmxhc3RCdWZmZXJlZCA9IDA7XHJcbiAgICAgICAgaWYoIHRoaXMudmlkZW9Db21wb25lbnQuX3ZpZGVvLmJ1ZmZlcmVkLmxlbmd0aCA8IDEgKVxyXG4gICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICBsZXQgYnVmZmVyZWQgPSB0aGlzLnZpZGVvQ29tcG9uZW50Ll92aWRlby5idWZmZXJlZC5lbmQodGhpcy52aWRlb0NvbXBvbmVudC5fdmlkZW8uYnVmZmVyZWQubGVuZ3RoLTEpO1xyXG4gICAgICAgIGlmKCAhdGhpcy52aWRlb0NvbXBvbmVudC5fdmlkZW8uZHVyYXRpb24gKVxyXG4gICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICB0aGlzLmxhc3RCdWZmZXJlZCA9IGJ1ZmZlcmVkO1xyXG4gICAgICAgIGxldCB7ZHVyYXRpb259ID0gdGhpcy52aWRlb0NvbXBvbmVudC5fdmlkZW87XHJcbiAgICAgICAgbGV0IHBlcmNlbnRhZ2UgPSBwYXJzZUludCggYnVmZmVyZWQgLyBkdXJhdGlvbiAqIDEwMCApO1xyXG4gICAgICAgIHJldHVybiBwZXJjZW50YWdlO1xyXG4gICAgfVxyXG5cclxuICAgIGlzRnVsbHNjcmVlbigpe1xyXG4gICAgICAgIGxldCBpc0Z1bGxzY3JlZW4gPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgaWYoIGRvY3VtZW50LndlYmtpdElzRnVsbFNjcmVlbiAhPT0gdW5kZWZpbmVkICl7XHJcbiAgICAgICAgICAgIGlzRnVsbHNjcmVlbiA9IGRvY3VtZW50LndlYmtpdElzRnVsbFNjcmVlbjtcclxuICAgICAgICB9ZWxzZSBpZiggZG9jdW1lbnQuZnVsbHNjcmVlbkVsZW1lbnQgIT09IHVuZGVmaW5lZCApe1xyXG4gICAgICAgICAgICBpc0Z1bGxzY3JlZW4gPSBkb2N1bWVudC5mdWxsc2NyZWVuRWxlbWVudCAhPT0gbnVsbDtcclxuICAgICAgICB9ZWxzZSBpZiggZG9jdW1lbnQubXNGdWxsc2NyZWVuRWxlbWVudCAhPT0gdW5kZWZpbmVkICl7XHJcbiAgICAgICAgICAgIGlzRnVsbHNjcmVlbiA9IGRvY3VtZW50Lm1zRnVsbHNjcmVlbkVsZW1lbnQgIT09IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBpc0Z1bGxzY3JlZW47XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2xpYi9WaWRlb1V0aWxzLmpzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vc3JjL2xpYi9WaWRlb1V0aWxzLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUpIHtcblx0aWYoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcblx0XHRtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcblx0fVxuXHRyZXR1cm4gbW9kdWxlO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=