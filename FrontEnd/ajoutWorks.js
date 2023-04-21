const select = document.querySelector('#categorie');

// Envoyer une requête fetch pour récupérer les éléments du select
fetch('http://localhost:5678/api/categories')
  .then(response => response.json())
  .then(data => {
    // Ajouter les éléments du select à partir des données reçues
    data.forEach(category => {
      const option = document.createElement('option');
      option.value = category.id;
      option.text = category.name;
      select.appendChild(option);
    });
  })
  .catch(error => {
    console.error('Une erreur est survenue:', error);
  });

