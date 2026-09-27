import MensagemErro from "./MensagemErro";

interface OpcaoSelectMultiplo {
  valor: string;
  texto: string;
}

interface SelectMultiploProps {
  label: string;
  nome: string;
  opcoes: OpcaoSelectMultiplo[];
  tamanho?: number;
  erro?: string;
}

export default function SelectMultiplo({
  label,
  nome,
  opcoes,
  tamanho = 4,
  erro,
}: SelectMultiploProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={nome} className="font-medium text-ink">
        {label}
      </label>

      <select
        id={nome}
        name={nome}
        multiple
        size={tamanho}
        data-invalid={erro ? "true" : undefined}
        aria-invalid={erro ? true : undefined}
        aria-describedby={erro ? `${nome}-erro` : undefined}
        className="field"
      >
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
