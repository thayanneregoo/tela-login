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
}

export default function SelectCampo({
  label,
  nome,
  placeholder,
  opcoes,
  obrigatorio = false,
}: SelectCampoProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={nome} className="font-medium text-gray-700">
        {label}
      </label>

      <select
        id={nome}
        name={nome}
        required={obrigatorio}
        defaultValue=""
        className="rounded-lg border border-gray-300 bg-white px-4 py-2 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
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
    </div>
  );
}
