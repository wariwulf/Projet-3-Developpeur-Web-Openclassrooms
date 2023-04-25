(async ()  => {

    let photo;
    
    const createPhotoElement = (data) => {
        const element = document.createElement('div'); {
            element.setAttribute('class', 'photo');
            element.innerHTML = `                
                    <img class="apercu" src="${data.imageUrl}" alt="${data.title}" data-id="${data.id}">
                    <a href="#" class="supp" data-id="${data.id}">
                        <img src="./assets/icons/supprimer.png"     
                            alt="supprimer" 
                            class="sup-icon">
                    </a>        
                    <p>éditer</p>               
            `; 
            console.log(".photo", data.id);     
        }
        return element;
    }

    const loadPhoto = async () => {
        const response = await fetch("http://localhost:5678/api/works");
        const data = await response.json();
        console.log(data);
        return data;
    }

    const updatePhotoContainer = (photo) => {
        const photoContainer = document.getElementById('galerie-modal');
        photoContainer.innerHTML = '';
        photo.forEach(photo => {
            const photoElement = createPhotoElement(photo);
            photoContainer.appendChild(photoElement);
        })
        initDeleteEventListeners();
    }

    const main = async () => {
        photo = await loadPhoto();
        updatePhotoContainer(photo);
    }
    await main();

    

})()



