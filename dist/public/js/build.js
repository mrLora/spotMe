/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/axios/index.js":
/*!*************************************!*\
  !*** ./node_modules/axios/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./lib/axios */ \"./node_modules/axios/lib/axios.js\");\n\n//# sourceURL=webpack:///./node_modules/axios/index.js?");

/***/ }),

/***/ "./node_modules/axios/lib/adapters/xhr.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/adapters/xhr.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./../utils */ \"./node_modules/axios/lib/utils.js\");\nvar settle = __webpack_require__(/*! ./../core/settle */ \"./node_modules/axios/lib/core/settle.js\");\nvar buildURL = __webpack_require__(/*! ./../helpers/buildURL */ \"./node_modules/axios/lib/helpers/buildURL.js\");\nvar parseHeaders = __webpack_require__(/*! ./../helpers/parseHeaders */ \"./node_modules/axios/lib/helpers/parseHeaders.js\");\nvar isURLSameOrigin = __webpack_require__(/*! ./../helpers/isURLSameOrigin */ \"./node_modules/axios/lib/helpers/isURLSameOrigin.js\");\nvar createError = __webpack_require__(/*! ../core/createError */ \"./node_modules/axios/lib/core/createError.js\");\nvar btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__(/*! ./../helpers/btoa */ \"./node_modules/axios/lib/helpers/btoa.js\");\n\nmodule.exports = function xhrAdapter(config) {\n  return new Promise(function dispatchXhrRequest(resolve, reject) {\n    var requestData = config.data;\n    var requestHeaders = config.headers;\n\n    if (utils.isFormData(requestData)) {\n      delete requestHeaders['Content-Type']; // Let the browser set it\n    }\n\n    var request = new XMLHttpRequest();\n    var loadEvent = 'onreadystatechange';\n    var xDomain = false;\n\n    // For IE 8/9 CORS support\n    // Only supports POST and GET calls and doesn't returns the response headers.\n    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.\n    if ( true &&\n        typeof window !== 'undefined' &&\n        window.XDomainRequest && !('withCredentials' in request) &&\n        !isURLSameOrigin(config.url)) {\n      request = new window.XDomainRequest();\n      loadEvent = 'onload';\n      xDomain = true;\n      request.onprogress = function handleProgress() {};\n      request.ontimeout = function handleTimeout() {};\n    }\n\n    // HTTP basic authentication\n    if (config.auth) {\n      var username = config.auth.username || '';\n      var password = config.auth.password || '';\n      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);\n    }\n\n    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);\n\n    // Set the request timeout in MS\n    request.timeout = config.timeout;\n\n    // Listen for ready state\n    request[loadEvent] = function handleLoad() {\n      if (!request || (request.readyState !== 4 && !xDomain)) {\n        return;\n      }\n\n      // The request errored out and we didn't get a response, this will be\n      // handled by onerror instead\n      // With one exception: request that using file: protocol, most browsers\n      // will return status as 0 even though it's a successful request\n      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {\n        return;\n      }\n\n      // Prepare the response\n      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;\n      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;\n      var response = {\n        data: responseData,\n        // IE sends 1223 instead of 204 (https://github.com/axios/axios/issues/201)\n        status: request.status === 1223 ? 204 : request.status,\n        statusText: request.status === 1223 ? 'No Content' : request.statusText,\n        headers: responseHeaders,\n        config: config,\n        request: request\n      };\n\n      settle(resolve, reject, response);\n\n      // Clean up request\n      request = null;\n    };\n\n    // Handle low level network errors\n    request.onerror = function handleError() {\n      // Real errors are hidden from us by the browser\n      // onerror should only fire if it's a network error\n      reject(createError('Network Error', config, null, request));\n\n      // Clean up request\n      request = null;\n    };\n\n    // Handle timeout\n    request.ontimeout = function handleTimeout() {\n      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',\n        request));\n\n      // Clean up request\n      request = null;\n    };\n\n    // Add xsrf header\n    // This is only done if running in a standard browser environment.\n    // Specifically not if we're in a web worker, or react-native.\n    if (utils.isStandardBrowserEnv()) {\n      var cookies = __webpack_require__(/*! ./../helpers/cookies */ \"./node_modules/axios/lib/helpers/cookies.js\");\n\n      // Add xsrf header\n      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?\n          cookies.read(config.xsrfCookieName) :\n          undefined;\n\n      if (xsrfValue) {\n        requestHeaders[config.xsrfHeaderName] = xsrfValue;\n      }\n    }\n\n    // Add headers to the request\n    if ('setRequestHeader' in request) {\n      utils.forEach(requestHeaders, function setRequestHeader(val, key) {\n        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {\n          // Remove Content-Type if data is undefined\n          delete requestHeaders[key];\n        } else {\n          // Otherwise add header to the request\n          request.setRequestHeader(key, val);\n        }\n      });\n    }\n\n    // Add withCredentials to request if needed\n    if (config.withCredentials) {\n      request.withCredentials = true;\n    }\n\n    // Add responseType to request if needed\n    if (config.responseType) {\n      try {\n        request.responseType = config.responseType;\n      } catch (e) {\n        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.\n        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.\n        if (config.responseType !== 'json') {\n          throw e;\n        }\n      }\n    }\n\n    // Handle progress if needed\n    if (typeof config.onDownloadProgress === 'function') {\n      request.addEventListener('progress', config.onDownloadProgress);\n    }\n\n    // Not all browsers support upload events\n    if (typeof config.onUploadProgress === 'function' && request.upload) {\n      request.upload.addEventListener('progress', config.onUploadProgress);\n    }\n\n    if (config.cancelToken) {\n      // Handle cancellation\n      config.cancelToken.promise.then(function onCanceled(cancel) {\n        if (!request) {\n          return;\n        }\n\n        request.abort();\n        reject(cancel);\n        // Clean up request\n        request = null;\n      });\n    }\n\n    if (requestData === undefined) {\n      requestData = null;\n    }\n\n    // Send the request\n    request.send(requestData);\n  });\n};\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/adapters/xhr.js?");

/***/ }),

/***/ "./node_modules/axios/lib/axios.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/axios.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./utils */ \"./node_modules/axios/lib/utils.js\");\nvar bind = __webpack_require__(/*! ./helpers/bind */ \"./node_modules/axios/lib/helpers/bind.js\");\nvar Axios = __webpack_require__(/*! ./core/Axios */ \"./node_modules/axios/lib/core/Axios.js\");\nvar defaults = __webpack_require__(/*! ./defaults */ \"./node_modules/axios/lib/defaults.js\");\n\n/**\n * Create an instance of Axios\n *\n * @param {Object} defaultConfig The default config for the instance\n * @return {Axios} A new instance of Axios\n */\nfunction createInstance(defaultConfig) {\n  var context = new Axios(defaultConfig);\n  var instance = bind(Axios.prototype.request, context);\n\n  // Copy axios.prototype to instance\n  utils.extend(instance, Axios.prototype, context);\n\n  // Copy context to instance\n  utils.extend(instance, context);\n\n  return instance;\n}\n\n// Create the default instance to be exported\nvar axios = createInstance(defaults);\n\n// Expose Axios class to allow class inheritance\naxios.Axios = Axios;\n\n// Factory for creating new instances\naxios.create = function create(instanceConfig) {\n  return createInstance(utils.merge(defaults, instanceConfig));\n};\n\n// Expose Cancel & CancelToken\naxios.Cancel = __webpack_require__(/*! ./cancel/Cancel */ \"./node_modules/axios/lib/cancel/Cancel.js\");\naxios.CancelToken = __webpack_require__(/*! ./cancel/CancelToken */ \"./node_modules/axios/lib/cancel/CancelToken.js\");\naxios.isCancel = __webpack_require__(/*! ./cancel/isCancel */ \"./node_modules/axios/lib/cancel/isCancel.js\");\n\n// Expose all/spread\naxios.all = function all(promises) {\n  return Promise.all(promises);\n};\naxios.spread = __webpack_require__(/*! ./helpers/spread */ \"./node_modules/axios/lib/helpers/spread.js\");\n\nmodule.exports = axios;\n\n// Allow use of default import syntax in TypeScript\nmodule.exports.default = axios;\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/axios.js?");

/***/ }),

/***/ "./node_modules/axios/lib/cancel/Cancel.js":
/*!*************************************************!*\
  !*** ./node_modules/axios/lib/cancel/Cancel.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\n * A `Cancel` is an object that is thrown when an operation is canceled.\n *\n * @class\n * @param {string=} message The message.\n */\nfunction Cancel(message) {\n  this.message = message;\n}\n\nCancel.prototype.toString = function toString() {\n  return 'Cancel' + (this.message ? ': ' + this.message : '');\n};\n\nCancel.prototype.__CANCEL__ = true;\n\nmodule.exports = Cancel;\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/cancel/Cancel.js?");

/***/ }),

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/cancel/CancelToken.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar Cancel = __webpack_require__(/*! ./Cancel */ \"./node_modules/axios/lib/cancel/Cancel.js\");\n\n/**\n * A `CancelToken` is an object that can be used to request cancellation of an operation.\n *\n * @class\n * @param {Function} executor The executor function.\n */\nfunction CancelToken(executor) {\n  if (typeof executor !== 'function') {\n    throw new TypeError('executor must be a function.');\n  }\n\n  var resolvePromise;\n  this.promise = new Promise(function promiseExecutor(resolve) {\n    resolvePromise = resolve;\n  });\n\n  var token = this;\n  executor(function cancel(message) {\n    if (token.reason) {\n      // Cancellation has already been requested\n      return;\n    }\n\n    token.reason = new Cancel(message);\n    resolvePromise(token.reason);\n  });\n}\n\n/**\n * Throws a `Cancel` if cancellation has been requested.\n */\nCancelToken.prototype.throwIfRequested = function throwIfRequested() {\n  if (this.reason) {\n    throw this.reason;\n  }\n};\n\n/**\n * Returns an object that contains a new `CancelToken` and a function that, when called,\n * cancels the `CancelToken`.\n */\nCancelToken.source = function source() {\n  var cancel;\n  var token = new CancelToken(function executor(c) {\n    cancel = c;\n  });\n  return {\n    token: token,\n    cancel: cancel\n  };\n};\n\nmodule.exports = CancelToken;\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/cancel/CancelToken.js?");

/***/ }),

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/cancel/isCancel.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function isCancel(value) {\n  return !!(value && value.__CANCEL__);\n};\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/cancel/isCancel.js?");

/***/ }),

