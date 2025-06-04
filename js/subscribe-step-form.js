document.addEventListener('DOMContentLoaded', function () {
	const steps = document.querySelectorAll('.form-step');
	const prevBtn = document.getElementById('prevBtn');
	const nextBtn = document.getElementById('nextBtn');
	const submitBtn = document.getElementById('submitBtn');
	const activePane = document.querySelector('.tab-pane.show.active');
	const getCurrentYear = new Date().getFullYear();
	const years = document.querySelectorAll('.year-option');
	const currentYearSelects = document.getElementById('current-year-selects');
	const currentYearMonths = document.querySelector('#current-year-months');
	const currentYearQuarters = document.querySelector(
		'#current-year-quarters',
	);

	let currentStep = 1;

	function checkCurrentYear() {
		const currentYear = document.getElementById(`year${getCurrentYear}`);
		currentYear.setAttribute('checked', true);
		document.querySelector('#select-months').checked = true;
		currentYearQuarters.classList.add('d-none');
	}
	checkCurrentYear();

	const allYearsMonthsContainer = document.createElement('div');
	allYearsMonthsContainer.id = 'all-years-months-container';
	document.querySelector('#subscribe-years').after(allYearsMonthsContainer);

	function createYearMonthsBlock(year) {
		const blockId = `months-for-${year}`;

		const monthsBlock = document.createElement('div');
		monthsBlock.id = blockId;
		monthsBlock.className =
			'year-months-block d-none row row-cols-4 row-cols-md-6 row-gap-3 mt-3';

		const months = [
			'Янв',
			'Фев',
			'Март',
			'Апр',
			'Май',
			'Июнь',
			'Июль',
			'Авг',
			'Сент',
			'Окт',
			'Ноя',
			'Дек',
		];

		months.forEach((month, index) => {
			const monthId = `month-${year}-${index + 1}`;

			const col = document.createElement('div');
			col.className = 'col';

			const formCheck = document.createElement('div');
			formCheck.className = 'form-check';

			const input = document.createElement('input');
			input.type = 'checkbox';
			input.className = 'form-check-input check-green';
			input.id = monthId;
			input.name = `months-${year}`;
			input.value = index + 1;

			const label = document.createElement('label');
			label.className = 'form-check-label';
			label.htmlFor = monthId;
			label.textContent = month;

			formCheck.appendChild(input);
			formCheck.appendChild(label);
			col.appendChild(formCheck);
			monthsBlock.appendChild(col);
		});

		return monthsBlock;
	}

	years.forEach((year) => {
		if (year.value !== getCurrentYear) {
			const monthsBlock = createYearMonthsBlock(year.value);
			allYearsMonthsContainer.appendChild(monthsBlock);
		}
	});

	years.forEach((year) => {
		year.addEventListener('change', () => {
			const isCurrentYear = year.value == getCurrentYear;

			document
				.querySelectorAll('.year-months-block')
				.forEach((block) => {
					block.classList.add('d-none');
				});

			currentYearSelects.classList.add('d-none');

			if (isCurrentYear) {
				currentYearSelects.classList.remove('d-none');
			} else {
				const monthsBlock = document.getElementById(
					`months-for-${year.value}`,
				);
				if (monthsBlock) {
					monthsBlock.classList.remove('d-none');
				}
			}
		});
	});

	document
		.getElementById(`year${getCurrentYear}`)
		.dispatchEvent(new Event('change'));

	const monthlyPrices = {
		2025: 20.2,
		2024: 45.43,
		2023: 40.45,
		2022: 35,
		2021: 30,
		2020: 25,
	};

	const discounts = {
		скидка10: '10%',
		sale20: '20%',
		darom: '100%',
	};

	const promoInput = document.querySelector('input[name="promo"]');
	const applyPromoBtn = document.querySelector('#apply-promo');
	const promoMessage = document.createElement('div');
	promoMessage.className = 'mt-2 text-small';
	document.querySelector('#promo-container').after(promoMessage);

	let currentPromo = null;

	function clearPromoMessage() {
		promoMessage.textContent = '';
		promoMessage.style.color = '';
		currentPromo = null;
		updatePriceDisplay();
	}

	promoInput.addEventListener('input', function () {
		if (this.value.trim() === '') {
			clearPromoMessage();
		}
	});

	function applyPromoCode() {
		const promoCode = promoInput.value.trim();

		clearPromoMessage();

		if (!promoCode) {
			promoMessage.textContent = 'Введите промокод';
			promoMessage.style.color = '#D03D3D';
			return;
		}

		if (discounts.hasOwnProperty(promoCode)) {
			currentPromo = {
				code: promoCode,
				discount: discounts[promoCode],
			};
			promoMessage.textContent = `Промокод "${promoCode}" применен! Скидка ${discounts[promoCode]}`;
			promoMessage.style.color = '#025A4A';
		} else {
			promoMessage.textContent = 'Промокод не найден';
			promoMessage.style.color = '#D03D3D';
		}

		updatePriceDisplay();
	}

	applyPromoBtn.addEventListener('click', applyPromoCode);

	promoInput.addEventListener('keypress', function (e) {
		if (e.key === 'Enter') {
			applyPromoCode();
		}
	});

	function moneyAdd(a, b) {
		return parseFloat((a + b).toFixed(2));
	}

	function moneyMultiply(amount, multiplier) {
		return parseFloat((amount * multiplier).toFixed(2));
	}

	function formatPrice(price) {
		const [rubles, kopecks] = price.toFixed(2).split('.');
		return `${rubles} руб. ${kopecks} коп.`;
	}

	function calculateTotalPrice() {
		const formData = collectFormData();
		let totalPrice = 0;

		for (const year in formData.periods) {
			const monthsCount = formData.periods[year].length;
			const yearPrice = moneyMultiply(
				monthlyPrices[year],
				monthsCount,
			);
			totalPrice = moneyAdd(totalPrice, yearPrice);
		}

		if (currentPromo) {
			const discountValue = currentPromo.discount;

			if (discountValue.includes('%')) {
				const percent = parseFloat(discountValue) / 100;
				totalPrice = moneyMultiply(totalPrice, 1 - percent);
			} else {
				const fixedDiscount = parseFloat(discountValue);
				totalPrice = moneyAdd(totalPrice, -fixedDiscount);
			}
		}

		return totalPrice;
	}

	function updatePriceDisplay() {
		const totalPrice = calculateTotalPrice();
		let priceText = `Сумма: ${formatPrice(totalPrice)}`;

		document.querySelector('.price').textContent = priceText;
	}

	document
		.querySelectorAll(
			'input[name="year"], ' +
				'input[name="subscribe-period"], ' +
				'input[type="checkbox"]',
		)
		.forEach((input) => {
			input.addEventListener('change', updatePriceDisplay);
		});

	updatePriceDisplay();

	currentYearSelects
		.querySelectorAll('input[type=radio]')
		.forEach((radio) => {
			radio.addEventListener('change', () => {
				document
					.querySelectorAll(
						'#current-year-months input[type="checkbox"], ' +
							'#current-year-quarters input[type="checkbox"]',
					)
					.forEach((checkbox) => {
						checkbox.checked = false;
					});

				if (radio.id == 'select-months') {
					currentYearMonths.classList.remove('d-none');
					currentYearQuarters.classList.add('d-none');
				} else if (radio.id == 'select-quarters') {
					currentYearMonths.classList.add('d-none');
					currentYearQuarters.classList.remove('d-none');
				} else {
					currentYearMonths.classList.add('d-none');
					currentYearQuarters.classList.add('d-none');
				}

				updatePriceDisplay();
			});
		});

	nextBtn.addEventListener('click', function () {
		currentStep++;
		showStep(currentStep);
	});

	prevBtn.addEventListener('click', function () {
		currentStep--;
		showStep(currentStep);
	});

	function collectFormData() {
		const formData = {
			periods: {},
			totalPrice: 0,
		};

		activePane.querySelectorAll('input').forEach((input) => {
			formData[input.name] = input.value;
		});

		const selectedYears = document.querySelectorAll('input[name="year"]');

		selectedYears.forEach((yearInput) => {
			const year = yearInput.value;
			formData.periods[year] = [];

			const isCurrentYear = year == getCurrentYear;

			if (isCurrentYear) {
				const selectedPeriod = document.querySelector(
					'input[name="subscribe-period"]:checked',
				);

				if (selectedPeriod) {
					switch (selectedPeriod.id) {
						case 'select-months':
							document
								.querySelectorAll(
									'#current-year-months input[type="checkbox"]:checked',
								)
								.forEach((checkbox) => {
									const monthIndex =
										Array.from(
											checkbox.parentElement
												.parentElement
												.parentElement
												.children,
										).indexOf(
											checkbox.parentElement
												.parentElement,
										) + 1;
									formData.periods[year].push(
										monthIndex,
									);
								});
							break;

						case 'select-quarters':
							document
								.querySelectorAll(
									'#current-year-quarters input[type="checkbox"]:checked',
								)
								.forEach((checkbox) => {
									const quarter = parseInt(
										checkbox.id.split('-')[0],
									);
									const startMonth =
										(quarter - 1) * 3 + 1;
									formData.periods[year].push(
										...[
											startMonth,
											startMonth + 1,
											startMonth + 2,
										],
									);
								});
							break;

						case 'select-first-half':
							formData.periods[year].push(
								...[1, 2, 3, 4, 5, 6],
							);
							break;

						case 'select-second-half':
							formData.periods[year].push(
								...[7, 8, 9, 10, 11, 12],
							);
							break;

						case 'select-year':
							formData.periods[year].push(
								...[
									1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
									12,
								],
							);
							break;
					}
				}
			} else {
				document
					.querySelectorAll(
						`#months-for-${year} input[type="checkbox"]:checked`,
					)
					.forEach((checkbox) => {
						formData.periods[year].push(
							parseInt(checkbox.value),
						);
					});
			}

			formData.periods[year] = [
				...new Set(formData.periods[year]),
			].sort((a, b) => a - b);

			if (formData.periods[year].length === 0) {
				delete formData.periods[year];
			}
		});

		return formData;
	}

	submitBtn.addEventListener('click', function (e) {
		e.preventDefault();
		const formData = collectFormData();
		formData.totalPrice = calculateTotalPrice();
		formData.governmentPurchase = document.querySelector(
			'#government-purchase',
		).checked;

		console.log(formData);
		alert(
			'Форма успешно отправлена! Данные: ' +
				JSON.stringify(formData, null, 2),
		);
	});

	function showStep(step) {
		steps.forEach((stepElement) => {
			stepElement.classList.remove('active');
			if (parseInt(stepElement.dataset.step) === step) {
				stepElement.classList.add('active');
			}
		});
	}

	function checkInputs() {
		const inputs = activePane.querySelectorAll('input');
		let allFilled = true;

		inputs.forEach((input) => {
			if (!input.value.trim()) {
				allFilled = false;
			}
		});

		nextBtn.disabled = !allFilled;
	}

	activePane.querySelectorAll('input').forEach((input) => {
		input.addEventListener('input', checkInputs);
	});

	// checkInputs();
});
