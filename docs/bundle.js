!function(t){var e={};function i(o){if(e[o])return e[o].exports;var n=e[o]={i:o,l:!1,exports:{}};return t[o].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=e,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(o,n,function(e){return t[e]}.bind(null,n));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=0)}([function(t,e,i){"use strict";var o=function(t){return t&&t.__esModule?t:{default:t}}(i(1));var n=new o.default(".accordion");n.OpenEnd=function(){console.log("OpenEnd")},n.CloseEnd=function(){console.log("CloseEnd")};var r=new o.default(".accordion2",{toggleSpeed:200,btnElm:"dt",detailElm:"dd"});setTimeout(function(){r.Open(".open")},1e3),setTimeout(function(){r.Close(".close")},2e3)},function(t,e,i){"use strict";var o,n;"function"==typeof Symbol&&Symbol.iterator;void 0===(n="function"==typeof(o=function(){function t(t,e){this.selector=t,this.accordion=document.querySelectorAll(this.selector),null==e&&(e={}),this.toggleSpeed=e.toggleSpeed?e.toggleSpeed:1,this.btnElm=e.btnElm?e.btnElm:this.selector+"_btn",this.detailElm=e.detailElm?e.detailElm:this.selector+"_detail",this.OpenEnd=function(){},this.CloseEnd=function(){},this.clickFlag=!1,0!=this.accordion.length&&this.Init()}return t.prototype.AddTransition=function(t){t.style.transition="max-height "+this.toggleSpeed/1e3+"s",t.style.setProperty("-webkit-transition","max-height "+this.toggleSpeed/1e3+"s")},t.prototype.RemoveTransition=function(t){t.style.transition="none",t.style.setProperty("-webkit-transition","none")},t.prototype.Init=function(){var t=this,e="overflow: hidden;";e+="transition: max-height "+this.toggleSpeed/1e3+"s ;",e+="-webkit-transition: max-height "+this.toggleSpeed/1e3+"s ;";for(var i=0;i<this.accordion.length;i++)for(var o=this.accordion[i].querySelectorAll(this.detailElm),n=this.accordion[i].querySelectorAll(this.btnElm),r=0;r<n.length;r++)o[r]&&(o[r].style.cssText=e,this.HasClass(o[r],"ds-active")||(o[r].style.maxHeight="0px")),n[r].addEventListener("click",function(e){e.preventDefault(),t.Toggle(e)})},t.prototype.Toggle=function(t){if(!this.accordion[0])return console.error(this.selector+": Not Found"),!1;var e=t.currentTarget?t.currentTarget:document.querySelectorAll(t)[0];this.HasClass(e,"ds-active")?this.clickFlag||this.Close(t):this.clickFlag||this.Open(t)},t.prototype.Open=function(t){var e=this;if(!this.accordion[0])return console.error(this.selector+": Not Found"),!1;this.clickFlag=!0;var i=t.currentTarget?t.currentTarget:document.querySelectorAll(t)[0],o=this.GetParent(i,this.selector),n=Array.prototype.indexOf.call(o.querySelectorAll(this.btnElm),i),r=o.querySelectorAll(this.detailElm)[n];r.style.maxHeight=r.scrollHeight+"px",this.AddClass(i,"ds-active"),this.AddClass(r,"ds-active"),this.accordion[0].classList?r.addEventListener("transitionend",function t(){e.clickFlag=!1,e.OpenEnd(n),e.RemoveTransition(r),r.style.maxHeight=null,r.removeEventListener("transitionend",t)},!1):this.clickFlag=!1},t.prototype.Close=function(t){var e=this;if(!this.accordion[0])return console.error(this.selector+": Not Found"),!1;this.clickFlag=!0;var i=t.currentTarget?t.currentTarget:document.querySelectorAll(t)[0],o=this.GetParent(i,this.selector),n=Array.prototype.indexOf.call(o.querySelectorAll(this.btnElm),i),r=o.querySelectorAll(this.detailElm)[n];this.RemoveClass(i,"ds-active"),this.RemoveClass(r,"ds-active"),r.style.maxHeight=r.scrollHeight+"px",setTimeout(function(){e.AddTransition(r),r.style.maxHeight="0px"},10),this.accordion[0].classList?r.addEventListener("transitionend",function t(){e.clickFlag=!1,e.CloseEnd(n),i.style.pointerEvents="inherit",r.removeEventListener("transitionend",t)},!1):this.clickFlag=!1},t.prototype.CloseIgnoreThis=function(t){if(!this.accordion[0])return console.error(this.selector+": Not Found"),!1;for(var e=t,i=this.GetParent(e,this.selector),o=Array.prototype.indexOf.call(i.querySelectorAll(this.btnElm),e),n=i.querySelectorAll(this.btnElm),r=i.querySelectorAll(this.detailElm),s=0;s<n.length;s++)s!=o&&(n[s].classList.remove("ds-active"),l(s));function l(t){r[t].classList.remove("ds-active"),setTimeout(function(){r[t].style.maxHeight="0px"},100)}},t.prototype.GetParent=function(t,e){var i,o=t,n=0;for(i=e.split(".")[1]?e.split(".")[1]:e.split("#")[1]?e.split("#")[1]:e;n<100&&(o=o.parentNode).tagName.toLowerCase()!=i;){if(o.className){if(o.className.match(i))break}else if(o.id&&o.id.match(i))break;n++}return o},t.prototype.AddClass=function(t,e){t.classList?t.classList.add(e):t.className+=" "+e},t.prototype.RemoveClass=function(t,e){t.classList?t.classList.remove(e):t.className=t.className.replace(new RegExp("(^|\\b)"+e.split(" ").join("|")+"(\\b|$)","gi")," ")},t.prototype.HasClass=function(t,e){var i=!1;return t.classList?t.classList.contains(e)&&(i=!0):new RegExp("(^| )"+e+"( |$)","gi").test(t.className)&&(i=!0),i},t})?o.call(e,i,e,t):o)||(t.exports=n)}]);