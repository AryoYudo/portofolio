document.addEventListener("DOMContentLoaded", function () {
  var sections = document.querySelectorAll(".section");
  var mainContent = document.querySelector(".main-content");
  var nav = document.querySelector(".nav");

  window.onscroll = () => {
    var current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (pageYOffset >= sectionTop - 60) {
        current = section.getAttribute("id");
      }
    });

    nav.querySelectorAll("li a").forEach((links) => {
      links.classList.remove("active");
      document
        .querySelector(".nav li a[href*=" + current + "]")
        .classList.add("active");
    });
  };

  nav.querySelectorAll("li a").forEach((item) => {
    item.addEventListener("click", function () {
      nav
        .querySelectorAll("li a.active")
        .forEach((e) => e.classList.remove("active"));

      this.classList.add("active");
    });
  });

  sidebarToggler.addEventListener("click", function () {
    sidebar.classList.toggle("show");
    this.classList.toggle("show");
    mainContent.classList.toggle("sidebar-shown");
  });

  function handleResize() {
    var screenWidth = window.innerWidth;

    if (screenWidth >= 767.98) {
      sidebar.classList.add("show");
      sidebarToggler.classList.add("show");
      mainContent.classList.add("sidebar-shown");
    } else {
      sidebar.classList.remove("show");
      sidebarToggler.classList.remove("show");
      mainContent.classList.remove("sidebar-shown");
    }
  }

  window.addEventListener("resize", handleResize);
  handleResize();
});
