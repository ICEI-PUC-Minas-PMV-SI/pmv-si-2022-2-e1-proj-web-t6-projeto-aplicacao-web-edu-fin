# Especificações do Projeto

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto

## Personas

1- João Paulo tem 23 anos e é universitário. Estuda em uma faculdade particular, em um curso da área da saúde, durante a noite. Durante o dia trabalha como atendente em uma loja para sustentar a si, sua esposa e sua pequena filha. Ele nunca se interessou por assuntos como economia, mercado financeiro e outros relacionados. Sempre gastou o seu salário de forma afobada, tendo várias despesas e no final do mês, não sobrava nada. Isso culminou, ao longo do tempo, várias dívidas vindas de empréstimos de bancos e cartão de crédito e no final, seu nome foi negativado no Serasa. Hoje João Paulo pensa que deveria ter investido em sua educação financeira, para que tivesse um momento presente melhor para si e sua família. 

2- Arthur é um adolescente de 15 anos que é sustentado pelos pais, estuda pela manhã e geralmente tem a tarde livre para fazer o que bem entender. De vez em quando ele faz tarefas básicas para seus parentes e conhecidos que não tem conhecimento algum sobre tecnologia, como enviar e-mails, emitir documentos via internet, baixar músicas entre outras coisas sendo remunerado para isso.  Ele tem o costume de gastar grande parte de seus ganhos com bens de consumo que rapidamente são inutilizados, sente que poderia fazer um uso melhor do seu dinheiro, mas não tem o conhecimento adequado para tal. Ao pedir conselhos ao seu Pai o mesmo não sabe outra forma de uso  do dinheiro a não ser pagar as contas do mês com o salário e pedir empréstimos a juros elevados quando o orçamento aperta. Tendo em vista o contexto em que vive e buscando modifica-lo Arthur procura então na internet ferramentas que o auxiliem em sua educação financeira.

3- Nayara é uma mulher de 35 anos que se formou em biologia à 3 anos. Ela não conseguiu um emprego em sua área de atuação e não trabalha no momento pois está grávida de 8 meses. O financiamento da sua faculdade está começando a ser cobrado e ela vai precisar negociar a dívida. Depois que o seu filho nascer ela vai começar a trabalhar para pagar os fiadores do seu curso e ajudar a pagar as contas de casa, pois ela mora com sua mãe e sua avó e sustentar seu filho. O pai da criança pagará uma pensão que será suficiente para alimentação do bebê. A educação financeira ajudaria Nayara a poupar antes de sua colação de grau para pagar seus estudos e a apoiaria no futuro para conseguir uma vida mais estável, tranquila e sem dívidas, mas ela nunca teve uma referência de como ganhar e gastar sua renda.


> **Links Úteis**:
> - [Rock Content](https://rockcontent.com/blog/personas/)
> - [Hotmart](https://blog.hotmart.com/pt-br/como-criar-persona-negocio/)
> - [O que é persona?](https://resultadosdigitais.com.br/blog/persona-o-que-e/)
> - [Persona x Público-alvo](https://flammo.com.br/blog/persona-e-publico-alvo-qual-a-diferenca/)
> - [Mapa de Empatia](https://resultadosdigitais.com.br/blog/mapa-da-empatia/)
> - [Mapa de Stalkeholders](https://www.racecomunicacao.com.br/blog/como-fazer-o-mapeamento-de-stakeholders/)
>
Lembre-se que você deve ser enumerar e descrever precisamente e personalizada todos os clientes ideais que sua solução almeja.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Usuário do sistema  | Registrar minhas tarefas           | Não esquecer de fazê-las               |
|Administrador       | Alterar permissões                 | Permitir que possam administrar contas |

Como João Paulo, eu quero aprender sobre educação financeira, para ter mais controle sobre minhas dívidas.
Como Arthur, eu quero aprender sobre educação financeira, para saber como usar melhor o meu dinheiro.
Como Nayara, eu preciso aprender sobre educação financeira, para ter mais possibilidades de crescimento econômico mesmo com uma renda pequena.

> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)
> - [User Stories: requisitos que humanos entendem](https://www.luiztools.com.br/post/user-stories-descricao-de-requisitos-que-humanos-entendem/)
> - [Histórias de Usuários: mais exemplos](https://www.reqview.com/doc/user-stories-example.html)
> - [9 Common User Story Mistakes](https://airfocus.com/blog/user-story-mistakes/)

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade | Responsável |
|------|-----------------------------------------|----| ----|
|RF-001| Permitir que o usuário cadastre tarefas | ALTA |  |
|RF-002| Emitir um relatório de tarefas no mês   | MÉDIA | |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |


Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
