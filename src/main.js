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


formularios.classList.add('hide');

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

                    <div class="estilos">
                    <h4>Tipo: ${pokemon[i].type}</h4>
                    <h4>Altura: ${pokemon[i].height}</h4>
                    <h4>Peso: ${pokemon[i].weight}</h4>
                    <h4>Spaw: ${pokemon[i].avg_spawns}</h4>
                    <h4>Tiempo Aparición: ${pokemon[i].spawn_time}</h4>
                    <h4>Huevos: ${pokemon[i].egg}</h4>          
                    </div>
                </div>

                <div class="flip-card-back">
                <img class="imagen-logo" src="img/nombre.png"/>
                <img class="imagen-pokego" src="img/pokego.png"/>
                </div>
            </div>
        </div>`;

    mostrar += llamar;
  }

  return mostrar;
};

contenedorPoke.innerHTML = mostrarPoke(pokeData);

// ORDENAR DE LA A-Z Z-A

const ordenando = document.getElementById('ordenar-abc');
ordenando.addEventListener('change', () => {
  if (ordenando.value === '0' || ordenando.value === '1') {
    const pokeOrdenado = ordenarPoke(pokeData, ordenando.value);
    contenedorPoke.innerHTML = mostrarPoke(pokeOrdenado);
  }
  if (ordenando.value === '2' || ordenando.value === '3') {
    const pokeOrdenadoAsc = ordenarAsc(pokeData, ordenando.value);
    console.log(pokeOrdenadoAsc);
    contenedorPoke.innerHTML = mostrarPoke(pokeOrdenadoAsc);
  }
});

// TIPOS
const tipos = document.getElementById('tipos');
tipos.addEventListener('change', () => {
  const typePoke = funcionTipos(pokeData, tipos.value);
  contenedorPoke.innerHTML = mostrarPoke(typePoke);
});

// SALIR
const casa = document.getElementById('salir');
casa.addEventListener('click', () => {
  login.classList.remove('hide');
  formularios.classList.add('hide');
  usuario.value = '';
  contraseña.value = '';
});

// HUEVOS
const huevos = document.getElementById('huevos');
huevos.addEventListener('change', () => {
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
