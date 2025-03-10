const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map((tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl));

document.addEventListener('DOMContentLoaded', function () {
	const formModalValidation = document.querySelector('form.form-modal-validation');
	const parentModal = new bootstrap.Modal('#confirmPersonalDataModal', {});
	if (formModalValidation && parentModal) {
		formModalValidation.addEventListener('submit', (e) => {
			e.preventDefault();
			parentModal.toggle();

			let checkDataModal = new bootstrap.Modal('#checkDataModal', {});
			checkDataModal.show();
			// formModalValidation.requestSubmit();
			// let submitBtn = formModalValidation.querySelector('button[type="submit"]')
		});
	}
});

document.addEventListener('DOMContentLoaded', function () {
	const swiperMainBanner = new Swiper('.swiper.main-banner', {
		direction: 'horizontal',
		// loop: true,

		pagination: {
			el: '.main-banner-wrapper .swiper-pagination',
			dynamicBullets: true,
			dynamicMainBullets: 4,
			clickable: true,
		},

		navigation: {
			nextEl: '.main-banner-wrapper .swiper-button-next-custom',
			prevEl: '.main-banner-wrapper .swiper-button-prev-custom',
			// disabledClass: 'disabled',
			// navigationDisabledClass: 'disabled',
		},
		allowTouchMove: true,
		grabCursor: true,
		// allowSlideNext: false,
	});

	const swiperMainNav = new Swiper('.swiper.slider-nav', {
		direction: 'horizontal',
		loop: true,
		allowTouchMove: true,
		// grabCursor: true,
		// allowSlideNext: false,
		breakpointsBase: 'window',
		autoplay: {
			delay: 4000,
			pauseOnMouseEnter: true,
		},
		breakpoints: {
			320: {
				slidesPerView: 2,
				spaceBetween: 10,
				loop: true,
			},
			576: {
				slidesPerView: 3,
				spaceBetween: 10,
				loop: true,
			},
			768: {
				slidesPerView: 4,
				spaceBetween: 10,
				loop: true,
			},
			992: {
				slidesPerView: 7,
				spaceBetween: 10,
				loop: true,
			},
			1100: {
				slidesPerView: 9,
				loop: true,
				spaceBetween: 20,
			},
		},
	});

	const swiperMainPartner = new Swiper('.swiper.slider-partner', {
		direction: 'horizontal',
		loop: true,
		allowTouchMove: true,
		autoplay: {
			delay: 4000,
			pauseOnMouseEnter: true,
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 10,
			},
			576: {
				slidesPerView: 2,
				spaceBetween: 10,
			},
			768: {
				slidesPerView: 3,
				spaceBetween: 10,
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 10,
			},
			1200: {
				slidesPerView: 4,
				spaceBetween: 12,
			},
			1400: {
				slidesPerView: 5,
				spaceBetween: 24,
			},
		},
	});
});

document.addEventListener('DOMContentLoaded', function () {
	const passwordInputs = document.querySelectorAll('.floating-label-content .password-input');
	const togglePasswordIcons = document.querySelectorAll('.password-icon');

	togglePasswordIcons.forEach((icon, index) => {
		icon.addEventListener('click', function () {
			const passwordInput = passwordInputs[index];
			const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
			passwordInput.setAttribute('type', type);

			if (type === 'password') {
				this.classList.remove('bi-eye');
				this.classList.add('bi-eye-slash');
			} else {
				this.classList.remove('bi-eye-slash');
				this.classList.add('bi-eye');
			}
		});
	});
});

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

document.addEventListener('DOMContentLoaded', () => {
	const radioGroupsSideNav = document.querySelectorAll('.side-nav-step .radio-group-step');
	const radioGroupsModal = document.querySelectorAll('.modal .radio-group-step');

	function toggleGroupProcess(radioGroups) {
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
	}

	function toggleGroupDisabled(group, isDisabled) {
		const radios = group.querySelectorAll("input[type='radio']");
		radios.forEach((radio) => {
			radio.disabled = isDisabled;
		});
	}

	toggleGroupProcess(radioGroupsSideNav);
	toggleGroupProcess(radioGroupsModal);
});

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

const phoneInput = document.querySelector('input[type=tel].tel-with-mask');

if (phoneInput) {
	IMask(phoneInput, {
		mask: '+{375} (00) 000-00-00',
		lazy: false,
	});
}
