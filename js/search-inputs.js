document.addEventListener('DOMContentLoaded', function () {
	const allSiteCheckbox = document.getElementById('all-site');
	const otherCheckboxes = document
		.querySelector('.search-sections')
		.querySelectorAll('.form-check-input:not(#all-site)');

	allSiteCheckbox.addEventListener('change', function () {
		const isChecked = this.checked;

		otherCheckboxes.forEach((checkbox) => {
			checkbox.disabled = isChecked;
			if (isChecked) {
				checkbox.checked = false;
			}
		});
	});

	otherCheckboxes.forEach((checkbox) => {
		checkbox.addEventListener('change', function () {
			if (this.checked) {
				allSiteCheckbox.checked = false;
			}
		});
	});
});
