// 'use strict';

chrome.tabs.query({active : true, currentWindow: true}, tabs => {
  let url = tabs[0].url;
  document.getElementById("URL").innerHTML = url;
});
