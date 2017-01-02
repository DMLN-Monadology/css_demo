function loadApp() {

	const flipbook = $('.sample-docs');

	// Check if the CSS was already loaded

	if (flipbook.width()==0 || flipbook.height()==0) {
		setTimeout(loadApp, 10);
		return;
	}

	// Mousewheel

	$('#book-zoom').mousewheel(function(event, delta, deltaX, deltaY) {
        const data = $(this).data();
        const step = 30;
        const flipbook = $('.sample-docs');
        const actualPos = $('#slider').slider('value')*step;

        if (typeof(data.scrollX)==='undefined') {
			data.scrollX = actualPos;
			data.scrollPage = flipbook.turn('page');
		}

        data.scrollX = Math.min($( "#slider" ).slider('option', 'max')*step,
			Math.max(0, data.scrollX + deltaX));

        const actualView = Math.round(data.scrollX/step);
        const page = Math.min(flipbook.turn('pages'), Math.max(1, actualView*2 - 2));

        if ($.inArray(data.scrollPage, flipbook.turn('view', page))==-1) {
			data.scrollPage = page;
			flipbook.turn('page', page);
		}

        if (data.scrollTimer)
			clearInterval(data.scrollTimer);

        data.scrollTimer = setTimeout(() => {
			data.scrollX = undefined;
			data.scrollPage = undefined;
			data.scrollTimer = undefined;
		}, 1000);
    });

	// Slider

	$( "#slider" ).slider({
		min: 1,
		max: 100,

		start(event, ui) {
			if (!window._thumbPreview) {
				_thumbPreview = $('<div />', {'class': 'thumbnail'}).html('<div></div>');
				setPreview(ui.value);
				_thumbPreview.appendTo($(ui.handle));
			} else
				setPreview(ui.value);

			moveBar(false);
		},

		slide(event, ui) {
			setPreview(ui.value);
		},

		stop() {
			if (window._thumbPreview)
				_thumbPreview.removeClass('show');

			$('.sample-docs').turn('page', Math.max(1, $(this).slider('value')*2 - 2));
		}
	});


	// URIs

	Hash.on('^page\/([0-9]*)$', {
		yep(path, parts) {
			const page = parts[1];

			if (page!==undefined) {
				if ($('.sample-docs').turn('is'))
					$('.sample-docs').turn('page', page);
			}

		},
		nop(path) {

			if ($('.sample-docs').turn('is'))
				$('.sample-docs').turn('page', 1);
		}
	});

	// Arrows

	$(document).keydown(e => {
        const previous = 37;
        const next = 39;

        switch (e.keyCode) {
			case previous:

				$('.sample-docs').turn('previous');

			break;
			case next:

				$('.sample-docs').turn('next');

			break;
		}
    });

	// Create the flipbook

	flipbook.turn({
		elevation: 50,
		acceleration: false,
		gradients: true,
		autoCenter: true,
		duration: 1000,
		pages: 30,
		when: {

		turning(e, page, view) {
            const book = $(this);
            const currentPage = book.turn('page');
            const pages = book.turn('pages');

            if (currentPage>3 && currentPage<pages-3) {
				if (page==1) {
					book.turn('page', 2).turn('stop').turn('page', page);
					e.preventDefault();
					return;
				} else if (page==pages) {
					book.turn('page', pages-1).turn('stop').turn('page', page);
					e.preventDefault();
					return;
				}
			} else if (page>3 && page<pages-3) {
				if (currentPage==1) {
					book.turn('page', 2).turn('stop').turn('page', page);
					e.preventDefault();
					return;
				} else if (currentPage==pages) {
					book.turn('page', pages-1).turn('stop').turn('page', page);
					e.preventDefault();
					return;
				}
			}

            Hash.go(`page/${page}`).update();

            if (page==1 || page==pages)
				$('.sample-docs .tabs').hide();
        },

		turned(e, page, view) {

			const book = $(this);

			$('#slider').slider('value', getViewNumber(book, page));

			if (page!=1 && page!=book.turn('pages'))
				$('.sample-docs .tabs').fadeIn(500);
			else
				$('.sample-docs .tabs').hide();

			book.turn('center');
			updateTabs();

		},

		start(e, pageObj) {

			moveBar(true);

		},

		end(e, pageObj) {

			const book = $(this);

			setTimeout(() => {
				$('#slider').slider('value', getViewNumber(book));
			}, 1);

			moveBar(false);

		},

		missing(e, pages) {

			for (let i = 0; i < pages.length; i++)
				addPage(pages[i], $(this));

		}
	}
	}). turn('page', 2);


	$('#slider').slider('option', 'max', numberOfViews(flipbook));

	flipbook.addClass('animated');


	// Show canvas

	$('#canvas').css({visibility: 'visible'});
}
  
