export default function createFooter() {
  const contentDiv = document.getElementById('content');
  const footerDiv = document.createElement('div');
  footerDiv.setAttribute('id', 'footer');
  contentDiv.appendChild(footerDiv);

  footerOptions();
  footerMe();
  footerText();
}

function footerMe() {
  const footerDiv = document.getElementById('footer');
  const footerMe = document.createElement('div');
  footerMe.setAttribute('id', 'footer-me');

  const footerCreated = document.createElement('div');
  footerCreated.setAttribute('id', 'footer-created');
  footerCreated.innerText = 'Created by preto-phil';
  footerMe.appendChild(footerCreated);

  const footerIcon = document.createElement('div');
  footerIcon.setAttribute('id', 'footer-icon');
  footerIcon.innerText = '';
  footerMe.appendChild(footerIcon);

  const footerBtn = document.createElement('button');
  footerBtn.setAttribute('id', 'footer-btn');
  footerIcon.appendChild(footerBtn);
  footerBtn.addEventListener('click', () => {
    window.open('https://github.com/preto-phil');
  });

  footerDiv.appendChild(footerMe);
}

function footerText() {
  const footerDiv = document.getElementById('footer');
  const footerText = document.createElement('div');
  footerText.setAttribute('id', 'footer-text');
  footerText.innerText = 'Some text to be added here';
  footerDiv.appendChild(footerText);
}

function footerOptions() {
  const footerDiv = document.getElementById('footer');
  const footerOptions = document.createElement('div');
  footerOptions.setAttribute('id', 'footer-options');
  footerOptions.innerText = 'Some other text to be added here';
  footerDiv.appendChild(footerOptions);
}