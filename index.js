$(document).ready(() => {
	$('.accordion').on('click', 'h2', function () {
		// alert('s');
		const title = $(this);
		const TitleParagraph = title.next();
		var paragraph = title.parent().siblings().find('p');
		TitleParagraph.slideToggle();
		paragraph.slideUp();
	});
});
