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
      translateX: [-0, -totalWidth],
      duration: 40000, // slower = smoother
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

document.addEventListener("DOMContentLoaded", () => {
  const laser = document.querySelector(".laser-bg");

  // Animation for laser gradient movement (infinite rotation or shift)
  anime({
    targets: laser,
    rotate: 360,
    duration: 30000,
    easing: "linear",
    loop: true
  });

  // Optionally animate background translation
  anime({
    targets: laser,
    translateX: ["-25%", "25%"],
    translateY: ["-25%", "25%"],
    duration: 40000,
    easing: "linear",
    loop: true
  });

  // FORM VALIDATION
  const form = document.getElementById("signup-form");
  form.addEventListener("submit", e => {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const pwd = document.getElementById("password").value;
    const pwd2 = document.getElementById("password2").value;

    if (!name || !email || !pwd || !pwd2) {
      alert("Please fill all fields");
      return;
    }
    if (pwd !== pwd2) {
      alert("Passwords do not match");
      return;
    }
    // TODO: send to backend or Firebase
    alert("Form is valid — you can integrate backend now!");
  });
});

// CONTACT FORM HANDLER
document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contact-form");

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = new FormData(contactForm);
      const name = formData.get("name");
      const email = formData.get("email");
      const message = formData.get("message");

      // For now just show confirmation
      alert(`Thanks, ${name}! Your message has been sent.`);
      contactForm.reset();

      // Later → send this data to backend or email service
    });
  }
});