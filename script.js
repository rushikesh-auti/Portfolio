document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");
  const navLinkItems = navLinks.querySelectorAll("a");
  const navbar = document.querySelector(".navbar");
  const sections = document.querySelectorAll("section");
  const fadeElems = document.querySelectorAll(".fade-in");
  const navbarHeight = navbar.offsetHeight;

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // Smooth scroll
  navLinkItems.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      navLinks.classList.remove("active");
      const target = document.getElementById(
        link.getAttribute("href").substring(1)
      );
      if (target) {
        const y = target.offsetTop - navbarHeight - 10;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    });
  });

  const handleScroll = () => {
    const scrollY = window.pageYOffset + navbarHeight + 15;
    let current = "";
    sections.forEach((section) => {
      if (scrollY >= section.offsetTop) current = section.id;
    });
    navLinkItems.forEach((l) => {
      l.classList.toggle(
        "active-link",
        l.getAttribute("href").substring(1) === current
      );
    });
    navbar.classList.toggle("scrolled", window.scrollY > 50);
    fadeElems.forEach((elem) => {
      if (elem.getBoundingClientRect().top <= window.innerHeight * 0.85)
        elem.classList.add("visible");
    });
  };
  window.addEventListener("scroll", handleScroll);
  handleScroll();
});

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");
contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Send email using EmailJS
  emailjs.sendForm("service_kbcojdm", "template_0az5azs", this, "c4RHqWB7rEd08vDTT").then(
    function () {
      formMessage.textContent = "Message sent successfully!";
      contactForm.reset();
    },
    function (error) {
      formMessage.textContent =
        "Failed to send message. Please try again later.";
    }
  );
});
