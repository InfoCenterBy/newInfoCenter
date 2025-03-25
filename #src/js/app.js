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

$('.dont-touch-me').on('mouseenter', function (e) {
     var maxX = $(window).width() - $(this).width();
     var maxY = $(window).height() - $(this).height();
     $(this).css({
          position: 'absolute',
          zIndex: 1070,
          left: getRandomInt(0, maxX),
          top: getRandomInt(0, maxY),
     });
});

function getRandomInt(min, max) {
     return Math.floor(Math.random() * (max - min + 1)) + min;
}
