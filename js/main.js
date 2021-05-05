/* API de Studio Ghibli
https://ghibliapi.herokuapp.com/

ENDPOINTS

Películas
https://ghibliapi.herokuapp.com/films

Acceder a una película en particular
https://ghibliapi.herokuapp.com/films/0440483e-ca0e-4120-8c50-4c8cd9b965d6

Personajes
https://ghibliapi.herokuapp.com/people

Lugares que aparecen en las películas
https://ghibliapi.herokuapp.com/locations

 */

const catalogo = document.querySelector('#catalogo-peliculas');

fetch("https://ghibliapi.herokuapp.com/films")
  .then(function (response) {
    if(!response.ok) {
      throw Error(response.statusText);
    }
    return response.json();
  })
  .then(function (peliculas) {
    for( let i = 0; i < peliculas.length; i++) {
        let pelicula    = document.createElement('article');
        let titulo      = document.createElement('h2');
        let descripcion = document.createElement('p');
        catalogo.appendChild(pelicula);
        pelicula.appendChild(titulo);
        pelicula.appendChild(descripcion);
        
        titulo.innerText      = peliculas[i].title + ' - ' + 
        peliculas[i].release_date;

        descripcion.innerText = peliculas[i].description;
    }
  })
  .catch(function(error) {
    throw Error(error);
  })
