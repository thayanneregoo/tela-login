import MensagemErro from "./MensagemErro";

interface InputTextoProps {
  label: string;
  nome: string;
  placeholder: string;
  tipo?: "text" | "email" | "tel" | "number" | "url" | "search";
  obrigatorio?: boolean;
  erro?: string;
}

export default function InputTexto({
  label,
  nome,
  placeholder,
  tipo = "text",
  obrigatorio = false,
  erro,
}: InputTextoProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={nome} className="font-medium text-ink">
        {label}
      </label>

      <input
        id={nome}
        name={nome}
        type={tipo}
        placeholder={placeholder}
        required={obrigatorio}
        data-invalid={erro ? "true" : undefined}
        aria-invalid={erro ? true : undefined}
        aria-describedby={erro ? `${nome}-erro` : undefined}
        className="field"
      />

      {erro && <MensagemErro id={`${nome}-erro`} mensagem={erro} />}
    </div>
  );
}
