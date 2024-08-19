import initModal from "./modules/modal.js";
import mobileNav from "./modules/mobile-nav.js";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import showImages from "./modules/gallery.js";
import sliderReviews from "./modules/reviews-slider.js";
import initModalReview from "./modules/modal-review.js";
import initFooterMenuAccordion from "./modules/accordion.js";

initModal();
mobileNav();
Fancybox.bind("[data-fancybox]", {});
showImages();
sliderReviews();
initModalReview();
initFooterMenuAccordion();


