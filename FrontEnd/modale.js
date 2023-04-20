(async ()  =>{

    let photo;
    
    const createPhotoElement = (data) => {
        const element = document.createElement('div'); {
            element.setAttribute('class', 'photo');
            element.innerHTML = `                
                    <img src="${data.imageUrl}" alt="${data.title}">
                    <a href="">
                        <img src="./assets/icons/supprimer.png" alt="supprimer" class="sup-icon">
                    </a>
                    <p>Modifier</>               
            `;        
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
    }

    const main = async () => {
        photo = await loadPhoto();
        updatePhotoContainer(photo);
    }
    await main ();

})()



