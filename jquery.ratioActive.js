(function($){
	$.fn.ratioActive = function(options) {

		// Configure default options
		var settings = $.extend({
			'transition': false,
			'bind-resize': true
		}, options);


		var targets = $(this.selector);

		// Avoid killing the browser on resize
		if(settings['bind-resize']) {
			var timeout;
			$(window).bind('resize', function(){
				clearTimeout(timeout);
				timeout = setTimeout(function(){
					trigger();
				}, 150);
			});
		}

		// Fire trigger on initialize
		$(window).load(trigger);
		if($.isReady) trigger;

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

				var targetWidth = target.parent().width(),
					targetHeight = targetWidth / (ratio[0] / ratio[1]);

				if(!settings['transition']) {
					// Transition disabled
					prefix('transition', target, 'none')
				} else {
					if(settings['transition'] !== true) {
						// Transition enabled with custom value
						prefix('transition', target, settings['transition']);
					} else {
						// Transition enabled
						prefix('transition', target, 'all .6s ease');
					}
				}

				target.width(targetWidth).height(targetHeight);
			});

		}

		// Abstract function for vendor prefixes
		function prefix(property, target, value) {
			var prefixes = ['', '-ms-', '-o-', '-moz-', '-webkit-'],
				loop = prefixes.length,
				css = {};

			while(loop--) {
				css[prefixes[loop] + property] = value;
			}

			target.css(css);
		}

		// Return object to enable chaining
		return this;
	}
})(jQuery);
