// ==========================
// Mobile Menu Functionality
// ==========================
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");
const navLinks = document.querySelectorAll(".nav-link");

menuOpenButton.addEventListener("click", () => {
    document.body.classList.toggle("show-mobile-menu");
});

menuCloseButton.addEventListener("click", () => {
    document.body.classList.remove("show-mobile-menu");
});

navLinks.forEach(link => {
    link.addEventListener("click", () => menuOpenButton.click());
});

// ==========================
// Swiper Slider Initialization
// ==========================
const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  grabCursor: true,
  spaceBetween: 25,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    0: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  }
});

// ==========================
// Order Form Functionality
// ==========================
const orderForm = document.querySelector('#order-form');
if(orderForm){
    orderForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Collect selected menu items
        const items = Array.from(orderForm.querySelectorAll('input[name="items"]:checked')).map(i => i.value);
        const galleryItems = Array.from(orderForm.querySelectorAll('input[name="gallery"]:checked')).map(i => i.value);
        const name = orderForm.name.value;
        const email = orderForm.email.value;
        const message = orderForm.message.value;

        if(items.length === 0){
            alert('Please select at least one menu item to place an order.');
            return;
        }

        // Display order summary
        let summary = `Order placed successfully!\n\nName: ${name}\nEmail: ${email}\nMenu Items: ${items.join(', ')}\nGallery Items: ${galleryItems.join(', ')}\nNotes: ${message}`;
        alert(summary);

        orderForm.reset();
    });
}
