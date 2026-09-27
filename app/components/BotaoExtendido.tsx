interface BotaoExtendidoProps {
  texto: string;
  tipo?: "button" | "submit" | "reset";
  /** Variante visual definida no design system (global.css): btn-primary | btn-secondary | btn-ghost */
  cor?: "btn-primary" | "btn-secondary" | "btn-ghost";
  larguraTotal?: boolean;
}

export default function BotaoExtendido({
  texto,
  tipo = "button",
  cor = "btn-primary",
  larguraTotal = true,
}: BotaoExtendidoProps) {
  return (
    <button
      type={tipo}
      className={`btn ${cor} ${larguraTotal ? "w-full" : ""}`}
    >
      {texto}
    </button>
  );
}
