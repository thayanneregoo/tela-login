interface InputArquivoProps {
  label: string;
  nome: string;
  aceitar?: string;
  obrigatorio?: boolean;
}

export default function InputArquivo({
  label,
  nome,
  aceitar,
  obrigatorio = false,
}: InputArquivoProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={nome} className="font-medium text-gray-700">
        {label}
      </label>

      <input
        id={nome}
        name={nome}
        type="file"
        accept={aceitar}
        required={obrigatorio}
        className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-700 file:mr-4 file:rounded-md file:border-0 file:bg-blue-50 file:px-4 file:py-2 file:font-medium file:text-blue-700"
      />
    </div>
  );
}
