var botaoLayout = document.querySelector("#btnMudaLayout")

function alteraNome() { 
    if (botaoLayout.textContent == "Blocos") {
        botaoLayout.textContent = "Linhas"
    }
    else {
        botaoLayout.textContent = "Blocos"
    }
}


var mural = document.querySelector(".mural");

function mudaLayout() {
    mural.classList.toggle("mural--linha")
}

botaoLayout.addEventListener ('click', function() {
    mudaLayout()
    alteraNome()
})