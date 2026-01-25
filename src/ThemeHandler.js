export default class ThemeHandler {
    #rootElement;
    #currentTheme;

    constructor(rootElement) {
        this.#rootElement = rootElement;
        this.#loadThemeFromLocalStorage();
        if (this.#currentTheme === null) this.#select(this.#rootElement.getAttribute("data-bs-theme"));
    }

    #loadThemeFromLocalStorage() {
        const regex = /^(dark|light)$/;
        const localTheme = localStorage.getItem("theme");
        if (regex.test(localTheme)) {
            localTheme === null ? this.#currentTheme = null : this.#select(localTheme);
        }
    }

    #saveThemeInLocalStorage(theme) {
        localStorage.setItem("theme", theme);
    }

    #select(theme) {
        this.#currentTheme = theme;
        this.#rootElement.setAttribute("data-bs-theme", theme);
        this.#saveThemeInLocalStorage(theme);
    }

    toggleTheme() {
        this.#currentTheme === "light" ? this.#select("dark") : this.#select("light");
    }
}