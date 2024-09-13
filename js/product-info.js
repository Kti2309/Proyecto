   
}const productData = {
    "id": 1,
    "name": " Ejemplo",
    "description": "ejemplo",
    "price": "$10.00",
    "image": "https://via.placeholder.com/800x600?text=Imagen+del+Producto"
};

// Actualiza el contenido de la página con los datos del producto
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('product-name').textContent = productData.name;
    document.getElementById('product-description').textContent = productData.description;
    document.getElementById('product-price').textContent = productData.price;
    document.getElementById('product-image').src = productData.image;
});