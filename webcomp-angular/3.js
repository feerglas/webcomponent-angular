(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/@stauffacher/sbbpoc/dist/esm/es5/build/56bcxist.sc.entry.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@stauffacher/sbbpoc/dist/esm/es5/build/56bcxist.sc.entry.js ***!
  \**********************************************************************************/
/*! exports provided: SbbButtonExpand */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SbbButtonExpand", function() { return SbbButtonExpand; });
/* harmony import */ var _sbb_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sbb.core.js */ "./node_modules/@stauffacher/sbbpoc/dist/esm/es5/sbb.core.js");
var SbbButtonExpand=function(){function t(){var t=this;this.expanded=!1,this.setButtonState=function(){t.buttonState.textContent=t.expanded?"expanded":"collapsed"},this.buttonClick=function(){t.expanded=!t.expanded,t.setButtonState()}}return t.prototype.render=function(){var t=this;return Object(_sbb_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button",{ref:function(e){return t.button=e},onClick:function(){return t.buttonClick()},"aria-expanded":this.expanded?"true":"false"},"Current state: ",Object(_sbb_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span",{ref:function(e){return t.buttonState=e}},"collapsed"))},Object.defineProperty(t,"is",{get:function(){return"sbb-button-expand"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{expanded:{state:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return""},enumerable:!0,configurable:!0}),t}();

/***/ })

}]);
//# sourceMappingURL=3.js.map