var grayscale = false;

function dorialize() {
  if(grayscale){
    chrome.tabs.executeScript({
      code: 'document.body.style.filter = ""'
    });
    chrome.browserAction.setIcon({
      path:"icon_colored.jpg"
    });
  } else {
    chrome.tabs.executeScript({
      code: 'document.body.style.filter = "grayscale()"'
    });
    chrome.browserAction.setIcon({
      path:"icon_grayscale.jpg"
    });
  }
  grayscale = !grayscale;
  
}


chrome.browserAction.onClicked.addListener(dorialize);
