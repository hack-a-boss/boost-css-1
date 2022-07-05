"use strict";

const menuButtons = document.querySelectorAll("header.main nav > ul > li");

const hideMenus = () => {
  for (const button of menuButtons) {
    button.classList.remove("open");
  }
};

const handleMenuButtonClick = (e) => {
  hideMenus();
  e.currentTarget.classList.add("open");
};

const handleBodyClick = (e) => {
  if (!e.target.closest("header.main")) hideMenus();
};

for (const button of menuButtons) {
  button.addEventListener("click", handleMenuButtonClick);
}

document.body.addEventListener("click", handleBodyClick);
