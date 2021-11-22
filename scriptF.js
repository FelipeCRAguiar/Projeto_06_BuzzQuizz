function criarQuizz() {
    document.querySelector(".pagina-principal").classList.add("escondido")
    document.querySelector(".quizz-basico").classList.remove("escondido")
}
function criarPerguntas(clique) {
    let lista = document.querySelectorAll(".informacoes-basicas input")
    let titulo = lista[0].value
    let numPerguntas = parseInt(lista[2].value)
    let numNiveis = parseInt(lista[3].value)
    /*if (titulo.length < 20 || titulo.length > 65) {
        return alert("O titulo deve ter no minimo 20 caracteres e no maximo 65 caracteres")
    }
    if (numPerguntas < 3 || typeof(numPerguntas) !== "number" || isNaN(numPerguntas)) {
        return alert("O quizz tem que ter no minimo 3 perguntas")
    }
    if (numNiveis < 2 || typeof(numNiveis) !== "number" || isNaN(numNiveis)) {
        return alert("O quizz tem que ter no minimo 2 niveis")
    }
    try {
        new URL(lista[1].value)
    }
    catch {
        return alert("Sua URL não é valida")
    }*/
    document.querySelector(".quizz-basico").classList.add("escondido")
    document.querySelector(".pergunta-quizz").classList.remove("escondido")
}
function criarNiveis() {
    const hexadecimal = ["#","0","1","2","3","4","5","6","7","8","9","A","a","B","b","C","c","D","d","E","e","F","f"]
    let checagemHexadecimal = ""
    let listaPerguntas = document.querySelectorAll(".criar-pergunta")
    /*for (let i = 0; i<listaPerguntas.length;i++) {
        let listaPergunta = listaPerguntas[i].querySelectorAll(".pergunta input")
        let listaRespostaCerta = listaPerguntas[i].querySelectorAll(".resposta-correta input")
        let listaRespostaErrada = listaPerguntas[i].querySelectorAll(".respostas-incorretas input")
        if (listaPergunta[0].value.length < 20) {
            return alert("A pergunta deve ter no minimo 20 caracteres")
        }
        if (listaPergunta[1].value.length !== 7) {
            return alert("A cor da pergunta deve ser dado em formato Hexadecimal; Por exemplo: #FFFFFF ou #000000")
        }
        for (let i2 = 0; i2 < listaPergunta[1].value.length; i2++) {
            for (let i3 = 0; i3 < hexadecimal.length; i3++) {
                if (listaPergunta[1].value[i2] === hexadecimal[i3]) {
                    checagemHexadecimal += listaPergunta[1].value[i2]
                }
            }
        }
        if (checagemHexadecimal.length < 7) {
            return alert("A cor da pergunta deve ser dado em formato Hexadecimal; Por exemplo: #FFFFFF ou #000000")
        }
        if (listaRespostaCerta[0].value === "") {
            return alert("Sua resposta certa não pode estar vazia")
        }
        try {
            new URL(listaRespostaCerta[1].value)
        }
        catch {
            return alert("Sua URL não é valida")
        }
        if (((listaRespostaErrada[0].value === "" || listaRespostaErrada[1].value === "") && (listaRespostaErrada[0].value !== "" || listaRespostaErrada[1].value !== "")) || ((listaRespostaErrada[2].value === "" || listaRespostaErrada[3].value === "") && (listaRespostaErrada[2].value !== "" || listaRespostaErrada[3].value !== "")) || ((listaRespostaErrada[4].value === "" || listaRespostaErrada[5].value === "") && (listaRespostaErrada[4].value !== "" || listaRespostaErrada[5].value !== ""))) {
            return alert("Sua resposta errada precisa se uma resposta e de uma imagem")
        }
        if (listaRespostaErrada[0].value === "" && listaRespostaErrada[1].value === "" && listaRespostaErrada[2].value === "" && listaRespostaErrada[3].value === "" && listaRespostaErrada[4].value === "" && listaRespostaErrada[5].value === "") {
            return alert("Deve existir pelo menos 1 resposta errada")
        }
        for (let i4 = 0; i4< listaRespostaErrada.length; i4++) {
            if (i4 === (1 || 3 || 5)) {
                if (listaRespostaErrada[i4].value !== "") {
                    try {
                        new URL(listaRespostaErrada[i4].value)
                    }
                    catch {
                        return alert("Sua URL não é valida")
                    }
                }
            }
        }
    }
    if (document.querySelector(".placeholder-pergunta") !== null) {
        return alert("Você ainda tem perguntas não criadas")
    }*/
    document.querySelector(".pergunta-quizz").classList.add("escondido")
    document.querySelector(".niveis-quizz").classList.remove("escondido")
}
function finalizarQuizz() {
    let listaNiveis = document.querySelectorAll(".nivel")
    let listaPorcentagem = []
    let checagem0 = 0
    for (let i = 0; i<listaNiveis.length; i++) {
        let inputNivel = listaNiveis[i].querySelectorAll("input")
        if (inputNivel[0].value.length < 10) {
            return alert("O nivel deve ter no minimo 10 caracteres")
        }
        if (parseInt(inputNivel[1].value) < 0 || parseInt(inputNivel[1].value) > 100 || isNaN(parseInt(inputNivel[1].value))) {
            return alert("A porcentagem deve ser um numero entre 0 e 100")
        }
        listaPorcentagem.push(parseInt(inputNivel[1].value))
        try {
            new URL(inputNivel[2].value)
        }
        catch {
            return alert("Sua URL não é valida")
        }
        if (inputNivel[3].value.length < 30) {
            return alert("A descrição do nivel deve ter no minimo 30 caracteres")
        }
    }
    if (document.querySelector(".placeholder-nivel") !== null) {
        return alert("Você ainda tem niveis não criados")
    }
    for (let i2 = 0; i2<listaPorcentagem.length; i2++) {
        if (listaPorcentagem[i2] === 0) {
            checagem0 += 1
        }
    }
    if (checagem0 === 0) {
        return alert("Pelo menos uma das porcentagens tem que ser 0")
    }
    document.querySelector(".niveis-quizz").classList.add("escondido")
    document.querySelector(".quizz-criado").classList.remove("escondido")
}
function voltarHome() {
    document.querySelector(".quizz-criado").classList.add("escondido")
    document.querySelector(".pagina-principal").classList.remove("escondido")
}