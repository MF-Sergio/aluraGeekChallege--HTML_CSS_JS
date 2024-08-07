const lupa = document.querySelector('[data-lupa]');
const inputPesquisa = document.querySelector('[data-pesquisa]');

const alternarInputPesquisa = () => {

    lupa.addEventListener('click', () => {
        inputPesquisa.classList.toggle('cabecalho__pesquisa--ativo');
    })
}

export default alternarInputPesquisa;