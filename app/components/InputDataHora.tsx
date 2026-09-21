interface InputDataHoraProps {
  label: string;
  nome: string;
  placeholder: string;
  obrigatorio?: boolean;
}

export default function InputDataHora({
  label,
  nome,
  placeholder,
  obrigatorio = false,
}: InputDataHoraProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={nome} className="font-medium text-gray-700">
        {label}
      </label>

      <input
        id={nome}
        name={nome}
        type="datetime-local"
        placeholder={placeholder}
        required={obrigatorio}
        className="rounded-lg border border-gray-300 px-4 py-2 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
      />
    </div>
  );
}