/***/ "./node_modules/axios/lib/core/Axios.js":
/*!**********************************************!*\
  !*** ./node_modules/axios/lib/core/Axios.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar defaults = __webpack_require__(/*! ./../defaults */ \"./node_modules/axios/lib/defaults.js\");\nvar utils = __webpack_require__(/*! ./../utils */ \"./node_modules/axios/lib/utils.js\");\nvar InterceptorManager = __webpack_require__(/*! ./InterceptorManager */ \"./node_modules/axios/lib/core/InterceptorManager.js\");\nvar dispatchRequest = __webpack_require__(/*! ./dispatchRequest */ \"./node_modules/axios/lib/core/dispatchRequest.js\");\n\n/**\n * Create a new instance of Axios\n *\n * @param {Object} instanceConfig The default config for the instance\n */\nfunction Axios(instanceConfig) {\n  this.defaults = instanceConfig;\n  this.interceptors = {\n    request: new InterceptorManager(),\n    response: new InterceptorManager()\n  };\n}\n\n/**\n * Dispatch a request\n *\n * @param {Object} config The config specific for this request (merged with this.defaults)\n */\nAxios.prototype.request = function request(config) {\n  /*eslint no-param-reassign:0*/\n  // Allow for axios('example/url'[, config]) a la fetch API\n  if (typeof config === 'string') {\n    config = utils.merge({\n      url: arguments[0]\n    }, arguments[1]);\n  }\n\n  config = utils.merge(defaults, {method: 'get'}, this.defaults, config);\n  config.method = config.method.toLowerCase();\n\n  // Hook up interceptors middleware\n  var chain = [dispatchRequest, undefined];\n  var promise = Promise.resolve(config);\n\n  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {\n    chain.unshift(interceptor.fulfilled, interceptor.rejected);\n  });\n\n  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {\n    chain.push(interceptor.fulfilled, interceptor.rejected);\n  });\n\n  while (chain.length) {\n    promise = promise.then(chain.shift(), chain.shift());\n  }\n\n  return promise;\n};\n\n// Provide aliases for supported request methods\nutils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {\n  /*eslint func-names:0*/\n  Axios.prototype[method] = function(url, config) {\n    return this.request(utils.merge(config || {}, {\n      method: method,\n      url: url\n    }));\n  };\n});\n\nutils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {\n  /*eslint func-names:0*/\n  Axios.prototype[method] = function(url, data, config) {\n    return this.request(utils.merge(config || {}, {\n      method: method,\n      url: url,\n      data: data\n    }));\n  };\n});\n\nmodule.exports = Axios;\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/core/Axios.js?");

/***/ }),

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/core/InterceptorManager.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./../utils */ \"./node_modules/axios/lib/utils.js\");\n\nfunction InterceptorManager() {\n  this.handlers = [];\n}\n\n/**\n * Add a new interceptor to the stack\n *\n * @param {Function} fulfilled The function to handle `then` for a `Promise`\n * @param {Function} rejected The function to handle `reject` for a `Promise`\n *\n * @return {Number} An ID used to remove interceptor later\n */\nInterceptorManager.prototype.use = function use(fulfilled, rejected) {\n  this.handlers.push({\n    fulfilled: fulfilled,\n    rejected: rejected\n  });\n  return this.handlers.length - 1;\n};\n\n/**\n * Remove an interceptor from the stack\n *\n * @param {Number} id The ID that was returned by `use`\n */\nInterceptorManager.prototype.eject = function eject(id) {\n  if (this.handlers[id]) {\n    this.handlers[id] = null;\n  }\n};\n\n/**\n * Iterate over all the registered interceptors\n *\n * This method is particularly useful for skipping over any\n * interceptors that may have become `null` calling `eject`.\n *\n * @param {Function} fn The function to call for each interceptor\n */\nInterceptorManager.prototype.forEach = function forEach(fn) {\n  utils.forEach(this.handlers, function forEachHandler(h) {\n    if (h !== null) {\n      fn(h);\n    }\n  });\n};\n\nmodule.exports = InterceptorManager;\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/core/InterceptorManager.js?");

/***/ }),

/***/ "./node_modules/axios/lib/core/createError.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/createError.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar enhanceError = __webpack_require__(/*! ./enhanceError */ \"./node_modules/axios/lib/core/enhanceError.js\");\n\n/**\n * Create an Error with the specified message, config, error code, request and response.\n *\n * @param {string} message The error message.\n * @param {Object} config The config.\n * @param {string} [code] The error code (for example, 'ECONNABORTED').\n * @param {Object} [request] The request.\n * @param {Object} [response] The response.\n * @returns {Error} The created error.\n */\nmodule.exports = function createError(message, config, code, request, response) {\n  var error = new Error(message);\n  return enhanceError(error, config, code, request, response);\n};\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/core/createError.js?");

/***/ }),

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/core/dispatchRequest.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./../utils */ \"./node_modules/axios/lib/utils.js\");\nvar transformData = __webpack_require__(/*! ./transformData */ \"./node_modules/axios/lib/core/transformData.js\");\nvar isCancel = __webpack_require__(/*! ../cancel/isCancel */ \"./node_modules/axios/lib/cancel/isCancel.js\");\nvar defaults = __webpack_require__(/*! ../defaults */ \"./node_modules/axios/lib/defaults.js\");\nvar isAbsoluteURL = __webpack_require__(/*! ./../helpers/isAbsoluteURL */ \"./node_modules/axios/lib/helpers/isAbsoluteURL.js\");\nvar combineURLs = __webpack_require__(/*! ./../helpers/combineURLs */ \"./node_modules/axios/lib/helpers/combineURLs.js\");\n\n/**\n * Throws a `Cancel` if cancellation has been requested.\n */\nfunction throwIfCancellationRequested(config) {\n  if (config.cancelToken) {\n    config.cancelToken.throwIfRequested();\n  }\n}\n\n/**\n * Dispatch a request to the server using the configured adapter.\n *\n * @param {object} config The config that is to be used for the request\n * @returns {Promise} The Promise to be fulfilled\n */\nmodule.exports = function dispatchRequest(config) {\n  throwIfCancellationRequested(config);\n\n  // Support baseURL config\n  if (config.baseURL && !isAbsoluteURL(config.url)) {\n    config.url = combineURLs(config.baseURL, config.url);\n  }\n\n  // Ensure headers exist\n  config.headers = config.headers || {};\n\n  // Transform request data\n  config.data = transformData(\n    config.data,\n    config.headers,\n    config.transformRequest\n  );\n\n  // Flatten headers\n  config.headers = utils.merge(\n    config.headers.common || {},\n    config.headers[config.method] || {},\n    config.headers || {}\n  );\n\n  utils.forEach(\n    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],\n    function cleanHeaderConfig(method) {\n      delete config.headers[method];\n    }\n  );\n\n  var adapter = config.adapter || defaults.adapter;\n\n  return adapter(config).then(function onAdapterResolution(response) {\n    throwIfCancellationRequested(config);\n\n    // Transform response data\n    response.data = transformData(\n      response.data,\n      response.headers,\n      config.transformResponse\n    );\n\n    return response;\n  }, function onAdapterRejection(reason) {\n    if (!isCancel(reason)) {\n      throwIfCancellationRequested(config);\n\n      // Transform response data\n      if (reason && reason.response) {\n        reason.response.data = transformData(\n          reason.response.data,\n          reason.response.headers,\n          config.transformResponse\n        );\n      }\n    }\n\n    return Promise.reject(reason);\n  });\n};\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/core/dispatchRequest.js?");

/***/ }),

/***/ "./node_modules/axios/lib/core/enhanceError.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/core/enhanceError.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\n * Update an Error with the specified config, error code, and response.\n *\n * @param {Error} error The error to update.\n * @param {Object} config The config.\n * @param {string} [code] The error code (for example, 'ECONNABORTED').\n * @param {Object} [request] The request.\n * @param {Object} [response] The response.\n * @returns {Error} The error.\n */\nmodule.exports = function enhanceError(error, config, code, request, response) {\n  error.config = config;\n  if (code) {\n    error.code = code;\n  }\n  error.request = request;\n  error.response = response;\n  return error;\n};\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/core/enhanceError.js?");

/***/ }),

/***/ "./node_modules/axios/lib/core/settle.js":
/*!***********************************************!*\
  !*** ./node_modules/axios/lib/core/settle.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar createError = __webpack_require__(/*! ./createError */ \"./node_modules/axios/lib/core/createError.js\");\n\n/**\n * Resolve or reject a Promise based on response status.\n *\n * @param {Function} resolve A function that resolves the promise.\n * @param {Function} reject A function that rejects the promise.\n * @param {object} response The response.\n */\nmodule.exports = function settle(resolve, reject, response) {\n  var validateStatus = response.config.validateStatus;\n  // Note: status is not exposed by XDomainRequest\n  if (!response.status || !validateStatus || validateStatus(response.status)) {\n    resolve(response);\n  } else {\n    reject(createError(\n      'Request failed with status code ' + response.status,\n      response.config,\n      null,\n      response.request,\n      response\n    ));\n  }\n};\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/core/settle.js?");

/***/ }),

/***/ "./node_modules/axios/lib/core/transformData.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/transformData.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./../utils */ \"./node_modules/axios/lib/utils.js\");\n\n/**\n * Transform the data for a request or a response\n *\n * @param {Object|String} data The data to be transformed\n * @param {Array} headers The headers for the request or response\n * @param {Array|Function} fns A single function or Array of functions\n * @returns {*} The resulting transformed data\n */\nmodule.exports = function transformData(data, headers, fns) {\n  /*eslint no-param-reassign:0*/\n  utils.forEach(fns, function transform(fn) {\n    data = fn(data, headers);\n  });\n\n  return data;\n};\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/core/transformData.js?");

/***/ }),

/***/ "./node_modules/axios/lib/defaults.js":
/*!********************************************!*\
  !*** ./node_modules/axios/lib/defaults.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(process) {\n\nvar utils = __webpack_require__(/*! ./utils */ \"./node_modules/axios/lib/utils.js\");\nvar normalizeHeaderName = __webpack_require__(/*! ./helpers/normalizeHeaderName */ \"./node_modules/axios/lib/helpers/normalizeHeaderName.js\");\n\nvar DEFAULT_CONTENT_TYPE = {\n  'Content-Type': 'application/x-www-form-urlencoded'\n};\n\nfunction setContentTypeIfUnset(headers, value) {\n  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {\n    headers['Content-Type'] = value;\n  }\n}\n\nfunction getDefaultAdapter() {\n  var adapter;\n  if (typeof XMLHttpRequest !== 'undefined') {\n    // For browsers use XHR adapter\n    adapter = __webpack_require__(/*! ./adapters/xhr */ \"./node_modules/axios/lib/adapters/xhr.js\");\n  } else if (typeof process !== 'undefined') {\n    // For node use HTTP adapter\n    adapter = __webpack_require__(/*! ./adapters/http */ \"./node_modules/axios/lib/adapters/xhr.js\");\n  }\n  return adapter;\n}\n\nvar defaults = {\n  adapter: getDefaultAdapter(),\n\n  transformRequest: [function transformRequest(data, headers) {\n    normalizeHeaderName(headers, 'Content-Type');\n    if (utils.isFormData(data) ||\n      utils.isArrayBuffer(data) ||\n      utils.isBuffer(data) ||\n      utils.isStream(data) ||\n      utils.isFile(data) ||\n      utils.isBlob(data)\n    ) {\n      return data;\n    }\n    if (utils.isArrayBufferView(data)) {\n      return data.buffer;\n    }\n    if (utils.isURLSearchParams(data)) {\n      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');\n      return data.toString();\n    }\n    if (utils.isObject(data)) {\n      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');\n      return JSON.stringify(data);\n    }\n    return data;\n  }],\n\n  transformResponse: [function transformResponse(data) {\n    /*eslint no-param-reassign:0*/\n    if (typeof data === 'string') {\n      try {\n        data = JSON.parse(data);\n      } catch (e) { /* Ignore */ }\n    }\n    return data;\n  }],\n\n  /**\n   * A timeout in milliseconds to abort a request. If set to 0 (default) a\n   * timeout is not created.\n   */\n  timeout: 0,\n\n  xsrfCookieName: 'XSRF-TOKEN',\n  xsrfHeaderName: 'X-XSRF-TOKEN',\n\n  maxContentLength: -1,\n\n  validateStatus: function validateStatus(status) {\n    return status >= 200 && status < 300;\n  }\n};\n\ndefaults.headers = {\n  common: {\n    'Accept': 'application/json, text/plain, */*'\n  }\n};\n\nutils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {\n  defaults.headers[method] = {};\n});\n\nutils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {\n  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);\n});\n\nmodule.exports = defaults;\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ \"./node_modules/process/browser.js\")))\n\n//# sourceURL=webpack:///./node_modules/axios/lib/defaults.js?");

