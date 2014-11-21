var url = [
		"your",
		"array",
		"of",
		"urls"
	];
var counter = 1;
var length = url.length;
var page = require('webpage').create();

var startRender = (function(){
	if(counter >= length) {
		phantom.exit();		
	} else {
		
		console.log("Processing " + url[counter-1] + "index no "+counter);
		page.open(url[counter-1], function() {
			setTimeout(function(){
				  console.log("created " + counter +".png");
				  page.render(counter+".png");
				  counter+=1;
				  startRender();	
			}, 30000);//to open the website the program will wait for 30 sec, if you have a slow iinternet make the value higher
			
		});		
	}
});
startRender();
