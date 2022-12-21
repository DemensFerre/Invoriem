$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    margin: 48,
    dots: false,
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

playVideo();
scrollTo();
