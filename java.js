"use strict";

const findJobAccardion = () => {
  const accardionBox = document.querySelector(".accardion-box");
  let counter = 1;
  for (let i = 0; i < accardionBox.children.length; i++) {
    accardionBox.children[i].addEventListener("click", (e) => {
      if (e.currentTarget.classList.contains("accardion")) {
        if (counter % 2 === 0) {
          accardionBox.children[i].style.height = "5.8rem";
          accardionBox.children[i].style.overflowY = "hidden";
          accardionBox.children[i].style.padding = "0 2.1rem 0 0";
          accardionBox.children[i].children[0].children[1].style.rotate =
            "180deg";
        } else {
          accardionBox.children[i].style.height = "auto";
          accardionBox.children[i].style.overflowY = "visible";
          accardionBox.children[i].style.padding = "0 2.1rem 2.1rem 0";
          accardionBox.children[i].children[0].children[1].style.rotate =
            "0deg";
        }
        counter++;
      }
    });
  }
};

const jobsSlider = () => {
  let slideNum = 0;
  // buttons
  const prevBtn = document.querySelector(".jobs-prev");
  const nextBtn = document.querySelector(".jobs-next");
  // elements
  const sliderBox = document.querySelector(".featured-jobs-slider-box");
  const slideChildLength = sliderBox.children.length;
  const x = window.matchMedia("(max-width: 900px)");
  if (x) {
    nextBtn.addEventListener("click", (e) => {
      slideNum++;
      if (slideNum >= slideChildLength) {
        slideNum = 0;
      }
      sliderBox.style.left = "-" + slideNum * 44 + "rem";
    });
    prevBtn.addEventListener("click", (e) => {
      slideNum--;
      if (slideNum < 0) {
        slideNum = slideChildLength - 1;
      }
      sliderBox.style.left = "-" + slideNum * 44.5 + "rem";
    });
  } else {
    nextBtn.addEventListener("click", (e) => {
      slideNum++;
      if (slideNum >= slideChildLength - 1) {
        slideNum = 0;
      }
      sliderBox.style.left = "-" + slideNum * 44 + "rem";
    });
    prevBtn.addEventListener("click", (e) => {
      slideNum--;
      if (slideNum < 0) {
        slideNum = slideChildLength - 2;
      }
      sliderBox.style.left = "-" + slideNum * 44.5 + "rem";
    });
  }
};

const articleSlider = () => {
  let slideNum = 0;
  // btn
  const prevBtn = document.querySelector(".article-prev");
  const nextBtn = document.querySelector(".article-next");
  // e
  const sliderBox = document.querySelector(".user-articles-slider-box");
  const sliderBoxLength = sliderBox.children.length;

  nextBtn.addEventListener("click", () => {
    slideNum++;
    if (slideNum > sliderBoxLength - 1) {
      slideNum = 0;
    }
    sliderBox.style.left = "-" + slideNum * 120 + "rem";
  });
  prevBtn.addEventListener("click", () => {
    slideNum--;
    if (slideNum < 0) {
      slideNum = sliderBoxLength - 1;
    }
    console.log("b" + slideNum * 120);

    sliderBox.style.left = "-" + slideNum * 120 + "rem";
  });
};

const navbarMenu = () => {
  const menu = document.querySelector(".menu");
  const navExit = document.querySelector(".nav-exit");
  const navigation = document.querySelector(".navigation");
  menu.addEventListener("click", (e) => {
    navigation.style.left = "0";
  });

  navExit.addEventListener("click", (e) => {
    navigation.style.left = "100rem";
  });
};

const footerMenu = () => {
  const footerNavigation = document.querySelector(".footer-navigation");
  const footerMenu = document.querySelector(".footer-menu");
  const footerExit = document.querySelector(".footer-exit ");

  footerMenu.addEventListener("click", (e) => {
    footerNavigation.style.left = "0";
  });

  footerExit.addEventListener("click", (e) => {
    footerNavigation.style.left = "100rem";
  });
};

(() => {
  findJobAccardion();
  jobsSlider();
  articleSlider();
  navbarMenu();
  footerMenu();
})();