/***/ }),

/***/ "./node_modules/axios/lib/helpers/bind.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/bind.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function bind(fn, thisArg) {\n  return function wrap() {\n    var args = new Array(arguments.length);\n    for (var i = 0; i < args.length; i++) {\n      args[i] = arguments[i];\n    }\n    return fn.apply(thisArg, args);\n  };\n};\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/helpers/bind.js?");

/***/ }),

/***/ "./node_modules/axios/lib/helpers/btoa.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/btoa.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js\n\nvar chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';\n\nfunction E() {\n  this.message = 'String contains an invalid character';\n}\nE.prototype = new Error;\nE.prototype.code = 5;\nE.prototype.name = 'InvalidCharacterError';\n\nfunction btoa(input) {\n  var str = String(input);\n  var output = '';\n  for (\n    // initialize result and counter\n    var block, charCode, idx = 0, map = chars;\n    // if the next str index does not exist:\n    //   change the mapping table to \"=\"\n    //   check if d has no fractional digits\n    str.charAt(idx | 0) || (map = '=', idx % 1);\n    // \"8 - idx % 1 * 8\" generates the sequence 2, 4, 6, 8\n    output += map.charAt(63 & block >> 8 - idx % 1 * 8)\n  ) {\n    charCode = str.charCodeAt(idx += 3 / 4);\n    if (charCode > 0xFF) {\n      throw new E();\n    }\n    block = block << 8 | charCode;\n  }\n  return output;\n}\n\nmodule.exports = btoa;\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/helpers/btoa.js?");

/***/ }),

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/buildURL.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./../utils */ \"./node_modules/axios/lib/utils.js\");\n\nfunction encode(val) {\n  return encodeURIComponent(val).\n    replace(/%40/gi, '@').\n    replace(/%3A/gi, ':').\n    replace(/%24/g, '$').\n    replace(/%2C/gi, ',').\n    replace(/%20/g, '+').\n    replace(/%5B/gi, '[').\n    replace(/%5D/gi, ']');\n}\n\n/**\n * Build a URL by appending params to the end\n *\n * @param {string} url The base of the url (e.g., http://www.google.com)\n * @param {object} [params] The params to be appended\n * @returns {string} The formatted url\n */\nmodule.exports = function buildURL(url, params, paramsSerializer) {\n  /*eslint no-param-reassign:0*/\n  if (!params) {\n    return url;\n  }\n\n  var serializedParams;\n  if (paramsSerializer) {\n    serializedParams = paramsSerializer(params);\n  } else if (utils.isURLSearchParams(params)) {\n    serializedParams = params.toString();\n  } else {\n    var parts = [];\n\n    utils.forEach(params, function serialize(val, key) {\n      if (val === null || typeof val === 'undefined') {\n        return;\n      }\n\n      if (utils.isArray(val)) {\n        key = key + '[]';\n      } else {\n        val = [val];\n      }\n\n      utils.forEach(val, function parseValue(v) {\n        if (utils.isDate(v)) {\n          v = v.toISOString();\n        } else if (utils.isObject(v)) {\n          v = JSON.stringify(v);\n        }\n        parts.push(encode(key) + '=' + encode(v));\n      });\n    });\n\n    serializedParams = parts.join('&');\n  }\n\n  if (serializedParams) {\n    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;\n  }\n\n  return url;\n};\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/helpers/buildURL.js?");

/***/ }),

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
/*!*******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/combineURLs.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\n * Creates a new URL by combining the specified URLs\n *\n * @param {string} baseURL The base URL\n * @param {string} relativeURL The relative URL\n * @returns {string} The combined URL\n */\nmodule.exports = function combineURLs(baseURL, relativeURL) {\n  return relativeURL\n    ? baseURL.replace(/\\/+$/, '') + '/' + relativeURL.replace(/^\\/+/, '')\n    : baseURL;\n};\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/helpers/combineURLs.js?");

/***/ }),

/***/ "./node_modules/axios/lib/helpers/cookies.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/helpers/cookies.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./../utils */ \"./node_modules/axios/lib/utils.js\");\n\nmodule.exports = (\n  utils.isStandardBrowserEnv() ?\n\n  // Standard browser envs support document.cookie\n  (function standardBrowserEnv() {\n    return {\n      write: function write(name, value, expires, path, domain, secure) {\n        var cookie = [];\n        cookie.push(name + '=' + encodeURIComponent(value));\n\n        if (utils.isNumber(expires)) {\n          cookie.push('expires=' + new Date(expires).toGMTString());\n        }\n\n        if (utils.isString(path)) {\n          cookie.push('path=' + path);\n        }\n\n        if (utils.isString(domain)) {\n          cookie.push('domain=' + domain);\n        }\n\n        if (secure === true) {\n          cookie.push('secure');\n        }\n\n        document.cookie = cookie.join('; ');\n      },\n\n      read: function read(name) {\n        var match = document.cookie.match(new RegExp('(^|;\\\\s*)(' + name + ')=([^;]*)'));\n        return (match ? decodeURIComponent(match[3]) : null);\n      },\n\n      remove: function remove(name) {\n        this.write(name, '', Date.now() - 86400000);\n      }\n    };\n  })() :\n\n  // Non standard browser env (web workers, react-native) lack needed support.\n  (function nonStandardBrowserEnv() {\n    return {\n      write: function write() {},\n      read: function read() { return null; },\n      remove: function remove() {}\n    };\n  })()\n);\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/helpers/cookies.js?");

/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\n * Determines whether the specified URL is absolute\n *\n * @param {string} url The URL to test\n * @returns {boolean} True if the specified URL is absolute, otherwise false\n */\nmodule.exports = function isAbsoluteURL(url) {\n  // A URL is considered absolute if it begins with \"<scheme>://\" or \"//\" (protocol-relative URL).\n  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed\n  // by any combination of letters, digits, plus, period, or hyphen.\n  return /^([a-z][a-z\\d\\+\\-\\.]*:)?\\/\\//i.test(url);\n};\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/helpers/isAbsoluteURL.js?");

/***/ }),

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./../utils */ \"./node_modules/axios/lib/utils.js\");\n\nmodule.exports = (\n  utils.isStandardBrowserEnv() ?\n\n  // Standard browser envs have full support of the APIs needed to test\n  // whether the request URL is of the same origin as current location.\n  (function standardBrowserEnv() {\n    var msie = /(msie|trident)/i.test(navigator.userAgent);\n    var urlParsingNode = document.createElement('a');\n    var originURL;\n\n    /**\n    * Parse a URL to discover it's components\n    *\n    * @param {String} url The URL to be parsed\n    * @returns {Object}\n    */\n    function resolveURL(url) {\n      var href = url;\n\n      if (msie) {\n        // IE needs attribute set twice to normalize properties\n        urlParsingNode.setAttribute('href', href);\n        href = urlParsingNode.href;\n      }\n\n      urlParsingNode.setAttribute('href', href);\n\n      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils\n      return {\n        href: urlParsingNode.href,\n        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',\n        host: urlParsingNode.host,\n        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\\?/, '') : '',\n        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',\n        hostname: urlParsingNode.hostname,\n        port: urlParsingNode.port,\n        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?\n                  urlParsingNode.pathname :\n                  '/' + urlParsingNode.pathname\n      };\n    }\n\n    originURL = resolveURL(window.location.href);\n\n    /**\n    * Determine if a URL shares the same origin as the current location\n    *\n    * @param {String} requestURL The URL to test\n    * @returns {boolean} True if URL shares the same origin, otherwise false\n    */\n    return function isURLSameOrigin(requestURL) {\n      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;\n      return (parsed.protocol === originURL.protocol &&\n            parsed.host === originURL.host);\n    };\n  })() :\n\n  // Non standard browser envs (web workers, react-native) lack needed support.\n  (function nonStandardBrowserEnv() {\n    return function isURLSameOrigin() {\n      return true;\n    };\n  })()\n);\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/helpers/isURLSameOrigin.js?");

/***/ }),

/***/ "./node_modules/axios/lib/helpers/normalizeHeaderName.js":
/*!***************************************************************!*\
  !*** ./node_modules/axios/lib/helpers/normalizeHeaderName.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ../utils */ \"./node_modules/axios/lib/utils.js\");\n\nmodule.exports = function normalizeHeaderName(headers, normalizedName) {\n  utils.forEach(headers, function processHeader(value, name) {\n    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {\n      headers[normalizedName] = value;\n      delete headers[name];\n    }\n  });\n};\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/helpers/normalizeHeaderName.js?");

/***/ }),

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/parseHeaders.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./../utils */ \"./node_modules/axios/lib/utils.js\");\n\n// Headers whose duplicates are ignored by node\n// c.f. https://nodejs.org/api/http.html#http_message_headers\nvar ignoreDuplicateOf = [\n  'age', 'authorization', 'content-length', 'content-type', 'etag',\n  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',\n  'last-modified', 'location', 'max-forwards', 'proxy-authorization',\n  'referer', 'retry-after', 'user-agent'\n];\n\n/**\n * Parse headers into an object\n *\n * ```\n * Date: Wed, 27 Aug 2014 08:58:49 GMT\n * Content-Type: application/json\n * Connection: keep-alive\n * Transfer-Encoding: chunked\n * ```\n *\n * @param {String} headers Headers needing to be parsed\n * @returns {Object} Headers parsed into an object\n */\nmodule.exports = function parseHeaders(headers) {\n  var parsed = {};\n  var key;\n  var val;\n  var i;\n\n  if (!headers) { return parsed; }\n\n  utils.forEach(headers.split('\\n'), function parser(line) {\n    i = line.indexOf(':');\n    key = utils.trim(line.substr(0, i)).toLowerCase();\n    val = utils.trim(line.substr(i + 1));\n\n    if (key) {\n      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {\n        return;\n      }\n      if (key === 'set-cookie') {\n        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);\n      } else {\n        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;\n      }\n    }\n  });\n\n  return parsed;\n};\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/helpers/parseHeaders.js?");

