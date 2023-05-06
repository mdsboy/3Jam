/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + chunkId + ".index.js"
/******/ 	}
/******/
/******/ 	// object to store loaded and loading wasm modules
/******/ 	var installedWasmModules = {};
/******/
/******/ 	function promiseResolve() { return Promise.resolve(); }
/******/
/******/ 	var wasmImportObjects = {
/******/ 		"./pkg/canvas_bg.wasm": function() {
/******/ 			return {
/******/ 				"./canvas_bg.js": {
/******/ 					"__wbindgen_string_new": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/canvas_bg.js"].exports["__wbindgen_string_new"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_string_get": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/canvas_bg.js"].exports["__wbindgen_string_get"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_object_clone_ref": function(p0i32) {
/******/ 						return installedModules["./pkg/canvas_bg.js"].exports["__wbindgen_object_clone_ref"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_cb_drop": function(p0i32) {
/******/ 						return installedModules["./pkg/canvas_bg.js"].exports["__wbindgen_cb_drop"](p0i32);
/******/ 					},
/******/ 					"__wbg_instanceof_Window_e266f02eee43b570": function(p0i32) {
/******/ 						return installedModules["./pkg/canvas_bg.js"].exports["__wbg_instanceof_Window_e266f02eee43b570"](p0i32);
/******/ 					},
/******/ 					"__wbg_document_950215a728589a2d": function(p0i32) {
/******/ 						return installedModules["./pkg/canvas_bg.js"].exports["__wbg_document_950215a728589a2d"](p0i32);
/******/ 					},
/******/ 					"__wbg_location_797a1856892cc2de": function(p0i32) {
/******/ 						return installedModules["./pkg/canvas_bg.js"].exports["__wbg_location_797a1856892cc2de"](p0i32);
/******/ 					},
/******/ 					"__wbg_requestAnimationFrame_afe426b568f84138": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/canvas_bg.js"].exports["__wbg_requestAnimationFrame_afe426b568f84138"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_getElementById_eb93a47327bb5585": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/canvas_bg.js"].exports["__wbg_getElementById_eb93a47327bb5585"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_instanceof_HtmlCanvasElement_f5f69dab93281ebe": function(p0i32) {
/******/ 						return installedModules["./pkg/canvas_bg.js"].exports["__wbg_instanceof_HtmlCanvasElement_f5f69dab93281ebe"](p0i32);
/******/ 					},
/******/ 					"__wbg_width_a40e21a22129b197": function(p0i32) {
/******/ 						return installedModules["./pkg/canvas_bg.js"].exports["__wbg_width_a40e21a22129b197"](p0i32);
/******/ 					},
/******/ 					"__wbg_height_98d51321254345a5": function(p0i32) {
/******/ 						return installedModules["./pkg/canvas_bg.js"].exports["__wbg_height_98d51321254345a5"](p0i32);
/******/ 					},
/******/ 					"__wbg_getContext_3ae404b649cf9287": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/canvas_bg.js"].exports["__wbg_getContext_3ae404b649cf9287"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_addEventListener_615d4590d38da1c9": function(p0i32,p1i32,p2i32,p3i32) {
/******/ 						return installedModules["./pkg/canvas_bg.js"].exports["__wbg_addEventListener_615d4590d38da1c9"](p0i32,p1i32,p2i32,p3i32);
/******/ 					},
/******/ 					"__wbg_instanceof_CanvasRenderingContext2d_3e95629461ed9f67": function(p0i32) {
/******/ 						return installedModules["./pkg/canvas_bg.js"].exports["__wbg_instanceof_CanvasRenderingContext2d_3e95629461ed9f67"](p0i32);
/******/ 					},
/******/ 					"__wbg_setstrokeStyle_073fc10b086c1727": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/canvas_bg.js"].exports["__wbg_setstrokeStyle_073fc10b086c1727"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_setfillStyle_b065cfad34a78974": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/canvas_bg.js"].exports["__wbg_setfillStyle_b065cfad34a78974"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_setlineWidth_2b5a5da5c4bf4084": function(p0i32,p1f64) {
/******/ 						return installedModules["./pkg/canvas_bg.js"].exports["__wbg_setlineWidth_2b5a5da5c4bf4084"](p0i32,p1f64);
/******/ 					},
/******/ 					"__wbg_setfont_5ff88bdcda655052": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/canvas_bg.js"].exports["__wbg_setfont_5ff88bdcda655052"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_beginPath_0948db80d0d23ce3": function(p0i32) {
/******/ 						return installedModules["./pkg/canvas_bg.js"].exports["__wbg_beginPath_0948db80d0d23ce3"](p0i32);
/******/ 					},
/******/ 					"__wbg_fill_ae4121c3dafa1f99": function(p0i32) {
/******/ 						return installedModules["./pkg/canvas_bg.js"].exports["__wbg_fill_ae4121c3dafa1f99"](p0i32);
/******/ 					},
/******/ 					"__wbg_clearRect_92c5351269c74162": function(p0i32,p1f64,p2f64,p3f64,p4f64) {
/******/ 						return installedModules["./pkg/canvas_bg.js"].exports["__wbg_clearRect_92c5351269c74162"](p0i32,p1f64,p2f64,p3f64,p4f64);
/******/ 					},
/******/ 					"__wbg_fillRect_f63ba845233f000a": function(p0i32,p1f64,p2f64,p3f64,p4f64) {
/******/ 						return installedModules["./pkg/canvas_bg.js"].exports["__wbg_fillRect_f63ba845233f000a"](p0i32,p1f64,p2f64,p3f64,p4f64);
/******/ 					},
/******/ 					"__wbg_strokeRect_14f754be4f02dbc0": function(p0i32,p1f64,p2f64,p3f64,p4f64) {
/******/ 						return installedModules["./pkg/canvas_bg.js"].exports["__wbg_strokeRect_14f754be4f02dbc0"](p0i32,p1f64,p2f64,p3f64,p4f64);
/******/ 					},
/******/ 					"__wbg_fillText_1c8a94ba170ba3ee": function(p0i32,p1i32,p2i32,p3f64,p4f64) {
/******/ 						return installedModules["./pkg/canvas_bg.js"].exports["__wbg_fillText_1c8a94ba170ba3ee"](p0i32,p1i32,p2i32,p3f64,p4f64);
/******/ 					},
/******/ 					"__wbg_offsetX_413d9f02022e72ad": function(p0i32) {
/******/ 						return installedModules["./pkg/canvas_bg.js"].exports["__wbg_offsetX_413d9f02022e72ad"](p0i32);
/******/ 					},
/******/ 					"__wbg_offsetY_488f80a0a9666028": function(p0i32) {
/******/ 						return installedModules["./pkg/canvas_bg.js"].exports["__wbg_offsetY_488f80a0a9666028"](p0i32);
/******/ 					},
/******/ 					"__wbg_button_a1c470d5e4c997f2": function(p0i32) {
/******/ 						return installedModules["./pkg/canvas_bg.js"].exports["__wbg_button_a1c470d5e4c997f2"](p0i32);
/******/ 					},
/******/ 					"__wbg_code_aed21120de275a12": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/canvas_bg.js"].exports["__wbg_code_aed21120de275a12"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_sethref_675f1bb8d21a728f": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/canvas_bg.js"].exports["__wbg_sethref_675f1bb8d21a728f"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_defaultPrevented_8ee024c3db44137d": function(p0i32) {
/******/ 						return installedModules["./pkg/canvas_bg.js"].exports["__wbg_defaultPrevented_8ee024c3db44137d"](p0i32);
/******/ 					},
/******/ 					"__wbg_preventDefault_16b2170b12f56317": function(p0i32) {
/******/ 						return installedModules["./pkg/canvas_bg.js"].exports["__wbg_preventDefault_16b2170b12f56317"](p0i32);
/******/ 					},
/******/ 					"__wbg_encodeURIComponent_7fd30c31cf1bef9b": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/canvas_bg.js"].exports["__wbg_encodeURIComponent_7fd30c31cf1bef9b"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_newnoargs_2b8b6bd7753c76ba": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/canvas_bg.js"].exports["__wbg_newnoargs_2b8b6bd7753c76ba"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_call_95d1ea488d03e4e8": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/canvas_bg.js"].exports["__wbg_call_95d1ea488d03e4e8"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_globalThis_87cbb8506fecf3a9": function() {
/******/ 						return installedModules["./pkg/canvas_bg.js"].exports["__wbg_globalThis_87cbb8506fecf3a9"]();
/******/ 					},
/******/ 					"__wbg_self_e7c1f827057f6584": function() {
/******/ 						return installedModules["./pkg/canvas_bg.js"].exports["__wbg_self_e7c1f827057f6584"]();
/******/ 					},
/******/ 					"__wbg_window_a09ec664e14b1b81": function() {
/******/ 						return installedModules["./pkg/canvas_bg.js"].exports["__wbg_window_a09ec664e14b1b81"]();
/******/ 					},
/******/ 					"__wbg_global_c85a9259e621f3db": function() {
/******/ 						return installedModules["./pkg/canvas_bg.js"].exports["__wbg_global_c85a9259e621f3db"]();
/******/ 					},
/******/ 					"__wbg_random_afb3265527cf67c8": function() {
/******/ 						return installedModules["./pkg/canvas_bg.js"].exports["__wbg_random_afb3265527cf67c8"]();
/******/ 					},
/******/ 					"__wbindgen_is_undefined": function(p0i32) {
/******/ 						return installedModules["./pkg/canvas_bg.js"].exports["__wbindgen_is_undefined"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_object_drop_ref": function(p0i32) {
/******/ 						return installedModules["./pkg/canvas_bg.js"].exports["__wbindgen_object_drop_ref"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_debug_string": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/canvas_bg.js"].exports["__wbindgen_debug_string"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_throw": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/canvas_bg.js"].exports["__wbindgen_throw"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_rethrow": function(p0i32) {
/******/ 						return installedModules["./pkg/canvas_bg.js"].exports["__wbindgen_rethrow"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_closure_wrapper193": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/canvas_bg.js"].exports["__wbindgen_closure_wrapper193"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbindgen_closure_wrapper195": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/canvas_bg.js"].exports["__wbindgen_closure_wrapper195"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbindgen_closure_wrapper197": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/canvas_bg.js"].exports["__wbindgen_closure_wrapper197"](p0i32,p1i32,p2i32);
/******/ 					}
/******/ 				}
/******/ 			};
/******/ 		},
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/
/******/ 		// Fetch + compile chunk loading for webassembly
/******/
/******/ 		var wasmModules = {"1":["./pkg/canvas_bg.wasm"]}[chunkId] || [];
/******/
/******/ 		wasmModules.forEach(function(wasmModuleId) {
/******/ 			var installedWasmModuleData = installedWasmModules[wasmModuleId];
/******/
/******/ 			// a Promise means "currently loading" or "already loaded".
/******/ 			if(installedWasmModuleData)
/******/ 				promises.push(installedWasmModuleData);
/******/ 			else {
/******/ 				var importObject = wasmImportObjects[wasmModuleId]();
/******/ 				var req = fetch(__webpack_require__.p + "" + {"./pkg/canvas_bg.wasm":"e7b8547e611074f4a5c7"}[wasmModuleId] + ".module.wasm");
/******/ 				var promise;
/******/ 				if(importObject instanceof Promise && typeof WebAssembly.compileStreaming === 'function') {
/******/ 					promise = Promise.all([WebAssembly.compileStreaming(req), importObject]).then(function(items) {
/******/ 						return WebAssembly.instantiate(items[0], items[1]);
/******/ 					});
/******/ 				} else if(typeof WebAssembly.instantiateStreaming === 'function') {
/******/ 					promise = WebAssembly.instantiateStreaming(req, importObject);
/******/ 				} else {
/******/ 					var bytesPromise = req.then(function(x) { return x.arrayBuffer(); });
/******/ 					promise = bytesPromise.then(function(bytes) {
/******/ 						return WebAssembly.instantiate(bytes, importObject);
/******/ 					});
/******/ 				}
/******/ 				promises.push(installedWasmModules[wasmModuleId] = promise.then(function(res) {
/******/ 					return __webpack_require__.w[wasmModuleId] = (res.instance || res).exports;
/******/ 				}));
/******/ 			}
/******/ 		});
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// object with all WebAssembly.instance exports
/******/ 	__webpack_require__.w = {};
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// For more comments about what's going on here, check out the `hello_world`\n// example.\nPromise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.bind(null, /*! ./pkg/canvas */ \"./pkg/canvas.js\")).catch(console.error)\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

/******/ });