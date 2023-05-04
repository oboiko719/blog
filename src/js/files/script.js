// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

"use strict"

window.addEventListener('load', windowLoad);

function windowLoad() {
  document.body.classList.add('loaded');

  document.addEventListener("click", documentActions);

  function documentActions(e) {
    const targetElement = e.target;
    //Up
    if (targetElement.closest('.footer__up')) {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
      e.preventDefault();
    }
  }

  function getIndex(el) {
    return Array.from(el.parentNode.children).indexOf(el);
    
  }

//Watcher
  const items = document.querySelectorAll('[data-item]');
  const options = {
    treshold: 0.2
  }

  const callback = (entries) =>{
    entries.forEach(entry => {
      if (entry.isIntersecting){
        entry.target.classList.add('active');
      }
    });
  }

  const observer = new IntersectionObserver(callback, options);

  items.forEach(item => {
    observer.observe(item);
  });

}






