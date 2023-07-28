const titulo = document.getElementById("titulo")
const nomeInput = document.getElementById("nome")
const email = document.getElementById("email")
const telefone = document.getElementById("telefone")
const resultado = document.getElementById("resultado")

titulo.textContent = "Senai Cotia 2023"

function salvar() {

resultado.textContent = nomeInput.value
resultado2.textContent = email.value
resultado3.textContent = telefone.value

}