# Traceability

Status: REVISADO — Luiz Eduardo, 2026-11-13

Testes manuais executados em http://localhost e no site publicado, todos aprovados.

| Requirement | Feature | Task | Test | Evidence |
|---|---|---|---|---|
| RF-001 | FEAT-001 (AC-001) | TASK-002 | T-001 | Captura da página inicial; console sem erros |
| RF-002 | FEAT-001 (AC-002) | TASK-002 | T-002 | Clique em Projetos leva à seção (verificado) |
| RF-003 | FEAT-001 | TASK-002 | Inspeção visual | Seção Projetos com 3 cartões |
| RF-004 | FEAT-001 | TASK-002 | Inspeção visual | Seção Competências |
| RF-005 | FEAT-001 (AC-004) | TASK-002 | T-004 | 4 links externos em nova aba, HTTP 200 |
| RF-006 | FEAT-001 (AC-003) | TASK-002 | T-003 | DevTools 390 px: scrollWidth = 390 |
| RNF-001 | FEAT-001 (AC-003) | TASK-002 | T-003 | DevTools 390 px e desktop |
| RNF-002 | FEAT-001 | TASK-002 | T-005 | Tab com contorno âmbar visível; script de contraste AA |
| RNF-003 | FEAT-001 | TASK-002 | T-001 | Sem CDN ou dependências; console sem erros |
| RNF-004 | FEAT-001 (AC-004) | TASK-002 | T-004 | rel="noopener noreferrer" e HTTP 200 |
| RNF-005 | FEAT-001 | TASK-004 | Revisão de conteúdo | docs/security-review.md |

AC-005 (texto alternativo): a página não usa imagens informativas (`<img>`); ícones são SVG decorativos com `aria-hidden="true"`. Critério atendido por inspeção do index.html.

## Testes
- T-001: página carrega sem erros de console.
- T-002: menu navega até a seção (Projetos verificado).
- T-003: em 390 px não há rolagem horizontal.
- T-004: os 4 links externos abrem em nova aba e respondem HTTP 200.
- T-005: Tab foca os links com contorno visível.
