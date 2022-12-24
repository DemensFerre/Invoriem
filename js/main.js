$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    dots: false,
    responsive: {
      0: {
        items: 2,
        margin: 180,
      },
      600: {
        margin: 80,
      },

      701: {
        items: 2,
      },

      1301: {
        margin: 48,
        items: 3,
      },
    },
  });
});

const scrollTo = () => {
  const headerDown = document.querySelector(".header__down");
  const caseStudies = document.querySelector(".case-studies");

  headerDown.addEventListener("click", () => {
    window.scroll({
      left: 0,
      top: caseStudies.offsetTop,
      behavior: "smooth",
    });
  });
};

const playVideo = () => {
  const aboutVideo = document.querySelector(".about__video");
  const videoPlay = document.querySelector(".video__play");

  videoPlay.addEventListener("click", () => {
    aboutVideo.insertAdjacentHTML(
      "beforeend",
      `<video src="./img/video.mp4" class="video" controls loop autoplay></video>`
    );
  });
};

const openBurger = function () {
  const burger = document.querySelectorAll(".burger");
  const mobileMenu = document.querySelector(".mobile-menu");
  const page = document.querySelector(".page");

  burger.forEach((item) => {
    item.addEventListener("click", () => {
      mobileMenu.classList.toggle("mobile-menu_active");
      page.classList.toggle("page_active");
    });
  });
};

playVideo();
scrollTo();
openBurger();
