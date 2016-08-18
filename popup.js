var btnPlayStart = document.getElementById('play-start');
var btnPlayStop = document.getElementById('play-stop');
var txtNumberLoop = document.getElementById('number-loop');
var number_loop;
var cbLike= document.getElementById('cb_like');
var cbFollow= document.getElementById('cb_follow');
var lbStatusApp = document.getElementById('status-app');
var strStatus = "Extension is running...";

//kiem tra neu day la 1st hay 2nd... khi click vao icon extension
checkStateApp();

/*kiem tra neu day la 1st hay 2nd... khi click vao icon extension
*firsttime: return true
*2ndtime: return false
*/
function checkStateApp(){
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
			//Neu co phan hoi nghia la dang co macro chay
			//li do la trong macro da co dang ki su kien nhan message
			if (response) {//co phan hoi
				changeLayout();
			}
			else {
				console.log("heloooooooo2");
			}
		});
	});

}
/*
*change layout after start macro
*/
function changeLayout(){
	console.log("heloooooooo1");
				//disable button start 
				btnPlayStart.disabled = true;
				//change status
				lbStatusApp.innerHTML = "Extension is running...";
				//disable checkbox
				cbLike.disabled = true;
				cbFollow.disabled = true;
				//log
				console.log("You've just open this dialog again!");
				//return true;
			}
/*
*start macro depend on user's choosen
*/
function startMacro() {
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
			//Neu co phan hoi nghia la dang co macro chay
			//li do la trong macro da co dang ki su kien nhan message
			if (response) {//co phan hoi
				console.log("Already there");
			}
			else {
				console.log("Not there, inject contentscript");
				//switch macro 
				if (cbLike.checked && cbFollow.checked){
					doLikeAndFollow();
				}else if (cbLike.checked){
					doLike();
				}else{
					doFollow();
				}

			}
		});
	});

}

/*
*stop macro by reloading page
*/
function stopMacro(){
	chrome.tabs.executeScript(null, {file: 'stopMacro.js'});
}

/*
*action like
*/
function doLike(){
	//lay so lan lap
	number_loop = txtNumberLoop.value;
	//disable btn start
	changeLayout();
	//btnPlayStart.disabled = true;
	var codeMessage = 'var config = '+ number_loop + ' ;';

	//cong viec chinh 'var config = 1;'
	chrome.tabs.executeScript(null, {
		code: codeMessage
	}, function() {
		chrome.tabs.executeScript(null, {file: 'likeByHashTag.js'});
	});
}

function doLikeAndFollow(){
	//lay so lan lap
	number_loop = txtNumberLoop.value;
	//disable btn start
	changeLayout();
	//btnPlayStart.disabled = true;
	var codeMessage = 'var config = '+ number_loop + ' ;';

	//cong viec chinh 'var config = 1;'
	chrome.tabs.executeScript(null, {
		code: codeMessage
	}, function() {
		chrome.tabs.executeScript(null, {file: 'likeAndFollowByHashTag.js'});
	});
}

/*
*action comment
*/
function doFollow(){
	//lay so lan lap
	number_loop = txtNumberLoop.value;
	//disable btn start
	changeLayout();
	//btnPlayStart.disabled = true;
	var codeMessage = 'var config = '+ number_loop + ' ;';

	//cong viec chinh 'var config = 1;'
	chrome.tabs.executeScript(null, {
		code: codeMessage
	}, function() {
		chrome.tabs.executeScript(null, {file: 'followByHashTag.js'});
	});
}



/*kiem tra xem da co content script nao da duoc chen- truoc do hay chua
*yes: return true
*no: return false;
*/
function checkIfContentScriptExist(){
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
			//Neu co phan hoi nghia la dang co macro chay
			//li do la trong macro da co dang ki su kien nhan message
			if (response) {//co phan hoi
				return true;
			}
			else {
				return false;
			}
		});
	});
}
//dang ki su kien
document.getElementById('play-start').addEventListener('click', startMacro);
document.getElementById('play-stop').addEventListener('click', stopMacro);
// window.onload = checkStateApp;

