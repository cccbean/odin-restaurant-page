import { createHeader, createHome } from "./home.js";
import { createAbout } from "./about.js";
import { createMenu } from "./menu.js";


const displayPages = () => {
  createHeader();
  createHome();


  const removeContent = () => {
    if (document.querySelector(".container")) {
      document.querySelector(".container").remove();
    }
  };

  const homeBtn = document.querySelector("#home");
  homeBtn.addEventListener("click", () => {
    removeContent();
    createHome();
  });

  const aboutBtn = document.querySelector("#about");
  aboutBtn.addEventListener("click", () => {
    removeContent();
    createAbout();
  });

  const menuBtn = document.querySelector("#menu");
  menuBtn.addEventListener("click", () => {
    removeContent();
    createMenu();
  });
};

displayPages();