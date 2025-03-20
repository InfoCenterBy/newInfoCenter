document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.send-resume');
  const input = document.getElementById('desired-position');
  console.log(buttons);
  console.log(input);

  buttons.forEach(button => {
      button.addEventListener('click', function() {
          const vacancyTitle = this.closest('.accordion-item').querySelector('.vacancy-title').textContent.replace(/\s+/g, ' ').trim()
          console.log(vacancyTitle);

          input.value = vacancyTitle;
  console.log(input);

          console.log('Значение input после установки:', input.value);
      });
  });
});