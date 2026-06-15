//PEGANDO ELEMENTOS DO DOM
const formDados = document.querySelector('#formulario')
const divResultado = document.querySelector('#div-dados')

//CAPTURANDO O EVENTO SUBMIT DO FORMULÁRIO
formDados.addEventListener('submit', (evt) => {
    evt.preventDefault()

    const objFormDados = new FormData(formDados)

    let lado1 = parseFloat(objFormDados.get('lado1'))
    let lado2 = parseFloat(objFormDados.get('lado2'))
    let lado3 = parseFloat(objFormDados.get('lado3'))

    let tipo = ""

    if (lado1 == lado2 && lado2 == lado3) {
        tipo = "Equilátero"
    } else if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3) {
        tipo = "Isósceles"
    } else {
        tipo = "Escaleno"
    }

    divResultado.innerHTML = `
        Tipo do triângulo: ${tipo}
    `

    formDados.reset()
})