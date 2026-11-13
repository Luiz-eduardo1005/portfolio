# Security and privacy

Status: REVISADO — Luiz Eduardo, 2026-11-13

## Risks
| Risco | Mitigação |
|---|---|
| Exposição de dados pessoais (endereço, telefone, RG/CPF, histórico acadêmico, fotos de terceiros) | Conteúdo limitado a nome, formação, competências, projetos e link do GitHub; sem formulário nem coleta de dados |
| Tabnabbing em links externos | target="_blank" com rel="noopener noreferrer" em todos os links externos |
| Segredos no repositório (tokens, senhas) | Nenhum segredo no código; o site não usa credenciais |
| Código de terceiros comprometido | Sem CDN, bibliotecas ou fontes externas |
| Repositórios privados de projetos | Aparecem apenas com o link do site publicado, nunca o código |
| Falha de localStorage | Acesso em try/catch; o site funciona com o tema padrão |
| Acessibilidade e licenças | Skip link, foco visível, contraste AA, aria-expanded no menu; conferir licença de qualquer imagem ou fonte adicionada |

## Controls and evidence
- Links externos: T-004 (nova aba, HTTP 200).
- Contraste e teclado: script de contraste e T-005.
- Console sem erros: T-001.
- Não houve teste de penetração nem varredura automática; o escopo estático e sem entrada de dados reduz a superfície de ataque.
- Pendência: nenhuma aberta.
