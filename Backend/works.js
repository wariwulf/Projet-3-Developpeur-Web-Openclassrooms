
(async ()  =>{

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
        const works = await loadWorks();
        updateWorkContainer(works);
    }
    await main ();
})()
