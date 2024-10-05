
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
})
    
// Hay que mostrar los coments baby

urlComments = "https://japceibal.github.io/emercado-api/products_comments/"+productId+".json"
let comments;


/*const commentId = parseInt(params.get("product"));
const commentID = localStorage.getItem("commentId");*/

let commentName;
console.log(urlComments);

console.log("El ID del producto seleccionado es: ", commentID);
console.log(commentID);


const productCommentsContainer = document.getElementById("containerComment");

function showProductDetailsComments(product) {

    if (!product) {
      alert("Sin información.")   
    } else {
        productCommentsContainer.innerHTML +=`
        <div class="product-comment">
        <div class="containerForm" >
      <form  method="post">
        <label><alert>¡Deja tu comentario!</alert></label>
         <div class="elem-group"> <label for="name">Nombre de Usuario</label> 
          <input type="text" id="name" name="visitor_name" placeholder="Nombre de ejemplo" required>
         </div> 
         <div class="dateName"><label for="date" > Fecha</label>
          <input type="date" id="start" name="date" placeholder="00/00/0000" />
         </div>
            <div class="elem-group"> 
              <label for="message">Comentario</label>
               <textarea id="message" name="visitor_message" placeholder="Escribe tu mensaje aquí." required></textarea>
               </div> 
               <div>
                <btn class="fa fa-star"></btn>
                <btn class="fa fa-star"></btn>
                <btn class="fa fa-star"></btn>
                <btn class="fa fa-star"></btn>
                <btn class="fa fa-star"></btn>
               </div>
               <button type="submit">Enviar Comentario</button>
              </form>
             

    </div>
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
    comment = data;
    const productComments = product.find(c => c.comment === commentId);
    
   

    if (product) {
        showProductDetailsComments(product);
    } else {
        alert("Producto no encontrado.");
        window.location.href = "categories.html";
    }
});