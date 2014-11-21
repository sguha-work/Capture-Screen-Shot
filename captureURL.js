var url = [
		"http://jsfiddle.net/fusioncharts/B2t38/",
		"http://jsfiddle.net/fusioncharts/AWkGN/",
		"http://jsfiddle.net/fusioncharts/c8V2F/",
		"http://jsfiddle.net/fusioncharts/zBRTE/",
		"http://jsfiddle.net/fusioncharts/UEY9D/",
		"http://jsfiddle.net/fusioncharts/dK6U8/",
		"http://jsfiddle.net/fusioncharts/8PRbM/",
		"http://jsfiddle.net/fusioncharts/rzz34/",
		"http://jsfiddle.net/fusioncharts/p4jyY/",
		"http://jsfiddle.net/fusioncharts/d3X7x/",
		"http://jsfiddle.net/fusioncharts/BDZEG/",
		"http://jsfiddle.net/fusioncharts/b533S/",
		"http://jsfiddle.net/fusioncharts/nR8CW/",
		"http://jsfiddle.net/fusioncharts/Q499Q/",
		"http://jsfiddle.net/fusioncharts/mEHs3/"
	];
var counter = 1;
var length = url.length;
var page = require('webpage').create();
var getStructuredUrl = (function(classicUrl) {
	var paths = classicUrl && classicUrl.split('http://')[1],
 		parts = paths && paths.split('/'),
 		domain = parts && parts[0],
 		shellDomain = 'http://fiddle.jshell.net',
 		user = parts && parts[1],
 		uniqueStr = parts && parts[2],
 		newUrl;
	newUrl = [shellDomain, user, uniqueStr, "show/"].join('/');
	return {'url': newUrl, 'unique_str': uniqueStr};

});
var startRender = (function(){
	if(counter >= length) {
		phantom.exit();		
	} else {
		var modifiedUrl = getStructuredUrl(url[counter-1]);
		console.log("Processing " + modifiedUrl.url + "index no "+counter);
		page.open(modifiedUrl.url, function() {
			setTimeout(function(){
				  console.log("created " + modifiedUrl.unique_str+".png");
				  page.render(modifiedUrl.unique_str+".png");
				  counter+=1;
				  startRender();	
			}, 30000);
			
		});		
	}
});
startRender();
