const ROUTES = {
  "/": {
    key: "dashboard",
    title: "Dashboard",
    subtitle: "This section will be built in the next step.",
  },
  "/dashboard": {
    key: "dashboard",
    title: "Dashboard",
    subtitle: "This section will be built in the next step.",
  },
  "/saved": {
    key: "saved",
    title: "Saved",
    subtitle: "This section will be built in the next step.",
  },
  "/digest": {
    key: "digest",
    title: "Digest",
    subtitle: "This section will be built in the next step.",
  },
  "/settings": {
    key: "settings",
    title: "Settings",
    subtitle: "This section will be built in the next step.",
  },
  "/proof": {
    key: "proof",
    title: "Proof",
    subtitle: "This section will be built in the next step.",
  },
  "/404": {
    key: "not-found",
    title: "Page Not Found",
    subtitle: "The page you are looking for does not exist.",
  },
};

const titleEl = document.getElementById("page-title");
const subtitleEl = document.getElementById("page-subtitle");
const headerEl = document.querySelector(".app-shell__top-bar");
const navToggle = document.querySelector(".top-bar__menu-toggle");
const navLinks = Array.from(document.querySelectorAll(".top-bar__nav-link"));

function normalizePath(pathname) {
  if (!pathname || pathname === "/") {
    return "/dashboard";
  }
  return pathname.replace(/\/+$/, "") || "/dashboard";
}

function setActiveLink(routeKey) {
  navLinks.forEach((link) => {
    const route = link.getAttribute("data-route");
    const targetKey = ROUTES[route]?.key;
    if (targetKey && targetKey === routeKey) {
      link.classList.add("is-active");
    } else {
      link.classList.remove("is-active");
    }
  });
}

function renderRoute(path, options = { replace: false }) {
  const normalized = normalizePath(path);
  const routeConfig = ROUTES[normalized] || ROUTES["/404"];

  if (!routeConfig) return;

  if (titleEl) {
    titleEl.textContent = routeConfig.title;
  }
  if (subtitleEl) {
    subtitleEl.textContent = routeConfig.subtitle;
  }

  setActiveLink(routeConfig.key);

  const shouldReplace = options.replace || !ROUTES[normalized];
  const targetPath = ROUTES[normalized] ? normalized : "/404";

  if (shouldReplace) {
    history.replaceState({ path: targetPath }, "", targetPath);
  } else if (history.state?.path !== targetPath) {
    history.pushState({ path: targetPath }, "", targetPath);
  }

  if (headerEl && headerEl.classList.contains("top-bar--menu-open")) {
    headerEl.classList.remove("top-bar--menu-open");
    if (navToggle) {
      navToggle.setAttribute("aria-expanded", "false");
    }
  }
}

function handleNavClick(event) {
  const target = event.target.closest(".top-bar__nav-link");
  if (!target) return;

  const route = target.getAttribute("data-route");
  if (!route) return;

  const currentPath = history.state?.path || normalizePath(window.location.pathname);
  if (normalizePath(route) === currentPath) {
    event.preventDefault();
    return;
  }

  event.preventDefault();
  renderRoute(route, { replace: false });
}

if (navLinks.length > 0) {
  document.addEventListener("click", handleNavClick);
}

if (navToggle && headerEl) {
  navToggle.addEventListener("click", () => {
    const isOpen = headerEl.classList.toggle("top-bar--menu-open");
    navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
}

window.addEventListener("popstate", (event) => {
  const path = event.state?.path || normalizePath(window.location.pathname);
  renderRoute(path, { replace: true });
});

document.addEventListener("DOMContentLoaded", () => {
  const initialPath = normalizePath(window.location.pathname);
  renderRoute(initialPath, { replace: true });
});

