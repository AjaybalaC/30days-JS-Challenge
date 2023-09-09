// script.js
const loadingBtn = document.getElementById('loading-btn');

loadingBtn.addEventListener('click', function() {
  loadingBtn.classList.add('loading');
  loadingBtn.disabled = true;

  // Simulate a loading delay (you can replace this with actual API calls or any async operation)
  setTimeout(() => {
    loadingBtn.classList.remove('loading');
    loadingBtn.disabled = false;
  }, 3000); // Simulated 3-second loading delay
});
