(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{mL7X:function(e,n,a){"use strict";a.r(n),a.d(n,"SbbLanguageSelector",function(){return i});var t=a("E83j"),i=function(){function e(){var e=this;this.changeLanguage=function(n,a,t){if(console.log(e),!t){n.preventDefault(),e.language=a;var i=new CustomEvent("sbb-language-selector_language-switch",{detail:{language:a},bubbles:!0});e.element.dispatchEvent(i)}}}return e.prototype.render=function(){var e,n=this;return e=this.languages?JSON.parse(this.languages):[{name:"de"},{name:"fr"},{name:"it"},{name:"en"}],Object(t.b)("div",{class:"footer"},Object(t.b)("ul",{class:"languages__list"},e.map(function(e){return Object(t.b)("li",{class:"languages__item"},Object(t.b)("a",{onClick:function(a){n.changeLanguage(a,e.name,e.link)},class:"languages__link"+(e.name===n.language?" languages__link--active":""),href:e.link?e.link:"#"},e.name))})))},Object.defineProperty(e,"is",{get:function(){return"sbb-language-selector"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{element:{elementRef:!0},language:{type:String,attr:"language",mutable:!0},languages:{type:String,attr:"languages"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".footer{font-family:SBBWeb Roman,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:.75rem;margin:1.5rem 0;float:left;position:relative}@media (min-width:643px){.footer{margin:2.75rem 0}}@media (min-width:1025px){.footer{margin:2.25rem 0;padding-left:2.75rem}}.languages__list{margin:0;padding:0;list-style-type:none;overflow:auto}.languages__item{display:block;float:left}.languages__item:not(:first-child){margin-left:.5rem}.languages__link{display:inline-block;text-decoration:none;color:#444}.languages__link--active{border-bottom:1px solid #444;padding-bottom:.125rem;cursor:default}.languages__link:not(.languages__link--active):hover{color:#eb0000}"},enumerable:!0,configurable:!0}),e}()}}]);