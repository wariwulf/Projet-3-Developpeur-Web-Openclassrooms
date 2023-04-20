function envoyerFormulaire(event) {
    event.preventDefault();
  
    const form = event.target;
    const formData = new FormData(form);
    const token = JSON.parse(localStorage.getItem("token"));
  
    const options = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: {
        image: formData.get("image") ? formData.get("image").split(",")[1] : null,
        title: formData.get("title") || "",
        category: parseInt(formData.get("category")) || null,
      },
    };
  
    fetch("http://localhost:5678/api/works", options)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur lors de l'envoi du formulaire");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Formulaire envoyé avec succès : ", data);
        window.location.href = "./index.html";
      })
      .catch((error) => {
        console.error(error);
      });
  }
  
  const formulaire = document.getElementById("ajout-works");
  formulaire.addEventListener("submit", envoyerFormulaire);