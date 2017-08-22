chrome.tabs.query({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT},
   function(tabs){
	  document.getElementById('urldiv').innerHTML = tabs[0].url.toString();
      setResult();
   }
);

function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

function setResult(){
    document.getElementById('response').innerHTML = httpGet("http://localhost:8000/analyze");
}