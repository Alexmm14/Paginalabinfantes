// eventosAcademicos.js

// Función para cargar el JSON desde el archivo
function cargarJSON(callback) {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'JSON/eventosAcademicos.json', true);
    xobj.onreadystatechange = function () {
       if (xobj.readyState == 4 && xobj.status == "200") {
          callback(JSON.parse(xobj.responseText));
       }
    };
    xobj.send(null);
}
 
// Función principal que utiliza el JSON cargado
function inicializarCarrusel(data) {
   // Obtén el contenedor del carrusel y los indicadores
   var carouselContainer = document.querySelector('.carousel-inner');
   var indicatorsContainer = document.querySelector('.carousel-indicators');
 
   // Itera sobre los datos y crea los elementos del carrusel
   data.forEach(function (item, index) {
      // Crea el elemento del item del carrusel
      var carouselItem = document.createElement('div');
      carouselItem.classList.add('carousel-item', 'text-center');
      if (index === 0) {
         carouselItem.classList.add('active');
      }
 
      // Crea un contenedor flex para la imagen y la descripción
      var contentContainer = document.createElement('div');
      contentContainer.classList.add('d-flex', 'flex-column', 'align-items-center', 'justify-content-center', 'h-100');
 
      // Crea el elemento para el nombre y agrega la clase de Bootstrap
      var nombre = document.createElement('h5');
      nombre.textContent = item.Nombre;
      contentContainer.appendChild(nombre);

      // Crea el elemento de la imagen y agrega la clase de Bootstrap
      var img = document.createElement('img');
      img.src = 'images/eventosAcademicos/' + item.foto;
      img.classList.add('d-block', 'imagen-carrusel');
      contentContainer.appendChild(img);
 
      // Crea el elemento para la descripción y agrega la clase de Bootstrap
      var descripcion = document.createElement('p');
      descripcion.textContent = item.descripcion;
      contentContainer.appendChild(descripcion);
 
      carouselItem.appendChild(contentContainer);
 
      // Crea el elemento del indicador y agrega la clase de Bootstrap
      var indicator = document.createElement('li');
      indicator.setAttribute('data-target', '#myCarousel');
      indicator.setAttribute('data-slide-to', index.toString());
      if (index === 0) {
         indicator.classList.add('active');
      }
      indicatorsContainer.appendChild(indicator);
 
      // Agrega el item al carrusel
      carouselContainer.appendChild(carouselItem);
   });
 
   // Inicializa el carrusel usando Bootstrap
   $('#myCarousel').carousel();
}
