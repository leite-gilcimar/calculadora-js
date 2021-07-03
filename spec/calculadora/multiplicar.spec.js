describe("Suite de testes multiplicação", () => {
  const calculadora = require('../../src/js/calculadora.js');

  it("Deve retornar 6 para 2 e 3", () => {
    expect(calculadora.multiplicar(2,3)).toEqual(6);
  });

  it("Deve retornar 6 para 2 e 3 para formato texto", () => {
    expect(calculadora.multiplicar('2','3')).toEqual(6);
  });

  it("Deve retornar 4.5 para 1.5 e 3", () => {
    expect(calculadora.multiplicar(1.5,3)).toEqual(4.5);
  });

  it("Deve retornar 0 para valor 1 inválido", () => {
    expect(calculadora.multiplicar(undefined,3)).toEqual(0);
  });

  it("Deve retornar 0 para valor 2 inválido", () => {
    expect(calculadora.multiplicar(3,undefined)).toEqual(0);
  });
});