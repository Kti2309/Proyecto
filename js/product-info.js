
let product ;

const params = new URLSearchParams(window.location.search);
const productId = parseInt(params.get("id"));
const catID = localStorage.getItem("catID");

let catName;
console.log(catName);

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
        <div class="detailsProduct"  >
        <h2 class="product-Title" >${product.name}</h2>
        <h3 class="product-category">${catName}</h2>
        <p class="price"> ${product.currency} ${product.cost}</p>
        <p><span class="title-description">Descripción:</span> ${product.description}</p>
        <p class="id">Id: ${productId}</p>
        <p class="sold">Cantidad de vendidos: ${product.soldCount}</p>
        </div>
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
    const products = data.products;
    catName = data.catName;
    
    const product = products.find(p => p.id === productId);

    if (product) {
        showProductDetails(product);
    } else {
        alert("Producto no encontrado.");
        window.location.href = "categories.html";
    }
})
    
///

let comments;


const commentId = parseInt(params.get("product"));
const commentID = localStorage.getItem("commentId");

let commentName;
console.log(commentName);

console.log("El ID del producto seleccionado es: ", commentID);
console.log(commentID);


const productCommentsContainer = document.getElementById("containerProduct");

function showProductDetailsComments(product) {

    if (!product) {
      alert("Sin información.")   
    } else {
        productCommentsContainer.innerHTML +=`
        <div class="product-comment">
            <p><strong>Usuario:</strong> ${product.user}</p>
            <p><strong>Fecha:</strong> ${product.dateTime}</p>
            <p><strong>Comentario:</strong> ${product.description}</p>
            <p><strong>Puntuación:</strong> ${product.score} / 5</p>
        </div>
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
    comments = data;
    const productComments = comments.find(c => c.comment === commentId);
    
   

    if (product) {
        showProductDetailsComments(product);
    } else {
        alert("Producto no encontrado.");
        window.location.href = "categories.html";
    }
})
    