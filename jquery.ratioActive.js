(function($){
	$.fn.ratioActive = function(options) {
		
		var targets = $(this.selector);

		// Avoid killing the browser on resize
		var timeout;
		$(window).bind('resize', function(){
			clearTimeout(timeout);
			timeout = setTimeout(function(){
				trigger();
			}, 150);
		});

		// Fire trigger on initialize
		trigger();

		// Trigger, where the magic happens
		function trigger() {

			// Loop through each target
			targets.each(function(){
				var target = $(this),
					ratio = target.data('rA-ratio');

				// If ratio is undefined lets define it
				if(typeof ratio == "undefined") {
					ratio = target.width() + ':' + target.height();
					target.data('rA-ratio', ratio);
				}

				// Split ratio
				ratio = ratio.split(':');

				// Set target width to 100% to determine avaliable space
				target.width('100%');

				// Set width and height based on resulting available width
				target.width(target.width()).height(target.width() / (ratio[0] / ratio[1]));

			});

		}
	}
})(jQuery); 
