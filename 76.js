(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[76],{

/***/ "./node_modules/@stauffacher/sbbpoc/dist/esm/es5/build/wrqjbqw0.entry.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@stauffacher/sbbpoc/dist/esm/es5/build/wrqjbqw0.entry.js ***!
  \*******************************************************************************/
/*! exports provided: SbbLanguageSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SbbLanguageSelector", function() { return SbbLanguageSelector; });
/* harmony import */ var _sbb_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sbb.core.js */ "./node_modules/@stauffacher/sbbpoc/dist/esm/es5/sbb.core.js");
var SbbLanguageSelector=function(){function e(){var e=this;this.changeLanguage=function(n,a,t){if(console.log(e),!t){n.preventDefault(),e.language=a;var r=new CustomEvent("sbb-language-selector_language-switch",{detail:{language:a},bubbles:!0});e.element.dispatchEvent(r)}}}return e.prototype.render=function(){var e,n=this;return e=this.languages?JSON.parse(this.languages):[{name:"de"},{name:"fr"},{name:"it"},{name:"en"}],Object(_sbb_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div",{class:"footer"},Object(_sbb_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ul",{class:"languages__list"},e.map(function(e){return Object(_sbb_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("li",{class:"languages__item"},Object(_sbb_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("a",{onClick:function(a){n.changeLanguage(a,e.name,e.link)},class:"languages__link"+(e.name===n.language?" languages__link--active":""),href:e.link?e.link:"#"},e.name))})))},Object.defineProperty(e,"is",{get:function(){return"sbb-language-selector"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{element:{elementRef:!0},language:{type:String,attr:"language",mutable:!0},languages:{type:String,attr:"languages"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".footer{font-family:SBBWeb Roman,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:.75rem;margin:1.5rem 0;float:left;position:relative}\@media (min-width:643px){.footer{margin:2.75rem 0}}\@media (min-width:1025px){.footer{margin:2.25rem 0;padding-left:2.75rem}}.languages__list{margin:0;padding:0;list-style-type:none;overflow:auto}.languages__item{display:block;float:left}.languages__item:not(:first-child){margin-left:.5rem}.languages__link{display:inline-block;text-decoration:none;color:#444}.languages__link--active{border-bottom:1px solid #444;padding-bottom:.125rem;cursor:default}.languages__link:not(.languages__link--active):hover{color:#eb0000}"},enumerable:!0,configurable:!0}),e}();

/***/ })

}]);
//# sourceMappingURL=76.js.map