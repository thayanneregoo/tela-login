interface TextoAjudaProps {
  texto: string;
}

export default function TextoAjuda({
  texto,
}: TextoAjudaProps) {
  return <p className="text-sm text-gray-500">{texto}</p>;
}
