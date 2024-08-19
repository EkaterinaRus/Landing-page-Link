function sliderReviews() {
  const reviews = document.querySelector(".reviews");
  const list = reviews.querySelector(".reviews__slider-list");
  const arrowBtns = reviews.querySelectorAll(".reviews__arrow-button");
  const paginationCurrent = reviews.querySelector(".reviews__pagination--current");
  const paginationTotal = reviews.querySelector(".reviews__pagination--total");

  const cardTotal = list.children.length; 
  paginationTotal.innerHTML = cardTotal; 

  let currentSlideIndex = 0;

  function getVisibleSlides() {
      const cardWidth = list.querySelector(".reviews__slider-item").offsetWidth;
      const listWidth = list.offsetWidth; 
      return Math.floor(listWidth / cardWidth);
  }

  let slidesVisible = getVisibleSlides(); 

  function updatePagination() {
      paginationCurrent.innerHTML = Math.min(currentSlideIndex + slidesVisible, cardTotal);
  }

  // Обработка нажатия на кнопки навигации
  arrowBtns.forEach(btn => {
      btn.addEventListener("click", () => {
          if (btn.id === "prev") {
              currentSlideIndex = Math.max(0, currentSlideIndex - slidesVisible);
              list.scrollLeft -= list.offsetWidth; 
          } else {
              currentSlideIndex = Math.min(cardTotal - slidesVisible, currentSlideIndex + slidesVisible);
              list.scrollLeft += list.offsetWidth; 
          }
          updatePagination(); 
      });
  });


  updatePagination();
}

export default sliderReviews;