(function(e){function t(t){for(var r,o,u=t[0],s=t[1],l=t[2],d=t[3]||[],b=0,m=[];b<u.length;b++)o=u[b],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&m.push(c[o][0]),c[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);f&&f(t),i.push.apply(i,d);while(m.length)m.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,o=1;o<n.length;o++){var l=n[o];0!==c[l]&&(r=!1)}r&&(a.splice(t--,1),e=s(s.s=n[0]))}return 0===a.length&&(i.forEach((function(e){if(void 0===c[e]){c[e]=null;var t=document.createElement("link");s.nc&&t.setAttribute("nonce",s.nc),t.rel="prefetch",t.as="script",t.href=u(e),document.head.appendChild(t)}})),i.length=0),e}var r={},o={index:0},c={index:0},a=[],i=[];function u(e){return s.p+"js/"+({Home:"Home",Welcome:"Welcome"}[e]||e)+"."+{Home:"9689c40f",Welcome:"dee4ae00","chunk-377ac662":"bcff811b","chunk-74914cce":"a737ae2d","chunk-6406d58a":"5ccaafe7","chunk-2f10adc3":"dfb915f3"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={Home:1,Welcome:1,"chunk-377ac662":1,"chunk-74914cce":1,"chunk-6406d58a":1,"chunk-2f10adc3":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({Home:"Home",Welcome:"Welcome"}[e]||e)+"."+{Home:"a4be8d01",Welcome:"bf22321b","chunk-377ac662":"5b80c2c5","chunk-74914cce":"d373d693","chunk-6406d58a":"4cd8a4bd","chunk-2f10adc3":"0e433876"}[e]+".css",c=s.p+r,a=document.getElementsByTagName("link"),i=0;i<a.length;i++){var u=a[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===c))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){u=d[i],l=u.getAttribute("data-href");if(l===r||l===c)return t()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=t,b.onerror=function(t){var r=t&&t.target&&t.target.src||c,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete o[e],b.parentNode.removeChild(b),n(a)},b.href=c;var f=document.getElementsByTagName("head")[0];f.appendChild(b)})).then((function(){o[e]=0})));var r=c[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise((function(t,n){r=c[e]=[t,n]}));t.push(r[2]=a);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=u(e);var d=new Error;i=function(t){l.onerror=l.onload=null,clearTimeout(b);var n=c[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,n[1](d)}c[e]=void 0}};var b=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=t,l=l.slice();for(var b=0;b<l.length;b++)t(l[b]);var f=d,m=function(){return a.push([0,"chunk-vendors"]),n()}();t([[],{},0,["Home","Welcome"]])})({0:function(e,t,n){e.exports=n("cd49")},"07e0":function(e,t,n){},"0c94":function(e,t,n){"use strict";var r=n("7a23");function o(e,t,n,o,c,a){var i=Object(r["z"])("router-link");return Object(r["t"])(),Object(r["e"])(i,{to:e.to,rel:"noreferrer noopener"},{default:Object(r["H"])((function(){return[Object(r["y"])(e.$slots,"default")]})),_:3},8,["to"])}var c=Object(r["j"])({name:"InnerLink",props:{to:{required:!0,type:String}}});c.render=o;t["a"]=c},"3b19":function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"f",(function(){return i})),n.d(t,"e",(function(){return u})),n.d(t,"d",(function(){return s})),n.d(t,"b",(function(){return l}));n("96cf");var r=n("1da1"),o=n("59ca"),c=(n("ea7b"),n("e71f"),{apiKey:"AIzaSyCHoowBhRlMjmeZ8DZ5kdE7mRjdQaeB56U",authDomain:"npc-official-site.firebaseapp.com",databaseURL:"https://npc-official-site.firebaseio.com",projectId:"npc-official-site",storageBucket:"npc-official-site.appspot.com",messagingSenderId:"884659801390",appId:"1:884659801390:web:1c69cdcf4ceffdc9837ebf",measurementId:"G-TXSKM15E02"});o["initializeApp"](c);var a=function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.auth().signInAnonymously().catch((function(e){var t=e.code,n=e.message;return{errorCode:t,errorMessage:n}}));case 2:return e.abrupt("return");case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),i=function(){return o["firestore"].Timestamp.now()},u=function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,l.collection(t).doc(n);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),s=function(e){return e.auth().currentUser};t["c"]=o;var l=o["firestore"]()},"4c0b":function(e,t,n){"use strict";var r=n("7a23");function o(e,t,n,o,c,a){return Object(r["t"])(),Object(r["e"])("a",{href:e.to,target:"_blank",rel:"noreferrer noopener"},[Object(r["y"])(e.$slots,"default")],8,["href"])}var c=Object(r["j"])({name:"ExternalLink",props:{to:{required:!0,type:String}}});c.render=o;t["a"]=c},"6ed6":function(e,t,n){},"7e7d":function(e,t,n){},b74b:function(e,t,n){"use strict";var r=n("e017"),o=n.n(r),c=n("21a1"),a=n.n(c),i=new o.a({id:"npc_text.svg",use:"npc_text.svg-usage",viewBox:"0 0 832 192",content:'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 832 192" id="npc_text.svg"><defs></defs><switch><g><path d="M768.48 192.25v-64h64v64h-64zm-768 0h64v-128h64v128h64V.25H.48v192zm256 0l64-128h64v64h-64v64h128V.25h-192v192zm448-192h-192v192h192v-64h-128v-64h128v-64z" /></g></switch></symbol>'});a.a.add(i)},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function o(e,t,n,o,c,a){var i=Object(r["z"])("NavBar"),u=Object(r["z"])("Footer"),s=Object(r["z"])("router-view");return Object(r["t"])(),Object(r["e"])(s,null,{default:Object(r["H"])((function(e){var t=e.Component;return[(Object(r["t"])(),Object(r["e"])(r["b"],{exclude:"Redirect"},[(Object(r["t"])(),Object(r["e"])(Object(r["A"])(t),null,{nav:Object(r["H"])((function(){return[Object(r["h"])(i)]})),footer:Object(r["H"])((function(){return[Object(r["h"])(u)]})),_:2},1024))],1024))]})),_:1})}n("96cf");var c=n("1da1"),a=(n("7e7d"),n("a15b"),0),i=[["+      o     +              o      ","    +             o     +       +  ","o          +                       ","    o  +           +        +      ","+        o     o       +        o  ","-_-_-_-_-_-_-_,------,      o      ","_-_-_-_-_-_-_-|   /\\_/\\            ","-_-_-_-_-_-_-~|__( ^ .^)  +     +  ",'_-_-_-_-_-_-_-""  ""               ',"+      o         o   +       o     ","    +         +                    ","o        o         o      o     +  ","    o           +                  ","+      +     o        o      +     "],["+      o     +              +      ","    o             o     o       +  ","o          +                       ","    +  o           +        o      ","o        o     o       +        o  ","_-_-_-_-_-_-_-,------,      +      ","-_-_-_-_-_-_-_|   /\\_/\\            ","_-_-_-_-_-_-_-|__( ^ .^)  o     +  ",'-_-_-_-_-_-_-_ ""  ""              ',"+      +         o   +       o     ","    o         +                    ","+        +         +      +     o  ","    +           o                  ","+      o     o        o      +     "]];function u(){console.clear(),console.log(i[a].join("\n")),a=0==a?1:0}var s=!0,l=function(){s&&(u(),console.log("喵喵嘻嘻喵喵！！"))},d=(n("b0c0"),n("9911"),{class:"nav-bar animate__animated animate__backInDown"}),b=Object(r["h"])("svg",{class:"nav-logo",fill:"black",viewBox:"0 0 2703 630"},[Object(r["h"])("use",{"xlink:href":"#npc_text.svg"}),Object(r["g"])(" _ ")],-1),f={class:"menu"},m=Object(r["h"])("div",{class:"slide-button slide-button__left"},"‹",-1),h={class:"menu-box"},p={class:"item"},v=Object(r["h"])("div",{class:"underline"},null,-1),g=Object(r["h"])("div",{class:"slide-button slide-button__right"},"›",-1);function w(e,t,n,o,c,a){var i=Object(r["z"])("NavDrawer"),u=Object(r["z"])("router-link");return Object(r["t"])(),Object(r["e"])(r["a"],null,[Object(r["h"])(i,{navItems:e.menuItems,class:"animate__animated animate__backInDown"},null,8,["navItems"]),Object(r["h"])("div",d,[Object(r["h"])(u,{rel:"noreferrer noopener",to:"/"},{default:Object(r["H"])((function(){return[b]})),_:1}),Object(r["h"])("div",f,[m,Object(r["h"])("div",h,[(Object(r["t"])(!0),Object(r["e"])(r["a"],null,Object(r["x"])(e.menuItems,(function(t,n){return Object(r["t"])(),Object(r["e"])(Object(r["A"])(t.external?e.ExternalLink:e.InnerLink),{key:n,to:t.link},{default:Object(r["H"])((function(){return[Object(r["h"])("div",p," ★"+Object(r["C"])(t.name),1),v]})),_:2},1032,["to"])})),128))]),g])])],64)}n("d3b7"),n("b74b"),n("6ed6");var j=n("0c94"),O=n("4c0b"),_=Object(r["j"])({name:"NavBar",components:{NavDrawer:Object(r["i"])((function(){return n.e("chunk-74914cce").then(n.bind(null,"a6c7"))}))},setup:function(){var e=[{name:"首頁",link:"/",external:!1},{name:"專案成果",link:"https://github.com/NTUT-NPC",external:!0}];return Object(r["r"])((function(){var e=document.querySelector(".slide-button__left"),t=document.querySelector(".slide-button__right"),n=document.querySelector(".menu-box"),r=function(e,t,n,r){return e/=r/2,e<1?n/2*e*e+t:(e--,-n/2*(e*(e-2)-1)+t)},o=function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(t){var o,c,a,i,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:o=50,c=3,a=0,i=0;case 4:if(!(i<o+1)){e.next=13;break}return u=r(i,0,c*o,o),n.scrollLeft+=(u-a)*(t?1:-1),e.next=9,new Promise((function(e){return setTimeout((function(){return e()}),1)}));case 9:a=u;case 10:i++,e.next=4;break;case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();e.addEventListener("click",(function(){return o(!1)})),t.addEventListener("click",(function(){return o(!0)}))})),{menuItems:e,ExternalLink:O["a"],InnerLink:j["a"]}}});_.render=w;var k=_,y={class:"footer"},x={class:"icons"},z={fill:"white",viewBox:"0 0 1 1"},C=Object(r["g"])(" _ "),E=Object(r["h"])("div",{class:"copyright"},[Object(r["g"])(" Copyright "),Object(r["h"])("b",{style:{"font-family":"sans-serif"}},"©"),Object(r["g"])(" 2020 NTUT Programming Club, All rights reserved. ")],-1);function L(e,t,n,o,c,a){var i=Object(r["z"])("go");return Object(r["t"])(),Object(r["e"])("div",y,[Object(r["h"])("div",x,[(Object(r["t"])(!0),Object(r["e"])(r["a"],null,Object(r["x"])(e.svgList,(function(e,t){return Object(r["t"])(),Object(r["e"])(i,{key:t,to:e.link},{default:Object(r["H"])((function(){return[(Object(r["t"])(),Object(r["e"])("svg",z,[Object(r["h"])("use",{"xlink:href":"#"+e.name+".svg"},null,8,["xlink:href"]),C]))]})),_:2},1032,["to"])})),128))]),E])}n("07e0");var N=n("e017"),S=n.n(N),B=n("21a1"),H=n.n(B),T=new S.a({id:"facebook-brands.svg",use:"facebook-brands.svg-usage",viewBox:"0 0 512 512",content:'<symbol aria-hidden="true" class="svg-inline--fa fa-facebook fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="facebook-brands.svg"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" /></symbol>'}),P=(H.a.add(T),new S.a({id:"instagram-brands.svg",use:"instagram-brands.svg-usage",viewBox:"0 0 448 512",content:'<symbol aria-hidden="true" class="svg-inline--fa fa-instagram fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" id="instagram-brands.svg"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></symbol>'})),I=(H.a.add(P),new S.a({id:"youtube-brands.svg",use:"youtube-brands.svg-usage",viewBox:"0 0 576 512",content:'<symbol aria-hidden="true" class="svg-inline--fa fa-youtube fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" id="youtube-brands.svg"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" /></symbol>'})),M=(H.a.add(I),new S.a({id:"github-brands.svg",use:"github-brands.svg-usage",viewBox:"0 0 496 512",content:'<symbol aria-hidden="true" class="svg-inline--fa fa-github fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" id="github-brands.svg"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" /></symbol>'})),A=(H.a.add(M),Object(r["j"])({name:"Footer",setup:function(){var e=[{name:"facebook-brands",link:"https://www.facebook.com/NPC.OwO"},{name:"instagram-brands",link:"https://www.instagram.com/npc.designer"},{name:"youtube-brands",link:"https://www.youtube.com/channel/UCzYSXfm15W7QNkomC6lLXxg"},{name:"github-brands",link:"https://github.com/NTUT-NPC"}];return{svgList:e}}}));A.render=L;var R=A,W=n("3b19"),D=Object(r["j"])({name:"App",props:{},components:{NavBar:k,Footer:R},setup:function(){function e(e){var t,n=arguments,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;return function(){var o=n;clearTimeout(t),t=setTimeout((function(){e(o)}),r)}}function t(){window.removeEventListener("orientationchange",e(t)),window.location.reload()}return Object(r["r"])((function(){window.addEventListener("orientationchange",e(t)),l(),document.body.addEventListener("touchmove",(function(e){e.preventDefault()})),document.dispatchEvent(new Event("app-rendered"))})),Object(r["p"])(Object(c["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return window.removeEventListener("orientationchange",e(t)),n.next=3,W["c"].auth().signOut();case 3:case"end":return n.stop()}}),n)})))),Object(r["u"])("firebase",W["c"]),Object(r["u"])("db",W["b"]),{}}});D.render=o;var U=D,q=n("8c4f"),V=[{path:"/:any",component:function(){return n.e("chunk-377ac662").then(n.bind(null,"aa4b"))}},{path:"/",name:"Home",component:function(){return n.e("Home").then(n.bind(null,"bc13"))}},{path:"/welcome",name:"Welcome",component:function(){return n.e("Welcome").then(n.bind(null,"35a8"))}},{path:"/github",beforeEnter:function(){open("https://github.com/NTUT-NPC","_blank")},redirect:""},{path:"/chat-on-line",beforeEnter:function(){open("https://m.me/NPC.OwO","_blank")},redirect:""},{path:"/facebook",beforeEnter:function(){open("https://www.facebook.com/NPC.OwO","_blank")},redirect:""},{path:"/instagram",beforeEnter:function(){open("https://www.instagram.com/npc.designer","_blank")},redirect:""},{path:"/youtube",beforeEnter:function(){open("https://www.youtube.com/channel/UCzYSXfm15W7QNkomC6lLXxg","_blank")},redirect:""}],X=Object(q["a"])({history:Object(q["b"])("/"),routes:V}),F=X,K=n("5502"),Q=Object(K["a"])({state:{},mutations:{},actions:{},modules:{}}),J=n("77ed"),Y=n.n(J),Z=Object(r["d"])(U);Z.component("go",O["a"]),Z.component("to",j["a"]),Z.use(Q).use(F).use(Y.a),document.addEventListener("DOMContentLoaded",(function(){Z.mount("#app")}))}});