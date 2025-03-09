document.addEventListener('DOMContentLoaded', function() {
  const radioButtons = document.querySelectorAll('input[name="tabRadio"]');
  console.log(radioButtons);
  
  const tabPanes = document.querySelectorAll('.tab-pane');
  console.log(tabPanes);
  

  radioButtons.forEach((radio) => {
      radio.addEventListener('change', () => {
          tabPanes.forEach(pane => pane.classList.remove('active', 'show'));

          const targetPane = document.querySelector(radio.getAttribute('data-bs-target'));
          console.log(targetPane);
          
          if (targetPane) {
              targetPane.classList.add('active', 'show');
          }
      });
  });
});