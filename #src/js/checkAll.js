document.addEventListener('DOMContentLoaded', function () {
     // Find all check-all blocks on the page
     const checkAllBlocks = document.querySelectorAll('.check-all-block');

     checkAllBlocks.forEach((block) => {
          // Find the master checkbox (check-all-input) within this block
          const masterCheckbox = block.querySelector('.check-all-input');

          // Find all regular checkboxes within this block (excluding the master checkbox)
          const checkboxes = block.querySelectorAll(
               'input[type="checkbox"]:not(.check-all-input)'
          );

          if (masterCheckbox) {
               masterCheckbox.addEventListener('change', function () {
                    // Toggle all regular checkboxes based on master checkbox state
                    const isChecked = this.checked;
                    checkboxes.forEach((checkbox) => {
                         checkbox.checked = isChecked;

                         // Trigger change event on each checkbox in case other code listens to it
                         checkbox.dispatchEvent(new Event('change'));
                    });
               });

               // Optional: Uncheck master checkbox if any regular checkbox is unchecked
               checkboxes.forEach((checkbox) => {
                    checkbox.addEventListener('change', function () {
                         if (!this.checked && masterCheckbox.checked) {
                              masterCheckbox.checked = false;
                         }
                    });
               });
          }
     });
});
