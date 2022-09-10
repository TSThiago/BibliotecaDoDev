let tituloArray = ["A", "B", "C", "B", "C"]
let autorArray = ["Luiz", "Luiz", "Anderson", "Luiz", "Anderson"]
let anoArray = [12, 15, 2007, 15, 2007]
let idioma = ["Latim", "Hebraico", "Português", "Latim", "JP"]

let livroAux = []
let contador = parseInt(-1)

console.log(ExibirLivrosAno(12))

function ExibirLivrosAutor(autorParametro) {
    for (let index = 0; index < autorArray.length; index++) {
        if (autorParametro == autorArray[index]) {
            contador++
            livroAux[contador] = tituloArray[index]
        }
    }
    contador = -1
    return livroAux
}

function ExibirLivrosAno(anoParametro){
    for (let index = 0; index < anoArray.length; index++) {
        if (anoParametro == anoArray[index]) {
            contador++
            livroAux[contador] = tituloArray[index]
        }
    }
    contador = -1
    return livroAux
}