function Presentation() {
    const title = `<h1 class="about-container-title">Sobre mim</h1>`;
    const p = `ai eu faço uns bagui de computador lá na UNICID tecotecoteco e papa pepipeipei formaçao 2025`;

    return [title, p];
}

function createTableHeaderFrom(content) {
    const row = document.createElement("tr");
    for (const title of content.keys()) {
        const th = document.createElement("th");
        th.appendChild(document.createTextNode(title));
        row.appendChild(th);
    }

    return row;
}

function createTableDataFrom(content) {
    const tbody = document.createElement("tbody");
    const data = Array.from(content.values());
    let longest = 0;

    for (const arr of data) arr.length > longest ? longest = arr.length : null;

    for (let i = 0; i < longest; i++) {
        const row = document.createElement("tr");
        for (const d of data) {
            const td = document.createElement("td");
            td.appendChild(document.createTextNode(d[i] ?? "#"));
            row.appendChild(td);
        }
        tbody.appendChild(row);
    }

    return tbody;
}

function InfoTable() {
    const content = new Map();
    content.set("skills", ["Java", "JavaScript", "HTML", "CSS", "PostgreSQL"]);
    content.set("tools", ["Git", "GitHub", "Webpack"]);
    content.set("os", ["Debian(Linux)", "Windows"]);

    const table = document.createElement("table");
    table.classList.add("about-container-table");
    table.appendChild(createTableHeaderFrom(content));
    table.appendChild(createTableDataFrom(content));

    return table;
}

export function About() {
    const aboutContainer = document.createElement("div");
    const aboutSection = document.createElement("div");
    const [title, p] = Presentation();
    aboutSection.classList.add("about-container-section");
    aboutContainer.classList.add("about-container");
    aboutContainer.classList.add("general-container");
    aboutContainer.setAttribute("id", "about");
    aboutContainer.innerHTML = title;

    aboutSection.appendChild(document.createTextNode(p));
    aboutSection.appendChild(InfoTable());
    aboutContainer.appendChild(aboutSection);

    return aboutContainer;
}