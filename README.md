# Projeto de Compra de Porsche

Este projeto é uma página web interativa que permite aos usuários selecionar diferentes cores e rodas para um modelo de Porsche 911 Turbo S (2024). A página foi desenvolvida utilizando HTML, CSS e JavaScript. 

## Índice

- [Visão Geral](#visão-geral)
- [Funcionalidades](#funcionalidades)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Como Executar o Projeto](#como-executar-o-projeto)
- [Dificuldades e Aprendizados](#dificuldades-e-aprendizados)
- [Aplicabilidade Prática](#aplicabilidade-prática)

## Visão Geral

Este projeto visa proporcionar uma experiência interativa ao usuário, permitindo que ele visualize o Porsche 911 Turbo S em diferentes combinações de cores e rodas. A interface é responsiva, garantindo uma boa usabilidade tanto em dispositivos móveis quanto em desktops.

## Funcionalidades

- **Seleção de Cores:** Os usuários podem escolher entre quatro cores exteriores diferentes para o carro.
- **Seleção de Rodas:** Os usuários podem escolher entre quatro modelos de rodas diferentes.
- **Atualização Dinâmica:** A imagem do carro é atualizada dinamicamente para refletir as escolhas de cor e roda do usuário.

## Estrutura do Projeto

O projeto é composto pelos seguintes arquivos:

- `index.html`: Estrutura básica da página web.
- `style.css`: Estilos para a página.
- `responsivo.css`: Estilos específicos para a responsividade.
- `script.js`: Lógica JavaScript para manipulação da DOM e atualização das escolhas do usuário.
- `assets/`: Pasta contendo imagens e ícones utilizados na página.

## Como Executar o Projeto

1. Clone este repositório para sua máquina local:
   ```bash
   git clone https://github.com/eng-joaoelias/projeto-porsche.git
   ```
2. Navegue até o diretório do projeto:
   ```bash
   cd projeto-porsche
   ```
3. Abra o arquivo `index.html` no seu navegador preferido.

## Dificuldades e Aprendizados

### Dificuldades

1. **Manipulação da DOM:** Uma das principais dificuldades foi garantir que apenas a cor ou roda selecionada permanecesse com a classe `selecionado` aplicada, removendo-a dos outros elementos.
2. **Atualização Dinâmica da Imagem:** A lógica para atualizar a imagem do carro com base nas seleções de cor e roda teve que ser cuidadosamente implementada para garantir que as combinações corretas fossem exibidas.
3. **Responsividade:** Garantir que a interface fosse responsiva e funcionasse bem em diferentes dispositivos exigiu atenção especial ao design e aos estilos CSS.

### Aprendizados

1. **JavaScript para Interatividade:** Este projeto reforçou o uso de JavaScript para adicionar interatividade à página web, especialmente na manipulação de classes CSS e atributos de elementos HTML.
2. **Design Responsivo:** O projeto ajudou a aprimorar habilidades em design responsivo, utilizando media queries e layouts flexíveis.
3. **Organização de Projeto:** Manter uma estrutura de projeto organizada e modularizada foi essencial para a manutenção e escalabilidade do código.

## Aplicabilidade Prática

Este projeto tem várias aplicações práticas:

1. **E-commerce de Automóveis:** A lógica e a interface podem ser adaptadas para uma plataforma de e-commerce que vende carros, permitindo que os usuários personalizem veículos antes de realizar a compra.
2. **Showrooms Virtuais:** Concessionárias de automóveis podem usar uma versão deste projeto para criar showrooms virtuais, onde os clientes podem explorar diferentes modelos e customizações.
3. **Aplicações Educacionais:** O projeto pode servir como um exemplo educacional para ensinar conceitos de HTML, CSS e JavaScript, bem como práticas de design responsivo e manipulação da DOM.

---

Este projeto é uma excelente demonstração de como criar uma interface de usuário interativa e responsiva utilizando tecnologias web básicas. Esperamos que este README forneça uma visão clara do projeto e de como ele pode ser utilizado e expandido no futuro.
