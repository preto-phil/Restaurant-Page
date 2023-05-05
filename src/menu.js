export default function createMenu() {
  const contentDiv = document.getElementById('content');
  const menuDiv = document.createElement('div');
  menuDiv.setAttribute('id', 'menu');
  menuDiv.style.display = 'none';
  contentDiv.appendChild(menuDiv);

  menuHeader();
  menuContent();
}

function menuHeader() {
  const menuDiv = document.getElementById('menu');
  const menuHeader = document.createElement('div');
  menuHeader.setAttribute('id', 'menu-header');
  menuHeader.innerText = "MENU";
  menuDiv.appendChild(menuHeader);
}


function menuContent() {
  const menuDiv = document.getElementById('menu');
  const menuContent = document.createElement('div');
  menuContent.setAttribute('id', 'menu-content');
  menuDiv.appendChild(menuContent);

  menuBreakfast();
  menuLightMeals();
  menuMains();
  menuDesserts();
  menuDrinks();
}

function menuBreakfast() {
  const menuContent = document.getElementById('menu-content');
  const breakfast = document.createElement('div');
  breakfast.setAttribute('id', 'menu-breakfast');
  breakfast.innerText = "Breakfast";
  menuContent.appendChild(breakfast);
}

function menuLightMeals() {
  const menuContent = document.getElementById('menu-content');
  const lightMeals = document.createElement('div');
  lightMeals.setAttribute('id', 'menu-light-meals');
  lightMeals.innerText = "Light Meals";
  menuContent.appendChild(lightMeals);
}

function menuMains() {
  const menuContent = document.getElementById('menu-content');
  const mainCourses = document.createElement('div');
  mainCourses.setAttribute('id', 'menu-mains');
  mainCourses.innerText = "Main Courses";
  menuContent.appendChild(mainCourses);
}

function menuDesserts() {
  const menuContent = document.getElementById('menu-content');
  const desserts = document.createElement('div');
  desserts.setAttribute('id', 'menu-desserts');
  desserts.innerText = "Desserts";
  menuContent.appendChild(desserts);
}

function menuDrinks() {
  const menuContent = document.getElementById('menu-content');
  const drinks = document.createElement('div');
  drinks.setAttribute('id', 'menu-drinks');
  drinks.innerText = "Drinks";
  menuContent.appendChild(drinks);
}

export function hideMenu() {
  const menuDiv = document.getElementById('menu');
  menuDiv.style.display = 'none';
}