document.addEventListener("DOMContentLoaded", function () {
    const carrusel = document.getElementById('carrusel');
    let datosJSON;
    let slideIndex = 0;

    function mostrarSlides(datos) {
        carrusel.innerHTML = "";
        datos.forEach((slide, index) => {
            const divSlide = document.createElement('div');
            divSlide.className = 'slide text-center';
            const imagen = document.createElement('img');
            imagen.src = 'images/eventosAcademicos/' + slide.foto;
            imagen.className = 'fotoscarrusel'; // Agregar la clase fotoscarrusel al img
            const nombre = document.createElement('h2');
            nombre.className = "m-4";
            nombre.textContent = slide.Nombre; // Agregar el nombre
            const descripcion = document.createElement('p');
            descripcion.className="text-justify";
            descripcion.textContent = slide.descripcion;
            divSlide.appendChild(imagen);
            divSlide.appendChild(nombre);
            divSlide.appendChild(descripcion);
            carrusel.appendChild(divSlide);
        });
    }

    function cambiarSlide(n) {
        slideIndex += n;
        if (slideIndex >= datosJSON.length) {
            slideIndex = 0;
        }
        if (slideIndex < 0) {
            slideIndex = datosJSON.length - 1;
        }
        mostrarSlides([datosJSON[slideIndex]]);
    }

    // Cargar el JSON desde un archivo externo
    fetch('JSON/eventosAcademicos.json')
        .then(response => response.json())
        .then(data => {
            datosJSON = data;
            mostrarSlides(datosJSON);
        })
        .catch(error => console.error('Error al cargar el archivo JSON:', error));

    // Cambiar automáticamente cada dos segundos
    setInterval(function () {
        cambiarSlide(1);
    }, 8000);

    // Event listeners para los botones
    const anteriorBtn = document.getElementById('anterior');
    const siguienteBtn = document.getElementById('siguiente');

    anteriorBtn.addEventListener('click', function () {
        cambiarSlide(-1);
    });

    siguienteBtn.addEventListener('click', function () {
        cambiarSlide(1);
    });
});
