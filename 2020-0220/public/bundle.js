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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst title_1 = __webpack_require__(/*! scene/title */ \"./src/scene/title.ts\");\nconst sceneManager_1 = __webpack_require__(/*! lib/sceneManager */ \"./src/lib/sceneManager.ts\");\nonload = () => {\n    sceneManager_1.default.init(new title_1.default(), 1080, 720);\n    sceneManager_1.default.run();\n};\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/lib/camera.ts":
/*!***************************!*\
  !*** ./src/lib/camera.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst vec2_1 = __webpack_require__(/*! ./vec2 */ \"./src/lib/vec2.ts\");\nconst inputMouse_1 = __webpack_require__(/*! ./inputMouse */ \"./src/lib/inputMouse.ts\");\nconst rect_1 = __webpack_require__(/*! ./rect */ \"./src/lib/rect.ts\");\nclass Camera {\n    static init(width, height) {\n        this.rect = new rect_1.default(vec2_1.default.zero(), width, height);\n    }\n    static getCameraPos() {\n        return this.rect.pos;\n    }\n    static move(v) {\n        this.rect.pos.addAssign(v);\n    }\n    static getPosInCamera(v) {\n        return v.sub(this.rect.pos);\n    }\n    static getMousePosInCamera() {\n        return inputMouse_1.InputMouse.getMousepos().add(this.rect.pos);\n    }\n    static getDistFromCetnerX(v) {\n        return this.getPosInCamera(v).x - this.rect.width / 2;\n    }\n    static getDistFromCetner(v) {\n        return new vec2_1.default(this.getPosInCamera(v).x - this.rect.width / 2, this.getPosInCamera(v).y - this.rect.height / 2);\n    }\n    static getCameraRect() {\n        return this.rect;\n    }\n}\nexports.default = Camera;\n\n\n//# sourceURL=webpack:///./src/lib/camera.ts?");

/***/ }),

/***/ "./src/lib/color.ts":
/*!**************************!*\
  !*** ./src/lib/color.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nclass Color {\n    constructor(r, g, b, a = 1) {\n        this.r = r;\n        this.g = g;\n        this.b = b;\n        this.a = a;\n    }\n    static black_color(a = 1) {\n        return new Color(0, 0, 0, a);\n    }\n    static red_color(r, a = 1) {\n        return new Color(r, 0, 0, a);\n    }\n    static green_color(g, a = 1) {\n        return new Color(0, g, 0, a);\n    }\n    static blue_color(b, a = 1) {\n        return new Color(0, 0, b, a);\n    }\n    toString() {\n        return 'rgba(' + this.r + ',' + this.g + ',' + this.b + ',' + this.a + ')';\n    }\n    getAlphaColor(a) {\n        return new Color(this.r, this.g, this.b, a);\n    }\n    deepCopy() {\n        return new Color(this.r, this.g, this.b, this.a);\n    }\n}\nexports.default = Color;\nColor.white = new Color(255, 255, 255);\nColor.red = new Color(255, 0, 0);\nColor.green = new Color(0, 255, 0);\nColor.blue = new Color(0, 0, 255);\nColor.black = new Color(0, 0, 0);\n\n\n//# sourceURL=webpack:///./src/lib/color.ts?");

/***/ }),

