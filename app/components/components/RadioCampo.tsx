interface RadioCampoProps {
  label: string;
  nome: string;
  valor: string;
}

export default function RadioCampo({
  label,
  nome,
  valor,
}: RadioCampoProps) {
  return (
    <label className="flex cursor-pointer items-center gap-3 text-gray-700">
      <input
        type="radio"
        name={nome}
        value={valor}
        className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
      />

      <span>{label}</span>
    </label>
  );
}
