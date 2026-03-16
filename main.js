const siteData = window.siteData || {};

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    };
    return entities[char];
  });
}

function isExternalUrl(url) {
  return /^https?:\/\//i.test(url);
}

function isDisabledUrl(url) {
  return !url || url === "#";
}

function createButton(link) {
  const disabled = isDisabledUrl(link.url);
  const classes = ["button"];
  if (link.style === "ghost") {
    classes.push("button--ghost");
  }
  if (disabled) {
    classes.push("is-disabled");
  }

  const target = isExternalUrl(link.url) ? ' target="_blank" rel="noreferrer"' : "";
  const href = disabled ? "#" : escapeHtml(link.url);

  return `<a class="${classes.join(" ")}" href="${href}"${target}>${escapeHtml(link.label)}</a>`;
}

function createLinkPill(link) {
  const disabled = isDisabledUrl(link.url);
  const target = isExternalUrl(link.url) ? ' target="_blank" rel="noreferrer"' : "";
  const className = disabled ? "link-pill is-disabled" : "link-pill";
  const href = disabled ? "#" : escapeHtml(link.url);
  return `<a class="${className}" href="${href}"${target}>${escapeHtml(link.label)}</a>`;
}

function resolveLinks() {
  const profile = siteData.profile || {};
  const cvUrl = profile.cvUrl;

  return (siteData.links || []).map((link) => {
    const isCvLink = (link.label || "").toLowerCase().includes("cv");

    if (isCvLink && cvUrl && cvUrl !== "#" && (!link.url || link.url === "#")) {
      return {
        ...link,
        url: cvUrl
      };
    }

    return link;
  });
}

function renderText(selector, value) {
  const element = document.querySelector(selector);
  if (element) {
    element.textContent = value ?? "";
  }
}

function renderMeta() {
  const meta = siteData.meta || {};
  const profile = siteData.profile || {};
  const title = meta.siteTitle || `${profile.name || "Your Name"} | Academic CV`;
  const description = meta.description || profile.summary || "Academic homepage.";

  document.title = title;

  const descriptionTag = document.querySelector('meta[name="description"]');
  if (descriptionTag) {
    descriptionTag.setAttribute("content", description);
  }

  const ogTitleTag = document.querySelector('meta[property="og:title"]');
  if (ogTitleTag) {
    ogTitleTag.setAttribute("content", title);
  }

  const ogDescriptionTag = document.querySelector('meta[property="og:description"]');
  if (ogDescriptionTag) {
    ogDescriptionTag.setAttribute("content", description);
  }
}

function renderProfile() {
  const profile = siteData.profile || {};

  renderText("#brand-name", profile.name);
  renderText("#hero-name", profile.name);
  renderText(
    "#hero-role",
    `${profile.title || ""}${profile.institution ? `, ${profile.institution}` : ""}`
  );
  renderText("#hero-summary", profile.summary);
  renderText("#footer-name", profile.name);

  const interests = document.querySelector("#interest-list");
  if (interests) {
    interests.innerHTML = (profile.researchInterests || [])
      .map((interest) => `<span class="chip">${escapeHtml(interest)}</span>`)
      .join("");
  }

  const details = document.querySelector("#profile-details");
  if (details) {
    details.innerHTML = (profile.details || [])
      .map(
        (item) => `
          <div class="detail-list__row">
            <dt>${escapeHtml(item.label)}</dt>
            <dd>${escapeHtml(item.value)}</dd>
          </div>
        `
      )
      .join("");
  }

  const stats = document.querySelector("#stats-grid");
  if (stats) {
    stats.innerHTML = (profile.stats || [])
      .map(
        (item) => `
          <article class="stat-card">
            <p class="stat-card__value">${escapeHtml(item.value)}</p>
            <p class="stat-card__label">${escapeHtml(item.label)}</p>
          </article>
        `
      )
      .join("");
  }

  const portraitSlot = document.querySelector("#portrait-slot");
  if (portraitSlot) {
    if (profile.portrait) {
      portraitSlot.innerHTML = `<img class="portrait-image" src="${escapeHtml(profile.portrait)}" alt="${escapeHtml(profile.name)} portrait">`;
    } else {
      const initials =
        profile.initials ||
        (profile.name || "YN")
          .split(" ")
          .map((part) => part[0])
          .join("")
          .slice(0, 2)
          .toUpperCase();
      portraitSlot.innerHTML = `<div class="portrait-fallback" aria-label="Initials portrait">${escapeHtml(initials)}</div>`;
    }
  }
}

