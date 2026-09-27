import MensagemErro from "./MensagemErro";

interface InputUrlProps {
  label: string;
  nome: string;
  placeholder: string;
  erro?: string;
}

export default function InputUrl({
  label,
  nome,
  placeholder,
  erro,
}: InputUrlProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={nome} className="font-medium text-ink">
        {label}
      </label>

      <input
        id={nome}
        name={nome}
        type="url"
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
