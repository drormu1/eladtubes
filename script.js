// script.js - לוגיקת האתר בלבד. עריכת תוכן נעשית ב-data.js.

const { contact: siteContact, galleries: galleryData } = window.siteData;

function renderMedia(item) {
  if (item.image) {
    return `<img src="${item.image}" alt="${item.title}" loading="lazy" />`;
  }

  if (item.video) {
    return `
      <video controls preload="metadata">
        <source src="${item.video}" type="video/mp4" />
      </video>
    `;
  }

  return "<div class=\"media-empty\">תוכן יתווסף בקרוב</div>";
}

function renderGallery(containerId, items) {
  const root = document.getElementById(containerId);
  if (!root) return;

  root.innerHTML = items
    .map((item) => {
      const badge = item.badge ? `<span class="media-badge">${item.badge}</span>` : "";

      return `
        <article class="card media-item">
          ${renderMedia(item)}
          <h3>${item.title}</h3>
          <p>${item.description}</p>
          ${badge}
        </article>
      `;
    })
    .join("");
}

renderGallery("equipment-gallery", galleryData.equipment);
renderGallery("clients-gallery", galleryData.clients);
renderGallery("projects-gallery", galleryData.projects);
renderGallery("team-gallery", galleryData.team);

function wireContactLinks() {
  const phoneHref = `tel:${siteContact.phoneE164}`;
  const whatsappHref = `https://wa.me/${siteContact.whatsappE164}?text=${encodeURIComponent(siteContact.whatsappText)}`;

  document.querySelectorAll("[data-phone-link]").forEach((el) => {
    el.setAttribute("href", phoneHref);
  });

  document.querySelectorAll("[data-whatsapp-link]").forEach((el) => {
    el.setAttribute("href", whatsappHref);
  });

  document.querySelectorAll("[data-phone-display]").forEach((el) => {
    el.textContent = siteContact.phoneDisplay;
  });
}

wireContactLinks();

// מזריק נתונים מובנים (JSON-LD) של עסק מקומי עבור גוגל - הערכים מגיעים מ-data.js בלבד.
function injectBusinessSchema() {
  const business = window.siteData.business;
  if (!business) return;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Plumber",
    name: business.name,
    description: business.description,
    telephone: siteContact.phoneE164,
    areaServed: business.areaServed,
  };

  if (business.siteUrl) {
    schema.url = business.siteUrl;
    schema.image = business.siteUrl.replace(/\/+$/, "") + "/assets/images/home-hero/hero-01.jpg";
  }

  const tag = document.createElement("script");
  tag.type = "application/ld+json";
  tag.textContent = JSON.stringify(schema);
  document.head.appendChild(tag);
}

injectBusinessSchema();

function wireNavToggle() {
  const topbar = document.querySelector(".topbar");
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("site-nav");
  if (!topbar || !toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const isOpen = topbar.classList.toggle("nav-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      topbar.classList.remove("nav-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

wireNavToggle();
