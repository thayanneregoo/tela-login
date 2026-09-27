import MensagemErro from "./MensagemErro";

interface TextAreaCampoProps {
  label: string;
  nome: string;
  placeholder: string;
  linhas?: number;
  obrigatorio?: boolean;
  erro?: string;
}

export default function TextAreaCampo({
  label,
  nome,
  placeholder,
  linhas = 4,
  obrigatorio = false,
  erro,
}: TextAreaCampoProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={nome} className="font-medium text-ink">
        {label}
      </label>

      <textarea
        id={nome}
        name={nome}
        placeholder={placeholder}
        rows={linhas}
        required={obrigatorio}
        data-invalid={erro ? "true" : undefined}
        aria-invalid={erro ? true : undefined}
        aria-describedby={erro ? `${nome}-erro` : undefined}
        className="field resize-none"
      />

      {erro && <MensagemErro id={`${nome}-erro`} mensagem={erro} />}
    </div>
  );
}
