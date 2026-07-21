document.addEventListener("DOMContentLoaded", loadMembers);

async function loadMembers() {
    const container = document.getElementById("team-container");

    try {
        const response = await fetch("../../data/membros.json");

        if (!response.ok) {
            throw new Error(`Erro ${response.status}`);
        }

        const data = await response.json();

        console.log("JSON carregado:", data);

        container.innerHTML = "";


        if (data.responsavel && data.responsavel.nome) {
            const responsavel = document.createElement("article");
            responsavel.className = "member-card responsavel";

            responsavel.innerHTML = `
                <div class="member-photo">
                    ${
                        data.responsavel.imagem
                            ? `<img src="${data.responsavel.imagem}" alt="${data.responsavel.nome}">`
                            : ""
                    }
                </div>

                <div class="member-info">
                    <h3>${data.responsavel.nome}</h3>
                    <p class="member-role">Tutor do PET</p>
                </div>
            `;

            container.appendChild(responsavel);
        }

        const membersGrid = document.createElement("div");
        membersGrid.className = "members-grid";

        if (Array.isArray(data.membros)) {
            data.membros.forEach(member => {
                const card = document.createElement("article");
                card.className = "member-card";

                card.innerHTML = `
                    <div class="member-photo">
                        ${
                            member.imagem
                                ? `<img src="${member.imagem}" alt="${member.nome}">`
                                : ""
                        }
                    </div>

                    <div class="member-info">
                        <h3>${member.nome}</h3>
                    </div>
                `;

                membersGrid.appendChild(card);
            });
        }

        container.appendChild(membersGrid);

    } catch (error) {
        console.error(error);
        container.innerHTML =
            "<p>Não foi possível carregar a lista de membros.</p>";
    }
}