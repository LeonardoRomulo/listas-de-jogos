import Image from "next/image";
import estilos from "./itemJogos.module.css";
import xboxLogo from "../../../../public/xbox-logo.png"
import playstationLogo from "../../../../public/playstation-logo.jpg";
import nintendoLogo from "../../../../public/nintendo-logo.jpg";

export default function itemJogos({nome,plataforma}) {
  return (
    <div className={estilos.card}>
      <figure>
        <Image
          src={
            plataforma === "xbox"
              ? xboxLogo
              : plataforma === "playstation"
              ? playstationLogo
              : nintendoLogo
          }
          alt="logo"
        />
      </figure>

      <div>
        <p>{nome}
          
        </p>
      </div>
    </div>
  );
}
