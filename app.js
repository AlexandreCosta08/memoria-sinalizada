/* ==========================================================================
   FUNÇÕES DE CONTROLE E NAVEGAÇÃO DE TELAS
   ========================================================================== */

// Alterna a visibilidade das seções/telas da aplicação através de classes CSS
function trocarTela(idTela) {
    const telas = document.querySelectorAll(".tela");

    telas.forEach(tela => {
        tela.classList.remove("ativa");
    });

    const destino = document.getElementById(idTela);

    if (destino) {
        destino.classList.add("ativa");
    }
}

// Direciona o fluxo para a tela de seleção de níveis ao iniciar
function jogar() {
    trocarTela("tela_niveis");
}

// Abre o menu de escolha de níveis
function niveis() {
    trocarTela("tela_niveis");
}

// Retorna para a tela de abertura do jogo
function voltar() {
    trocarTela("tela_inicial");
}

// Limpa o estado atual de seleção e retorna para o menu de níveis
function voltarParaNiveis() {
    limparSelecao();
    trocarTela("tela_niveis");
}

/* ==========================================================================
   ESTRUTURA DE DADOS E CONFIGURAÇÃO DOS NÍVEIS
   ========================================================================== */

// Configuração geral dos parâmetros de cada estágio do jogo
const dadosNiveis = {
    1: { nome: "Nível 1: Quarto (Objeto + Libras)", totalPares: 3, colunas: 3 },
    2: { nome: "Nível 2: Parque (Objeto + Libras)", totalPares: 6, colunas: 4 },
    3: { nome: "Nível 3: Escola (Objeto + Libras)", totalPares: 8, colunas: 4 }
};

// Base de dados dividida em pares complementares (Objeto visual vs Sinal em Libras)
const simbolosPorNivel = {
    1: [
        { id: 0, texto: "Cama", imagem: "imagens/quarto_cama.png", tipo: "objeto" },
        { id: 0, texto: "Sinal Cama", imagem: "imagens/quarto_cama_libras.png", tipo: "libras" },

        { id: 1, texto: "Espelho", imagem: "imagens/quarto_espelho.png", tipo: "objeto" },
        { id: 1, texto: "Sinal Espelho", imagem: "imagens/quarto_espelho_libras.png", tipo: "libras" },

        { id: 2, texto: "Porta", imagem: "imagens/quarto_porta.png", tipo: "objeto" },
        { id: 2, texto: "Sinal Porta", imagem: "imagens/quarto_porta_libras.png", tipo: "libras" },

        { id: 3, texto: "Cadeira", imagem: "imagens/quarto_cadeira.png", tipo: "objeto" },
        { id: 3, texto: "Sinal Cadeira", imagem: "imagens/quarto_cadeira_libras.png", tipo: "libras" },

        { id: 4, texto: "Lâmpada", imagem: "imagens/quarto_lampada.png", tipo: "objeto" },
        { id: 4, texto: "Sinal Lâmpada", imagem: "imagens/quarto_lampada_libras.png", tipo: "libras" },

        { id: 5, texto: "Brinquedo", imagem: "imagens/quarto_brinquedo.png", tipo: "objeto" },
        { id: 5, texto: "Sinal Brinquedo", imagem: "imagens/quarto_brinquedo_libras.png", tipo: "libras" }
    ],
    2: [
        { id: 0, texto: "Árvore", imagem: "imagens/parque_arvore.png", tipo: "objeto" },
        { id: 0, texto: "Sinal Árvore", imagem: "imagens/parque_arvore_libras.png", tipo: "libras" },

        { id: 1, texto: "Bola", imagem: "imagens/parque_bola.png", tipo: "objeto" },
        { id: 1, texto: "Sinal Bola", imagem: "imagens/parque_bola_libras.png", tipo: "libras" },

        { id: 2, texto: "Gangorra", imagem: "imagens/parque_gangorra.png", tipo: "objeto" },
        { id: 2, texto: "Sinal Gangorra", imagem: "imagens/parque_gangorra_libras.png", tipo: "libras" },

        { id: 3, texto: "Bicicleta", imagem: "imagens/parque_bicicleta.png", tipo: "objeto" },
        { id: 3, texto: "Sinal Bicicleta", imagem: "imagens/parque_bicicleta_libras.png", tipo: "libras" },

        { id: 4, texto: "Flor", imagem: "imagens/parque_flor.png", tipo: "objeto" },
        { id: 4, texto: "Sinal Flor", imagem: "imagens/parque_flor_libras.png", tipo: "libras" },

        { id: 5, texto: "Sol", imagem: "imagens/parque_sol.png", tipo: "objeto" },
        { id: 5, texto: "Sinal Sol", imagem: "imagens/parque_sol_libras.png", tipo: "libras" }
    ],
    3: [
        { id: 0, texto: "Livro", imagem: "imagens/escola_livro.png", tipo: "objeto" },
        { id: 0, texto: "Sinal Livro", imagem: "imagens/escola_livro_libras.png", tipo: "libras" },

        { id: 1, texto: "Lápis", imagem: "imagens/escola_lapis.png", tipo: "objeto" },
        { id: 1, texto: "Sinal Lápis", imagem: "imagens/escola_lapis_libras.png", tipo: "libras" },

        { id: 2, texto: "Mochila", imagem: "imagens/escola_mochila.png", tipo: "objeto" },
        { id: 2, texto: "Sinal Mochila", imagem: "imagens/escola_mochila_libras.png", tipo: "libras" },

        { id: 3, texto: "Escola", imagem: "imagens/escola_escola.png", tipo: "objeto" },
        { id: 3, texto: "Sinal Escola", imagem: "imagens/escola_escola_libras.png", tipo: "libras" },

        { id: 4, texto: "Tesoura", imagem: "imagens/escola_tesoura.png", tipo: "objeto" },
        { id: 4, texto: "Sinal Tesoura", imagem: "imagens/escola_tesoura_libras.png", tipo: "libras" },

        { id: 5, texto: "Giz", imagem: "imagens/escola_giz.png", tipo: "objeto" },
        { id: 5, texto: "Sinal Giz", imagem: "imagens/escola_giz_libras.png", tipo: "libras" },

        { id: 6, texto: "Caderno", imagem: "imagens/escola_caderno.png", tipo: "objeto" },
        { id: 6, texto: "Sinal Caderno", imagem: "imagens/escola_caderno_libras.png", tipo: "libras" },

        { id: 7, texto: "Quadro", imagem: "imagens/escola_quadro.png", tipo: "objeto" },
        { id: 7, texto: "Sinal Quadro", imagem: "imagens/escola_quadro_libras.png", tipo: "libras" }
    ]
};

