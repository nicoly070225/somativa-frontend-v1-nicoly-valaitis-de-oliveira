//Missão 1
const saudacao = document.getElementById("saudacao-cinema");

const horaAtual = new Date().getHours();

if (horaAtual < 12) {
    saudacao.textContent = "Bom dia! Bem-vindo à Sessão Matinê!";
}
else if (horaAtual >= 12 && horaAtual < 18) {
    saudacao.textContent = "Boa tarde! Sessão da Tarde liberada!";
}
else {
    saudacao.textContent = "Boa noite! Prepare-se para a Sessão Coruja!";
}


//Missão 2

const bannerVip = document.getElementById("banner-vip");

bannerVip.addEventListener("mouseover", function() {
    bannerVip.classList.add("modo-vip");
});

bannerVip.addEventListener("mouseout", function() {
    bannerVip.classList.remove("modo-vip");
});


//Missão 3 
const qtdIngressos = document.getElementById("qtd-ingressos");
const totalPagar = document.getElementById("total-pagar");

qtdIngressos.addEventListener("input", function() {

    let quantidade = qtdIngressos.value;

    let total = quantidade * 35;

    totalPagar.textContent = total.toFixed(2);
});


//Missão 4
const btnPublicar = document.getElementById("btn-publicar");
const nomeFilme = document.getElementById("nome-filme");
const mural = document.getElementById("mural-criticas");

btnPublicar.addEventListener("click", function() {

    let filme = nomeFilme.value;

    if (filme !== "") {

        mural.innerHTML += 
        '<article class="card-critica">' +
        '<h3>🎬 Filme: ' + filme + ' ⭐</h3>' +
        '</article>';

        nomeFilme.value = "";

        nomeFilme.focus();
    }
});


//Missão 5

const btnApagar = document.getElementById("btn-apagar");

btnApagar.addEventListener("click", function() {

    mural.innerHTML = "";

    nomeFilme.focus();

})


