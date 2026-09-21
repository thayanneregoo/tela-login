interface CampoAutocompleteProps {
  label: string;
  nome: string;
  placeholder: string;
  sugestoes: string[];
}

export default function CampoAutocomplete({
  label,
  nome,
  placeholder,
  sugestoes,
}: CampoAutocompleteProps) {
  const listaId = `${nome}-sugestoes`;

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={nome} className="font-medium text-gray-700">
        {label}
      </label>

      <input
        id={nome}
        name={nome}
        list={listaId}
        placeholder={placeholder}
        className="rounded-lg border border-gray-300 px-4 py-2 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
      />

      <datalist id={listaId}>
        {sugestoes.map((sugestao) => (
          <option key={sugestao} value={sugestao} />
        ))}
      </datalist>
    </div>
  );
}
