"use client";
import { useState } from "react";
import Image from "next/image";
import estilos from "./page.module.css";
import Lupa from "../../public/lupa.png";
import ItemJogos from "./componentes/itemJogos";

import { filtrarJogo, buscarJogo, retornarJogo } from "./servicos";

export default function Home() {

  //usesStates para listar os jogos de acordo com a coleção de dados dos jogos e o estado para buscar o jogo pelo nome ou plataforma por texto
  const [listaJogos, setListaJogos] = useState(retornarJogo());
  const [textoBusca, setTextoBusca] = useState("");
//filtra os jogos de acordo com a plataforma selecionada
  const handleFiltrarJogoPlataforma = (plataforma) => {
    setListaJogos(filtrarJogo(plataforma));
    setTextoBusca("");
  };
// limpa os filtros e mostra a lista completa de jogos
  const handleLimparFiltro = () => {
    setListaJogos(retornarJogo());
    setTextoBusca("");
  };
//busca os jogos de acordo com texto digitado no campo de busca
  const handleBuscarJogo = (textoDigitado) => {
    setTextoBusca(textoDigitado);
    setListaJogos(buscarJogo(textoDigitado));
  };

  return (
    <main className={estilos.container_principal}>
      <h2>Listas de Jogos Exclusivos</h2>
      <div className={estilos.container_btns}>
        <button onClick={() => handleFiltrarJogoPlataforma("xbox")}>
          xbox
        </button>
        <button onClick={() => handleFiltrarJogoPlataforma("playstation")}>
          PlayStation
        </button>
        <button onClick={() => handleFiltrarJogoPlataforma("nintendo")}>
          Nitendo
        </button>
        <button onClick={() => handleLimparFiltro()}>Limpar filtro</button>
      </div>
      <div className={estilos.container_input}>
        <Image src={Lupa} alt="icone de busca" className={estilos.lupa} />
        <input type="text" 
        value={textoBusca}
        onChange={(event) => handleBuscarJogo(event.target.value)}
        placeholder="Pesquisar por um jogo" />
      </div>

      <div className={estilos.container_cards}>
        {listaJogos.map((jogo, index) => (
          <ItemJogos
            key={index}
            nome={jogo.nome}
            plataforma={jogo.plataforma}
          />
        ))}
      </div>
    </main>
  );
}
