if(!self.define){let e,s={};const r=(r,i)=>(r=new URL(r+".js",i).href,s[r]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=s,document.head.appendChild(e)}else e=r,importScripts(r),s()})).then((()=>{let e=s[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(i,n)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let t={};const c=e=>r(e,o),l={module:{uri:o},exports:t,require:c};s[o]=Promise.all(i.map((e=>l[e]||c(e)))).then((e=>(n(...e),t)))}}define(["./workbox-db5fc017"],(function(e){"use strict";e.setCacheNameDetails({prefix:"instagram"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/css/app.bb0313cd.css",revision:null},{url:"/follower.json",revision:"e6c699f012a45615ad8378ae1917f564"},{url:"/index.html",revision:"1c31e7a5dcf8ca7b108f7a9ac54e8414"},{url:"/js/app.f372aaf3.js",revision:null},{url:"/js/chunk-vendors.de08b22f.js",revision:null},{url:"/manifest.json",revision:"47ca0b75fa643d43a739580f6d60f77d"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
