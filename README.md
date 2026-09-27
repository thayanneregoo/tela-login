# Alunos
- Ana Paula Lemos de Vasconcelos, 
- Bruno Nicacio, 
- Thayanne Fernanda Rego da Silva

# Cais

Plataforma que conecta empresas e profissionais, construída com [Next.js](https://nextjs.org) e um design system próprio chamado **CAIS**.

## Sobre o projeto

O Cais é organizado em torno de três perfis de uso — **empresa**, **profissional** e **admin** — e de uma biblioteca de componentes de formulário e UI reutilizáveis, todos estilizados a partir de um único conjunto de tokens de design (`app/globals.css`), o que garante consistência visual em toda a aplicação.

**Stack principal:**

- [Next.js](https://nextjs.org) (App Router)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS v4](https://tailwindcss.com) via `@theme`

## Design System — CAIS

Todo o visual da aplicação parte dos tokens definidos em `app/globals.css`, dentro do bloco `@theme`. Alterar um token ali reflete automaticamente em todos os componentes que o utilizam.

| Categoria | Tokens | Uso |
|---|---|---|
| Cor primária | `--color-primary`, `--color-primary-strong` | Botões, foco, links |
| Cor de marca | `--color-roxo-mare`, `--color-roxo-fundo`, `--color-verde-atracado` | Gradientes e destaques (login, hero) |
| Cores semânticas | `--color-success`, `--color-warning`, `--color-danger` | Tags, mensagens de erro |
| Cores por perfil | `--color-perfil-admin`, `--color-perfil-empresa`, `--color-perfil-profissional` | Identificação visual de cada tipo de usuário |
| Neutras | `--color-ink`, `--color-mist` | Texto e fundo |
| Tipografia | `--font-display` (Space Grotesk), `--font-sans` (Archivo) | Títulos e texto corrido |
| Raios | `--radius-sm`, `--radius-md`, `--radius-lg`, `--radius-pill` | Bordas arredondadas |
| Sombras | `--shadow-card`, `--shadow-modal` | Elevação de cards e modais |

Também há classes utilitárias em `@layer components` para os padrões mais usados: `.btn` / `.btn-primary` / `.btn-secondary` / `.btn-ghost`, `.field`, `.card`, `.tag` (`-success`, `-warning`, `-danger`, `-primary`) e `.avatar`.

## Componentes

Todos os componentes de formulário seguem o mesmo padrão de props (`label`, `nome`, `placeholder`, `obrigatorio?`) e usam a classe `.field`, incluindo suporte a estado de erro via `data-invalid` + prop `erro`, que renderiza automaticamente um `MensagemErro` associado por `aria-describedby`.

**Campos de texto e valor**
- `InputTexto` — texto, e-mail, telefone, número ou url (via prop `tipo`)
- `InputSenha`
- `InputTelefone`
- `InputUrl`
- `InputNumero`
- `TextAreaCampo`

**Data e hora**
- `InputData`
- `InputDataHora`
- `InputHora`
- `InputMes`

**Seleção**
- `SelectCampo`
- `SelectMultiplo`
- `RadioCampo` / `RadioGrupo`
- `Switch`
- `InputRange`

**Feedback e apoio**
- `MensagemErro`
- `TextoAjuda`

**Páginas**
- `CardLogin` — tela de login com painel de marca (gradiente `roxo-mare` → `roxo-fundo`)
- `PaginaInicial` — página de boas-vindas com CTAs para `/login` e `/cadastro`

**Em desenvolvimento**

Os itens abaixo fazem parte da biblioteca planejada e ainda serão adicionados:

- `BotaoExtendido`
- `CampoAutocomplete`
- `CardTecnologia`
- `CheckBox` / `CheckBoxGrupo`
- `FormularioCompletoExemplo`
- `InputArquivo`
- `InputBusca`
- `InputCor`

## Getting Started

Instale as dependências e rode o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
# ou
bun dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador para ver o resultado.

Você pode começar a editar a página inicial em `app/page.tsx`. A página é atualizada automaticamente conforme o arquivo é salvo.

Este projeto usa [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) para carregar as fontes do design system (Space Grotesk e Archivo) via Google Fonts, com otimização automática.

## Estrutura

```
app/
  globals.css       # tokens e classes do design system CAIS
  page.tsx          # página inicial (PaginaInicial)
  login/
    page.tsx        # tela de login (CardLogin)
components/
  InputTexto.tsx
  InputSenha.tsx
  ...               # demais componentes de formulário
  CardLogin.tsx
  PaginaInicial.tsx
```

## Saiba mais

Para aprender mais sobre Next.js, veja os recursos abaixo:

- [Next.js Documentation](https://nextjs.org/docs) — recursos e API do Next.js.
- [Learn Next.js](https://nextjs.org/learn) — tutorial interativo do Next.js.

Confira também [o repositório do Next.js no GitHub](https://github.com/vercel/next.js) — feedback e contribuições são bem-vindos!

## Deploy na Vercel

A forma mais simples de publicar este projeto é usando a [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme), dos criadores do Next.js.

Veja a [documentação de deploy do Next.js](https://nextjs.org/docs/app/building-your-application/deploying) para mais detalhes.