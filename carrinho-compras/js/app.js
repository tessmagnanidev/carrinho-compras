let totalGeral = 0;

// Quando a página carregar, limpa o carrinho inicial do HTML
window.onload = function () {
    limpar();
};

function adicionar() {
    // Recupera os valores do formulário
    let produtoSelecionado = document.getElementById('produto').value;
    let quantidade = parseInt(document.getElementById('quantidade').value);

    // Validação da quantidade
    if (isNaN(quantidade) || quantidade <= 0) {
        alert("Por favor, insira uma quantidade válida (maior que zero).");
        return;
    }

    // Validação do produto selecionado
    if (!produtoSelecionado.includes(' - R$')) {
        alert("Selecione um produto válido.");
        return;
    }

    // Quebra a string para pegar nome e valor
    let nomeProduto = produtoSelecionado.split(' - ')[0];
    let valorUnitario = parseFloat(produtoSelecionado.split('R$')[1]);

    // Calcula o preço total
    let preco = quantidade * valorUnitario;

    // Atualiza a lista de produtos no carrinho
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML += `<section class="carrinho__produtos__produto">
        <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
    </section>`;

    // Atualiza o valor total
    totalGeral += preco;
    document.getElementById('valor-total').textContent = `R$ ${totalGeral}`;

    // Limpa o campo de quantidade
    document.getElementById('quantidade').value = '';
}

function limpar() {
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';
}