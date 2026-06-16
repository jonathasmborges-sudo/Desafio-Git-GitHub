//PEGANDO ELEMENTOS DO DOM
const formDados = document.querySelector('#formulario')
const divResultado = document.querySelector('#div-dados')

//CAPTURANDO O EVENTO SUBMIT DO FORMULÁRIO
formDados.addEventListener('submit', (evt) => {
    evt.preventDefault()

    const objFormDados = new FormData(formDados)

    let distancia = parseFloat(objFormDados.get('distancia'))
    let consumo = parseFloat(objFormDados.get('consumo'))
    let preco = parseFloat(objFormDados.get('preco'))

    let quantidade = (distancia / consumo)
    let valor = (preco * quantidade)

    divResultado.innerHTML = `A quantidade de combustivel é de: ${quantidade.toFixed(2).replace('.', ',')}km, o valor a pagar é de: R$${(parseFloat(valor).toFixed(2)).replace('.', ',')}`


    formDados.reset()
})