/***/ }),

/***/ "./node_modules/axios/lib/helpers/spread.js":
/*!**************************************************!*\
  !*** ./node_modules/axios/lib/helpers/spread.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\n * Syntactic sugar for invoking a function and expanding an array for arguments.\n *\n * Common use case would be to use `Function.prototype.apply`.\n *\n *  ```js\n *  function f(x, y, z) {}\n *  var args = [1, 2, 3];\n *  f.apply(null, args);\n *  ```\n *\n * With `spread` this example can be re-written.\n *\n *  ```js\n *  spread(function(x, y, z) {})([1, 2, 3]);\n *  ```\n *\n * @param {Function} callback\n * @returns {Function}\n */\nmodule.exports = function spread(callback) {\n  return function wrap(arr) {\n    return callback.apply(null, arr);\n  };\n};\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/helpers/spread.js?");

/***/ }),

/***/ "./node_modules/axios/lib/utils.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/utils.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar bind = __webpack_require__(/*! ./helpers/bind */ \"./node_modules/axios/lib/helpers/bind.js\");\nvar isBuffer = __webpack_require__(/*! is-buffer */ \"./node_modules/is-buffer/index.js\");\n\n/*global toString:true*/\n\n// utils is a library of generic helper functions non-specific to axios\n\nvar toString = Object.prototype.toString;\n\n/**\n * Determine if a value is an Array\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is an Array, otherwise false\n */\nfunction isArray(val) {\n  return toString.call(val) === '[object Array]';\n}\n\n/**\n * Determine if a value is an ArrayBuffer\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is an ArrayBuffer, otherwise false\n */\nfunction isArrayBuffer(val) {\n  return toString.call(val) === '[object ArrayBuffer]';\n}\n\n/**\n * Determine if a value is a FormData\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is an FormData, otherwise false\n */\nfunction isFormData(val) {\n  return (typeof FormData !== 'undefined') && (val instanceof FormData);\n}\n\n/**\n * Determine if a value is a view on an ArrayBuffer\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false\n */\nfunction isArrayBufferView(val) {\n  var result;\n  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {\n    result = ArrayBuffer.isView(val);\n  } else {\n    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);\n  }\n  return result;\n}\n\n/**\n * Determine if a value is a String\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a String, otherwise false\n */\nfunction isString(val) {\n  return typeof val === 'string';\n}\n\n/**\n * Determine if a value is a Number\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a Number, otherwise false\n */\nfunction isNumber(val) {\n  return typeof val === 'number';\n}\n\n/**\n * Determine if a value is undefined\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if the value is undefined, otherwise false\n */\nfunction isUndefined(val) {\n  return typeof val === 'undefined';\n}\n\n/**\n * Determine if a value is an Object\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is an Object, otherwise false\n */\nfunction isObject(val) {\n  return val !== null && typeof val === 'object';\n}\n\n/**\n * Determine if a value is a Date\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a Date, otherwise false\n */\nfunction isDate(val) {\n  return toString.call(val) === '[object Date]';\n}\n\n/**\n * Determine if a value is a File\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a File, otherwise false\n */\nfunction isFile(val) {\n  return toString.call(val) === '[object File]';\n}\n\n/**\n * Determine if a value is a Blob\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a Blob, otherwise false\n */\nfunction isBlob(val) {\n  return toString.call(val) === '[object Blob]';\n}\n\n/**\n * Determine if a value is a Function\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a Function, otherwise false\n */\nfunction isFunction(val) {\n  return toString.call(val) === '[object Function]';\n}\n\n/**\n * Determine if a value is a Stream\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a Stream, otherwise false\n */\nfunction isStream(val) {\n  return isObject(val) && isFunction(val.pipe);\n}\n\n/**\n * Determine if a value is a URLSearchParams object\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a URLSearchParams object, otherwise false\n */\nfunction isURLSearchParams(val) {\n  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;\n}\n\n/**\n * Trim excess whitespace off the beginning and end of a string\n *\n * @param {String} str The String to trim\n * @returns {String} The String freed of excess whitespace\n */\nfunction trim(str) {\n  return str.replace(/^\\s*/, '').replace(/\\s*$/, '');\n}\n\n/**\n * Determine if we're running in a standard browser environment\n *\n * This allows axios to run in a web worker, and react-native.\n * Both environments support XMLHttpRequest, but not fully standard globals.\n *\n * web workers:\n *  typeof window -> undefined\n *  typeof document -> undefined\n *\n * react-native:\n *  navigator.product -> 'ReactNative'\n */\nfunction isStandardBrowserEnv() {\n  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {\n    return false;\n  }\n  return (\n    typeof window !== 'undefined' &&\n    typeof document !== 'undefined'\n  );\n}\n\n/**\n * Iterate over an Array or an Object invoking a function for each item.\n *\n * If `obj` is an Array callback will be called passing\n * the value, index, and complete array for each item.\n *\n * If 'obj' is an Object callback will be called passing\n * the value, key, and complete object for each property.\n *\n * @param {Object|Array} obj The object to iterate\n * @param {Function} fn The callback to invoke for each item\n */\nfunction forEach(obj, fn) {\n  // Don't bother if no value provided\n  if (obj === null || typeof obj === 'undefined') {\n    return;\n  }\n\n  // Force an array if not already something iterable\n  if (typeof obj !== 'object') {\n    /*eslint no-param-reassign:0*/\n    obj = [obj];\n  }\n\n  if (isArray(obj)) {\n    // Iterate over array values\n    for (var i = 0, l = obj.length; i < l; i++) {\n      fn.call(null, obj[i], i, obj);\n    }\n  } else {\n    // Iterate over object keys\n    for (var key in obj) {\n      if (Object.prototype.hasOwnProperty.call(obj, key)) {\n        fn.call(null, obj[key], key, obj);\n      }\n    }\n  }\n}\n\n/**\n * Accepts varargs expecting each argument to be an object, then\n * immutably merges the properties of each object and returns result.\n *\n * When multiple objects contain the same key the later object in\n * the arguments list will take precedence.\n *\n * Example:\n *\n * ```js\n * var result = merge({foo: 123}, {foo: 456});\n * console.log(result.foo); // outputs 456\n * ```\n *\n * @param {Object} obj1 Object to merge\n * @returns {Object} Result of all merge properties\n */\nfunction merge(/* obj1, obj2, obj3, ... */) {\n  var result = {};\n  function assignValue(val, key) {\n    if (typeof result[key] === 'object' && typeof val === 'object') {\n      result[key] = merge(result[key], val);\n    } else {\n      result[key] = val;\n    }\n  }\n\n  for (var i = 0, l = arguments.length; i < l; i++) {\n    forEach(arguments[i], assignValue);\n  }\n  return result;\n}\n\n/**\n * Extends object a by mutably adding to it the properties of object b.\n *\n * @param {Object} a The object to be extended\n * @param {Object} b The object to copy properties from\n * @param {Object} thisArg The object to bind function to\n * @return {Object} The resulting value of object a\n */\nfunction extend(a, b, thisArg) {\n  forEach(b, function assignValue(val, key) {\n    if (thisArg && typeof val === 'function') {\n      a[key] = bind(val, thisArg);\n    } else {\n      a[key] = val;\n    }\n  });\n  return a;\n}\n\nmodule.exports = {\n  isArray: isArray,\n  isArrayBuffer: isArrayBuffer,\n  isBuffer: isBuffer,\n  isFormData: isFormData,\n  isArrayBufferView: isArrayBufferView,\n  isString: isString,\n  isNumber: isNumber,\n  isObject: isObject,\n  isUndefined: isUndefined,\n  isDate: isDate,\n  isFile: isFile,\n  isBlob: isBlob,\n  isFunction: isFunction,\n  isStream: isStream,\n  isURLSearchParams: isURLSearchParams,\n  isStandardBrowserEnv: isStandardBrowserEnv,\n  forEach: forEach,\n  merge: merge,\n  extend: extend,\n  trim: trim\n};\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/utils.js?");

/***/ }),

/***/ "./node_modules/is-buffer/index.js":
/*!*****************************************!*\
  !*** ./node_modules/is-buffer/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*!\n * Determine if an object is a Buffer\n *\n * @author   Feross Aboukhadijeh <https://feross.org>\n * @license  MIT\n */\n\n// The _isBuffer check is for Safari 5-7 support, because it's missing\n// Object.prototype.constructor. Remove this eventually\nmodule.exports = function (obj) {\n  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)\n}\n\nfunction isBuffer (obj) {\n  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)\n}\n\n// For Node v0.10 support. Remove this eventually.\nfunction isSlowBuffer (obj) {\n  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))\n}\n\n\n//# sourceURL=webpack:///./node_modules/is-buffer/index.js?");

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// shim for using process in browser\nvar process = module.exports = {};\n\n// cached from whatever global is present so that test runners that stub it\n// don't break things.  But we need to wrap it in a try catch in case it is\n// wrapped in strict mode code which doesn't define any globals.  It's inside a\n// function because try/catches deoptimize in certain engines.\n\nvar cachedSetTimeout;\nvar cachedClearTimeout;\n\nfunction defaultSetTimout() {\n    throw new Error('setTimeout has not been defined');\n}\nfunction defaultClearTimeout () {\n    throw new Error('clearTimeout has not been defined');\n}\n(function () {\n    try {\n        if (typeof setTimeout === 'function') {\n            cachedSetTimeout = setTimeout;\n        } else {\n            cachedSetTimeout = defaultSetTimout;\n        }\n    } catch (e) {\n        cachedSetTimeout = defaultSetTimout;\n    }\n    try {\n        if (typeof clearTimeout === 'function') {\n            cachedClearTimeout = clearTimeout;\n        } else {\n            cachedClearTimeout = defaultClearTimeout;\n        }\n    } catch (e) {\n        cachedClearTimeout = defaultClearTimeout;\n    }\n} ())\nfunction runTimeout(fun) {\n    if (cachedSetTimeout === setTimeout) {\n        //normal enviroments in sane situations\n        return setTimeout(fun, 0);\n    }\n    // if setTimeout wasn't available but was latter defined\n    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {\n        cachedSetTimeout = setTimeout;\n        return setTimeout(fun, 0);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedSetTimeout(fun, 0);\n    } catch(e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally\n            return cachedSetTimeout.call(null, fun, 0);\n        } catch(e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error\n            return cachedSetTimeout.call(this, fun, 0);\n        }\n    }\n\n\n}\nfunction runClearTimeout(marker) {\n    if (cachedClearTimeout === clearTimeout) {\n        //normal enviroments in sane situations\n        return clearTimeout(marker);\n    }\n    // if clearTimeout wasn't available but was latter defined\n    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {\n        cachedClearTimeout = clearTimeout;\n        return clearTimeout(marker);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedClearTimeout(marker);\n    } catch (e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally\n            return cachedClearTimeout.call(null, marker);\n        } catch (e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.\n            // Some versions of I.E. have different rules for clearTimeout vs setTimeout\n            return cachedClearTimeout.call(this, marker);\n        }\n    }\n\n\n\n}\nvar queue = [];\nvar draining = false;\nvar currentQueue;\nvar queueIndex = -1;\n\nfunction cleanUpNextTick() {\n    if (!draining || !currentQueue) {\n        return;\n    }\n    draining = false;\n    if (currentQueue.length) {\n        queue = currentQueue.concat(queue);\n    } else {\n        queueIndex = -1;\n    }\n    if (queue.length) {\n        drainQueue();\n    }\n}\n\nfunction drainQueue() {\n    if (draining) {\n        return;\n    }\n    var timeout = runTimeout(cleanUpNextTick);\n    draining = true;\n\n    var len = queue.length;\n    while(len) {\n        currentQueue = queue;\n        queue = [];\n        while (++queueIndex < len) {\n            if (currentQueue) {\n                currentQueue[queueIndex].run();\n            }\n        }\n        queueIndex = -1;\n        len = queue.length;\n    }\n    currentQueue = null;\n    draining = false;\n    runClearTimeout(timeout);\n}\n\nprocess.nextTick = function (fun) {\n    var args = new Array(arguments.length - 1);\n    if (arguments.length > 1) {\n        for (var i = 1; i < arguments.length; i++) {\n            args[i - 1] = arguments[i];\n        }\n    }\n    queue.push(new Item(fun, args));\n    if (queue.length === 1 && !draining) {\n        runTimeout(drainQueue);\n    }\n};\n\n// v8 likes predictible objects\nfunction Item(fun, array) {\n    this.fun = fun;\n    this.array = array;\n}\nItem.prototype.run = function () {\n    this.fun.apply(null, this.array);\n};\nprocess.title = 'browser';\nprocess.browser = true;\nprocess.env = {};\nprocess.argv = [];\nprocess.version = ''; // empty string to avoid regexp issues\nprocess.versions = {};\n\nfunction noop() {}\n\nprocess.on = noop;\nprocess.addListener = noop;\nprocess.once = noop;\nprocess.off = noop;\nprocess.removeListener = noop;\nprocess.removeAllListeners = noop;\nprocess.emit = noop;\nprocess.prependListener = noop;\nprocess.prependOnceListener = noop;\n\nprocess.listeners = function (name) { return [] }\n\nprocess.binding = function (name) {\n    throw new Error('process.binding is not supported');\n};\n\nprocess.cwd = function () { return '/' };\nprocess.chdir = function (dir) {\n    throw new Error('process.chdir is not supported');\n};\nprocess.umask = function() { return 0; };\n\n\n//# sourceURL=webpack:///./node_modules/process/browser.js?");

