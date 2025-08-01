
// document.addEventListener("DOMContentLoaded", () => {
//   const body = document.body;

//   // MENU SIDEBAR CODE
//   const menuToggle = document.getElementById('menuToggle');
//   const menuClose = document.getElementById('menuClose');
//   const sidebarMenu = document.getElementById('sidebarMenu');
//   const overlay = document.getElementById('overlay');

//   if (menuToggle && menuClose && sidebarMenu && overlay) {
//     function openMenu() {
//       sidebarMenu.classList.remove('-translate-x-full');
//       sidebarMenu.classList.add('translate-x-0');
//       overlay.classList.remove('hidden');
//       if (window.innerWidth <= 1024) {
//         body.classList.add('overflow-hidden');
//       }
//     }

//     function closeMenu() {
//       sidebarMenu.classList.add('-translate-x-full');
//       sidebarMenu.classList.remove('translate-x-0');
//       overlay.classList.add('hidden');
//       if (window.innerWidth <= 1024) {
//         body.classList.remove('overflow-hidden');
//       }
//     }

//     menuToggle.addEventListener('click', openMenu);
//     menuClose.addEventListener('click', closeMenu);
//     overlay.addEventListener('click', closeMenu);
//   }

//     // CART SIDEBAR CODE
//   const cartToggle = document.getElementById("cartToggle");
//   const cartSidebar = document.getElementById("cartSidebar");
//   const closeCart = document.getElementById("closeCart");
//   const cartBackdrop = document.getElementById("cartBackdrop");

//   if (cartToggle && cartSidebar && closeCart && cartBackdrop) {
//     cartToggle.addEventListener("click", (e) => {
//       e.preventDefault();
//       cartSidebar.classList.remove("translate-x-full");
//       cartBackdrop.classList.remove("hidden");

//       if (window.innerWidth <= 1024) {
//         body.classList.add("overflow-hidden");
//       }
//     });

//     function closeCartSidebar() {
//       cartSidebar.classList.add("translate-x-full");
//       cartBackdrop.classList.add("hidden");
//       body.classList.remove("overflow-hidden");
//     }

//     closeCart.addEventListener("click", closeCartSidebar);
//     cartBackdrop.addEventListener("click", closeCartSidebar);
//   }

//   // WINDOW RESIZE: Remove scroll lock always
//   window.addEventListener("resize", () => {
//     body.classList.remove("overflow-hidden");
//   });
// });


// // Dropdown menu
// function initDropdownBehavior() {
//   const isDesktop = window.innerWidth >= 1280;

//   document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
//     const dropdown = toggle.nextElementSibling;
//     const icon = toggle.querySelector('.dropdown-icon');

//     // On desktop: remove mobile dropdown styles
//     if (isDesktop) {
//       dropdown.style.maxHeight = null;
//       icon?.classList.remove('rotate-180');
//     }
//   });
// }

// // Dropdown toggle click – only for < 1280px screens
// document.addEventListener('DOMContentLoaded', function () {
//   const toggles = document.querySelectorAll('.dropdown-toggle');

//   toggles.forEach(toggle => {
//     toggle.addEventListener('click', function (e) {
//       const isXL = window.innerWidth >= 1280;
//       if (isXL) return;

//       e.preventDefault();

//       const dropdown = this.nextElementSibling;
//       const icon = this.querySelector('.dropdown-icon');

//       document.querySelectorAll('.dropdown-menu').forEach(menu => {
//         if (menu !== dropdown) {
//           menu.style.maxHeight = '0';
//         }
//       });

//       document.querySelectorAll('.dropdown-icon').forEach(ic => {
//         if (ic !== icon) ic.classList.remove('rotate-180');
//       });

//       dropdown.style.maxHeight =
//         dropdown.style.maxHeight === '0px' || !dropdown.style.maxHeight
//           ? dropdown.scrollHeight + 'px'
//           : '0';
//       icon.classList.toggle('rotate-180');
//     });
//   });

//   window.addEventListener('resize', initDropdownBehavior);
//   initDropdownBehavior();
// });


// sticy Header
window.addEventListener("scroll", function () {
  const header = document.getElementById("siteHeader");

  if (window.scrollY > 180) {
    header.classList.add("fixed-header");
  } else {
    header.classList.remove("fixed-header");
  }
});

// document.addEventListener("DOMContentLoaded", function () {
//   // Hero Swiper
//   new Swiper(".hero-swiper", {
//     loop: true,
//     autoplay: {
//       delay: 5000,
//       disableOnInteraction: false,
//     },
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//   });

