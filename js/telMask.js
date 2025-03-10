const phoneInput = document.querySelector('input[type=tel].tel-with-mask');

if (phoneInput) {
	IMask(phoneInput, {
		mask: '+{375} (00) 000-00-00',
		lazy: false,
	});
}
