if(!self.define){let e,n={};const i=(i,s)=>(i=new URL(i+".js",s).href,n[i]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=n,document.head.appendChild(e)}else e=i,importScripts(i),n()})).then((()=>{let e=n[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(s,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(n[o])return;let t={};const a=e=>i(e,o),l={module:{uri:o},exports:t,require:a};n[o]=Promise.all(s.map((e=>l[e]||a(e)))).then((e=>(r(...e),t)))}}define(["./workbox-fa446783"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-318ea894.css",revision:null},{url:"assets/index-94928859.js",revision:null},{url:"assets/workbox-window.prod.es5-a7b12eab.js",revision:null},{url:"index.html",revision:"3afaba43d8c49f06e21925a2af9fd109"},{url:"transp-icon-192.png",revision:"2b8ed0711dc86d3af083316548ae4482"},{url:"manifest-icon-192.maskable.png",revision:"c87b0319eff874aead92221b924190e3"},{url:"transp-icon-512.png",revision:"001a727b5dd2da348f78080b9cd35b48"},{url:"manifest-icon-512.maskable.png",revision:"67ee50b44a6d85129d3db91232a3a709"},{url:"manifest.webmanifest",revision:"52739689cb478579abcb2b99a7591f60"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
