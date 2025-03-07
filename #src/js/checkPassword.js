document.addEventListener('DOMContentLoaded', function () {
	const newPasswordInput = document.getElementById('new-pass');
	const confirmPasswordInput = document.getElementById('current-pass');
	const form = document.querySelector('form');
	const submitBtn = document.querySelector('form button#submitBtn');

	function validatePasswords() {
		const newPassword = newPasswordInput.value.trim();
		const confirmPassword = confirmPasswordInput.value.trim();

		const newPassParent = newPasswordInput.closest('.floating-label-content');
		const confirmPassParent = confirmPasswordInput.closest('.floating-label-content');

		if (!newPassword || !confirmPassword) {
			confirmPassParent.classList.remove('invalid');
			return false;
		}

		if (newPassword !== confirmPassword) {
			confirmPassParent.classList.add('invalid');
			return false;
		} else {
			confirmPassParent.classList.remove('invalid');
			return true;
		}
	}

	confirmPasswordInput.addEventListener('input', validatePasswords);
	newPasswordInput.addEventListener('input', validatePasswords);

	submitBtn.addEventListener('click', function (event) {
		if (!validatePasswords()) {
			form.requestSubmit();
			console.log(form);
		}
		if (validatePasswords()) {
			form.submit();
		}
	});
});
