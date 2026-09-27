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
    <label className="flex cursor-pointer items-center gap-3 text-ink">
      <input
        type="checkbox"
        name={nome}
        value={valor}
        className="h-4 w-4 rounded border-ink/20 accent-primary"
      />

      <span>{label}</span>
    </label>
  );
}
