




 // cria as variáveis e já inicializa.

let scorejogador = 0;
let scorecpu = 0;
let scoreEmpate = 0;
let jogadas = 0;



// alterar o score para o valor das variáveis
document.getElementById("scorejogador").innerHTML = "<b>" + scorejogador + "</b>";
document.getElementById("scorecpu").innerHTML = "<b>" + scorecpu + "</b>";
document.getElementById("scoreEmpate").innerHTML = "<b>" + scoreEmpate + "</b>";


    // Aciona o botão jogar e verifica se a caixa de escolhas foi selecionada, dando um alerta.
function jogar() {
    document.getElementById("jogadas").innerHTML = jogadas;
    jogadas += 1;

    if (document.getElementById("pedra").checked == false &&
        document.getElementById("papel").checked == false &&
        document.getElementById("tesoura").checked == false) {
        alert("Selecione uma opções ( Pedra , Papel ou Tesoura )");
    }
    else {
        // Faz o sorteio e selecioona a imagem do computador.
        var sorteio = Math.floor(Math.random() * 3);
        switch (sorteio) {
            case 0:
                document.getElementById("pc").src = "img/Pc_pedra.png";
                break;
            case 1:
                document.getElementById("pc").src = "img/Pc_papel.png";
                break;
            case 2:
                document.getElementById("pc").src = "img/Pc_tesoura.png";
                break;
        }
        // Verifica o resultado , anuncia o vencedor e altera o placar

        if ((document.getElementById("pedra").checked == true && sorteio == 0) ||
            (document.getElementById("papel").checked == true && sorteio == 1) ||
            (document.getElementById("tesoura").checked == true && sorteio == 2)) {
            document.getElementById("placar").innerHTML = "Empate";
            scoreEmpate += 1;
            document.getElementById("scoreEmpate").innerHTML = "<b>" + scoreEmpate + "</b>";
        }
        else if ((document.getElementById("pedra").checked == true && sorteio == 2) ||
            (document.getElementById("papel").checked == true && sorteio == 0) ||
            (document.getElementById("tesoura").checked == true && sorteio == 1)) {

            scorejogador += 1;
            document.getElementById("scorejogador").innerHTML = "<b>" + scorejogador + "</b>";
            document.getElementById("placar").innerHTML = "Jogador Venceu";
        }
        else {
            scorecpu += 1;
            document.getElementById("placar").innerHTML = " O computador  Venceu"
            document.getElementById("scorecpu").innerHTML = "<b>" + scorecpu + "</b>";

        }
    }
}
          // reset da pontuação e volta o computador para aa sua imagem inicial.

function resetar() {
    document.getElementById("pc").src = "img/Pc_play.png";
    document.getElementById("placar").innerHTML = "";
    document.getElementById("scorejogador").innerHTML = "0";
    document.getElementById("scorecpu").innerHTML = "0";
    document.getElementById("scoreEmpate").innerHTML = "0";
    document.getElementById("jogadas").innerHTML = "0";
    scorejogador = 0;
    scorecpu = 0;
    scoreEmpate = 0;
    jogadas = 0;
    
   

}