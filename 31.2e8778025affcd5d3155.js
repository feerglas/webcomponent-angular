(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{jHXY:function(t,e,i){"use strict";i.r(e),i.d(e,"SbbAutocomplete",function(){return r});var n=i("E83j"),r=function(){function t(){var t=this;this.isDirty=!0,this.onFocus=function(){t.hasFocus=!0},this.onBlur=function(){t.hasFocus=!1,t.trigger("sbb-autocomplete_blur")},this.onInput=function(e){var i=e.target.value;t.setValue(i),t.isDirty=!0,t.triggerInputEvent(i)}}return t.prototype.componentWillLoad=function(){this.isDirty=!this.value},t.prototype.getSuggestions=function(){try{var t=JSON.parse(this.suggestions);if(Array.isArray(t))return t}catch(t){throw new Error('\n\t\t\t\t\tsbb-autocomplete: suggestions attribute expected as JSON Array,\n\t\t\t\t\te.g. [{"label": "hello", "id": "world"}]\n\t\t\t\t')}},t.prototype.triggerInputEvent=function(t){this.trigger("sbb-autocomplete_input",{input:t})},t.prototype.onSuggestionSelected=function(t,e){e.preventDefault(),this.isDirty=!1,this.setValue(t.label||t),this.triggerSelectionEvent(t)},t.prototype.triggerSelectionEvent=function(t){this.trigger("sbb-autocomplete_selection",{selection:t})},t.prototype.trigger=function(t,e){var i=new CustomEvent(t,{detail:e});this.element.dispatchEvent(i)},t.prototype.setValue=function(t){this.element.setAttribute("value",t)},t.prototype.render=function(){var t=this,e=this.getSuggestions(),i=!!e.length&&this.hasFocus&&this.isDirty,r=[Object(n.b)("input",{type:"text",name:this.name,placeholder:this.placeholder,onInput:this.onInput,onFocus:this.onFocus,onBlur:this.onBlur,value:this.value})];if(this.label){var o=r[0];r[0]=Object(n.b)("label",null,Object(n.b)("span",{class:this.value?"visible":""},this.label),o)}return i&&r.push(Object(n.b)("ul",null,e.map(function(e){var i=t.onSuggestionSelected.bind(t,e);return Object(n.b)("li",{onMouseDown:i},e.label||e)}))),r},Object.defineProperty(t,"is",{get:function(){return"sbb-autocomplete"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{element:{elementRef:!0},hasFocus:{state:!0},isDirty:{state:!0},label:{type:String,attr:"label"},name:{type:String,attr:"name"},placeholder:{type:String,attr:"placeholder"},suggestions:{type:String,attr:"suggestions"},value:{type:String,attr:"value"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return':host{font-family:SBBWeb Roman,Helvetica Neue,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;display:block;width:auto;margin:0 0 1.5rem 0;position:relative}*{-webkit-box-sizing:border-box;box-sizing:border-box}input,label{display:block;width:100%;font-size:1rem;color:#444}label span{display:block;padding:0 0 .3125rem .5rem;margin:0;font-size:.8125rem;opacity:0;-webkit-transition:opacity .2s;transition:opacity .2s}label span.visible{opacity:1}input{border:.125rem solid #d2d2d2;border-radius:2rem/16;outline:none;padding:.625rem .75rem}input:focus{border-color:#444;outline:none}ul{-webkit-transform:translateY(-.125rem);transform:translateY(-.125rem);z-index:1;border:.125rem solid #444;border-top:0;background-color:#fff;width:100%;margin:0;padding:.5625rem 0 .75rem;list-style-type:none;-webkit-box-shadow:0 .375rem 0 rgba(0,0,0,.15);box-shadow:0 .375rem 0 rgba(0,0,0,.15)}ul,ul:before{position:absolute}ul:before{content:"";display:block;top:0;left:0;right:0;height:.0625rem;background-color:#d2d2d2}li{margin:0;padding:.375rem .9375rem;font-size:.9375rem;cursor:pointer}li.is-active,li:hover{color:#c60018}'},enumerable:!0,configurable:!0}),t}()}}]);