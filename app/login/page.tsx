"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import InputTexto from "../components/InputTexto";
import InputSenha from "../components/InputSenha";
import CheckBox from "../components/CheckBox";
import BotaoExtendido from "../components/BotaoExtendido";
import MensagemErro from "../components/MensagemErro";

export default function LoginPage() {
  const router = useRouter();
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErro(null);

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;
    const senha = formData.get("senha") as string;
    const lembrar = formData.get("lembrar") === "sim";

    setCarregando(true);

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, senha, lembrar }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        throw new Error(data?.mensagem ?? "E-mail ou senha inválidos.");
      }

      router.push("/");
      router.refresh();
    } catch (err) {
      setErro(
        err instanceof Error ? err.message : "Não foi possível fazer login."
      );
    } finally {
      setCarregando(false);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Bem-vindo novamente
          </h1>

          <p className="mt-2 text-gray-500">
            Informe seus dados para acessar o sistema.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
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
            <CheckBox label="Lembrar de mim" nome="lembrar" />

            <a
              href="/esqueci-senha"
              className="text-sm font-medium text-blue-600 hover:underline"
            >
              Esqueci minha senha
            </a>
          </div>

          {erro && <MensagemErro mensagem={erro} />}

          <BotaoExtendido
            texto={carregando ? "Entrando..." : "Entrar"}
            tipo="submit"
          />
        </form>

        <p className="mt-8 text-center text-sm text-gray-500">
          Ainda não possui uma conta?{" "}
          <a
            href="/cadastro"
            className="font-semibold text-blue-600 hover:underline"
          >
            Criar conta
          </a>
        </p>
      </div>
    </main>
  );
}
