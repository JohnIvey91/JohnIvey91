(() => {
  // src/assets/js/dark.js
  var darkModeToggle = document.getElementById("dark-mode-toggle");
  function enableDarkMode() {
    document.body.classList.add("dark-mode");
    localStorage.setItem("theme", "dark");
    if (darkModeToggle) {
      darkModeToggle.setAttribute("aria-pressed", "true");
    }
  }
  function disableDarkMode() {
    document.body.classList.remove("dark-mode");
    localStorage.setItem("theme", "light");
    if (darkModeToggle) {
      darkModeToggle.setAttribute("aria-pressed", "false");
    }
  }
  function detectColorScheme() {
    let theme = "light";
    if (localStorage.getItem("theme")) {
      theme = localStorage.getItem("theme");
    } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      theme = "dark";
    }
    theme === "dark" ? enableDarkMode() : disableDarkMode();
  }
  detectColorScheme();
  if (darkModeToggle) {
    darkModeToggle.addEventListener("click", () => {
      localStorage.getItem("theme") === "light" ? enableDarkMode() : disableDarkMode();
    });
  }
})();
//# sourceMappingURL=dark.js.map
