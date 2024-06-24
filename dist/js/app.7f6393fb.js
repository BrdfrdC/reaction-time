(function(){"use strict";var e={9318:function(e,t,n){var o=n(5130),r=n(6768);function c(e,t){const n=(0,r.g2)("router-view");return(0,r.uX)(),(0,r.Wv)(n,null,{default:(0,r.k6)((({Component:t})=>[((0,r.uX)(),(0,r.Wv)((0,r.$y)(t),{key:e.$route.path}))])),_:1})}var i=n(1241);const u={},s=(0,i.A)(u,[["render",c]]);var a=s,d=n(1387);n(4114);const l={class:"reaction-background"},m=(0,r.Fv)('<div class="reaction-container"><h1 class="game-title">Mental Stack Reaction Time Test Extravaganza</h1><h2 class="game-desc">Hover over a button to view the rules of the game</h2><div class="test-picker-row"><div class="test-picker-item" id="two-items">2 items</div></div><div class="next-button test-picker-item">Return Home</div><div class="disclaimer-text">(This site does not work on mobile)</div></div>',1),y=[m];var v={__name:"HomeView",setup(e){return(0,r.sV)((()=>{var e=0,t=[],n="",o=0,r=0,c="";const i=document.getElementById("two-items");function u(){o=0,r=0,document.querySelector(".game-title").innerHTML="Wait...",document.querySelector(".game-desc").style.display="none",document.querySelector(".test-picker-row").style.display="none",document.querySelector(".disclaimer-text").style.display="none",document.removeEventListener("keydown",f),document.removeEventListener("keydown",u),s()}async function s(){const e=4e3*Math.random()+3e3;await new Promise((t=>setTimeout(t,e))),a()}function a(){switch(c){case"twoItems":const e=0==Math.floor(2*Math.random());e?(document.querySelector(".reaction-background").style.backgroundColor="green",document.querySelector(".game-title").innerHTML="Press F!",n="f"):(document.querySelector(".reaction-background").style.backgroundColor="red",document.querySelector(".game-title").innerHTML="Press J!",n="j"),l(),document.addEventListener("keypress",d);break}}function d(e){e.key==n?m():y()}function l(){o=Date.now().toString()}function m(){document.removeEventListener("keypress",d),r=Date.now().toString();const n=r-o;document.querySelector(".reaction-background").style.backgroundColor="#419ad5",document.querySelector(".game-title").innerHTML=n.toString()+"ms",console.log(n),t.push(n),e++,console.log(e),v()}function y(){document.removeEventListener("keypress",d),document.querySelector(".game-desc").style.display="grid",document.querySelector(".game-title").innerHTML="Wrong button!",document.querySelector(".game-desc").innerHTML="Press any button to retry.",document.querySelector(".reaction-background").style.backgroundColor="#419ad5",document.addEventListener("keydown",u)}function v(){document.querySelector(".game-desc").style.display="grid",e>=5?(document.querySelector(".game-desc").innerHTML="Press any button to see results.",document.addEventListener("keydown",f)):(document.querySelector(".game-desc").innerHTML="Press any button to continue.",document.addEventListener("keydown",u))}function f(){document.removeEventListener("keydown",f);const e=t.reduce(((e,t)=>e+t),0),n=e/5;document.querySelector(".game-title").innerHTML=Math.round(n).toString()+"ms",document.querySelector(".game-desc").innerHTML="Congrats! Share it with your friends!",document.querySelector(".next-button").style.display="flex",document.querySelector(".next-button").addEventListener("click",g)}function g(){e=0,t=[],document.querySelector(".game-title").innerHTML="Mental Stack Reaction Time Test Extravaganza",document.querySelector(".game-desc").style.display="flex",document.querySelector(".game-desc").innerHTML="Hover over a button to view the rules of the game",document.querySelector(".test-picker-row").style.display="flex",document.querySelector(".disclaimer-text").style.display="flex",document.querySelector(".next-button").style.display="none"}i.addEventListener("mouseover",(function(e){document.querySelector(".game-desc").innerHTML="When the blue screen turns green, press F. When it turns red, press J."})),i.addEventListener("click",(function(e){c="twoItems",u()}))})),(e,t)=>((0,r.uX)(),(0,r.CE)("div",l,y))}};const f=v;var g=f;const p=[{path:"/",name:"home",component:g}],h=(0,d.aE)({history:(0,d.LA)("/reaction-time/"),routes:p});var k=h;(0,o.Ef)(a).use(k).mount("#app")}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var c=t[o]={exports:{}};return e[o].call(c.exports,c,c.exports,n),c.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,c){if(!o){var i=1/0;for(d=0;d<e.length;d++){o=e[d][0],r=e[d][1],c=e[d][2];for(var u=!0,s=0;s<o.length;s++)(!1&c||i>=c)&&Object.keys(n.O).every((function(e){return n.O[e](o[s])}))?o.splice(s--,1):(u=!1,c<i&&(i=c));if(u){e.splice(d--,1);var a=r();void 0!==a&&(t=a)}}return t}c=c||0;for(var d=e.length;d>0&&e[d-1][2]>c;d--)e[d]=e[d-1];e[d]=[o,r,c]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={524:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,c,i=o[0],u=o[1],s=o[2],a=0;if(i.some((function(t){return 0!==e[t]}))){for(r in u)n.o(u,r)&&(n.m[r]=u[r]);if(s)var d=s(n)}for(t&&t(o);a<i.length;a++)c=i[a],n.o(e,c)&&e[c]&&e[c][0](),e[c]=0;return n.O(d)},o=self["webpackChunkreaction_time"]=self["webpackChunkreaction_time"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[504],(function(){return n(9318)}));o=n.O(o)})();
//# sourceMappingURL=app.7f6393fb.js.map