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

/***/ "./src/game.ts":
/*!*********************!*\
  !*** ./src/game.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst stage_1 = __webpack_require__(/*! ./stage */ \"./src/stage.ts\");\nclass Game {\n    constructor() {\n        this.stage = new stage_1.default(3, 0);\n    }\n    draw() {\n        this.stage.draw();\n    }\n    update() {\n        this.stage = this.stage.update();\n        return this;\n    }\n}\nexports.default = Game;\n\n\n//# sourceURL=webpack:///./src/game.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst title_1 = __webpack_require__(/*! ./title */ \"./src/title.ts\");\nconst sceneManager_1 = __webpack_require__(/*! ./lib/sceneManager */ \"./src/lib/sceneManager.ts\");\nonload = () => {\n    let sceneManager = new sceneManager_1.default(new title_1.default(), 1080, 720);\n    sceneManager.run();\n};\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/lib/circle.ts":
/*!***************************!*\
  !*** ./src/lib/circle.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nclass Circle {\n    constructor(pos, radius) {\n        this.pos = pos;\n        this.radius = radius;\n    }\n    inPoint(pos) {\n        return this.pos.dist(pos) <= this.radius;\n    }\n}\nexports.default = Circle;\n\n\n//# sourceURL=webpack:///./src/lib/circle.ts?");

/***/ }),

/***/ "./src/lib/drawManager.ts":
/*!********************************!*\
  !*** ./src/lib/drawManager.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nclass DrawManager {\n    static init(width, height) {\n        this.canvas.width = width;\n        this.canvas.height = height;\n        document.body.appendChild(this.canvas);\n        const ctx = this.canvas.getContext('2d');\n        if (ctx) {\n            this.ctx = ctx;\n        }\n        else {\n            console.error('Canvas is null');\n        }\n    }\n    static rect(rect, color, fill) {\n        this.ctx.beginPath();\n        this.ctx.rect(rect.pos.x, rect.pos.y, rect.width, rect.height);\n        this.draw(color, fill);\n    }\n    static circle(circle, color, fill) {\n        this.ctx.beginPath();\n        this.ctx.arc(circle.pos.x, circle.pos.y, circle.radius, 0, Math.PI * 2, false);\n        this.draw(color, fill);\n    }\n    static line(p1, p2, l, color) {\n        this.ctx.beginPath();\n        this.ctx.moveTo(p1.x, p1.y);\n        this.ctx.lineTo(p2.x, p2.y);\n        this.ctx.lineWidth = l;\n        this.draw(color, false);\n    }\n    static string(pos, str, size, color) {\n        this.ctx.beginPath();\n        this.ctx.fillStyle = color;\n        this.ctx.font = '' + size + \"px 'メイリオ'\";\n        this.ctx.fillText(str, pos.x, pos.y);\n    }\n    static draw(color, fill) {\n        if (fill) {\n            this.ctx.fillStyle = color;\n            this.ctx.fill();\n        }\n        else {\n            this.ctx.strokeStyle = color;\n            this.ctx.stroke();\n        }\n    }\n}\nexports.default = DrawManager;\nDrawManager.canvas = document.createElement('canvas');\n\n\n//# sourceURL=webpack:///./src/lib/drawManager.ts?");

/***/ }),

/***/ "./src/lib/inputMouse.ts":
/*!*******************************!*\
  !*** ./src/lib/inputMouse.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst point_1 = __webpack_require__(/*! ./point */ \"./src/lib/point.ts\");\nconst drawManager_1 = __webpack_require__(/*! ./drawManager */ \"./src/lib/drawManager.ts\");\nclass InputMouse {\n    static getMousepos() {\n        return this.mousePos;\n    }\n    static isMouseLeftDown() {\n        return this.mouseInput[0];\n    }\n    static setMousePos(pos) {\n        this.mousePos = pos;\n    }\n    static mouseDown() {\n        this.mouseInput[0] = true;\n    }\n    static mouseUp() {\n        this.mouseInput[0] = false;\n    }\n}\nexports.InputMouse = InputMouse;\nInputMouse.mouseInput = Array(2);\ndocument.onmousemove = e => {\n    InputMouse.setMousePos(new point_1.default(e.offsetX, e.offsetY));\n};\ndocument.onmousedown = () => {\n    InputMouse.mouseDown();\n};\ndocument.onmouseup = () => {\n    InputMouse.mouseUp();\n};\ndocument.ontouchstart = e => {\n    const rect = drawManager_1.default.canvas.getBoundingClientRect();\n    const x = e.targetTouches[0].pageX - rect.left;\n    const y = e.targetTouches[0].pageY - rect.top;\n    InputMouse.setMousePos(new point_1.default(x, y));\n    InputMouse.mouseDown();\n};\ndocument.ontouchend = () => {\n    InputMouse.mouseUp();\n};\n\n\n//# sourceURL=webpack:///./src/lib/inputMouse.ts?");

