;(function ($)
{
	$.fn.parallax = function(speed,zindex) {
		$('body').append('<div id="parallaxbase"></div>');

		if(!speed) {
			speed = 10;	//%
		}
		if(!zindex) {
			zindex = 1;	//%
		}
		
		var step;
		var lastOffset;
		var parallax = this.first();
		parallax.css({'z-index': zindex});

		parallax.init = function() {

			parallax.stop().addClass('parallax');

			function parallaxScrolling() {
				// console.log('lastOffset:'+lastOffset);

				var base = $('#parallaxbase');

                var baseOffset = base.offset();
                var topOffset = baseOffset.top;

				step = (lastOffset-topOffset)/100*speed;

				var curPos = parseInt(parallax.css('top'))+step;
                parallax.css({'top' : curPos});

                lastOffset = topOffset;
	        }

	        $(document).scroll(function (e) {
	            parallaxScrolling();
	        });

		};
		parallax.init();
	};
})(jQuery);










