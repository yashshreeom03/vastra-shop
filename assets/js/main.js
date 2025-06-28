const menuToggle = document.getElementById('menuToggle');
const menuClose = document.getElementById('menuClose');
const sidebarMenu = document.getElementById('sidebarMenu');
const overlay = document.getElementById('overlay');

// Open sidebar
menuToggle.addEventListener('click', () => {
  sidebarMenu.classList.remove('-translate-x-full');
  sidebarMenu.classList.add('translate-x-0');
  overlay.classList.remove('hidden');
});

// Close sidebar
menuClose.addEventListener('click', () => {
  sidebarMenu.classList.add('-translate-x-full');
  sidebarMenu.classList.remove('translate-x-0');
  overlay.classList.add('hidden');
});

// Optional: Close when clicking outside
overlay.addEventListener('click', () => {
  sidebarMenu.classList.add('-translate-x-full');
  sidebarMenu.classList.remove('translate-x-0');
  overlay.classList.add('hidden');
});


document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
  toggle.addEventListener('click', function (e) {
    e.preventDefault(); // Always prevent default

    const dropdown = this.nextElementSibling;
    const iconWrapper = this.querySelector('.dropdown-icon');

    // Close all other dropdowns
    document.querySelectorAll('.dropdown-menu').forEach(menu => {
      if (menu !== dropdown) {
        menu.style.maxHeight = null;
        const otherToggle = menu.previousElementSibling;
        if (otherToggle) {
          const otherIcon = otherToggle.querySelector('.dropdown-icon');
          if (otherIcon) {
            otherIcon.innerHTML = '<i class="fal fa-plus text-xs"></i>';
          }
        }
      }
    });

    // Toggle current dropdown
    if (dropdown.style.maxHeight) {
      dropdown.style.maxHeight = null;
      iconWrapper.innerHTML = '<i class="fal fa-plus text-xs"></i>';
    } else {
      dropdown.style.maxHeight = dropdown.scrollHeight + 'px';
      iconWrapper.innerHTML = '<i class="fal fa-minus text-xs"></i>';
    }
  });
});

  window.addEventListener("scroll", function () {
    const header = document.getElementById("siteHeader");

    if (window.scrollY > 230) {
      header.classList.add("fixed-header", "py-2");
      header.classList.remove("py-4");
    } else {
      header.classList.remove("fixed-header", "py-2");
      header.classList.add("py-4");
    }
  });


$(document).ready(function(){
    $('.hero-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      // autoplay: true,
      autoplaySpeed: 3000,
      dots: true,
    });
  });