/***/ }),

/***/ "./services/api.js":
/*!*************************!*\
  !*** ./services/api.js ***!
  \*************************/
/*! exports provided: saveEmail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"saveEmail\", function() { return saveEmail; });\n/* POST REQUEST */\n\nconst axios = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nconst saveEmail = async (email) => {\n  try {\n    const res = await axios.post('/', {\n      email,\n    });\n    return res;\n  } catch (err) {\n    throw new Error('Something went wrong with your post request');\n  }\n};\n\n\n\n\n//# sourceURL=webpack:///./services/api.js?");

/***/ }),

/***/ "./src/functionality/calculations.js":
/*!*******************************************!*\
  !*** ./src/functionality/calculations.js ***!
  \*******************************************/
/*! exports provided: applyCalc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"applyCalc\", function() { return applyCalc; });\n/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter */ \"./src/functionality/filter.js\");\n\n\n// Helper function to output numbers that include a comma and the correct float value\nconst filterNum = num => num.toFixed(2).toString().replace(/\\B(?=(\\d{3})+(?!\\d))/g, ',');\n// Apply necessary calculations based on which path was chosen\nconst applyCalc = () => {\n\n  const howMuch = document.querySelector('#how-much');\n  const input = document.querySelector('#num-input');\n\n  const pay = document.querySelector('#pay');\n  pay.style.width = '40%';\n\n  const weekOne = document.querySelector('#week-one');\n  const weekTwo = document.querySelector('#week-two');\n  const month = document.querySelector('#month');\n\n  input.addEventListener('input', (e) => {\n    // eslint-disable-next-line default-case\n    switch (Object(_filter__WEBPACK_IMPORTED_MODULE_0__[\"filterString\"])('How much would you like to ', howMuch.textContent)) {\n      // calculations to apply if 'BORROWER' was clicked\n      case 'borrow?':\n\n        if (e.value !== '') {\n\n          pay.textContent = 'Repayment timeframe options + interest:';\n          pay.style.paddingLeft = '3vw';\n\n          weekOne.textContent = `1 Week = ${filterNum(input.value * 1.01)}`;\n          weekOne.style.paddingLeft = '5vw';\n\n          weekTwo.textContent = `2 Weeks = ${filterNum(input.value * 1.025)}`;\n          weekTwo.style.paddingLeft = '5vw';\n\n          month.textContent = `1 Month = ${filterNum(input.value * 1.06)}`;\n          month.style.paddingLeft = '5vw';\n\n          pay.classList.add('animated', 'fadeInLeft', 'slower');\n\n          weekOne.classList.add('animated', 'fadeInLeft', 'slower', 'delay-2s');\n\n          weekTwo.classList.add('animated', 'fadeInLeft', 'slower', 'delay-3s');\n\n          month.classList.add('animated', 'fadeInLeft', 'slower', 'delay-4s');\n\n        }\n\n        break;\n      // calculations to apply if 'LENDER' was clicked\n      case 'lend?':\n\n        if (e.value !== '') {\n\n          pay.textContent = 'Your money back + interest:';\n          pay.style.paddingLeft = '7.5vw';\n\n          weekOne.textContent = `1 Week = ${filterNum(input.value * 1.007)}`;\n          weekOne.style.paddingLeft = '5vw';\n\n          weekTwo.textContent = `2 Weeks = ${filterNum(input.value * 1.018)}`;\n          weekTwo.style.paddingLeft = '5vw';\n\n          month.textContent = `1 Month = ${filterNum(input.value * 1.045)}`;\n          month.style.paddingLeft = '5vw';\n\n          pay.classList.add('animated', 'fadeInLeft', 'slower');\n\n          weekOne.classList.add('animated', 'fadeInLeft', 'slower', 'delay-2s');\n\n          weekTwo.classList.add('animated', 'fadeInLeft', 'slower', 'delay-3s');\n\n          month.classList.add('animated', 'fadeInLeft', 'slower', 'delay-4s');\n\n        }\n\n        break;\n      // No Default\n    }\n\n  });\n\n};\n\n\n\n\n//# sourceURL=webpack:///./src/functionality/calculations.js?");

/***/ }),

/***/ "./src/functionality/check.js":
/*!************************************!*\
  !*** ./src/functionality/check.js ***!
  \************************************/
/*! exports provided: check */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"check\", function() { return check; });\n// Check to see if the lock icon is locked or unlocked\nconst check = () => {\n\n  const lockSymbol = document.querySelector('#symbol');\n  let checker;\n  // lock icon is locked\n  if (lockSymbol.classList.contains('fa-lock')) checker = true;\n  // lock icon is unlocked\n  else checker = false;\n  \n  return checker;\n\n};\n\n\n\n\n//# sourceURL=webpack:///./src/functionality/check.js?");

/***/ }),

/***/ "./src/functionality/filter.js":
/*!*************************************!*\
  !*** ./src/functionality/filter.js ***!
  \*************************************/
/*! exports provided: filterString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"filterString\", function() { return filterString; });\n// Helper function to remove specified characters from given string\nconst filterString = (filter, string) => {\n\n  const reg = new RegExp(filter);\n\n  return string.replace(reg, '').toLowerCase();\n  \n};\n\n\n\n\n//# sourceURL=webpack:///./src/functionality/filter.js?");

/***/ }),

/***/ "./src/functionality/mobile.js":
/*!*************************************!*\
  !*** ./src/functionality/mobile.js ***!
  \*************************************/
/*! exports provided: isMobile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isMobile\", function() { return isMobile; });\n// Change sizing to fit a phone's screen\nconst isMobile = () => {\n\n  const mobile = /iPhone|iPad|iPod|Android|BlackBerry|Windows Phone/i.test(navigator.userAgent);\n\n  if (mobile === true) {\n\n    const logo = document.querySelector('#logo');\n    const comingSoon = document.querySelector('#coming-soon');\n    const slogan = document.querySelector('section').firstChild.firstChild.childNodes;\n    const thirdArray = document.querySelector('#third').childNodes;\n    const modal = document.querySelector('#modal');\n    const modalText = document.querySelector('#modal-text');\n    const howMuchText = document.querySelector('#how-much');\n    const input = document.querySelector('#num-input');\n    const repaymentText = document.querySelector('#pay');\n    const resultOne = document.querySelector('#week-one');\n    const resultTwo = document.querySelector('#week-two');\n    const resultThree = document.querySelector('#month');\n    const button = document.querySelector('#back');\n    const footer = document.querySelector('#footer').childNodes;\n\n    logo.style.width = '40vw';\n    logo.style.height = '25vh';\n\n    comingSoon.style.width = '50vw';\n    comingSoon.style.fontSize = '16pt';\n\n    slogan.forEach(el => {\n\n      el.classList.replace('is-1', 'is-4');\n\n    });\n\n    thirdArray.forEach(el => {\n\n      const title = el.childNodes[1].firstChild;\n      const titleDiv = el.childNodes[1];\n      const text = el.childNodes[2].firstChild;\n\n      title.className = 'title is-5';\n      title.style.fontSize = '14pt';\n\n      titleDiv.style.width = '100%';\n      titleDiv.style.marginBottom = '4vh';\n      titleDiv.style.marginTop = '2vh';\n\n      text.style.fontSize = '9pt';\n      text.className = 'subtitle is-6';\n\n    });\n\n    modal.style.backgroundColor = 'rgb(54, 54, 54, 0.9)';\n    // Get the numbers Text\n    modalText.classList.replace('is-1', 'is-5');\n\n    howMuchText.className = 'title is-7';\n    howMuchText.style.fontSize = '10.5pt';\n\n    input.style.width = '50%';\n\n    repaymentText.style.width = '90%';\n    repaymentText.style.fontSize = '13pt';\n    repaymentText.style.textAlign = 'center';\n\n    resultOne.style.width = '50%';\n    resultOne.style.textAlign = 'center';\n\n    resultTwo.style.width = '50%';\n    resultTwo.style.textAlign = 'center';\n\n    resultThree.style.width = '50%';\n    resultThree.style.textAlign = 'center';\n\n    button.style.width = '15vw';\n\n    footer.forEach(el => {\n\n      el.classList.replace('is-6', 'is-7');\n\n    });\n\n  }\n\n};\n\n\n\n\n//# sourceURL=webpack:///./src/functionality/mobile.js?");

/***/ }),

/***/ "./src/functionality/modal.js":
/*!************************************!*\
  !*** ./src/functionality/modal.js ***!
  \************************************/
