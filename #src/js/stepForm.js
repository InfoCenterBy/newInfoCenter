// document.addEventListener('DOMContentLoaded', () => {
// 	const radioGroupsSideNav = document.querySelectorAll('.side-nav-step .radio-group-step');
// 	const radioGroupsModal = document.querySelectorAll('.modal .radio-group-step');

// 	function toggleGroupProcess(radioGroups) {
// 		for (let i = 1; i < radioGroups.length; i++) {
// 			toggleGroupDisabled(radioGroups[i], true);
// 		}

// 		radioGroups.forEach((group, index) => {
// 			const radios = group.querySelectorAll("input[type='radio']");
// 			radios.forEach((radio) => {
// 				radio.addEventListener('change', () => {
// 					if (radio.checked && index < radioGroups.length - 1) {
// 						toggleGroupDisabled(radioGroups[index + 1], false);
// 					}
// 				});
// 			});
// 		});
// 	}

// 	function toggleGroupDisabled(group, isDisabled) {
// 		const radios = group.querySelectorAll("input[type='radio']");
// 		radios.forEach((radio) => {
// 			radio.disabled = isDisabled;
// 		});
// 	}

// 	toggleGroupProcess(radioGroupsSideNav);
// 	toggleGroupProcess(radioGroupsModal);
// });
document.addEventListener('DOMContentLoaded', () => {
     const radioGroupsSideNav = document.querySelectorAll('.side-nav-step .radio-group-step');
     const radioGroupsModal = document.querySelectorAll('.modal .radio-group-step');

     function toggleGroupProcess(radioGroups) {
          toggleGroupDisabled(radioGroups[0], false);

          for (let i = 1; i < radioGroups.length; i++) {
               const prevGroupHasSelection = groupHasCheckedRadio(radioGroups[i - 1]);
               toggleGroupDisabled(radioGroups[i], !prevGroupHasSelection);

               if (groupHasCheckedRadio(radioGroups[i])) {
                    toggleGroupDisabled(radioGroups[i], false);
               }
          }

          radioGroups.forEach((group, index) => {
               const radios = group.querySelectorAll("input[type='radio']");
               radios.forEach((radio) => {
                    radio.addEventListener('change', () => {
                         if (radio.checked) {
                              toggleGroupDisabled(group, false);

                              if (index < radioGroups.length - 1) {
                                   toggleGroupDisabled(radioGroups[index + 1], false);
                              }
                         }
                    });
               });
          });
     }

     function groupHasCheckedRadio(group) {
          const checkedRadio = group.querySelector("input[type='radio']:checked");
          return checkedRadio !== null;
     }

     function toggleGroupDisabled(group, isDisabled) {
          const radios = group.querySelectorAll("input[type='radio']");
          radios.forEach((radio) => {
               radio.disabled = isDisabled;
          });
     }

     toggleGroupProcess(radioGroupsSideNav);
     toggleGroupProcess(radioGroupsModal);
});
