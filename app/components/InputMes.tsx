import MensagemErro from "./MensagemErro";

interface InputMesProps {
  label: string;
  nome: string;
  placeholder: string;
  erro?: string;
}

export default function InputMes({
  label,
  nome,
  placeholder,
  erro,
}: InputMesProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={nome} className="font-medium text-ink">
        {label}
      </label>

      <input
        id={nome}
        name={nome}
        type="month"
        placeholder={placeholder}
        data-invalid={erro ? "true" : undefined}
        aria-invalid={erro ? true : undefined}
        aria-describedby={erro ? `${nome}-erro` : undefined}
        className="field"
      />

      {erro && <MensagemErro id={`${nome}-erro`} mensagem={erro} />}
    </div>
  );
}
