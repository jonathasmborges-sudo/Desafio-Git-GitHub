//PEGANDO ELEMENTOS DO DOM
const formDados = document.querySelector('#formulario')
const divResultado = document.querySelector('#div-dados')

//CAPTURANDO O EVENTO SUBMIT DO FORMULÁRIO
formDados.addEventListener('submit', (evt) => {
    evt.preventDefault()

    const objFormDados = new FormData(formDados)

    let aluno = objFormDados.get('aluno')
    let nota1 = parseFloat(objFormDados.get('nota1'))
    let nota2 = parseFloat(objFormDados.get('nota2'))
    let nota3 = parseFloat(objFormDados.get('nota3'))

    let media = (nota1 + nota2 + nota3) / 3

    let situacao = ""

    if (media >= 6) {
        situacao = "Aprovado"
    } else {
        situacao = "Reprovado"
    }

    divResultado.innerHTML = `
        Aluno: ${aluno} <br>
        Média: ${media.toFixed(2).replace('.', ',')} <br>
        Situação: ${situacao}
    `

    formDados.reset()
})