export function Footer() {
    const footer = document.createElement("footer");
    footer.className = "footer";

    /* Nome */

    const name = document.createElement("span");
    name.className = "footer-name";
    name.textContent = "David ©";

    /* Links */

    const links = document.createElement("div");
    links.className = "footer-links";

    links.append(
        createFooterLink("Projetos", "#projects"),
        createFooterLink("Sobre", "#about"),
        createFooterLink("Contato", "#contact")
    );

    /* Copyright */

    const year = new Date().getFullYear();

    const copy = document.createElement("span");
    copy.className = "footer-copy";
    copy.textContent = `© ${year} Todos os direitos reservados`;

    footer.append(name, links, copy);

    return footer;
}

function createFooterLink(text, href) {
    const a = document.createElement("a");

    a.href = href;
    a.textContent = text;

    return a;
}