global.window = global;
// global.assert = require('chai').assert;
require('../src/data');
require('./data.spec.js');

const dataPoke = [
  {
    'id': 2,
    'num': '002',
    'name': 'Ivysaur',
    'type': [
      'Grass',
      'Poison'
    ],
    'egg': 'Not in Eggs',
    'avg_spawns': 4.2,
    'weaknesses': [
      'Fire',
      'Ice',
      'Flying',
      'Psychic'
    ]
  },
  {
    'id': 4,
    'num': '004',
    'name': 'Charmander',
    'type': [
      'Fire'
    ],
    'egg': '2 km',
    'avg_spawns': 25.3,
    'weaknesses': [
      'Water',
      'Ground',
      'Rock'
    ],
  }, {
    'id': 1,
    'num': '001',
    'name': 'Bulbasaur',
    'img': 'http://www.serebii.net/pokemongo/pokemon/001.png',
    'type': [
      'Grass',
      'Poison'
    ],
    'egg': '2 km',
    'avg_spawns': 69,
    'weaknesses': [
      'Fire',
      'Ice',
      'Flying',
      'Psychic'
    ]
  }, {
    'id': 3,
    'num': '003',
    'name': 'Venusaur',
    'type': [
      'Grass',
      'Poison'
    ],
    'egg': 'Not in Eggs',
    'avg_spawns': 1.7,
    'weaknesses': [
      'Fire',
      'Ice',
      'Flying',
      'Psychic'
    ],
  },
];


describe('busco', () => {
  it('deberia retornar bulbasaur', () => {
    expect(busco(dataPoke, 'bul')[0].name).toEqual('Bulbasaur');
  });
});

describe('ordenarAsc', () => {
  it('deberia retornar ascendente', () => {
    expect(ordenarAsc(dataPoke, '2')[0].name).toEqual('Venusaur');
  });
});

describe('ordenarPoke', () => {
  it('deberia retornar AZ', () => {
    expect(ordenarPoke(dataPoke, '0')[0].name).toEqual('Bulbasaur');
  });
});

describe('ordenarPoke', () => {
  it('deberia retornar ZA', () => {
    expect(ordenarPoke(dataPoke, '1')[0].name).toEqual('Bulbasaur');
  });
});

describe('funcionTipos', () => {
  it('deberia mostrar los de tipos Grass', () => {
    expect(funcionTipos(dataPoke, 'Grass')[0].type).toEqual(['Grass', 'Poison']);
  });
});

describe('funcionDebilidades', () => {
  it('deberia mostrar las debilidades Water', () => {
    expect(funcionDebilidades(dataPoke, 'Water')[0].weaknesses).toEqual(['Water', 'Ground', 'Rock']);
  });
});

describe('huevoEclo', () => {
  it('deberia mostrar los pokemones que tiene huevos de 2km', () => {
    expect(huevoEclo(dataPoke, '2 km')[0].egg).toEqual('2 km');
  });
});
