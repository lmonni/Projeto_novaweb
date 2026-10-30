const formularioLogin = document.querySelector(".formulario-login");
const formularioCadastro = document.querySelector(".formulario-cadastro");

const linkCadastro = document.getElementById("link-cadastro");
const linkLogin = document.getElementById("link-login");

if (linkCadastro && linkLogin && formularioLogin && formularioCadastro) {
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
}

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

if (formCadastro && mensagemCadastro) {
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
}

const formLogin = document.getElementById("form-login");
const mensagemLogin = document.getElementById("mensagem-login");

if (formLogin && mensagemLogin) {
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

        sessionStorage.setItem("usuarioAutenticado", "true");

        exibirMensagem(
            mensagemLogin,
            "Login realizado com sucesso! Redirecionando...",
            "sucesso"
        );

        window.location.href = "lista.html";
    });
}

function verificarAcesso() {
    const autenticado = sessionStorage.getItem("usuarioAutenticado");

    if (autenticado !== "true") {
        window.location.href = "login.html";
    }
}

function sairSistema() {
    sessionStorage.removeItem("usuarioAutenticado");
    window.location.href = "login.html";
}

const paginaAtual = window.location.pathname;

if (
    paginaAtual.endsWith("/lista.html") ||
    paginaAtual.endsWith("/dashboard.html")
) {
    verificarAcesso();
}

const abaPerfil = document.getElementById("aba-perfil");
const abaUsuarios = document.getElementById("aba-usuarios");

const conteudoPerfil = document.getElementById("conteudo-perfil");
const conteudoUsuarios = document.getElementById("conteudo-usuarios");

function alternarAba(abaSelecionada) {

    const perfilAtivo = abaSelecionada === "perfil";

    abaPerfil.classList.toggle("ativa", perfilAtivo);
    abaUsuarios.classList.toggle("ativa", !perfilAtivo);

    conteudoPerfil.hidden = !perfilAtivo;
    conteudoUsuarios.hidden = perfilAtivo;

}

if (abaPerfil && abaUsuarios) {

    abaPerfil.addEventListener("click", function() {
        alternarAba("perfil");
    });

    abaUsuarios.addEventListener("click", function() {
        alternarAba("usuarios");
    });

}

const botaoEditarPerfil = document.getElementById("editar-perfil");
const botaoSalvarPerfil = document.getElementById("salvar-perfil");

const camposPerfil = document.querySelectorAll(
    "#conteudo-perfil input"
);

camposPerfil.forEach(function(campo) {
    campo.disabled = true;
});

if (botaoEditarPerfil && botaoSalvarPerfil) {

    botaoEditarPerfil.addEventListener("click", function() {

        camposPerfil.forEach(function(campo) {
            campo.disabled = false;
        });

        botaoEditarPerfil.disabled = true;
        botaoSalvarPerfil.disabled = false;

    });

    botaoSalvarPerfil.addEventListener("click", function() {

        camposPerfil.forEach(function(campo) {
            campo.disabled = true;
        });

        botaoEditarPerfil.disabled = false;
        botaoSalvarPerfil.disabled = true;

    });

}

const usuarios = [
    {
        id: 1,
        nome: "Ana Souza",
        email: "ana@email.com",
        telefone: "(17) 99999-1111",
        funcao: "Administrador",
        status: "Ativo"
    },
    {
        id: 2,
        nome: "Carlos Oliveira",
        email: "carlos@email.com",
        telefone: "(17) 99999-2222",
        funcao: "Funcionário",
        status: "Ativo"
    },
    {
        id: 3,
        nome: "Mariana Santos",
        email: "mariana@email.com",
        telefone: "(17) 99999-3333",
        funcao: "Funcionário",
        status: "Inativo"
    }
];

const listaUsuarios = document.getElementById("lista-usuarios");

function exibirUsuarios(lista) {

    if (!listaUsuarios) return;

    listaUsuarios.innerHTML = "";

    lista.forEach(function(usuario) {

        const linha = document.createElement("tr");

        linha.innerHTML = `
            <td>${usuario.id}</td>
            <td>${usuario.nome}</td>
            <td>${usuario.email}</td>
            <td>${usuario.telefone}</td>
            <td>${usuario.funcao}</td>
            <td>${usuario.status}</td>
            <td>
                <button type="button">EDITAR</button>
                <button type="button">EXCLUIR</button>
            </td>
        `;

        listaUsuarios.appendChild(linha);

    });

}

exibirUsuarios(usuarios);

const campoPesquisa = document.getElementById("pesquisa-usuario");

if (campoPesquisa) {

    campoPesquisa.addEventListener("input", function() {

        const pesquisa = campoPesquisa.value.toLowerCase().trim();

        const usuariosFiltrados = usuarios.filter(function(usuario) {

            return (
                usuario.id.toString().includes(pesquisa) ||
                usuario.nome.toLowerCase().includes(pesquisa) ||
                usuario.email.toLowerCase().includes(pesquisa)
            );

        });

        exibirUsuarios(usuariosFiltrados);

    });

}

const filtroStatus = document.getElementById("filtro-status");
const botaoFiltrar = document.getElementById("filtrar-usuarios");

if (botaoFiltrar && filtroStatus) {

    botaoFiltrar.addEventListener("click", function() {

        const pesquisa = campoPesquisa
            ? campoPesquisa.value.toLowerCase().trim()
            : "";

        const statusSelecionado = filtroStatus.value;

        const usuariosFiltrados = usuarios.filter(function(usuario) {

            const correspondePesquisa =
                usuario.id.toString().includes(pesquisa) ||
                usuario.nome.toLowerCase().includes(pesquisa) ||
                usuario.email.toLowerCase().includes(pesquisa);

            const correspondeStatus =
                statusSelecionado === "todos" ||
                usuario.status === statusSelecionado;

            return correspondePesquisa && correspondeStatus;

        });

        exibirUsuarios(usuariosFiltrados);

    });

}

const botaoAdicionarUsuario = document.getElementById("adicionar-usuario");

if (botaoAdicionarUsuario) {

    botaoAdicionarUsuario.addEventListener("click", function() {

        const nome = prompt("Digite o nome completo:");
        if (nome === null || nome.trim() === "") return;

        const email = prompt("Digite o e-mail:");
        if (email === null || email.trim() === "") return;

        const telefone = prompt("Digite o telefone:");
        if (telefone === null || telefone.trim() === "") return;

        const funcao = prompt("Digite a função do usuário:");
        if (funcao === null || funcao.trim() === "") return;

        const novoUsuario = {
            id: usuarios.length > 0
                ? Math.max(...usuarios.map(usuario => usuario.id)) + 1
                : 1,
            nome: nome.trim(),
            email: email.trim(),
            telefone: telefone.trim(),
            funcao: funcao.trim(),
            status: "Ativo"
        };

        usuarios.push(novoUsuario);

        exibirUsuarios(usuarios);

    });

}