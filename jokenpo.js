idade = prompt("quantos anos você tem?")
if (idade >= 18) {
    escolhaJogador = prompt("escolha uma jogada")
    //gerador de número
let escolhaMaquina  = Math.floor(Math.random() *3) + 1;
  
if(escolhaMaquina == 1){
    escolhaMaquina == "pedra"
  }else if (escolhaMaquina == 2){
    escolhaMaquina = "papel"
  }else if(escolhaMaquina == 3){
    escolhaMaquina = "tesoura"
  }
        if(escolhaJogador == escolhaMaquina){
            alert(`A Máquina jogou ${escolhaMaquina}\nVocês empataram`)

        }else if(escolhaJogador == "pedra" && escolhaMaquina == "tesoura"){
            alert(`A Máquina jogou ${escolhaMaquina}\nVitória do Jogador`)

        }else if(escolhaJogador == "pedra" && escolhaMaquina == "papel"){
            alert(`A Máquina jogou ${escolhaMaquina}\nVitória da máquina`)

        }else if(escolhaJogador == "tesoura" && escolhaMaquina == "pedra"){
            alert(`A Máquina jogou ${escolhaMaquina}\nVitória da máquina`)

        }else if(escolhaJogador == "tesoura" && escolhaMaquina == "papel"){
            alert(`A Máquina jogou ${escolhaMaquina}\nVitória do jogador`)

        }else if(escolhaJogador == "papel" && escolhaMaquina == "pedra"){
            alert(`A Máquina jogou ${escolhaMaquina}\nVitória do jogador`)

        }else if(escolhaJogador == "papel" && escolhaMaquina == "tesoura"){
            alert(`A Máquina jogou ${escolhaMaquina}\nVitória da máquina`)
            
        }

} else 
alert("Você não pode jogar")



