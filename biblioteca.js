let tituloArray = ["E", "D", "C", "B", "A"]
let autorArray = ["Luiz", "Luiz", "Anderson", "Luiz", "Anderson"]
let anoArray = [2007, 2007, 15, 15, 12]
let idiomaArray = ["Latim", "Hebraico", "Português", "Latim", "JP"]

let livroSup = 0
let livroAux = []
let idiomaAux = []
let contador = parseInt(-1)

console.log(ExibirLivrosAutor("Anderson"))

function ExibirLivrosAutor(autorParametro) {
    for (let index = 0; index < autorArray.length; index++) {
        if (autorParametro == autorArray[index]) {
            livroAux.push(tituloArray[index])
            // contador++
            // livroAux[contador] = tituloArray[index]
        }
    }
    // contador = -1
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

function ExibirLivrosAutorAno(autorParametro,anoParametro){
    for (let index = 0; index < autorArray.length; index++) {
        if (autorParametro == autorArray[index] && anoParametro <= anoArray[index]) {
            contador++
            livroAux[contador] = tituloArray[index]
        }
    }
    contador = -1
    return livroAux
}

function ExibirLivrosIdioma(livroParametro){
    for (let index = 0; index < idiomaArray.length; index++) {
        if (livroParametro == tituloArray[index]) {
            contador++
            idiomaAux[contador] = idiomaArray[index]
        }
    }
    contador = -1
    return idiomaAux 
}

function ExibirLivrosEmTalIdioma(idiomaParametro){
    for(let index = 0; index < idiomaArray.length; index++){
        if(idiomaParametro == idiomaArray[index]){
            contador++
            livroAux[contador] = tituloArray[index]
        }
    }
    contador = -1
    return livroAux
}

function OrdenarLivrosAno(){
    // for(let atual = 0; atual < anoArray.length - 1; atual++){
    //     for(let seguinte = atual + 1; seguinte < anoArray.length; seguinte++){
    //         if(anoArray[atual] > anoArray[seguinte]){
    //             livroSup = tituloArray[atual]
    //             tituloArray[atual] = tituloArray[seguinte]
    //             tituloArray[seguinte] = livroSup

    //         }
    //     }
    anoArray.sort()
    }
//     return tituloArray
// }