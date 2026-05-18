# SDD — Site Institucional Tandera Tech

> Formato: [GitHub Spec Kit](https://github.com/github/spec-kit)  
> Status: **Em desenvolvimento** · Criado: 2026-05-18

---

## 1. Problema

Fábricas de blocos de concreto perdem peças com defeito para os clientes porque a inspeção visual manual é amostral e tardia. A Tandera Tech resolveu esse problema com câmera + IA. O site precisa comunicar esse valor para donos de fábricas e gestores de produção de forma direta e convincente — e converter visitas em contatos/leads para o Programa Piloto.

## 2. Objetivo

Criar um site institucional de alta conversão que:

1. Comunica em ≤ 5 segundos o que a Tandera faz e para quem.
2. Convence o dono da fábrica de que precisa da solução (dor → solução → prova).
3. Explica o produto de forma simples para o gestor de produção.
4. Converte visitantes em leads pelo CTA "Quero reduzir perdas na minha fábrica".

## 3. Fora de escopo

- Dashboard web da Tandera (produto interno).
- Integração com Google Meet ou Teams.
- Sistema de autenticação ou área de clientes.
- Multi-idioma (apenas PT-BR por agora).
- Blog ou conteúdo editorial.

## 4. Stakeholders

| Papel | Quem |
|---|---|
| Cliente / dono do projeto | Tandera Tech |
| Dev / implementação | Claude Code |
| Design reference | Claude Design (design system já produzido) |

## 5. Solução proposta

### Stack
- **Next.js 15** (App Router, Server Components por padrão)
- **React 19**
- **Tailwind CSS v4** (tokens via `@theme` no globals.css)
- **TypeScript**
- **Lucide React** (iconografia outline geométrica)

### Estrutura de páginas

| Página | Rota | Status |
|---|---|---|
| Homepage | `/` | 🔲 Pendente |
| Como funciona | `/como-funciona` | 🔲 Pendente |
| Produto | `/produto` | 🔲 Pendente |
| Contato | `/contato` | 🔲 Pendente |

### Seções da Homepage (em ordem)

1. **Navbar** — fixa, logo + nav + CTA
2. **Hero** — headline forte + visual de detecção com bounding box
3. **O Problema** — tensão antes da solução
4. **Como Funciona** — 3 passos (câmera → IA → alerta)
5. **Defeitos Identificados** — grid de defeitos que a IA já detecta
6. **Alertas em Tempo Real** — mockup WhatsApp + valor operacional
7. **Painel e Relatórios** — prova de gestão histórica
8. **Instalação sem parar a produção** — resposta à objeção principal
9. **Programa Piloto** — oferta + CTA
10. **CTA Final** — conversão
11. **Footer**

### Animação de scroll (seção especial)
Sequência de frames de vídeo da máquina Poyatos controlada pelo scroll.  
~240 frames WebP, 8 etapas de scroll, 30 frames por etapa.  
Ver `docs/scroll-animation.md` (a criar na fase de implementação).

## 6. Design System

Fonte da verdade: `tandera-web-design/references/design-system.md`  
Tokens CSS: `src/app/globals.css`  
Componentes base: `src/components/ui/`

Cores principais: `#232323` (ink), `#1effd7` (aqua), `#e8e8e8` (cloud), `#ffffff`  
Fontes: MuseoModerno 800 italic (display) · Jost 400/500/700 (corpo)

## 7. Critérios de sucesso

- [ ] `npm run dev` sobe sem erros em Node 24
- [ ] `npm run build` completa sem erros de tipo
- [ ] Lighthouse mobile: Performance ≥ 85, Accessibility ≥ 90
- [ ] Todas as seções da homepage implementadas e revisadas
- [ ] Responsivo: mobile 375px, tablet 768px, desktop 1280px
- [ ] `prefers-reduced-motion` respeita animações
- [ ] Contraste WCAG 2.1 AA em todos os textos

## 8. Plano de implementação

### Fase 1 — Fundação (atual)
- [x] Projeto Next.js 15 criado
- [x] Design tokens (globals.css) aplicados
- [x] Fontes configuradas (MuseoModerno, Jost)
- [x] Assets copiados (logo, fotos)
- [x] Repositório Git + GitHub criado
- [ ] Componentes primitivos: Button, Section, StatusBadge, DetectionBox

### Fase 2 — Navbar + Hero
- [ ] Navbar (sticky, blur, mobile menu)
- [ ] Hero (headline + visual com bounding box)
- [ ] Checkpoint: screenshot mobile + desktop

### Fase 3 — Seções de conversão
- [ ] O Problema
- [ ] Como Funciona
- [ ] Defeitos Identificados
- [ ] Alertas em Tempo Real (mockup WhatsApp)

### Fase 4 — Prova e conversão
- [ ] Painel e Relatórios
- [ ] Instalação sem parar a produção
- [ ] Programa Piloto
- [ ] CTA Final + Footer

### Fase 5 — Animação de scroll
- [ ] Extração de frames do vídeo Poyatos
- [ ] Implementação da sequência controlada por scroll
- [ ] Otimização (WebP, lazy load, prefers-reduced-motion)

### Fase 6 — Polimento e entrega
- [ ] Revisão de acessibilidade (design:accessibility-review)
- [ ] Lighthouse audit
- [ ] Deploy (Vercel)
