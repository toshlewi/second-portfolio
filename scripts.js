// Theme Toggle
const themeToggle = document.createElement('div');
themeToggle.className = 'theme-toggle';
themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
document.body.appendChild(themeToggle);

themeToggle.addEventListener('click', () => {
  document.body.dataset.theme = document.body.dataset.theme === 'dark' ? 'light' : 'dark';
  themeToggle.innerHTML = document.body.dataset.theme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
  
  // Save preference to localStorage
  localStorage.setItem('theme', document.body.dataset.theme);
});

// Check for saved theme preference
if (localStorage.getItem('theme') === 'dark' || 
    (window.matchMedia('(prefers-color-scheme: dark)').matches && !localStorage.getItem('theme'))) {
  document.body.dataset.theme = 'dark';
  themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
} else {
  document.body.dataset.theme = 'light';
}