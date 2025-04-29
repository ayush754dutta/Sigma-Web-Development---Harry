"use strict";

console.log("My first website");

const h1 = document.querySelector("h1");

h1.addEventListener("click", function () {
  //   console.log(this);

  this.textContent = "I am clicked";
});
