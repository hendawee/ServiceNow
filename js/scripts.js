document.addEventListener("DOMContentLoaded", function () {

 const isSidebarToggled = localStorage.getItem("sb|sidebar-toggle") === "true";
 if (isSidebarToggled) {
     document.body.classList.add("sb-sidenav-toggled");
 }

 // Toggle the side navigation
 const sidebarToggle = document.body.querySelector("#sidebarToggle");
 if (sidebarToggle) {
     sidebarToggle.addEventListener("click", (event) => {
         event.preventDefault();
         document.body.classList.toggle("sb-sidenav-toggled");
         localStorage.setItem(
             "sb|sidebar-toggle",
             document.body.classList.contains("sb-sidenav-toggled")
         );
     });
 }

  // Toggle the active sidebar link
  var listItems = document.querySelectorAll(
    ".sidebar-nav > li > a.list-group-item"
  );
  var sublistItems = document.querySelectorAll(".sidebar-nav ul.collapse");

  listItems.forEach(function (item) {
    item.addEventListener("click", function () {
      // Remove 'active' class from all items
      listItems.forEach(function (item) {
        if (item.classList.contains("active")) {
          item.classList.remove("active");
        }
        sublistItems.forEach(function (item) {
          if (item.classList.contains("show")) {
            item.classList.remove("show");
          }
        });
      });

      // Add 'active' class to clicked item
      this.classList.toggle("active");
    });
  });

      // Select the navbar toggler button
      var navbarToggler = document.querySelector('.navbar-toggler');

      // Add click event listener
      navbarToggler.addEventListener('click', function() {
          // Select the search HTML
          var searchWrap = document.querySelector('.search-wrap');
  
          // Toggle the display of the search bar
          if (searchWrap.style.display === "none" || searchWrap.style.display === "") {
              searchWrap.style.display = "block";
          } else {
              searchWrap.style.display = "none";
          }
      });
});

function checkSize() {
  if (window.innerWidth <= 1024) {
    document.body.classList.add("sb-sidenav-toggled");
  } else {
    document.body.classList.remove("sb-sidenav-toggled");
  }
}

// Run the function on initial load
checkSize();

// Add the event listener for resize
window.addEventListener("resize", checkSize);

