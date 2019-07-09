/* Manejo del DOM */
const mensaje = document.getElementById("mensaje");
const clave = document.getElementById("capturarContraseña");
const usuario = document.getElementById("usuario");
const contraseña = document.getElementById("contraseña");
const contenedorPoke = document.getElementById("contenedorPoke");
const pokeData = POKEMON.pokemon;
const inicio = document.getElementById("inicio");


const login = document.getElementById("login");
const formularios = document.getElementById("formularios");


formularios.classList.add("hide");

//Ingreso login 
let contar = 0;
let intentos = 2;

const elemento = document.getElementById("login");
const pantallaDos = document.getElementById("formularios");
pantallaDos.classList.add("hide");

clave.addEventListener("click", () => {
    const usuario = document.getElementById('usuario').value;
    const contraseña = document.getElementById('contraseña').value;

    if (usuario === 'LABORATORIA' && contraseña === 'LABORATORIA') {
        elemento.classList.add("hide");
        pantallaDos.classList.remove("hide");
    }
    if (usuario !== 'LABORATORIA' && contraseña !== 'LABORATORIA') {
        contar++;

        contraseña.value = "";

        if (contar < intentos) {


            mensaje.innerHTML = "Contraseña Incorrecta. Vuelva Intentarlo";
        }
        else {
            contraseña.disabled = true;

            mensaje.innerHTML = "Ya utilizastes todos tus intentos";
        }
    }
    else {
        mensaje.innerHTML = "Ingrese Contraseña";

    }
});

//Mostrar data
// let pokemon = pokeData
// let pokemon = arrOrderAZ
const mostrarPoke = (pokemon) => {
    let mostrar = ' ';
    for (let i = 0; i < pokemon.length; i++) {
        let llamar = `
        <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
    <img class="img-poke" src= "${pokemon[i].img}"/>
    <h2>${pokemon[i].name}</h2>
    </div>
    <div class="flip-card-back">
    <h3> ${pokemon[i].avg_spawns} </h3>
    <h4>${pokemon[i].type}</h4>
    </div>
  </div>
</div>`;
        mostrar += llamar;
    }
    return mostrar;
};

contenedorPoke.innerHTML = mostrarPoke(pokeData);

const ordenando = document.getElementById('ordenar-abc');
ordenando.addEventListener('change',()=>{
    if(ordenando.value === '0' || ordenando.value ==='1'){
        const pokeOrdenado= ordenarPoke(pokeData,ordenando.value);
    contenedorPoke.innerHTML= mostrarPoke(pokeOrdenado);
    }
    if(ordenando.value === '2' || ordenando.value ==='3'){
        const pokeOrdenadoAsc= ordenarAsc(pokeData,ordenando.value);
        console.log(pokeOrdenadoAsc);
    contenedorPoke.innerHTML= mostrarPoke(pokeOrdenadoAsc);
    }
    
});
const tipos = document.getElementById('tipos');
tipos.addEventListener('change',() => {
    const typePoke = funcionTipos(pokeData,tipos.value);
    contenedorPoke.innerHTML=mostrarPoke(typePoke)
});


console.log('typePoke');
