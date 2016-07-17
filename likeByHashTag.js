setInterval(function () {autoLikeInHashTagSearch();}, 2000);
//document.body.style.backgroundColor="red";

function autoLikeInHashTagSearch(){
  clickButtonHavesInnerText("Next");
  clickButtonHavesInnerText("Like");
}

//alert("Hello from your Chrome extension!");
function clickButtonHavesInnerText(innerText){
  var found = getElementByInnerText(innerText);
  if(found!=null){
    found.click();
  }else{
    alert("Error!!! please reload page & extension!");
  }
}

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