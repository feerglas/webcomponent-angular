(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/@stauffacher/sbbpoc/dist/esm/es5/build/5wxlfh9i.sc.entry.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@stauffacher/sbbpoc/dist/esm/es5/build/5wxlfh9i.sc.entry.js ***!
  \**********************************************************************************/
/*! exports provided: SbbAutocomplete */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SbbAutocomplete", function() { return SbbAutocomplete; });
/* harmony import */ var _sbb_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sbb.core.js */ "./node_modules/@stauffacher/sbbpoc/dist/esm/es5/sbb.core.js");
var SbbAutocomplete=function(){function t(){var t=this;this.isDirty=!0,this.onFocus=function(){t.hasFocus=!0},this.onBlur=function(){t.hasFocus=!1,t.trigger("sbb-autocomplete_blur")},this.onInput=function(e){var n=e.target.value;t.setValue(n),t.isDirty=!0,t.triggerInputEvent(n)}}return t.prototype.componentWillLoad=function(){this.isDirty=!this.value},t.prototype.getSuggestions=function(){try{var t=JSON.parse(this.suggestions);if(Array.isArray(t))return t}catch(t){throw new Error('\n\t\t\t\t\tsbb-autocomplete: suggestions attribute expected as JSON Array,\n\t\t\t\t\te.g. [{"label": "hello", "id": "world"}]\n\t\t\t\t')}},t.prototype.triggerInputEvent=function(t){this.trigger("sbb-autocomplete_input",{input:t})},t.prototype.onSuggestionSelected=function(t,e){e.preventDefault(),this.isDirty=!1,this.setValue(t.label||t),this.triggerSelectionEvent(t)},t.prototype.triggerSelectionEvent=function(t){this.trigger("sbb-autocomplete_selection",{selection:t})},t.prototype.trigger=function(t,e){var n=new CustomEvent(t,{detail:e});this.element.dispatchEvent(n)},t.prototype.setValue=function(t){this.element.setAttribute("value",t)},t.prototype.render=function(){var t=this,e=this.getSuggestions(),n=!!e.length&&this.hasFocus&&this.isDirty;return Object(_sbb_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div",null,Object(_sbb_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("input",{name:this.name,onInput:this.onInput,onFocus:this.onFocus,onBlur:this.onBlur,value:this.value}),n?Object(_sbb_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ul",null,e.map(function(e){var n=t.onSuggestionSelected.bind(t,e);return Object(_sbb_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("li",{onMouseDown:n},e.label||e)})):"")},Object.defineProperty(t,"is",{get:function(){return"sbb-autocomplete"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{element:{elementRef:!0},hasFocus:{state:!0},isDirty:{state:!0},name:{type:String,attr:"name"},suggestions:{type:String,attr:"suggestions"},value:{type:String,attr:"value"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return""},enumerable:!0,configurable:!0}),t}();

/***/ })

}]);
//# sourceMappingURL=9.js.map