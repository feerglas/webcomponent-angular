(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{nLBV:function(t,e,n){"use strict";n.r(e),n.d(e,"SbbButtonExpand",function(){return u});var r=n("E83j"),u=function(){function t(){var t=this;this.expanded=!1,this.setButtonState=function(){t.buttonState.textContent=t.expanded?"expanded":"collapsed"},this.buttonClick=function(){t.expanded=!t.expanded,t.setButtonState()}}return t.prototype.render=function(){var t=this;return Object(r.b)("button",{ref:function(e){return t.button=e},onClick:function(){return t.buttonClick()},"aria-expanded":this.expanded?"true":"false"},"Current state: ",Object(r.b)("span",{ref:function(e){return t.buttonState=e}},"collapsed"))},Object.defineProperty(t,"is",{get:function(){return"sbb-button-expand"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{expanded:{state:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return""},enumerable:!0,configurable:!0}),t}()}}]);