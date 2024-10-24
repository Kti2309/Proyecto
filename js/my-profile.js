let toggle=document.getElementById("toggle");

toggle.addEventListener('change',(event)=>{

    let checked=event.target.checked;
    document.body.classList.toggle('dark');
});
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('profileForm');
    const nombre = document.getElementById('nombre');
    const apellido = document.getElementById('apellido');
    const email = document.getElementById('email');
    const segundoNombre = document.getElementById('segundo-nombre');
    const segundoApellido = document.getElementById('segundo-apellido');
    const telefono = document.getElementById('telefono');

    // Cargar datos desde localStorage al cargar la página
    const savedData = JSON.parse(localStorage.getItem('userProfile'));
    const storedEmail = localStorage.getItem('username');
    if (savedData) {
        nombre.value = savedData.nombre || '';
        apellido.value = savedData.apellido || '';
        email.value = savedData.email || '';
        segundoNombre.value = savedData.segundoNombre || '';
        segundoApellido.value = savedData.segundoApellido || '';
        telefono.value = savedData.telefono || '';
    } else if (storedEmail) {
        email.value = storedEmail;
    };
  
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
});
const imageInput = document.getElementById('imageInput');
const preview = document.getElementById('preview');

imageInput.addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            preview.src = event.target.result;
            preview.style.display = 'block';
            localStorage.setItem("profileImage", event.target.result);
        };
        reader.readAsDataURL(file);
    }
    });

    window.addEventListener("load", function(){
        const userImage = localStorage.getItem("profileImage");
        if(userImage){
            preview.src = userImage;
            preview.style.display = 'block';
        };
    });