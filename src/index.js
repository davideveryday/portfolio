import "./style/styles.css";
import ThemeHandler from "./ThemeHandler";

const content = document.getElementById("content");
const body = document.getElementsByTagName("body")[0];

const th = new ThemeHandler(body);