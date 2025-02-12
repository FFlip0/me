//  Theme Toggle
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    function toggleTheme() {
    body.classList.toggle('root2');
    }
    themeToggle.addEventListener('click', toggleTheme);

//  Screen Support
    function showPopup() {
        document.getElementById("screenSupport").style.display = "block";
    }
    
    function closePopup() {
        document.getElementById("screenSupport").style.display = "none";
    }