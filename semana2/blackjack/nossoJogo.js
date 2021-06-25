/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
// MONTANDO O JOGO// 

console.log("Boas vindas ao jogo de Blackjack!"); 

if(confirm("Você quer iniciar uma nova rodada?")){ 
   console.log("Nova rodada!"); 

   let cartasJogador1 = []
   let cartasJogador2 = []
   
   cartasJogador1.push(comprarCarta())
   cartasJogador1.push(comprarCarta())
   
   
   cartasJogador2.push(comprarCarta())
   cartasJogador2.push(comprarCarta())
   
   let valorFinalCartasJogador1 = cartasJogador1[0].valor + cartasJogador1[1].valor
   let valorFinalCartasJogador2 = cartasJogador2[0].valor + cartasJogador2[1].valor
   
   console.log(`Usuário - cartas: ${cartasJogador1[0].texto} ${cartasJogador1[1].texto} - pontuação ${valorFinalCartasJogador1}`)
   
   console.log(`Usuário - cartas: ${cartasJogador2[0].texto} ${cartasJogador2[1].texto} - pontuação ${valorFinalCartasJogador2}`)
   
   if(valorFinalCartasJogador1 === valorFinalCartasJogador2) {
      console.log("Empate!")
   } else if(valorFinalCartasJogador1 > valorFinalCartasJogador2) {
      console.log("O Usuário ganhou!")
      } else {
         console.log("O Computador ganhou!")
      }

} else {
   console.log("O jogo acabou!"); 
}





