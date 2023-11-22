// Ruta al archivo JSON
var rutaJSON = 'JSON/semblanzas.json';
var rutaImg = 'images/participantes/';
var num = 0;

// Realizar solicitud (request) para obtener el JSON
fetch(rutaJSON)
  .then(response => response.json())
  .then(jsonArray => {
    // Obtener el contenedor
    var informacionContainer = document.getElementById('informacion-container');

    // Iterar sobre cada elemento del arreglo
    jsonArray.forEach(jsonInfo => {
      num++;

      // Crear elementos HTML para mostrar la información
      var elementoInfo = document.createElement('div');
      var res = rutaImg + jsonInfo.imagen;

      elementoInfo.classList.add('info-container');
      elementoInfo.innerHTML = `
      <div class="card-body">
        <div class="card">
          <div class="card-header" id="subseccion${num}"> 
              <h2 class="mb-0">
                  <button class="btn btn-link" type="button" data-toggle="collapse"
                    data-target="#subcontenido${num}">
                    <h2>
                    ${jsonInfo.nombre}
                    </h2>
                </button>
                </h2>
          </div>

        <div id="subcontenido${num}" class="collapse" aria-labelledby="subseccion1"  
          data-parent="#contenido1">
          <div class="card-body">
              <div class="row">
                <div class=" col-lg-3 col-md-3 color3">
                  <img src="${res}" alt="Imagen de ${jsonInfo.nombre}">
                <div>
                <div class=" col-lg-9 col-md-9 color2 mb-3">
                  <p>${jsonInfo.semblanza}</p>
                <div>
          </div>
        </div>
      </div>  
   </div>
      `;

      // Agregar el elemento al contenedor
      informacionContainer.appendChild(elementoInfo);
    });
  })
  .catch(error => console.error('Error al obtener el JSON:', error));
