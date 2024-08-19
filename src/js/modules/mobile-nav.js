function mobileNav() {
    const btnOpenMobileNav = document.getElementById("btnOpenMobileNav");
    const mobileNavOverlay = document.getElementById("mobileOverlay");
    
    btnOpenMobileNav.addEventListener("click", () => {
      mobileNavOverlay.showModal();
      document.body.classList.add("no-scroll");
    });
    
    document.addEventListener("DOMContentLoaded", function() {
      const mobileOverlayLink = document.querySelectorAll(".mobile-overlay__menu-link");
      const mobileOverlayButton = document.querySelector(".mobile-overlay__button");
    
      mobileOverlayLink.forEach(function(item) {
        item.addEventListener("click", function() {
          mobileNavOverlay.close();
          document.body.classList.remove("no-scroll");
        });
      });
    
      mobileOverlayButton.addEventListener("click", function() {
          mobileNavOverlay.close();
          document.body.classList.remove("no-scroll");
        });
    });
}

export default mobileNav;
