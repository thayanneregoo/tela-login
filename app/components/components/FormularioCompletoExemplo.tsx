import InputTexto from "./InputTexto";
import InputSenha from "./InputSenha";
import InputNumero from "./InputNumero";
import InputTelefone from "./InputTelefone";
import InputData from "./InputData";
import InputHora from "./InputHora";
import InputDataHora from "./InputDataHora";
import InputMes from "./InputMes";
import InputUrl from "./InputUrl";
import InputBusca from "./InputBusca";
import InputArquivo from "./InputArquivo";
import InputRange from "./InputRange";
import InputCor from "./InputCor";
import SelectCampo from "./SelectCampo";
import SelectMultiplo from "./SelectMultiplo";
import CheckBox from "./CheckBox";
import CheckBoxGrupo from "./CheckBoxGrupo";
import RadioGrupo from "./RadioGrupo";
import Switch from "./Switch";
import TextAreaCampo from "./TextAreaCampo";
import CampoAutocomplete from "./CampoAutocomplete";
import TextoAjuda from "./TextoAjuda";
import MensagemErro from "./MensagemErro";
import BotaoExtendido from "./BotaoExtendido";

export default function FormularioCompletoExemplo() {
  const cursos = [
    { valor: "ads", texto: "Análise e Desenvolvimento de Sistemas" },
    { valor: "si", texto: "Sistemas de Informação" },
    { valor: "cc", texto: "Ciência da Computação" },
  ];

  const linguagens = [
    { valor: "js", texto: "JavaScript" },
    { valor: "ts", texto: "TypeScript" },
    { valor: "python", texto: "Python" },
    { valor: "java", texto: "Java" },
  ];

  const turnos = [
    { valor: "manha", texto: "Manhã" },
    { valor: "tarde", texto: "Tarde" },
    { valor: "noite", texto: "Noite" },
  ];

  const interesses = [
    { valor: "frontend", texto: "Front-end" },
    { valor: "backend", texto: "Back-end" },
    { valor: "dados", texto: "Dados" },
  ];

  const cidades = [
    "Recife",
    "Olinda",
    "Jaboatão dos Guararapes",
    "Paulista",
    "Caruaru",
  ];

  return (
    <form className="mx-auto flex max-w-3xl flex-col gap-6 rounded-2xl bg-white p-8 shadow-md">
      <h1 className="text-3xl font-bold text-gray-900">
        Formulário completo
      </h1>

      <InputTexto
        label="Nome"
        nome="nome"
        placeholder="Digite seu nome completo"
        obrigatorio
      />

      <InputTexto
        label="E-mail"
        nome="email"
        tipo="email"
        placeholder="Digite seu e-mail"
        obrigatorio
      />

      <InputSenha
        label="Senha"
        nome="senha"
        placeholder="Digite sua senha"
        obrigatorio
      />

      <InputNumero
        label="Idade"
        nome="idade"
        placeholder="Digite sua idade"
        min={16}
        max={100}
      />

      <InputTelefone
        label="Telefone"
        nome="telefone"
        placeholder="(81) 99999-9999"
      />

      <InputData
        label="Data de nascimento"
        nome="nascimento"
        placeholder="Selecione uma data"
      />

      <InputHora
        label="Horário preferido"
        nome="horario"
        placeholder="Selecione um horário"
      />

      <InputDataHora
        label="Data e hora"
        nome="dataHora"
        placeholder="Selecione data e hora"
      />

      <InputMes
        label="Mês de ingresso"
        nome="mesIngresso"
        placeholder="Selecione o mês"
      />

      <InputUrl
        label="Portfólio"
        nome="portfolio"
        placeholder="https://seusite.com"
      />

      <InputBusca
        label="Buscar"
        nome="busca"
        placeholder="Digite um termo"
      />

      <CampoAutocomplete
        label="Cidade"
        nome="cidade"
        placeholder="Digite ou selecione uma cidade"
        sugestoes={cidades}
      />

      <SelectCampo
        label="Curso"
        nome="curso"
        placeholder="Selecione um curso"
        opcoes={cursos}
      />

      <SelectMultiplo
        label="Linguagens conhecidas"
        nome="linguagens"
        opcoes={linguagens}
      />

      <RadioGrupo
        titulo="Turno"
        nome="turno"
        opcoes={turnos}
      />

      <CheckBoxGrupo
        titulo="Áreas de interesse"
        nome="interesses"
        opcoes={interesses}
      />

      <CheckBox
        label="Aceito os termos"
        nome="termos"
      />

      <Switch
        label="Receber notificações"
        nome="notificacoes"
      />

      <InputRange
        label="Nível de interesse"
        nome="interesse"
        min={0}
        max={10}
        valorInicial={5}
      />

      <InputCor
        label="Cor preferida"
        nome="corPreferida"
      />

      <InputArquivo
        label="Foto de perfil"
        nome="foto"
        aceitar="image/*"
      />

      <TextAreaCampo
        label="Observações"
        nome="observacoes"
        placeholder="Digite alguma observação"
      />

      <TextoAjuda texto="Use pelo menos 8 caracteres na senha." />
      <MensagemErro mensagem="Exemplo de mensagem de erro." />

      <div className="flex gap-3">
        <BotaoExtendido
          texto="Enviar"
          tipo="submit"
          larguraTotal={false}
        />

        <BotaoExtendido
          texto="Limpar"
          tipo="reset"
          cor="bg-gray-500 hover:bg-gray-600"
          larguraTotal={false}
        />
      </div>
    </form>
  );
}
