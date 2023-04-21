
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

    const buttonTous = document.querySelector("#f-tous");
    buttonTous.addEventListener("click", async function () {
        const data = await loadWorks();
        const dataFilter = data.filter(function (work) {
            return work
        });
        console.log(dataFilter);
        updateWorkContainer(dataFilter);
    });
        
    const buttonObjet = document.querySelector("#f-objets");
    buttonObjet.addEventListener("click", async function () {
        const data = await loadWorks();
        const dataFilter = data.filter(function (work) {
            return work.category.name === 'Objets';
        });
        console.log(dataFilter);
        updateWorkContainer(dataFilter);
    });

    const buttonApp = document.querySelector("#f-appartements");
    buttonApp.addEventListener("click", async function () {
        const data = await loadWorks();
        const dataFilter = data.filter(function (work) {
            return work.category.name === 'Appartements';
        });
        console.log(dataFilter);
        updateWorkContainer(dataFilter);
    });

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
