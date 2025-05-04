document.querySelectorAll('.btn-collapse-programm').forEach((button) => {
     const collapsedText =
          button.dataset.btnTextCollapsed || 'Читать полностью';
     const showText = button.dataset.btnTextShow || 'Свернуть';

     // Set base text for btn
     button.textContent = button.classList.contains('collapsed')
          ? collapsedText
          : showText;

     button.addEventListener('click', function () {
          this.textContent = this.classList.contains('collapsed')
               ? collapsedText
               : showText;
     });
});
