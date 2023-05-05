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
  const aboutContent = document.createElement('div');
  aboutContent.setAttribute('id', 'about-content');
  aboutBody.appendChild(aboutContent);


  const aboutContentHeader = document.createElement('div');
  aboutContentHeader.setAttribute('id', 'about-content-header');
  aboutContentHeader.innerText = "A brief history of the three broomsticks...";
  aboutContent.appendChild(aboutContentHeader);

  const aboutContentP1 = document.createElement('div');
  aboutContentP1.setAttribute('id', 'about-content-P1');
  aboutContentP1.innerText = "Established in 1452, the Three Broomsticks was located in Hogsmeade, an all-wizarding village in Scotland, and was alleged to be the village founder Hengist of Woodcroft's old home. It can be suggested that the village grew over time, as it was so near Hogwarts School of Witchcraft and Wizardry.";
  aboutContent.appendChild(aboutContentP1);  

  const aboutContentP2 = document.createElement('div');
  aboutContentP2.setAttribute('id', 'about-content-P2');
  aboutContentP2.innerText = "The Three Broomsticks Inn (established 1452) was a popular inn and pub in the all wizarding village of Hogsmeade, which was often frequented by students from the neighbouring Hogwarts School of Witchcraft and Wizardry. The inn was often warm, crowded, and a bit smoky, but clean and welcoming.";
  aboutContent.appendChild(aboutContentP2);  

  const aboutContentP3 = document.createElement('div');
  aboutContentP3.setAttribute('id', 'about-content-P3');
  aboutContentP3.innerText = "A mirror behind the bar reflected the cosy atmosphere, and popular drinks such as Butterbeer and Firewhisky were served in glasses and in foaming pewter tankards, as well as gillywater, Mulled Mead, red currant rum, and even cherry syrup and soda with ice and an umbrella. The Three Broomsticks was owned and operated by Madam Rosmerta.";
  aboutContent.appendChild(aboutContentP3);
}

export function hideAbout() {
  const aboutDiv = document.getElementById('about');
  aboutDiv.style.display = 'none';
}