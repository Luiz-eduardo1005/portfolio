# ADR-0001: Arquitetura do portfólio (HTML/CSS/JS estático)

Status: REVISADO — Luiz Eduardo, 2026-11-13

## Status
Aceita (2026-11-13).

## Contexto
Site de uma página, com conteúdo fixo, sem login, banco de dados ou formulário. Precisa ser publicado sem custo, carregar rápido e ser fácil de atualizar pelo autor.

## Options
- Opção A (escolhida): HTML5, CSS3 e JavaScript puros, hospedados no GitHub Pages (deploy a partir da branch main, pasta raiz). Vantagens: simplicidade, custo zero para repositório público, leveza, nenhuma etapa de build, manutenção direta nos três arquivos. Limitação: recursos dinâmicos exigiriam serviços externos.
- Opção B: React/Next.js. Oferece componentes reutilizáveis, mas adiciona configuração, dependências e build desnecessários para uma página com cinco seções.

## Decision
Adotar a Opção A. O volume de conteúdo e a ausência de dados dinâmicos não justificam framework.

## Consequências
- Positivas: publicação por push na main; sem dependências para atualizar; carregamento rápido (RNF-003).
- Negativas: sem componentização; se o site crescer (várias páginas, blog, formulário com envio), reavaliar e registrar novo ADR.
- Tema claro/escuro por atributo data no elemento raiz e CSS, sem biblioteca.
