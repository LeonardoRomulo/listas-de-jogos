import Image from "next/image";
import estilos from "./page.module.css";
import Lupa from "../../public/lupa.png"
import ItemJogos from "./componentes/itemJogos";
import jogosExclusivos  from "./Dados/jogos";

export default function Home() {
  
  return (
    <main className={estilos.container_principal}>
      
      <h2>Listas de Jogos Exclusivos</h2>

      <div className={estilos.container_input}>
        <Image src={Lupa} alt="icone de busca"/>
        <input 
        type="text" 
        placeholder="Pesquisar por um jogo"
        />
      </div>

      <div className={estilos.container_cards}>
        {jogosExclusivos.map((jogo, index) => (
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
