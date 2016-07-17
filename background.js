// Copyright (c) 2016 Ngu Q TRUONG from EasierDanang
//quangngu.xyz

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  // No tabs or host permissions needed!
  //console.log('Turning ' + tab.url + ' red!');
  chrome.tabs.executeScript(null, {file: "likeByHashTag.js"});
});
