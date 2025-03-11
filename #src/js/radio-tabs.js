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
