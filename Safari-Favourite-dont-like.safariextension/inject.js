// chrome.extension.sendMessage({}, function(response) {
// 	var readyStateCheckInterval = setInterval(function() {
// 	if (document.readyState === "complete") {
// 		clearInterval(readyStateCheckInterval);
//
if (window.top === window) {
	console.log('stars');
		var imgURL = safari.extension.baseURI + 'web_star_animation.png';

		$('.HeartAnimation').each(function() {
			$(this).css('background-image', 'url(' + imgURL + ')') ;
		});

		setTimeout(function() {
			$('.HeartAnimation').each(function() {
				$(this).parent().parent().attr('data-original-title', 'Favourite');
			});
			console.log('stars');
		}, 1000);
}

// 	}
// 	}, 10);
// });