/***/ "./src/lib/drawManager.ts":
/*!********************************!*\
  !*** ./src/lib/drawManager.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst vec2_1 = __webpack_require__(/*! ./vec2 */ \"./src/lib/vec2.ts\");\nconst color_1 = __webpack_require__(/*! ./color */ \"./src/lib/color.ts\");\nconst camera_1 = __webpack_require__(/*! ./camera */ \"./src/lib/camera.ts\");\nconst util_1 = __webpack_require__(/*! ./util */ \"./src/lib/util.ts\");\nclass DrawManager {\n    static init(width, height) {\n        const canvas = document.createElement('canvas');\n        canvas.width = width;\n        canvas.height = height;\n        document.body.appendChild(canvas);\n        const ctx = canvas.getContext('2d');\n        if (ctx) {\n            this.ctx = ctx;\n        }\n        else {\n            console.error('Canvas is null');\n        }\n        this.cameraPos = new vec2_1.default(0, 0);\n    }\n    static clear() {\n        DrawManager.fillRect(camera_1.default.getCameraRect(), color_1.default.white);\n        DrawManager.strokeRect(camera_1.default.getCameraRect(), color_1.default.black, 3);\n    }\n    static setCameraPos(vec) {\n        this.cameraPos = vec;\n    }\n    static fillRect(rect, color) {\n        if (rect.collideRect(camera_1.default.getCameraRect())) {\n            this.ctx.beginPath();\n            this.rect(rect);\n            this.fillDraw(color);\n        }\n    }\n    static strokeRect(rect, color, width = 1) {\n        if (rect.collideRect(camera_1.default.getCameraRect())) {\n            this.ctx.beginPath();\n            this.rect(rect);\n            this.strokeDraw(color, width);\n        }\n    }\n    static rect(rect) {\n        const pos = rect.pos.sub(this.cameraPos);\n        this.ctx.rect(pos.x, pos.y, rect.width, rect.height);\n    }\n    static fillCircle(circle, color) {\n        this.ctx.beginPath();\n        this.circle(circle, 0, Math.PI * 2);\n        this.fillDraw(color);\n    }\n    static strokeCircle(circle, color, width = 1) {\n        this.ctx.beginPath();\n        this.circle(circle, 0, Math.PI * 2);\n        this.strokeDraw(color, width);\n    }\n    static fillArc(circle, start, end, color, width = 1) {\n        this.ctx.beginPath();\n        this.circle(circle, start, end);\n        this.fillDraw(color);\n    }\n    static strokeArc(circle, startDeg, endDeg, color, width = 1) {\n        this.ctx.beginPath();\n        this.circle(circle, util_1.degreeToRadian(startDeg), util_1.degreeToRadian(endDeg));\n        this.strokeDraw(color, width);\n    }\n    static circle(circle, start, end) {\n        const pos = circle.pos.sub(this.cameraPos);\n        this.ctx.arc(pos.x, pos.y, circle.radius, start, end, false);\n    }\n    static line(p1, p2, color, width = 1) {\n        this.ctx.beginPath();\n        const pos1 = p1.sub(this.cameraPos);\n        const pos2 = p2.sub(this.cameraPos);\n        this.ctx.moveTo(pos1.x, pos1.y);\n        this.ctx.lineTo(pos2.x, pos2.y);\n        this.strokeDraw(color, width);\n    }\n    static string(p, str, size, color) {\n        this.ctx.fillStyle = color.toString();\n        this.ctx.font = '' + size + \"px 'メイリオ'\";\n        const pos = p.sub(this.cameraPos);\n        this.ctx.fillText(str, pos.x, pos.y);\n    }\n    static fillDraw(color) {\n        if (color instanceof color_1.default) {\n            this.ctx.fillStyle = color.toString();\n        }\n        else {\n            this.ctx.fillStyle = color;\n        }\n        this.ctx.fill();\n    }\n    static strokeDraw(color, width) {\n        if (color instanceof color_1.default) {\n            this.ctx.strokeStyle = color.toString();\n        }\n        else {\n            this.ctx.strokeStyle = color;\n        }\n        this.ctx.lineWidth = width;\n        this.ctx.stroke();\n    }\n}\nexports.default = DrawManager;\n\n\n//# sourceURL=webpack:///./src/lib/drawManager.ts?");

/***/ }),

/***/ "./src/lib/inputKey.ts":
/*!*****************************!*\
  !*** ./src/lib/inputKey.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nclass InputKey {\n    static keyDown(ev) {\n        this.keyMap.set(keyCode[ev.key], true);\n        this.keyPress.set(keyCode[ev.key], true);\n    }\n    static keyUp(ev) {\n        this.keyMap.set(keyCode[ev.key], false);\n        this.keyPress.set(keyCode[ev.key], false);\n    }\n    static isKeyDown(code) {\n        const result = this.keyMap.get(code);\n        return result == undefined ? false : result;\n    }\n    static isKeyPressed(code) {\n        const result = this.keyPress.get(code);\n        this.keyPress.set(code, false);\n        return result == undefined ? false : result;\n    }\n}\nexports.InputKey = InputKey;\nInputKey.keyMap = new Map();\nInputKey.keyPress = new Map();\ndocument.onkeydown = e => {\n    console.log(e.key);\n    InputKey.keyDown(e);\n};\ndocument.onkeyup = e => {\n    InputKey.keyUp(e);\n};\nvar KeyCode;\n(function (KeyCode) {\n    KeyCode[KeyCode[\"A\"] = 0] = \"A\";\n    KeyCode[KeyCode[\"D\"] = 1] = \"D\";\n    KeyCode[KeyCode[\"S\"] = 2] = \"S\";\n    KeyCode[KeyCode[\"W\"] = 3] = \"W\";\n    KeyCode[KeyCode[\"Z\"] = 4] = \"Z\";\n    KeyCode[KeyCode[\"X\"] = 5] = \"X\";\n    KeyCode[KeyCode[\"T\"] = 6] = \"T\";\n    KeyCode[KeyCode[\"Up\"] = 7] = \"Up\";\n    KeyCode[KeyCode[\"Down\"] = 8] = \"Down\";\n    KeyCode[KeyCode[\"Left\"] = 9] = \"Left\";\n    KeyCode[KeyCode[\"Right\"] = 10] = \"Right\";\n})(KeyCode = exports.KeyCode || (exports.KeyCode = {}));\nconst keyCode = {\n    a: KeyCode.A,\n    d: KeyCode.D,\n    s: KeyCode.S,\n    w: KeyCode.W,\n    z: KeyCode.Z,\n    x: KeyCode.X,\n    t: KeyCode.T,\n    ArrowUp: KeyCode.Up,\n    ArrowDown: KeyCode.Down,\n    ArrowLeft: KeyCode.Left,\n    ArrowRight: KeyCode.Right,\n};\n\n\n//# sourceURL=webpack:///./src/lib/inputKey.ts?");

/***/ }),

