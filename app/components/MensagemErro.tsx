interface MensagemErroProps {
  mensagem: string;
  id?: string;
}

export default function MensagemErro({ mensagem, id }: MensagemErroProps) {
  return (
    <p id={id} role="alert" className="text-sm font-medium text-danger">
      {mensagem}
    </p>
  );
}