//   // Exclusive Swiper
//   new Swiper(".exclusive-Swiper", {
//     loop: true,
//     autoplay: {
//       delay: 5000,
//       disableOnInteraction: false,
//     },
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//   });


//   // Top Picks
//   new Swiper(".videoSlider", {
//     slidesPerView: 2,
//     spaceBetween: 20,
//     loop: false,
//     breakpoints: {
//       768: {
//         slidesPerView: 3,
//       },
//       1024: {
//         slidesPerView: 6,
//       },
//     },
//   });

//   // Top Picks
//   new Swiper(".recently-viewed", {
//     slidesPerView: 1,
//     spaceBetween: 20,
//     loop: false,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//     breakpoints: {
//       768: {
//         slidesPerView: 3,
//       },
//       1024: {
//         slidesPerView: 4,
//       },
//     },
//   });
// });

// // Top Picks Video Pop
// document.addEventListener("DOMContentLoaded", function () {
//   const modal = document.getElementById("videoModal");
//   const modalVideo = document.getElementById("modalVideo");
//   const closeBtn = document.getElementById("modalClose");

//   if (modal && modalVideo && closeBtn) {
//     document.querySelectorAll(".video-thumb").forEach((video) => {
//       video.addEventListener("click", () => {
//         const videoSrc = video.getAttribute("data-src");
//         modalVideo.src = videoSrc;
//         modal.classList.remove("hidden");
//       });
//     });

//     closeBtn.addEventListener("click", () => {
//       modal.classList.add("hidden");
//       modalVideo.pause();
//       modalVideo.src = "";
//     });

//     modal.addEventListener("click", (e) => {
//       if (e.target === modal) {
//         modal.classList.add("hidden");
//         modalVideo.pause();
//         modalVideo.src = "";
//       }
//     });
//   }
// });


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



// // Quick View Modal number count
// function incrementValue(button) {
//   const input = button.parentElement.querySelector('input[type="number"]');
//   let currentValue = parseInt(input.value) || 0;
//   const max = parseInt(input.max) || 1000;
//     if (currentValue < max) {
//       input.value = currentValue + 1;
//     }
// }
// function decrementValue(button) {
//   const input = button.parentElement.querySelector('input[type="number"]');
//   let currentValue = parseInt(input.value) || 1;
//   const min = parseInt(input.min) || 1;
//     if (currentValue > min) {
//       input.value = currentValue - 1;
//     }
// }



// function toggleDropdown() {
//     const menu = document.getElementById('Sort-dropdownMenu');
//     menu.classList.toggle('hidden');
//   }

//   function changeSort(element) {
//     const name = element.getAttribute('data-name');
//     document.getElementById('selectedSort').textContent = name;
//     document.getElementById('Sort-dropdownMenu').classList.add('hidden');

//     // Optional: trigger fetch
//     ChangeProductFetchType(element);
//   }

//   document.addEventListener('click', function (e) {
//     const container = document.getElementById('sortByContainer');
//     if (!container.contains(e.target)) {
//       document.getElementById('Sort-dropdownMenu').classList.add('hidden');
//     }
//   });

//   function ChangeProductFetchType(el) {
//     const selectedValue = el.getAttribute('data-value');
//     console.log("Fetching products by:", selectedValue);
//     // Your fetch logic here
//   }



  const images = [
      'assets/images/collection-details/collection-details-1.png',
      'assets/images/collection-details/collection-details-2.png',
      'assets/images/collection-details/collection-details-3.png',
      'assets/images/collection-details/collection-details-4.png'
    ];

    let currentIndex = 0;

    function openLightbox(index) {
      currentIndex = index;
      const lightboxImg = document.getElementById("lightbox-img");
      lightboxImg.src = images[currentIndex];
      lightboxImg.classList.remove("scale-150", "cursor-zoom-out");
      lightboxImg.classList.add("cursor-zoom-in");
      document.getElementById("lightbox").classList.remove("hidden");
      document.getElementById("lightbox").classList.add("flex");
    }

    function closeLightbox() {
      document.getElementById("lightbox").classList.remove("flex");
      document.getElementById("lightbox").classList.add("hidden");
    }

    function prevSlide() {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      updateLightboxImage();
    }

    function nextSlide() {
      currentIndex = (currentIndex + 1) % images.length;
      updateLightboxImage();
    }

    function updateLightboxImage() {
      const lightboxImg = document.getElementById("lightbox-img");
      lightboxImg.src = images[currentIndex];
      lightboxImg.classList.remove("scale-150", "cursor-zoom-out");
      lightboxImg.classList.add("cursor-zoom-in");
    }

    function toggleZoom() {
      const img = document.getElementById("lightbox-img");
      if (img.classList.contains("scale-150")) {
        img.classList.remove("scale-150", "cursor-zoom-out");
        img.classList.add("cursor-zoom-in");
      } else {
        img.classList.add("scale-150", "cursor-zoom-out");
        img.classList.remove("cursor-zoom-in");
      }
    }

    document.addEventListener('keydown', function(event) {
      if (event.key === "Escape") {
        closeLightbox();
      }
    });

