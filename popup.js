var taburi;

chrome.tabs.query({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT},
   function(tabs){
	  document.getElementById('urldiv').innerHTML = tabs[0].url.toString();
	  taburi = tabs[0].url.toString();

	  setResult();
   }
);

function httpGet(reqUrl)
{
	var localurl = "http://localhost:8000/analyze?postUrl=";
	theUrl = localurl + encodeURI(reqUrl);
	console.log(theUrl);
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

function setResult(){
    document.getElementById('response').innerHTML = httpGet(taburi);
}
