// chrome.runtime.onMessage.addListener(
// 	function(request, sender, sendResponse) {
// 		if (request.greeting == "change-icon"){
// 			console.log("jasdhfasdfasd");
// 			chrome.browserAction.setIcon({path: "inactive.png"});
// 			sendResponse({message: "changed-icon"});
// 		}
// 	});

//kiem tra xem co content script nao dang chay hay khong 
	// chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
	// 	chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
	// 		if (response) {
	// 			chrome.browserAction.setIcon({path : "inactive.png"});
	// 			console.log("Change icon 1");
	// 			//console.log("Already there");
	// 		}
	// 		else {
	// 			chrome.browserAction.setIcon({path : "inactive.png"});
	// 			console.log("Change icon 2");
	// 		}
	// 	});
	// });
// Copyright (c) 2016 Ngu Q TRUONG from EasierDanang
//quangngu.xyz

// Called when the user clicks on the browser action.
// chrome.browserAction.onClicked.addListener(function(tab) {
//   // No tabs or host permissions needed!
//   //console.log('Turning ' + tab.url + ' red!');
//   chrome.tabs.executeScript(null, {file: "likeByHashTag.js"});
// });
