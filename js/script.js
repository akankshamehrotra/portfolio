document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");

  if (toggle && links) {
    toggle.addEventListener("click", function () {
      links.classList.toggle("open");
    });
  }

  var filterButtons = document.querySelectorAll(".filter-btn");
  var workCards = document.querySelectorAll(".work-card");

  filterButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      filterButtons.forEach(function (b) {
        b.classList.remove("active");
      });
      btn.classList.add("active");

      var filter = btn.getAttribute("data-filter");

      workCards.forEach(function (card) {
        if (filter === "all" || card.getAttribute("data-category") === filter) {
          card.style.display = "";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
});
