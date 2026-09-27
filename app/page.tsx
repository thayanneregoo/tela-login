

import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-mist">
      <header className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-3">
          <span className="avatar">C</span>
          <span className="font-display text-lg text-ink">Cais</span>
        </div>

        <Link
          href="/login"
          className="text-sm font-medium text-primary-strong hover:underline"
        >
          Entrar
        </Link>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(160deg, var(--color-roxo-mare) 0%, var(--color-roxo-fundo) 100%)",
          }}
        />

        <svg
          className="absolute bottom-0 left-0 w-full"
          viewBox="0 0 600 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M0 100C100 140 200 60 300 100C400 140 500 60 600 100V200H0V100Z"
            fill="white"
            fillOpacity="0.08"
          />
          <path
            d="M0 130C100 170 200 90 300 130C400 170 500 90 600 130V200H0V130Z"
            fill="white"
            fillOpacity="0.12"
          />
        </svg>

        <div className="relative mx-auto max-w-3xl px-6 py-24 text-center text-white">
          <h1 className="font-display text-3xl sm:text-4xl">
            Bem-vindo à Cais
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-white/80">
            O ponto de encontro entre empresas e profissionais. Encontre a
            próxima oportunidade ou o próximo talento em um só lugar.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/cadastro"
              className="btn bg-white text-primary-strong hover:bg-mist"
            >
              Criar conta
            </Link>

            <Link
              href="/login"
              className="btn border border-white/40 text-white hover:bg-white/10"
            >
              Entrar
            </Link>
          </div>
        </div>
      </section>

      {/* Escolha de perfil */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-center font-display text-xl text-ink">
          Como você quer entrar?
        </h2>

        <p className="mt-2 text-center text-sm text-ink/60">
          Escolha o perfil que combina com você para criar sua conta.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <Link
            href="/cadastro?perfil=empresa"
            className="card flex flex-col gap-4 transition hover:shadow-modal"
          >
            <span
              className="avatar"
              style={{ background: "var(--color-perfil-empresa)" }}
            >
              E
            </span>

            <div>
              <h3 className="font-display text-lg text-ink">Sou empresa</h3>
              <p className="mt-1 text-sm text-ink/60">
                Publique vagas, encontre profissionais e gerencie contratos em
                um painel só.
              </p>
            </div>

            <span className="tag tag-success w-fit">Para empresas</span>
          </Link>

          <Link
            href="/cadastro?perfil=profissional"
            className="card flex flex-col gap-4 transition hover:shadow-modal"
          >
            <span
              className="avatar"
              style={{ background: "var(--color-perfil-profissional)" }}
            >
              P
            </span>

            <div>
              <h3 className="font-display text-lg text-ink">
                Sou profissional
              </h3>
              <p className="mt-1 text-sm text-ink/60">
                Monte seu perfil, receba propostas e acompanhe seus contratos
                ativos.
              </p>
            </div>

            <span className="tag tag-warning w-fit">Para profissionais</span>
          </Link>
        </div>

        <p className="mt-10 text-center text-sm text-ink/60">
          Já tem uma conta?{" "}
          <Link
            href="/login"
            className="font-medium text-primary-strong hover:underline"
          >
            Entrar
          </Link>
        </p>
      </section>

      <footer className="border-t border-ink/10 py-6 text-center text-xs text-ink/50">
        © {new Date().getFullYear()} Cais
      </footer>
    </div>
  );
}