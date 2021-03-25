let numeroSecreto = parseInt(Math.random() * 10)
let botao = document.querySelector('button');



function verificaNumero()
{
    let chances = 3; 
    

    while(chances > 0)
    {
            let chute = document.querySelector('input').value;
            if(numeroSecreto == chute){
                alert('Acertou miseravi!')
                break
            }

            else if(chute > numeroSecreto){
               alert('Errou. O numero é menor')
                chances = chances - 1
                
            }
            
            else if(chute < numeroSecreto){
               alert('Errou. O numero é maior')
                chances = chances - 1
            }
    }
}

botao.onclick = verificaNumero;

