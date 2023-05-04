import { hideHome } from "./home";
import { hideMenu } from "./menu"; 

export default function createHeader() {
  const contentDiv = document.getElementById('content');
  const headerDiv = document.createElement('div');
  headerDiv.setAttribute('id', 'header');
  contentDiv.appendChild(headerDiv);

  headerSign();
  headerName();
  headerMenu();
  headerAbout();
  headerContact();
}

function headerSign() {
  const headerDiv = document.getElementById('header');
  const headerSign = document.createElement('div');
  headerSign.setAttribute('id', 'header-sign');
  headerDiv.appendChild(headerSign);

  const signBtn = document.createElement('button');
  signBtn.setAttribute('id', 'sign-btn');
  signBtn.innerText = 'Logo';

  signBtn.addEventListener('click', () => {
    const homeDiv = document.getElementById('home');
    // set all other bodies display to none
    hideMenu();
    homeDiv.style.display = 'grid';
  });

  headerSign.appendChild(signBtn);

  // Add event listener - if click hide home body (display = none) and toggle menu

}

function headerName() {
  const headerDiv = document.getElementById('header');
  const headerName = document.createElement('div');
  headerName.setAttribute('id', 'header-name');
  headerDiv.appendChild(headerName);

  const nameBtn = document.createElement('button');
  nameBtn.setAttribute('id', 'name-btn');
  nameBtn.innerText = "The Three Broomsticks"
  headerName.appendChild(nameBtn);

  nameBtn.addEventListener('click', () => {
    const homeDiv = document.getElementById('home');
    // set all other bodies display to none
    hideMenu();
    homeDiv.style.display = 'grid';
  });
}

function headerMenu() {
  const headerDiv = document.getElementById('header');
  const headerMenu = document.createElement('div');
  headerMenu.setAttribute('id', 'header-menu');
  headerDiv.appendChild(headerMenu);

  const menuBtn = document.createElement('button');
  menuBtn.setAttribute('id', 'menu-btn');
  menuBtn.innerText = "Menu"

  menuBtn.addEventListener('click', () => {
    const homeDiv = document.getElementById('home');
    const menuDiv = document.getElementById('menu');
    // Home and all other bodies display to none
    hideHome();
    // Set menu display to grid
    menuDiv.style.display = 'grid';
  });

  headerMenu.appendChild(menuBtn);
}

function headerAbout() {
  const headerDiv = document.getElementById('header');
  const headerAbout = document.createElement('div');
  headerAbout.setAttribute('id', 'header-about');
  headerDiv.appendChild(headerAbout);

  const aboutBtn = document.createElement('button');
  aboutBtn.setAttribute('id', 'about-btn');
  aboutBtn.innerText = "About"

  aboutBtn.addEventListener('click', () => {
    const homeDiv = document.getElementById('home');
    // Home and all other bodies display to none
    homeDiv.style.display = 'none';
    // Set about display to grid
  });

  headerAbout.appendChild(aboutBtn);
}

function headerContact() {
  const headerDiv = document.getElementById('header');
  const headerContact = document.createElement('div');
  headerContact.setAttribute('id', 'header-contact');
  headerDiv.appendChild(headerContact)

  const contactBtn = document.createElement('button');
  contactBtn.setAttribute('id', 'contact-btn');
  contactBtn.innerText = "Contact"

  contactBtn.addEventListener('click', () => {
    const homeDiv = document.getElementById('home');
    // Home and all other bodies display to none
    homeDiv.style.display = 'none';
    // Set contact display to grid
  });

  headerContact.appendChild(contactBtn);
}