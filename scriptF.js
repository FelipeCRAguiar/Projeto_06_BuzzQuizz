let quizzUsuario = {title: "", image: "", questions: [], levels: []}
let listaID = []
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
    }
    quizzUsuario["title"] = titulo
    quizzUsuario["image"] = lista[1].value
    document.querySelector(".pergunta-quizz").innerHTML = `
    <p>Crie suas perguntas</p>
        <div class="criar-pergunta">
            <div class="pergunta">
                <p>Pergunta 1</p>
                <input placeholder="Texto da pergunta"> <br>
                <input placeholder="Cor de fundo da pergunta">
            </div>
            <div class="resposta-correta">
                <p>Resposta Correta</p>
                <input placeholder="Resposta correta"> <br>
                <input placeholder="URL da imagem">
            </div>
            <div class="respostas-incorretas">
                <p>Respostas Incorretas</p>
                <div>
                    <input placeholder="Resposta incorreta 1"> <br>
                    <input placeholder="URL da imagem 1">
                </div>
                <div>
                    <input placeholder="Resposta incorreta 2"> <br>
                    <input placeholder="URL da imagem 2">
                </div>
                <div>
                    <input placeholder="Resposta incorreta 3"> <br>
                    <input placeholder="URL da imagem 3">
                </div>
            </div>
        </div>
    `
    for (let i = 1; i<numPerguntas;i++) {
        document.querySelector(".pergunta-quizz").innerHTML += `
        <div class="placeholder-pergunta">
            <p>Pergunta ${i+1}</p><ion-icon name="create-outline" onclick="abrirPergunta(this)"></ion-icon>
        </div>
        `
    }
    document.querySelector(".pergunta-quizz").innerHTML += '<button onclick="criarNiveis()">Prosseguir para criar níveis</button>'
    document.querySelector(".niveis-quizz .alinharQuiz").innerHTML = `
    <p class="títuloPagina">Agora, decida os níveis</p>
    <div class="nivel">
        <topo>
            Nível 1
        </topo>
        <input type="text" placeholder="Título do nível">
        <input type="text" placeholder="% de acerto mínima">
        <input type="text" placeholder="URL da imagem do nível">
        <input type="text" placeholder="Descrição do nível">
    </div>
    `
    for (let i3 = 1; i3<numNiveis; i3++) {
        document.querySelector(".niveis-quizz .alinharQuiz").innerHTML += `
        <div class="placeholder-nivel">
            <p>Nível ${i3+1}</p><ion-icon name="create-outline" onclick="abrirNivel(this)"></ion-icon>
        </div>
        `
    }
    document.querySelector(".niveis-quizz .alinharQuiz").innerHTML += '<button class="finalizarQuizz" onclick="finalizarQuizz()">Finalizar Quizz</button>'
    for (let i2 = 0; i2<lista.length; i2++) {
        lista[i2].value = ""
    }
    document.querySelector(".quizz-basico").classList.add("escondido")
    document.querySelector(".pergunta-quizz").classList.remove("escondido")
}
function criarNiveis() {
    let listaPerguntasFinal = []
    const hexadecimal = ["#","0","1","2","3","4","5","6","7","8","9","A","a","B","b","C","c","D","d","E","e","F","f"]
    let checagemHexadecimal = ""
    let listaPerguntas = document.querySelectorAll(".criar-pergunta")
    for (let i6 = 0; i6<listaPerguntas.length;i6++) {
        listaPerguntasFinal.push({})
    }
    for (let i = 0; i<listaPerguntas.length;i++) {
        let listaRespostasFinal = []
        let listaPergunta = listaPerguntas[i].querySelectorAll(".pergunta input")
        let listaRespostaCerta = listaPerguntas[i].querySelectorAll(".resposta-correta input")
        let listaRespostaErrada = listaPerguntas[i].querySelectorAll(".respostas-incorretas input")
        if (listaPergunta[0].value.length < 20) {
            return alert("A pergunta deve ter no minimo 20 caracteres")
        }
        listaPerguntasFinal[i]["title"] = listaPergunta[0].value
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
        listaPerguntasFinal[i]["color"] = listaPergunta[1].value
        if (listaRespostaCerta[0].value === "") {
            return alert("Sua resposta certa não pode estar vazia")
        }
        listaRespostasFinal.push({})
        listaRespostasFinal[0]["text"] = listaRespostaCerta[0].value
        try {
            new URL(listaRespostaCerta[1].value)
        }
        catch {
            return alert("Sua URL não é valida")
        }
        listaRespostasFinal[0]["image"] = listaRespostaCerta[1].value
        listaRespostasFinal[0]["isCorrectAnswer"] = true
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
        for (let i5 = 0; i5<listaRespostaErrada.length; i5++) {
            if (i5 === 0 || i5 === 2 || i5 === 4) {
                if (listaRespostaErrada[i5].value !== "") {
                    listaRespostasFinal.push({})
                    listaRespostasFinal[listaRespostasFinal.length - 1]["text"] = listaRespostaErrada[i5].value
                    listaRespostasFinal[listaRespostasFinal.length - 1]["image"] = listaRespostaErrada[i5 + 1].value
                    listaRespostasFinal[listaRespostasFinal.length - 1]["isCorrectAnswer"] = false
                }
            }
        }
        listaPerguntasFinal[i]["answers"] = listaRespostasFinal
    }
    if (document.querySelector(".placeholder-pergunta") !== null) {
        return alert("Você ainda tem perguntas não criadas")
    }
    let lista = document.querySelectorAll(".criar-pergunta input")
    quizzUsuario["questions"] = listaPerguntasFinal
    for (let i7 = 0; i7<lista.length; i7++) {
        lista[i7].value = ""
    }
    document.querySelector(".pergunta-quizz").classList.add("escondido")
    document.querySelector(".niveis-quizz").classList.remove("escondido")
}
function finalizarQuizz() {
    let listaNiveisFinal = []
    let listaNiveis = document.querySelectorAll(".nivel")
    for (let i3 = 0;  i3<listaNiveis.length; i3++) {
        listaNiveisFinal.push({})
    }
    let listaPorcentagem = []
    let checagem0 = 0
    for (let i = 0; i<listaNiveis.length; i++) {
        let inputNivel = listaNiveis[i].querySelectorAll("input")
        if (inputNivel[0].value.length < 10) {
            return alert("O nivel deve ter no minimo 10 caracteres")
        }
        listaNiveisFinal[i]["title"] = inputNivel[0].value
        if (parseInt(inputNivel[1].value) < 0 || parseInt(inputNivel[1].value) > 100 || isNaN(parseInt(inputNivel[1].value))) {
            return alert("A porcentagem deve ser um numero entre 0 e 100")
        }
        listaNiveisFinal[i]["minValue"] = parseInt(inputNivel[1].value)
        listaPorcentagem.push(parseInt(inputNivel[1].value))
        try {
            new URL(inputNivel[2].value)
        }
        catch {
            return alert("Sua URL não é valida")
        }
        listaNiveisFinal[i]["image"] = inputNivel[2].value
        if (inputNivel[3].value.length < 30) {
            return alert("A descrição do nivel deve ter no minimo 30 caracteres")
        }
        listaNiveisFinal[i]["text"] = inputNivel[3].value
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
    let lista = document.querySelectorAll(".nivel input")
    for (let i4 = 0; i4<lista.length; i4++) {
        lista[i4].value = ""
    }
    quizzUsuario["levels"] = listaNiveisFinal
    let requisicao = axios.post("https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes", quizzUsuario)
    requisicao.then(salvarLocal)
    requisicao.catch(erroCriacao)
}
function voltarHome() {
    document.querySelector(".quizz-criado").classList.add("escondido")
    document.querySelector(".pagina-principal").classList.remove("escondido")
}
function abrirPergunta(placeholder) {
    placeholder.parentElement.classList.add("criar-pergunta")
    placeholder.parentElement.classList.remove("placeholder-pergunta")
    placeholder.parentElement.innerHTML = `
    <div class="pergunta">
        <p>${placeholder.parentElement.querySelector("p").innerHTML}</p>
        <input placeholder="Texto da pergunta"> <br>
        <input placeholder="Cor de fundo da pergunta">
    </div>
    <div class="resposta-correta">
        <p>Resposta Correta</p>
        <input placeholder="Resposta correta"> <br>
        <input placeholder="URL da imagem">
    </div>
    <div class="respostas-incorretas">
        <p>Respostas Incorretas</p>
        <div>
            <input placeholder="Resposta incorreta 1"> <br>
            <input placeholder="URL da imagem 1">
        </div>
        <div>
            <input placeholder="Resposta incorreta 2"> <br>
            <input placeholder="URL da imagem 2">
        </div>
        <div>
            <input placeholder="Resposta incorreta 3"> <br>
            <input placeholder="URL da imagem 3">
        </div>
    </div>
    `
}
function abrirNivel(placeholder) {
    placeholder.parentElement.classList.add("nivel")
    placeholder.parentElement.classList.remove("placeholder-nivel")
    placeholder.parentElement.innerHTML = `
    <topo>
        ${placeholder.parentElement.querySelector("p").innerHTML}
    </topo>
    <input type="text" placeholder="Título do nível">
    <input type="text" placeholder="% de acerto mínima">
    <input type="text" placeholder="URL da imagem do nível">
    <input type="text" placeholder="Descrição do nível">
    `
}
function salvarLocal(resposta) {
    localStorage.setItem(resposta.data[key],resposta.data[id])
    listaID.push(resposta.data[id])
    document.querySelector(".previa-quizz div").innerHTML = `<img src=${resposta.data[image]}>`
    document.querySelector(".niveis-quizz").classList.add("escondido")
    document.querySelector(".quizz-criado").classList.remove("escondido")
}
function erroCriacao(erro) {
    alert("Opa! Tivemos algum erro, recarregando a pagina...")
    window.location.reload()
}
function voltarHomeQuizz() {
    document.querySelector(".exibir-quizz").classList.add("escondido")
    document.querySelector(".pagina-principal").classList.remove("escondido")
}
function escolherQuizServidor(quizzEscolhido) {
    const idQuizz = quizzEscolhido.querySelector("p").innerHTML
    const quizz = axios.get(`https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes/${idQuizz}`)
    quizz.then(exibirQuizz)
}
function exibirQuizz(resposta) {
    let listaRespostas = []
    const quizz = resposta.data
    document.querySelector(".imagem-principal").innerHTML = `
    <img src="${quizz["image"]}">
    <span>${quizz["title"]}</span>
    `
    const div = document.querySelector(".alinhar-quizz")
    for (let i=0; i<quizz["questions"].length; i++) {
        let listaRespostasInicio = quizz["questions"][i]["answers"]
        listaRespostasInicio = listaRespostasInicio.sort(embaralhar)
        listaRespostas.push(listaRespostasInicio)
        div.innerHTML += `
        <div class="pergunta-quizz-exibicao">
            <div class="titulo-pergunta-quiz">
                <span>${quizz["questions"][i]["title"]}</span>
            </div>
            <div class="lista-respostas-exibicao-quizz">
            </div>
        </div>
        `
    }
    let listaRespostaFinal = document.querySelectorAll(".lista-respostas-exibicao-quizz")
    for (let i3=0; i3<listaRespostas.length; i3++) {
        for (let i4=0; i4<listaRespostas[i3].length; i4++) {
            listaRespostaFinal[i3].innerHTML += `
                <div class="respostas-exibicao-quizz" onclick="selecionarResposta(this)">
                    <img src="${listaRespostas[i3][i4]["image"]}">
                    <span>${listaRespostas[i3][i4]["text"]}</span>
                    <p class="escondido">${listaRespostas[i3][i4]["isCorrectAnswer"]}</p>
                </div>
            `
        }
    }
    listaRespostasExibidas = document.querySelectorAll(".titulo-pergunta-quizz")
    for (let i2=0; i2<listaRespostasExibidas.length; i2++) {
        listaRespostasExibidas[i2].style.background = quizz["questions"][i2]["color"]
    }
    document.querySelector(".pagina-principal").classList.add("escondido")
    document.querySelector(".exibir-quizz").classList.remove("escondido")
}
function selecionarResposta(resposta) {
    let pergunta = resposta.parentElement
    let listaResposta = pergunta.querySelectorAll(".respostas-exibicao-quizz")
    for (let i=0; i<listaResposta.length;i++) {
        listaResposta[i].setAttribute("onclick", "")
        let valor = listaResposta[i].querySelector("p").innerHTML
        if (valor === "true") {
            listaResposta[i].querySelector("span").style.color = "#009C22"
        }
        if (valor === "false") {
            listaResposta[i].querySelector("span").style.color = "#FF4B4B"
        }
    }
}
//A partir daqui o codigo foi feito pelo teones
function getURL() {
    const promessa = axios.get("https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes")
    promessa.then(pegarDados)
}

function pegarDados(resposta) {
    const quizz = resposta.data.sort(embaralhar)
    
    const quizzServidor = document.querySelectorAll(".quizz-servidor")
    
    for (let i = 0; i < quizzServidor.length; i++) {
        quizzServidor[i].innerHTML = `
        <img src=${quizz[i].image}>
        <span>${quizz[i].title}</span>
        <p class="escondido">${quizz[i].id}</p>`
        console.log("rodei")
    }
}
function embaralhar() {
    return Math.random() - 0.5
}
getURL()