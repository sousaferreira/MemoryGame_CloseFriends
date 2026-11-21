// const { Button } = require("bootstrap");

const simbolos = [
    "🐱",
    "🐶",
    "🐼",
    "🦊",
    "🐸",
    "🐵",
    "🐰",
    "🐻"
];

const cartas = simbolos.concat(simbolos);

function embaralhar(array) {
    return array.sort(() => Math.random() - 0.5);
}

const cartasEmbaralhadas = embaralhar([...cartas]);

// console.log(cartasEmbaralhadas)

const tabuleiro = document.getElementById("tabuleiro");

cartasEmbaralhadas.forEach((simbolo, indice)=>{
    const carta = document.createElement("button");

    carta.classList.add("carta");

    carta.textContent = "?";

    carta.dataset.simbolo = simbolo;
    carta.dataset.indice = indice;

    tabuleiro.appendChild(carta);
})