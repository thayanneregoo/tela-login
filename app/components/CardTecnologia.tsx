import BotaoExtendido from "./BotaoExtendido";

interface CardTecnologiaProps {
  titulo: string;
  descricao: string;
  imagem: string;
  textoBotao: string;
  corBotao?: string;
}

export default function CardTecnologia({
  titulo,
  descricao,
  imagem,
  textoBotao,
  corBotao = "bg-blue-600 hover:bg-blue-700",
}: CardTecnologiaProps) {
  return (
    <div className="flex h-full flex-col rounded-2xl bg-white p-5 shadow-md">
      <img
        src={imagem}
        alt={titulo}
        className="mb-5 h-48 w-full rounded-xl object-cover"
      />

      <h2 className="mb-2 text-2xl font-bold text-gray-900">
        {titulo}
      </h2>

      <p className="mb-6 flex-1 text-gray-600">
        {descricao}
      </p>

      <BotaoExtendido
        texto={textoBotao}
        cor={corBotao}
      />
    </div>
  );
}
