# High-Level Design

Status: REVISADO — Luiz Eduardo, 2026-11-13

## Candidate architecture
Opção A (escolhida, ver ADR-0001): HTML5, CSS3 e JavaScript puros, hospedados no GitHub Pages. Vantagens: simplicidade, custo zero para repositório público, leveza e fácil manutenção. Limitação: recursos dinâmicos precisam de serviços externos. Opção B (React/Next.js) descartada por adicionar configuração e build desnecessários.

## Boundaries, components and data flows
- Hospedagem: GitHub Pages, deploy a partir da branch main, pasta raiz. Sem build; o que está no repositório é o que é servido.
- index.html: página única com cinco seções (apresentação, Sobre, Competências, Projetos, Contato), header fixo com menu e skip link.
- style.css: layout responsivo, tokens de cor, tema claro/escuro via atributo data no elemento raiz, animações só com prefers-reduced-motion: no-preference.
- script.js: menu hambúrguer (aria-expanded, fecha com Esc), alternância de tema com localStorage em try/catch, link ativo do menu via IntersectionObserver, ano do rodapé.
- Fluxo de dados: não há. Conteúdo estático; a única persistência é a preferência de tema no navegador do visitante.
- Integrações externas: apenas links de saída (GitHub). Sem CDN, fontes externas, analytics ou formulário.
- Rollback: reverter o commit na main; o Pages republica (o primeiro build levou cerca de 1 minuto).
