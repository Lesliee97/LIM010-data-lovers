/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

// ORDENAR DE LA A-Z Z-A
const ordenarPoke = (data) => {
  return data.sort((objeto1, objeto2) => { // CALLBACKS ES UNA FUNCIÓN QUE SE PASA A OTRA FUNCIÓN COMO UN ARGUMENTO, QUE LUEGO SE INVOCA DENTRO DE LA FUNCIÓN EXTERNA PARA COMPLETAR ALGÚN TIPO DE RUTINA O ACCIÓN.
    if (objeto1.name > objeto2.name) { // FUNCION COMPRATIVA (COMPARATIVE FUNCTION)ASCENDENTE 
      return 1;
    } else {
      return -1;
    }
  });
};

const ordenarAsc = (data) => {
  return data.sort((numero, aparicion) => numero.avg_spawns - aparicion.avg_spawns);
};

// TIPOS
const funcionTipos = (data, type) => {
  const pokeType = data.filter((element) => {
    return (element.type[0] === type || element.type[1] === type);
  });
  return pokeType; // mi valor va sea devuelto cuando llame a la funcion
};

// DEBILIDADES
const funcionDebilidades = (data, debilidad) => {
  return data.filter((elemento) => {
    return elemento.weaknesses.indexOf(debilidad) > -1;
    // Si la cadena no existe devuelve -1 
    // > -1 evuelve el índice, dentro del objeto
  });
};

// HUEVOS 
const huevoEclo = (data, kilometro) => {
  return data.filter((elemet) => {
    return elemet.egg.indexOf(kilometro) > -1; // INDICE DE MI DATA QUE SE ESTA RECORRIENDO
  });
};

// DATA BUSCAR
const busco = (data, buscado) => {
  return data.filter(obj => obj.name.toLowerCase().startsWith(buscado));
};

window.ordenarPoke = ordenarPoke;
window.ordenarAsc = ordenarAsc;
window.funcionTipos = funcionTipos;
window.funcionDebilidades = funcionDebilidades;
window.huevoEclo = huevoEclo;
window.busco = busco;