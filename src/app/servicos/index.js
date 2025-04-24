import  jogosExclusivos   from "../Dados/jogos";

// função que retorna a coleção de arrays de objetos jogos da camada dados
export const retornarJogo = () => {
    return jogosExclusivos;
}
//função que faz a busca do jogos atravéz do texto digitado no input
export const buscarJogo= (textoDigitado) => {
    return jogosExclusivos.filter((jogo) => 
        jogo.nome.toLowerCase().includes(textoDigitado.toLowerCase())||
        jogo.plataforma.toLowerCase().includes(textoDigitado.toLowerCase())
      );
}

//função que filtra os jogos através dos botões pelo state e on click
export const filtrarJogo = (plataforma) => {
    return jogosExclusivos.filter((jogo) => jogo.plataforma === plataforma);
}