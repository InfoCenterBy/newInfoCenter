document.addEventListener('DOMContentLoaded', function () {
	const buttons = document.querySelectorAll('.send-resume');
	const input = document.getElementById('desired-position');

	buttons.forEach((button) => {
		button.addEventListener('click', function () {
			const vacancyTitle = this.closest('.accordion-item')
				.querySelector('.vacancy-title')
				.textContent.replace(/\s+/g, ' ')
				.trim();
			input.value = vacancyTitle;
		});
	});
});
