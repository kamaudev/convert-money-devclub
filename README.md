<h1>💱 Convert Money</h1>
<p>Um conversor de moedas desenvolvido como prática de JavaScript no curso <a href="https://www.devclub.com.br/">Dev Club.</a></p>
<p>O projeto possui uma página única, com HTML, CSS e JavaScript, e permite converter entre Real, Dólar, Euro, Libra e Bitcoin, com taxas de câmbio atualizadas em tempo real através de APIs.</p>
<h2>Sobre o Projeto</h2>
<p>O Convert Money JS foi criado inicialmente com valores fixos para cada moeda, servindo como exercício introdutório de lógica em JavaScript.
Com a evolução do aprendizado, o projeto foi aprimorado para consumir APIs externas, garantindo que as taxas de câmbio fossem atualizadas em tempo real.</p>
<p>Além disso, foram aplicados conceitos fundamentais de manipulação do DOM, formatação monetária, tratamento de erros e responsividade da interface.
Esse projeto não apenas reforça a base de JavaScript, mas também simula um caso prático de integração entre frontend e serviços externos.</p>
<h2>Demonstração</h2>
<h3>Versão Desktop</h3>
<p><img src="https://github.com/kamaudev/convert-money-js/blob/master/assets/Demonstra%C3%A7%C3%A3o/Demonstra%C3%A7%C3%A3o%20Desktop.png?raw=true"></p>
<h3>Versão Mobile</h3>
<p><img src="https://github.com/kamaudev/convert-money-js/blob/master/assets/Demonstra%C3%A7%C3%A3o/Demosntra%C3%A7%C3%A3o%20Mobile.png"></p>
<h2>Funcionalidades</h2>
<ul>
<li> Conversão entre diferentes moedas (BRL, USD, EUR, GBP e BTC)</li>
<li> Atualização em tempo real das taxas de câmbio</li>
<li> Interface interativa com imagens e nomes das moedas</li>
<li> Feedback visual durante a conversão</li>
<li> Formatação monetária adequada para cada moeda</li>
<li> Tratamento de erros (entradas inválidas ou falhas na API)</li>
</ul>
<h2>APIs Consumidas</h2>
<ol>
<li><a href="https://www.exchangerate-api.com/">ExchangeRate API</a></li>
<ul>
<li>Fornece taxas de câmbio atualizadas para moedas tradicionais</li>
<li>Baseado no USD (Dólar Americano)</li>
<li>Retorna valores para BRL, EUR, GBP, etc.</li>
</ul>
<li><a href="https://www.binance.com/en/binance-api">Binance API</a></li>
<ul>
<li>Fornece o valor atual do Bitcoin em USD</li>
<li>Permite conversões precisas envolvendo BTC em tempo real</li>
</ul>
</ol>
<h2>Estrutrua do Projeto</h2>
<p>convert-money-js/<br>
│<br>
├── index.html        # Estrutura principal da aplicação<br>
├── style.css         # Estilização e responsividade<br>
├── script.js         # Lógica de conversão e consumo das APIs<br>
│<br>
└── assets/           # Recursos visuais<br>
    ├── img/          # Imagens e ícones das moedas<br>
    └── ...           # Outros arquivos auxiliares<br>
</p>
<h2>Como Executar o Projeto</h2>
<p>O projeto precisa ser executado localmente</p>
<ol>
  <li>Clone o repositório:
  <p>git clone https://github.com/kamaudev/convert-money-js.git</p></li>
  <li>Acesse a pasta do projeto:
  <p>cd convert-money-js</p></li>
  <li>Abra o arquivo index.html no navegador.</li>
</ol>
