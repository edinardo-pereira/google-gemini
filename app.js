
const inputNome = document.getElementById('nome-input');
const botaoBuscar = document.getElementById('buscar-botao');
const resultadosDiv = document.getElementById('resultados');

botaoBuscar.addEventListener('click', () => {
    const termoBusca = inputNome.value.toLowerCase();

    // Limpar os resultados antes de realizar a nova pesquisa
    resultadosDiv.innerHTML = '';

    // Função de busca que aceita tanto nomes de pilotos quanto de equipes
    const resultados = pilotos.filter(piloto => {
        return piloto.nome.toLowerCase().includes(termoBusca) ||
               piloto.equipe.toLowerCase().includes(termoBusca);
    });

    if (resultados.length > 0) {
        resultadosDiv.classList.add('com-resultados');
        resultados.forEach(piloto => {
            resultadosDiv.innerHTML += `
                <div class="resultado" >
                    <a href="${piloto.link}" target="_blank">Mais informações</a>
                    <h2>${piloto.nome}</h2>
                    <p>Equipe: ${piloto.equipe}</p>
                    <p>Número: ${piloto.numero}</p>
                    <p>Descrição: ${piloto.descricao}</p>
                    <p>Origem: ${piloto.Origem}</p>
                    <p>Carreira: ${piloto.carreira}</p>
                    <p>Fórmula 1: ${piloto.Fórmula_1}</p>
                    <p>Dominância: ${piloto.dominancia}</p>
                    <p>Recordes e Legado: ${piloto.Recordes_Legado}</p>
                    <img src="${piloto.img}" alt="${piloto.nome}">
                    
                </div>
            `;
        });
    } else {
        resultadosDiv.textContent = "Nenhum resultado encontrado.";
    }
});

