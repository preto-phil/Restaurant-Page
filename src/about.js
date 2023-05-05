export default function createAbout() {
  const contentDiv = document.getElementById('content');
  const aboutDiv = document.createElement('div');
  aboutDiv.setAttribute('id', 'about');
  aboutDiv.style.display = 'none';
  contentDiv.appendChild(aboutDiv);

  aboutHeader();
  aboutBody();
}

function aboutHeader() {
  const aboutDiv = document.getElementById('about');
  const aboutHeader = document.createElement('div');
  aboutHeader.setAttribute('id', 'about-header');
  aboutHeader.innerText = "ABOUT";
  aboutDiv.appendChild(aboutHeader);
}


function aboutBody() {
  const aboutDiv = document.getElementById('about');
  const aboutBody = document.createElement('div');
  aboutBody.setAttribute('id', 'about-body');
  aboutDiv.appendChild(aboutBody);

  aboutContent();
}

function aboutContent() {
  const aboutBody = document.getElementById('about-body');
  const aboutContentDiv = document.createElement('div');
  aboutContentDiv.setAttribute('id', 'about-content');
  aboutContentDiv.innerText = "A brief history of the three broomsticks...";
  aboutBody.appendChild(aboutContentDiv);
}

export function hideAbout() {
  const aboutDiv = document.getElementById('about');
  aboutDiv.style.display = 'none';
}