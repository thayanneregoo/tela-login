import BotaoExtendido from "./BotaoExtendido";

interface CardTecnologiaProps {
  titulo: string;
  descricao: string;
  imagem: string;
  textoBotao: string;
  corBotao?: "btn-primary" | "btn-secondary" | "btn-ghost";
}

export default function CardTecnologia({
  titulo,
  descricao,
  imagem,
  textoBotao,
  corBotao = "btn-primary",
}: CardTecnologiaProps) {
  return (
    <div className="card flex h-full flex-col">
      <img
        src={imagem}
        alt={titulo}
        className="mb-5 h-48 w-full rounded-lg object-cover"
      />

      <h2 className="mb-2 text-2xl text-ink">
        {titulo}
      </h2>

      <p className="mb-6 flex-1 text-ink/70">
        {descricao}
      </p>

      <BotaoExtendido
        texto={textoBotao}
        cor={corBotao}
      />
    </div>
  );
}
