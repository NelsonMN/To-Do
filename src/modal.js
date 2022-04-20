const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");

openModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const form = document.querySelector(button.dataset.modalTarget);
    openForm(form);
  });
});

closeModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const form = button.closest(".form");
    closeForm(form);
  });
});

function openForm(form) {
  if (form == null) return;
  form.classList.add("active");
  overlay.classList.add("active");
}

function closeForm(form) {
  if (form == null) return;
  form.classList.remove("active");
  overlay.classList.remove("active");
}

export { openForm, closeForm };
