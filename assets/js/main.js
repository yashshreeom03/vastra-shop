const menuToggle = document.getElementById('menuToggle');
const menuClose = document.getElementById('menuClose');
const sidebarMenu = document.getElementById('sidebarMenu');
const overlay = document.getElementById('overlay');
const body = document.body;

// Open sidebar
menuToggle.addEventListener('click', () => {
  sidebarMenu.classList.remove('-translate-x-full');
  sidebarMenu.classList.add('translate-x-0');
  overlay.classList.remove('hidden');
  body.classList.add('overflow-hidden'); // Prevent scrolling
});

// Close sidebar
menuClose.addEventListener('click', () => {
  sidebarMenu.classList.add('-translate-x-full');
  sidebarMenu.classList.remove('translate-x-0');
  overlay.classList.add('hidden');
  body.classList.remove('overflow-hidden'); // Restore scrolling
});

// Close on overlay click
overlay.addEventListener('click', () => {
  sidebarMenu.classList.add('-translate-x-full');
  sidebarMenu.classList.remove('translate-x-0');
  overlay.classList.add('hidden');
  body.classList.remove('overflow-hidden'); // Restore scrolling
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

    if (window.scrollY > 180) {
      header.classList.add("fixed-header");
    } else {
      header.classList.remove("fixed-header");
    }
  });


$(document).ready(function(){
    $('.hero-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      dots: true,
    });
  });

    $(document).ready(function(){
    $('.designer-slick').slick({
      dots: true,
      infinite: true,
      arrows: false,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,
      autoplaySpeed: 8000,
      responsive: [
        {
          slidesToScroll: 3,
          breakpoint: 1024,
          settings: { slidesToShow: 3 }
        },
        {
          slidesToScroll: 2,
          breakpoint: 768,
          settings: { slidesToShow: 2 }
        },
        {
          slidesToScroll: 1,
          breakpoint: 480,
          settings: { slidesToShow: 1 }
        }
      ]
    });
  });