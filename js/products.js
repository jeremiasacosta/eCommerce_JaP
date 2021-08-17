//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
//document.addEventListener("DOMContentLoaded", function (e) {

//});


function mostrarListaProductos(lista) {
    let contenidoHtml = "";
    for (let product of lista) {
    contenidoHtml += `
    <a href="category-info.html" class="list-group-item list-group-item-action">
        <div class="row">
            <div class="col-3">
                <img src="` + product.imgSrc + `" class="img-thumbnail">
            </div>
            <div class="col">
                <div class="d-flex w-100 justify-content-between"> 
                    <h3 class="mb-1">` + product.name + `</h3>
                    <small class="text-muted">` + product.soldCount + ` artículos</small>
                </div>
                <p class="mb-1">` +  product.cost + ` ` + product.currency + `</p>
                <p class="mb-1">Detalle: ` + product.description + `</p>
            </div>
        </div>
    </a>
    `
    }
   document.getElementById("containerProductos").innerHTML = contenidoHtml
}


function getJSONData(PRODUCTS_URL){
    var result = {};
    return fetch(PRODUCTS_URL)
      .then(repuesta => {
        if (repuesta.ok) {
          return repuesta.json();
        } else {
          throw Error(repuesta.statusText);
        }
      })
      .then(function (repuesta) {
        result.status = 'ok';
        result.data = repuesta;
        return result;
      })
      .catch(function (error) {
        result.status = 'error';
        result.data = error;
        return result;
      });
    }

    document.addEventListener("DOMContentLoaded", function(e){
        getJSONData(PRODUCTS_URL).then(function(resultObj){
            if (resultObj.status === "ok")
            {
                //lista = resultObj.data;
                mostrarListaProductos(resultObj.data);
            }
        });
    });