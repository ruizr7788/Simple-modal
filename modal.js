const openButton = document.querySelector(".button_open");
const closeButton = document.querySelector(".close");
const staticCard = document.querySelector(".container");
const modal = document.querySelector(".modal");
const pageContainer = document.getElementById("page-container");

// functions ------------------------------------------------

const openModal = function () {
  pageContainer.classList.add("blur");
  staticCard.classList.add("hidden");
  modal.classList.remove("hidden");
};

const closeModal = function () {
  pageContainer.classList.remove("blur");
  staticCard.classList.remove("hidden");
  modal.classList.add("hidden");
};

openButton.addEventListener("click", openModal);
closeButton.addEventListener("click", closeModal);
document.addEventListener("keydown", (event) =>
  event.key === "Escape" ? closeModal() : -1
);