// // FIlter in Range Count
// const minR = document.getElementById('minRange');
// const maxR = document.getElementById('maxRange');
// const minP = document.getElementById('minPrice');
// const maxP = document.getElementById('maxPrice');
// const highlight = document.getElementById('rangeHighlight');
// const maxVal = 17249;

// const format = v => `₹${(+v).toLocaleString('en-IN', { minimumFractionDigits: 2 })}`;

// const update = () => {
//   const min = +minR.value;
//   const max = +maxR.value;

//   // Clamp only visually, no push effect
//   const percentMin = Math.min((min / maxVal) * 100, 100);
//   const percentMax = Math.min((max / maxVal) * 100, 100);

//   highlight.style.left = `${percentMin}%`;
//   highlight.style.right = `${100 - percentMax}%`;

//   minP.textContent = format(min);
//   maxP.textContent = format(max);
// };

// minR.addEventListener('input', () => {
//   if (+minR.value > +maxR.value) minR.value = maxR.value;
//   update();
// });

// maxR.addEventListener('input', () => {
//   if (+maxR.value < +minR.value) maxR.value = minR.value;
//   update();
// });

// update();


// // Filter Toggle
// const toggleBtn     = document.getElementById('filterToggle');
// const filterPanel   = document.getElementById('filterPanel');
// const filterOverlay = document.getElementById('filterOverlay');
// const filterClose   = document.getElementById('filterClose');

// function openFilters() {
//   filterPanel.classList.remove('-translate-x-full');
//   filterOverlay.classList.remove('hidden');
//   if (window.innerWidth <= 1024) {
//     document.body.classList.add('overflow-hidden');
//   }
// }
// function closeFilters() {
//   filterPanel.classList.add('-translate-x-full');
//   filterOverlay.classList.add('hidden');
//   if (window.innerWidth <= 1024) {
//     document.body.classList.remove('overflow-hidden');
//   }
// }
// window.addEventListener('resize', () => {
//   if (window.innerWidth > 1024) {
//     document.body.classList.remove('overflow-hidden');
//   }
// });

// toggleBtn.addEventListener('click', openFilters);
// filterOverlay.addEventListener('click', closeFilters);
// filterClose.addEventListener('click', closeFilters);


// // accordions
// function toggleAccordion(id) {
//   const content = document.getElementById(`content-${id}`);
//   const icon = document.getElementById(`icon-${id}`);

//   const isOpen = content.style.maxHeight && content.style.maxHeight !== '0px';

//   // Close all other accordions
//   document.querySelectorAll('.accordion-content').forEach(item => {
//     item.style.maxHeight = null;
//   });
//   document.querySelectorAll('.chevron').forEach(icon => {
//     icon.style.transform = 'rotate(0deg)';
//   });

//   if (!isOpen) {
//     content.style.maxHeight = content.scrollHeight + "px";
//     icon.style.transform = "rotate(180deg)";
//   }
// }


// const productGrid = document.getElementById("productGrid");
// const rowViewBtn = document.querySelector(".row-viwe");
// const gridViewBtn = document.querySelector(".grid-viwe");

// const toggleProductBoxes = (isRow) => {
//   document.querySelectorAll(".product-box").forEach(box => {
//     const img = box.querySelector(".main-img");
//     const productDetails = box.querySelector(".product-details");
//     const imageWrapper = box.querySelector(".image-wrapper");
//     const hoverBtn = imageWrapper.querySelector("a");
//     const rowAddBtn = box.querySelector(".row-add-btn");

