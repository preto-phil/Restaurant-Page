export default function createHeader() {
  const contentDiv = document.getElementById('content');
  const headerDiv = document.createElement('div');
  headerDiv.classList.add('header');

  headerSign();
  headerName();
  headerMenu();
  headerAbout();
  headerContact();

  contentDiv.appendChild(headerDiv)
}

function headerSign() {
  const headerDiv = document.getElementsByClassName('header');
  const headerSign = document.createElement('div');
  headerSign.classList.add('header-sign');
  headerDiv.appendChild(headerSign);

  const signBtn = document.createElement('button');
  signBtn.classList.add('sign-btn');
  headerSign.appendChild(signBtn);
}

function headerName() {
  const headerDiv = document.getElementsByClassName('header');
  const headerName = document.createElement('div');
  headerName.classList.add('header-name');
  headerDiv.appendChild(headerName);

  const nameBtn = document.createElement('button');
  nameBtn.classList.add('name-btn');
  nameBtn.innerText = "The Three Broomsticks"
  headerName.appendChild(nameBtn);
}

function headerMenu() {
  const headerDiv = document.getElementsByClassName('header');
  const headerMenu = document.createElement('div');
  headerMenu.classList.add('header-menu');
  headerDiv.appendChild(headerMenu)


}

function headerAbout() {
  const headerDiv = document.getElementsByClassName('header');
  const headerAbout = document.createElement('div');
  headerAbout.classList.add('header-about');
  headerDiv.appendChild(headerAbout)


}

function headerContact() {
  const headerDiv = document.getElementsByClassName('header');
  const headerContact = document.createElement('div');
  headerContact.classList.add('header-contact');
  headerDiv.appendChild(headerContact)


}