import iguana from "/assets/iguana.jpg";
import githubsvg from "/assets/github-mark.svg";
import demosvg from "/assets/demo.svg";


export function Projects() {
    const projectsContainer = document.createElement("div");
    projectsContainer.classList.add("projects-container");
    const card = createCard("ddavid", iguana, "bagui doido mermao", "javascrept", "github", "linkedi");

    projectsContainer.appendChild(card);

    return projectsContainer;
}

function createCard(name, image, description, tools, github, demo) {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
    <img src="${image}" alt="${name}">
    
    <div class="card-info">
      <h3>${name}</h3>
      <p>${description}</p>
      <p><b>Tools:</b> ${tools}</p>

      <div class="project-links-div">
        <a href="${github}" target="_blank" class="github-nav link-btn">
          Source Code<br>
          <img src="${githubsvg}">
        </a>

        <a href="${demo}" target="_blank" class="live-nav link-btn">
          Demo
          <img src="${demosvg}">
        </a>
      </div>
    </div>
  `;

    return card;
}