document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("login");
     loginForm.addEventListener("submit", function(event){
        event.preventDefault();

        const user = document.getElementById("loginUser").value;
        const password = document.getElementById("loginPassword").value;

        if (user !== "" && password !== ""){
            localStorage.setItem("isLoggedIn", true);
            window.location.href = "index.html";
        } else {
            alert("Por favor, ingrese sus datos de inicio de sesión.")
        }
     })

})
document.getElementById('login').addEventListener('submit', function(e) {
    e.preventDefault(); 
    const username = document.getElementById('loginUser').value;
    localStorage.setItem('username', username);
    localStorage.setItem('isLoggedIn', true);
    window.location.href = 'index.html'; 
});


