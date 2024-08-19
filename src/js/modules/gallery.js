function showImages() {
    const btnSeeMore = document.getElementById('btnSeeMore');
    const cardsGallery = document.querySelectorAll('.gallery__item');

    btnSeeMore.addEventListener('click', function() {

        for (let card of cardsGallery) {
            card.style.display = 'block'
        }

    });

}

export default showImages;
