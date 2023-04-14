async function login(email, password) {
  const url = "http://localhost:5678/api/users/login";
  const data = { email, password };
  const options = {
    method: "POST",
    protocol: "http",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      const errorResponseData = await response.json(); // récupère les données d'erreur de l'API
      const errorMessage = errorResponseData.message; // extrait le message d'erreur de la réponse
      throw new Error(errorMessage);
    }
    
    localStorage.setItem("token",JSON.stringify(responseData.token))

    if(localStorage.getItem("token")){
      console.log(localStorage.getItem("token"))
    }
    
    
    const responseData = await response.json();
    console.log(responseData);
    window.location.href = "../index.html";
  } catch (error) {
    console.error(error);
  }
}

function initLoginPage() {
  const loginForm = document.querySelector('#login');

  loginForm.addEventListener('submit', async function (event) {
    event.preventDefault();

    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    console.log(email, password);
    await login(email, password);
    return false;
  });

}

document.addEventListener('DOMContentLoaded', () => {
  initLoginPage();
})

