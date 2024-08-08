const inputPesquisa = document.querySelector("[data-pesquisa]");
const items = document.querySelectorAll(".lista__item");

const filtraPesquisa = () => {
    inputPesquisa.addEventListener('input', () => {
        const valuePesquisa = inputPesquisa.value.toLowerCase();
        for (let i = 0; i < items.length; i++) {
            const item = items[i];
            const itemtext = item.textContent || item.innerText;
            if (itemtext.toLowerCase().includes(valuePesquisa)) {
                item.style.display = '';
            } else {
                item.style.display = 'none';
            }
        }
    })
}


export default filtraPesquisa;