/*! exports provided: triggerModal, path */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"triggerModal\", function() { return triggerModal; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"path\", function() { return path; });\n/* harmony import */ var _check__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./check */ \"./src/functionality/check.js\");\n\n\nlet path;\n\n// Enter email pop-up when buttons 'BORROWER' or 'LENDER' are clicked\nconst triggerModal = () => {\n\n  const modal = document.querySelector('#modal');\n  const borrower = document.querySelector('#borrower');\n  const lender = document.querySelector('#lender');\n  const blArray = [borrower, lender];\n\n  blArray.forEach((el) => {\n\n    el.addEventListener('click', (e) => {\n      // if lock icon is locked, display enter email pop-up\n      if (Object(_check__WEBPACK_IMPORTED_MODULE_0__[\"check\"])() !== false) {\n\n        modal.style.display = 'flex';\n        modal.style.position = 'absolute';\n        modal.classList.add('animated', 'fadeInDown');\n\n      }\n      // Save button's text\n      path = e.target.innerText;\n  \n    });\n\n  });\n\n};\n\n\n\n\n//# sourceURL=webpack:///./src/functionality/modal.js?");

/***/ }),

/***/ "./src/functionality/save.js":
/*!***********************************!*\
  !*** ./src/functionality/save.js ***!
  \***********************************/
/*! exports provided: save */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"save\", function() { return save; });\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/api */ \"./services/api.js\");\n/* harmony import */ var _functionality_validity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functionality/validity */ \"./src/functionality/validity.js\");\n/* harmony import */ var _functionality_switch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../functionality/switch */ \"./src/functionality/switch.js\");\n\n\n\n\n// Save user's email to MailChimp\nconst save = () => {\n\n  const lockSymbol = document.querySelector('#symbol');\n  const modal = document.querySelector('#modal');\n  const input = document.querySelector('#email-input');\n  const button = document.querySelector('#email-button');\n  // if email is valid and the 'enter' key was pressed\n  input.addEventListener('keypress', (e) => {\n    \n    if (Object(_functionality_validity__WEBPACK_IMPORTED_MODULE_1__[\"validateEmail\"])(input.value) === true && e.keyCode === 13) {\n      // send email to backend\n      Object(_services_api__WEBPACK_IMPORTED_MODULE_0__[\"saveEmail\"])(input.value);\n\n      modal.style.display = 'none';\n      // show lock icon 'unlocking'\n      lockSymbol.classList.add('animated', 'fadeOut');\n      lockSymbol.addEventListener('animationend', () => {\n\n        lockSymbol.classList.replace('fa-lock', 'fa-unlock');\n        lockSymbol.classList.replace('fadeOut', 'fadeIn');\n\n      });\n      // change to calculator slide after unlocking\n      Object(_functionality_switch__WEBPACK_IMPORTED_MODULE_2__[\"switchSlide\"])();\n\n    }\n\n  });\n  // if email is valid and the submit button was clicked\n  button.addEventListener('click', () => {\n\n    if (Object(_functionality_validity__WEBPACK_IMPORTED_MODULE_1__[\"validateEmail\"])(input.value) === true) {\n\n      Object(_services_api__WEBPACK_IMPORTED_MODULE_0__[\"saveEmail\"])(input.value);\n\n      modal.style.display = 'none';\n\n      lockSymbol.classList.add('animated', 'fadeOut');\n      lockSymbol.addEventListener('animationend', () => {\n\n        lockSymbol.classList.replace('fa-lock', 'fa-unlock');\n        lockSymbol.classList.replace('fadeOut', 'fadeIn');\n\n      });\n      // switch to calculator slide after submitting email\n      Object(_functionality_switch__WEBPACK_IMPORTED_MODULE_2__[\"switchSlide\"])();\n\n    }\n\n  });\n\n};\n\n\n\n\n//# sourceURL=webpack:///./src/functionality/save.js?");

/***/ }),

/***/ "./src/functionality/switch.js":
/*!*************************************!*\
  !*** ./src/functionality/switch.js ***!
  \*************************************/
/*! exports provided: switchSlide */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"switchSlide\", function() { return switchSlide; });\n/* harmony import */ var _check__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./check */ \"./src/functionality/check.js\");\n/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter */ \"./src/functionality/filter.js\");\n/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal */ \"./src/functionality/modal.js\");\n\n\n\n\n// Switch to the calculator slide after submitting email\nconst switchSlide = () => {\n\n  const lockSymbol = document.querySelector('#symbol');\n  // 'Do You Want To Be A' slide\n  const firstSlide = document.querySelector('#second').firstChild;\n  // calculator slide\n  const secondSlide = document.querySelector('#second').lastChild;\n  const backButton = document.querySelector('#back');\n  const howMuchText = document.querySelector('#how-much');\n  const numInput = document.querySelector('#num-input');\n  const pay = document.querySelector('#pay');\n  const weekOne = document.querySelector('#week-one');\n  const weekTwo = document.querySelector('#week-two');\n  const month = document.querySelector('#month');\n\n  lockSymbol.addEventListener('animationend', setTimeout(() => {\n    // show calculator slide once the lock icon's unlocked animation ends\n    if (Object(_check__WEBPACK_IMPORTED_MODULE_0__[\"check\"])() !== true) {\n      // hide 'Do You Want To Be A' slide\n      firstSlide.style.display = 'none';\n      // show calculator slide\n      secondSlide.style.display = 'flex';\n      // grab the word inside the button that was clicked in first slide and turn it into a verb\n      howMuchText.textContent = `How much would you like to ${Object(_filter__WEBPACK_IMPORTED_MODULE_1__[\"filterString\"])('ER', _modal__WEBPACK_IMPORTED_MODULE_2__[\"path\"])}?`;\n      howMuchText.style.fontVariant = 'small-caps';\n      howMuchText.style.paddingTop = '5vh';\n      howMuchText.style.borderBottom = '0.3vh solid black';\n      // clear calculator slides' content\n      backButton.addEventListener('click', () => {\n\n        numInput.value = '';\n\n        pay.textContent = '';\n\n        weekOne.textContent = '';\n\n        weekTwo.textContent = '';\n\n        month.textContent = '';\n\n        secondSlide.style.display = 'none';\n        \n        firstSlide.style.display = 'flex';\n\n      });\n\n    }\n\n  }, 2000));\n\n};\n\n\n\n\n//# sourceURL=webpack:///./src/functionality/switch.js?");

/***/ }),

/***/ "./src/functionality/toggle.js":
/*!*************************************!*\
  !*** ./src/functionality/toggle.js ***!
  \*************************************/
/*! exports provided: toggleSlides */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toggleSlides\", function() { return toggleSlides; });\n/* harmony import */ var _check__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./check */ \"./src/functionality/check.js\");\n/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter */ \"./src/functionality/filter.js\");\n\n\n\n// Handles switching between calculator slide and first slide while check returns false \"unlocked\"\nconst toggleSlides = () => {\n\n  const borrower = document.querySelector('#borrower');\n  const lender = document.querySelector('#lender');\n  const blArray = [borrower, lender];\n  // 'Do You Want To Be A' slide\n  const firstSlide = document.querySelector('#second').firstChild;\n  // calculator slide\n  const secondSlide = document.querySelector('#second').lastChild;\n  const backButton = document.querySelector('#back');\n  const howMuchText = document.querySelector('#how-much');\n  const numInput = document.querySelector('#num-input');\n  const pay = document.querySelector('#pay');\n  const weekOne = document.querySelector('#week-one');\n  const weekTwo = document.querySelector('#week-two');\n  const month = document.querySelector('#month');\n\n  // Populate second slide based on which path ('BORROWER' or 'LENDER') was clicked on\n  if (Object(_check__WEBPACK_IMPORTED_MODULE_0__[\"check\"])() !== true) {\n    // if lock symbol is already on \"unlock\"\n    blArray.forEach((el) => {\n      // populate second slide text / calculations with the correct path chosen\n      el.addEventListener('click', (e) => {\n\n        firstSlide.style.display = 'none';\n\n        secondSlide.style.display = 'flex';\n\n        howMuchText.textContent = `How much would you like to ${Object(_filter__WEBPACK_IMPORTED_MODULE_1__[\"filterString\"])('ER', e.target.innerText)}?`;\n        howMuchText.style.fontVariant = 'small-caps';\n        howMuchText.style.paddingTop = '5vh';\n        howMuchText.style.borderBottom = '0.3vh solid black';\n        // clear slides' content\n        backButton.addEventListener('click', () => {\n\n          numInput.value = '';\n\n          pay.textContent = '';\n\n          weekOne.textContent = '';\n\n          weekTwo.textContent = '';\n\n          month.textContent = '';\n\n          secondSlide.style.display = 'none';\n\n          firstSlide.style.display = 'flex';\n\n        });\n\n      });\n\n    });\n\n  }\n\n};\n\n\n\n\n//# sourceURL=webpack:///./src/functionality/toggle.js?");

/***/ }),

/***/ "./src/functionality/unlock.js":
/*!*************************************!*\
  !*** ./src/functionality/unlock.js ***!
  \*************************************/
/*! exports provided: unlock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"unlock\", function() { return unlock; });\n// No modal popup for returning visitors\nconst unlock = () => {\n\n  if (window.location.href.includes('/calculator')) {\n\n    const lockSymbol = document.querySelector('#symbol');\n    lockSymbol.classList.replace('fa-lock', 'fa-unlock');\n\n  }\n\n};\n\n\n\n\n//# sourceURL=webpack:///./src/functionality/unlock.js?");

/***/ }),

/***/ "./src/functionality/validity.js":
/*!***************************************!*\
  !*** ./src/functionality/validity.js ***!
  \***************************************/
/*! exports provided: validateEmail, emailIsValid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"validateEmail\", function() { return validateEmail; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"emailIsValid\", function() { return emailIsValid; });\n// Helper function to asure user is entering an email\nconst validateEmail = email => /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email);\n// Toggle email validity indicator\nconst emailIsValid = () => {\n\n  const input = document.querySelector('#email-input');\n  const icon = document.querySelector('#exclamation-icon');\n  const button = document.querySelector('#email-button');\n\n  if (validateEmail(input.value) === true) {\n    // if email is valid replace icon with a check indicator\n    icon.classList.remove('fa-exclamation-triangle');\n    icon.className = 'fas fa-check';\n\n    button.className = 'button is-success';\n\n  } else {\n\n    icon.className = 'fas fa-exclamation-triangle';\n\n    button.className = 'button is-warning';\n\n  }\n\n};\n\n\n\n\n//# sourceURL=webpack:///./src/functionality/validity.js?");

/***/ }),

