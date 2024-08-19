function toggleAccordionOnScreenWidth() {
    const detailsElements = document.querySelectorAll(".footer__accordion");

    if (window.innerWidth > 768) {
        detailsElements.forEach(detail => {
            detail.setAttribute("open", "true");
            detail.addEventListener('click', preventDetailToggle);
        });
    } else {
        detailsElements.forEach(detail => {
            detail.removeAttribute("open");
            detail.removeEventListener('click', preventDetailToggle);
        });
    }
}

function preventDetailToggle(event) {
    if (event.target.closest('summary')) {
        event.preventDefault();
    }
}

function initFooterMenuAccordion() {
    toggleAccordionOnScreenWidth();
    window.addEventListener("resize", toggleAccordionOnScreenWidth);
}

export default initFooterMenuAccordion;
