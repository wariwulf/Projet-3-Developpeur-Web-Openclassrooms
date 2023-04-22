// document.addEventListener("DOMContentLoaded", function() {
//     const input = document.querySelector("#depo-img");
  
//     input.addEventListener("click", function () {
//       input.click();
//     });
  
//     input.addEventListener("change", function (event) {
//       const file = event.target.files[0];
//       const url = URL.createObjectURL(file);
//       console.log(url); // Ajout d'un console.log pour vérifier si l'URL est correctement créée
//       const img = document.createElement("img");
//       img.src = url;
//       img.style.maxWidth = "100%";
//       img.style.maxHeight = "100%";
//       img.style.objectFit = "contain";
//       const depot = document.querySelector(".depot");
//       depot.innerHTML = "";
//       depot.appendChild(img);
//     });
//   });
