export function Projects() {
  const container = document.createElement("div");
  container.classList.add("projects-container");
  container.classList.add("cards-container");

  loadProjects(container);
  return container;
}

async function loadProjects(container) {
  try {
    const res = await fetch("/data/projects.json");

    if (!res.ok) {
      throw new Error("Erro ao carregar JSON");
    }

    const projects = await res.json();

    projects.forEach(project => {
      const card = createCard(project);
      container.appendChild(card);
    });

  } catch (err) {
    console.error("Deu ruim:", err);
  }
}

function createCard({ name, image, description, tools, links }) {
  const card = document.createElement("div");
  card.className = "card";

  const img = document.createElement("img");
  img.src = image;
  img.alt = name;

  const info = document.createElement("div");
  info.className = "card-info";

  const title = document.createElement("h3");
  title.textContent = name;

  const desc = document.createElement("p");
  desc.textContent = description;

  const toolsEl = document.createElement("p");
  toolsEl.innerHTML = `<b>Tools:</b> ${tools}`;

  const linksDiv = document.createElement("div");
  linksDiv.className = "project-links-div";

  const github = createLink("Source", links[0], "/github-mark.svg");
  const demo = createLink("Demo", links[1], "/demo.svg");

  linksDiv.append(github, demo);
  info.append(title, desc, toolsEl, linksDiv);
  card.append(img, info);

  return card;
}

function createLink(text, url, icon) {
  const a = document.createElement("a");
  a.classList.add("link-btn");
  if (url) a.href = url;
  a.target = "_blank";
  a.rel = "noopener";

  const img = document.createElement("img");
  img.src = icon;

  a.textContent = text;
  a.appendChild(img);

  return a;
}