import React from 'react'; // Precisa importar react em qualquer arquivo que usa html dentro do Javascipt
import ReactDOM from 'react-dom'; // Dá a habilidade do react se comunicar com a árvore de elementos da aplicação
import App from './App'; // Importa o Componente App

//ReactDOM está renderizando o componente App dentro da div com id "root" no arquivo index.html da pasta public
ReactDOM.render(<App />, document.getElementById('root'));
