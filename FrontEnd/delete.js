document.addEventListener('DOMContentLoaded', async () => {
    const photo = await loadPhoto();
    updatePhotoContainer(photo);
    addDeleteEventListeners();
  });


const deleteWork = async (workId) => {
    const token = localStorage.getItem('token');
    const response = await fetch(`http://localhost:5678/api/works/${workId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    const responseData = await response.json();
    console.log(responseData);
    return response.json();
  }
  
  const addDeleteEventListeners = () => {
    const supIcons = document.querySelectorAll('.sup-icon');
    supIcons.forEach(supIcon => {
      supIcon.addEventListener('click', async (event) => {
        const workId = event.target.closest('.photo').dataset.workId;
        await deleteWork(workId);
        const photo = await loadPhoto();
        updatePhotoContainer(photo);
      });
    });
  }
  
  const updatePhotoContainer = (photo) => {
    const photoContainer = document.getElementById('galerie-modal');
    photoContainer.innerHTML = '';
    photo.forEach(photo => {
      const photoElement = createPhotoElement(photo);
      photoContainer.appendChild(photoElement);
    });
    addDeleteEventListeners();
  }

