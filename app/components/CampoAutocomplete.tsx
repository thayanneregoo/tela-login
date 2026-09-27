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
      <label htmlFor={nome} className="text-sm font-medium text-ink">
        {label}
      </label>

      <input
        id={nome}
        name={nome}
        list={listaId}
        placeholder={placeholder}
        className="field"
      />

      <datalist id={listaId}>
        {sugestoes.map((sugestao) => (
          <option key={sugestao} value={sugestao} />
        ))}
      </datalist>
    </div>
  );
}
