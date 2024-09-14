
const catID = localStorage.getItem("catID")

const url = "https://japceibal.github.io/emercado-api/cats_products/"+catID+".json";

const container = document.getElementById("container-autos");

let productList  ;

function goToProductInfo(productId) {
    window.location.href = `product-info.html?id=${productId}`;
    localStorage.setItem("catID", catID);
}

function showData(products){
    //la constante product va a tomar el valor de cada uno de los elementos de products
    container.innerHTML="";
for(const product of products){
console.log(product)

container.innerHTML += `<div class="product-item" onclick="goToProductInfo(${product.id})">
<div class="product-details">
<img class="imgcar" src="${product.image}" alt="${product.name}">
  <h2>${product.name}</h2>

  <p><span class="titulo-descripcion">Descripción:</span> ${product.description}</p>
  <p class="id">Id:</span>${product.id} </p>
  <p class="price"> Precio:</span>${product.currency} ${product.cost} </p>
  <p class="sold">Cantidad de Vendidos:</span> ${product.soldCount} </p>
</div>
</div>
</div>`;


}
}

fetch(url)
.then(response=>{
    if(!response.ok){
        throw new Error("No se pueden mostrar los datos");
    }
    return response.json();
    
})



.then(function(data){
    productList = data.products;
    console.log(data)
    showData(data.products)

})
    


function maxMin(){
        
        productList.sort((a,b)=> b.cost - a.cost);
        console.log(productList);
        showData(productList);
}


function minMax(){
        
    productList.sort((a,b)=> a.cost - b.cost);
    console.log(productList);
    showData(productList);
}

function relevante(){
    productList.sort((a,b)=> b.soldCount - a.soldCount);
    console.log(productList);
    showData(productList);   
}

function buscar(){

    const productMin = parseInt(document.getElementById('min').value)
    const productMax = parseInt(document.getElementById('max').value)

    const productosFiltrados = productList.filter(product=>{
        return product.cost >= productMin && product.cost <= productMax;
    });

 showData(productosFiltrados);
}
