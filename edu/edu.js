let isDarkMode = false;

function toggleTheme() {
  isDarkMode = !isDarkMode;

  if (isDarkMode) {
    document.documentElement.style.setProperty('--white', '#000');
    document.documentElement.style.setProperty('--black', '#fff');
  } else {
    document.documentElement.style.setProperty('--white', '#fff');
    document.documentElement.style.setProperty('--black', '#000');
  }
}

// I tried to make a theme switcher using ai and i don't know what i expected but at least i got a half working result. It just doesn't work across pages.