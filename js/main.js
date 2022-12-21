$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    margin: 48,
    dots: false,
  });
});

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
