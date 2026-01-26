import "./style/styles.css";
import ThemeHandler from "./ThemeHandler";
import { MainBody } from "./pages/main";
import { About } from "./pages/about";

const content = document.getElementById("content");
const body = document.getElementsByTagName("body")[0];
const themeBtn = document.getElementById("theme");

const themeHandler = new ThemeHandler(body);

themeBtn.addEventListener("click", () => themeHandler.toggle());

content.appendChild(MainBody());
content.appendChild(About());

