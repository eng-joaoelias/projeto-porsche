const paletaDeCores = window.document.querySelectorAll(".paleta-de-cores li span");
const opcoesRoda = window.document.querySelectorAll(".colecao-de-rodas li span");
const carroSelecionado = window.document.querySelector(".imagem-carro img");
let corEscolhida = 'br';
let rodaEscolhida = 'r1';

paletaDeCores.forEach(span => {
    span.addEventListener("click", () => {
        paletaDeCores.forEach(s => s.classList.remove("selecionado"));
        span.classList.add("selecionado");
        corEscolhida = span.classList[0];
        atualizaCarro(corEscolhida, rodaEscolhida);
    });
});

opcoesRoda.forEach(li => {
    li.addEventListener("click", () => {
        opcoesRoda.forEach(span => {
            span.classList.remove("selecionado");
        });
        li.classList.add("selecionado");
        rodaEscolhida = li.classList[0];
        atualizaCarro(corEscolhida, rodaEscolhida);
    });
});



function atualizaCarro(cor, roda) {
    carroSelecionado.setAttribute("src", `./assets/p-${cor}-${roda}.jpeg`);
}
