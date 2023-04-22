const addDeleteEventListeners = () => {
    const supIcons = document.querySelectorAll('.supp');
    supIcons.forEach(supIcon => {
      supIcon.addEventListener('click', async (event) => {
        event.preventDefault();
        const workId = event.currentTarget.getAttribute('data-id')  
        console.log(workId);      
        await deleteWork(workId);
      });
    });
  }
  
  async function deleteWork(workId) {
    const token = localStorage.getItem('token');
    const response = await fetch(`http://localhost:5678/api/works/${workId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Something went wrong!');
    }
    
    const responseData = await response.json();
    console.log(responseData);
    return responseData;
  }