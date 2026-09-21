interface InputRangeProps {
  label: string;
  nome: string;
  min?: number;
  max?: number;
  step?: number;
  valorInicial?: number;
}

export default function InputRange({
  label,
  nome,
  min = 0,
  max = 100,
  step = 1,
  valorInicial = 50,
}: InputRangeProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={nome} className="font-medium text-gray-700">
        {label}
      </label>

      <input
        id={nome}
        name={nome}
        type="range"
        min={min}
        max={max}
        step={step}
        defaultValue={valorInicial}
        className="w-full"
      />
    </div>
  );
}
