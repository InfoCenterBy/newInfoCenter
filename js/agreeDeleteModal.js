const agreeDeleteCheck = document.querySelector('#agreeDeleteCheck');
const deleteAgreeBtn = document.querySelector('#deleteAgreeBtn');

function agreeCheckIsTrue(checkBox) {
	if (checkBox.checked) {
		return true;
	} else {
		return false;
	}
}

if (agreeDeleteCheck) {
	if (agreeCheckIsTrue(agreeDeleteCheck)) {
		deleteAgreeBtn.disabled = false;
	} else {
		deleteAgreeBtn.disabled = true;
	}
	agreeDeleteCheck.addEventListener('change', () => {
		if (agreeCheckIsTrue(agreeDeleteCheck)) {
			deleteAgreeBtn.disabled = false;
		} else {
			deleteAgreeBtn.disabled = true;
		}
	});
}
