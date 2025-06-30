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
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});


function openQuickView() {
    $('#quickViewModal').fadeIn();

    // Prevent multiple initializations
    if (!$('.quickview-slider').hasClass('slick-initialized')) {
      $('.quickview-slider').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        prevArrow: '<button type="button" class="slick-prev absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow w-8 h-8 rounded-full z-10">‹</button>',
        nextArrow: '<button type="button" class="slick-next absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow w-8 h-8 rounded-full z-10">›</button>'
      });
    }
  }


    function incrementValue(button) {
    const input = button.parentElement.querySelector('input[type="number"]');
    let currentValue = parseInt(input.value) || 0;
    const max = parseInt(input.max) || 1000;
    if (currentValue < max) {
      input.value = currentValue + 1;
    }
  }

  function decrementValue(button) {
    const input = button.parentElement.querySelector('input[type="number"]');
    let currentValue = parseInt(input.value) || 1;
    const min = parseInt(input.min) || 1;
    if (currentValue > min) {
      input.value = currentValue - 1;
    }
  }