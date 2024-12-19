// Smooth scrolling for navigation
document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  });
});

// Back to top button
const backToTopButton = document.getElementById("back-to-top");
window.onscroll = function () {
  if (window.pageYOffset > 300) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
};

backToTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Contact form validation (basic)
document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    if (name && email && message) {
      alert("Ačiū, netrukus su jumis susisieksime");
    } else {
      alert("Prašome užpildyti privalomus laukus.");
    }
  });

// Email validation
const form = document.getElementById("contact-form");
form.addEventListener("submit", (e) => {
  const email = document.getElementById("email");
  if (!email.value.includes("@")) {
    e.preventDefault();
    alert("Netinkamas el.pašto stilius.");
  }
});
