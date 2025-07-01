// side nav bar
const menuToggle = document.getElementById('menuToggle');
const menuClose = document.getElementById('menuClose');
const sidebarMenu = document.getElementById('sidebarMenu');
const overlay = document.getElementById('overlay');
const body = document.body;

function openMenu() {
  sidebarMenu.classList.remove('-translate-x-full');
  sidebarMenu.classList.add('translate-x-0');
  overlay.classList.remove('hidden');
  if (window.innerWidth <= 1024) {
    body.classList.add('overflow-hidden');
  }
}

function closeMenu() {
  sidebarMenu.classList.add('-translate-x-full');
  sidebarMenu.classList.remove('translate-x-0');
  overlay.classList.add('hidden');
  if (window.innerWidth <= 1024) {
    body.classList.remove('overflow-hidden');
  }
}

menuToggle.addEventListener('click', openMenu);
menuClose.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);

window.addEventListener('resize', () => {
  if (window.innerWidth > 1024) {
    body.classList.remove('overflow-hidden');
  }
});

// Dropdown menu
document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
  toggle.addEventListener('click', function (e) {
    e.preventDefault(); 

    const dropdown = this.nextElementSibling;
    const iconWrapper = this.querySelector('.dropdown-icon');

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

    if (dropdown.style.maxHeight) {
      dropdown.style.maxHeight = null;
      iconWrapper.innerHTML = '<i class="fal fa-plus text-xs"></i>';
    } else {
      dropdown.style.maxHeight = dropdown.scrollHeight + 'px';
      iconWrapper.innerHTML = '<i class="fal fa-minus text-xs"></i>';
    }
  });
});

// sticy Header
window.addEventListener("scroll", function () {
  const header = document.getElementById("siteHeader");

  if (window.scrollY > 180) {
    header.classList.add("fixed-header");
  } else {
    header.classList.remove("fixed-header");
  }
});

// Hero slider
$(document).ready(function(){
    $('.hero-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      dots: true,
    });
  });

// Collection Slider
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

// Quick View Modal Slider
function openQuickView() {
  $('#quickViewModal').fadeIn();
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

// Quick View Modal number count
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

// FIlter in Range Count
const minR = document.getElementById('minRange');
const maxR = document.getElementById('maxRange');
const minP = document.getElementById('minPrice');
const maxP = document.getElementById('maxPrice');
const highlight = document.getElementById('rangeHighlight');
const maxVal = 17249;

const format = v => `₹${(+v).toLocaleString('en-IN', { minimumFractionDigits: 2 })}`;

const update = () => {
  const min = +minR.value;
  const max = +maxR.value;

  // Clamp only visually, no push effect
  const percentMin = Math.min((min / maxVal) * 100, 100);
  const percentMax = Math.min((max / maxVal) * 100, 100);

  highlight.style.left = `${percentMin}%`;
  highlight.style.right = `${100 - percentMax}%`;

  minP.textContent = format(min);
  maxP.textContent = format(max);
};

minR.addEventListener('input', () => {
  if (+minR.value > +maxR.value) minR.value = maxR.value;
  update();
});

maxR.addEventListener('input', () => {
  if (+maxR.value < +minR.value) maxR.value = minR.value;
  update();
});

update();


// Filter Toggle
const toggleBtn     = document.getElementById('filterToggle');
const filterPanel   = document.getElementById('filterPanel');
const filterOverlay = document.getElementById('filterOverlay');
const filterClose   = document.getElementById('filterClose');

function openFilters() {
  filterPanel.classList.remove('-translate-x-full');
  filterOverlay.classList.remove('hidden');
  if (window.innerWidth <= 1024) {
    document.body.classList.add('overflow-hidden');
  }
}
function closeFilters() {
  filterPanel.classList.add('-translate-x-full');
  filterOverlay.classList.add('hidden');
  if (window.innerWidth <= 1024) {
    document.body.classList.remove('overflow-hidden');
  }
}
window.addEventListener('resize', () => {
  if (window.innerWidth > 1024) {
    document.body.classList.remove('overflow-hidden');
  }
});

toggleBtn.addEventListener('click', openFilters);
filterOverlay.addEventListener('click', closeFilters);
filterClose.addEventListener('click', closeFilters);




  function toggleAccordion(btn) {
    const content = btn.nextElementSibling;
    const chevron = btn.querySelector(".chevron");

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      chevron.style.transform = "rotate(0deg)";
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      chevron.style.transform = "rotate(180deg)";
    }
  }