/* ==========================================================================
   VARIÁVEIS DE ESTADO DA PARTIDA
   ========================================================================== */
let primeiraCarta = null;
let segundaCarta = null;
let travado = false;
let paresEncontrados = 0;
let totalParesNivel = 0;
let nivelAtual = 1;

/* ==========================================================================
   LÓGICA DE INICIALIZAÇÃO E MONTAGEM DO TABULEIRO
   ========================================================================== */

// Prepara e desenha dinamicamente as cartas do nível selecionado
function iniciarNivel(numeroNivel) {
    nivelAtual = numeroNivel;
    const config = dadosNiveis[numeroNivel];
    if (!config) return;

    trocarTela("tela_jogo");

    const tituloJogo = document.querySelector(".t2_jogo");
    if (tituloJogo) {
        tituloJogo.textContent = config.nome;
    }

    const tabuleiro = document.getElementById("tabuleiro");
    if (tabuleiro) {
        tabuleiro.style.gridTemplateColumns = `repeat(${config.colunas}, 1fr)`;
        tabuleiro.innerHTML = "";
    }

    paresEncontrados = 0;
    totalParesNivel = config.totalPares;
    primeiraCarta = null;
    segundaCarta = null;
    travado = false;

    atualizarPlacar();

    let itensNivel = simbolosPorNivel[numeroNivel];
    let cartasNivel = [];

    // Seleciona a quantidade exata de pares do nível configurado
    for (let i = 0; i < config.totalPares; i++) {
        const itemObjeto = itensNivel.find(item => item.id === i && item.tipo === "objeto");
        const itemLibras = itensNivel.find(item => item.id === i && item.tipo === "libras");

        if (itemObjeto && itemLibras) {
            cartasNivel.push({ id: i, dados: itemObjeto });
            cartasNivel.push({ id: i, dados: itemLibras });
        }
    }

    // Embaralha as cartas utilizando o algoritmo de Fisher-Yates
    for (let i = cartasNivel.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cartasNivel[i], cartasNivel[j]] = [cartasNivel[j], cartasNivel[i]];
    }

    // Cria os elementos HTML de cada carta no DOM
    cartasNivel.forEach(cartaData => {
        const elemento = document.createElement("button");
        elemento.classList.add("carta");
        elemento.textContent = "?";

        elemento.dataset.id = cartaData.id;
        elemento.dataset.imagemSrc = cartaData.dados.imagem;
        elemento.dataset.texto = cartaData.dados.texto;

        elemento.onclick = function() {
            virarCarta(elemento);
        };

        tabuleiro.appendChild(elemento);
    });
}