/***/ "./src/lib/inputMouse.ts":
/*!*******************************!*\
  !*** ./src/lib/inputMouse.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst vec2_1 = __webpack_require__(/*! ./vec2 */ \"./src/lib/vec2.ts\");\nconst sceneManager_1 = __webpack_require__(/*! ./sceneManager */ \"./src/lib/sceneManager.ts\");\nclass InputMouse {\n    static getMousepos() {\n        return this.mousePos;\n    }\n    static isMouseLeftDown() {\n        return this.mouseInput[0];\n    }\n    static setMousePos(pos) {\n        this.mousePos = pos;\n    }\n    static mouseDown() {\n        this.mouseInput[0] = true;\n    }\n    static mouseUp() {\n        this.mouseInput[0] = false;\n    }\n}\nexports.InputMouse = InputMouse;\nInputMouse.mouseInput = Array(2);\ndocument.onmousemove = e => {\n    InputMouse.setMousePos(new vec2_1.default(e.offsetX, e.offsetY));\n};\ndocument.onmousedown = () => {\n    console.log(sceneManager_1.default.getScreen());\n    if (sceneManager_1.default.getScreen().inVec2(InputMouse.getMousepos())) {\n        InputMouse.mouseDown();\n    }\n};\ndocument.onmouseup = () => {\n    InputMouse.mouseUp();\n};\n\n\n//# sourceURL=webpack:///./src/lib/inputMouse.ts?");

/***/ }),

/***/ "./src/lib/rect.ts":
/*!*************************!*\
  !*** ./src/lib/rect.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst util_1 = __webpack_require__(/*! ./util */ \"./src/lib/util.ts\");\nclass Rect {\n    constructor(pos, width, height) {\n        this.pos = pos;\n        this.width = width;\n        this.height = height;\n    }\n    inVec2(pos) {\n        return (util_1.between(this.pos.x, pos.x, this.pos.x + this.width) &&\n            util_1.between(this.pos.y, pos.y, this.pos.y + this.height));\n    }\n    collideRect(rect) {\n        return Math.abs(rect.pos.x - this.pos.x) < rect.width + this.width / 2 &&\n            Math.abs(rect.pos.y - this.pos.y) < rect.height + this.height / 2;\n    }\n}\nexports.default = Rect;\n\n\n//# sourceURL=webpack:///./src/lib/rect.ts?");

/***/ }),

/***/ "./src/lib/sceneManager.ts":
/*!*********************************!*\
  !*** ./src/lib/sceneManager.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst drawManager_1 = __webpack_require__(/*! ./drawManager */ \"./src/lib/drawManager.ts\");\nconst camera_1 = __webpack_require__(/*! ./camera */ \"./src/lib/camera.ts\");\nconst rect_1 = __webpack_require__(/*! ./rect */ \"./src/lib/rect.ts\");\nconst vec2_1 = __webpack_require__(/*! ./vec2 */ \"./src/lib/vec2.ts\");\nclass SceneManager {\n    static init(scene, width, height) {\n        drawManager_1.default.init(width, height);\n        camera_1.default.init(width, height);\n        this.current = scene;\n        this.screen = new rect_1.default(new vec2_1.default(0, 0), width, height);\n    }\n    static run() {\n        this.current.draw();\n        this.current = this.current.update();\n        requestAnimationFrame(() => this.run());\n    }\n    static getScreen() {\n        return this.screen;\n    }\n}\nexports.default = SceneManager;\n\n\n//# sourceURL=webpack:///./src/lib/sceneManager.ts?");

