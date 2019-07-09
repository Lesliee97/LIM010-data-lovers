/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

const pokeDato = (pokemon) => {
  const poke = [];
  for (let i = 0; i < pokemon.length; i++);
  poke.push({
    id: pokemon[i].id,
    numero: pokemon[i].num,
    nombre: pokemon[i].name,
    img: pokemon[i].img,
    tipo: pokemon[i].type,
    altura: pokemon[i].height,
    peso: pokemon[i].weight,
    caramelos: pokemon[i].candy_count,
    huevo: pokemon[i].egg,
    aparicion: pokemon[i].avg_spawns,
    multipliers: pokemon[i].multipliers,
    debilidad: pokemon[i].weaknesses,
  });
  return poke;
};
const ordenarPoke =(data,order) =>{
const ordenarAZ = data.sort( (a,b) => {
  if(a.name> b.name) {
      return 1;
  }
  if (a.name < b.name){
      return -1;
  }
  return 0;

  });
if (order === '0'){
  return ordenarAZ ;
}
if (order === '1'){
  return ordenarAZ.reverse();
}
return  0;
};

const ordenarAsc=(data,order) =>{
  const ordenarMayorMenor= data.sort( (a,b) => {
    if(a.avg_spawns > b.avg_spawns) {
        return 1;
    }
    if (a.avg_spawns < b.avg_spawns){
        return -1;
    }
    return 0;
  
    });
  if (order === '2'){
    return ordenarMayorMenor;
  }
  if (order === '3'){
    return ordenarMayorMenor.reverse();
  }
  return  0;
  }; 

const funcionTipos = (data,type) => {
  const pokeType = data.filter((element)=> {
  return (element.type[0]=== type || element.type[1]===type)
  });
  return pokeType;
};
const funcionDebilidad =(data,weaknesses) =>{
  const pokeWeak = data.filter((element)=>{
    return (element.weaknesses[0]=== weaknesses)
  })
}
window.ordenarPoke = ordenarPoke;
window.ordenarAsc = ordenarAsc;
window.tiposPokemon = tiposPokemon;
