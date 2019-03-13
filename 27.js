(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[27],{

/***/ "./node_modules/@stauffacher/sbbpoc/dist/esm/es5/build/equrmrfg.sc.entry.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@stauffacher/sbbpoc/dist/esm/es5/build/equrmrfg.sc.entry.js ***!
  \**********************************************************************************/
/*! exports provided: SbbWebfonts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SbbWebfonts", function() { return SbbWebfonts; });
/* harmony import */ var _sbb_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sbb.core.js */ "./node_modules/@stauffacher/sbbpoc/dist/esm/es5/sbb.core.js");
var SbbWebfonts=function(){function t(){}return t.prototype.render=function(){this.config||(this.config='[ { "version": "1_6_subset" }, { "styles": [ { "name": "Roman", "include": true, "display": "fallback" }, { "name": "Bold", "include": true, "display": "swap" }, { "name": "Light", "include": true, "display": "swap" }, { "name": "Ultralight", "include": true, "display": "swap" }, { "name": "Thin", "include": true, "display": "swap" } ] } ]');var t=JSON.parse(this.config),e=t[0].version;return e?Object(_sbb_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("style",null,t[1].styles.map(function(t){if(t.include)return"@font-face {\n\t\t\t\t\t\t\tfont-family: 'SBBWeb "+t.name+"';\n\t\t\t\t\t\t\tsrc: url('https://cdn.app.sbb.ch/fonts/v"+e+"/SBBWeb-"+t.name+".woff2') format('woff2'),\n\t\t\t\t\t\t\turl('https://cdn.app.sbb.ch/fonts/v"+e+"/SBBWeb-"+t.name+".woff') format('woff');\n\t\t\t\t\t\t\tfont-display: "+t.display+";\n\t\t\t\t\t\t}"})):(console.log("Define the version number of the webfont, please. Use either 1, 1_6 or 1_6_subset"),!1)},Object.defineProperty(t,"is",{get:function(){return"sbb-webfonts"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{config:{type:String,attr:"config",mutable:!0}}},enumerable:!0,configurable:!0}),t}();

/***/ })

}]);
//# sourceMappingURL=27.js.map