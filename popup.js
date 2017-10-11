var postRegex = new RegExp("https:\/\/www.reddit.com\/r\/.*?[\/]comments\/.*");

chrome.tabs.query({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT},
   function(tabs){
	  // document.getElementById('urldiv').innerHTML = tabs[0].url.toString();
	  var taburi = tabs[0].url.toString();

	  queryRequest(taburi);
   }
);

function httpGet(reqUrl)
{

	var localurl = "http://localhost:8000/analyze?postUrl=";
	
  theUrl = localurl + encodeURI(reqUrl);
  
  var xmlHttp = new XMLHttpRequest();

  document.getElementById('response').innerHTML = "Analyzing ...";

  xmlHttp.onreadystatechange = function()
    {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
        {

            (function($) {
              $("#response").fadeOut(600, function(){
                $("#response").html(xmlHttp.responseText).fadeIn(800);  
              });

            })(jQuery);

        }
    }; 

    xmlHttp.open( "GET", theUrl, true ); // true for asynchronous request, 'false' will block response div
    xmlHttp.send( null );
}

function queryRequest(taburi){
	if(postRegex.test(taburi) == true){

		httpGet(taburi);
	
  }else{
	
  	document.getElementById('response').innerHTML = "This is not a reddit post!";
	
  }

}

