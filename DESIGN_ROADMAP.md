# Larbaco.com Design Roadmap

Objetivo: aplicar a identidade visual desktop criada em `About` e `Contact` ao restante do site, sem alterar menu e footer.

## Regras de Execucao

- Trabalhar uma pagina por vez.
- Apos cada pagina, parar e pedir validacao antes de seguir para a proxima.
- Nao alterar navbar/menu.
- Nao alterar footer.
- Manter o tema dark atual:
  - canvas: `#0d1117`
  - surface: `#161b22`
  - border: `#30363d`
  - text primary: `#e6edf3`
  - text secondary: `#8b949e`
  - accent green: `#00ff9d`
  - accent blue: `#58a6ff`
- Prioridade inicial: desktop. Mobile deve continuar funcional, mas a aprovacao visual desta etapa e desktop.
- Evitar cards repetitivos sem hierarquia.
- Preferir composicao moderna com:
  - duas colunas quando fizer sentido
  - labels monospace numerados
  - paineis de destaque
  - linhas finas
  - bordas sutis
  - CTAs integrados
  - grids assimetricos quando melhorar a composicao
- Nao adicionar dependencias visuais novas sem necessidade.

## Identidade Visual Aprovada

Base extraida das paginas `About` e `Contact`:

- Corpo com largura maior em desktop: `max-width: 1180px`.
- Secoes com labels numerados, exemplo: `01 / SOBRE`, `02 / Jornada profissional`.
- Cards com `background: var(--bg-surface)`, borda fina e acento superior quando houver destaque.
- Paineis laterais com gradiente sutil azul/verde sobre surface.
- CTAs como faixas horizontais, nao apenas links soltos.
- Layouts desktop com intencao:
  - `About`: hero em duas colunas, timeline horizontal, workflow 2x2, CTA band.
  - `Contact`: command center em duas colunas, e-mail em destaque, canais secundarios compactos.

## Ordem Recomendada

1. Home - concluido
2. Projects - concluido
3. Resume - concluido, aguardando validacao
4. Hidden Resume - concluido, aguardando validacao
5. Revisao geral desktop
6. Ajuste mobile/responsivo

## Pagina 1: Home

### Objetivo

Transformar a home em uma primeira dobra forte e moderna, alinhada com o estilo command-center/editorial do `About`.

### Problemas atuais esperados

- Home depende principalmente de icones circulares e uma frase.
- Falta sinal profissional imediato.
- Pouca continuidade visual com `About` e `Contact`.

### Proposta visual

- Hero desktop em duas colunas:
  - esquerda: nome/posicionamento curto e frase atual
  - direita: painel "current focus" ou "stack snapshot"
- Usar label `01 / HOME` ou similar.
- Incluir CTAs para `Resume`, `Projects` e `Contact`.
- Usar um painel visual discreto com stack:
  - Java
  - Linux
  - GitLab
  - Argo CD
  - OpenShift
  - SQL
- Remover ou reposicionar os icones atuais se ficarem decorativos demais.

### Checklist de aceite

- [ ] Primeira dobra comunica rapidamente quem e Thiago.
- [ ] Existe CTA claro para curriculo/projetos/contato.
- [ ] Visual combina com `About` e `Contact`.
- [ ] Sem alteracao em menu/footer.
- [ ] Sem overflow horizontal em desktop `1366x900`.
- [ ] `npm run build` passa.
- [ ] `npm test -- --run` passa.
- [ ] Pedir validacao do usuario antes de seguir.

## Pagina 2: Projects

### Objetivo

Modernizar a vitrine de projetos, dando hierarquia entre projeto principal e projetos secundarios.

### Problemas atuais esperados

- Cards podem parecer uma grade comum.
- Imagens e links podem nao ter uma hierarquia forte.
- Falta continuidade com timeline/painel do `About`.

### Proposta visual

