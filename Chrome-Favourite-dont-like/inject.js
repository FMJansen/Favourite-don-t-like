chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		var imgURL = chrome.extension.getURL('web_star_animation.png');

		var styleTag = '<style type="text/css">';
		styleTag += '.HeartAnimation { background-image: url(' + imgURL + '); }'
		styleTag += '.ProfileTweet-action--favorite \
		.ProfileTweet-actionButton:hover, .ProfileTweet-action--favorite \
		.ProfileTweet-actionButton:focus, .ProfileTweet-action--favorite \
		.ProfileTweet-actionCount:hover, .ProfileTweet-action--favorite \
		.ProfileTweet-actionCount:focus, .favorited \
		.ProfileTweet-action--favorite .Icon--heart, .favorited \
		.ProfileTweet-action--favorite .ProfileTweet-actionButtonUndo {\
			color: #FAB41E; \
		}';
		styleTag += '</style>';

		$(styleTag).appendTo("head");

		setInterval(function() {
			$('[title="Like"], [data-original-title="Like"]').each(function() {
				$(this).attr('data-original-title', 'Favourite')
					.attr('title', 'Favourite');
			});
			$('[title="Undo like"], [data-original-title="Undo like"]').each(function() {
				$(this).attr('data-original-title', 'Favourite')
					.attr('title', 'Unfavourite');
			});
		}, 500);

	}
	}, 10);
});
