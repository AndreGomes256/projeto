function tocarMusica() {

    document
        .getElementById("musica")
        .play();
}

function mostrarSurpresa() {

    const msg =
        document.getElementById("mensagemSecreta");

    msg.style.display = "block";
}

const inicio =
new Date("2022-08-13T00:00:00");

function atualizarContador() {

    const agora = new Date();

    const diferenca =
        agora - inicio;

    const dias =
        Math.floor(
            diferenca /
            (1000*60*60*24)
        );

    const anos =
        Math.floor(dias / 365);

    const meses =
        Math.floor(
            (dias % 365) / 30
        );

    document
    .getElementById("contador")
    .innerHTML =
    `${anos} anos ❤️ ${meses} meses ❤️ ${dias} dias`;
}

atualizarContador();

setInterval(
atualizarContador,
1000
);
function criarCoracao() {

    const heart =
        document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤️";

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        Math.random() * 25 + 15 + "px";

    heart.style.animationDuration =
        Math.random() * 5 + 5 + "s";

    document
        .getElementById("hearts-container")
        .appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 10000);
}

setInterval(criarCoracao, 300);
function entrarSite(){

    document
        .getElementById("intro")
        .style.display = "none";

    document
        .getElementById("musica")
        .play();
}