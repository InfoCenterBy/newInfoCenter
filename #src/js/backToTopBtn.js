document.addEventListener('DOMContentLoaded', function () {
     const backToTopButton = document.getElementById('btnUp');
     const progressFill = document.querySelector('.btn-up-progress-fill');
     const circumference = 2 * Math.PI * 19; // Radius 19 (42px width - 2px border)

     // Store max scroll value
     let maxScroll = document.body.scrollHeight - window.innerHeight;

     window.addEventListener('scroll', function () {
          const scrollPosition = window.pageYOffset;
          const scrollPercentage = scrollPosition / maxScroll;

          // Show/hide button
          if (scrollPosition > 300) {
               backToTopButton.classList.add('show');

               // Calculate progress (from 0 to 100%)
               const progress = Math.min(scrollPercentage * 100, 100);

               // Update border progress
               const offset = circumference - (circumference * progress) / 100;
               progressFill.style.strokeDashoffset = offset;

               // Toggle progress-active class
               if (progress > 5) {
                    backToTopButton.classList.add('progress-active');
               } else {
                    backToTopButton.classList.remove('progress-active');
               }
          } else {
               backToTopButton.classList.remove('show');
               backToTopButton.classList.remove('progress-active');
               progressFill.style.strokeDashoffset = circumference; // Reset progress
          }

          // Update max scroll on resize/load
          maxScroll = document.body.scrollHeight - window.innerHeight;
     });

     // Smooth scroll to top
     backToTopButton.addEventListener('click', function (e) {
          e.preventDefault();
          window.scrollTo({
               top: 0,
               behavior: 'smooth',
          });
     });

     // Initialize max scroll on load
     maxScroll = document.body.scrollHeight - window.innerHeight;
});
