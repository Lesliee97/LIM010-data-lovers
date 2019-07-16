/* Manejo del DOM */
const mensaje = document.getElementById('mensaje');
const clave = document.getElementById('capturarcontraseña');
const usuario = document.getElementById('usuario');
const contraseña = document.getElementById('contraseña');
const contenedorPoke = document.getElementById('contenedorPoke');
const pokeData = POKEMON.pokemon;
const inicio = document.getElementById('inicio');


const login = document.getElementById('login');
const formularios = document.getElementById('formularios');


// formularios.classList.add('hide');

// Ingreso login 

let contar = 0;
let intentos = 2;

const elemento = document.getElementById('login');
const pantallaDos = document.getElementById('formularios');
pantallaDos.classList.add('hide');

clave.addEventListener('click', () => {
  const usuario = document.getElementById('usuario').value;
  const contraseña = document.getElementById('contraseña').value;

  if (usuario === 'LABORATORIA' && contraseña === 'LABORATORIA') {
    elemento.classList.add('hide');
    pantallaDos.classList.remove('hide');
    document.getElementById('cabeza').classList.add('hide');
    document.getElementById('contenedorPoke').classList.remove('hide');
    document.getElementById('atrapados').classList.remove('hide');
    document.getElementById('noatrapados').classList.remove('hide');
    document.getElementById('pokecuenta').classList.add('hide');
    document.getElementById('promediototal').classList.add('hide');
  }
  if (usuario !== 'LABORATORIA' && contraseña !== 'LABORATORIA') {
    contar++;

    contraseña.value = '';

    if (contar < intentos) {
      mensaje.innerHTML = 'Contraseña Incorrecta. Vuelva Intentarlo';
    } else {
      usuario.disabled = true;

      contraseña.disabled = true;

      mensaje.innerHTML = 'Ya utilizastes todos tus intentos';
    }
  } else {
    mensaje.innerHTML = 'Ingrese Contraseña';
  }
});

// FIN LOGIN

// Mostrar data
// let pokemon = pokeData
// let pokemon = arrOrderAZ
const mostrarPoke = (pokemon) => {
  let mostrar = ' ';
  for (let i = 0; i < pokemon.length; i++) {
    let llamar = `
        <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <h2 class="numeroPoke"> N° ${pokemon[i].num}</h2>
                    <img class="img-poke" src= "${pokemon[i].img}"/>
                    <h2 class="nombre">${pokemon[i].name}</h2>
                    <h4 class="tipo">Tipo: ${pokemon[i].type}</h4>
                    <h4 class="tipo">Frec. Aparición: ${pokemon[i].spawn_chance}</h4>
                </div>

                <div class="flip-card-back">
                  <div class="estilos">
                    <h2 class="nombre-back">${pokemon[i].name}</h2>
                    <h4 class="caracteristicas">Altura: ${pokemon[i].height}</h4>
                    <h4 class="caracteristicas">Peso: ${pokemon[i].weight}</h4>
                    <h4 class="caracteristicas">Huevos: ${pokemon[i].egg}</h4>
                    <h4 class="caracteristicas">Tiempo Aparición: ${pokemon[i].spawn_time}</h4>
                    <h4 class="caracteristicas">Debilidades: ${pokemon[i].weaknesses}</h4>
                                  
                </div>
                
                </div>
            </div>
        </div>`;

    mostrar += llamar;
  }

  return mostrar;
};

contenedorPoke.innerHTML = mostrarPoke(pokeData);

// ORDENAR DE LA A-Z Z-A

const ordenandoAbc = document.getElementById('ordenar-abc');
ordenandoAbc.addEventListener('change', () => {
  if (ordenandoAbc.value === '0' || ordenandoAbc.value === '1') {
    const pokeOrdenado = ordenarPoke(pokeData, ordenandoAbc.value);
    contenedorPoke.innerHTML = mostrarPoke(pokeOrdenado);
  }
});

// ORDEN DE FRECUENCIA DE APARICION

const ordenandoAsc = document.getElementById('ordenar-spawn');
ordenandoAsc.addEventListener('change', () => {
  if (ordenandoAsc.value === '2' || ordenandoAsc.value === '3') {
    const pokeOrdenadoAsc = ordenarAsc(pokeData, ordenandoAsc.value);
    contenedorPoke.innerHTML = mostrarPoke(pokeOrdenadoAsc);
  }
});
// TIPOS
const tipos = document.getElementById('tipos');
tipos.addEventListener('change', () => {
  const typePoke = funcionTipos(pokeData, tipos.value);
  contenedorPoke.innerHTML = mostrarPoke(typePoke);
});

// DEBILIDADES
const debilidadPoke = document.getElementById('debilidadp');
debilidadPoke.addEventListener('change', () =>{
  const weakPoke = funcionDebilidades(pokeData, debilidadPoke.value);
  contenedorPoke.innerHTML = mostrarPoke(weakPoke);
});

// SALIR
const casa = document.getElementById('salir');
casa.addEventListener('click', () => {
  login.classList.remove('hide');
  formularios.classList.add('hide');
  cabeza.classList.remove('hide');
  contenedorPoke.classList.add('hide');
  atrapados.classList.add('hide');
  noatrapados.classList.add('hide');
  pokecuenta.classList.add('hide');
  promediototal.classList.add('hide');
  usuario.value = '';
  contraseña.value = '';
});

// HUEVOS
const huevos = document.getElementById('huevos');
huevos.addEventListener('change', () => {
  atrapados.classList.add('hide');
  noatrapados.classList.add('hide');
 
  pokecuenta.classList.remove('hide');
  promediototal.classList.remove('hide');

  const totalHuevo = huevoEclo(pokeData, huevos.value);
  contenedorPoke.innerHTML = mostrarPoke(totalHuevo);
  // div span  inner.htm

  const totalCount = totalHuevo.length;
  pokecuenta.innerHTML = 'Resultados Encontrados: ' + totalCount;
  // html span promedio
  const promedio = totalCount / 151 * 100;
  promediototal.innerHTML = 'Porcentaje Total: ' + parseInt(promedio) + '%';
});

// ATRAPANDO Y NO ATRAPANDO POKEMONES

let contadorAtrapado = 0;
let contadorNoatrapado = 0;

// RECORRIENDO ARRAY
for (let i = 0; i < POKEMON.pokemon.length; i++) {
  if (POKEMON.pokemon[i].multipliers === null) {
    contadorNoatrapado++;
  } else {
    contadorAtrapado++;
  }
}

document.getElementById('atrapados').innerHTML = 'Pokemones Atrapados ' + ' ' + contadorAtrapado;
document.getElementById('noatrapados').innerHTML = 'Pokemones no atrapados ' + ' ' + contadorNoatrapado;