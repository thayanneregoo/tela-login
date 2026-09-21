interface OpcaoSelectMultiplo {
  valor: string;
  texto: string;
}

interface SelectMultiploProps {
  label: string;
  nome: string;
  opcoes: OpcaoSelectMultiplo[];
  tamanho?: number;
}

export default function SelectMultiplo({
  label,
  nome,
  opcoes,
  tamanho = 4,
}: SelectMultiploProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={nome} className="font-medium text-gray-700">
        {label}
      </label>

      <select
        id={nome}
        name={nome}
        multiple
        size={tamanho}
        className="rounded-lg border border-gray-300 bg-white px-4 py-2 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
      >
        {opcoes.map((opcao) => (
          <option key={opcao.valor} value={opcao.valor}>
            {opcao.texto}
          </option>
        ))}
      </select>
    </div>
  );
}
