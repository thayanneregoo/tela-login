import MensagemErro from "./MensagemErro";

interface OpcaoRadio {
  valor: string;
  texto: string;
}

interface RadioGrupoProps {
  titulo: string;
  nome: string;
  opcoes: OpcaoRadio[];
  erro?: string;
}

export default function RadioGrupo({
  titulo,
  nome,
  opcoes,
  erro,
}: RadioGrupoProps) {
  return (
    <fieldset className="flex flex-col gap-2">
      <legend className="mb-1 font-medium text-ink">
        {titulo}
      </legend>

      {opcoes.map((opcao) => (
        <label
          key={opcao.valor}
          className="flex cursor-pointer items-center gap-3 text-ink"
        >
          <input
            type="radio"
            name={nome}
            value={opcao.valor}
            className="h-4 w-4 accent-primary"
          />

          <span>{opcao.texto}</span>
        </label>
      ))}

      {erro && <MensagemErro mensagem={erro} />}
    </fieldset>
  );
}
