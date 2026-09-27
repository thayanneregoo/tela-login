import MensagemErro from "./MensagemErro";

interface InputDataHoraProps {
  label: string;
  nome: string;
  placeholder: string;
  obrigatorio?: boolean;
  erro?: string;
}

export default function InputDataHora({
  label,
  nome,
  placeholder,
  obrigatorio = false,
  erro,
}: InputDataHoraProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={nome} className="font-medium text-ink">
        {label}
      </label>

      <input
        id={nome}
        name={nome}
        type="datetime-local"
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
