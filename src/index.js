import createHeader from "./header";
import createHomePage from "./home";
import createMenu from "./menu";
import createFooter from "./footer";
import './style.css';

function createPage() {
  createHeader();
  createHomePage();
  createMenu();
  createFooter();
}

createPage();