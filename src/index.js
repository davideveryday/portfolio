import "./style/styles.css";
import ThemeHandler from "./ThemeHandler";
import { MainBody } from "./pages/main";

const content = document.getElementById("content");
const body = document.getElementsByTagName("body")[0];

const th = new ThemeHandler(body);
content.appendChild(MainBody());