document.addEventListener('DOMContentLoaded', function () {
     const steps = document.querySelectorAll('.form-step');
     const prevBtn = document.getElementById('prevBtn');
     const nextBtn = document.getElementById('nextBtn');
     const submitBtn = document.getElementById('submitBtn');

     let currentStep = 1;
     const formData = {};

     // Переход к следующему шагу
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

          //   const formData = {
          //        subscriptionPeriod: document.querySelector('input[name="subscriptionPeriod"]:checked').value,
          //   };

          // Добавляем данные из активной формы
          const activePane = document.querySelector('.tab-pane.show.active');
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

     // Валидация шага
     // function validateStep(step) {
     //     const stepElement = document.querySelector(`.form-step[data-step="${step}"]`);
     //     const inputs = stepElement.querySelectorAll('input[required], select[required], textarea[required]');
     //     let isValid = true;

     //     inputs.forEach(input => {
     //         if (!input.value.trim()) {
     //             input.style.borderColor = 'red';
     //             isValid = false;
     //         } else {
     //             input.style.borderColor = '#ddd';
     //         }
     //     });

     //     if (!isValid) {
     //         alert('Пожалуйста, заполните все обязательные поля');
     //     }

     //     return isValid;
     // }
});
