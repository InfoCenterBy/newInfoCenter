const phoneInputs = document.querySelectorAll('input[type=tel].tel-with-mask');

if (phoneInputs) {
     phoneInputs.forEach((input) => {
          let mask;
          input.addEventListener('focus', function () {
               if (!mask) {
                    mask = IMask(input, {
                         mask: '+{375}(00)000-00-00',
                         lazy: false,
                         blocks: {
                              375: {
                                   mask: '375',
                                   immutable: true,
                              },

                              '00': {
                                   mask: '00',
                              },
                              '000': {
                                   mask: '000',
                              },
                              '00': {
                                   mask: '00',
                              },
                         },
                    });
               }
          });
     });

     phoneInputs.forEach((input) => {
          input.addEventListener('blur', function () {
               if (mask && !input.value) {
                    mask.destroy();
                    mask = null;
               }
          });
     });
}
