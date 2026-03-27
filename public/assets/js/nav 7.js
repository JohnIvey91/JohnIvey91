(() => {
  // src/assets/js/nav.js
  var CSbody = document.querySelector("body");
  var CSnavbarMenu = document.querySelector("#cs-navigation");
  var CShamburgerMenu = document.querySelector("#cs-navigation .cs-toggle");
  var CSmobileNav = document.querySelector("#cs-navigation .cs-nav");
  function closeMobileMenu() {
    CShamburgerMenu.classList.remove("cs-active");
    CSnavbarMenu.classList.remove("cs-active");
    CSbody.classList.remove("cs-open");
    const csUL = document.querySelector("#cs-expanded");
    csUL.setAttribute("aria-expanded", "false");
  }
  CShamburgerMenu.addEventListener("click", function() {
    CShamburgerMenu.classList.toggle("cs-active");
    CSnavbarMenu.classList.toggle("cs-active");
    CSbody.classList.toggle("cs-open");
    ariaExpanded();
  });
  document.addEventListener("click", function(event) {
    const menuIsOpen = CSnavbarMenu.classList.contains("cs-active");
    if (!menuIsOpen) return;
    if (!CSmobileNav.contains(event.target)) {
      closeMobileMenu();
    }
  });
  function ariaExpanded() {
    const csUL = document.querySelector("#cs-expanded");
    const csExpanded = csUL.getAttribute("aria-expanded");
    if (csExpanded === "false") {
      csUL.setAttribute("aria-expanded", "true");
    } else {
      csUL.setAttribute("aria-expanded", "false");
    }
  }
  var dropDowns = Array.from(document.querySelectorAll("#cs-navigation .cs-dropdown"));
  for (const item of dropDowns) {
    const onClick = () => {
      item.classList.toggle("cs-active");
    };
    item.addEventListener("click", onClick);
  }
  document.addEventListener("scroll", (e) => {
    const scroll = document.documentElement.scrollTop;
    if (scroll >= 100) {
      document.querySelector("#cs-navigation").classList.add("scroll");
    } else {
      document.querySelector("#cs-navigation").classList.remove("scroll");
    }
  });
  var faqItems = Array.from(document.querySelectorAll(".cs-faq-item"));
  for (const item of faqItems) {
    const onClick = () => {
      item.classList.toggle("active");
    };
    item.addEventListener("click", onClick);
  }
})();
//# sourceMappingURL=nav.js.map
