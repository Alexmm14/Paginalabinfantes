// script.js

// Función para cargar datos desde un archivo JSON
async function cargarDatos() {
    try {
        const response = await fetch('JSON/LabEnMedisoYutu.json');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error al cargar datos:', error);
    }
}

let currentIndex = 0;

// Función para cambiar el video en el carrusel
function cambiarVideo(direccion) {
    const videos = document.querySelectorAll('#videoCarousel .carousel-item');
    const totalVideos = videos.length;

    if (direccion === 'anterior') {
        currentIndex = (currentIndex - 1 + totalVideos) % totalVideos;
    } else {
        currentIndex = (currentIndex + 1) % totalVideos;
    }

    videos.forEach((video, index) => {
        if (index === currentIndex) {
            video.classList.add('active');
        } else {
            video.classList.remove('active');
        }
    });
}

// Función para inicializar el carrusel de videos con datos cargados
async function inicializarCarrusel() {
    const videos = await cargarDatos();
    const carruselContainer = document.querySelector('#videoCarousel .carousel-inner');

    videos.forEach((video, index) => {
        const item = document.createElement('div');
        item.classList.add('carousel-item');
        item.classList.add('mx-4');

        const iframe = document.createElement('iframe');
        iframe.width = "100%";
        iframe.height = 430;
        iframe.src = video.link;
        iframe.title = video.nombre;
        iframe.frameBorder = 0;
        iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
        iframe.allowFullscreen = true;

        if (index === 0) {
            item.classList.add('active');
        }

        item.appendChild(iframe);
        carruselContainer.appendChild(item);
    });
}

// Llama a la función para inicializar el carrusel de videos al cargar la página
document.addEventListener('DOMContentLoaded', function () {
    inicializarCarrusel();
});