/* ==========================================================================
   MECÂNICA DE INTERAÇÃO E VALIDAÇÃO DAS CARTAS
   ========================================================================== */

// Controla a ação de clique para revelar o conteúdo da carta
function virarCarta(elemento) {
    if (travado) return;
    if (elemento.classList.contains("virada") || elemento.classList.contains("encontrada")) return;
    if (elemento === primeiraCarta) return;

    elemento.classList.add("virada");

    const caminhoImg = elemento.dataset.imagemSrc;
    const textoAlt = elemento.dataset.texto;
    elemento.innerHTML = `<img src="${caminhoImg}" alt="${textoAlt}">`;

    if (!primeiraCarta) {
        primeiraCarta = elemento;
        return;
    }

    segundaCarta = elemento;
    verificarPar();
}

// Compara se o par selecionado corresponde à mesma chave lógica (id)
function verificarPar() {
    const id1 = primeiraCarta.dataset.id;
    const id2 = segundaCarta.dataset.id;

    // Se os IDs forem iguais, o Objeto corresponde corretamente ao sinal em Libras
    if (id1 === id2) {
        primeiraCarta.classList.add("encontrada");
        segundaCarta.classList.add("encontrada");

        paresEncontrados++;
        atualizarPlacar();

        limparSelecao();

        // Verifica condição de vitória ao atingir o total de pares do nível
        if (paresEncontrados === totalParesNivel) {
            setTimeout(() => {
                const tituloConclusao = document.querySelector("#tela_conclusao h2");
                const textoConclusao = document.querySelector("#tela_conclusao p");
                const btnProximo = document.getElementById("btn_proximo");

                if (dadosNiveis[nivelAtual + 1]) {
                    tituloConclusao.textContent = "🎉 Parabéns!";
                    textoConclusao.textContent = "Você concluiu o nível com sucesso!";
                    btnProximo.textContent = "Próximo Nível";
                } else {
                    tituloConclusao.textContent = "🏆 Fim de Jogo!";
                    textoConclusao.textContent = "Incrível! Você concluiu todos os níveis com sucesso!";
                    btnProximo.textContent = "Voltar ao Menu";
                }

                trocarTela("tela_conclusao");
            }, 300);
        }
    } else {
        // Se errar, bloqueia temporariamente o tabuleiro e desvira as cartas
        travado = true;

        setTimeout(() => {
            primeiraCarta.classList.remove("virada");
            primeiraCarta.textContent = "?";

            segundaCarta.classList.remove("virada");
            segundaCarta.textContent = "?";

            limparSelecao();
        }, 1000);
    }
}

/* ==========================================================================
   FUNÇÕES AUXILIARES E DE FLUXO DA PARTIDA
   ========================================================================== */

// Reseta as referências temporárias das jogadas
function limparSelecao() {
    primeiraCarta = null;
    segundaCarta = null;
    travado = false;
}

// Atualiza a interface gráfica do contador de pares encontrados
function atualizarPlacar() {
    const spanPares = document.getElementById("pares");
    if (spanPares) {
        spanPares.textContent = paresEncontrados;
    }
}

// Reinicia o nível atual
function jogarNovamente() {
    iniciarNivel(nivelAtual);
}

// Avança para o próximo estágio ou retorna ao menu principal se for o fim
function proximoNivel() {
    let proximo = nivelAtual + 1;
    if (dadosNiveis[proximo]) {
        iniciarNivel(proximo);
    } else {
        trocarTela("tela_inicial");
    }
}