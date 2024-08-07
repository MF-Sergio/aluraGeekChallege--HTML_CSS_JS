//local storage criado para simples teste de autenticação
localStorage.setItem("email", "sergiohrznt@gmail.com");
localStorage.setItem("senha", "mendes.13");
//
const formulario = document.querySelector(".pagina-login__formulario");

const validaCampos = () => {

    formulario.addEventListener("submit", (evento) => {
        evento.preventDefault();

        const loginEmail = evento.target.elements["email"].value;
        const loginSenha = evento.target.elements["senha"].value;
        const emailRegistrado = localStorage.getItem("email");
        const senhaRegistrada = localStorage.getItem("senha");


        if (loginEmail === emailRegistrado && loginSenha === senhaRegistrada) {
            window.location.href = "../adm-produtos.html";
        } else {
            alert("E-mail não registrado ou senha inválida.")
        }

    })

}

export default validaCampos;