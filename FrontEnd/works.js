
(async ()  => {

    let works;
    
    const createWorkElement = (data) => {
        const element = document.createElement('div'); {
            element.setAttribute('class', 'work-item');
            element.innerHTML = `
                <figure>
                    <img src="${data.imageUrl}" alt="${data.title}">
                    <figcaption>${data.title}</figcaption>
                </figure>
            `;        
        }
        return element;
    }

    const loadWorks = async () => {
        const response = await fetch("http://localhost:5678/api/works");
        const data = await response.json(); 
        console.log(data);   
        return data;    
    }

    const updateWorkContainer = (works) => {
        const worksContainer = document.getElementById('worksContainer');
        worksContainer.innerHTML = '';
        works.forEach(works => {
            const workElement = createWorkElement(works);
            worksContainer.appendChild(workElement);
        })
    }

    const main = async () => {
        works = await loadWorks();
        updateWorkContainer(works);
    }
    await main();

    /************   Gestion des Filtres ************/

    function addFilterListeners() {
        const buttons = document.querySelectorAll(".button-filter");
        buttons.forEach((button) => {
          button.addEventListener("click", async function () {
            const data = await loadWorks();
            let dataFilter;
            if (button.id === "f-tous") {
              dataFilter = data.filter(function (work) {
                return work;
              });
            } else if (button.id === "f-objets") {
              dataFilter = data.filter(function (work) {
                return work.category.name === "Objets";
              });
            } else if (button.id === "f-autre") {
              dataFilter = data.filter(function (work) {
                return work.category.name !== "Objets";
              });
            } else if (button.id === "f-appartements") {
              dataFilter = data.filter(function (work) {
                return work.category.name === "Appartements";
              });
            } else if (button.id === "f-hotel") {
              dataFilter = data.filter(function (work) {
                return work.category.name === "Hotels & restaurants";
              });
            }
      
            updateWorkContainer(dataFilter);
            buttons.forEach((button) => button.classList.remove("active-filter"));
            button.classList.add("active-filter");
          });
        });
      }


      addFilterListeners();

    /*************  Filtre Tous  ***************/

    const buttonTous = document.querySelector("#f-tous");
    buttonTous.addEventListener("click", async function () {
        const data = await loadWorks();
        const dataFilter = data.filter(function (work) {
            return work
        });
        console.log(dataFilter);
        updateWorkContainer(dataFilter);
    });
    
    /********    Filtre Objet  *************/

    const buttonObjet = document.querySelector("#f-objets");

    buttonObjet.addEventListener("click", async function () {
        const data = await loadWorks();
        const dataFilter = data.filter(function (work) {
            return work.category.name === 'Objets';
        });
        console.log(dataFilter);
        updateWorkContainer(dataFilter);
    });


    /***************   Filtre Appartement **************/

    const buttonApp = document.querySelector("#f-appartements");
    buttonApp.addEventListener("click", async function () {
        const data = await loadWorks();
        const dataFilter = data.filter(function (work) {
            return work.category.name === 'Appartements';
        });
        console.log(dataFilter);
        updateWorkContainer(dataFilter);
    });



    /***************  Filtre Hotel et Restaurants **********/


    const buttonHotel = document.querySelector("#f-hotel");
    buttonHotel.addEventListener("click", async function () {
        const data = await loadWorks();
        const dataFilter = data.filter(function (work) {
            return work.category.name === 'Hotels & restaurants';
        });
        console.log(dataFilter);
        updateWorkContainer(dataFilter);
    });    
})()
