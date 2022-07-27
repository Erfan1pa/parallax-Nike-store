"use strict";
const firstPage = document.querySelector(".firstPage");
const secondPage = document.querySelector(".secondPage");
const thirdPage = document.querySelector(".thirdPage");
const maintitle = document.querySelectorAll(".firstPage div p");
const imgCard = document.querySelector(".img-card");
const Card = document.querySelector(".card");
const imgBox = document.querySelectorAll(".image-box");
const MAX_FIRST_PAGE_SCROLL = 500;
const FIRST_TRANS_MIN = 200;
const FIRST_TRANS_MAX = 600;
const SECOND_TRANS_MIN = 750;
const SECOND_BREAK = 800;
const SECOND_TRANS_MAX = 1350;
const THIRD_BREAK = 1000;
thirdPage.style.opacity = 0;
document.addEventListener("scroll", function (event) {
  let scrollOfset = window.pageYOffset;
  if (scrollOfset <= MAX_FIRST_PAGE_SCROLL) {
    secondPage.style.opacity = 0;
    firstPage.style.opacity = 1;
    let increaser = scrollOfset / MAX_FIRST_PAGE_SCROLL;
    maintitle[0].style.transform = `translate3d(0, -${increaser * 600}px,0)`;
    maintitle[2].style.transform = `translate3d(0, ${increaser * 600}px,0)`;
  }
  if (scrollOfset > FIRST_TRANS_MIN && scrollOfset <= FIRST_TRANS_MAX) {
    firstPage.style.display = "block";
    let opa = scrollOfset / FIRST_TRANS_MAX;
    firstPage.style.opacity = 1 - opa;
    secondPage.style.opacity = opa;
  } else if (
    scrollOfset > SECOND_TRANS_MIN &&
    scrollOfset <= SECOND_TRANS_MAX
  ) {
    let increaser = scrollOfset - SECOND_TRANS_MIN;
    firstPage.style.display = "none";
    thirdPage.style.display = "none";
    secondPage.style.display = "block";
    Card.style.transform = `translate3d(${increaser}px,0,0)`;
  } else if (scrollOfset > SECOND_BREAK) {
    secondPage.style.display = "none";
    thirdPage.style.display = "flex";
    let opa = (scrollOfset / THIRD_BREAK) * 0.5;
    secondPage.style.opacity = 1 - opa;
    thirdPage.style.opacity = opa;

    let increaser = scrollOfset - SECOND_TRANS_MAX;
    imgBox[0].style.marginLeft = increaser * 0.095;
    imgBox[1].style.marginLeft = increaser * 0.095;
    imgBox[2].style.marginLeft = increaser * 0.095;
  }
});
