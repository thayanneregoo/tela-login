interface BotaoExtendidoProps {
  texto: string;
  tipo?: "button" | "submit" | "reset";
  cor?: string;
  larguraTotal?: boolean;
}

export default function BotaoExtendido({
  texto,
  tipo = "button",
  cor = "bg-blue-600 hover:bg-blue-700",
  larguraTotal = true,
}: BotaoExtendidoProps) {
  return (
    <button
      type={tipo}
      className={`${larguraTotal ? "w-full" : ""} rounded-xl px-5 py-3 font-semibold text-white transition ${cor}`}
    >
      {texto}
    </button>
  );
}
