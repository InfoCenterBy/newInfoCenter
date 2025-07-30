document.addEventListener('DOMContentLoaded', function () {
     // Function to handle anchor scrolling
     function scrollToAnchor(hash) {
          if (hash && hash.startsWith('#')) {
               const targetId = hash.substring(1);
               const targetElement = document.getElementById(targetId);

               if (targetElement) {
                    // Determine the offset based on screen width
                    const offset = window.innerWidth <= 768 ? 50 : 160; // 768px breakpoint for mobile

                    // Calculate the target position with the offset
                    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;

                    // Scroll to the target position
                    window.scrollTo({
                         top: targetPosition,
                         behavior: 'smooth', // Enable smooth scrolling
                    });
               }
          }
     }

     // Handle anchor links on page load if URL contains hash
     if (window.location.hash) {
          // Small delay to ensure DOM is fully loaded
          setTimeout(() => {
               scrollToAnchor(window.location.hash);
          }, 100);
     }

     // Handle hash changes (when user navigates to anchor via URL)
     window.addEventListener('hashchange', function () {
          scrollToAnchor(window.location.hash);
     });

     // Find all anchor links
     const anchorLinks = document.querySelectorAll('a[href^="#"]');

     // Add a click event listener to each anchor link
     anchorLinks.forEach((link) => {
          link.addEventListener('click', function (e) {
               e.preventDefault(); // Prevent the default link behavior

               // Get the target element's ID from the href attribute
               const targetId = this.getAttribute('href').substring(1);
               const targetElement = document.getElementById(targetId);

               if (targetElement) {
                    // Determine the offset based on screen width
                    const offset = window.innerWidth <= 768 ? 50 : 160; // 768px breakpoint for mobile

                    // Calculate the target position with the offset
                    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;

                    // Scroll to the target position
                    window.scrollTo({
                         top: targetPosition,
                         behavior: 'smooth', // Enable smooth scrolling
                    });
               }
          });
     });
});