/***/ }),

/***/ "./src/lib/util.ts":
/*!*************************!*\
  !*** ./src/lib/util.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nfunction between(x, y, z) {\n    return x <= y && y <= z;\n}\nexports.between = between;\nfunction radianToDegree(radian) {\n    return (radian * 180) / Math.PI;\n}\nexports.radianToDegree = radianToDegree;\nfunction degreeToRadian(degree) {\n    return (degree * Math.PI) / 180;\n}\nexports.degreeToRadian = degreeToRadian;\n\n\n//# sourceURL=webpack:///./src/lib/util.ts?");

/***/ }),

/***/ "./src/lib/vec2.ts":
/*!*************************!*\
  !*** ./src/lib/vec2.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst util_1 = __webpack_require__(/*! ./util */ \"./src/lib/util.ts\");\nclass Vec2 {\n    constructor(x, y) {\n        this.x = x;\n        this.y = y;\n    }\n    static zero() {\n        return new Vec2(0, 0);\n    }\n    add(p) {\n        return new Vec2(this.x + p.x, this.y + p.y);\n    }\n    addAssign(p) {\n        this.x += p.x;\n        this.y += p.y;\n    }\n    sub(p) {\n        return new Vec2(this.x - p.x, this.y - p.y);\n    }\n    subAssign(p) {\n        this.x -= p.x;\n        this.y -= p.y;\n    }\n    dist(p) {\n        const dx = this.x - p.x;\n        const dy = this.y - p.y;\n        return Math.sqrt(dx * dx + dy * dy);\n    }\n    scalarMul(s) {\n        return new Vec2(s * this.x, s * this.y);\n    }\n    static cosSin(degree) {\n        return new Vec2(Math.cos(util_1.degreeToRadian(degree)), Math.sin(util_1.degreeToRadian(degree)));\n    }\n    deepCopy() {\n        return new Vec2(this.x, this.y);\n    }\n    normalize() {\n        const d = this.dist(Vec2.zero());\n        return new Vec2(this.x / d, this.y / d);\n    }\n}\nexports.default = Vec2;\n\n\n//# sourceURL=webpack:///./src/lib/vec2.ts?");

/***/ }),

