export default function createContact() {
  const contentDiv = document.getElementById('content');
  const contactDiv = document.createElement('div');
  contactDiv.setAttribute('id', 'contact');
  contactDiv.style.display = 'none';
  contentDiv.appendChild(contactDiv);

  contactHeader();
  contactBody();
}

function contactHeader() {
  const contactDiv = document.getElementById('contact');
  const contactHeader = document.createElement('div');
  contactHeader.setAttribute('id', 'contact-header');
  contactHeader.innerText = "CONTACT";
  contactDiv.appendChild(contactHeader);
}


function contactBody() {
  const contactDiv = document.getElementById('contact');
  const contactBody = document.createElement('div');
  contactBody.setAttribute('id', 'contact-body');
  contactDiv.appendChild(contactBody);

  contactContent();
}

function contactContent() {
  const contactBody = document.getElementById('contact-body');
  const contactContent = document.createElement('div');
  contactContent.setAttribute('id', 'contact-content');
  contactBody.appendChild(contactContent);


  const contactContentHeader = document.createElement('div');
  contactContentHeader.setAttribute('id', 'contact-content-header');
  contactContentHeader.innerText = "You Can Reach Us At The Following:";
  contactContent.appendChild(contactContentHeader);

  const contactContentP1 = document.createElement('div');
  contactContentP1.setAttribute('id', 'contact-content-P1');
  contactContentP1.innerText = "Contact number: +351 151 2352";
  contactContent.appendChild(contactContentP1);  

  const contactContentP2 = document.createElement('div');
  contactContentP2.setAttribute('id', 'contact-content-P2');
  contactContentP2.innerText = "Email: the3broomsticks@wizarding.com";
  contactContent.appendChild(contactContentP2);  

  const contactContentP3 = document.createElement('div');
  contactContentP3.setAttribute('id', 'contact-content-P3');
  contactContentP3.innerText = "Owl Address: 6 Aberwith Street, Hogsmeade, Scotland";
  contactContent.appendChild(contactContentP3);
}


export function hideContact() {
  const contactDiv = document.getElementById('contact');
  contactDiv.style.display = 'none';
}