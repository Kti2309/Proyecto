document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("autos").addEventListener("click", function() {
        localStorage.setItem("catID", 101);
        window.location = "products.html"
    });
    document.getElementById("juguetes").addEventListener("click", function() {
        localStorage.setItem("catID", 102);
        window.location = "products.html"
    });
    document.getElementById("muebles").addEventListener("click", function() {
        localStorage.setItem("catID", 103);
        window.location = "products.html"
    });

    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (!isLoggedIn) {
        window.location.href = "login.html"
    }

    const username = localStorage.getItem('username');
    if (username) {
        document.getElementById('userDisplay').textContent = `Bienvenido, ${username}`;
    }
    
});