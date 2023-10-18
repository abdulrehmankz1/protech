// document.addEventListener("DOMContentLoaded", function () {
//     const divs = document.querySelectorAll(".grid");
//     const prevBtn = document.getElementById("prevBtn");
//     const nextBtn = document.getElementById("nextBtn");
//     let currentIndex = 0;

//     function showDiv(index) {
//         divs.forEach((div, i) => {
//             if (i === index) {
//                 div.style.display = "block";
//             } else {
//                 div.style.display = "none";
//             }
//         });
//     }

//     nextBtn.addEventListener("click", function () {
//         currentIndex++;
//         if (currentIndex >= divs.length) {
//             currentIndex = 0;
//         }
//         showDiv(currentIndex);
//     });

//     prevBtn.addEventListener("click", function () {
//         currentIndex--;
//         if (currentIndex < 0) {
//             currentIndex = divs.length - 1;
//         }
//         showDiv(currentIndex);
//     });

//     // Initially, show the first div.
//     showDiv(currentIndex);
// });
