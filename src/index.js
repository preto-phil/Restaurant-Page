import createHeader from "./header";
import createHomePage from "./body";
import createFooter from "./footer";
import './style.css';

function createPage() {
  createHeader();
  createHomePage();
  createFooter();
}

createPage();