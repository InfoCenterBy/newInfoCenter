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
     const formData = {};

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



     let currentStep = 1;

     nextBtn.addEventListener('click', function () {
          // if (validateStep(currentStep)) {
          saveStepData(currentStep);
          currentStep++;
          showStep(currentStep);
          // }
     });

     // Возврат к предыдущему шагу
     prevBtn.addEventListener('click', function () {
          saveStepData(currentStep);
          currentStep--;
          showStep(currentStep);
          restoreStepData(currentStep);
     });

     // Отправка формы
     submitBtn.addEventListener('click', function (e) {
          e.preventDefault();
          saveStepData(currentStep);

          let data = {};

          // Добавляем данные из активной формы
          activePane.querySelectorAll('input').forEach((input) => {
               data[input.name] = input.value;
          });
          console.log(data);
          // Здесь можно отправить данные на сервер
          console.log('Данные формы:', formData);
          alert('Форма успешно отправлена! Данные: ' + JSON.stringify(data));
     });

     // Показать определенный шаг
     function showStep(step) {
          steps.forEach((stepElement) => {
               stepElement.classList.remove('active');
               if (parseInt(stepElement.dataset.step) === step) {
                    stepElement.classList.add('active');
               }
          });
     }

     // Сохранение данных шага
     function saveStepData(step) {
          const stepElement = document.querySelector(`.form-step[data-step="${step}"]`);
          const inputs = stepElement.querySelectorAll('input, select, textarea');

          inputs.forEach((input) => {
               formData[input.name] = input.value;
          });
     }

     // Восстановление данных шага
     function restoreStepData(step) {
          const stepElement = document.querySelector(`.form-step[data-step="${step}"]`);
          const inputs = stepElement.querySelectorAll('input, select, textarea');

          inputs.forEach((input) => {
               if (formData[input.name] !== undefined) {
                    input.value = formData[input.name];
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
        
        // Добавляем обработчики на все инпуты
        activePane.querySelectorAll('input').forEach(input => {
          input.addEventListener('input', checkInputs);
        });
        
        // Первоначальная проверка
        //checkInputs();
        

     // Валидация шага
     function validateStep(step) {
         const stepElement = document.querySelector(`.form-step[data-step="1"]`);
         const inputs = stepElement.querySelectorAll('input[required], select[required], textarea[required]');
         
         let isValid = true;

         inputs.forEach(input => {
          if (!input.checkValidity()) {
               isValid = false;
          }
         });

         if (!isValid) {
             nextBtn.setAttribute('disable', true)
         }

         return isValid;
     }
});
