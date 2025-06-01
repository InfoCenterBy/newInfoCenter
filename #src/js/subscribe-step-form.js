document.addEventListener('DOMContentLoaded', function () {
     const steps = document.querySelectorAll('.form-step');
     const prevBtn = document.getElementById('prevBtn');
     const nextBtn = document.getElementById('nextBtn');
     const submitBtn = document.getElementById('submitBtn');
     const activePane = document.querySelector('.tab-pane.show.active');
     const getCurrentYear = new Date().getFullYear();
     const years = document.querySelectorAll('.year-option')
     const currentYearSelects = document.getElementById('current-year-selects')
     const monthsSelects = document.getElementById('months-selects')
     const currentYearMonths = document.querySelector('#current-year-months')
     const currentYearQuarters = document.querySelector('#current-year-quarters')

     let currentStep = 1;

     function checkCurrentYear() {
          const currentYear = document.getElementById(`year${getCurrentYear}`)
          currentYear.setAttribute('checked', true)
          document.querySelector('#select-months').checked = true
          currentYearQuarters.classList.add('d-none')
     }
     checkCurrentYear()

     years.forEach(year => {
          year.addEventListener('change', () => {
               const isCurrentYear = year.value == getCurrentYear

               if (!isCurrentYear) {
                    currentYearSelects.classList.add('d-none')
                    monthsSelects.classList.remove('d-none')
               } else {
                    currentYearSelects.classList.remove('d-none')
                    monthsSelects.classList.add('d-none')

               }
          })
     })

     currentYearSelects.querySelectorAll('input[type=radio]').forEach(radio => {
          radio.addEventListener('change', () => {

               if (radio.id == 'select-months') {
                    currentYearMonths.classList.remove('d-none')
                    currentYearQuarters.classList.add('d-none')
               } else if (radio.id == 'select-quarters') {
                    currentYearMonths.classList.add('d-none')
                    currentYearQuarters.classList.remove('d-none')
               } else {
                    currentYearMonths.classList.add('d-none')
                    currentYearQuarters.classList.add('d-none')
               }
          })
     })


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
              year: null,
              periodType: null,
              months: [],
              quarters: [],
              halfYear: null,
              fullYear: false
          };

          activePane.querySelectorAll('input').forEach((input) => {
               formData[input.name] = input.value;
           });
  
          const selectedYear = document.querySelector('input[name="year"]:checked');
          if (selectedYear) {
              formData.year = selectedYear.value;
          }
  
          const isCurrentYear = formData.year == getCurrentYear;
  
          if (isCurrentYear) {
              const selectedPeriod = document.querySelector('input[name="subscribe-period"]:checked');
              if (selectedPeriod) {
                  formData.periodType = selectedPeriod.id;
  
                  switch (selectedPeriod.id) {
                      case 'select-months':
                          document.querySelectorAll('#current-year-months input[type="checkbox"]:checked').forEach(checkbox => {
                              formData.months.push(checkbox.nextElementSibling.textContent.trim());
                          });
                          break;
                      case 'select-quarters':
                          document.querySelectorAll('#current-year-quarters input[type="checkbox"]:checked').forEach(checkbox => {
                              formData.quarters.push(checkbox.nextElementSibling.textContent.trim());
                          });
                          break;
                      case 'select-first-half':
                          formData.halfYear = 'first';
                          break;
                      case 'select-second-half':
                          formData.halfYear = 'second';
                          break;
                      case 'select-year':
                          formData.fullYear = true;
                          break;
                  }
              }
          } else {
              document.querySelectorAll('#months-selects input[type="checkbox"]:checked').forEach(checkbox => {
                  formData.months.push(checkbox.nextElementSibling.textContent.trim());
              });
          }
  
          return formData;
      }

     submitBtn.addEventListener('click', function (e) {
          e.preventDefault();
          const formData = collectFormData();

          console.log('Данные формы:', formData);
          alert('Форма успешно отправлена! Данные: ' + JSON.stringify(formData, null, 2));
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
          
          inputs.forEach(input => {
            if (!input.value.trim()) {
              allFilled = false;
            }
          });
          
          nextBtn.disabled = !allFilled;
     }
        
     activePane.querySelectorAll('input').forEach(input => {
          input.addEventListener('input', checkInputs);
     });
        
     checkInputs();
});