/***/ "./src/scene/game/game.ts":
/*!********************************!*\
  !*** ./src/scene/game/game.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst vec2_1 = __webpack_require__(/*! lib/vec2 */ \"./src/lib/vec2.ts\");\nconst drawManager_1 = __webpack_require__(/*! lib/drawManager */ \"./src/lib/drawManager.ts\");\nconst camera_1 = __webpack_require__(/*! lib/camera */ \"./src/lib/camera.ts\");\nconst rect_1 = __webpack_require__(/*! lib/rect */ \"./src/lib/rect.ts\");\nconst color_1 = __webpack_require__(/*! lib/color */ \"./src/lib/color.ts\");\nconst inputKey_1 = __webpack_require__(/*! lib/inputKey */ \"./src/lib/inputKey.ts\");\nclass Game {\n    constructor() {\n        this.numbers = [];\n        this.pos = vec2_1.default.zero();\n        this.size = 80;\n        this.xnum = 50;\n        this.ynum = 50;\n        this.target = [this.xnum / 2, this.ynum / 2];\n        this.mode = false;\n        this.checks = [];\n        this.checking = [];\n        this.po = [2, 0, 2, 0, 0, 2, 2, 0];\n        this.time = 10 * 60;\n        this.score = 0;\n        for (let i = 0; i < this.xnum; i++) {\n            let po = [];\n            for (let j = 0; j < this.ynum; j++) {\n                const random = Math.random();\n                if (random <= 0.45) {\n                    po.push(2);\n                }\n                else if (random <= 0.9) {\n                    po.push(0);\n                }\n                else {\n                    po.push(Math.floor(Math.random() * 10));\n                }\n            }\n            this.numbers.push(po);\n        }\n    }\n    draw() {\n        drawManager_1.default.clear();\n        drawManager_1.default.setCameraPos(camera_1.default.getCameraPos());\n        drawManager_1.default.clear();\n        for (let i = 0; i < this.numbers.length; i++) {\n            for (let j = 0; j < this.numbers[i].length; j++) {\n                const pos = new vec2_1.default(i * this.size, j * this.size);\n                drawManager_1.default.strokeRect(new rect_1.default(pos, this.size, this.size), color_1.default.black);\n                drawManager_1.default.string(pos.add(new vec2_1.default(this.size / 4, this.size / 4 * 3)), String(this.numbers[i][j]), this.size / 3 * 2, color_1.default.black);\n            }\n        }\n        for (const [x, y] of this.checks) {\n            drawManager_1.default.fillRect(new rect_1.default(new vec2_1.default(x * this.size, y * this.size), this.size, this.size), new color_1.default(255, 100, 100, 0.3));\n        }\n        for (const [x, y] of this.checking) {\n            drawManager_1.default.fillRect(new rect_1.default(new vec2_1.default(x * this.size, y * this.size), this.size, this.size), new color_1.default(255, 0, 0, 0.5));\n        }\n        drawManager_1.default.strokeRect(new rect_1.default(this.pos, this.size, this.size), color_1.default.red, 3);\n        //console.log(this.target)\n        const timePos = new vec2_1.default(800, 50).add(camera_1.default.getCameraPos());\n        drawManager_1.default.fillRect(new rect_1.default(timePos, 250, 70), color_1.default.white);\n        drawManager_1.default.strokeRect(new rect_1.default(timePos, 250, 70), color_1.default.green, 3);\n        drawManager_1.default.string(timePos.add(new vec2_1.default(this.size / 4, this.size / 4 * 3)), \"time:\" + String(Math.floor(this.time / 60)), this.size / 3 * 2, color_1.default.black);\n        const scorePos = new vec2_1.default(50, 50).add(camera_1.default.getCameraPos());\n        drawManager_1.default.fillRect(new rect_1.default(scorePos, 300, 70), color_1.default.white);\n        drawManager_1.default.strokeRect(new rect_1.default(scorePos, 300, 70), new color_1.default(255, 255, 0), 3);\n        drawManager_1.default.string(scorePos.add(new vec2_1.default(this.size / 4, this.size / 4 * 3)), \"score:\" + String(Math.floor(this.score)), this.size / 3 * 2, color_1.default.black);\n        if (this.time < 60) {\n            const scorePos = new vec2_1.default(425, 450).add(camera_1.default.getCameraPos());\n            drawManager_1.default.fillRect(new rect_1.default(scorePos, 250, 70), color_1.default.white);\n            drawManager_1.default.strokeRect(new rect_1.default(scorePos, 250, 70), color_1.default.blue, 3);\n            drawManager_1.default.string(scorePos.add(new vec2_1.default(this.size / 4, this.size / 4 * 3)), \"T: tweet\", this.size / 3 * 2, color_1.default.black);\n        }\n    }\n    update() {\n        if (this.time < 60) {\n            if (inputKey_1.InputKey.isKeyDown(inputKey_1.KeyCode.T)) {\n                const txt = \"「20200220」で\" + this.score + \"点だったよ！\";\n                const url = \"http://3jam0220.mds_boy.trap.show/\";\n                const tweeturl = `https://twitter.com/intent/tweet?hashtags=traP3jam&text=${encodeURIComponent(txt)}&url=${encodeURIComponent(url)}`;\n                location.href = tweeturl;\n            }\n            return this;\n        }\n        this.time--;\n        if (inputKey_1.InputKey.isKeyPressed(inputKey_1.KeyCode.Right) && this.target[0] < this.xnum - 1) {\n            if (this.mode) {\n                if (this.nextOk(this.target[0] + 1, this.target[1])) {\n                    this.target[0] += 1;\n                    this.checking.push([this.target[0], this.target[1]]);\n                }\n                else if (this.isPrev(this.target[0] + 1, this.target[1])) {\n                    this.target[0] += 1;\n                    this.checking.pop();\n                }\n            }\n            else {\n                this.target[0] += 1;\n            }\n        }\n        if (inputKey_1.InputKey.isKeyPressed(inputKey_1.KeyCode.Left) && this.target[0] > 0) {\n            if (this.mode) {\n                if (this.nextOk(this.target[0] - 1, this.target[1])) {\n                    this.target[0] -= 1;\n                    this.checking.push([this.target[0], this.target[1]]);\n                }\n                else if (this.isPrev(this.target[0] - 1, this.target[1])) {\n                    this.target[0] -= 1;\n                    this.checking.pop();\n                }\n            }\n            else {\n                this.target[0] -= 1;\n            }\n        }\n        if (inputKey_1.InputKey.isKeyPressed(inputKey_1.KeyCode.Up) && this.target[1] > 0) {\n            if (this.mode) {\n                if (this.nextOk(this.target[0], this.target[1] - 1)) {\n                    this.target[1] -= 1;\n                    this.checking.push([this.target[0], this.target[1]]);\n                }\n                else if (this.isPrev(this.target[0], this.target[1] - 1)) {\n                    this.target[1] -= 1;\n                    this.checking.pop();\n                }\n            }\n            else {\n                this.target[1] -= 1;\n            }\n        }\n        if (inputKey_1.InputKey.isKeyPressed(inputKey_1.KeyCode.Down) && this.target[1] < this.ynum - 1) {\n            if (this.mode) {\n                if (this.nextOk(this.target[0], this.target[1] + 1)) {\n                    this.target[1] += 1;\n                    this.checking.push([this.target[0], this.target[1]]);\n                }\n                else if (this.isPrev(this.target[0], this.target[1] + 1)) {\n                    this.target[1] += 1;\n                    this.checking.pop();\n                }\n            }\n            else {\n                this.target[1] += 1;\n            }\n        }\n        if (this.checking.length == this.po.length) {\n            this.score += this.po.length;\n            this.checks = this.checks.concat(this.checking);\n            this.checking = [];\n            this.mode = false;\n            this.time += 3 * 60;\n        }\n        if (inputKey_1.InputKey.isKeyPressed(inputKey_1.KeyCode.Z) && this.nextOk(this.target[0], this.target[1])) {\n            this.mode = true;\n            this.checking.push([this.target[0], this.target[1]]);\n        }\n        if (inputKey_1.InputKey.isKeyPressed(inputKey_1.KeyCode.X)) {\n            this.mode = false;\n            this.checking = [];\n        }\n        //console.log(this.checks)\n        this.pos = new vec2_1.default(this.target[0] * this.size, this.target[1] * this.size);\n        const sub = camera_1.default.getDistFromCetner(this.pos.add(new vec2_1.default(this.size / 2, this.size / 2)));\n        camera_1.default.move(sub);\n        return this;\n    }\n    nextOk(x, y) {\n        if (this.po[this.checking.length] != this.numbers[x][y]) {\n            return false;\n        }\n        for (const [x0, y0] of this.checks) {\n            if (x == x0 && y == y0) {\n                return false;\n            }\n        }\n        for (const [x0, y0] of this.checking) {\n            if (x == x0 && y == y0) {\n                return false;\n            }\n        }\n        return true;\n    }\n    isPrev(x, y) {\n        if (this.checking.length <= 1) {\n            return false;\n        }\n        const prev = this.checking[this.checking.length - 2];\n        return prev[0] == x && prev[1] == y;\n    }\n}\nexports.default = Game;\n\n\n//# sourceURL=webpack:///./src/scene/game/game.ts?");

