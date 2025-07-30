document.addEventListener('DOMContentLoaded', () => {
     const leftArrow = document.querySelector('.left-arrow');
     const rightArrow = document.querySelector('.right-arrow');
     const magazineContainer = document.querySelector('.magazine-container');

     pageFlip = new St.PageFlip(magazineContainer, {
          size: 'stretch',
          height: 670,
          width: 560,
          minWidth: 340,
          minHeight: 400,
          maxWidth: 700,
          maxHeight: 1200,
          flippingTime: 600,
     });

     pageFlip.loadFromHTML(magazineContainer.querySelectorAll('.page'));
     pageFlip.update();

     leftArrow.addEventListener('click', () => {
          pageFlip.flipPrev('top');
     });
     rightArrow.addEventListener('click', () => {
          pageFlip.flipNext('top');
     });

     function updateArrowPositions() {
          const leftPage = magazineContainer.querySelector('.page.--left:not([style*="display: none"])');
          const rightPage = magazineContainer.querySelector('.page.--right:not([style*="display: none"])');

          if (leftPage) {
               const leftRect = leftPage.getBoundingClientRect();
               leftArrow.style.position = 'fixed';
               leftArrow.style.left = `${leftRect.left - 55}px`;
               leftArrow.style.top = `${leftRect.top}px`;
               leftArrow.style.zIndex = '1000';
               leftArrow.style.opacity = '1';
               leftArrow.style.dispay = 'block';
          }

          if (rightPage) {
               const rightRect = rightPage.getBoundingClientRect();
               rightArrow.style.position = 'fixed';
               rightArrow.style.left = `${rightRect.right + 10}px`;
               rightArrow.style.top = `${rightRect.top}px`;
               rightArrow.style.zIndex = '1000';
               rightArrow.style.opacity = '1';
               rightArrow.style.dispay = 'block';
          }
     }

     const modal = document.getElementById(`magazine-modal-1`);
     if (modal) {
          modal.addEventListener('shown.bs.modal', () => {
               pageFlip.update();
               updateArrowPositions();
          });
     }

     window.addEventListener('resize', () => {
          if (modal?.classList.contains('show')) {
               pageFlip.update();
               updateArrowPositions();
          }
     });
});

document.addEventListener('DOMContentLoaded', function () {
     const newsContainer = document.querySelector('.news-container');
     const bannersContainer = document.querySelector('.banners-container');

     if (newsContainer && bannersContainer) {
          const newsHeight = newsContainer.offsetHeight;

          const threshold = 300;

          if (newsHeight > threshold) {
               const secondBanner = `
										<a href="#" class="side-nav-banner">
												<picture>
															<source media="(min-width: 992px)"
																		srcset="./img/png/side-nav-banners/side-nav-banner-x2.png" />
															<img src="./img/png/side-nav-banners/side-nav-banner-x1.png" alt=""
																		class="w-100" />
												</picture>
									</a>
      					`;
               bannersContainer.insertAdjacentHTML('beforeend', secondBanner);
          }
     }
});
