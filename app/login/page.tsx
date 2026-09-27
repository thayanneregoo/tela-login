"use client";

import { useState, type FormEvent } from "react";
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

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
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
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-mist px-4">
      {/* Manchas de fundo, ecoando as cores da marca */}
      <div
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full opacity-30 blur-3xl"
        style={{ background: "var(--color-roxo-mare)" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-40 -left-24 h-80 w-80 rounded-full opacity-20 blur-3xl"
        style={{ background: "var(--color-verde-atracado)" }}
        aria-hidden="true"
      />

      <div className="relative w-full max-w-md">
        <div className="card overflow-hidden p-0 shadow-modal">
          <div
            className="h-1.5 w-full"
            style={{
              background:
                "linear-gradient(90deg, var(--color-roxo-mare), var(--color-roxo-fundo))",
            }}
          />

          <div className="p-8">
            <div className="mb-8 flex flex-col items-center text-center">
              <span className="avatar mb-4 h-11 w-11 text-sm">C</span>

              <h1 className="font-display text-2xl text-ink">
                Bem-vindo de volta
              </h1>

              <p className="mt-2 text-sm text-ink/60">
                Ancore de novo na sua conta para continuar.
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
                  className="text-sm font-medium text-primary-strong hover:underline"
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

            <p className="mt-8 text-center text-sm text-ink/60">
              Ainda não possui uma conta?{" "}
              <a
                href="/cadastro"
                className="font-semibold text-primary-strong hover:underline"
              >
                Criar conta
              </a>
            </p>
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-ink/40">
          © {new Date().getFullYear()} Cais — todos os direitos reservados.
        </p>
      </div>
    </main>
  );
}