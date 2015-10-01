var headUrl = 'http://cutty7sark.github.io/ajax_practice/';
var htmlList = ['index1.html', 'pagetwo.html', 'pagethree.html'];

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
		animateDivs();
	},
	error: function(data) {
	  console.error(data);
	}
});

function animateDiv() {
	ajaxResult++;
	if (ajaxResult === 2) {
		$divLeft.animate({left: 0}, 1500);
		$divRight.animate({right: 0}, 1500);
	};
}
