document.addEventListener('DOMContentLoaded', function () {
	const pageFlip2 = new St.PageFlip(document.querySelector('#magazine'), {
		size: 'stretch',
		height: 700,
		width: 560,
		minWidth: 340,
		minHeight: 400,
		maxWidth: 700,
		maxHeight: 1200,
		flippingTime: 600,
	});

	pageFlip2.loadFromHTML(document.querySelectorAll('.page'));
	pageFlip2.update();

	document
		.getElementById('magazine-modal')
		.addEventListener('shown.bs.modal', function () {
			pageFlip2.update();
		});

	window.addEventListener('resize', function () {
		if (
			document
				.getElementById('magazine-modal')
				.classList.contains('show')
		) {
			pageFlip2.update();
		}
	});
});
