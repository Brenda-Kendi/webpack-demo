!function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=4)}([function(t,n,e){"use strict";t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e=function(t,n){var e=t[1]||"",r=t[3];if(!r)return e;if(n&&"function"==typeof btoa){var o=(a=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(s," */")),i=r.sources.map((function(t){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(t," */")}));return[e].concat(i).concat([o]).join("\n")}var a,c,s;return[e].join("\n")}(n,t);return n[2]?"@media ".concat(n[2]," {").concat(e,"}"):e})).join("")},n.i=function(t,e,r){"string"==typeof t&&(t=[[null,t,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<t.length;c++){var s=[].concat(t[c]);r&&o[s[0]]||(e&&(s[2]?s[2]="".concat(e," and ").concat(s[2]):s[2]=e),n.push(s))}},n}},function(t,n,e){var r=e(2),o=e(3);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var i={insert:"head",singleton:!1};r(o,i);t.exports=o.locals||{}},function(t,n,e){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var t={};return function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}t[n]=e}return t[n]}}(),a=[];function c(t){for(var n=-1,e=0;e<a.length;e++)if(a[e].identifier===t){n=e;break}return n}function s(t,n){for(var e={},r=[],o=0;o<t.length;o++){var i=t[o],s=n.base?i[0]+n.base:i[0],d=e[s]||0,l="".concat(s," ").concat(d);e[s]=d+1;var u=c(l),p={css:i[1],media:i[2],sourceMap:i[3]};-1!==u?(a[u].references++,a[u].updater(p)):a.push({identifier:l,updater:b(p,n),references:1}),r.push(l)}return r}function d(t){var n=document.createElement("style"),r=t.attributes||{};if(void 0===r.nonce){var o=e.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(t){n.setAttribute(t,r[t])})),"function"==typeof t.insert)t.insert(n);else{var a=i(t.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}return n}var l,u=(l=[],function(t,n){return l[t]=n,l.filter(Boolean).join("\n")});function p(t,n,e,r){var o=e?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(t.styleSheet)t.styleSheet.cssText=u(n,o);else{var i=document.createTextNode(o),a=t.childNodes;a[n]&&t.removeChild(a[n]),a.length?t.insertBefore(i,a[n]):t.appendChild(i)}}function f(t,n,e){var r=e.css,o=e.media,i=e.sourceMap;if(o?t.setAttribute("media",o):t.removeAttribute("media"),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var m=null,h=0;function b(t,n){var e,r,o;if(n.singleton){var i=h++;e=m||(m=d(n)),r=p.bind(null,e,i,!1),o=p.bind(null,e,i,!0)}else e=d(n),r=f.bind(null,e,n),o=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)};return r(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;r(t=n)}else o()}}t.exports=function(t,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=o());var e=s(t=t||[],n);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var r=0;r<e.length;r++){var o=c(e[r]);a[o].references--}for(var i=s(t,n),d=0;d<e.length;d++){var l=c(e[d]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}e=i}}}},function(t,n,e){"use strict";e.r(n);var r=e(0),o=e.n(r)()(!1);o.push([t.i,"body {\r\n\tbox-sizing: border-box;\r\n\tbackground-color: #f3f3f3;\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n}\r\n\r\n#content {\r\n\tmax-height: 100vh;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tcolor: rgb(97, 178, 255);\r\n}\r\n.heading {\r\n\tfont-size: 22px;\r\n\twidth: 600px;\r\n\tmargin: 0 auto;\r\n\ttext-align: center;\r\n\tcolor: rgb(97, 178, 255);\r\n}\r\n.section {\r\n\twidth: 70vw;\r\n\ttext-align: center;\r\n\tjustify-content: center;\r\n\tmargin: 0 auto;\r\n}\r\n#nav {\r\n\theight: 80px;\r\n\tdisplay: grid;\r\n\tgrid-template-columns: repeat(3, 1fr);\r\n\tgrid-column-gap: 2px;\r\n}\r\n.tab {\r\n\toutline: none;\r\n\tcursor: pointer;\r\n\tpadding: 15px;\r\n\tborder: 0;\r\n\tfont-family: inherit;\r\n}\r\n.tab:hover,\r\n.tab:focus {\r\n\tcolor: aquamarine;\r\n}\r\n\r\n.tab:hover span,\r\n.tab:focus span {\r\n\tcolor: blue;\r\n\r\n\tfont-size: 32px;\r\n}\r\n\r\n.tab span {\r\n\tcolor: #333;\r\n\tfont-size: 28px;\r\n\tletter-spacing: 0.2rem;\r\n\r\n\ttransition: 0.1s;\r\n}\r\n#tab-content {\r\n\tpadding: 40px;\r\n\tmin-height: 800px;\r\n\tcolor: #333;\r\n}\r\n\r\n.flex-lay {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tjustify-content: flex-start;\r\n\talign-items: center;\r\n}\r\n.grid-lay {\r\n\tdisplay: grid;\r\n\tgrid-template-columns: repeat(2, 1fr);\r\n\tjustify-items: center;\r\n}\r\n.section {\r\n\tjustify-content: center;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\tletter-spacing: 0.2rem;\r\n}\r\n.section-title {\r\n\tfont-size: 36px;\r\n}\r\n.section-description {\r\n\tfont-size: 20px;\r\n\ttext-align: center;\r\n}\r\n.active span {\r\n\tcolor: rgb(39, 144, 243) !important;\r\n\r\n\tfont-size: 32px;\r\n}\r\n.active:hover span,\r\n.active:focus span {\r\n\tcolor: rgb(97, 178, 255) !important;\r\n\r\n\tfont-size: 32px;\r\n}\r\n/* .food {\r\n\tdisplay: flex;\r\n\tflex-wrap: wrap;\r\n\tflex-direction: column;\r\n\tborder-radius: 10px;\r\n\twidth: 400px;\r\n\theight: 320px;\r\n\ttransition: 0.4s;\r\n\toverflow: hidden;\r\n\tmargin: 20px 0;\r\n} */\r\n.food .description {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tpadding: 20px;\r\n\tcolor: #fff;\r\n\tjustify-content: space-between;\r\n}\r\n.food img {\r\n\twidth: 100%;\r\n\theight: 100%;\r\n}\r\n.food:hover .description {\r\n\tletter-spacing: 0.1rem;\r\n\r\n\ttransform: translateY(-100%);\r\n}\r\n\r\n.food .description h3 {\r\n\tfont-size: 22px;\r\n}\r\n\r\n@media only screen and (max-width: 1480px) {\r\n\t.grid-lay {\r\n\t\tgrid-template-columns: 1fr;\r\n\t}\r\n}\r\n\r\n@media only screen and (max-width: 940px) {\r\n\t.food {\r\n\t\twidth: 440px;\r\n\t\theight: 220px;\r\n\t}\r\n\t.food .description h3 {\r\n\t\tfont-size: 18px;\r\n\t}\r\n\t.food .description h2 {\r\n\t\tfont-size: 16px;\r\n\t}\r\n}\r\n\r\n@media only screen and (max-width: 660px) {\r\n\t#nav {\r\n\t\theight: 240px;\r\n\t\tgrid-template-columns: 1fr;\r\n\t\tgrid-column-gap: 0;\r\n\t\tgrid-row-gap: 4px;\r\n\t}\r\n\t.tab span {\r\n\t\tfont-size: 20px;\r\n\t}\r\n\t.tab:hover span,\r\n\t.tab:focus span {\r\n\t\tfont-size: 20px;\r\n\t}\r\n\t#header h1 {\r\n\t\tfont-size: 50px;\r\n\t}\r\n}\r\n\r\n@media only screen and (max-width: 560px) {\r\n\t#nav {\r\n\t\tfont-size: 20px;\r\n\t}\r\n\t.food {\r\n\t\twidth: 300px;\r\n\t\theight: 160px;\r\n\t}\r\n\t.food .description h3 {\r\n\t\tfont-size: 14px;\r\n\t}\r\n\t.food .description h2 {\r\n\t\tfont-size: 12px;\r\n\t}\r\n\t#header h1 {\r\n\t\tfont-size: 36px;\r\n\t}\r\n}",""]),n.default=o},function(t,n,e){"use strict";function r(t,n){const e=document.createElement("button");e.setAttribute("id",t);const r=document.createElement("span");return r.textContent=n,e.appendChild(r),e.classList.add("tab"),e}e.r(n);var o=function(){const t=document.getElementById("content"),n=function(t,n){const e=document.createElement("header");e.setAttribute("id",t),e.className="heading";const r=document.createElement("h1");return r.textContent=n,e.appendChild(r),e}("header","Kendi Sea Foods");t.appendChild(n);const e=function(t){const n=document.createElement("nav");n.setAttribute("id",t);const e=r("home","home"),o=r("menu","menu"),i=r("contact","contact");return n.appendChild(e),n.appendChild(o),n.appendChild(i),n}("nav");t.appendChild(e);const o=function(t){const n=document.createElement("main");return n.setAttribute("id",t),n}("tab-content");t.appendChild(o)};var i=function(){const t=document.getElementById("tab-content");t.classList.add("flex-lay"),t.classList.remove("grid-lay"),t.textContent="";const n=function(){const t=document.createElement("section");t.classList.add("section");const n=document.createElement("h2");n.classList.add("section-title"),n.textContent="About",t.appendChild(n);const e=document.createElement("p");return e.classList.add("section-description"),e.textContent="\n    Kendi seafood restaurant is a restaurant that specializes in seafood cuisine and seafood dishes, such as fish and shellfish. Dishes may include freshwater fish. \n    ",t.appendChild(e),t}();!function(t){const n=document.querySelector(".tab.active");n&&n.classList.remove("active"),document.getElementById(t).classList.add("active")}("home"),t.appendChild(n)};function a(t,n){const e=document.createElement("section");e.classList.add("section");const r=document.createElement("h2");return r.classList.add("section-title"),r.textContent=t,e.appendChild(r),n.forEach(t=>{const n=document.createElement("p");n.classList.add("section-description"),n.textContent=t,e.appendChild(n)}),e}var c=function(){const t=document.getElementById("tab-content");t.classList.add("flex-lay"),t.classList.remove("grid-lay"),t.textContent="",function(t){const n=document.querySelector(".tab.active");n&&n.classList.remove("active"),document.getElementById(t).classList.add("active")}("contact");const n=a("Phones",["Safaricom : +2545433573106","Airtel : +254784647383"]),e=a("Addreess",["45th Street Moi Avenue","Old Town Kibokoni Road"]);t.appendChild(n),t.appendChild(e)};function s(t,n,e,r){const o=document.createElement("div");o.classList.add("food");const i=document.createElement("img");i.setAttribute("src",t),i.setAttribute("alt",r);const a=document.createElement("div");a.classList.add("description");const c=document.createElement("h3");c.textContent=n;const s=document.createElement("h2");return s.textContent=e,a.appendChild(c),a.appendChild(s),o.appendChild(i),o.appendChild(a),o}var d=function(){const t=document.getElementById("tab-content");t.classList.add("grid-lay"),t.classList.remove("flex-lay"),t.textContent="",function(t){const n=document.querySelector(".tab.active");n&&n.classList.remove("active"),document.getElementById(t).classList.add("active")}("menu"),[s("https://images.unsplash.com/photo-1563372522-8e97eac82f62?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60","Cooked shrimps","Ksh. 1200","cooked shrimps"),s("https://images.unsplash.com/photo-1559561723-cf7f94061108?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60","Nom salad","Ksh . 1800","Nom salad"),s("https://images.unsplash.com/photo-1588791174744-7e9bf4378277?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60","Lobster","Ksh. 850","Lobster"),s("https://images.unsplash.com/photo-1572438631563-a3429408a845?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60","Octopus","Ksh. 1800","Octopus"),s("https://images.unsplash.com/photo-1566370304680-599a65522649?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60","Grilled Meat","Ksh. 750","Grilled Meat"),s("https://images.unsplash.com/photo-1551085073-5dfcc8f05b88?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60","Seafood Kebaab","Ksh. 750","Seafood Kebaab"),s("https://images.unsplash.com/photo-1564834724105-918b73d1b9e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60","Barbecue","Ksh. 750","Barbecue"),s("https://images.unsplash.com/photo-1551463682-189bf47449d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60","Fresh Lobster","Ksh. 750","Fresh Lobster")].forEach(n=>{t.appendChild(n)})};e(1);o(),i(),function(){const t=document.getElementById("home"),n=document.getElementById("menu"),e=document.getElementById("contact");t.addEventListener("click",i),n.addEventListener("click",d),e.addEventListener("click",c)}()}]);