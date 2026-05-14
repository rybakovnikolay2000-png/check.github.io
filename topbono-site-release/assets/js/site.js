const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");

if (navToggle && siteNav) {
  const closeNav = () => {
    siteNav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  };

  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeNav);
  });

  document.addEventListener("click", (event) => {
    if (!siteNav.classList.contains("is-open")) return;
    const target = event.target;
    if (target instanceof Node && !siteNav.contains(target) && !navToggle.contains(target)) {
      closeNav();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeNav();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 860) {
      closeNav();
    }
  });
}

const currentYear = document.querySelectorAll("[data-year]");
currentYear.forEach((node) => {
  node.textContent = new Date().getFullYear();
});

const normalizePath = (path) => {
  if (!path || path === "/") return "index.html";
  const clean = path.split("/").filter(Boolean).pop() || "index.html";
  return clean;
};

const currentPath = normalizePath(window.location.pathname);
document.querySelectorAll(".site-nav a, .footer-links a").forEach((link) => {
  const href = link.getAttribute("href");
  if (!href || href.startsWith("#")) return;
  if (normalizePath(href) === currentPath) {
    link.setAttribute("aria-current", "page");
  }
});
