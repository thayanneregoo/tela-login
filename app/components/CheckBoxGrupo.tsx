interface OpcaoCheckBox {
  valor: string;
  texto: string;
}

interface CheckBoxGrupoProps {
  titulo: string;
  nome: string;
  opcoes: OpcaoCheckBox[];
}

export default function CheckBoxGrupo({
  titulo,
  nome,
  opcoes,
}: CheckBoxGrupoProps) {
  return (
    <fieldset className="flex flex-col gap-2">
      <legend className="mb-1 text-sm font-medium text-ink">
        {titulo}
      </legend>

      {opcoes.map((opcao) => (
        <label
          key={opcao.valor}
          className="flex cursor-pointer items-center gap-3 text-ink"
        >
          <input
            type="checkbox"
            name={nome}
            value={opcao.valor}
            className="h-4 w-4 rounded border-ink/20 accent-primary"
          />

          <span>{opcao.texto}</span>
        </label>
      ))}
    </fieldset>
  );
}
