
let product ;

const params = new URLSearchParams(window.location.search);
const productId = parseInt(params.get("id"));
const catID = localStorage.getItem("catID");
const catName = localStorage.getItem("catName");


console.log("El ID del producto seleccionado es: ", productId);
console.log(catID);

const url = "https://japceibal.github.io/emercado-api/cats_products/"+catID+".json";
const productDetailsContainer = document.getElementById("containerProduct");

function showProductDetails(product) {

    if (!product) {
      alert("Sin información.")   
    } else {
    productDetailsContainer.innerHTML =`
        <div class="product-details">
        <img class="imgcar" src="${product.image}" alt="${product.name}">
        <h2>${product.name}</h2>
        <h3>"${catName}</h2>
        <p><span class="title-description">Descripción:</span> ${product.description}</p>
        <p class="id">Id: ${productId}</p>
        <p class="price">Precio: ${product.currency} + ${product.cost}</p>
        <p class="sold">Cantidad de vendidos: ${product.soldCount}</p>
        `;
    }
}
fetch(url)
.then(response=>{
    if(!response.ok){
        throw new Error("No se pueden mostrar los datos");
    }
    return response.json();
})

.then(data => {
    const products = data.products
    
    const product = products.find(p => p.id === productId);

    if (product) {
        showProductDetails(product);
    } else {
        alert("Producto no encontrado.");
        window.location.href = "categories.html";
    }
})
    
