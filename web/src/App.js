import React from 'react';

import './App.css';
import './global.css';
import './Sidebar.css';
import './Main.css';



//Conceitos:

 /* - Componente: Função que retorna um conteúdo html e css ou algum conteúdo de js. É um bloco isolado de HTML, CSS e JS, o qual não 
  interfere no restante da aplicação.

 - Estado: Informações mantidas pelo componente (Lembrar: Imutabilidade)

 - Propriedade: conjunto de características podem ser anexadas à uma tag dentro de um componente. Informações que o componente Pai passa
  para o componente filho.
 */ 

//Div pode atrapalhar na estilização da página, por isso, em react existe o fragment "</>" que é uma tag "vazia" que apenas contém os componentes

//O App é uma função que retorna o conteúdo html da aplicação

function App() {
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>

          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" id="github_username" required></input>
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required></input>
          </div>

          <div className="input-group">

            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required></input>
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required></input>
            </div>
          </div>
          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main> 

        <ul>

          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/43502488?s=460&v=4" alt=""/>
              <div className="user-info">
                <strong>Thiago Ferreira</strong>
                <span>ReactJS, React-Native, NodeJS</span>
              </div>
            </header>
            <p>Técnico em informática | CEFET-MG Ciência da computação | UFV Gerente de projetos | No Bugs - Empresa Júnior de Informática</p>
            <a href="https://github.com/thiagofp0">Acessar perfil no Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/43502488?s=460&v=4" alt=""/>
              <div className="user-info">
                <strong>Thiago Ferreira</strong>
                <span>ReactJS, React-Native, NodeJS</span>
              </div>
            </header>
            <p>Técnico em informática | CEFET-MG Ciência da computação | UFV Gerente de projetos | No Bugs - Empresa Júnior de Informática</p>
            <a href="https://github.com/thiagofp0">Acessar perfil no Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/43502488?s=460&v=4" alt=""/>
              <div className="user-info">
                <strong>Thiago Ferreira</strong>
                <span>ReactJS, React-Native, NodeJS</span>
              </div>
            </header>
            <p>Técnico em informática | CEFET-MG Ciência da computação | UFV Gerente de projetos | No Bugs - Empresa Júnior de Informática</p>
            <a href="https://github.com/thiagofp0">Acessar perfil no Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/43502488?s=460&v=4" alt=""/>
              <div className="user-info">
                <strong>Thiago Ferreira</strong>
                <span>ReactJS, React-Native, NodeJS</span>
              </div>
            </header>
            <p>Técnico em informática | CEFET-MG Ciência da computação | UFV Gerente de projetos | No Bugs - Empresa Júnior de Informática</p>
            <a href="https://github.com/thiagofp0">Acessar perfil no Github</a>
          </li>

        </ul>

      </main>
    </div>
  );
}

export default App;
