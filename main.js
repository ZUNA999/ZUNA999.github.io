const rootData = window.siteData || {};
let activeLanguage = rootData.defaultLanguage || Object.keys(rootData.locales || {})[0] || "en";
let siteData = getLocalizedData(activeLanguage);

function getLocalizedData(language) {
  return rootData.locales?.[language] || rootData;
}

function getLabels() {
  return siteData.labels || {};
}

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

function renderText(selector, value) {
  const element = document.querySelector(selector);
  if (element) {
    element.textContent = value ?? "";
  }
}

function setSectionVisible(selector, isVisible) {
  const section = document.querySelector(selector);
  if (section) {
    section.hidden = !isVisible;
  }
}

function createLink(link) {
  if (isDisabledUrl(link.url)) {
    return "";
  }

  const target = isExternalUrl(link.url) ? ' target="_blank" rel="noreferrer"' : "";
  return `<a href="${escapeHtml(link.url)}"${target}>${escapeHtml(link.label)}</a>`;
}

function joinNonEmpty(values, separator) {
  return values.filter((value) => value !== undefined && value !== null && value !== "").join(separator);
}

function formatContactValue(value) {
  const text = String(value ?? "");

  if (/^https?:\/\//i.test(text)) {
    return `<a href="${escapeHtml(text)}" target="_blank" rel="noreferrer">${escapeHtml(text)}</a>`;
  }

  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text)) {
    return `<a href="mailto:${escapeHtml(text)}">${escapeHtml(text)}</a>`;
  }

  return escapeHtml(text);
}

function renderLanguageSwitcher() {
  const container = document.querySelector("#language-switcher");
  const languages = rootData.languages || [];

  if (!container || !languages.length) {
    return;
  }

  container.innerHTML = languages
    .map(
      (language) => `
        <button class="language-switcher__button${language.code === activeLanguage ? " is-active" : ""}" type="button" data-language="${escapeHtml(language.code)}" aria-pressed="${language.code === activeLanguage}">
          ${escapeHtml(language.label)}
        </button>
      `
    )
    .join("");

  container.querySelectorAll("[data-language]").forEach((button) => {
    button.addEventListener("click", () => {
      const nextLanguage = button.getAttribute("data-language");
      if (!nextLanguage || nextLanguage === activeLanguage) {
        return;
      }

      activeLanguage = nextLanguage;
      siteData = getLocalizedData(activeLanguage);
      renderAll();
    });
  });
}

function renderLabels() {
  const labels = getLabels();

  document.documentElement.lang = activeLanguage === "zh-TW" ? "zh-Hant" : activeLanguage;
  renderText("#label-basic-info", labels.basicInfo || "Date of Birth:");
  renderText("#label-research-directions", labels.researchDirections || "Research Interests:");
  renderText("#section-title-education", labels.education || "Education");
  renderText("#section-title-publications", labels.publications || "Publications & Invention Patents");
  renderText("#section-title-projects", labels.projects || "Research Projects");
  renderText("#section-title-experience", labels.experience || "Relevant Experience");
  renderText("#section-title-honors", labels.honors || "Honors");
  renderText("#section-title-skills", labels.skills || "Technical Skills");
}

