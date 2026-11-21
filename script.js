// const { Button } = require("bootstrap");
function iniciarJogo() {
    document.getElementById("pontos1").textContent = 0;
    document.getElementById("pontos2").textContent = 0;
    const simbolos = [
        "IMG/PRISCILA.png",
        "IMG/DARWIN.png",
        "IMG/ERICK.png",
        "IMG/KEYCIR.png",
        "IMG/RAFAEL.png",
        "IMG/TAINÁ.png"
    ];

    const cartas = simbolos.concat(simbolos);

    function embaralhar(array) {
        return array.sort(() => Math.random() - 0.5);
    }

    const cartasEmbaralhadas = embaralhar([...cartas]);


    const tabuleiro = document.getElementById("tabuleiro");

    let primeiraCarta = null;
    let segundaCarta = null;
    let bloqueado = false;

    let pontos1 = 0;
    let pontos2 = 0;


    let jogadorAtual = 1;
    let paresEncontrados = 0;


    tabuleiro.innerHTML = "";
    cartasEmbaralhadas.forEach((simbolo, indice) => {
        const carta = document.createElement("button");

        carta.classList.add("carta");

        carta.innerHTML = `<img src="IMG/CLOSEFRIENDS.png" class="closeimg" alt="Close Friends">`;
       
        carta.dataset.simbolo = simbolo;
        carta.dataset.indice = indice;

        carta.addEventListener("click", function () {
            if (bloqueado) {
                return;
            }

            if (carta.classList.contains("virada")) {
                return
            }
            
             // carta.textContent = carta.dataset.simbolo;
            const imagem = document.createElement("img");
            imagem.src = carta.dataset.simbolo;
            imagem.alt = "Foto de amigo";

            carta.innerHTML = "";
            carta.appendChild(imagem);
            carta.classList.add("virada");

            if (primeiraCarta === null) {

                primeiraCarta = carta

            } else {

                segundaCarta = carta

                if (primeiraCarta.dataset.simbolo === segundaCarta.dataset.simbolo) {
                    primeiraCarta.classList.add("encontrada")
                    segundaCarta.classList.add("encontrada")

                    primeiraCarta.disabled = true;
                    segundaCarta.disabled = true;

                    paresEncontrados++;


                    if (jogadorAtual === 1) {
                        pontos1++;

                        document.getElementById("pontos1").textContent = pontos1
                    }
                    else {
                        pontos2++


                        document.getElementById("pontos2").textContent = pontos2
                    }


                    primeiraCarta = null;
                    segundaCarta = null;
                } else {
                    bloqueado = true;

                    setTimeout(function () {
                        primeiraCarta.innerHTML=`<img src="IMG/CLOSEFRIENDS.png" class="closeimg" alt="Close Friends">`;
                        segundaCarta.innerHTML=`<img src="IMG/CLOSEFRIENDS.png" class="closeimg" alt="Close Friends">`;

                        primeiraCarta.classList.remove("virada");
                        segundaCarta.classList.remove("virada");


                        primeiraCarta = null;
                        segundaCarta = null;

                        document.getElementById("message-time").textContent = `Vez do Jogador ${jogadorAtual}`;
                        document.getElementById("player1").classList.toggle("ativo", jogadorAtual === 1);

                        document.getElementById("player2").classList.toggle("ativo", jogadorAtual === 2);



                        jogadorAtual = jogadorAtual === 2 ? 1 : 2;

                        bloqueado = false;

                    }, 1000);


                    // console.log(primeiraCarta)

                }
            }

        })
        tabuleiro.appendChild(carta);


    })
}


