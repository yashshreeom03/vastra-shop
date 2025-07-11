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
    // Prevent click behavior only on mobile (below xl)
    if (window.innerWidth >= 1280) return;

    e.preventDefault();

    const dropdown = this.nextElementSibling;
    const iconWrapper = this.querySelector('.dropdown-icon');

    // Close all other open dropdowns
    document.querySelectorAll('.dropdown-menu').forEach(menu => {
      if (menu !== dropdown) {
        menu.style.maxHeight = null;
        const otherToggle = menu.previousElementSibling;
        if (otherToggle) {
          const otherIcon = otherToggle.querySelector('.dropdown-icon');
          if (otherIcon) {
            otherIcon.classList.remove('rotate-180');
          }
        }
      }
    });

    // Toggle this dropdown
    if (dropdown.style.maxHeight && dropdown.style.maxHeight !== '0px') {
      dropdown.style.maxHeight = null;
      iconWrapper.classList.remove('rotate-180');
    } else {
      dropdown.style.maxHeight = dropdown.scrollHeight + 'px';
      iconWrapper.classList.add('rotate-180');
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
  // Hero Swiper
  new Swiper(".hero-swiper", {
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

  // Exclusive Swiper
  new Swiper(".exclusive-Swiper", {
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

  // Top Picks
  new Swiper(".videoSlider", {
    slidesPerView: 2,
    spaceBetween: 20,
    loop: false,
    breakpoints: {
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 6,
      },
    },
  });
});

// Top Picks Video Pop
const modal = document.getElementById("videoModal");
const modalVideo = document.getElementById("modalVideo");
const closeBtn = document.getElementById("modalClose");

  document.querySelectorAll(".video-thumb").forEach((video) => {
    video.addEventListener("click", () => {
      const videoSrc = video.getAttribute("data-src");
      modalVideo.src = videoSrc;
      modal.classList.remove("hidden");
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
    modalVideo.pause();
    modalVideo.src = "";
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.add("hidden");
      modalVideo.pause();
      modalVideo.src = "";
    }
  });

// Testimonials
const swiper = new Swiper(".testimonialSwiper", {
  loop: true,
  centeredSlides: true,
  slidesPerView: 1.2,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: { slidesPerView: 1.5 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  },
  on: {
    slideChangeTransitionEnd: function () {
      document.querySelectorAll('.testimonialSwiper .swiper-slide').forEach(slide => {
        slide.classList.remove('active-slide');
      });
      const activeSlide = document.querySelector('.testimonialSwiper .swiper-slide-active');
      if (activeSlide) activeSlide.classList.add('active-slide');
    }
  }
});
document.addEventListener('DOMContentLoaded', () => {
    const firstActive = document.querySelector('.testimonialSwiper .swiper-slide-active');
    if (firstActive) firstActive.classList.add('active-slide');
});