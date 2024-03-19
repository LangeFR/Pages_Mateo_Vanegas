let listaFavoritosJSON = [];
localStorage.setItem('listaFavoritosJSON', JSON.stringify(listaFavoritosJSON))

// Función para mostrar la animación de carga
function mostrarLoading() {
    const loader = document.getElementById('loader');
    loader.style.display = 'block'; 
  }
  
  // Función para ocultar la animación de carga
  function ocultarLoading() {
    const loader = document.getElementById('loader');
    loader.style.display = 'none';
  }

  function mostrarLoadingFav() {
    const loader = document.getElementById('loaderFav');
    loader.style.display = 'block'; 
  }
  
  // Función para ocultar la animación de carga
  function ocultarLoadingFav() {
    const loader = document.getElementById('loaderFav');
    loader.style.display = 'none';
  }
  
function htmlPlato(plato){
    let platoHTML = `   
                    <h3 class="nombre">${plato.strMeal ?? ""}</h3>
                    <p class="categoria">${plato.strCategory ?? ""}</p>  
                    <img id="imagenAleatorio" src="${plato.strMealThumb ?? ""}"/>
                    <h4 class="nombre">Ingredientes:</h3>
                    <ul id="listaIngredientes">  
                    `;
                
    for(let i = 1; i <= 20; i++) {
        if(plato['strMeasure' + i] !== null && plato['strMeasure' + i].trim() !== '') {
            platoHTML += `
                <li>
                    ${plato['strMeasure' + i] + " "}
            `
        }
        if(plato['strIngredient' + i] !== null && plato['strIngredient' + i].trim() !== '') {
            platoHTML += `
            
                
                    ${plato['strIngredient' + i]}
                </li>
            `
        }
    }

    platoHTML += `
                </ul>
                <h4 class="nombre">Receta:</h3>
                <p class="receta">${plato.strInstructions ?? ""}</p>
                <p class="idMeal">ID: ${plato.idMeal ?? ""}</p>
            
        
    `; 

    return platoHTML;
}

  // Función para traer el plato aleatorio
  async function traerPlatoAleatorio() {
    platoAleatorio.innerHTML = "";
    const btnFav = document.getElementById('botonFavorito');
    btnFav.style.display = 'none'; 

    mostrarLoading(); // Mostrar animación de carga antes de la solicitud    
    try {
        fetch('https://www.themealdb.com/api/json/v1/1/random.php')
            .then(response => response.json())
            .then(data => {
                
                const loader = document.getElementById('botonFavorito');
                loader.style.display = 'block'; 

                //Guardo plato
                localStorage.setItem('platoAleatorio', JSON.stringify(data.meals[0]));

                console.log(data.meals)
                platoAleatorio.innerHTML = "";
                
        
                platoAleatorio.innerHTML = htmlPlato(data.meals[0]);
                localStorage.setItem('idPlato', data.meals[0].idMeal);
                localStorage.setItem('nombrePlato', data.meals[0].strMeal);
                btnFav.style.display = 'block';

                ocultarLoading();
            })
        
    } catch (error) {
        console.error('Hubo un problema con la solicitud:', error);
        alert('Hubo un problema con la solicitud:', error)
    }
    

     
}

function agregarFavorito() {
    const idPlato = localStorage.getItem('idPlato');
    const nombrePlato = localStorage.getItem('nombrePlato');

    HTMLFavorito = `

    <li class="platosFavoritos" id="platoId${idPlato}">
        <h3 class="nombre">${nombrePlato}</h3>
        <h3 class="ID">ID: ${idPlato}</h3>
        <button onclick="mostrarDetalles(${idPlato})" class="botonDetalles">Ver Detalles</button>
        <button onclick="mostrarMenosDetalles(${idPlato})" class="botonMenosDetalles">Menos Detalles</button>
    
        </li>
    `;
    listaFavoritos.innerHTML += HTMLFavorito;

    /*
    loader
    */
    const loaderFav = document.getElementById('loaderFav');
    loaderFav.setAttribute('style', 'border: 4px solid #f3f3f3; border-radius: 50%; border-top: 4px solid #3498db; width: 30px; height: 30px; animation: spin 1s linear infinite; display: none;'); 
    //

    
    const plato = document.getElementById(`platoId${idPlato}`);        
    plato.innerHTML = IdFavoritoHTML;

    let favoritos = JSON.parse(localStorage.getItem('listaFavoritosJSON')) || []; 
                
        
    IdFavoritoHTML = htmlPlato(data.meals[0]);
    
    
    plato.innerHTML = IdFavoritoHTML;

    

    
    /* favoritoHTML = `
                    <li class="platosFavoritos" id="platoId${idPlato}">
                        <div id="loaderFav"></div>
                    </li>
                    `;
    
    listaFavoritos.innerHTML += favoritoHTML;

    const loaderFav = document.getElementById('loaderFav');
    loaderFav.setAttribute('style', 'border: 4px solid #f3f3f3; border-radius: 50%; border-top: 4px solid #3498db; width: 30px; height: 30px; animation: spin 1s linear infinite; display: none;'); 
    
    mostrarLoadingFav();

   

    try {
        fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + idPlato)
            .then(response => response.json())
            .then(data => {
                let favoritos = JSON.parse(localStorage.getItem('listaFavoritosJSON')) || []; 
                
        
                IdFavoritoHTML = htmlPlato(data.meals[0]);
                const plato = document.getElementById(`platoId${idPlato}`);
                
                plato.innerHTML = IdFavoritoHTML;

                    
                favoritos.push(data.meals[0]);
                localStorage.setItem('listaFavoritosJSON', JSON.stringify(favoritos)); 
                    
                console.log(JSON.parse(localStorage.getItem('listaFavoritosJSON')));
                setTimeout(() => {
                    ocultarLoadingFav();
                }, 300000);
            });
    }catch (error) {
        console.error('Hubo un problema con la solicitud:', error);
        alert('Hubo un problema con la solicitud:', error)
    } */

}

function mostrarDetalles(idPlato){
    
    
    //mostrarLoadingFav();

   

    try {
        fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + idPlato)
            .then(response => response.json())
            .then(data => {
                let favoritos = JSON.parse(localStorage.getItem('listaFavoritosJSON')) || []; 
                console.log("hola");
        
                IdFavoritoHTML = htmlPlato(data.meals[0]);
                const plato = document.getElementById(`platoId${idPlato}`);
                
                plato.innerHTML = IdFavoritoHTML;

                const btnDetalles = document.getElementsByClassName('botonDetalles');
                /* //
                btnDetalles.forEach(boton => {
                    boton.addEventListener('click', () => {
                      boton.textContent = "Menos Detalles";


                    });
                  });

                // */
                


                    
                favoritos.push(data.meals[0]);
                localStorage.setItem('listaFavoritosJSON', JSON.stringify(favoritos)); 
                    
                console.log(JSON.parse(localStorage.getItem('listaFavoritosJSON')));
                ocultarLoadingFav();
            });
    }catch (error) {
        console.error('Hubo un problema con la solicitud:', error);
        alert('Hubo un problema con la solicitud:', error)
    }
}








  
  
