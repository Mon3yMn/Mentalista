let numeroSecreto = parseInt(Math.random() * 10)
let botao = document.querySelector("button");
let chances = 3;

function verificaNumero() {
let chute = document.querySelector("input").value;

  if (numeroSecreto == chute) {
    alert("Acertou miseravi!");
    return;
  } else if (chute > numeroSecreto) {
    alert("Errou. O numero é menor");
    chances = chances - 1;
  } else {
    alert("Errou. O numero é maior"); 
    chances = chances - 1;
  } 
  
  if(chances == 0) {
    alert("Suas chances acabaram ):"); 
    location.reload();
  }
  console.log(chances);
  return;
}
