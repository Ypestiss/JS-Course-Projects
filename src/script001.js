const numplayer = document.querySelector('#playernb');
const number = document.querySelector('#newnumber');

let vitorias = '🟩';

function playnumb(){
   
    if(numplayer.value == ''){
        alert("Digite um valor burro!")
        return;
    }
    
    let ianumber = Math.floor((Math.random() * 10) + 1);


    if(numplayer.value != ianumber){
        alert(ianumber, "Você errou!");
        return;
    }

    if(numplayer.value == ianumber){
        alert('Parabens, você adivinhou o numero!');
        let retorno = document.createTextNode(vitorias);
        return number.appendChild(retorno);
    }
}
