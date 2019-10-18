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
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./functions.js":
/*!**********************!*\
  !*** ./functions.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.mod = mod;\nexports.sum = sum;\nexports.subtract = subtract;\n\n// Each file can only ONE export 'default'\n// It is usually used for files with a single functionality\n// It can be exported with a different name!\n\n/*\r\nexport default function mod(a, b) {\r\n    return a % b;\r\n}\r\n*/\nfunction mod(a, b) {\n  return a % b;\n}\n\nfunction sum(a, b) {\n  return a + b;\n}\n\nfunction subtract(a, b) {\n  return a - b;\n}\n\n//# sourceURL=webpack:///./functions.js?");

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar Ops = _interopRequireWildcard(__webpack_require__(/*! ./functions */ \"./functions.js\"));\n\nfunction _getRequireWildcardCache() { if (typeof WeakMap !== \"function\") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj[\"default\"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }\n\n/*\r\n// Classes\r\nclass List {\r\n    constructor() {\r\n        this.data = [];\r\n    }\r\n\r\n    add(data) {\r\n        this.data.push(data);\r\n        console.log(this.data);\r\n    }\r\n}\r\n\r\n\r\nclass TodoList extends List{\r\n    constructor() {\r\n        super();\r\n\r\n        this.user = 'Yago';\r\n    }\r\n\r\n    displayUser() {\r\n        console.log(this.user)\r\n    }\r\n}\r\n\r\nvar myList = new TodoList();\r\n\r\ndocument.getElementById('newtodo').onclick = function() {\r\n    myList.add('New todo');\r\n}\r\n\r\nmyList.displayUser();\r\n*/\n\n/*\r\nclass TodoList {\r\n    constructor() {\r\n        this.todos = [];\r\n    }\r\n\r\n    // Static methods are not able to 'see' what is happening outside\r\n    // e.g.: Math class in Java!\r\n    static addTodo() {\r\n        this.todos.push('New todo');\r\n        console.log(this.todos);\r\n    }\r\n}\r\n\r\nTodoList.addTodo();\r\n*/\n\n/*\r\n// Const & Let\r\n\r\nconst a = 1; // Cannot re-assign a value\r\n// b = 3; will throw an readOnlyError\r\n\r\nconst user = { name: 'Yago'}; \r\n// The value held by the variable is not immutable.\r\n// To prevent this one could use Object.freeze()\r\nuser.name = 'Yoshi'; \r\nconsole.log(user);\r\n\r\nfunction test(x) {\r\n    let y = 2;\r\n    if (x > 5) {\r\n        console.log(x, y);\r\n    }\r\n}\r\n\r\ntest(10);\r\n*/\n\n/*\r\n// Operations with Array\r\nconst arr = [1, 3, 4, 5, 8, 9];\r\n\r\nconst newArr = arr.map(function(item, index) {\r\n    return item + index * 2;\r\n});\r\n\r\nconsole.log(newArr);\r\n\r\nconst sum = arr.reduce(function(total, next) {\r\n    return total + next;\r\n}, 0);\r\n\r\nconsole.log(sum);\r\n\r\nconst filterArr = arr.filter(function(item) {\r\n    return item % 2 === 0;\r\n});\r\n\r\nconsole.log(filterArr);\r\n\r\nconst findArr = arr.find(function(item) {\r\n    return item === 4; // returns first found element!\r\n});\r\n\r\nconsole.log(findArr);\r\n*/\n\n/* \r\n// Arrow Fuctions\r\n\r\nconst arr = [1, 3, 4, 5, 6];\r\n\r\nconst newArr = arr.map((item) => item * 3);\r\n\r\nconsole.log(newArr);\r\n\r\nconst test = () => ['cheese', 'bacon', 'eggs']\r\n// const test = () => { name: 'Yago' } // this will not work!\r\n// const test = () => ({ name: 'Yago' });\r\n\r\nconsole.log(test());\r\n*/\n\n/* \r\n// Default Parameters\r\n\r\nconst sum = (a, b = 7) => a + b;\r\nconsole.log(sum(3));\r\n*/\n\n/* \r\n// Destructuring Assignment\r\n\r\nconst user = {\r\n    name: 'Yoshi',\r\n    age: 7,\r\n    address: {\r\n        city: 'Yoshi Town',\r\n        province: 'YL'\r\n    }\r\n};\r\n\r\nconst { name, age, address: { city } } = user;\r\nconsole.log(name, age, city);\r\n\r\nfunction descUser({ name, address: { province } }) {\r\n    console.log(name, province);\r\n}\r\n\r\ndescUser(user);\r\n\r\n*/\n\n/* \r\n\r\n// rest/spread Operators\r\n\r\n// REST\r\n\r\nconst user = {\r\n    name: 'Yoshi',\r\n    age: 7,\r\n    company: 'Mario Bros'\r\n};\r\n\r\nconst { name, ...rest } = user;\r\nconsole.log(name, rest);\r\n\r\nconst arr = [2, 5, 7, 10];\r\n\r\nconst [a, b, ...c] = arr;\r\nconsole.log(a, b, c);\r\n\r\nfunction sum(...params) {\r\n    // return params;\r\n    return params.reduce((total, next) => total + next, 0);\r\n}\r\nconsole.log(sum(3, 4));\r\n\r\n// SPREAD\r\n\r\nconst arr1 = [1, 2, 3];\r\nconst arr2 = [4, 5, 6];\r\nconst arr3 = [...arr1, ...arr2];\r\nconsole.log(arr3);\r\n\r\nconst user1 = {\r\n    name: 'Fire Flower',\r\n    age: 7,\r\n    company: 'Mario Bros'\r\n};\r\n\r\nconst user2 = { ...user1, name: 'Toad'};\r\nconsole.log(user2);\r\n\r\n*/\n\n/*\r\n// Template Literals\r\n\r\nconst name = 'Mario';\r\nconst age = 25;\r\nconsole.log(`My name is ${name} and I am ${age} years old`);\r\n */\n\n/* \r\n// Object Short Syntax - WOW! =D\r\n\nconst name = 'Luigi';\r\nconst age = 30;\r\n\nconst user = {\r\n   name,\r\n   age,\r\n   company: 'Mario Bros'\r\n}\r\n\nconsole.log(user);\r\n*/\n//import mod, { sum, subtract as sub} from './functions';\nconsole.log(Ops.sum(1, 2));\nconsole.log(Ops.subtract(4, 2));\nconsole.log(Ops.mod(7, 5));\n\n//# sourceURL=webpack:///./main.js?");

/***/ })

/******/ });