$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $("header").addClass("sticky");
    } else {
      $("header").removeClass("sticky");
    }
  });

  function newDate() {
    return new Date().getFullYear();
  }
  document.onload = document.getElementById("autodate").innerHTML = +newDate();
});


"use strict";

let next = document.querySelector(".next");
let prev = document.querySelector(".prev");

next.addEventListener("click", function () {
  let items = document.querySelectorAll(".item");
  document.querySelector(".slide").appendChild(items[0]);
});

prev.addEventListener("click", function () {
  let items = document.querySelectorAll(".item");
  document.querySelector(".slide").prepend(items[items.length - 1]);
});

