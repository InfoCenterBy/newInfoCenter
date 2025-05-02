const tooltipTriggerList = document.querySelectorAll(
     '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
     (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

document.addEventListener('DOMContentLoaded', function () {
     const formModalValidation = document.querySelector(
          'form.form-modal-validation'
     );
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

function getRandomInt(min, max) {
     return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.addEventListener('DOMContentLoaded', function () {
     try {
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

          const sliderBannerSM = new Swiper('.slider-banner-sm .swiper', {
               direction: 'horizontal',
               // loop: true,
               allowTouchMove: true,
               autoplay: {
                    delay: 4000,
                    pauseOnMouseEnter: true,
               },
               navigation: {
                    nextEl: '.slider-banner-sm .swiper-button-next-custom',
                    prevEl: '.slider-banner-sm .swiper-button-prev-custom',
                    // disabledClass: 'disabled',
                    // navigationDisabledClass: 'disabled',
               },
               breakpoints: {
                    320: {
                         slidesPerView: 1,
                         spaceBetween: 10,
                    },
                    576: {
                         slidesPerView: 1,
                         spaceBetween: 10,
                    },
                    768: {
                         slidesPerView: 2,
                         spaceBetween: 10,
                    },
                    992: {
                         slidesPerView: 3,
                         spaceBetween: 10,
                    },
                    1200: {
                         slidesPerView: 3,
                         spaceBetween: 12,
                    },
                    1400: {
                         slidesPerView: 3,
                         spaceBetween: 24,
                    },
               },
          });

          const sliderInfoInner = new Swiper('.slider-info-inner .swiper', {
               direction: 'horizontal',
               loop: true,
               allowTouchMove: true,
               autoplay: {
                    delay: 4000,
                    pauseOnMouseEnter: true,
               },
               navigation: {
                    nextEl: '.slider-info-inner .swiper-button-next-custom',
                    prevEl: '.slider-info-inner .swiper-button-prev-custom',
                    // disabledClass: 'disabled',
                    // navigationDisabledClass: 'disabled',
               },
               slidesPerView: 1,
          });
     } catch (error) {}
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

document.addEventListener('DOMContentLoaded', function() {
const pendingCheckContainer = document.querySelectorAll('.pending-check-block');

pendingCheckContainer.forEach((container) => {
     let checkbox = container.querySelector('.agree-delete-check');
     let button = container.querySelector('.delete-agree-btn');

     function agreeCheckIsTrue(checkBox) {
          if (checkBox.checked) {
               return true;
          } else {
               return false;
          }
     }

     if (checkbox) {
          if (agreeCheckIsTrue(checkbox)) {
               button.disabled = false;
          } else {
               button.disabled = true;
          }
          checkbox.addEventListener('change', () => {
               if (agreeCheckIsTrue(checkbox)) {
                    button.disabled = false;
               } else {
                    button.disabled = true;
               }
          });
     }
})
});

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
     const submitBtn = document.querySelector(
          'form.form-validation button[type="submit]"'
     );

     function validatePasswords() {
          const newPassword = newPasswordInput.value.trim();
          const confirmPassword = confirmPasswordInput.value.trim();

          const newPassParent = newPasswordInput.closest(
               '.floating-label-content'
          );
          const confirmPassParent = confirmPasswordInput.closest(
               '.floating-label-content'
          );

          if (
               newPassword &&
               confirmPassword &&
               newPassword !== confirmPassword
          ) {
               confirmPassParent.classList.add('invalid');
               return false;
          } else {
               confirmPassParent.classList.remove('invalid');
               return true;
          }
     }

     if (newPasswordInput && confirmPasswordInput && form && submitBtn) {
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
     }
});

document.addEventListener('DOMContentLoaded', function () {
     const radioButtons = document.querySelectorAll('input[name="tabRadio"]');

     const tabPanes = document.querySelectorAll('.tab-pane');

     radioButtons.forEach((radio) => {
          radio.addEventListener('change', () => {
               tabPanes.forEach((pane) =>
                    pane.classList.remove('active', 'show')
               );

               const targetPane = document.querySelector(
                    radio.getAttribute('data-bs-target')
               );

               if (targetPane) {
                    targetPane.classList.add('active', 'show');
               }
          });
     });
});

const phoneInputs = document.querySelectorAll('input[type=tel].tel-with-mask');

if (phoneInputs) {
     phoneInputs.forEach((input) => {
          let mask;
          input.addEventListener('focus', function () {
               if (!mask) {
                    mask = IMask(input, {
                         mask: '+{375}(00)000-00-00',
                         lazy: false,
                         blocks: {
                              375: {
                                   mask: '375',
                                   immutable: true,
                              },

                              '00': {
                                   mask: '00',
                              },
                              '000': {
                                   mask: '000',
                              },
                              '00': {
                                   mask: '00',
                              },
                         },
                    });
               }
          });
     });

     phoneInputs.forEach((input) => {
          input.addEventListener('blur', function () {
               if (mask && !input.value) {
                    mask.destroy();
                    mask = null;
               }
          });
     });
}

document.addEventListener('DOMContentLoaded', function () {
     // Find all anchor links
     const anchorLinks = document.querySelectorAll('a[href^="#"]');

     // Add a click event listener to each anchor link
     anchorLinks.forEach((link) => {
          link.addEventListener('click', function (e) {
               e.preventDefault(); // Prevent the default link behavior

               // Get the target element's ID from the href attribute
               const targetId = this.getAttribute('href').substring(1);
               const targetElement = document.getElementById(targetId);

               if (targetElement) {
                    // Determine the offset based on screen width
                    const offset = window.innerWidth <= 768 ? 50 : 160; // 768px breakpoint for mobile

                    // Calculate the target position with the offset
                    const targetPosition =
                         targetElement.getBoundingClientRect().top +
                         window.pageYOffset -
                         offset;

                    // Scroll to the target position
                    window.scrollTo({
                         top: targetPosition,
                         behavior: 'smooth', // Enable smooth scrolling
                    });
               }
          });
     });
});

document.addEventListener('DOMContentLoaded', function () {
     function handleModalZIndex() {
          // Find all modal elements on the page
          const modals = document.querySelectorAll('.modal');

          // Track currently open modal
          let currentModal = null;

          // Loop through each modal
          modals.forEach((modal) => {
               // Listen for the 'show.bs.modal' event
               modal.addEventListener('show.bs.modal', function (event) {
                    // Check if the modal does NOT have the 'header-modal' class
                    if (!modal.classList.contains('header-modal')) {
                         // Set the modal's z-index to 1060
                         modal.style.zIndex = '1060';

                         // Update current modal reference
                         currentModal = modal;

                         // Wait for Bootstrap to create backdrop then modify it
                         setTimeout(() => {
                              const backdrop =
                                   document.querySelector('.modal-backdrop');
                              if (backdrop) {
                                   backdrop.style.zIndex = '1059';
                              }
                         }, 10);
                    }
               });

               // Listen for the 'hidden.bs.modal' event
               modal.addEventListener('hidden.bs.modal', function (event) {
                    // Only reset if this is the current modal
                    if (currentModal === modal) {
                         // Reset the modal's z-index
                         modal.style.zIndex = '';
                         currentModal = null;

                         // Don't remove backdrop - let Bootstrap handle it
                         // Just reset its z-index if needed
                         const backdrop =
                              document.querySelector('.modal-backdrop');
                         if (backdrop) {
                              backdrop.style.zIndex = '';
                         }
                    }
               });
          });
     }

     // Initialize the function
     handleModalZIndex();
});

document.addEventListener('DOMContentLoaded', function () {
     // Find all check-all blocks on the page
     const checkAllBlocks = document.querySelectorAll('.check-all-block');

     checkAllBlocks.forEach((block) => {
          // Find the master checkbox (check-all-input) within this block
          const masterCheckbox = block.querySelector('.check-all-input');

          // Find all regular checkboxes within this block (excluding the master checkbox)
          const checkboxes = block.querySelectorAll(
               'input[type="checkbox"]:not(.check-all-input)'
          );

          if (masterCheckbox) {
               masterCheckbox.addEventListener('change', function () {
                    // Toggle all regular checkboxes based on master checkbox state
                    const isChecked = this.checked;
                    checkboxes.forEach((checkbox) => {
                         checkbox.checked = isChecked;

                         // Trigger change event on each checkbox in case other code listens to it
                         checkbox.dispatchEvent(new Event('change'));
                    });
               });

               // Optional: Uncheck master checkbox if any regular checkbox is unchecked
               checkboxes.forEach((checkbox) => {
                    checkbox.addEventListener('change', function () {
                         if (!this.checked && masterCheckbox.checked) {
                              masterCheckbox.checked = false;
                         }
                    });
               });
          }
     });
});

document.addEventListener('DOMContentLoaded', function () {
     const backToTopButton = document.getElementById('btnUp');
     const progressFill = document.querySelector('.btn-up-progress-fill');
     const circumference = 2 * Math.PI * 19; // Radius 19 (42px width - 2px border)

     // Store max scroll value
     let maxScroll = document.body.scrollHeight - window.innerHeight;

     window.addEventListener('scroll', function () {
          const scrollPosition = window.pageYOffset;
          const scrollPercentage = scrollPosition / maxScroll;

          // Show/hide button
          if (scrollPosition > 300) {
               backToTopButton.classList.add('show');

               // Calculate progress (from 0 to 100%)
               const progress = Math.min(scrollPercentage * 100, 100);

               // Update border progress
               const offset = circumference - (circumference * progress) / 100;
               progressFill.style.strokeDashoffset = offset;

               // Toggle progress-active class
               if (progress > 5) {
                    backToTopButton.classList.add('progress-active');
               } else {
                    backToTopButton.classList.remove('progress-active');
               }
          } else {
               backToTopButton.classList.remove('show');
               backToTopButton.classList.remove('progress-active');
               progressFill.style.strokeDashoffset = circumference; // Reset progress
          }

          // Update max scroll on resize/load
          maxScroll = document.body.scrollHeight - window.innerHeight;
     });

     // Smooth scroll to top
     backToTopButton.addEventListener('click', function (e) {
          e.preventDefault();
          window.scrollTo({
               top: 0,
               behavior: 'smooth',
          });
     });

     // Initialize max scroll on load
     maxScroll = document.body.scrollHeight - window.innerHeight;
});

