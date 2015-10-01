var headUr1 = '/ajax';
var htmlList = ['index1.html', 'pageone.html', 'pagetwo.html'];

$.ajax({
	url: headUr1 = 'pageone.html',
	success: function(data) {
		$('body').append(data);
		//document.body.appendChildren(data);
	},
	error: function(data) {
	  console.error(data);
	}
});

htmlList.forEach( loadHtmlFiles);


// $.ajax({
// 	dataType: 'json',
// 	url: headUr1 + element,
// 	success: function(data) {
// 		var wrapDiv = $('<div>');
// 		wrapDiv.html('<h2>' + data.title + '</h2><p>' + data.desc + </p>);
// 		$('.wrapper').append(wrapDiv);
// 		//document.body.appendChildren(data);
// 	},
// 	error: function(data) {
// 	  console.error(data);
// 	}
// });
// jsonList.forEach( loadJSONFiles);
