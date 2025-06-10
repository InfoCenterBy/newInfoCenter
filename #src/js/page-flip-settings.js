document.addEventListener('DOMContentLoaded', () => {
	const magazines = document.querySelectorAll('.magazine-container');
	const pageFlipInstances = [];

	for (let i = 0; i <= magazines.length; i++) {
		const container = document.querySelector(`#magazine-${i}`);

		if (!container) continue;

		pageFlipInstances[i] = new St.PageFlip(container, {
			size: 'stretch',
			height: 700,
			width: 560,
			minWidth: 340,
			minHeight: 400,
			maxWidth: 700,
			maxHeight: 1200,
			flippingTime: 600,
		});

		pageFlipInstances[i].loadFromHTML(
			container.querySelectorAll('.page'),
		);
		pageFlipInstances[i].update();

		const modal = document.getElementById(`magazine-modal-${i}`);
		if (modal) {
			modal.addEventListener('shown.bs.modal', () => {
				pageFlipInstances[i].update();
			});
		}

		window.addEventListener('resize', () => {
			if (modal?.classList.contains('show')) {
				pageFlipInstances[i].update();
			}
		});
	}
});
