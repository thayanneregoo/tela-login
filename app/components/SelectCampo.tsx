import MensagemErro from "./MensagemErro";

interface OpcaoSelect {
  valor: string;
  texto: string;
}

interface SelectCampoProps {
  label: string;
  nome: string;
  placeholder: string;
  opcoes: OpcaoSelect[];
  obrigatorio?: boolean;
  erro?: string;
}

export default function SelectCampo({
  label,
  nome,
  placeholder,
  opcoes,
  obrigatorio = false,
  erro,
}: SelectCampoProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={nome} className="font-medium text-ink">
        {label}
      </label>

      <select
        id={nome}
        name={nome}
        required={obrigatorio}
        defaultValue=""
        data-invalid={erro ? "true" : undefined}
        aria-invalid={erro ? true : undefined}
        aria-describedby={erro ? `${nome}-erro` : undefined}
        className="field"
      >
        <option value="" disabled>
          {placeholder}
        </option>

        {opcoes.map((opcao) => (
          <option key={opcao.valor} value={opcao.valor}>
            {opcao.texto}
          </option>
        ))}
      </select>

      {erro && <MensagemErro id={`${nome}-erro`} mensagem={erro} />}
    </div>
  );
}
