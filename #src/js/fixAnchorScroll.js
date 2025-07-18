document.addEventListener('DOMContentLoaded', function () {
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
                    const targetPosition =
                         targetElement.getBoundingClientRect().top +
                         window.pageYOffset -
                         offset;

                    // Scroll to the target position
                    window.scrollTo({
                         top: targetPosition,
                         behavior: 'smooth', // Enable smooth scrolling
                    });
               }
          });
     });
});