function renderLinks() {
  const links = resolveLinks();
  const heroActions = document.querySelector("#hero-actions");
  const contactActions = document.querySelector("#contact-actions");

  if (heroActions) {
    heroActions.innerHTML = links.map(createButton).join("");
  }

  if (contactActions) {
    contactActions.innerHTML = links.map(createButton).join("");
  }
}

function renderUpdates() {
  const items = siteData.updates || [];
  const container = document.querySelector("#updates-list");
  const section = document.querySelector("#updates");

  if (!container || !section) {
    return;
  }

  if (!items.length) {
    section.hidden = true;
    return;
  }

  container.innerHTML = items
    .map(
      (item) => `
        <article class="update-card">
          <span class="update-card__date">${escapeHtml(item.date)}</span>
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.text)}</p>
        </article>
      `
    )
    .join("");
}

function renderPublications() {
  const items = siteData.publications || [];
  const container = document.querySelector("#publications-list");
  const section = document.querySelector("#publications");

  if (!container || !section) {
    return;
  }

  if (!items.length) {
    section.hidden = true;
    return;
  }

  container.innerHTML = items
    .map(
      (item) => `
        <article class="publication-card">
          <div class="publication-card__year">${escapeHtml(item.year)}</div>
          <div class="publication-card__body">
            <div class="publication-card__meta">${escapeHtml(item.venue)}</div>
            <h3>${escapeHtml(item.title)}</h3>
            <p>${escapeHtml(item.authors)}</p>
            <p>${escapeHtml(item.summary)}</p>
            <div class="publication-card__links">
              ${(item.links || []).map(createLinkPill).join("")}
            </div>
          </div>
        </article>
      `
    )
    .join("");
}

function renderTimeline() {
  const items = siteData.timeline || [];
  const container = document.querySelector("#timeline-list");
  const section = document.querySelector("#experience");

  if (!container || !section) {
    return;
  }

  if (!items.length) {
    section.hidden = true;
    return;
  }

  container.innerHTML = items
    .map(
      (item) => `
        <article class="timeline-item">
          <p class="timeline-item__meta">${escapeHtml(item.period)} · ${escapeHtml(item.category)}</p>
          <h3>${escapeHtml(item.title)}</h3>
          <p><strong>${escapeHtml(item.organization)}</strong></p>
          <p>${escapeHtml(item.description)}</p>
        </article>
      `
    )
    .join("");
}

function renderStackedList(selector, items, sectionSelector) {
  const container = document.querySelector(selector);
  const section = document.querySelector(sectionSelector);

  if (!container || !section) {
    return;
  }

  if (!items.length) {
    const panel = container.closest(".stacked-panel");
    if (panel) {
      panel.hidden = true;
    }
  } else {
    container.innerHTML = items
      .map(
        (item) => `
          <article class="stacked-item">
            <p class="stacked-item__meta">${escapeHtml(item.meta)}</p>
            <h3>${escapeHtml(item.title)}</h3>
            <p>${escapeHtml(item.description)}</p>
          </article>
        `
      )
      .join("");
  }

  const visiblePanels = section.querySelectorAll(".stacked-panel:not([hidden])");
  if (!visiblePanels.length) {
    section.hidden = true;
  }
}

function renderContact() {
  const contact = siteData.contact || {};
  const container = document.querySelector("#contact-details");
  const note = document.querySelector("#contact-note");
  const section = document.querySelector("#contact");

  if (!container || !note || !section) {
    return;
  }

  note.textContent = contact.note || "";

  if (!(contact.details || []).length) {
    section.hidden = true;
    return;
  }

  container.innerHTML = (contact.details || [])
    .map(
      (item) => `
        <article class="detail-item">
          <p class="detail-item__label">${escapeHtml(item.label)}</p>
          <h3 class="detail-item__value">${escapeHtml(item.value)}</h3>
        </article>
      `
    )
    .join("");
}

function initReveal() {
  const nodes = document.querySelectorAll("[data-reveal]");

  if (!("IntersectionObserver" in window)) {
    nodes.forEach((node) => node.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -48px 0px"
    }
  );

  nodes.forEach((node, index) => {
    node.style.transitionDelay = `${index * 60}ms`;
    observer.observe(node);
  });
}

function renderFooterYear() {
  renderText("#footer-year", String(new Date().getFullYear()));
}

renderMeta();
renderProfile();
renderLinks();
renderUpdates();
renderPublications();
renderTimeline();
renderStackedList("#teaching-list", siteData.teaching || [], "#teaching");
renderStackedList("#service-list", siteData.service || [], "#teaching");
renderStackedList("#awards-list", siteData.awards || [], "#teaching");
renderStackedList("#talks-list", siteData.talks || [], "#teaching");
renderContact();
renderFooterYear();
initReveal();
