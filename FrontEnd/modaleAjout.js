const closeModal = () => {
    const currentModal = document.querySelector('.modal-works');
    currentModal.style.display = 'none';
  }
  
const returnModal = () => {
    const currentModal = document.querySelector('.modal-works');
    const previousModal = document.querySelector('.modal');
    currentModal.style.display = 'none';
    previousModal.style.display = 'block';
}

  const closeButton = document.querySelector('.close-aj');
  const retourButton = document.querySelector('.retour');
  
  closeButton.addEventListener('click', () => {
    closeModal();
  });
  
  retourButton.addEventListener('click', () => {
    returnModal();
  });

  document.removeEventListener('keydown', closeModal);
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeModal();
    }
  });  

  currentModal.removeEventListener('click', closeModal);
  currentModal.addEventListener('click', (event) => {
    if (event.target === currentModal) {
      closeModal();
    }
  });

