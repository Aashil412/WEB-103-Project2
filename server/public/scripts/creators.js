const routes = ["/", "/creators", /^\/creators\/\d+$/];
const curr = window.location.pathname;
const renderCareers = async () => {
  const response = await fetch("/creators");
  const data = await response.json();
  const mainContent = document.getElementById("main-content");
  if (data) {
    data.map((career) => {
      const card = document.createElement("article");
      card.classList.add("card");
      const topContainer = document.createElement("div");
      topContainer.classList.add("top-container");
      const bottomContainer = document.createElement("div");
      bottomContainer.classList.add("bottom-container");
      topContainer.style.backgroundImage = `url(${career.image})`;
      const name = document.createElement("h3");
      name.textContent = career.name;
      bottomContainer.appendChild(name);
      const pricePoint = document.createElement("p");
      pricePoint.textContent = "Price: " + career.pricePoint;
      bottomContainer.appendChild(pricePoint);
      const audience = document.createElement("p");
      audience.textContent = "Great For: " + career.audience;
      bottomContainer.appendChild(audience);
      const link = document.createElement("a");
      link.textContent = "Learn More";
      link.setAttribute("role", "button");
      link.href = `/creators/${career.id}`;
      bottomContainer.appendChild(link);

      card.appendChild(topContainer);
      card.appendChild(bottomContainer);
      mainContent.appendChild(card);
    });
  } else {
    const message = document.createElement("h2");
    message.textContent = "No Careers Available 😞";
    mainContent.appendChild(message);
  }
};
const renderCareer = async () => {
  const requestedID = parseInt(window.location.href.split("/").pop());
  const response = await fetch("/creators");
  const data = await response.json();
  const giftContent = document.getElementById("gift-content");
  let career;
  career = data.find((c) => c.id === requestedID);
  if (career) {
    document.getElementById("image").src = career.image;
    document.getElementById("name").textContent = career.name;
    document.getElementById("submittedBy").textContent =
      "Submitted by: " + career.submittedBy;
    document.getElementById("pricePoint").textContent =
      "Price Point: " + career.pricePoint;
    document.getElementById("audience").textContent =
      "Great For: " + career.audience;
    document.getElementById("description").textContent = career.description;
    document.title = `Creative - ${career.name}`;
  } else {
    const message = document.createElement("h2");
    document.getElementById("image").src =
      "https://media.istockphoto.com/id/1299140151/vector/404-error-page-not-found-template-with-dead-file.jpg?s=612x612&w=0&k=20&c=aiqJjuQ3_8FTOwFMcYsZW-c1ixCZeZt76-Q6nxMucw0=";
  }
};

const isRoute = routes.some((route) => {
  if (typeof route === "string") {
    return route === curr;
  } else if (route instanceof RegExp) {
    return route.test(curr);
  }
});

if (!isRoute) {
  window.location.href = "/404.html";
}
if (curr === routes[0]) {
  renderCareers();
} else {
  renderCareer();
}
