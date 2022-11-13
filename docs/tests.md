# Plano de Testes de Software

Apresente os cenários de testes utilizados na realização dos testes da sua aplicação. Escolha cenários de testes que demonstrem os requisitos sendo satisfeitos.

Enumere quais cenários de testes foram selecionados para teste. Neste tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo de usuários que foi escolhido para participar do teste e as ferramentas utilizadas.
 
**Caso de Teste** | **CT01 - Interação da Página Inicial**
 :--------------: | ------------
 **Procedimento**  | 1) O usuário deve navegar entre a página inicial e ter acesso a todos os elementos da mesma. <br> 2)Clicar no botão da header "Saiba mais". <br> 3) Clicar nos cards dos artigos. <br>4) Clicar nos links das notícias. <br> 5)Cotação de moedas. 
 **Requisitos associados** | RF-002 <br> RF-005 <br> RF-009
 **Resultado esperado** | 1)Todos os elementos da página devem estar presentes na mesma. <br> 2) Ao clicar no botão o usuário será redirecionado para a seção dos serviços. <br>3)Ao clicar nos cards dos artigos o usuário será redirecionado para as páginas de cada artigo. <br> 4) Ao clicar nos links das notícias o usuário será redirecionado a sites externos. <br> 5)Visualizar a cotação de moedas atualizadas a cada 30 segundos passando pela página em loop. 
 **Resultado obtido** | 1)Os elementos carregaram devidamente na página. <br> 2)O botão redirecionou o usuário para a seção dos serviços. <br> 3)Os cards dos artigos redirecionaram para as páginas dos artigos. <br> 4)Os links redirecionaram para sites externos. <br> 5)Foi possível visualizar a cotação.
 
 
 **Caso de Teste** | **CT02 - Interação da Página do Simulador**
  :--------------: | ------------
 **Procedimento** | 1)O usuario deve escolher qual simulador deseja utilizar. <br> 2) Em todos os simuladores o usuário deve informar o valor, juros e tempo(mensal, anual) e clicar em "=".
 **Requisitos associados** | RF-001 <br> RF-003 <br> RF-004
 **Resultado esperado** | 1)Os elementos de todos os simuladores devem estar presentes na página. <br> 2)Resultado do cáculo da simulação.
 **Dados de entrada** | Inserção de dados válidos no simulador.
 **Resultado obtido** | (Ainda em teste)
 
 
  **Caso de Teste** | **CT03 - Interação da Página do FAQ**
  :--------------: | ------------
  **Procedimento** | 1)O usuário deve abrir o card de alguma pergunta.
  **Requisitos associados** | RF-002 <br> RF-008
  **Resultado esperado** | 1)Ao clicar nos cards das perguntas será possível a visualização de sua resposta.
  **Resultado obtido** | 1) Os elementos dos cards abriram devidamente.
  
  
  **Caso de Teste** | **CT04 - Interação da Página dos Conteúdos**
  :--------------: | ------------
  **Procedimento** | 1)O usuário deve abrir o dropdown dos conteúdos no navbar. <br> 2)Na página dos livros, clicar no botão "compre aqui." <br> 3)Na página dos podcasts, clicar no botão "ouça aqui". <br> 4)Na página dos videos, clicar no botão "assista aqui".
  **Requisitos associados** | RF-002 <br> RF-006 
  **Resultado esperado** | 1)Ao abrir o dropdown o usuário pode escolher qual página deseja acessar. <br> 2)Na página dos livros, ao clicar no botão, o usuário será redirecionado a um site externo para a compra do livro. <br> 3)Na página dos podcasts, ao clicar no botão, o usuário será redirecionado a um site externo para ouvir o podcast. <br> 4)Na página dos vídeos, ao clicar no botão, o usuário será redirecionado a um site de externo para assistir ao vídeo.
  **Resultado obtido** | 1)Foi possível acessar as páginas com o dropdown. <br> 2)Ao clicar no botão do livro escolhido, o usuário foi redirecionado para um site da compra do livro. <br> 3)Ao clicar no botão do podcast escolhido, o usuário foi redirecionado para o site do serviço de streaming. <br> 4)Ao clicar no botão do vídeo escolhido, o usuário foi redirecionado para o site onde o vídeo será reproduzido. 
  
  
  **Caso de Teste** | **CT05 - Interação das Páginas dos Artigos**
  :--------------: | ------------
  **Procedimento** | 1)Nos cards dos artigos o usuário deve escolher qual artigo deseja acessar. <br> 2)Ter acesso a navagação rápida presente no artigo. <br> 3)Em todos os artigos, para comentar o usuario informa seu nome e seu comentario e clica em "Enviar".
  **Requisitos associados** | RF-002 <br> RF-007 <br> RF-009
  **Resultado esperado** | 1)Ao clicar no card escolhido o usuário será redirecionado a página do artigo completo. <br> 2)Ao acessar a navegação rápida o usuário poderá ser redirecionado a sites externos, e também aos outros artigos do site. <br> 3)Ao preencher os campos com as informações, o usuário poderá enviar seu comentário que ficará vinculado na página. 
  **Resultado obtido** | 1)O usuário foi redirecionado ao artigo escolhido. <br> 2)O usuário foi redirecionado ao site externo e também pode acessar os outros artigos a partir dos links da navegação rápida. <br> 3)O usuário conseguiu enviar seu comentário ao preencher as informações do formulário.
  
  
  

## Ferramentas de Testes (Opcional)

Comente sobre as ferramentas de testes utilizadas.
 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Práticas e Técnicas de Testes Ágeis](http://assiste.serpro.gov.br/serproagil/Apresenta/slides.pdf)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)
> - [Criação e Geração de Planos de Teste de Software](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)

# Registro de Testes de Software

Relatório com as evidências dos testes de software realizados no sistema pela equipe, baseado em um plano de testes pré-definido.

## Avaliação

Discorra sobre os resultados do teste. Ressaltando pontos fortes e fracos identificados na solução. Comente como o grupo pretende atacar esses pontos nas próximas iterações. Apresente as falhas detectadas e as melhorias geradas a partir dos resultados obtidos nos testes.

> **Links Úteis**:
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
