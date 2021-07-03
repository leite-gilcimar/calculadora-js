describe("Suite de teste de adição", () => {

  const calculadora = require('../../src/js/calculadora.js');

  it("Deve retornar 5 para 2 e 3", () => {
    expect(calculadora.adicionar(2,3)).toEqual(5);
  });

  it("Deve retornar 6 para 9 e -3 no formato texto", () => {
    expect(calculadora.adicionar('9', '-3')).toEqual(6);
  });

  it("Deve retornar 4.5 para 1.5 e 3", () => {
    expect(calculadora.adicionar(1.5,3)).toEqual(4.5);
  });

  it("Deve retornar 0 quando o valor 1 não for numérico", () => {
    expect(calculadora.adicionar(undefined, 10)).toEqual(0);
  });

  it("Deve retornar 0 quando o valor 2 não for numérico", () => {
    expect(calculadora.adicionar(10, undefined)).toEqual(0);
  })

});