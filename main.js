var headUrl = 'http://cutty7sark.github.io/ajax_practice/';
var htmlList = ['index1.html', 'pageone.html', 'pagetwo.html'];

$.ajax({
	url: headUrl + htmlList[1],
	success: function(data) {
		$('#results_one').append(data);
	},
	error: function(data) {
	  console.error(data);
	}
});

$.ajax({
	url: headUrl + htmlList[2],
	success: function(data) {
		$('#results_two').append(data);
	},
	error: function(data) {
	  console.error(data);
	}
});
