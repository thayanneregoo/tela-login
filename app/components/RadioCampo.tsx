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
    <label className="flex cursor-pointer items-center gap-3 text-ink">
      <input
        type="radio"
        name={nome}
        value={valor}
        className="h-4 w-4 accent-primary"
      />

      <span>{label}</span>
    </label>
  );
}
