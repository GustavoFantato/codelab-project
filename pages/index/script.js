
// Variável global para guardar os dados e não ter que buscar no JSON toda hora 
let frentesData = []; // (PET.json)
let infoSobre = {};

function carregarData(){
    fetch('./data/PET.json')
        .then(response => response.json())
        .then(data => {
            infoSobre = data.Informacoes; // salva as infos do sobre

            frentesData = Object.entries(data.Frentes).map(([nome, descricao]) => ({
                nome: nome,
                descricao: descricao,
                categoria: definirCategoria(nome) 
            }));

            renderizarSobre();
            renderizarCards(frentesData);
        })

}

// SECAO DE SOBRE

function renderizarSobre(){

    const aboutContainer = document.querySelector('.about-content'); // alvo, onde vamos injetar o codigo

    let html = `
        <h1>${infoSobre.Grupo}</h1>
        <h2>${infoSobre.Subtitulo}</h2>    
    `; // guarda o titulo e subtitulo

    // guarda os paragrafos via loop
    // caso mais paragrafos sejam adicionados futuramente, atualiza automaticamente

    infoSobre.Sobre.forEach(texto => {
        html += `<p>${texto}</p>`
    });

    aboutContainer.innerHTML = html; // escreve, de fato, no html
}



// SECAO DE FRENTES

// Função para mapear o nome da frente para a categoria do seu filtro
function definirCategoria(nome) {
    if (["Codifique", "Codifikids", "Overclock"].includes(nome)) return "ensino";
    if (nome === "Social") return "social";
    if (["Pesquisa", "Cartilha"].includes(nome)) return "pesquisas";
    return "outros";
}

// Função que desenha os cards no HTML
function renderizarCards(lista) {
    const grid = document.getElementById('grid-frentes');
    grid.innerHTML = ''; // Limpa o grid atual

    lista.forEach(item => {
        grid.innerHTML += `
            <div class="card-frente" data-categoria="${item.categoria}">
                <h3>${item.nome}</h3>
                <p>${item.descricao}</p>
            </div>
        `;
    });
}

// Função de filtragem chamada pelos botões
function filtrarFrentes(categoria, botaoClicado) {

    document.querySelectorAll('.botao-frente').forEach(b => b.classList.remove('ativo'));
    botaoClicado.classList.add('ativo');

    if (categoria === 'todas') {
        renderizarCards(frentesData);
    } else {
        const filtrados = frentesData.filter(item => item.categoria === categoria);
        renderizarCards(filtrados);
    }
}


// dispara o DOM e carrega os dados
document.addEventListener("DOMContentLoaded", () => {
    carregarData();
});