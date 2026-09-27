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
      <label htmlFor={nome} className="text-sm font-medium text-ink">
        {label}
      </label>

      <input
        id={nome}
        name={nome}
        type="file"
        accept={aceitar}
        required={obrigatorio}
        className="rounded-md border border-ink/15 bg-white px-3 py-2.5 text-sm text-ink file:mr-4 file:rounded-md file:border-0 file:bg-primary/10 file:px-4 file:py-2 file:font-semibold file:text-primary-strong"
      />
    </div>
  );
}
