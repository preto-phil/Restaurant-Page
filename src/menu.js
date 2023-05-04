export default function createMenu() {
  const contentDiv = document.getElementById('content');
  const menuDiv = document.createElement('div');
  menuDiv.setAttribute('id', 'menu');
  menuDiv.style.display = 'none';
  contentDiv.appendChild(menuDiv);

  menuHeader();
  menuBreakfast();
  menuLightMeals();
  menuMains();
  menuDesserts();
  menuDrinks();

}

function menuHeader() {
  const menuDiv = document.getElementById('menu');
  const menuHeader = document.createElement('div');
  menuHeader.setAttribute('id', 'menu-header');
  menuHeader.innerText = "MENU";
  menuDiv.appendChild(menuHeader);
}


function menuBreakfast() {
  const menuDiv = document.getElementById('menu');
  const breakfast = document.createElement('div');
  breakfast.setAttribute('id', 'menu-breakfast');
  breakfast.innerText = "Breakfast";
  menuDiv.appendChild(breakfast);
}

function menuLightMeals() {
  const menuDiv = document.getElementById('menu');
  const lightMeals = document.createElement('div');
  lightMeals.setAttribute('id', 'menu-light-meals');
  lightMeals.innerText = "Light Meals";
  menuDiv.appendChild(lightMeals);
}

function menuMains() {
  const menuDiv = document.getElementById('menu');
  const mainCourses = document.createElement('div');
  mainCourses.setAttribute('id', 'menu-mains');
  mainCourses.innerText = "Main Courses";
  menuDiv.appendChild(mainCourses);
}

function menuDesserts() {
  const menuDiv = document.getElementById('menu');
  const desserts = document.createElement('div');
  desserts.setAttribute('id', 'menu-desserts');
  desserts.innerText = "Desserts";
  menuDiv.appendChild(desserts);
}

function menuDrinks() {
  const menuDiv = document.getElementById('menu');
  const drinks = document.createElement('div');
  drinks.setAttribute('id', 'menu-drinks');
  drinks.innerText = "Drinks";
  menuDiv.appendChild(drinks);
}

export function hideMenu() {
  const menuDiv = document.getElementById('menu');
  menuDiv.style.display = 'none';
}