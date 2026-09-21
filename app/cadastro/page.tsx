"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import InputTexto from "../components/InputTexto";
import InputTelefone from "../components/InputTelefone";
import InputSenha from "../components/InputSenha";
import CheckBox from "../components/CheckBox";
import TextoAjuda from "../components/TextoAjuda";
import BotaoExtendido from "../components/BotaoExtendido";
import MensagemErro from "../components/MensagemErro";

export default function CadastroPage() {
  const router = useRouter();
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErro(null);

    const formData = new FormData(event.currentTarget);
    const nome = formData.get("nome") as string;
    const email = formData.get("email") as string;
    const telefone = formData.get("telefone") as string;
    const senha = formData.get("senha") as string;
    const confirmarSenha = formData.get("confirmarSenha") as string;
    const aceitaTermos = formData.get("termos") === "sim";

    if (senha !== confirmarSenha) {
      setErro("As senhas informadas não coincidem.");
      return;
    }

    if (!aceitaTermos) {
      setErro("Você precisa aceitar os termos de uso para continuar.");
      return;
    }

    setCarregando(true);

    try {
      const response = await fetch("/api/cadastro", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, email, telefone, senha }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        throw new Error(data?.mensagem ?? "Não foi possível concluir o cadastro.");
      }

      router.push("/login");
    } catch (err) {
      setErro(
        err instanceof Error ? err.message : "Não foi possível concluir o cadastro."
      );
    } finally {
      setCarregando(false);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-10">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Criar conta</h1>

          <p className="mt-2 text-gray-500">
            Preencha seus dados para começar a usar o sistema.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <InputTexto
            label="Nome completo"
            nome="nome"
            tipo="text"
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

          <InputTelefone
            label="Telefone"
            nome="telefone"
            placeholder="(00) 00000-0000"
            obrigatorio
          />

          <InputSenha
            label="Senha"
            nome="senha"
            placeholder="Crie uma senha"
            obrigatorio
          />

          <div className="flex flex-col gap-2">
            <InputSenha
              label="Confirmar senha"
              nome="confirmarSenha"
              placeholder="Repita a senha"
              obrigatorio
            />
            <TextoAjuda texto="Use pelo menos 8 caracteres, com letras e números." />
          </div>

          <CheckBox label="Li e aceito os termos de uso" nome="termos" />

          {erro && <MensagemErro mensagem={erro} />}

          <BotaoExtendido
            texto={carregando ? "Criando conta..." : "Criar conta"}
            tipo="submit"
          />
        </form>

        <p className="mt-8 text-center text-sm text-gray-500">
          Já possui uma conta?{" "}
          <a
            href="/login"
            className="font-semibold text-blue-600 hover:underline"
          >
            Entrar
          </a>
        </p>
      </div>
    </main>
  );
}
