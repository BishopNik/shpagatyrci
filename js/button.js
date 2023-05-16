const checkbox = document.getElementById('yes');
const button = document.querySelector('.socset');

checkbox.addEventListener('change', function() {
  if(this.checked) {
    button.style.display = 'block';
  } else {
    button.style.display = 'none';
  }
});