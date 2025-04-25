import jogosExclusivos from "../Dados/jogos";

export const retornaJogos=() => {
    return jogosExclusivos;
}
export const buscarJogo =(textoDigitado) => {
    return jogosExclusivos.filter((jogo) =>
        jogo.nome.toLowerCase().includes(textoDigitado.toLowerCase()) ||
        jogo.plataforma.toLowerCase().includes(textoDigitado.toLowerCase())
);
    }
export const filtrarJogo =(plataforma) => {
    return jogosExclusivos.filter((jogo) => jogo.plataforma === plataforma);
}