let videos = [
  "videos/video1.mp4",
  "videos/video2.mp4",
  "videos/video3.mp4"
];

let index = 0;

function nextVideo() {
  index = (index + 1) % videos.length;
let startY = 0;

document.addEventListener("touchstart", function(e) {
  startY = e.touches[0].clientY;
});

document.addEventListener("touchend", function(e) {
  let endY = e.changedTouches[0].clientY;

  if (startY - endY > 50) {
    nextVideo(); // swipe up
  }

  if (endY - startY > 50) {
    nextVideo(); // swipe down (optional)
  }
});
  document.getElementById("videoPlayer").src = videos[index];
}
