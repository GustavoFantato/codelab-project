// Variável global para guardar os dados
let frentesData = []; 
let infoSobre = {};

function carregarData(){
    fetch('./data/PET.json')
        .then(response => response.json())
        .then(data => {
            infoSobre = data.Informacoes; 

            frentesData = Object.entries(data.Frentes).map(([nome, descricao]) => ({
                nome: nome,
                descricao: descricao,
                categoria: definirCategoria(nome) 
            }));

            renderizarSobre();
            renderizarCards(frentesData);
        })
        .catch(error => console.error("Erro ao carregar o PET.json:", error));
}

// SECAO DE SOBRE
function renderizarSobre(){
    const aboutContainer = document.querySelector('.about-content'); 

    let html = `
        <h1>${infoSobre.Grupo}</h1>
        <h2>${infoSobre.Subtitulo}</h2>    
    `; 

    infoSobre.Sobre.forEach(texto => {
        html += `<p>${texto}</p>`;
    });

    aboutContainer.innerHTML = html; 
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

// Dispara o DOM e carrega os dados
document.addEventListener("DOMContentLoaded", () => {
    carregarData();
});