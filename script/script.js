const mq3 = window.matchMedia("(min-width: 769px)");
if (mq3.matches) {
  document
    .getElementById("imageModal")
    .addEventListener("mouseenter", function (event) {
      event.target.style.opacity = "0.6";
      document.getElementById("imageExpand").style.display = "block";
      document.getElementById("imageExpand").style.visibility = "visible";
      document.getElementById("imageExpand").style.opacity = "1";
    });
  document
    .getElementById("imageModal")
    .addEventListener("mouseout", function (event) {
      event.target.style.opacity = "unset";
      document.getElementById("imageExpand").style.display = "none";
    });

  document
    .getElementById("imageExpand")
    .addEventListener("mouseenter", function (event) {
      document.getElementById("imageModal").style.opacity = "0.6";
      document.getElementById("imageExpand").style.display = "block";
      document.getElementById("imageExpand").style.cursor = "pointer";
    });
}

function openModalFirst() {
  document.getElementById("modal").style.display = "block";
  document.body.classList.add("noscroll");
  document.getElementById("imageModal").src =
    "https://gmedia.playstation.com/is/image/SIEPDC/god-of-war-ragnarok-watermark-screenshot-01-en-08sep21?$1600px$";
}

function openModalSecond() {
  document.getElementById("modal").style.display = "block";
  document.body.classList.add("noscroll");
  document.getElementById("imageModal").src =
    "https://gmedia.playstation.com/is/image/SIEPDC/god-of-war-ragnarok-watermark-screenshot-12-en-08sep21?$1600px$";
}

function openModalThird() {
  document.getElementById("modal").style.display = "block";
  document.body.classList.add("noscroll");
  document.getElementById("imageModal").src =
    "https://gmedia.playstation.com/is/image/SIEPDC/god-of-war-ragnarok-watermark-screenshot-08-en-08sep21?$1600px$";
}

const mq4 = window.matchMedia("(min-width: 769px)");
if (mq4.matches) {
  function test2() {
    document.getElementById("imageModal").style.maxWidth = "unset";
    document.getElementById("imageModal").style.width = "unset";
    document.getElementById("imageModal").style.cursor = "unset";
    document.getElementById("closeButton1").style.display = "none";
    document.getElementById("closeButton2").style.display = "block";
    document.getElementById("imageExpand").style.display = "none";
    document.getElementById("imageModal").style.opacity = "unset";
    document
      .getElementById("imageModal")
      .addEventListener("mouseenter", function (event) {
        event.target.style.opacity = "unset";
        document.getElementById("imageExpand").style.display = "none";
      });
    document
      .getElementById("imageModal")
      .addEventListener("mouseout", function (event) {
        event.target.style.opacity = "unset";
      });
  }
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
  document.body.classList.remove("noscroll");
}

function closeModal2() {
  document.getElementsByClassName("image-enlarge-modal")[0].style.maxWidth =
    "960px";
  document.getElementById("closeButton1").style.display = "block";
  document.getElementById("closeButton2").style.display = "none";
  document.getElementById("imageModal").style.cursor = "pointer";
  document
    .getElementById("imageModal")
    .addEventListener("mouseenter", function (event) {
      event.target.style.opacity = "0.6";
      document.getElementById("imageExpand").style.display = "block";
    });
  document
    .getElementById("imageModal")
    .addEventListener("mouseout", function (event) {
      event.target.style.opacity = "unset";
    });
}

function controlVideo(vidcontrol) {
  var div = document.getElementById("modal");
  var iframe = div.getElementsByTagName("iframe")[0].contentWindow;
  iframe.postMessage(
    '{"event":"command","func":"' + vidcontrol + '","args":""}',
    "*"
  );
}

var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtnM");

var vid = document.getElementById("myVideo");
var vid2 = document.getElementById("video1");
var vid3 = document.getElementById("video2");
var vid4 = document.getElementById("video3");
var vid5 = document.getElementById("video4");

function test66() {
  vid2.play();
  vid3.play();
  vid4.play();
  vid5.play();
  document.getElementById("playButton2").style.display = "none";
  document.getElementById("pauseButton2").style.display = "block";
}

function test667() {
  vid.pause();
  document.getElementById("pauseButton").style.display = "none";
  document.getElementById("playButton").style.display = "block";
}

function test668() {
  vid.play();
  document.getElementById("playButton").style.display = "none";
  document.getElementById("pauseButton").style.display = "block";
}

function test767() {
  vid2.pause();
  vid3.pause();
  vid4.pause();
  vid5.pause();
  document.getElementById("pauseButton2").style.display = "none";
  document.getElementById("playButton2").style.display = "block";
}

function test768() {
  vid2.play();
  vid3.play();
  vid4.play();
  vid5.play();
  document.getElementById("playButton2").style.display = "none";
  document.getElementById("pauseButton2").style.display = "block";
}
