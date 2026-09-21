interface OpcaoRadio {
  valor: string;
  texto: string;
}

interface RadioGrupoProps {
  titulo: string;
  nome: string;
  opcoes: OpcaoRadio[];
}

export default function RadioGrupo({
  titulo,
  nome,
  opcoes,
}: RadioGrupoProps) {
  return (
    <fieldset className="flex flex-col gap-2">
      <legend className="mb-1 font-medium text-gray-700">
        {titulo}
      </legend>

      {opcoes.map((opcao) => (
        <label
          key={opcao.valor}
          className="flex cursor-pointer items-center gap-3 text-gray-700"
        >
          <input
            type="radio"
            name={nome}
            value={opcao.valor}
            className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
          />

          <span>{opcao.texto}</span>
        </label>
      ))}
    </fieldset>
  );
}
