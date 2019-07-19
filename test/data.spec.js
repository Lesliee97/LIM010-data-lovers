global.window = global;
// global.assert = require('chai').assert;
require('../src/data');
require('./data.spec.js');

const dataPoke = [{
  'id': 1,
  'num': '001',
  'name': 'Bulbasaur',
  'img': 'http://www.serebii.net/pokemongo/pokemon/001.png',
  'type': [
    'Grass',
    'Poison'
  ],
  'height': '0.71 m',
  'weight': '6.9 kg',
  'candy': 'Bulbasaur Candy',
  'candy_count': 25,
  'egg': '2 km',
  'spawn_chance': 0.69,
  'avg_spawns': 69,
  'spawn_time': '20:00',
  'multipliers': [1.58],
  'weaknesses': [
    'Fire',
    'Ice',
    'Flying',
    'Psychic'
  ],
  'next_evolution': [{
    'num': '002',
    'name': 'Ivysaur'
  }, {
    'num': '003',
    'name': 'Venusaur'
  }]
}, {
  'id': 3,
  'num': '003',
  'name': 'Venusaur',
  'img': 'http://www.serebii.net/pokemongo/pokemon/003.png',
  'type': [
    'Grass',
    'Poison'
  ],
  'height': '2.01 m',
  'weight': '100.0 kg',
  'candy': 'Bulbasaur Candy',
  'egg': 'Not in Eggs',
  'spawn_chance': 0.017,
  'avg_spawns': 1.7,
  'spawn_time': '11:30',
  'multipliers': null,
  'weaknesses': [
    'Fire',
    'Ice',
    'Flying',
    'Psychic'
  ],
  'prev_evolution': [{
    'num': '001',
    'name': 'Bulbasaur'
  }, {
    'num': '002',
    'name': 'Ivysaur'
  }]
}, {
  'id': 2,
  'num': '002',
  'name': 'Ivysaur',
  'img': 'http://www.serebii.net/pokemongo/pokemon/002.png',
  'type': [
    'Grass',
    'Poison'
  ],
  'height': '0.99 m',
  'weight': '13.0 kg',
  'candy': 'Bulbasaur Candy',
  'candy_count': 100,
  'egg': 'Not in Eggs',
  'spawn_chance': 0.042,
  'avg_spawns': 4.2,
  'spawn_time': '07:00',
  'multipliers': [
    1.2,
    1.6
  ],
  'weaknesses': [
    'Fire',
    'Ice',
    'Flying',
    'Psychic'
  ],
  'prev_evolution': [{
    'num': '001',
    'name': 'Bulbasaur'
  }],
  'next_evolution': [{
    'num': '003',
    'name': 'Venusaur'
  }]
}, {
  'id': 4,
  'num': '004',
  'name': 'Charmander',
  'img': 'http://www.serebii.net/pokemongo/pokemon/004.png',
  'type': [
    'Fire'
  ],
  'height': '0.61 m',
  'weight': '8.5 kg',
  'candy': 'Charmander Candy',
  'candy_count': 25,
  'egg': '2 km',
  'spawn_chance': 0.253,
  'avg_spawns': 25.3,
  'spawn_time': '08:45',
  'multipliers': [1.65],
  'weaknesses': [
    'Water',
    'Ground',
    'Rock'
  ],
  'next_evolution': [{
    'num': '005',
    'name': 'Charmeleon'
  }, {
    'num': '006',
    'name': 'Charizard'
  }]
},
];


// describe('example', () => {
//   it('debería ser una función', () => {
//     expect(typeof example).toBe('function');
//   });
// });

describe('busco', () => {
  it('deberia retornar bulbasaur', () =>{
    expect(busco(dataPoke, 'bul')[0].name).toEqual('Bulbasaur');
  });
});

describe('ordenarAsc', () => {
  it('deberia retornar ascendente', () =>{
    expect(ordenarAsc(dataPoke)[0].name).toEqual('Venusaur');
  });
});

describe('ordenarPoke', () => {
  it('deberia retornar AZ', () =>{
    expect(ordenarPoke(dataPoke)[0].name).toEqual('Bulbasaur');
  });
});

describe('funcionTipos', () => {
  it('deberia mostrar los de tipos Grass', () =>{
    expect(funcionTipos(dataPoke, 'Grass')[0].type).toEqual(['Grass', 'Poison']);
  });
});

describe('funcionDebilidades', () => {
  it('deberia mostrar las debilidades Water', () =>{
    expect(funcionDebilidades(dataPoke, 'Water')[0].weaknesses).toEqual(['Water', 'Ground', 'Rock']);
  });
});

describe('huevoEclo', () => {
  it('deberia mostrar los pokemones que tiene huevos de 2km', () =>{
    expect(huevoEclo(dataPoke, '2 km')[0].egg).toEqual('2 km');
  });
});
