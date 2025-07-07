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
            otherIcon.innerHTML = '<img src="assets/images/icons/plus.svg" alt="plus" class="w-2.5">';
          }
        }
      }
    });

    if (dropdown.style.maxHeight) {
      dropdown.style.maxHeight = null;
      iconWrapper.innerHTML = '<img src="assets/images/icons/plus.svg" alt="plus" class="w-2.5">';
    } else {
      dropdown.style.maxHeight = dropdown.scrollHeight + 'px';
      iconWrapper.innerHTML = '<img src="assets/images/icons/minus.svg" alt="plus" class="w-2.5">';
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

  document.addEventListener("DOMContentLoaded", function () {
    new Swiper(".mySwiper", {
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  });
