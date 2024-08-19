function initModal() {
  const btnOpenModal = document.querySelectorAll(".openModalLogin");
  const modal = document.getElementById("modalLogin");
  const btnCloseModal = document.getElementById("btnCloseModalLogin");

  function openModal() {
    modal.style.position = "fixed";
    modal.style.top = "50%";
    modal.style.left = "50%";
    modal.style.transform = "translate(-50%, -50%)";

    modal.showModal();
    document.body.classList.add("no-scroll");
  }

  function returnScroll() {
    document.body.classList.remove("no-scroll");
  }

  function closeModal() {
    modal.close();
    returnScroll();
  }

  function closeOnOverlayClick({ currentTarget, target }) {
    const modal = currentTarget;
    const isOnOverlayClick = target === modal;
    if (isOnOverlayClick) {
      closeModal();
    }
  }


  btnOpenModal.forEach((button) => {
    button.addEventListener("click", openModal);
  })
  btnCloseModal.addEventListener("click", closeModal);
  modal.addEventListener("cancel", returnScroll);
  modal.addEventListener("click", closeOnOverlayClick);

  let pwd = document.getElementById("password");
  let eye = document.getElementById("eye");

  eye.addEventListener("click", togglePass);

  function togglePass() {
    eye.classList.toggle("eye--checked");
    pwd.type == "password" ? (pwd.type = "text") : (pwd.type = "password");
  }
}

export default initModal;
