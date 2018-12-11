var botaoLayout = document.querySelector("#btnMudaLayout")

function alteraNome() { 
    if (botaoLayout.textContent == "Linhas") {
        botaoLayout.textContent = "Blocos"
    }
    else {
        botaoLayout.textContent = "Linhas"
    }
}

botaoLayout.onclick = alteraNome;
