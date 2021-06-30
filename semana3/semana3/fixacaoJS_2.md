```function calculaPrecoTotal(quantidade) {
  // Escreva seu código aqui
let valorTotalMaca 
if(quantidade > 1 && quantidade < 12){
  valorTotalMaca = quantidade * 1.30
  }else if (quantidade >= 12){
    valorTotalMaca = quantidade * 1.00
  }
  return valorTotalMaca
}