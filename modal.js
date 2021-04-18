const openButton = document.querySelector(".button_open");
const closeButton = document.querySelector(".close");
const staticCard = document.querySelector(".container");
const modal = document.querySelector(".modal");
const pageContainer = document.getElementById("page-container");

// functions ------------------------------------------------

const openClose = () => {
  pageContainer.classList.toggle("blur");
  staticCard.classList.toggle("hidden");
  modal.classList.toggle("hidden");
};

openButton.addEventListener("click", openClose);
closeButton.addEventListener("click", openClose);
document.addEventListener("keydown", (event) =>
  event.key === "Escape" ? openClose() : -1
);
