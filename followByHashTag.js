//dung de kiem tra xem co content script nao dang chay hay khong
//neu co thi se khong nap code likeByHashtag.js lan 2 
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.greeting == "hello")
      sendResponse({message: "hi"});
  });

//changeIconToInactive();

//bat dau lap: se ket thuc khi count == 0 
var myLoop = setInterval(function () {autoLikeInHashTagSearch();}, 5000);
//config la parameter so lan loop duoc gui tu- popup.js
console.log("config = " + config );
//so lan lap
var count = config;


// function changeIconToInactive(){
//   chrome.runtime.sendMessage({greeting: "change-icon"}, function(response) {
//     console.log(response.farewell);
//   });
//   //chrome.browserAction.setIcon({path : "inactive.png"});
// }
/*------------------Support method----------------------------------------*/

//thuc hien: next trang va click button like 
function autoLikeInHashTagSearch(){
  //khi lap du so lan thi go~ bo? Interval 
  count = count - 1;
  if(count == 0) {
    clearInterval(myLoop);
    location.reload();
  }
  clickButtonHavesInnerText("Next");
  setTimeout(function(){
    //wait    
    clickButtonHavesInnerText("Follow");
  }, 2000);
}


/*
*click button have text as we need
*/
function clickButtonHavesInnerText(innerText){
  var found = getElementByInnerText(innerText);
  if(found!=null){
    found.click();
  }else{
    var found2 = getButtonByInnerText(innerText);
    if (found2!=null) {
      found2.click();
    }
    //console.log("Error!!! please reload page & extension! Can't find"+innerText);
  }
}


/*
*get <a> by text
*@text
*/
function getElementByInnerText(innerText){
  var aTags = document.getElementsByTagName("a");
  var searchText = innerText;
  var found;

  for (var i = 0; i < aTags.length; i++) {
    if (aTags[i].textContent == searchText) {
      found = aTags[i];
      break;
    }
  }
  return found;
}


/*
*get <button> by text
*@text
*/
function getButtonByInnerText(innerText){
  var aTags = document.getElementsByTagName("button");
  var searchText = innerText;
  var found;

  for (var i = 0; i < aTags.length; i++) {
    if (aTags[i].textContent == searchText) {
      found = aTags[i];
      break;
    }
  }
  return found;
}

/*
*get element by attr
*/
function getAllElementsWithAttribute(attribute)
{
  var matchingElements = [];
  var allElements = document.getElementsByTagName('*');
  for (var i = 0, n = allElements.length; i < n; i++)
  {
    if (allElements[i].getAttribute(attribute) !== null)
    {
      // Element exists with attribute. Add to array.
      matchingElements.push(allElements[i]);
    }
  }
  return matchingElements;
}