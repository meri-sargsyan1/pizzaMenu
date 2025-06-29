 let menuOpen = false;

 function toggleMenu() {
     const sideMenu = document.getElementById("sideMenu");
     const overlay = document.getElementById("overlay");
     const burgerIcon = document.getElementById("burgerIcon");

     menuOpen = !menuOpen;

     if (menuOpen) {
         sideMenu.classList.add("open");
         overlay.style.display = "block";
         burgerIcon.src = "assets/images/MENU.svg"; // ✅ X նշանը
     } else {
         sideMenu.classList.remove("open");
         overlay.style.display = "none";
         burgerIcon.src = "assets/images/burgerMenu.svg"; // ✅ բուրգեր նշանը
     }
 }

 window.addEventListener('DOMContentLoaded', () => {
     const cityDiv = document.getElementById("city-select");
     const popup = document.getElementById("city-popup");
     const question = document.getElementById("city-question");
     const closeBtn = document.getElementById("close-popup");

     if (cityDiv && popup && question && closeBtn) {
         cityDiv.addEventListener("click", () => {
             const cityName = cityDiv.querySelector("strong").innerText.trim();
             question.innerText = `Вы из ${cityName}?`;
             popup.style.display = "block";
         });

         closeBtn.addEventListener("click", () => {
             popup.style.display = "none";
         });
     } else {
         console.error("Մի բան չի գտնվել։ Ստուգիր id-ները HTML-ում։");
     }
 });
 window.addEventListener("DOMContentLoaded", () => {
     const slider = document.getElementById("slider");
     const scrollLeftBtn = document.getElementById("scrollLeft");
     const scrollRightBtn = document.getElementById("scrollRight");

     scrollLeftBtn.addEventListener("click", () => {
         slider.scrollBy({ left: -300, behavior: "smooth" });
     });

     scrollRightBtn.addEventListener("click", () => {
         slider.scrollBy({ left: 300, behavior: "smooth" });
     });
 });

 //  --------------------top places---
 const swiper = new swiper(".interesting-swiper", {
     slidesPerView: 1.1,
     spaceBetween: 20,
     grabCursor: true,
     pagination: {
         el: ".swiper-pagination",
         clickable: true,
     },
     breakpoints: {
         600: {
             slidesPerView: 1.5,
         },
         768: {
             slidesPerView: 2,
         },
         1024: {
             slidesPerView: 2.5,
         }
     }
 });