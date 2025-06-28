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
 // let menuOpen = false;

 // function toggleMenu() {
 //     const sideMenu = document.getElementById("sideMenu");
 //     const overlay = document.getElementById("overlay");
 //     const burgerIcon = document.getElementById("burgerIcon");

 //     menuOpen = !menuOpen;

 //     if (menuOpen) {
 //         sideMenu.classList.add("open");
 //         overlay.style.display = "block";
 //         burgerIcon.src = "assets/images/MENU.svg"; // ✅ Ֆիգմայից քո ներբեռնած X-ը
 //     } else {
 //         sideMenu.classList.remove("open");
 //         overlay.style.display = "none";
 //         burgerIcon.src = "assets/images/burgerMenu.svg"; // ✅ Ֆիգմայից քո բուրգերը
 //     }
 // }
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