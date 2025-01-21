document.addEventListener('DOMContentLoaded', () => {
	const radioGroups = document.querySelectorAll('.radio-group-step');

	for (let i = 1; i < radioGroups.length; i++) {
		toggleGroupDisabled(radioGroups[i], true);
	}

	radioGroups.forEach((group, index) => {
		const radios = group.querySelectorAll("input[type='radio']");
		radios.forEach((radio) => {
			radio.addEventListener('change', () => {
				if (radio.checked && index < radioGroups.length - 1) {
					toggleGroupDisabled(radioGroups[index + 1], false);
				}
			});
		});
	});

	function toggleGroupDisabled(group, isDisabled) {
		const radios = group.querySelectorAll("input[type='radio']");
		radios.forEach((radio) => {
			radio.disabled = isDisabled;
		});
	}
});
