function envoyerFormulaire(event) {
    event.preventDefault();
  
    const form = event.target;
    console.log(form);
    const formData = new FormData(form);
    const token = JSON.parse(localStorage.getItem("token"));
  
    const options = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
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