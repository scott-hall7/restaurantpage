function createHome() {
  const home = document.createElement("div");
  home.classList.add("home");

  const description = document.createElement("p");
  description.textContent =
    "We specialize in creating REAL, definitely real, food that tastes very good and natural. Come on in and try our REAL food for yourself.";

  const homeImage = document.createElement("img");
  homeImage.src = "images/homeImage.jpeg";
  homeImage.alt = "definitely a real burrito";

  home.appendChild(description);
  home.appendChild(homeImage);

  return home;
}

function loadHome() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createHome());
}

export default loadHome;
