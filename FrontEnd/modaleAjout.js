const closeModal = () => {
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
    closeModal();
  });

