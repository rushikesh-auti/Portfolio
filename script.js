document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');
  const navLinkItems = navLinks.querySelectorAll('a');
  const navbar    = document.querySelector('.navbar');
  const sections  = document.querySelectorAll('section');
  const fadeElems = document.querySelectorAll('.fade-in');
  const navbarHeight = navbar.offsetHeight;

  // Toggle mobile menu
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // Smooth scroll
  navLinkItems.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      navLinks.classList.remove('active');
      const target = document.getElementById(link.getAttribute('href').substring(1));
      if (target) {
        const y = target.offsetTop - navbarHeight - 10;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    });
  });

  const handleScroll = () => {
    const scrollY = window.pageYOffset + navbarHeight + 15;
    let current = '';
    sections.forEach(section => {
      if (scrollY >= section.offsetTop) current = section.id;
    });
    navLinkItems.forEach(l => {
      l.classList.toggle('active-link', l.getAttribute('href').substring(1) === current);
    });
    navbar.classList.toggle('scrolled', window.scrollY > 50);
    fadeElems.forEach(elem => {
      if (elem.getBoundingClientRect().top <= window.innerHeight * 0.85)
        elem.classList.add('visible');
    });
  };
  window.addEventListener('scroll', handleScroll);
  handleScroll();
});

// Contact form
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = {
    name:   contactForm.name.value.trim(),
    email:  contactForm.email.value.trim(),
    phone:  contactForm.phone.value.trim(),
    subject:contactForm.subject.value.trim(),
    message:contactForm.message.value.trim()
  };

  formMessage.textContent = 'Sending...';
  formMessage.style.color = '#2563eb';

  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    const data = await res.json();
    if (data.success) {
      formMessage.textContent = 'Thank you! Your message has been sent.';
      formMessage.style.color = 'green';
      contactForm.reset();
    } else {
      formMessage.textContent = data.error || 'Error sending message.';
      formMessage.style.color = 'red';
    }
  } catch (err) {
    console.error(err);
    formMessage.textContent = 'Error sending message.';
    formMessage.style.color = 'red';
  }
});
