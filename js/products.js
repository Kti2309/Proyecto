
const catID = localStorage.getItem("catID")

const url = "https://japceibal.github.io/emercado-api/cats_products/"+catID+".json";

const container = document.getElementById("container-autos");

function showData(products){
    //la constante product va a tomar el valor de cada uno de los elementos de products
for(const product of products){
console.log(product)

container.innerHTML += `<div class="product-item">
<div class="product-details">
<img class="imgcar" src="${product.image}" alt="chevrolet onix joy">
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
    console.log(data)
    showData(data.products)

})
    

