# CLAUDE.md — tandera-site

Diretrizes para este projeto. Seguem os princípios de Karpathy adaptados ao contexto.

---

## Regras gerais

- **Não assuma. Não esconda confusão.** Antes de implementar, liste assunções e pergunte se houver ambiguidade.
- **Mínimo que resolve o problema.** Sem features extras, sem abstrações preventivas, sem configurabilidade não pedida.
- **Mudanças cirúrgicas.** Toque só o que a tarefa exige. Não melhore código adjacente.
- **Critério de sucesso explícito.** Toda tarefa tem uma verificação concreta antes de encerrar.

## Stack e convenções

- Next.js 15, React 19, Tailwind v4, TypeScript.
- Componentes são Server Components por padrão. Só usar `'use client'` onde há interação real (menu mobile, scroll animation, formulário).
- Tokens de design vêm do `globals.css` — nunca hardcode cores ou fontes inline.
- Fontes: `museomoderno` e `jost` de `src/lib/fonts.ts`.

## Estrutura de arquivos

```
src/
  app/           → rotas (page.tsx, layout.tsx)
  components/
    ui/          → primitivos (Button, Section, StatusBadge, DetectionBox)
    sections/    → seções da homepage (Hero, ComoFunciona…)
    layout/      → Navbar, Footer
  lib/           → utilitários (fonts.ts, utils.ts)
public/
  img/           → fotos reais da fábrica (não altere os nomes)
  logo/          → lockups e ícones da marca
docs/
  SDD.md         → fonte da verdade do projeto
```

## Design system

Fonte da verdade: `../tandera-web-design/references/design-system.md`

Cores principais:
- `ink` (`#232323`) — fundo escuro
- `aqua` (`#1effd7`) — acento, CTA, glow (nunca use como fundo dominante)
- `text-dark` (`#ffffff`) — texto sobre escuro
- `text-dark-muted` (`#a8aaa9`) — texto secundário

Tipografia:
- Títulos: `font-display` (MuseoModerno 800 italic)
- Corpo/UI: `font-sans` (Jost 400/500/700)

## O que NÃO fazer

- Não crie páginas além das definidas no SDD sem pedir confirmação.
- Não adicione animações sem verificar `prefers-reduced-motion`.
- Não use imagens de stock genéricas de IA (cérebros, robôs, Matrix).
- Não invente métricas — marque com `[placeholder]` o que não está validado.
- Não use o aqua como fundo de blocos grandes.
- Não implemente banco de dados, auth ou multi-server.
