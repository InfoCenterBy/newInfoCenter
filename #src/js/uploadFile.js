document
     .getElementById('file-input')
     .addEventListener('change', function (event) {
          const fileName = event.target.files[0].name;
          document.getElementById('file-name').textContent = fileName;
     });
