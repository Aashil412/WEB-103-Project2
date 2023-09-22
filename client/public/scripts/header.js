const header = document.querySelector("header");

const headerContainer = document.createElement("div");
headerContainer.className = "header-container";

const headerLeft = document.createElement("div");
headerLeft.className = "header-left";

const headerLogo = document.createElement("img");
headerLogo.src = "/WEB103LOGO.png";

const headerTitle = document.createElement("h1");
headerTitle.textContent = "Creators";

headerLeft.appendChild(headerLogo);
headerLeft.appendChild(headerTitle);

const headerButton = document.createElement("Home");
headerButton.textContent = "Home";

headerButton.addEventListener("click", (event) => {
  window.location = "/";
});

const headerRight = document.createElement("div");
headerRight.className = "header-right";

headerRight.appendChild(headerButton);

headerContainer.appendChild(headerLeft);
headerContainer.appendChild(headerRight);

header.appendChild(headerContainer);
