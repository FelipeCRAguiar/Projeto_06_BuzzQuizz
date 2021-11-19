function criarQuizz() {
    document.querySelector(".pagina-principal").classList.add("escondido")
    document.querySelector(".quizz-basico").classList.remove("escondido")
}
function criarPerguntas() {
    let lista = document.querySelectorAll(".informacoes-basicas input")
    let titulo = lista[0].value
    let numPerguntas = parseInt(lista[2].value)
    let numNiveis = parseInt(lista[3].value)
    if (titulo.length < 20 || titulo.length > 65) {
        console.log(titulo)
        return alert("O titulo deve ter no minimo 20 caracteres e no maximo 65 caracteres")
    }
    if (numPerguntas < 3 || typeof(numPerguntas) !== "number" || isNaN(numPerguntas)) {
        console.log(lista[2].value)
        return alert("O quizz tem que ter no minimo 3 perguntas")
    }
    if (numNiveis < 2 || typeof(numNiveis) !== "number" || isNaN(numNiveis)) {
        console.log(lista[3].value)
        return alert("O quizz tem que ter no minimo 2 niveis")
    }
    document.querySelector(".quizz-basico").classList.add("escondido")
    document.querySelector(".pergunta-quizz").classList.remove("escondido")
}
function criarNiveis() {
    document.querySelector(".pergunta-quizz").classList.add("escondido")
    document.querySelector(".niveis-quizz").classList.remove("escondido")
}
function finalizarQuizz() {
    document.querySelector(".niveis-quizz").classList.add("escondido")
    document.querySelector(".quizz-criado").classList.remove("escondido")
}
function voltarHome() {
    document.querySelector(".quizz-criado").classList.add("escondido")
    document.querySelector(".pagina-principal").classList.remove("escondido")
}