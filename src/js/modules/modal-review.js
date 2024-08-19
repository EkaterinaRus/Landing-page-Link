function initModalReview() {
  const showMoreButtons = document.querySelectorAll(".reviews-card__link");
  const modalReview = document.getElementById("modalReview");
  const modalContent = modalReview.querySelector(".modal-review__contant");

  function openModal() {
    modalReview.style.position = "fixed";
    modalReview.style.top = "50%";
    modalReview.style.left = "50%";
    modalReview.style.transform = "translate(-50%, -50%)";

    modalReview.showModal();
    document.body.classList.add("no-scroll");
  }

  function returnScroll() {
    document.body.classList.remove("no-scroll");
  }

  function closeModal() {
    modalReview.close();
    returnScroll();
  }

  function closeOnOverlayClick({ currentTarget, target }) {
    const modal = currentTarget;
    const isOnOverlayClick = target === modal;
    if (isOnOverlayClick) {
      closeModal();
    }
  }

  showMoreButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();

      const reviewCard = button.closest(".reviews__slider-item");

      const reviewHeader = reviewCard.querySelector(".reviews-card__header").innerHTML;
      const reviewBody = reviewCard.querySelector(".reviews-card__body").innerHTML;

      modalContent.querySelector(".reviews-card__header").innerHTML = reviewHeader;
      modalContent.querySelector(".reviews-card__body").innerHTML = reviewBody;

      const modalBody = modalContent.querySelector(".reviews-card__body");
      modalBody.style.webkitLineClamp = "unset";
      modalBody.style.maxHeight = "none";
      modalBody.style.overflow = "visible";

      openModal();
    });
  });

  btnCloseModalReview.addEventListener("click", closeModal);
  btnCloseModalReviewMobile.addEventListener("click", closeModal);
  modalReview.addEventListener("cancel", returnScroll);
  modalReview.addEventListener("click", closeOnOverlayClick);
}

export default initModalReview;
