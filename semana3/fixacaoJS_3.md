```function calculaNota(ex, p1, p2) {
  // Escreva seu código aqui
  let calculoMedia = (ex * 1 + p1 * 2 + p2 * 3) / (1+2+3)
  let conceito
  if(calculoMedia >= 9){
    conceito = "A"
  }else if(calculoMedia< 9 && calculoMedia>= 7.5){
    conceito = "B"
  }else if(calculoMedia< 7.5 && calculoMedia>= 6){
    conceito = "C"
  }else{
    conceito = "D"
  }
  return conceito
  
}