/***/ }),

/***/ "./src/lib/point.ts":
/*!**************************!*\
  !*** ./src/lib/point.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nclass Point {\n    constructor(x, y) {\n        this.x = x;\n        this.y = y;\n    }\n    move(p) {\n        this.x += p.x;\n        this.y += p.y;\n    }\n    add(p) {\n        return new Point(this.x + p.x, this.y + p.y);\n    }\n    dist(p) {\n        const dx = this.x - p.x;\n        const dy = this.y - p.y;\n        return Math.sqrt(dx * dx + dy * dy);\n    }\n}\nexports.default = Point;\nPoint.zero = new Point(0, 0);\n\n\n//# sourceURL=webpack:///./src/lib/point.ts?");

/***/ }),

/***/ "./src/lib/rect.ts":
/*!*************************!*\
  !*** ./src/lib/rect.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst util_1 = __webpack_require__(/*! ./util */ \"./src/lib/util.ts\");\nclass Rect {\n    constructor(pos, width, height) {\n        this.pos = pos;\n        this.width = width;\n        this.height = height;\n    }\n    inPoint(pos) {\n        return (util_1.between(this.pos.x, pos.x, this.pos.x + this.width) &&\n            util_1.between(this.pos.y, pos.y, this.pos.y + this.height));\n    }\n}\nexports.default = Rect;\n\n\n//# sourceURL=webpack:///./src/lib/rect.ts?");

/***/ }),

/***/ "./src/lib/sceneManager.ts":
/*!*********************************!*\
  !*** ./src/lib/sceneManager.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst drawManager_1 = __webpack_require__(/*! ./drawManager */ \"./src/lib/drawManager.ts\");\nconst rect_1 = __webpack_require__(/*! ./rect */ \"./src/lib/rect.ts\");\nconst point_1 = __webpack_require__(/*! ./point */ \"./src/lib/point.ts\");\nclass SceneManager {\n    constructor(scene, width, height) {\n        this.scene = scene;\n        drawManager_1.default.init(width, height);\n        this.current = scene;\n        this.screen = new rect_1.default(point_1.default.zero, width, height);\n    }\n    run() {\n        this.clear();\n        this.current.draw();\n        this.current = this.current.update();\n        requestAnimationFrame(() => this.run());\n    }\n    clear() {\n        drawManager_1.default.rect(this.screen, '#ffffff', true);\n        drawManager_1.default.rect(this.screen, '#000000', false);\n    }\n}\nexports.default = SceneManager;\n\n\n//# sourceURL=webpack:///./src/lib/sceneManager.ts?");

/***/ }),

/***/ "./src/lib/util.ts":
/*!*************************!*\
  !*** ./src/lib/util.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nfunction between(x, y, z) {\n    return x <= y && y <= z;\n}\nexports.between = between;\n\n\n//# sourceURL=webpack:///./src/lib/util.ts?");

/***/ }),

