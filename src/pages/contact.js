function createContactItem(text, url, icon) {
    const a = document.createElement("a");
    a.className = "contact-item";
    a.href = url;
    a.target = "_blank";
    a.rel = "noopener";

    const img = document.createElement("img");
    img.src = icon;
    img.alt = text;

    const span = document.createElement("span");
    span.textContent = text;

    a.append(img, span);

    return a;
}

export function Contact() {
    const container = document.createElement("section");
    container.classList.add("contact-container", "general-container");
    container.id = "contact";

    const title = document.createElement("h1");
    title.className = "contact-title";
    title.classList.add("section-title");
    title.textContent = "Contato";

    const list = document.createElement("div");
    list.className = "contact-list";
    list.append(
        createContactItem(
            "GitHub",
            "https://github.com/davideveryday",
            "/github-mark.svg"
        ),

        createContactItem(
            "LinkedIn",
            "https://linkedin.com/in/david-castro-dev",
            "/linkedin.svg"
        ),

        createContactItem(
            "Email",
            "mailto:david.castrodc033@gmail.com",
            "/mail.svg"
        )
    );

    container.append(title, list);

    return container;
}