document.addEventListener('DOMContentLoaded', function () {
     function handleModalZIndex() {
          // Find all modal elements on the page
          const modals = document.querySelectorAll('.modal');

          // Track currently open modal
          let currentModal = null;

          // Loop through each modal
          modals.forEach((modal) => {
               // Listen for the 'show.bs.modal' event
               modal.addEventListener('show.bs.modal', function (event) {
                    // Check if the modal does NOT have the 'header-modal' class
                    if (!modal.classList.contains('header-modal')) {
                         // Set the modal's z-index to 1060
                         modal.style.zIndex = '1060';

                         // Update current modal reference
                         currentModal = modal;

                         // Wait for Bootstrap to create backdrop then modify it
                         setTimeout(() => {
                              const backdrop =
                                   document.querySelector('.modal-backdrop');
                              if (backdrop) {
                                   backdrop.style.zIndex = '1059';
                              }
                         }, 10);
                    }
               });

               // Listen for the 'hidden.bs.modal' event
               modal.addEventListener('hidden.bs.modal', function (event) {
                    // Only reset if this is the current modal
                    if (currentModal === modal) {
                         // Reset the modal's z-index
                         modal.style.zIndex = '';
                         currentModal = null;

                         // Don't remove backdrop - let Bootstrap handle it
                         // Just reset its z-index if needed
                         const backdrop =
                              document.querySelector('.modal-backdrop');
                         if (backdrop) {
                              backdrop.style.zIndex = '';
                         }
                    }
               });
          });
     }

     // Initialize the function
     handleModalZIndex();
});