- Projeto principal em destaque na primeira linha.
- Projetos secundarios em grid compacto.
- Labels monospace por projeto:
  - `Featured`
  - `AI / Python`
  - `C / Algorithms`
  - `Tooling`
- Links `Demo` e `Code` como action chips.
- Borda superior/acento para cards principais.
- Manter imagens existentes, mas com framing mais intencional.

### Checklist de aceite

- [ ] Um projeto principal se destaca.
- [ ] Links externos continuam funcionando.
- [ ] Cards nao parecem repetitivos/genericos.
- [ ] Visual combina com `About` e `Contact`.
- [ ] Sem alteracao em menu/footer.
- [ ] Sem overflow horizontal em desktop `1366x900`.
- [ ] `npm run build` passa.
- [ ] `npm test -- --run` passa.
- [ ] Pedir validacao do usuario antes de seguir.

## Pagina 3: Resume

### Objetivo

Atualizar o curriculo visual para combinar com a nova identidade, mantendo legibilidade e sem prejudicar impressao.

### Problemas atuais esperados

- Resume tem estilo proprio e pode parecer desconectado do restante do site.
- Timeline e cards podem ser mais densos/modernos.
- Precisa preservar funcionalidade de expandir/recolher e imprimir.

### Proposta visual

- Header do curriculo mais alinhado ao command center:
  - nome/titulo
  - contatos em painel lateral
  - foto em frame discreto
- Secoes como blocos com labels numerados.
- Experiencia em timeline visual mais refinada.
- Skills em grid mais compacto.
- Preservar `print.css` cuidadosamente.

### Checklist de aceite

- [x] Curriculo web combina com identidade nova.
- [x] Botao de imprimir continua funcionando.
- [x] Expandir/recolher secoes continua funcionando.
- [x] Dados carregam de `public/data/{language}.json`.
- [x] `hidden-resume` nao quebra.
- [x] Sem alteracao em menu/footer.
- [x] Sem overflow horizontal em desktop `1366x900`.
- [x] `npm run build` passa.
- [x] `npm test -- --run` passa.
- [ ] Pedir validacao do usuario antes de seguir.

## Pagina 4: Hidden Resume

### Objetivo

Decidir se o `hidden-resume` deve seguir visual web ou continuar como layout mais print/PDF.

### Opcao recomendada

Manter mais conservador e print-friendly. Aplicar apenas pequenos ajustes de consistencia:

- cores alinhadas ao site onde nao prejudicar impressao
- tipografia consistente
- links e dados corretos
- layout A4 preservado

### Checklist de aceite

- [x] Continua adequado para imprimir/salvar PDF.
- [x] Nao perde densidade de curriculo.
- [x] Links e contatos continuam corretos.
- [x] `npm run build` passa.
- [x] `npm test -- --run` passa.
- [ ] Pedir validacao do usuario antes de seguir.

## Revisao Geral Desktop

Executar depois das paginas acima:

- [ ] `/`
- [ ] `/about`
- [ ] `/contact`
- [ ] `/projects`
- [ ] `/resume`
- [ ] `/hidden-resume`

### Validacoes tecnicas

- [ ] `npm test -- --run`
- [ ] `npm run build`
- [ ] `npm audit --audit-level=moderate`
- [ ] `git diff --check`
- [ ] Verificar console no navegador.
- [ ] Verificar links internos e assets.
- [ ] Verificar desktop `1366x900`.

### Validacoes visuais

- [ ] Sem overflow horizontal.
- [ ] Sem texto cortado.
- [ ] Sem cards com espacamento artificial excessivo.
- [ ] CTAs consistentes.
- [ ] Labels monospace consistentes.
- [ ] Cards/painels usam a mesma familia visual.
- [ ] Menu e footer nao foram alterados.

## Proximo Passo

Comecar pela pagina `Home`.

Fluxo:

1. Implementar apenas `Home`.
2. Rodar validacoes.
3. Mostrar resumo e pedir validacao.
4. So seguir para `Projects` apos aprovacao explicita.
