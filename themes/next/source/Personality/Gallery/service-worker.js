"use strict";var precacheConfig=[["/Personality/Gallery/index.html","065848f7c43fe4f7047db729e573bdc2"],["/Personality/Gallery/static/css/main.636e5c3f.css","76e77e6fbe3abb36b87f8846de44cc70"],["/Personality/Gallery/static/js/main.47c4c4e5.js","d82f2927d26fc44c88250b172affb951"],["/Personality/Gallery/static/media/1.bd63d005.jpg","bd63d00550899d17d96eab0e523e191a"],["/Personality/Gallery/static/media/10.d751435c.jpg","d751435c79f8947a09d2247b694c9f38"],["/Personality/Gallery/static/media/11.75105300.jpg","751053009988ada921063b9c976a0231"],["/Personality/Gallery/static/media/12.851d6074.jpg","851d60748c878027e7a52c42c441b138"],["/Personality/Gallery/static/media/13.4f0b2bbd.jpg","4f0b2bbd13d80bb56db798dffb9bf438"],["/Personality/Gallery/static/media/14.707f3ac5.jpg","707f3ac5e9fc103169b34fe0b01f59d3"],["/Personality/Gallery/static/media/15.a3b5eb2f.jpg","a3b5eb2fd4be679210afd738fcf8edb8"],["/Personality/Gallery/static/media/16.ffa5badd.jpg","ffa5badd054f465bf879543954816c29"],["/Personality/Gallery/static/media/2.6fd1361a.jpg","6fd1361a03f7cf3438b3aab6bc409c7e"],["/Personality/Gallery/static/media/3.c88397ea.jpg","c88397eabc61b0cd856c63dba9af15f6"],["/Personality/Gallery/static/media/4.ace3d5b7.jpg","ace3d5b785f01689d46740d26b55d68a"],["/Personality/Gallery/static/media/5.cdb00628.jpg","cdb0062838530082085a0dd3e2f0b1d1"],["/Personality/Gallery/static/media/6.1555904a.jpg","1555904a3ed0f25d93fafb91d409d99e"],["/Personality/Gallery/static/media/7.ed3b6061.jpg","ed3b6061163c390a6c6a9aea559e6d06"],["/Personality/Gallery/static/media/8.be1a90b6.jpg","be1a90b6fc3184f6a923cb3720b92ec4"],["/Personality/Gallery/static/media/9.120c52ed.jpg","120c52ed00e61c10a538b35b498020e4"],["/Personality/Gallery/static/media/turn-arrow.583ca888.eot","583ca888b447d46759b91bbc312c8337"],["/Personality/Gallery/static/media/turn-arrow.860e608e.woff","860e608ed28f527db5860195ed618985"],["/Personality/Gallery/static/media/turn-arrow.bad2eaf2.ttf","bad2eaf2d783e1bb2ef78f6b7ac05e88"],["/Personality/Gallery/static/media/turn-arrow.e33d265f.svg","e33d265f5a523a9d3598b9f685319c26"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,r){var n=new URL(e);return r&&n.pathname.match(r)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],r=new URL(a,self.location),n=createCacheKey(r,hashParamName,t,/\.\w{8}\./);return[r.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var r=new Request(t,{credentials:"same-origin"});return fetch(r).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),r="index.html";(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,r),a=urlsToCacheKeys.has(t));var n="/Personality/Gallery/index.html";!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL(n,self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});