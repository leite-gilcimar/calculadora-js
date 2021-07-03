let Calculadora = {
  adicionar: (num1, num2) => { 
    if(isNaN(num1) || isNaN(num2)){
      return 0;
    }else{
      return Number(num1) + Number(num2); 
    }
  },
  subtrair: (num1, num2) => { return 0; },
  dividir: (num1, num2) => { return 0; },
  multiplicar: (num1, num2) => { return 0; } 
};

//Usado na função 'require' do NodeJS
if(typeof module !== undefined && typeof module.exports !== undefined){
  module.exports = Calculadora;
}