"use client";
import { useState } from "react";
import Image from "next/image";
import estilos from "./page.module.css";
import Lupa from "../../public/lupa.png";
import ItemJogos from "./componentes/itemJogos";
import jogosExclusivos from "./Dados/jogos";
import { retornaJogos, buscarJogo, filtrarJogo } from "./Serviços";

export default function Home() {
  const [listaJogos, setListarJogos] = useState(retornaJogos);
  const [textoBusca, setTextoBusca] = useState("");

  const handleFiltrarJogoPlataforma = (plataforma) => {
    setListarJogos(filtrarJogo(plataforma));
    setTextoBusca("");
  };

  const handleLimparFiltro = () => {
    setListarJogos(retornaJogos());
    setTextoBusca("");
  };

  const handleBuscarJogo = (textoDigitado) => {
    setTextoBusca(textoDigitado);
    setListarJogos(buscarJogo(textoDigitado));
  };

  return (
    <main className={estilos.container_principal}>
      <h2>Listas de Jogos Exclusivos</h2>
      <div className={estilos.container_btns}>
        <button onClick={() => handleFiltrarJogoPlataforma("xbox")}>
          XBOX
        </button>
        <button onClick={() => handleFiltrarJogoPlataforma("playstation")}>
          PlayStation
        </button>
        <button onClick={() => handleFiltrarJogoPlataforma("nintendo")}>
          Nintendo
        </button>
        <button onClick={() => handleLimparFiltro()}>Limpar Filtro</button>
      </div>
      <div className={estilos.container_input}>
        <Image src={Lupa} alt="icone de busca" className={estilos.lupa} />
        <input 
        type="text" 
        placeholder="Pesquisar por um jogo"
        value={textoBusca}
        onChange={(event) => handleBuscarJogo(event.target.value)}
        />
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
