/*
Descricao: Exercícios da Aula 12 - Introdução aos Formulários Web
nome_arquivo: login.js
nome_exercicio: Atividade 12 - Introdução aos Formulários Web
nome_aluno: Larah Mônnica de Oliveira Lima
email_aluno: larah.lima@edu.senai.br
turma: TDE-1BAA-26
*/

document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault();

    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;

    if (email === "" || senha === "") {
        alert("Preencha todos os campos.");
        return;
    }

    if (!email.includes("@")) {
        alert("Digite um e-mail válido.");
        return;
    }

    alert("Login realizado com sucesso!");
});