//     if (isRow) {
//       box.classList.add("md:flex", "md:gap-4");
//       img.classList.remove("max-h-[502px]");
//       img.classList.add("max-h-[240px]", "min-h-[240px]");
//       productDetails.classList.remove("hidden");
//       if (hoverBtn) hoverBtn.classList.add("hidden");
//       if (rowAddBtn) rowAddBtn.classList.remove("hidden");
//       imageWrapper.classList.remove("mb-3");
//     } else {
//       box.classList.remove("md:flex", "md:gap-4");
//       img.classList.remove("max-h-[240px]", "min-h-[240px]");
//       img.classList.add("max-h-[502px]");
//       productDetails.classList.add("hidden");
//       if (hoverBtn) hoverBtn.classList.remove("hidden");
//       if (rowAddBtn) rowAddBtn.classList.add("hidden");
//       imageWrapper.classList.add("mb-3"); 
//     }
//   });
// };

// const setButtonStyles = (isRow) => {
//   if (isRow) {
//     rowViewBtn.classList.add("text-[#FB2944]");
//     rowViewBtn.classList.remove("hover:text-black");
//     gridViewBtn.classList.remove("text-[#FB2944]");
//     gridViewBtn.classList.add("hover:text-black");
//   } else {
//     gridViewBtn.classList.add("text-[#FB2944]");
//     gridViewBtn.classList.remove("hover:text-black");
//     rowViewBtn.classList.remove("text-[#FB2944]");
//     rowViewBtn.classList.add("hover:text-black");
//   }
// };

// // Default grid view on load
// gridViewBtn.classList.add("text-[#FB2944]");
// toggleProductBoxes(false);

// rowViewBtn.addEventListener("click", () => {
//   if (window.innerWidth >= 768) {
//     productGrid.classList.remove("grid", "sm:grid-cols-2", "lg:grid-cols-3");
//     productGrid.classList.add("flex", "flex-col", "gap-y-7");
//     setButtonStyles(true);
//     toggleProductBoxes(true);
//   } else {
//     alert("Row view is only available on medium screens and above (≥768px).");
//   }
// });

// gridViewBtn.addEventListener("click", () => {
//   productGrid.classList.remove("flex", "flex-col", "gap-y-7");
//   productGrid.classList.add("grid", "sm:grid-cols-2", "lg:grid-cols-3");
//   setButtonStyles(false);
//   toggleProductBoxes(false);
// });

// window.addEventListener("resize", () => {
//   if (window.innerWidth < 768) {
//     productGrid.classList.remove("flex", "flex-col", "gap-y-7");
//     productGrid.classList.add("grid", "sm:grid-cols-2", "lg:grid-cols-3");
//     setButtonStyles(false);
//     toggleProductBoxes(false);
//   }
// });


// document.addEventListener("DOMContentLoaded", () => {
//   const colorLinks = document.querySelectorAll("#colorFilter a");

//   colorLinks.forEach(link => {
//     link.addEventListener("click", (e) => {
//       e.preventDefault();

//       const clickedFilter = link.querySelector(".filter-color");
//       const allFilters = document.querySelectorAll("#colorFilter .filter-color");

//       const isAlreadyActive = clickedFilter.classList.contains("active");

//       allFilters.forEach(fc => {
//         fc.classList.remove("border-gray-400", "active");
//         fc.querySelector(".check-icon")?.classList.add("hidden");
//       });

//       if (!isAlreadyActive) {
//         clickedFilter.classList.add("border-gray-400", "active");
//         clickedFilter.querySelector(".check-icon")?.classList.remove("hidden");
//       }
//     });
//   });
// });

// function toggleAccordion(arg) {
//   if (typeof arg === 'string') {
//     const content = document.getElementById(`content-${arg}`);
//     const icon = document.getElementById(`icon-${arg}`);

//     const isOpen = content.style.maxHeight && content.style.maxHeight !== '0px';

//     document.querySelectorAll('.accordion-content').forEach(item => {
//       item.style.maxHeight = null;
//     });
//     document.querySelectorAll('.chevron').forEach(icon => {
//       icon.style.transform = 'rotate(0deg)';
//     });

//     if (!isOpen) {
//       content.style.maxHeight = content.scrollHeight + "px";
//       icon.style.transform = "rotate(180deg)";
//     }

//   } else {
//     const content = arg.nextElementSibling;
//     const chevron = arg.querySelector(".filterchevron");

//     const isOpen = content.style.maxHeight && content.style.maxHeight !== "0px";

//     if (isOpen) {
//       content.style.maxHeight = null;
//       chevron?.classList.remove("rotate-180");
//       chevron?.classList.add("rotate-0");
//     } else {
//       content.style.maxHeight = content.scrollHeight + "px";
//       chevron?.classList.remove("rotate-0");
//       chevron?.classList.add("rotate-180");
//     }
//   }
// }