/***/ "./src/render/render.js":
/*!******************************!*\
  !*** ./src/render/render.js ***!
  \******************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* DIVIDER */\n\n// Background\nconst addBackground = () => {\n\n  const body = document.querySelector('body');\n  body.style.backgroundImage = \"url('./images/white.jpg')\";\n  body.style.backgroundSize = 'cover';\n  body.style.backgroundRepeat = 'no-repeat';\n  \n};\n\n// Rendering AND Styling\nconst renderDivider = () => {\n\n  const divider = document.querySelector('.divider');\n  divider.style.width = '100vw';\n  divider.style.height = '10vh';\n\n};\n\n// Slogan\nconst renderSection = () => {\n\n  const section = document.querySelector('section');\n  section.className = 'hero is-small';\n\n  const body = document.createElement('div');\n  body.className = 'hero-body';\n\n  const container = document.createElement('div');\n  container.className = 'container';\n  container.style.textAlign = 'center';\n\n  const sloganOne = document.createElement('h1');\n  sloganOne.className = 'title is-1';\n  sloganOne.textContent = 'Get money when needed';\n  sloganOne.style.fontVariant = 'small-caps';\n  sloganOne.style.color = '#417505';\n  sloganOne.style.letterSpacing = '0.5vw';\n  sloganOne.classList.add('animated', 'fadeInLeft', 'slow');\n\n  const sloganTwo = document.createElement('h1');\n  sloganTwo.className = 'title is-1';\n  sloganTwo.textContent = 'OR';\n  sloganTwo.style.color = '#417505';\n  sloganTwo.style.letterSpacing = '0.25vw';\n  sloganTwo.classList.add('animated', 'fadeInLeft', 'slow', 'delay-1s');\n\n  const sloganThree = document.createElement('h1');\n  sloganThree.className = 'title is-1';\n  sloganThree.textContent = 'Earn money by lending';\n  sloganThree.style.fontVariant = 'small-caps';\n  sloganThree.style.color = '#417505';\n  sloganThree.style.letterSpacing = '0.5vw';\n  sloganThree.classList.add('animated', 'fadeInLeft', 'slow', 'delay-2s');\n\n  container.appendChild(sloganOne);\n\n  container.appendChild(sloganTwo);\n\n  container.appendChild(sloganThree);\n\n  body.appendChild(container);\n\n  section.appendChild(body);\n\n};\n\n/* FIRST CONTAINER */\n\n// Rendering & Styling\nconst renderFirst = () => {\n\n  const first = document.querySelector('#first');\n  first.style.display = 'flex';\n  first.style.flexDirection = 'row';\n  first.style.justifyContent = 'space-between';\n\n};\n\n// Adding divs for the logo, coming soon, and an about-me\nconst renderFirstChildren = () => {\n\n  const first = document.querySelector('#first');\n\n  const logo = document.createElement('div');\n  logo.id = 'logo';\n\n  const img = document.createElement('img');\n  img.src = './images/logo.png';\n  img.style.paddingRight = '10vw';\n\n  logo.appendChild(img);\n\n  const comingSoon = document.createElement('div');\n  comingSoon.className = 'block';\n  comingSoon.id = 'coming-soon';\n\n  const soonText = document.createElement('h1');\n  soonText.textContent = 'Coming Soon';\n\n  comingSoon.style.paddingLeft = '10vw';\n  comingSoon.appendChild(soonText);\n\n  const firstArray = [logo, comingSoon];\n  firstArray.forEach(el => first.appendChild(el));\n\n  // Giving all divs in First Container a width and a height\n  firstArray.forEach((el) => {\n\n    const divs = el;\n    divs.style.width = '25vw';\n    divs.style.height = '25vh';\n    divs.className = 'title is-4';\n    divs.style.display = 'flex';\n    divs.style.flexDirection = 'column';\n    divs.style.justifyContent = 'center';\n    divs.style.alignItems = 'center';\n    divs.style.textAlign = 'center';\n\n  });\n\n  firstArray[1].innerText = 'Coming Soon...';\n\n};\n\n/* SECOND CONTAINER */\n\n// Rendering AND Styling\nconst renderSecond = () => {\n\n  const second = document.querySelector('#second');\n  second.style.display = 'flex';\n  second.style.flexDirection = 'column';\n  second.style.justifyContent = 'space-evenly';\n\n};\n\n// Render Modal\nconst renderModal = () => {\n\n  const field = document.createElement('div');\n  field.className = 'field has-addons';\n\n  const controlOne = document.createElement('div');\n  controlOne.className = 'control has-icons-left has-icons-right';\n\n  const input = document.createElement('input');\n  input.type = 'email';\n  input.className = 'input is-medium';\n  input.placeholder = 'Enter your email';\n  input.id = 'email-input';\n\n  const spanOne = document.createElement('span');\n  spanOne.className = 'icon is-small is-left';\n\n  const iconOne = document.createElement('i');\n  iconOne.className = 'fas fa-envelope';\n\n  const spanTwo = document.createElement('span');\n  spanTwo.className = 'icon is-small is-right';\n\n  const iconTwo = document.createElement('i');\n  iconTwo.className = 'fas fa-exclamation-triangle';\n  iconTwo.id = 'exclamation-icon';\n\n  const controlTwo = document.createElement('div');\n  controlTwo.className = 'control buttons are-medium';\n\n  const button = document.createElement('button');\n  button.type = 'submit';\n  button.className = 'button is-success';\n  button.innerText = 'Early-Access';\n  button.id = 'email-button';\n\n  controlTwo.appendChild(button);\n\n  spanOne.appendChild(iconOne);\n\n  spanTwo.appendChild(iconTwo);\n\n  controlOne.appendChild(input);\n\n  controlOne.appendChild(spanOne);\n\n  controlOne.appendChild(spanTwo);\n\n  field.appendChild(controlOne);\n\n  field.appendChild(controlTwo);\n\n  return field;\n\n};\n// Second container will serve two interactive slides\nconst renderSecondChildren = () => {\n\n  const second = document.querySelector('#second');\n  const secondOne = document.createElement('div');\n  const secondTwo = document.createElement('div');\n  const secondArray = [secondOne, secondTwo];\n\n  secondArray.forEach(el => second.appendChild(el));\n\n  // FIRST SLIDE\n  secondArray[0].style.display = 'flex';\n  secondArray[0].style.flexDirection = 'row';\n  secondArray[0].style.justifyContent = 'center';\n  secondArray[0].style.justifyContent = 'space-evenly';\n  secondArray[0].style.flexWrap = 'wrap';\n\n  // Adding text and two clickable divs(buttons)\n  // \"Do you want to be a\" TEXT\n  const become = document.createElement('div');\n  become.style.marginTop = '10vh';\n  become.style.marginBottom = '10vh';\n  become.className = 'block has-icons-left';\n\n  const becomeText = document.createElement('h1');\n  becomeText.textContent = 'Do you want to be a';\n  becomeText.style.fontVariant = 'small-caps';\n  becomeText.className = 'subtitle is-4';\n\n  // Lock Icon\n  const lock = document.createElement('span');\n  lock.className = 'icon is-small is-left';\n  lock.style.paddingBottom = '5vh';\n  lock.id = 'lock';\n\n  const symbol = document.createElement('i');\n  symbol.className = 'fas fa-lock fa-2x';\n  symbol.id = 'symbol';\n\n  lock.appendChild(symbol);\n\n  become.appendChild(lock);\n\n  become.appendChild(becomeText);\n\n  // BORROWER Div(button) -LEFT\n  const borrower = document.createElement('div');\n  borrower.className = 'button is-dark is-rounded';\n  borrower.style.backgroundColor = '#7E0032';\n  borrower.style.color = 'white';\n  borrower.id = 'borrower';\n\n  // OR Text\n  const or = document.createElement('div');\n  or.className = 'block';\n  or.innerText = 'OR';\n  or.className = 'title is-1';\n\n  // LENDER Div(button) -RIGHT\n  const lender = document.createElement('div');\n  lender.className = 'button is-dark is-rounded';\n  lender.style.backgroundColor = '#7E0032';\n  lender.style.color = 'white';\n  lender.id = 'lender';\n\n  // Modal pop-up\n  const modal = document.createElement('div');\n  modal.className = 'block';\n  modal.id = 'modal';\n\n  // \"Get the numbers & early access\" TEXT\n  const pitchBox = document.createElement('div');\n  pitchBox.className = 'block';\n  pitchBox.style.paddingTop = '10vh';\n  pitchBox.style.paddingBottom = '10vh';\n\n  const pitchText = document.createElement('h1');\n  pitchText.textContent = 'Get the numbers & early access!';\n  pitchText.style.borderBottom = '0.3vh solid white';\n  pitchText.style.fontVariant = 'small-caps';\n  pitchText.style.color = 'white';\n  pitchText.style.letterSpacing = '0.5vw';\n  pitchText.className = 'title is-1';\n  pitchText.classList.add('animated', 'fadeInLeft', 'slow');\n  pitchText.id = 'modal-text';\n\n  pitchBox.appendChild(pitchText);\n\n  modal.appendChild(pitchBox);\n\n  modal.appendChild(renderModal());\n\n  const secondOneArray = [modal, become, borrower, or, lender];\n  secondOneArray.forEach(el => secondArray[0].appendChild(el));\n\n  secondOneArray.forEach((el) => {\n\n    const divs = el;\n    divs.style.width = '30%';\n    divs.style.height = '20vh';\n    divs.style.display = 'flex';\n    divs.style.flexDirection = 'column';\n    divs.style.justifyContent = 'center';\n    divs.style.alignItems = 'center';\n\n  });\n\n  // Modal\n  secondOneArray[0].style.width = '100vw';\n  secondOneArray[0].style.height = '56.25vh';\n  secondOneArray[0].style.marginTop = '7vh';\n  secondOneArray[0].style.zIndex = '5';\n  secondOneArray[0].style.backgroundColor = 'rgb(54, 54, 54, 0.9)';\n  secondOneArray[0].style.display = 'none';\n  secondOneArray[0].style.justifyContent = 'flex-start';\n\n  // Become text\n  secondOneArray[1].style.width = '75vw';\n  secondOneArray[1].style.height = '10vh';\n\n  // Borrower div\n  secondOneArray[2].style.boxShadow = '0 2px 25px rgba(54, 54, 54, 1)';\n  secondOneArray[2].innerText = 'BORROWER';\n  secondOneArray[2].style.fontSize = '3vw';\n  secondOneArray[2].style.fontWeight = 'bolder';\n\n  // OR\n  secondOneArray[3].style.color = '#417505';\n  secondOneArray[3].style.fontWeight = 'bolder';\n\n  // Lender div\n  secondOneArray[4].style.boxShadow = '0 2px 25px rgba(54, 54, 54, 1)';\n  secondOneArray[4].innerText = 'LENDER';\n  secondOneArray[4].style.fontSize = '3vw';\n  secondOneArray[4].style.fontWeight = 'bolder';\n\n  // SECOND SLIDE\n  secondArray.className = 'block';\n  secondArray[1].style.height = '56.25vh';\n  secondArray[1].style.backgroundColor = 'transparent';\n  secondArray[1].style.display = 'none';\n  secondArray[1].style.flexDirection = 'column';\n  secondArray[1].style.alignItems = 'center';\n  secondArray[1].style.alignItems = 'space-evenly';\n\n  // Adding text/question, input field, submit button, and three lines for the results\n  const howMuch = document.createElement('div');\n  howMuch.className = 'block';\n\n  const howMuchText = document.createElement('h1');\n  howMuchText.className = 'title';\n  howMuchText.id = 'how-much';\n  howMuch.appendChild(howMuchText);\n\n  const input = document.createElement('div');\n  input.className = 'block';\n\n  const field = document.createElement('div');\n  field.className = 'field';\n\n  const control = document.createElement('div');\n  control.className = 'control has-icons-left';\n\n  const numInput = document.createElement('input');\n  numInput.className = 'input is-success';\n  numInput.id = 'num-input';\n  numInput.type = 'number';\n  numInput.placeholder = 'Enter amount';\n\n  const span = document.createElement('span');\n  span.className = 'icon is-small is-left';\n\n  const icon = document.createElement('i');\n  icon.className = 'fas fa-wallet';\n\n  span.appendChild(icon);\n\n  control.appendChild(numInput);\n\n  control.appendChild(span);\n\n  field.appendChild(control);\n\n  input.appendChild(field);\n\n  const weekOne = document.createElement('h2');\n  weekOne.className = 'subtitle';\n  weekOne.id = 'week-one';\n\n  const weekTwo = document.createElement('h2');\n  weekTwo.className = 'subtitle';\n  weekTwo.id = 'week-two';\n\n  const month = document.createElement('h2');\n  month.className = 'subtitle';\n  month.id = 'month';\n\n  const pay = document.createElement('h1');\n  pay.className = 'subtitle';\n  pay.id = 'pay';\n\n  const backButton = document.createElement('button');\n  backButton.className = 'button is-dark';\n  backButton.textContent = 'Back';\n  backButton.id = 'back';\n\n  const secondTwoArray = [howMuch, input, pay, weekOne, weekTwo, month, backButton];\n  secondTwoArray.forEach(el => secondArray[1].appendChild(el));\n\n  secondTwoArray.forEach((el) => {\n\n    const divs = el;\n    divs.style.width = '25%';\n    divs.style.height = '10vh';\n\n  });\n\n  // How much text\n  secondTwoArray[0].style.width = '75%';\n  secondTwoArray[0].style.height = '10vh';\n  secondTwoArray[0].style.display = 'flex';\n  secondTwoArray[0].style.justifyContent = 'center';\n  secondTwoArray[0].style.alignItems = 'center';\n\n  // Number Input\n  secondTwoArray[1].style.width = '25%';\n  secondTwoArray[1].style.height = '5vh';\n\n  // Back Button\n  secondTwoArray[6].style.width = '5vw';\n\n};\n\n/* THIRD CONTAINER */\nconst renderThird = () => {\n\n  const third = document.querySelector('#third');\n  third.style.width = '100vw';\n  third.style.height = '30vh';\n  third.style.display = 'flex';\n  third.style.flexDirection = 'row';\n  third.style.justifyContent = 'center';\n\n};\n\n// Adding three small containers EACH containing\n// Small logo, text/title, and description\nconst renderThirdChildren = () => {\n\n  const third = document.querySelector('#third');\n  const thirdArray = [];\n\n  for (let i = 0; i <= 2; i += 1) {\n\n    thirdArray.push(document.createElement('div'));\n\n  }\n\n  for (let j = 0; j <= thirdArray.length - 1; j += 1) {\n\n    third.appendChild(thirdArray[j]);\n    thirdArray.forEach(el => el.appendChild(document.createElement('div')));\n\n  }\n\n  for (let x = 0; x <= thirdArray.length - 1; x += 1) {\n\n    for (let y = 0; y <= thirdArray.length - 1; y += 1) {\n\n      thirdArray[x].childNodes[y].style.width = '5%';\n      thirdArray[x].childNodes[y].style.height = '5%';\n      thirdArray[x].childNodes[y].style.display = 'flex';\n      thirdArray[x].childNodes[y].style.flexDirection = 'column';\n      thirdArray[x].childNodes[y].style.justifyContent = 'center';\n      thirdArray[x].childNodes[y].style.alignItems = 'center';\n\n    }\n\n    thirdArray[x].style.width = '33%';\n    thirdArray[x].style.height = '25vh';\n    thirdArray[x].style.backgroundColor = 'transparent';\n    thirdArray[x].style.textAlign = 'center';\n    thirdArray[x].style.display = 'flex';\n    thirdArray[x].style.flexDirection = 'column';\n    thirdArray[x].style.justifyContent = 'space-evenly';\n    thirdArray[x].style.alignItems = 'center';\n    thirdArray[x].className = 'box';\n\n  }\n\n};\n\n// Icons\nconst renderIcons = () => {\n\n  const third = document.querySelector('#third');\n  const calendar = document.createElement('i');\n\n  calendar.className = 'far fa-calendar-alt fa-2x';\n  third.childNodes[0].firstChild.appendChild(calendar);\n\n  const money = document.createElement('i');\n  money.className = 'fas fa-dollar-sign fa-2x';\n\n  third.childNodes[1].firstChild.appendChild(money);\n\n  const shield = document.createElement('i');\n  shield.className = 'fas fa-shield-alt fa-2x';\n  third.childNodes[2].firstChild.appendChild(shield);\n};\n\n// Titles\nconst renderTitles = () => {\n\n  const third = document.querySelector('#third');\n  third.childNodes.forEach((el) => {\n\n    const child = el;\n    child.childNodes[1].style.width = '50%';\n    child.childNodes[1].style.height = '10%';\n\n  });\n\n  const calendarTitle = document.createElement('h2');\n  calendarTitle.textContent = 'Calendar';\n  calendarTitle.className = 'title is-5';\n\n  third.childNodes[0].childNodes[1].appendChild(calendarTitle);\n\n  const moneyTitle = document.createElement('h2');\n  moneyTitle.textContent = 'Earnings';\n  moneyTitle.className = 'title is-5';\n\n  third.childNodes[1].childNodes[1].appendChild(moneyTitle);\n\n  const shieldTitle = document.createElement('h2');\n  shieldTitle.textContent = 'Security';\n  shieldTitle.className = 'title is-5';\n\n  third.childNodes[2].childNodes[1].appendChild(shieldTitle);\n  \n};\n\n// Info\nconst renderInfo = () => {\n\n  const third = document.querySelector('#third');\n\n  third.childNodes.forEach((el) => {\n\n    const child = el;\n    child.childNodes[2].style.width = '100%';\n    child.childNodes[2].style.height = '30%';\n\n  });\n\n  const calendarInfo = document.createElement('h2');\n  calendarInfo.textContent = `Choose the most convenient\n  timeframe that works for you.`;\n  calendarInfo.className = 'subtitle is-5';\n\n  third.childNodes[0].childNodes[2].appendChild(calendarInfo);\n\n  const moneyInfo = document.createElement('h2');\n  moneyInfo.textContent = `Earn interest on your money\n  in as little as a week!`;\n  moneyInfo.className = 'subtitle is-5';\n\n  third.childNodes[1].childNodes[2].appendChild(moneyInfo);\n\n  const shieldInfo = document.createElement('h2');\n  shieldInfo.textContent = `Don't worry, your account is\n  secured.`;\n  shieldInfo.className = 'subtitle is-5';\n\n  third.childNodes[2].childNodes[2].appendChild(shieldInfo);\n\n};\n\n// Footer Text\nconst renderFooter = () => {\n\n  const footer = document.querySelector('#footer');\n  const contact = document.createElement('h1');\n  const email = document.createElement('a');\n  const spotLLC = document.createElement('h1');\n\n  footer.style.width = '100%';\n  footer.style.height = '5vh';\n  footer.style.display = 'flex';\n  footer.style.flexDirection = 'row';\n  footer.style.justifyContent = 'space-between';\n\n  contact.textContent = 'Contact - ';\n  contact.className = 'title is-6';\n\n  email.href = 'mailto: info@spotme.cloud';\n  email.textContent = 'info@spotme.cloud';\n  email.style.color = '#7E0032';\n\n  spotLLC.textContent = '© 2019 SpotMe LLC ';\n  spotLLC.className = 'title is-6';\n\n  contact.appendChild(email);\n\n  footer.appendChild(contact);\n\n  footer.appendChild(spotLLC);\n\n};\n\nconst render = () => {\n\n  addBackground();\n  renderDivider();\n  renderSection();\n  renderFirst();\n  renderFirstChildren();\n  renderSecond();\n  renderSecondChildren();\n  renderThird();\n  renderThirdChildren();\n  renderIcons();\n  renderTitles();\n  renderInfo();\n  renderFooter();\n\n};\n\n\n\n\n//# sourceURL=webpack:///./src/render/render.js?");

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _render_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render/render */ \"./src/render/render.js\");\n/* harmony import */ var _functionality_check__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functionality/check */ \"./src/functionality/check.js\");\n/* harmony import */ var _functionality_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functionality/modal */ \"./src/functionality/modal.js\");\n/* harmony import */ var _functionality_toggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./functionality/toggle */ \"./src/functionality/toggle.js\");\n/* harmony import */ var _functionality_validity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./functionality/validity */ \"./src/functionality/validity.js\");\n/* harmony import */ var _functionality_save__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./functionality/save */ \"./src/functionality/save.js\");\n/* harmony import */ var _functionality_calculations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./functionality/calculations */ \"./src/functionality/calculations.js\");\n/* harmony import */ var _functionality_unlock__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./functionality/unlock */ \"./src/functionality/unlock.js\");\n/* harmony import */ var _functionality_mobile__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./functionality/mobile */ \"./src/functionality/mobile.js\");\n/* IMPORTS */\n\n\n\n\n\n\n\n\n\n\n// Render Page\nObject(_render_render__WEBPACK_IMPORTED_MODULE_0__[\"render\"])();\n\n// Checking for lock status ; locked or unlocked\nsetInterval(_functionality_check__WEBPACK_IMPORTED_MODULE_1__[\"check\"], 500);\n\n// Modal pop-up once 'BORROWER' or 'LENDER' is clicked\nObject(_functionality_modal__WEBPACK_IMPORTED_MODULE_2__[\"triggerModal\"])();\n\n// Toggle between first and second slide\nsetInterval(_functionality_toggle__WEBPACK_IMPORTED_MODULE_3__[\"toggleSlides\"], 1000);\n\n// Toggle email validity indicator\nsetInterval(_functionality_validity__WEBPACK_IMPORTED_MODULE_4__[\"emailIsValid\"], 500);\n\n// Send POST request to express server with inputted email\nObject(_functionality_save__WEBPACK_IMPORTED_MODULE_5__[\"save\"])();\n\n// Apply necessary calculations based on which path was chosen\nObject(_functionality_calculations__WEBPACK_IMPORTED_MODULE_6__[\"applyCalc\"])();\n\n// Unlocked feature for returning visitors\nObject(_functionality_unlock__WEBPACK_IMPORTED_MODULE_7__[\"unlock\"])();\n\n// When users visit site on their Phone\nObject(_functionality_mobile__WEBPACK_IMPORTED_MODULE_8__[\"isMobile\"])();\n\n\n//# sourceURL=webpack:///./src/script.js?");

/***/ })

/******/ });