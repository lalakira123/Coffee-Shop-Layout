function requisitarDados(){
    fetch("https://entregavel.polijrinternal.com/produtos")
    .then((resposta) => resposta.json())
    .then(colocarDadosTela)
    .catch((erro) => console.log(erro))
}

function colocarDadosTela(data) {
    console.log(data);
    const element = document.querySelector("main");
    for(let i = 0; i < data.length; i++){
        element.innerHTML += `
        <div class="produto">
            <div class="info">
                <h2>${data[i].nome}</h2>
                <p>Intensidade: <strong>${data[i].intensidade}</strong></p>
                <img src=${data[i].foto} alt=${data[i].nome}>
                <p class="detalhes">${data[i].descricao}</p>
            </div>
            <div class="fundo">
                <div class="preco">
                    <p>R$ ${data[i].preco}</p>
                    <h3><a>Comprar</a></h3>
                </div>
            </div>
        </div>`
    }
}

requisitarDados();