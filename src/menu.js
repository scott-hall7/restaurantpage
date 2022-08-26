function createMenu() {
  const menu = document.createElement("div");
  menu.classList.add("menu");

  const menuTitle = document.createElement("h3");
  menuTitle.textContent = "Our Very Real Menu of Foods";

  menu.appendChild(menuTitle);
  menu.appendChild(egg());
  menu.appendChild(bacon());
  menu.appendChild(waffle());
  menu.appendChild(pineapple());

  return menu;
}

function egg() {
  const egg = document.createElement("div");
  egg.classList.add("menuItem");

  const eggTitle = document.createElement("h4");
  eggTitle.textContent = "Hardboiled Egg";

  const eggDescription = document.createElement("p");
  eggDescription.textContent =
    "Just a plain-old hardboiled egg. Emphasis on hard. Very real!";

  const eggImage = document.createElement("img");
  eggImage.src = "images/egg.jpeg";
  eggImage.alt = "just an egg";

  egg.appendChild(eggTitle);
  egg.appendChild(eggDescription);
  egg.appendChild(eggImage);

  return egg;
}

function bacon() {
  const bacon = document.createElement("div");
  bacon.classList.add("menuItem");

  const baconTitle = document.createElement("h4");
  baconTitle.textContent = "Bacon";

  const baconDescription = document.createElement("p");
  baconDescription.textContent =
    "We only cook our bacon extra crispy, so expect a crunch.";

  const baconImage = document.createElement("img");
  baconImage.src = "images/bacon.jpeg";
  baconImage.alt = "just bacon";

  bacon.appendChild(baconTitle);
  bacon.appendChild(baconDescription);
  bacon.appendChild(baconImage);

  return bacon;
}

function waffle() {
  const waffle = document.createElement("div");
  waffle.classList.add("menuItem");

  const waffleTitle = document.createElement("h4");
  waffleTitle.textContent = "Waffle";

  const waffleDescription = document.createElement("p");
  waffleDescription.textContent =
    "Our waffles are also really hard, we struggle to cook soft things.";

  const waffleImage = document.createElement("img");
  waffleImage.src = "images/waffle.jpeg";
  waffleImage.alt = "A waffle";

  waffle.appendChild(waffleTitle);
  waffle.appendChild(waffleDescription);
  waffle.appendChild(waffleImage);

  return waffle;
}

function pineapple() {
  const pineapple = document.createElement("div");
  pineapple.classList.add("menuItem");

  const pineappleTitle = document.createElement("h4");
  pineappleTitle.textContent = "Pineapple";

  const pineappleDescription = document.createElement("p");
  pineappleDescription.textContent = "The softest thing on the menu.";

  const pineappleImage = document.createElement("img");
  pineappleImage.src = "images/pineapple.jpeg";
  pineappleImage.alt = "Pineapple";

  pineapple.appendChild(pineappleTitle);
  pineapple.appendChild(pineappleDescription);
  pineapple.appendChild(pineappleImage);

  return pineapple;
}

function loadMenu() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createMenu());
}

export default loadMenu;
