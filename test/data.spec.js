global.window = global;
require('../src/data');
require('./data.spec.js');


describe('validarEmail', () => {
  it('debería ser una función', () => {
    expect(typeof global.validarEmail).toEqual('function');
  });
});

const arr = ['blanco', 'negro', 'rosado'];
const arr2 = ['blanco', 'negro', 'rosado'];
const arr3 = [
  {text: 'blanco'}, 
  {text: 'negro'}, 
  {text: 'rosado'}
];

describe('eliminarObj', () => {
  it('debería ser una funcion', () => {
    expect(typeof global.eliminarObj).toEqual('function');
  });
  it('deberia eliminar el elemento de un array', () => {
    expect(global.eliminarObj(arr2, 2)).toEqual(['blanco', 'negro']);
  });
});
const ele = 'morado';
const ele2 = [{}, {value: 'morado'}];

describe('savePost', () => {
  it('debería ser una funcion', () => {
    expect(typeof global.savePost).toEqual('function');
  });
  it('debería retornar un array', () => {
    expect(savePost(arr, ele)).toEqual(['blanco', 'negro', 'rosado', 'morado']);
  });
});

describe('editPost', () => {
  it('debería ser una funcion', () => {
    expect(typeof global.editPost).toEqual('function');
  });
  it('debería modificar un elemento array', () => {
    expect(editPost(arr3, 1, ele2)).toEqual([{text: 'blanco'}, {text: 'morado'}, {text: 'rosado'}]);
  });
});
