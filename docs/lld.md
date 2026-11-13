# Low-Level Design

Status: REVISADO — Luiz Eduardo, 2026-11-13

## Contracts, schemas, errors and tests
- Estrutura: header com nav (âncoras das quatro seções do menu), main com as seções, footer com ano gerado por JS.
- Menu móvel: até 650 px o menu vira botão hambúrguer; o botão mantém aria-expanded atualizado e Esc fecha o menu.
- Tema: atributo data no elemento raiz define as variáveis de cor. localStorage lido e escrito dentro de try/catch; se falhar, vale o tema padrão.
- Link ativo: IntersectionObserver observa as seções, incluindo a de apresentação (hero), para nenhum item ficar marcado no topo. Bug encontrado nos testes e corrigido.
- Links externos: target="_blank" com rel="noopener noreferrer".
- Acessibilidade: skip link, foco visível (contorno sólido âmbar), contraste AA conferido por script, animações só com prefers-reduced-motion: no-preference.
- Erros tratados: localStorage indisponível. Não há chamadas de rede.
- Caso de borda testado: largura 390 px sem rolagem horizontal (T-003).
- Testes: docs/traceability.md (T-001 a T-005, manuais).
