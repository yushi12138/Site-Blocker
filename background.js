// reference : 
// https://stackoverflow.com/questions/43889727/how-do-i-block-certain-websites-with-my-chrome-extension

'use strict';

console.log("Loaded Yu's Site Blocker!");


function blockRequest(details) {
   return {cancel: true};
}

function updateFilters(urls) {
   if(chrome.webRequest.onBeforeRequest.hasListener(blockRequest))
     chrome.webRequest.onBeforeRequest.removeListener(blockRequest);
   chrome.webRequest.onBeforeRequest.addListener(
     blockRequest, 
     {urls: ["*://www.youtube.com/*", "*://*.ifvod.tv/*", "*://*.pornhub.com/*", "*://*.jav.guru/*", "*://*.javmost.com/*","*://*.xvideos.com/*"]}, 
     ['blocking']);
}

updateFilters();
