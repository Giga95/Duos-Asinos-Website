document.querySelector('#cv').addEventListener('change', function() {
    const file = this.files[0];
    if (file && file.name.endsWith('.pdf')) {
      this.nextElementSibling.innerHTML = `CV uploaded: ${file.name}`;
    } else {
      this.value = '';
      alert('Please select a PDF file');
    }
  });
  
  document.querySelector('#cover-letter').addEventListener('change', function() {
    const file = this.files[0];
    if (file && file.name.endsWith('.pdf')) {
      this.nextElementSibling.innerHTML = `Cover letter uploaded: ${file.name}`;
    } else {
      this.value = '';
      alert('Please select a PDF file');
    }
  });
  