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
