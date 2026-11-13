# PRD

Status: REVISADO — Luiz Eduardo, 2026-11-13

## Functional requirements
Cada requisito traz a forma de verificação.
- RF-001: Exibir nome profissional, apresentação e área de interesse. Verificação: abrir a página e conferir a apresentação (AC-001, T-001).
- RF-002: Disponibilizar navegação para cinco seções. Verificação: clicar nos itens do menu e conferir que a página rola até a seção (AC-002, T-002).
- RF-003: Exibir pelo menos duas experiências/projetos (acadêmicos são válidos). Verificação: contar os cartões na seção Projetos; o site traz três (Rotas Seguras, Energia da Casa, Myths — Duel for the Throne).
- RF-004: Mostrar competências técnicas e socioemocionais. Verificação: conferir os dois grupos na seção Competências.
- RF-005: Oferecer links externos para GitHub e contato profissional. Verificação: acionar cada link externo e conferir destino em nova aba (AC-004, T-004). O contato é o perfil do GitHub; não há e-mail nem formulário.
- RF-006: Permitir navegação confortável em dispositivos móveis. Verificação: em 390 px, usar o menu hambúrguer e conferir ausência de rolagem horizontal (AC-003, T-003).

## Quality requirements
- RNF-001: Layout responsivo em tela pequena e desktop. Verificação: DevTools em 390 px e em desktop; scrollWidth igual à largura da janela (T-003).
- RNF-002: Contraste legível e navegação acessível pelo teclado. Verificação: Tab percorre os links com contorno visível (T-005); contraste AA conferido por script.
- RNF-003: Carregamento rápido, sem dependências desnecessárias. Verificação: nenhuma requisição a CDN ou fonte externa no DevTools; console sem erros (T-001).
- RNF-004: Links externos seguros e funcionando. Verificação: rel="noopener noreferrer" e resposta HTTP 200 dos quatro links externos (T-004).
- RNF-005: Sem expor informações pessoais sensíveis. Verificação: revisão do conteúdo publicado; sem telefone, endereço, documentos, formulário ou coleta de dados.

## Critérios de aceitação
AC-001 a AC-005 estão em specs/001-feature/feature-spec.md, no formato Dado/Quando/Então.
