interface InputBuscaProps {
  label: string;
  nome: string;
  placeholder: string;
}

export default function InputBusca({
  label,
  nome,
  placeholder,
}: InputBuscaProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={nome} className="text-sm font-medium text-ink">
        {label}
      </label>

      <input
        id={nome}
        name={nome}
        type="search"
        placeholder={placeholder}
        className="field"
      />
    </div>
  );
}
