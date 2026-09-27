interface InputCorProps {
  label: string;
  nome: string;
  valorInicial?: string;
}

export default function InputCor({
  label,
  nome,
  valorInicial = "#7c5cff",
}: InputCorProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={nome} className="text-sm font-medium text-ink">
        {label}
      </label>

      <input
        id={nome}
        name={nome}
        type="color"
        defaultValue={valorInicial}
        className="h-12 w-20 cursor-pointer rounded-md border border-ink/15 bg-white p-1"
      />
    </div>
  );
}
