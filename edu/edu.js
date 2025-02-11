


    // Get the button and body element
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;

    // Function to toggle the theme
    function toggleTheme() {
      body.classList.toggle('root2');
    }

    // Add event listener to the button
    themeToggle.addEventListener('click', toggleTheme);