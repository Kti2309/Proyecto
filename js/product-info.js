


const params = new URLSearchParams(window.location.search);
const productId = parseInt(params.get("id"));
 

console.log("El ID del producto seleccionado es: ", productId);

const url = "https://japceibal.github.io/emercado-api/products/"+productId+".json";
const productDetailsContainer = document.getElementById("containerProduct");

function showProductDetails(product) {

    if (!product) {
      alert("Sin información.")   
    } else {
    productDetailsContainer.innerHTML =`
        <div class="product-details">
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
        <div class="carousel-item active">
        <img class="imgcar" src="${product.images[0]}" alt="${product.name}">
        </div>
        <div class="carousel-item">
         <img class="imgcar" src="${product.images[1]}" alt="${product.name}">
        </div>
         <div class="carousel-item">
         <img class="imgcar" src="${product.images[2]}" alt="${product.name}">
        </div>
        <div class="carousel-item">
        <img class="imgcar" src="${product.images[3]}" alt="${product.name}">
        </div>
         </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
         <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
         <span class="carousel-control-next-icon" aria-hidden="true"></span>
         <span class="visually-hidden">Next</span>
        </button>
        </div>
        <div class="detailsProduct"  >
        <h2 class="product-Title" >${product.name}</h2>
        <h3 class="product-category">${product.category}</h2>
        <p class="price"> ${product.currency} ${product.cost}</p>
        <p><span class="title-description">Descripción:</span> ${product.description}</p>
        <p class="id">Id: ${product.id}</p>
        <p class="sold">Cantidad de vendidos: ${product.soldCount}</p>
        </div>
        `;
    }
}
let relatedProducts = document.getElementById("relatedProducts")

function showRelatedProducts(product){
    
    product.relatedProducts.forEach(product => {
   
        relatedProducts.innerHTML+=`
        <div class="relatedProductsDiv"  onclick="goToProductInfo(${product.id})">
        <h2 class="product-Title" >${product.name}</h2>
        <p class="id">Id: ${product.id}</p>
        <img class="img-fluid" src="${product.image}" alt="${product.name}">
        </div>
        `

    });

};

fetch(url)
.then(response=>{
    if(!response.ok){
        throw new Error("No se pueden mostrar los datos");
    }
    return response.json();
    
})

.then(data => {
    productInfo = data;

    console.log(data);
    
    showProductDetails(data);
    
    showRelatedProducts(data);
});




 
// Hay que mostrar los coments baby

urlComments = "https://japceibal.github.io/emercado-api/products_comments/"+productId+".json"
let comments;

let comment;
console.log(urlComments);


const productCommentsContainer = document.getElementById("productComment");

function showProductDetailsComments(comment) {
    

    if (!comment) {
      alert("Sin información.")   
    } else {
      

       comment.forEach(comment => {
        productCommentsContainer.innerHTML += `
            <div class="comment-card border border-dark rounded p-3 mb-3" id="commentBox">
                <p class="comment-user"><strong>Usuario:</strong> ${comment.user}</p>
                <p class="comment-date"><strong>Fecha:</strong> ${comment.dateTime}</p>
                <p class="comment-description"><strong>Comentario:</strong> ${comment.description}</p>
                <p class="comment-score"><strong>Puntuación:</strong> ${comment.score}</p>
            </div>
        `;
        
    });
};
};
fetch(urlComments)
.then(response=>{
    if(!response.ok){
        throw new Error("No se pueden mostrar los datos");
    }
    return response.json();
})


.then(data => {
    comment = data;
    
    
    console.log(data);

    showProductDetailsComments(data);
});



function agregarComentario() {
    
    const commentContainer = document.getElementById("productComment");

    const commentBox = document.createElement("div");
    commentBox.className = "comment-card border border-dark rounded p-3 mb-3";
    commentBox.id = "commentBox";

    const user = document.getElementById("user").value;
    const date = document.getElementById("date").value;
    const comment = document.getElementById("comment").value;
    const rating = document.querySelector('input[name="stars"]:checked').value;

    commentBox.innerHTML = `
        <p class="comment-user"><strong>Usuario:</strong> ${user}</p>
        <p class="comment-date"><strong>Fecha:</strong> ${date}</p>
        <p class="comment-description"><strong>Comentario:</strong> ${comment}</p>
        <p class="comment-score"><strong>Puntuación:</strong> ${rating}</p>
    `;

    commentContainer.appendChild(commentBox);
}

// 

function goToProductInfo(productId) {
    window.location.href = `product-info.html?id=${productId}`;
    localStorage.setItem("catID", catID);
    localStorage.setItem("catID", catID);
};