if(localStorage.getItem("token")) {
    console.log(localStorage.getItem("token"));

    const logoutLi = document.createElement("li");
    const logoutLink = document.createElement("a");
    logoutLink.setAttribute('href', '#');
    logoutLink.setAttribute('class', 'logout');
    logoutLink.innerText = "Logout";
    logoutLi.appendChild(logoutLink);

    // Recherchez l'élément ul parent et récupérez le lien "login" à remplacer
    const navUl = document.querySelector("#nav-ul");
    const loginLink = document.querySelector(".a-login");

    loginLink.replaceWith(logoutLi);


    const modifier = document.createElement("div");
    modifier.setAttribute('class', 'modifier');
    modifier.innerHTML = `
      <a href="" id="modifier-link" class="link">
      <img class="img-modifier" src="./assets/icons/modifier.png" alt="Modifier"/>
      Modifier
      </a>
      <div class="titre-modif">
        <h2>Mes projets</h2>
        <a href="#modifier-modal" id="modifier-link">
          <img class="img-modifier" src="./assets/icons/modifier.png" alt="Modifier"/>
          Modifier
        </a>
      </div>  
    `;
    const remp = document.querySelector("#top-portfolio");
    remp.replaceWith(modifier);

    const article = document.getElementById ("article");
    const modifierArticle = document.createElement ("div");
    modifierArticle.classList.add ("modif-art");
    modifierArticle.innerHTML = `
      <a href="" id="modifier-link" class="link">
        <img class="img-modifier" src="./assets/icons/modifier.png" alt="Modifier"/>
        Modifier
      </a>
      `;
    article.appendChild (modifierArticle);  



  
    const modifierModal = document.querySelector('#modifier-modal');
    const modifierLink = document.querySelectorAll('#modifier-link');
    const closeBtn = document.querySelector('.close');
    let modalVisible = false;
  
    // Ouvrir la modale lorsque l'utilisateur clique sur le lien
    modifierLink.forEach(modifierLink => {
      modifierLink.addEventListener('click', function(event) {
        event.preventDefault();
        modifierModal.style.display = 'block';
        modalVisible = true;
      });
    });

    // Fermer la modale lorsque l'utilisateur clique sur la croix
    closeBtn.addEventListener('click', function() {
        modifierModal.style.display = 'none';
        modalVisible = false;
    });
  
    // Fermer la modale lorsque l'utilisateur clique en dehors de la modale
    window.onclick = function (event) {
        if (event.target == modifierModal) {
            modifierModal.style.display = 'none';
            modalVisible = false;
      }
    };
  
    // Fermer la modale avec la touche "Escape"
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modalVisible) {
            modifierModal.style.display = 'none';
            modalVisible = false;
      }
    });
    
    
    //******************Modale d'ajout*****************//
    
    
    const addButton = document.querySelector('.btn-modal');
  
    // Fonction pour ouvrir la modale d'ajout de photo
    const openAddModal = () => {
      const addModal = document.getElementById('modal-ajout');
      addModal.style.display = 'block';
    }
  
    // Fonction pour fermer la modale courante
    const closeModal = () => {
      const currentModal = document.querySelector('.modal');
      currentModal.style.display = 'none';
    }
  
    // Ajout du gestionnaire d'événements sur le bouton "Ajouter une photo"
    addButton.addEventListener('click', () => {
      closeModal();
      openAddModal();
    });
  }

