// Ruta al archivo JSON
var rutaJSON = 'JSON/Profesores-investigadores.json';
var rutaImg = 'images/participantes/';
var num = 0;

// Obtener el contenedor fuera del bucle
var informacionContainer = document.getElementById('informacion-container2');

// Realizar solicitud (request) para obtener el JSON
fetch(rutaJSON)
  .then(response => response.json())
  .then(jsonArray => {
    // Crear un único contenedor div para todos los investigadores
    var contenedorInvestigadores = document.createElement('div');

    // Iterar sobre cada elemento del arreglo
    jsonArray.forEach(jsonInfo => {
      num++;

      // Crear elementos HTML para mostrar la información
      var elementoInfo = document.createElement('div'); //Creo que aun sigue que cada que aparezca un nuevo investigador se crea ale div
      var res = rutaImg + jsonInfo.imagen;

      elementoInfo.classList.add('card-body');
      elementoInfo.innerHTML = `
        
          <div class="card">
            <div class="card-header" id="subseccion2-${num}">
              <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#subcontenido2-${num}" aria-expanded="true">
                ${jsonInfo.nombre}
              </button>
            </div>

            <div id="subcontenido2-${num}" class="collapse" aria-labelledby="subseccion2-${num}" data-parent="#contenido2">
              <div class="card-body">
                <div class="row">
                  <div class="col-12 col-lg-3 col-md-3  text-center">
                    <img src="${res}" alt="Imagen de ${jsonInfo.nombre}" class="w-90">
                  </div>
                  <div class="col-12 col-lg-9 col-md-9 mb-3 text-justify">
                    <p>${jsonInfo.semblanza}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>`;

      // Agregar el contenido del elemento al contenedor temporal
      contenedorInvestigadores.innerHTML += elementoInfo.innerHTML;
    });

    // Agregar el contenedor temporal al contenedor principal
    informacionContainer.appendChild(contenedorInvestigadores);
  })
  .catch(error => console.error('Error al obtener el JSON:', error));