/***/ "./src/stage.ts":
/*!**********************!*\
  !*** ./src/stage.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst point_1 = __webpack_require__(/*! ./lib/point */ \"./src/lib/point.ts\");\n//import { InputKey, KeyCode } from './lib/inputKey'\nconst drawManager_1 = __webpack_require__(/*! ./lib/drawManager */ \"./src/lib/drawManager.ts\");\nconst circle_1 = __webpack_require__(/*! ./lib/circle */ \"./src/lib/circle.ts\");\nconst inputMouse_1 = __webpack_require__(/*! ./lib/inputMouse */ \"./src/lib/inputMouse.ts\");\nconst rect_1 = __webpack_require__(/*! ./lib/rect */ \"./src/lib/rect.ts\");\nclass Stage {\n    constructor(cir_size, score) {\n        this.speed = 3;\n        this.cir_r = 20;\n        this.time = 100;\n        this.count = 0;\n        this.circles = [];\n        this.vec = [];\n        this.colors = [];\n        this.color_vec = [];\n        this.color_dir = [];\n        this.select_num = [];\n        this.select_now = 1;\n        this.end = false;\n        this.clear = true;\n        this.area = new rect_1.default(new point_1.default(this.cir_r, this.cir_r), 1080 - this.cir_r * 2, 720 - this.cir_r * 2);\n        this.next = new rect_1.default(new point_1.default(440, 400), 150, 50);\n        this.tweet = new rect_1.default(new point_1.default(440, 400), 150, 50);\n        this.cir_size = cir_size;\n        this.score = score;\n    }\n    draw() {\n        if (this.count >= this.time * (this.cir_size + 1)) {\n            drawManager_1.default.rect(new rect_1.default(point_1.default.zero, 1080, 720), 'rgba(0, 0, 0, 0.1)', true);\n        }\n        for (let i = 0; i < this.circles.length; i++) {\n            const circle = this.circles[i];\n            const color = this.colors[i];\n            drawManager_1.default.circle(circle, 'rgba(' + color[0] + ',' + color[1] + ',' + color[2] + ', 0.8)', true);\n            drawManager_1.default.circle(circle, 'rgba(' + color[0] + ',' + color[1] + ',' + color[2] + ', 1)', false);\n            const select_num = this.select_num[i];\n            if (select_num != -1) {\n                if (select_num + 1 >= 10) {\n                    drawManager_1.default.string(circle.pos.add(new point_1.default(-12, 7)), select_num + '', 20, '#ffffff');\n                }\n                else {\n                    drawManager_1.default.string(circle.pos.add(new point_1.default(-5, 7)), select_num + '', 20, '#ffffff');\n                }\n            }\n        }\n        if (!this.clear) {\n            drawManager_1.default.string(new point_1.default(283, 240), 'GameOver', 100, 'rgba(0, 0, 0, 1)');\n            drawManager_1.default.string(new point_1.default(280, 240), 'GameOver', 100, 'rgba(255, 0, 0, 1)');\n            drawManager_1.default.string(new point_1.default(353, 340), 'Score:' + this.score, 80, 'rgba(0, 0, 0, 1)');\n            drawManager_1.default.string(new point_1.default(350, 340), 'Score:' + this.score, 80, 'rgba(200, 200, 0, 1)');\n            drawManager_1.default.string(new point_1.default(450, 440), 'tweet', 50, 'rgba(0, 0, 200, 1)');\n            drawManager_1.default.rect(this.tweet, 'rgba(0, 0, 200, 0.3)', true);\n            drawManager_1.default.rect(this.tweet, 'rgba(0, 0, 200, 1)', false);\n        }\n        if (this.end) {\n            drawManager_1.default.string(new point_1.default(383, 300), 'Clear', 100, 'rgba(0, 0, 0, 1)');\n            drawManager_1.default.string(new point_1.default(380, 300), 'Clear', 100, 'rgba(200, 200, 0, 1)');\n            drawManager_1.default.string(new point_1.default(460, 440), 'next', 50, '#ff0000');\n            drawManager_1.default.rect(this.next, 'rgba(200, 0, 0, 0.3)', true);\n            drawManager_1.default.rect(this.next, 'rgba(200, 0, 0, 1)', false);\n        }\n    }\n    update() {\n        if (this.count % this.time == 0 && this.circles.length < this.cir_size) {\n            this.circles.push(new circle_1.default(new point_1.default(30, 30), this.cir_r));\n            this.vec.push(new point_1.default(1 + Math.random() * this.speed, 1 + Math.random() * this.speed));\n            this.colors.push([\n                Math.random() * 200,\n                Math.random() * 200,\n                Math.random() * 200\n            ]);\n            this.color_vec.push([Math.random(), Math.random(), Math.random()]);\n            this.color_dir.push([true, true, true]);\n            this.select_num.push(-1);\n        }\n        if (this.count < this.time * (this.cir_size + 1)) {\n            for (let i = 0; i < this.circles.length; i++) {\n                const pos = this.circles[i].pos;\n                const vec = this.vec[i];\n                /*\n                vec.move(\n                  new Point((Math.random() - 0.5) / 5, (Math.random() - 0.5) / 5)\n                )*/\n                //vec.move(new Point(Math.sin(this.count), Math.sin(this.count)))\n                pos.move(vec.add(new point_1.default(Math.sin((Math.PI / 360) * this.count), Math.sin((Math.PI / 360) * this.count))));\n                const color = this.colors[i];\n                const color_vec = this.color_vec[i];\n                const color_dir = this.color_dir[i];\n                for (let j = 0; j < 3; j++) {\n                    if (color_dir[j]) {\n                        color[j] = color[j] + color_vec[j];\n                        if (color[j] > 200) {\n                            color_dir[j] = false;\n                        }\n                    }\n                    else {\n                        color[j] = color[j] - color_vec[j];\n                        if (color[j] < 50) {\n                            color_dir[j] = true;\n                        }\n                    }\n                    color[j] %= 255;\n                }\n                const area = this.area;\n                if (!area.inPoint(pos)) {\n                    if ((pos.x < area.pos.x && vec.x < 0) ||\n                        (area.pos.x + area.width < pos.x && vec.x > 0)) {\n                        vec.x *= -1;\n                    }\n                    if ((pos.y < area.pos.y && vec.y < 0) ||\n                        (area.pos.y + area.height < pos.y && vec.y > 0)) {\n                        vec.y *= -1;\n                    }\n                    pos.move(vec);\n                }\n            }\n        }\n        else {\n            if (this.end &&\n                inputMouse_1.InputMouse.isMouseLeftDown() &&\n                this.next.inPoint(inputMouse_1.InputMouse.getMousepos())) {\n                return new Stage(this.cir_size + 1, this.score);\n            }\n            if (!this.clear &&\n                inputMouse_1.InputMouse.isMouseLeftDown() &&\n                this.tweet.inPoint(inputMouse_1.InputMouse.getMousepos())) {\n                const txt = \"「新しい順に選ぶ」で\" + this.score + \"点だったよ！\";\n                const url = \"http://3jam0916.mds_boy.trap.show/\";\n                const tweeturl = `https://twitter.com/intent/tweet?hashtags=traP3jam&text=${encodeURIComponent(txt)}&url=${encodeURIComponent(url)}`;\n                location.href = tweeturl;\n            }\n            for (let i = 0; i < this.circles.length; i++) {\n                if (this.select_num[i] == -1 &&\n                    inputMouse_1.InputMouse.isMouseLeftDown() &&\n                    this.circles[i].inPoint(inputMouse_1.InputMouse.getMousepos())) {\n                    this.select_num[i] = this.select_now; // + 10\n                    if (this.select_now == this.circles.length - i) {\n                        this.score++;\n                    }\n                    else {\n                        this.clear = false;\n                    }\n                    this.select_now++;\n                }\n            }\n            if (this.select_now > this.circles.length && this.clear) {\n                this.end = true;\n            }\n        }\n        this.count++;\n        return this;\n    }\n}\nexports.default = Stage;\n\n\n//# sourceURL=webpack:///./src/stage.ts?");

/***/ }),

/***/ "./src/title.ts":
/*!**********************!*\
  !*** ./src/title.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst point_1 = __webpack_require__(/*! ./lib/point */ \"./src/lib/point.ts\");\nconst drawManager_1 = __webpack_require__(/*! ./lib/drawManager */ \"./src/lib/drawManager.ts\");\nconst game_1 = __webpack_require__(/*! ./game */ \"./src/game.ts\");\nconst inputMouse_1 = __webpack_require__(/*! ./lib/inputMouse */ \"./src/lib/inputMouse.ts\");\nclass Title {\n    constructor() {\n    }\n    draw() {\n        drawManager_1.default.string(new point_1.default(100, 300), \"新しい順に選ぶ\", 130, '#000');\n        drawManager_1.default.string(new point_1.default(350, 500), \"クリックで開始\", 50, '#000');\n    }\n    update() {\n        if (inputMouse_1.InputMouse.isMouseLeftDown()) {\n            return new game_1.default();\n        }\n        return this;\n    }\n}\nexports.default = Title;\n\n\n//# sourceURL=webpack:///./src/title.ts?");

/***/ })

/******/ });