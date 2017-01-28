var grayscale = false;

var resetCSS = 'document.body.style.filter = "";for(var i=0;i<document.images.length;i++){document.images[i].style.setProperty("filter","")}';
var dorializeCSS = 'document.body.style.filter = "grayscale()";for(var i=0;i<document.images.length;i++){document.images[i].style.setProperty("filter","contrast(0)")}';

function dorialize() {
  if(grayscale){
    chrome.tabs.executeScript({
      code: resetCSS
    });
    chrome.browserAction.setIcon({
      path:"icon_colored.jpg"
    });
  } else {
    chrome.tabs.executeScript({
      code: dorializeCSS
    });
    chrome.browserAction.setIcon({
      path:"icon_grayscale.jpg"
    });
  }
  grayscale = !grayscale;
  
}


chrome.browserAction.onClicked.addListener(dorialize);
