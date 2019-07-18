/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

// TRAER LOS DATOS DE LA DATA POKEMON
// const pokeDato = (pokemon) => {
//   const poke = [];
//   for (let i = 0; i < pokemon.length; i++) ; // RESULTADO DE LOS 151 POKEMOS
//   poke.push({
//     id: pokemon[i].id,
//     numero: pokemon[i].num,
//     nombre: pokemon[i].name,
//     img: pokemon[i].img,
//     tipo: pokemon[i].type,
//     altura: pokemon[i].height,
//     peso: pokemon[i].weight,
//     caramelos: pokemon[i].candy_count,
//     huevo: pokemon[i].egg,
//     aparicion: pokemon[i].avg_spawns,
//     multipliers: pokemon[i].multipliers,
//     debilidad: pokemon[i].weaknesses,
//   });
//   return poke;
// };

// ORDENAR DE LA A-Z Z-A
const ordenarPoke = (data, order) => {
  const ordenarAZ = data.sort((objeto1, objeto2) => {
    if (objeto1.name > objeto2.name) {
      return 1;
    }

    if (objeto1.name < objeto2.name) {
      return -1;
    }
    return 0;
  });

  if (order === '0') {
    return ordenarAZ;
  }
  if (order === '1') {
    return ordenarAZ.reverse();
  }
  return 0;
};

// ORDENAR ORDEN NUMERICO SPAN
const ordenarAsc = (data, order) => {
  const ordenarMayorMenor = data.sort((numero, aparicion) => {
    if (numero.avg_spawns > aparicion.avg_spawns) {
      return 1;
    }
    if (numero.avg_spawns < aparicion.avg_spawns) {
      return -1;
    }
    return 0;
  });

  if (order === '2') {
    return ordenarMayorMenor;
  }
  if (order === '3') {
    return ordenarMayorMenor.reverse();
  }
  return 0;
};

// TIPOS
const funcionTipos = (data, type) => {
  const pokeType = data.filter((element) => {
    return (element.type[0] === type || element.type[1] === type);
  });
  return pokeType;
};

// DEBILIDADES
const funcionDebilidades = (data, debilidad)=>{
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