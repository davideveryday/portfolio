export default class ThemeHandler {
    #rootElement;
    #currentTheme;

    constructor(rootElement) {
        this.#rootElement = rootElement;
        this.loadThemeFromLocalStorage();
        if (this.#currentTheme !== null) this.#currentTheme = this.#rootElement.getAttribute("data-bs-theme");
    }

    loadThemeFromLocalStorage() {
        const localTheme = localStorage.getItem("theme");
        this.#currentTheme === "light" ? this.select("dark") : this.select("light");
        if (localTheme === "light" || localTheme === "dark") {
            this.#currentTheme = localTheme;
        } else {
            this.#currentTheme = null;
        }
    }

    saveThemeInLocalStorage(theme) {
        const regex = /^(dark|light)$/;
        if (regex.test(theme)) {
            localStorage.setItem("theme", theme);
        }
    }

    select(theme) {
        this.#currentTheme = theme;
        this.#rootElement.setAttribute("data-bs-theme", theme);
        this.saveThemeInLocalStorage(theme);
    }

    toggleTheme() {
        this.#currentTheme === "light" ? this.select("dark") : this.select("light");
        console.log(this.#currentTheme);
    }
}