(function(t){function e(e){for(var o,r,l=e[0],s=e[1],c=e[2],p=0,f=[];p<l.length;p++)r=l[p],a[r]&&f.push(a[r][0]),a[r]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o]);u&&u(e);while(f.length)f.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,l=1;l<n.length;l++){var s=n[l];0!==a[s]&&(o=!1)}o&&(i.splice(e--,1),t=r(r.s=n[0]))}return t}var o={},a={app:0},i=[];function r(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=o,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=s;i.push(["a1ec","chunk-vendors"]),n()})({"147a":function(t,e,n){"use strict";var o=n("906b"),a=n.n(o);a.a},"906b":function(t,e,n){},"9f29":function(t,e,n){"use strict";var o=n("aeb7"),a=n.n(o);a.a},a1ec:function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var o=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page",attrs:{id:"app"}},[n("div",{staticClass:"title"},[t._v("vue-flipcard")]),n("div",{staticClass:"desc"},[t._v("Vue flip card component")]),n("div",{staticClass:"card-container"},[n("vue-flipcard",{attrs:{height:240},on:{flip:t.onFlip}},[n("div",{staticClass:"content front",attrs:{slot:"front"},slot:"front"},[n("h1",[t._v("正面 | Front")]),n("p",[t._v("这是一个水平的翻转卡片，鼠标进入时翻转")]),n("p",[t._v("I'm a horizontal filpcard, put your mouse over me to flip")])]),n("div",{staticClass:"content back",attrs:{slot:"back"},slot:"back"},[n("h1",[t._v("背面 | Back")]),n("p",[t._v("将鼠标移出恢复正面")]),n("p",[t._v("Move your mouse out of me to flip")])])]),n("vue-flipcard",{attrs:{height:240,direction:"vertical"}},[n("div",{staticClass:"content front",attrs:{slot:"front"},slot:"front"},[n("h1",[t._v("正面 | Front")]),n("p",[t._v("这是一个垂直的翻转卡片，鼠标进入时翻转")]),n("p",[t._v("I'm a horizontal filpcard, put your mouse over me to flip")])]),n("div",{staticClass:"content back",attrs:{slot:"back"},slot:"back"},[n("h1",[t._v("背面 | Back")]),n("p",[t._v("将鼠标移出恢复正面")]),n("p",[t._v("Move your mouse out of me to flip")])])]),n("vue-flipcard",{ref:"flipcard",attrs:{height:240,disable:""}},[n("div",{staticClass:"content front",attrs:{slot:"front"},slot:"front"},[n("h1",[t._v("正面 | Front")]),n("p",[t._v("这是一个自定义的翻转卡片，点击按钮以翻转")]),n("p",[t._v("Click the button to flip manually!")]),n("div",{staticClass:"btn",on:{click:t.onManualFlip}},[t._v("Click Me")])]),n("div",{staticClass:"content back",attrs:{slot:"back"},slot:"back"},[n("h1",[t._v("背面 | Back")]),n("p",[t._v("这是一个自定义的翻转卡片，点击按钮以翻转")]),n("p",[t._v("Click the button to flip manually!")]),n("div",{staticClass:"btn",on:{click:t.onManualFlip}},[t._v("Click Me")])])])],1)])},i=[],r={name:"App",methods:{onFlip:function(){console.log("flipped!")},onManualFlip:function(){this.$refs.flipcard.flip()}}},l=r,s=(n("9f29"),n("2877")),c=Object(s["a"])(l,a,i,!1,null,null,null);c.options.__file="App.vue";var u=c.exports,p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vue-flipcard",class:[t.direction,{back:t.back}],style:{width:t.width+"px",height:t.height+"px"},on:{mouseenter:t.onMouseEnter,mouseleave:t.onMouseLeave}},[n("div",{staticClass:"vue-flipcard__front"},[t._t("front")],2),n("div",{staticClass:"vue-flipcard__back"},[t._t("back")],2)])},f=[],v=(n("c5f6"),{name:"VueFlipcard",data:function(){return{back:!1}},props:{width:{type:Number,default:300},height:{type:Number,default:300},direction:{type:String,default:"horizontal"},disable:{type:Boolean,default:!1}},methods:{flip:function(){this.back=!this.back,this.$emit("flip")},onMouseEnter:function(){!this.disable&&this.flip()},onMouseLeave:function(){!this.disable&&this.flip()}}}),d=v,h=(n("147a"),Object(s["a"])(d,p,f,!1,null,"ae3a9ec6",null));h.options.__file="Plugin.vue";var b=h.exports,_=b;o["a"].component("vue-flipcard",_),o["a"].config.productionTip=!1,new o["a"]({el:"#app",render:function(t){return t(u)}})},aeb7:function(t,e,n){}});