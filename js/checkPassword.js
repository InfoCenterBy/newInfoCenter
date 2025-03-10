document.addEventListener('DOMContentLoaded', function () {
	const newPasswordInput = document.getElementById('new-pass');
	const confirmPasswordInput = document.getElementById('current-pass');
	const form = document.querySelector('form.form-validation');
	const submitBtn = document.querySelector('form.form-validation button[type="submit]"');

	function validatePasswords() {
		const newPassword = newPasswordInput.value.trim();
		const confirmPassword = confirmPasswordInput.value.trim();

		const newPassParent = newPasswordInput.closest('.floating-label-content');
		const confirmPassParent = confirmPasswordInput.closest('.floating-label-content');

		if (newPassword && confirmPassword && newPassword !== confirmPassword) {
			confirmPassParent.classList.add('invalid');
			return false;
		} else {
			confirmPassParent.classList.remove('invalid');
			return true;
		}
	}

	confirmPasswordInput.addEventListener('input', validatePasswords);
	newPasswordInput.addEventListener('input', validatePasswords);

	form.addEventListener('submit', (e) => {
		e.preventDefault();
		submitBtn.addEventListener('click', () => {
			if (validatePasswords()) {
				form.requestSubmit();
				// console.log(form);
			}
			if (!validatePasswords()) {
				form.submit();
			}
		});
	});
});
