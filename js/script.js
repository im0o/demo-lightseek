window.onload = async () => {
  var index = 0;
  var bgvideo = document.getElementById("myVideo");
  var video = document.getElementById("video1");
  var audio = document.getElementById("myAudio");
  bgvideo.onended = function () {
    if (index) {
      index = 0;
      bgvideo.src = "./assets/background.mp4";
    } else {
      index = 1;
      bgvideo.src = "./assets/background.mp4";
    }
  };
  await audio.play();
  video.onplay = async () => {
    await audio.pause();
  }
  video.onpause = async () => {
    await audio.play();
  }

};
// 滚动到 屏幕高度以下 时，显示导航栏
window.onscroll = function () {
  var top = document.documentElement.scrollTop || document.body.scrollTop;
  var navbar = document.getElementsByClassName("float-navbar")[0];
  let navshow = false;
  if (top >= window.innerHeight - 100) {
    navbar.style.display = "block";
    navbar.style.animation = "float-navbar .5s";
    navbar.onanimationend = () => {
      navshow = (top >= window.innerHeight)
    }
  } else {
    navbar.style.animation = "float-navbar-out .5s";
    navbar.onanimationend = () => {
      navshow = (top >= window.innerHeight)
      if (!navshow) navbar.style.display = "none";
    }
  }
};

// 点击 #item-show-btn 时，展开/收起 .masonry-box 的 max-height

addEventListener("click", function (e) {
  if (e.target.id === "item-show-btn") {
    var box = e.target.parentNode.parentNode;
    if (box.classList.contains("masonry-box-open")) {
      box.classList.remove("masonry-box-open");
      e.target.innerHTML = "展开";
      // 滚动到锚点 #container-3
      var top = document.getElementById("container-3").offsetTop;
      window.scrollTo(0, top);
    } else {
      box.classList.add("masonry-box-open");
      e.target.innerHTML = "收起";
    }
  }
});