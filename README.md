## [J_G_ DA F_RCA](https://projeto8-jogoforca-git-main-yokuny.vercel.app/)

Este é um jogo da forca escrito em **React**. O objetivo do jogo é descobrir a palavra secreta escolhida pelo computador. O jogador pode tentar adivinhar a palavra, escolhendo uma letra por vez ou pode fazer uma tentativa da palavra inteira.

### Tecnologias Utilizadas

- React
- Styled Components
- Webpack
- ECMAScript 6

### Bibliotecas Utilizadas

- styled-components
- react

### Como rodar o projeto

> O projeto esta [acessível aqui](https://projeto8-jogoforca-git-main-yokuny.vercel.app/) ou você pode rodar em seu computador seguindo esses passos:
> 
1. Clone o repositório em sua máquina local.
2. Abra o terminal na pasta raiz do projeto e rode o comando `npm install` para instalar todas as dependências necessárias.
3. Após a instalação das dependências, rode o comando `npm start` para rodar o projeto.
4. O projeto será iniciado em uma nova aba do seu navegador padrão.

### Sobre o código

O código foi dividido em duas partes.

### Parte 1

A primeira parte do código é o arquivo `App.js` que é o componente principal do jogo. O arquivo importa os componentes criados com nome `ScreenLayout`, `Jogo`, `Letras` e `Chute` e os usa para renderizar a tela principal do jogo. O arquivo também importa os arquivos `alfabeto` e `palavras`, que são usados para definir as letras do **alfabeto** e as **palavras possíveis do jogo**, respectivamente. As funções `letterChoice`, `misCheck`, `closeLetter`, `wordMark`, `startGame`, `jogada`, `final` e `bet` são responsáveis por manipular as informações do jogo.

### Parte 2

A segunda parte do código é o arquivo `Jogo.js`, um componente responsável por renderizar a **imagem da forca (**correspondente à quantidade de erros do jogador), a **palavra secreta (**a palavra secreta com letras não descobertas representadas por underlines) e **o botão para escolher uma nova palavra** (que inicia ou reinicia o jogo). 

Nesse arquivo é importado as imagens da forca. Esse componente recebe as funções e propriedades `palavra`, `startGame`, `misplayAmount` e `wordColor`. A propriedade `palavra` é um **array de objetos** que contém a palavra e as letras escolhidas. A propriedade `startGame` é uma função que é chamada quando o jogador clica no botão "**Escolher Palavra**", ela sorteia uma palavra aleatoriamente e desbloqueia as teclas. A propriedade `misplayAmount` é um número que representa a quantidade de erros do usuário e atualiza a imagem da forca. A propriedade `wordColor` é uma string que define a cor da palavra secreta quando o jogo termina.
