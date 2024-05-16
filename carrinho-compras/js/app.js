function adicionar() {
    let precoTotalNumero = 0
    let produto = document.getElementById('produto').value;
    let quantidade = document.getElementById('quantidade').value;
    let NomeDoProduto = produto.split('-')[0];
    let valorDoProduto = produto.split('R$')[1];
    if (quantidade <= 0) {
        alert('insira uma quantidade valida')
        return
    }

    alert(NomeDoProduto);
    alert(valorDoProduto);
    alert(quantidade);
    let preco = quantidade * valorDoProduto
    alert(preco)
    let listaDeCarrinho = document.getElementById('lista-produtos')
    listaDeCarrinho.innerHTML = listaDeCarrinho.innerHTML + `<section class="carrinho__produtos" id="lista-produtos">
<section class="carrinho__produtos__produto">
  <span class="texto-azul">${quantidade}x</span> ${NomeDoProduto} <span class="texto-azul">R$${valorDoProduto}</span>
</section>`

    precoTotalNumero = precoTotalNumero + preco
    let precoTotal = document.getElementById('valor-total');
    precoTotal.textContent = `R$${precoTotalNumero}`
}

function limpar() {
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';
}
