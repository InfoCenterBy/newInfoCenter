document.addEventListener('DOMContentLoaded', function () {
     function handleModalZIndex() {
          // Find all modal elements on the page
          const modals = document.querySelectorAll('.modal');

          // Loop through each modal
          modals.forEach((modal) => {
               // Listen for the 'show.bs.modal' event, which fires BEFORE the modal is shown
               modal.addEventListener('show.bs.modal', function (event) {
                    // Check if the modal does NOT have the 'header-modal' class
                    if (!modal.classList.contains('header-modal')) {
                         // Set the modal's z-index to 1060 BEFORE it is displayed
                         modal.style.zIndex = '1060';

                         // Create the backdrop manually (if it doesn't exist) and set its z-index
                         const backdrop = document.createElement('div');
                         backdrop.classList.add(
                              'modal-backdrop',
                              'fade',
                              'show'
                         );
                         backdrop.style.zIndex = '1059'; // Backdrop should be below the modal
                         document.body.appendChild(backdrop);
                    }
               });

               // Listen for the 'hidden.bs.modal' event, which fires AFTER the modal is hidden
               modal.addEventListener('hidden.bs.modal', function (event) {
                    // Reset the modal's z-index to its default value
                    modal.style.zIndex = '';

                    // Remove the backdrop when the modal is closed
                    const backdrop = document.querySelector('.modal-backdrop');
                    if (backdrop) {
                         backdrop.remove();
                    }
               });
          });
     }

     // Initialize the function
     handleModalZIndex();
});
