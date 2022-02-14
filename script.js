"use strict";

const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", (e) => {
    let activePanel = document.querySelector(".panel.active");
    if (panel.classList.contains("active")) return;
    e.target.classList.toggle("active");
    activePanel.classList.remove("active");
  });
});
