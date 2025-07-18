document.addEventListener('DOMContentLoaded', function() {
const pendingCheckContainer = document.querySelectorAll('.pending-check-block');

pendingCheckContainer.forEach((container) => {
     let checkbox = container.querySelector('.agree-delete-check');
     let button = container.querySelector('.delete-agree-btn');

     function agreeCheckIsTrue(checkBox) {
          if (checkBox.checked) {
               return true;
          } else {
               return false;
          }
     }

     if (checkbox) {
          if (agreeCheckIsTrue(checkbox)) {
               button.disabled = false;
          } else {
               button.disabled = true;
          }
          checkbox.addEventListener('change', () => {
               if (agreeCheckIsTrue(checkbox)) {
                    button.disabled = false;
               } else {
                    button.disabled = true;
               }
          });
     }
})
});
