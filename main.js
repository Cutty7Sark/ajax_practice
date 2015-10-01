var headUrl = 'http://cutty7sark.github.io/ajax_practice/';
var htmlList = ['index1.html', 'pagetwo.html', 'pagethree.html'];
var ajaxResult = 0;

$.ajax({
	url: headUrl + htmlList[1],
	success: function(data) {
		$('#results_one').append(data);
		animateDiv();
	},
	error: function(data) {
	  console.error(data);
	}
});

$.ajax({
	url: headUrl + htmlList[2],
	success: function(data) {
		$('#results_two').append(data);
		animateDiv();
	},
	error: function(data) {
	  console.error(data);
	}
});

function animateDiv() {
	ajaxResult++;
	if (ajaxResult === 2) {
		$results_one.animate({left: 0}, 1500);
		$results_two.animate({right: 0}, 1500);
	};
}
