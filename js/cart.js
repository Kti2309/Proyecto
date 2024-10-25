
const productId = parseInt(params.get("id"));
const url = "https://japceibal.github.io/emercado-api/products/"+productId+".json";

const cartList= document.getElementById("cart")

function showProductDetails(product) {

    if (!product) {
      alert("Sin información.")   
    } else {
    cartList.innerHTML =` <div class="chartProduct"  >
    <h2 class="product-Title" >${product.name}</h2>
    <p class="cost">Costo: ${product.currency}${product.cost}</p>
    <img class="img-fluid" src="${product.image}" alt="${product.name}">
    </div>
    `
        
    }
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
    
    
});


form.addEventListener('submit', function (event) {
    if (!nombre.value || !apellido.value || !email.value) {
        event.preventDefault();
        event.stopPropagation();
        form.classList.add('was-validated');
    } else {
       
        const userProfile = {
            nombre: nombre.value,
            apellido: apellido.value,
            email: email.value,
            segundoNombre: segundoNombre.value,
            segundoApellido: segundoApellido.value,
            telefono: telefono.value
        };
        localStorage.setItem('userProfile', JSON.stringify(userProfile));
    }
});