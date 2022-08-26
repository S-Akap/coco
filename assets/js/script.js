// ------------------------------------------
// ハンバーガー
const menuModalContents = document.querySelector(".menu-modal-contents");
const navElm = document.querySelector("#nav");
const menuBtnElm = document.querySelector(".menu-btn");
const menuOverlay = document.querySelector(".menu-modal-overlay");
menuBtnElm.addEventListener("click", () => {
  navElm.classList.toggle("active");
});
menuOverlay.addEventListener("click", () => {
  navElm.classList.remove("active");
});
menuModalContents.querySelectorAll("a[href]").forEach((el) => {
  el.addEventListener("click", () => {
    navElm.classList.remove("active");
    return true;
  });
});

// ------------------------------------------

const teamName = document.querySelector(".team-name"); // ステップの数字
const team = document.querySelector("#team"); // 背景
const use = document.querySelector(".use"); // 説明文

// スマホ
const swiperLg = new Swiper(".mySwiper-lg", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// PC
const swiperSp = new Swiper(".mySwiper-sp", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
});

function onSlideChange(swiper) {
  // グループ名の更新
  if (swiper.realIndex === 0) {
    teamName.innerHTML = "ふえきのり";
    team.style.backgroundColor = "var(--color-primary2)";
    team.style.boxShadow = "0px 2px 8px rgba(220, 160, 71, 0.4)";
  } else if (swiper.realIndex === 1) {
    teamName.innerHTML = "ピッコマ";
    team.style.backgroundColor = "var(--color-primary2)";
    team.style.boxShadow = "0px 2px 8px rgba(220, 160, 71, 0.4)";
  } else if (swiper.realIndex === 2) {
    teamName.innerHTML = "揚げもンズ";
    team.style.backgroundColor = "var(--color-primary3)";
    team.style.boxShadow = "0px 2px 8px rgba(221, 31, 125, 0.4)";
  } else if (swiper.realIndex === 3) {
    teamName.innerHTML = "いち";
    team.style.backgroundColor = "var(--color-primary3)";
    team.style.boxShadow = "0px 2px 8px rgba(221, 31, 125, 0.4)";
  } else if (swiper.realIndex === 4) {
    teamName.innerHTML = "とうふや";
    team.style.backgroundColor = "var(--color-primary4)";
    team.style.boxShadow = "0px 2px 8px rgba(0, 181, 124, 0.4)";
  } else if (swiper.realIndex === 5) {
    teamName.innerHTML = "ぱるくる";
    team.style.backgroundColor = "var(--color-primary4)";
    team.style.boxShadow = "0px 2px 8px rgba(0, 181, 124, 0.4)";
  } else if (swiper.realIndex === 6) {
    teamName.innerHTML = "なかよし第五公園";
    team.style.backgroundColor = "var(--color-primary1)";
    team.style.boxShadow = "0px 2px 8px rgba(129, 75, 234, 0.4)";
  } else if (swiper.realIndex === 7) {
    teamName.innerHTML = "くじら";
    team.style.backgroundColor = "var(--color-primary1)";
    team.style.boxShadow = "0px 2px 8px rgba(129, 75, 234, 0.4)";
  } else if (swiper.realIndex === 8) {
    teamName.innerHTML = "卓長とサポーター";
    team.style.backgroundColor = "#4F4A4A";
    team.style.boxShadow = "0px 2px 8px rgba(0, 0, 0, 0.4)";
  }
}

swiperSp.on("slideChange", onSlideChange);
swiperLg.on("slideChange", onSlideChange);