interface TextAreaCampoProps {
  label: string;
  nome: string;
  placeholder: string;
  linhas?: number;
  obrigatorio?: boolean;
}

export default function TextAreaCampo({
  label,
  nome,
  placeholder,
  linhas = 4,
  obrigatorio = false,
}: TextAreaCampoProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={nome} className="font-medium text-gray-700">
        {label}
      </label>

      <textarea
        id={nome}
        name={nome}
        placeholder={placeholder}
        rows={linhas}
        required={obrigatorio}
        className="resize-none rounded-lg border border-gray-300 px-4 py-2 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
      />
    </div>
  );
}
