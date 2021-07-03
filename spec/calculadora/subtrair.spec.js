describe("Suite de testes de subtração", () => {
  const calculadora = require('../../src/js/calculadora.js');

  it("Deve retornar 5 para 8 e 3", () => {
    expect(calculadora.subtrair(8,3)).toEqual(5);
  });

  it("Deve retornar 5 para 8 e 3 em formato text", () => {
    expect(calculadora.subtrair('8','3')).toEqual(5);
  });

  it("Deve retornar 4 para 5.5 e 1.5", () => {
    expect(calculadora.subtrair(5.5,1.5)).toEqual(4);
    expect(calculadora.subtrair('5.5','1.5')).toEqual(4);
  });

  it("Deve retornar 0 para o valor 1 inválido", () => {
    expect(calculadora.subtrair(undefined, 5)).toEqual(0);
  });

  it("Deve retornar 0 para o valor 2 inválido", () => {
    expect(calculadora.subtrair(5, undefined)).toEqual(0);
  });

});