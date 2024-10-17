const CATEGORIES_URL = "https://japceibal.github.io/emercado-api/cats/cat.json";
const PUBLISH_PRODUCT_URL = "https://japceibal.github.io/emercado-api/sell/publish.json";
const PRODUCTS_URL = "https://japceibal.github.io/emercado-api/cats_products/";
const PRODUCT_INFO_URL = "https://japceibal.github.io/emercado-api/products/";
const PRODUCT_INFO_COMMENTS_URL = "https://japceibal.github.io/emercado-api/products_comments/";
const CART_INFO_URL = "https://japceibal.github.io/emercado-api/user_cart/";
const CART_BUY_URL = "https://japceibal.github.io/emercado-api/cart/buy.json";
const EXT_TYPE = ".json";

let showSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "block";
}

let hideSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "none";
}

let getJSONData = function(url){
    let result = {};
    showSpinner();
    return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }else{
        throw Error(response.statusText);
      }
    })
    .then(function(response) {
          result.status = 'ok';
          result.data = response;
          hideSpinner();
          return result;
    })
    .catch(function(error) {
        result.status = 'error';
        result.data = error;
        hideSpinner();
        return result;
    });
  };

    document.addEventListener("DOMContentLoaded", function(){
    const username = localStorage.getItem('username');
    if (username) {
        document.getElementById('userDisplay').innerHTML = `
            <button class="btn btn-secondary dropdown-toggle" type="button" href="#" data-bs-toggle="dropdown" aria-expanded="false">
            Bienvenido, ${username}
            </button>
            <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="my-profile.html">Perfil</a></li>
            <li><a class="dropdown-item" href="cart.html">Carrito</a></li>
            <li><a class="dropdown-item" id="session-end" href="login.html">Cerrar sesión</a></li>
            </ul>`;
    };
});

document.addEventListener("DOMContentLoaded", ()=>{
  let logOutBtn = document.getElementById("session-end");

  logOutBtn.addEventListener("click", ()=> {
    localStorage.removeItem("username");
    localStorage.removeItem("isLoggedIn");
  })
});


document.addEventListener("DOMContentLoaded", ()=>{
const isLoggedIn = localStorage.getItem("isLoggedIn");

if (!isLoggedIn) {
    window.location.href = "login.html"
};
});