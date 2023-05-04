function changeTheme(event){
    document.body.classList.toggle("dark-theme");
    // const label = document.getElementById("theme-label");
    const icon = document.querySelector(".changeTheme-icon");
    icon.classList.toggle("fa-circle-half-stroke");
    icon.classList.toggle("fa-sun");
}


var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    injectStyles: [`
    :root {
        --swiper-pagination-bottom: auto;
        --swiper-pagination-top: 8px;
    }
      `],
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });