interface CheckBoxProps {
  label: string;
  nome: string;
  valor?: string;
}

export default function CheckBox({
  label,
  nome,
  valor = "sim",
}: CheckBoxProps) {
  return (
    <label className="flex cursor-pointer items-center gap-3 text-gray-700">
      <input
        type="checkbox"
        name={nome}
        value={valor}
        className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
      />

      <span>{label}</span>
    </label>
  );
}
