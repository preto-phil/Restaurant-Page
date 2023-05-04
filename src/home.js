// Import page for each different menu

export default function createHomePage() {
  const contentDiv = document.getElementById('content');
  const homeDiv = document.createElement('div');
  homeDiv.setAttribute('id', 'home');
  contentDiv.appendChild(homeDiv);

  topHomePage();
  leftHomePage();
  rightHomePage();
}

function topHomePage() {
  const homeDiv = document.getElementById('home');
  const homeTop = document.createElement('div');
  homeTop.setAttribute('id', 'home-top');
  homeTop.innerText = 'Welcome To The Three Broomsticks';
  homeDiv.appendChild(homeTop);
}

function leftHomePage() {
  const homeDiv = document.getElementById('home');
  const homeLeft = document.createElement('div');
  homeLeft.setAttribute('id', 'home-left');
  homeLeft.innerText = 'Home of the Finest Butterbeer!';
  homeDiv.appendChild(homeLeft);
}

function rightHomePage() {
  const homeDiv = document.getElementById('home');
  const homeRight = document.createElement('div');
  homeRight.setAttribute('id', 'home-right');
  homeRight.innerText = 'Student Specials';
  homeDiv.appendChild(homeRight);
}

export function hideHome() {
  const homeDiv = document.getElementById('home');
  homeDiv.style.display = 'none';
}