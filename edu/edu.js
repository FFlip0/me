const themeToggle = document.getElementById('themeToggle');
const body = document.body;
function toggleTheme() {
  body.classList.toggle('root2');
}
themeToggle.addEventListener('click', toggleTheme);