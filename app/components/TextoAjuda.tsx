interface TextoAjudaProps {
  texto: string;
}

export default function TextoAjuda({
  texto,
}: TextoAjudaProps) {
  return <p className="text-sm text-ink/60">{texto}</p>;
}
