var postRegex = new RegExp("https:\/\/www.reddit.com\/r\/.*?[\/]comments\/.*");

chrome.tabs.query({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT},
   function(tabs){
	  document.getElementById('urldiv').innerHTML = tabs[0].url.toString();
	  var taburi = tabs[0].url.toString();

	  setResult(taburi);
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

function setResult(taburi){
	if(postRegex.test(taburi) == true){
		document.getElementById('response').innerHTML = "this is a reddit post address, can be analyzed";
		// document.getElementById('response').innerHTML = httpGet(taburi);
	}else{
		document.getElementById('response').innerHTML = "This is not a reddit post!";
	}
	
    // document.getElementById('response').innerHTML = httpGet(taburi);
}
