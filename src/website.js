import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";

function createHeader() {
  const header = document.createElement("header");

  const mainTitle = document.createElement("p");
  mainTitle.textContent = "Maybe Food?";

  header.appendChild(mainTitle);
  header.appendChild(createNav());

  return header;
}

function createNav() {
  const nav = document.createElement("nav");

  const homeButton = document.createElement("button");
  homeButton.classList.add("buttonNav");
  homeButton.textContent = "Home";
  homeButton.addEventListener("click", (event) => {
    if (event.target.classList.contains("active")) return;
    setActiveButton(homeButton);
    loadHome();
  });

  const menuButton = document.createElement("button");
  menuButton.classList.add("buttonNav");
  menuButton.textContent = "Menu";
  menuButton.addEventListener("click", (event) => {
    if (event.target.classList.contains("active")) return;
    setActiveButton(menuButton);
    loadMenu();
  });

  const contactButton = document.createElement("button");
  contactButton.classList.add("buttonNav");
  contactButton.textContent = "Contact";
  contactButton.addEventListener("click", (event) => {
    if (event.target.classList.contains("active")) return;
    setActiveButton(contactButton);
    loadContact();
  });

  nav.appendChild(homeButton);
  nav.appendChild(menuButton);
  nav.appendChild(contactButton);

  return nav;
}

function setActiveButton(button) {
  const buttons = document.querySelectorAll(".buttonNav");

  buttons.forEach((button) => {
    if (button !== this) {
      button.classList.remove("active");
    }
  });
  button.classList.add("active");
}

function createMain() {
  const main = document.createElement("main");
  main.classList.add("main");
  main.setAttribute("id", "main");
  return main;
}

function createFooter() {
  const footer = document.createElement("footer");

  const headChef = document.createElement('a');
  const headChefText = document.createTextNode("Head Chef: scott-hall7 on GitHub")
  headChef.appendChild(headChefText);
  headChef.title = "Head Chef: scott-hall7 on GitHub";
  headChef.href = "https://github.com/scott-hall7";

  footer.appendChild(headChef);

  return footer;
}

function initalWebsite() {
  const content = document.getElementById("content");
  content.appendChild(createHeader());
  content.appendChild(createMain());
  content.appendChild(createFooter());

  setActiveButton(document.querySelector(".buttonNav"));
  loadHome();
}

export default initalWebsite;
