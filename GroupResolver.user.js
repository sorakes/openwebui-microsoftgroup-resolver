// ==UserScript==
// @name         GroupResolver
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Substitui hashes mesmo quebrados em várias linhas ou dentro de modais
// @author       github.com/sorakes
// @match        https://openwebuidomain.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Lista de mapeamento (adicione quantos precisar aqui)
    const mapaDeGrupos = {
        "gfdghj-1256fdg46-fdg621gdf4": "TesteGrupo",
        "HASH2": "Financeiro"
    };

    function processarTexto() {
        // Esta ferramenta caminha por todos os nós de texto reais da página
        const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
        let node;

        while (node = walker.nextNode()) {
            let conteudoOriginal = node.textContent;

            // Verificamos cada hash da nossa lista
            for (const [hash, nomeAmigavel] of Object.entries(mapaDeGrupos)) {
                // Se o nó de texto contém o hash (mesmo com espaços ou quebras ao redor)
                if (conteudoOriginal.includes(hash)) {
                    // Substitui apenas o hash pelo nome amigável
                    node.textContent = conteudoOriginal.replace(hash, nomeAmigavel);

                    // Se quiser que o texto fique verde para destacar:
                    if (node.parentElement) {
                        node.parentElement.style.color = "#ffffff";
                        node.parentElement.style.fontWeight = "normal";
                    }
                }
            }
        }
    }

    // Monitora a página para mudanças (como abrir um modal) sem pesar o computador
    const observer = new MutationObserver(() => {
        processarTexto();
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

    // Execução inicial
    processarTexto();

})();