/***/ }),

/***/ "./src/scene/title.ts":
/*!****************************!*\
  !*** ./src/scene/title.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst vec2_1 = __webpack_require__(/*! lib/vec2 */ \"./src/lib/vec2.ts\");\nconst drawManager_1 = __webpack_require__(/*! lib/drawManager */ \"./src/lib/drawManager.ts\");\nconst inputKey_1 = __webpack_require__(/*! lib/inputKey */ \"./src/lib/inputKey.ts\");\nconst game_1 = __webpack_require__(/*! ./game/game */ \"./src/scene/game/game.ts\");\nconst color_1 = __webpack_require__(/*! lib/color */ \"./src/lib/color.ts\");\nclass Title {\n    constructor() {\n    }\n    draw() {\n        drawManager_1.default.clear();\n        drawManager_1.default.string(new vec2_1.default(150, 300), \"20200220\", 150, color_1.default.black);\n        drawManager_1.default.string(new vec2_1.default(400, 600), \"Z: start\", 80, color_1.default.black);\n    }\n    update() {\n        if (inputKey_1.InputKey.isKeyDown(inputKey_1.KeyCode.Z)) {\n            return new game_1.default();\n        }\n        return this;\n    }\n}\nexports.default = Title;\n\n\n//# sourceURL=webpack:///./src/scene/title.ts?");

/***/ })

/******/ });