function renderMeta() {
  const meta = siteData.meta || {};
  const profile = siteData.profile || {};
  const title = meta.siteTitle || `${profile.name || "你的姓名"} | 学术简历`;
  const description = meta.description || "学术简历网站模板";

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

function renderHeader() {
  const profile = siteData.profile || {};

  renderText("#profile-name", profile.name);
  renderText("#basic-info", profile.basicInfo || "待填写");

  const researchDirections = Array.isArray(profile.researchDirections)
    ? profile.researchDirections.join(" / ")
    : profile.researchDirections;
  renderText("#research-directions", researchDirections || "待填写");

  const note = document.querySelector("#profile-note");
  if (note) {
    note.textContent = profile.note || "";
    note.hidden = !profile.note;
  }

  const links = document.querySelector("#profile-links");
  if (links) {
    const linkMarkup = (profile.links || []).map(createLink).filter(Boolean).join("");
    links.innerHTML = linkMarkup;
    links.hidden = !linkMarkup;
  }

  const headerContact = document.querySelector("#header-contact");
  if (headerContact) {
    const items = siteData.contact || [];
    const markup = items
      .map(
        (item) => `
          <div class="header-contact__item">
            <span class="header-contact__label">${escapeHtml(item.label)}：</span>
            <span class="header-contact__value">${formatContactValue(item.value)}</span>
          </div>
        `
      )
      .join("");
    headerContact.innerHTML = markup;
    headerContact.hidden = !markup;
  }

  const photoWrap = document.querySelector("#profile-photo-wrap");
  const photo = document.querySelector("#profile-photo");
  if (photoWrap && photo) {
    if (profile.photo) {
      photo.src = profile.photo;
      photo.alt = `${profile.name || "个人"}肖像`;
      photoWrap.hidden = false;
    } else {
      photoWrap.hidden = true;
    }
  }
}

function renderEducation() {
  const items = siteData.education || [];
  const container = document.querySelector("#education-list");

  if (!container) {
    return;
  }

  if (!items.length) {
    setSectionVisible("#education-section", false);
    return;
  }

  setSectionVisible("#education-section", true);
  container.innerHTML = items
    .map(
      (item) => `
        <article class="entry">
          <div class="entry__head">
            <span class="entry__bullet">◆</span>
            <span class="entry__period">${escapeHtml(item.period)}</span>
            <span class="entry__title">${escapeHtml(item.school)}</span>
            <span>${escapeHtml(item.major)}</span>
            <span class="entry__meta">${escapeHtml(item.degree)}</span>
          </div>
          ${item.note ? `<div class="entry__body"><p class="entry__note">${escapeHtml(item.note)}</p></div>` : ""}
        </article>
      `
    )
    .join("");
}

function renderProjects() {
  const items = siteData.projects || [];
  const container = document.querySelector("#projects-list");
  const labels = getLabels();

  if (!container) {
    return;
  }

  if (!items.length) {
    setSectionVisible("#projects-section", false);
    return;
  }

  setSectionVisible("#projects-section", true);
  container.innerHTML = items
    .map((item) => {
      const tags = item.tags?.length
        ? `
          <ul class="inline-list">
            ${item.tags.map((tag) => `<li>${escapeHtml(tag)}</li>`).join("")}
          </ul>
        `
        : "";

      const links = (item.links || []).map(createLink).filter(Boolean).join(" ");
      const linkBlock = links ? `<div class="entry__body"><p>${links}</p></div>` : "";

      return `
        <article class="entry">
          <div class="entry__head">
            <span class="entry__bullet">◆</span>
            <span class="entry__title">${escapeHtml(item.title)}</span>
            <span class="entry__meta">(${escapeHtml(item.type)})</span>
            <span class="entry__period">${escapeHtml(item.period)}</span>
          </div>
          <div class="entry__body">
            <p><strong>${escapeHtml(labels.role || "Role:")}</strong>${escapeHtml(item.role)}</p>
          </div>
          ${item.summary ? `<div class="entry__body"><p>${escapeHtml(item.summary)}</p></div>` : ""}
          ${tags}
          ${linkBlock}
        </article>
      `;
    })
    .join("");
}

function renderExperience() {
  const items = siteData.experience || [];
  const container = document.querySelector("#experience-list");

  if (!container) {
    return;
  }

  if (!items.length) {
    setSectionVisible("#experience-section", false);
    return;
  }

  setSectionVisible("#experience-section", true);
  container.innerHTML = items
    .map(
      (item) => `
        <article class="entry">
          <div class="entry__head">
            <span class="entry__bullet">◆</span>
            <span class="entry__title">${escapeHtml(item.organization)}</span>
            <span class="entry__meta">${escapeHtml(item.role)}</span>
            <span class="entry__period">${escapeHtml(item.period)}</span>
          </div>
        </article>
      `
    )
    .join("");
}

function renderPublications() {
  const papers = siteData.publications || [];
  const patents = siteData.patents || [];
  const container = document.querySelector("#publications-list");
  const labels = getLabels();

  if (!container) {
    return;
  }

  if (!papers.length && !patents.length) {
    setSectionVisible("#publications-section", false);
    return;
  }

  setSectionVisible("#publications-section", true);

  const paperMarkup = papers.length
    ? `
      ${patents.length ? `<h3 class="publication-group-title">${escapeHtml(labels.papers || "Publications")}</h3>` : ""}
      ${papers.map(renderPublicationItem).join("")}
    `
    : "";

  const patentMarkup = patents.length
    ? `
      ${papers.length ? `<h3 class="publication-group-title">${escapeHtml(labels.patents || "Invention Patents")}</h3>` : ""}
      ${patents.map(renderPatentItem).join("")}
    `
    : "";

  container.innerHTML = `${paperMarkup}${patentMarkup}`;
}

function renderPublicationItem(item, index) {
  if (item.text) {
    return `
      <article class="publication-item">
        <span class="publication-item__index">${escapeHtml(item.index || `[${index + 1}]`)}</span>
        <p class="publication-item__text">${escapeHtml(item.text)}</p>
      </article>
    `;
  }

  const title = joinNonEmpty([
    item.title,
    item.translation ? `（${item.translation}）` : "",
    item.documentType ? `[${item.documentType}]` : ""
  ], "");
  const source = joinNonEmpty([item.venue, item.year], ", ");
  const meta = joinNonEmpty([item.indexing, item.status], "；");

  return `
    <article class="publication-item">
      <span class="publication-item__index">${escapeHtml(item.index || `[${index + 1}]`)}</span>
      <p class="publication-item__text">
        ${item.authors ? `${escapeHtml(item.authors)}. ` : ""}
        ${escapeHtml(title)}.
        ${source ? `${escapeHtml(source)}. ` : ""}
        ${meta ? `${escapeHtml(meta)}. ` : ""}
        ${item.rank ? `<strong class="publication-item__rank">${escapeHtml(item.rank)}</strong>` : ""}
      </p>
    </article>
  `;
}

function renderPatentItem(item, index) {
  const labels = getLabels();
  const patentType = item.patentType || labels.patentType || "Invention Patent";
  const title = item.title ? `${item.title}[P]` : "专利名称待补充[P]";
  const number = item.number ? `${item.number}. ` : "";
  const status = item.status ? `${labels.patentStatus || "Status:"}${item.status}. ` : "";

  return `
    <article class="publication-item">
      <span class="publication-item__index">${escapeHtml(item.index || `[P${index + 1}]`)}</span>
      <p class="publication-item__text">
        ${escapeHtml(patentType)}：${escapeHtml(title)}.
        ${escapeHtml(number)}
        ${escapeHtml(status)}
        ${item.rank ? `<strong class="publication-item__rank">${escapeHtml(item.rank)}</strong>` : ""}
      </p>
    </article>
  `;
}

function renderHonors() {
  const items = siteData.honors || [];
  const container = document.querySelector("#honors-list");

  if (!container) {
    return;
  }

  if (!items.length) {
    setSectionVisible("#honors-section", false);
    return;
  }

  setSectionVisible("#honors-section", true);
  container.innerHTML = items
    .map(
      (item) => `
        <article class="honor-item">
          <span class="entry__bullet">◆</span>
          <p class="publication-item__text">
            <strong>${escapeHtml(item.title)}</strong>${item.meta ? `，${escapeHtml(item.meta)}` : ""}${item.note ? `，${escapeHtml(item.note)}` : ""}
          </p>
        </article>
      `
    )
    .join("");
}

function renderSkills() {
  const items = siteData.skills || [];
  const container = document.querySelector("#skills-list");

  if (!container) {
    return;
  }

  if (!items.length) {
    setSectionVisible("#skills-section", false);
    return;
  }

  setSectionVisible("#skills-section", true);
  container.innerHTML = items
    .map(
      (item) => `
        <article class="skill-item">
          <span class="entry__bullet">◆</span>
          <p class="publication-item__text">${escapeHtml(item)}</p>
        </article>
      `
    )
    .join("");
}

function renderAll() {
  renderMeta();
  renderLabels();
  renderLanguageSwitcher();
  renderHeader();
  renderEducation();
  renderPublications();
  renderProjects();
  renderHonors();
  renderSkills();
  renderExperience();
}

renderAll();