// window.addEventListener("DOMContentLoaded", () => {
//   document.querySelectorAll(".filter-content").forEach((content) => {
//     content.style.maxHeight = content.scrollHeight + "px";
//     content.previousElementSibling.querySelector(".filterchevron")?.classList.add("rotate-180");
//   });
// });


document.addEventListener("DOMContentLoaded", function () {
  const searchToggle = document.getElementById("searchToggle");
  const searchBar = document.getElementById("searchBar");
  const closeSearchBar = document.getElementById("closeSearchBar");
  const searchBarOverlay = document.getElementById("searchBarOverlay");
  const body = document.body;

  function isLGorSmaller() {
    return window.innerWidth <= 1024;
  }

  function showSearchBar() {
    // Show overlay
    searchBarOverlay.classList.remove("hidden");
    requestAnimationFrame(() => {
      searchBarOverlay.classList.add("opacity-100");
      searchBarOverlay.classList.remove("opacity-0");
    });

    // Show sidebar
    searchBar.classList.remove("hidden");
    requestAnimationFrame(() => {
      searchBar.classList.remove("translate-x-full");
      searchBar.classList.add("translate-x-0");
    });

    // ✅ Lock scroll only on lg and below
    if (isLGorSmaller()) {
      body.classList.add("overflow-hidden");
    }
  }

  function hideSearchBar() {
    // Hide overlay
    searchBarOverlay.classList.remove("opacity-100");
    searchBarOverlay.classList.add("opacity-0");
    setTimeout(() => {
      searchBarOverlay.classList.add("hidden");
    }, 300);

    // Hide sidebar
    searchBar.classList.remove("translate-x-0");
    searchBar.classList.add("translate-x-full");
    setTimeout(() => {
      searchBar.classList.add("hidden");
    }, 300);

    // Remove scroll lock always
    body.classList.remove("overflow-hidden");
  }

  searchToggle.addEventListener("click", function (e) {
    e.preventDefault();
    if (searchBar.classList.contains("hidden")) {
      showSearchBar();
    } else {
      hideSearchBar();
    }
  });

  closeSearchBar.addEventListener("click", hideSearchBar);
  searchBarOverlay.addEventListener("click", hideSearchBar);

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") hideSearchBar();
  });

  // Safety: remove scroll lock if screen is resized up
  window.addEventListener("resize", () => {
    if (!isLGorSmaller()) {
      body.classList.remove("overflow-hidden");
    }
  });
});



  document.addEventListener("DOMContentLoaded", function () {
    const scrollTopBtn = document.getElementById("scrollTopBtn");

    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        scrollTopBtn.classList.remove("hidden");
      } else {
        scrollTopBtn.classList.add("hidden");
      }
    });

    scrollTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  });

   document.addEventListener("DOMContentLoaded", () => {
    const tabLinks = document.querySelectorAll(".tab-link");
    const tabPanes = document.querySelectorAll(".tab-pane");

    tabLinks.forEach(link => {
      link.addEventListener("click", () => {
        const target = link.getAttribute("data-tab");

        // Set active tab
        tabLinks.forEach(l => l.classList.remove("active"));
        link.classList.add("active");

        // Show corresponding content
        tabPanes.forEach(pane => {
          if (pane.id === target) {
            pane.classList.remove("hidden");
            pane.classList.add("block");
          } else {
            pane.classList.remove("block");
            pane.classList.add("hidden");
          }
        });
      });
    });
  });

 document.addEventListener("DOMContentLoaded", function () {
    const stars = document.querySelectorAll("#svgStarRating .star");
    const ratingInput = document.getElementById("ratingValue");

    stars.forEach(star => {
      star.addEventListener("click", function () {
        const selected = parseInt(this.getAttribute("data-value"));
        ratingInput.value = selected;

        stars.forEach(s => {
          const val = parseInt(s.getAttribute("data-value"));
          if (val <= selected) {
            s.classList.remove("text-gray-400");
            s.classList.add("text-yellow-400");
          } else {
            s.classList.remove("text-yellow-400");
            s.classList.add("text-gray-400");
          }
        });
      });
    });
  });

 document.addEventListener("DOMContentLoaded", function () {
    const uploadBox = document.getElementById("uploadBox");
    const imageInput = document.getElementById("imageUploader");
    const previewContainer = document.getElementById("previewImages");

    const MAX_FILES = 5;
    const MAX_SIZE_MB = 2;

    let selectedFiles = [];

    uploadBox.addEventListener("click", () => {
      imageInput.click();
    });

    imageInput.addEventListener("change", () => {
      const files = Array.from(imageInput.files);

      if (selectedFiles.length + files.length > MAX_FILES) {
        alert(`You can upload up to ${MAX_FILES} images in total.`);
        return;
      }

      files.forEach(file => {
        const validTypes = ['image/jpeg', 'image/png'];
        const isValidType = validTypes.includes(file.type);
        const isValidSize = file.size <= MAX_SIZE_MB * 1024 * 1024;

        if (!isValidType) {
          alert(`${file.name} is not a supported format.`);
          return;
        }
        if (!isValidSize) {
          alert(`${file.name} exceeds ${MAX_SIZE_MB}MB limit.`);
          return;
        }

        selectedFiles.push(file); 

        const reader = new FileReader();
        reader.onload = function (e) {
          const wrapper = document.createElement("div");
          wrapper.className = "relative group";

          const img = document.createElement("img");
          img.src = e.target.result;
          img.className = "w-full h-32 sm:h-36 md:h-52 object-cover rounded border";

          const removeBtn = document.createElement("button");
          removeBtn.innerHTML = "×";
          removeBtn.className =
            "absolute top-1 right-1 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold";

          removeBtn.addEventListener("click", () => {
            wrapper.remove();
            selectedFiles = selectedFiles.filter(f => f !== file);
          });

          wrapper.appendChild(img);
          wrapper.appendChild(removeBtn);
          previewContainer.appendChild(wrapper);
        };

        reader.readAsDataURL(file);
      });
      imageInput.value = '';
    });
  });


 document.addEventListener("DOMContentLoaded", function () {
    const videoUploadBox = document.getElementById("videoUploadBox");
    const videoInput = document.getElementById("videoUploader");
    const previewContainer = document.getElementById("previewVideo");

    const MAX_SIZE_MB = 20;

    if (!videoUploadBox || !videoInput || !previewContainer) {
      console.error("One or more elements not found.");
      return;
    }

    videoUploadBox.addEventListener("click", () => {
      videoInput.click(); 
    });

    videoInput.addEventListener("change", () => {
      previewContainer.innerHTML = '';

      const file = videoInput.files[0];
      if (!file) return;

      const isValidType = file.type === "video/mp4";
      const isValidSize = file.size <= MAX_SIZE_MB * 1024 * 1024;

      if (!isValidType) {
        alert("Only MP4 video files are allowed.");
        videoInput.value = '';
        return;
      }

      if (!isValidSize) {
        alert(`Video exceeds the ${MAX_SIZE_MB}MB size limit.`);
        videoInput.value = '';
        return;
      }

      const wrapper = document.createElement("div");
      wrapper.className = "relative inline-block";

      const closeBtn = document.createElement("button");
      closeBtn.innerHTML = "&times;";
      closeBtn.className = "absolute top-1 right-1 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm z-10";
      closeBtn.addEventListener("click", () => {
        wrapper.remove();
        videoInput.value = '';
      });

      const video = document.createElement("video");
      video.src = URL.createObjectURL(file);
      video.controls = true;
      video.className = "max-h-[250px] max-w-[200px] rounded border";

      wrapper.appendChild(video);
      wrapper.appendChild(closeBtn);
      previewContainer.appendChild(wrapper);
    });
  });

function openLightboxreview(el, type) {
  const lightbox = document.querySelector(".review-lightbox");
  const contentBox = document.getElementById("lightboxContent");

  contentBox.innerHTML = "";

  if (type === 'image') {
    const img = document.createElement("img");
    img.src = el.src;
    img.alt = "Full View";
    contentBox.appendChild(img);
  } else if (type === 'video') {
    const videoSrc = el.getAttribute("data-video");
    const video = document.createElement("video");
    video.src = videoSrc;
    video.controls = true;
    video.autoplay = true;
    contentBox.appendChild(video);
  }

  lightbox.classList.add("show");
}

function closeLightboxreview() {
  const lightbox = document.querySelector(".review-lightbox");
  const contentBox = document.getElementById("lightboxContent");

  contentBox.innerHTML = "";
  lightbox.classList.remove("show");
}

document.querySelector(".review-lightbox").addEventListener("click", function (e) {
  if (e.target.classList.contains("review-lightbox")) {
    closeLightboxreview();
  }
});
