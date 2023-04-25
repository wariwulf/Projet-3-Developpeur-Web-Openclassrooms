const input = document.getElementById ("depo-img");
const depotIllus = document.querySelector (".depot-illus");
const button = document.querySelector ("#depo-btn");
const details = document.querySelector (".img-details");
const depot = document.querySelector (".depot");
button.addEventListener("click", function() {
  input.click();
});

input.addEventListener("change", function() {
  const file = this.files[0];

  const reader = new FileReader();
  reader.addEventListener("load", function() {
    const imageUrl = reader.result;
    const image = new Image();
    image.src = imageUrl;

    image.addEventListener("load", function() {
      button.style.display = "none";
      details.style.display = "none";
      depotIllus.style.display = "none";
      depot.style.backgroundImage = `url(${imageUrl})`;
      depot.style.backgroundSize = "contain";
      depot.style.backgroundPosition = "center";
      depot.style.backgroundRepeat = "no-repeat";
    });
  });

  if (file) {
    reader.readAsDataURL(file);
  }
});
