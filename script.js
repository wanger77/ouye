const navToggleButtons = document.querySelectorAll(".nav-toggle");

navToggleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const nav = button.parentElement.querySelector(".site-nav");
    const isOpen = nav.classList.toggle("open");
    button.setAttribute("aria-expanded", String(isOpen));
  });
});

const currentPage = document.body.dataset.page;
const navLinks = document.querySelectorAll(".site-nav a");

navLinks.forEach((link) => {
  const url = new URL(link.href, window.location.href);
  if (url.pathname.endsWith(`${currentPage}.html`)) {
    link.classList.add("is-active");
  }
});
