const formularioLogin = document.querySelector(".formulario-login");
const formularioCadastro = document.querySelector(".formulario-cadastro");

const linkCadastro = document.getElementById("link-cadastro");
const linkLogin = document.getElementById("link-login");

linkCadastro.addEventListener("click", function(event) {
    event.preventDefault();

    formularioLogin.hidden = true;
    formularioCadastro.hidden = false;
});

linkLogin.addEventListener("click", function(event) {
    event.preventDefault();

    formularioCadastro.hidden = true;
    formularioLogin.hidden = false;
});

function exibirMensagem(elemento, mensagem, tipo) {
    elemento.textContent = mensagem;
    elemento.className = tipo;
}

function limparMensagens(formulario) {
    formulario.querySelectorAll(".mensagem").forEach(function(elemento) {
        elemento.remove();
    });

    formulario.querySelectorAll("input").forEach(function(campo) {
        campo.classList.remove("is-error", "is-success");
    });
}

function alterarEstado(campo, estado) {
    campo.classList.remove("is-success", "is-error", "is-disabled");

    if (estado !== "default" && estado !== "focus") {
        campo.classList.add("is-" + estado);
    }

    campo.disabled = estado === "disabled";
}

const formCadastro = document.getElementById("form-cadastro");
const mensagemCadastro = document.getElementById("mensagem-cadastro");

formCadastro.addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome");
    const email = document.getElementById("email-cadastro");
    const senha = document.getElementById("senha-cadastro");
    const confirmarSenha = document.getElementById("confirmar-senha");

    mensagemCadastro.textContent = "";
    mensagemCadastro.className = "";

    if (
        nome.value.trim() === "" ||
        email.value.trim() === "" ||
        senha.value === "" ||
        confirmarSenha.value === ""
    ) {
        exibirMensagem(
            mensagemCadastro,
            "Preencha todos os campos.",
            "erro"
        );
        return;
    }

    if (!email.validity.valid) {
        exibirMensagem(
            mensagemCadastro,
            "Informe um endereço de e-mail válido.",
            "erro"
        );
        return;
    }

    if (senha.value !== confirmarSenha.value) {
        exibirMensagem(
            mensagemCadastro,
            "As senhas não coincidem.",
            "erro"
        );
        return;
    }

    exibirMensagem(
        mensagemCadastro,
        "Cadastro validado com sucesso!",
        "sucesso"
    );
});

const formLogin = document.getElementById("form-login");
const mensagemLogin = document.getElementById("mensagem-login");

formLogin.addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email-login");
    const senha = document.getElementById("senha-login");

    mensagemLogin.textContent = "";
    mensagemLogin.className = "";

    if (email.value.trim() === "" || senha.value === "") {
        exibirMensagem(
            mensagemLogin,
            "Preencha todos os campos.",
            "erro"
        );
        return;
    }

    if (!email.validity.valid) {
        exibirMensagem(
            mensagemLogin,
            "Informe um endereço de e-mail válido.",
            "erro"
        );
        return;
    }

    exibirMensagem(
        mensagemLogin,
        "Login realizado com sucesso! Redirecionando...",
        "sucesso"
    );

    window.location.href = "lista.html";
});
