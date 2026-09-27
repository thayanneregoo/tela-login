import InputTexto from "./InputTexto";
import InputSenha from "./InputSenha";
import CheckBox from "./CheckBox";
import BotaoExtendido from "./BotaoExtendido";

export default function CardLogin() {
  return (
    <div className="card w-full max-w-md">
      <div className="mb-8">
        <h1 className="text-3xl text-ink">
          Bem-vindo novamente
        </h1>

        <p className="mt-2 text-ink/60">
          Informe seus dados para acessar o sistema.
        </p>
      </div>

      <form className="flex flex-col gap-5">
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

        <div className="flex items-center justify-between gap-4">
          <CheckBox
            label="Lembrar de mim"
            nome="lembrar"
          />

          <a
            href="#"
            className="text-sm font-semibold text-primary-strong hover:underline"
          >
            Esqueci minha senha
          </a>
        </div>

        <BotaoExtendido
          texto="Entrar"
          tipo="submit"
        />
      </form>

      <p className="mt-8 text-center text-sm text-ink/60">
        Ainda não possui uma conta?{" "}
        <a
          href="#"
          className="font-semibold text-primary-strong hover:underline"
        >
          Criar conta
        </a>
      </p>
    </div>
  );
}
