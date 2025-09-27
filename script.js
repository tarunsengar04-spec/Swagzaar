document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".carousel-track");
  const items = document.querySelectorAll(".carousel-item");

  // Clone items so scrolling looks infinite
  items.forEach(item => {
    const clone = item.cloneNode(true);
    track.appendChild(clone);
  });

  const totalWidth = track.scrollWidth / 2;

  function animateCarousel() {
    anime({
      targets: track,
      translateX: [0, -totalWidth],
      duration: 40000, // adjust speed (bigger = slower)
      easing: "linear",
      loop: true
    });
  }

  animateCarousel();
});

// Animate headline on load
anime({
  targets: ".headline",
  translateY: [40, 0],
  opacity: [0, 1],
  easing: "easeOutExpo",
  duration: 1000
});

// CONTACT FORM HANDLER
document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contact-form");

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = new FormData(contactForm);
      const name = formData.get("name");

      alert(`Thanks, ${name}! Your message has been sent.`);
      contactForm.reset();
    });
  }
});
