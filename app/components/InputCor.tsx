interface InputCorProps {
  label: string;
  nome: string;
  valorInicial?: string;
}

export default function InputCor({
  label,
  nome,
  valorInicial = "#2563eb",
}: InputCorProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={nome} className="font-medium text-gray-700">
        {label}
      </label>

      <input
        id={nome}
        name={nome}
        type="color"
        defaultValue={valorInicial}
        className="h-12 w-20 cursor-pointer rounded-lg border border-gray-300 bg-white p-1"
      />
    </div>
  );
}
