//PEGANDO ELEMENTOS DO DOM
const formDados = document.querySelector('#formulario')
const divResultado = document.querySelector('#div-dados')

//CAPTURANDO O EVENTO SUBMIT DO FORMULÁRIO
formDados.addEventListener('submit', (evt) => {
    evt.preventDefault()

    const objFormDados = new FormData(formDados)

    let Num1 = parseFloat(objFormDados.get('Num1'))
    let Num2 = parseFloat(objFormDados.get('Num2'))
    let Num3 = parseFloat(objFormDados.get('Num3'))

    let media = (Num1 + Num2 + Num3) / 3

    console.log (media);

    divResultado.innerHTML = ` A média dos 3 números é: ${media.toFixed(2).replace('.', ',')}`

    formDados.reset()
})