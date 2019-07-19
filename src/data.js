/* Manejo de data */

// ORDENAR DE LA A-Z Z-A
const ordenarPoke = (data) => {
  return data.sort((primerPokemon, segundoPokemon) => {
    if (primerPokemon.name < segundoPokemon.name) {
      return -1;
    } else {
      return 1;
    }
  });
};

// ORDENAR ORDEN NUMERICO SPAN
const ordenarAsc = (data) => {
  return data.sort((numero, aparicion) => {
    if (numero.avg_spawns < aparicion.avg_spawns) {
      return -1;
    } else {
      return 1;
    }
  });
};

// TIPOS
const funcionTipos = (data, tipos) => {
  return data.filter((element) => {
    return element.type.indexOf(tipos) > -1;
  });
};

// DEBILIDADES
const funcionDebilidades = (data, debilidad) => {
  return data.filter((elemento) => {
    return elemento.weaknesses.indexOf(debilidad) > -1;
  });
};

// HUEVOS
const huevoEclo = (data, kilometro) => {
  return data.filter((elemet) => {
    return elemet.egg.indexOf(kilometro) > -1;
  });
};

// DATA
const busco = (data, buscado) => {
  return data.filter(obj => obj.name.toLowerCase().startsWith(buscado));
};

window.ordenarPoke = ordenarPoke;
window.ordenarAsc = ordenarAsc;
window.funcionTipos = funcionTipos;
window.funcionDebilidades = funcionDebilidades;
window.huevoEclo = huevoEclo;
window.busco = busco;

// jest test
// const example = (str)=>{
//   const mayuscula = str.toUpperCase();
//   return mayuscula;
// };
// window.example = example;