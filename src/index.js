import createHeader from "./header";
import createHomePage from "./home";
import createMenu from "./menu";
import createAbout from "./about";
import createContact from "./contact";
import createFooter from "./footer";
import './style.css';

function createPage() {
  createHeader();
  createHomePage();
  createMenu();
  createAbout();
  createContact();
  createFooter();
}

createPage();