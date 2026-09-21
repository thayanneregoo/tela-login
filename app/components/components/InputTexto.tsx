interface InputTextoProps {
  label: string;
  nome: string;
  placeholder: string;
  tipo?: "text" | "email" | "tel" | "number" | "url" | "search";
  obrigatorio?: boolean;
}

export default function InputTexto({
  label,
  nome,
  placeholder,
  tipo = "text",
  obrigatorio = false,
}: InputTextoProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={nome} className="font-medium text-gray-700">
        {label}
      </label>

      <input
        id={nome}
        name={nome}
        type={tipo}
        placeholder={placeholder}
        required={obrigatorio}
        className="rounded-lg border border-gray-300 px-4 py-2 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
      />
    </div>
  );
}
