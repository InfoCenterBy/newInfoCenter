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

//reduce char max length in options
document.querySelectorAll('select').forEach((select) => {
     select.addEventListener('focus', function () {
          const options = this.options;
          const maxLength = 30;

          for (let i = 0; i < options.length; i++) {
               if (options[i].text.length > maxLength) {
                    options[i].text =
                         options[i].text.substring(0, maxLength) + '...';
               }
          }
     });
});
