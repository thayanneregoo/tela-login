interface MensagemErroProps {
  mensagem: string;
}

export default function MensagemErro({
  mensagem,
}: MensagemErroProps) {
  return (
    <p role="alert" className="text-sm font-medium text-red-600">
      {mensagem}
    </p>
  );
}
