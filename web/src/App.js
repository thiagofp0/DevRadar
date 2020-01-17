import React, {useEffect, useState} from 'react';
import api from './services/api';

import './App.css';
import './global.css';
import './Sidebar.css';
import './Main.css';

import DevItem from './components/DevItem';
import DevForm from './components/DevForm';

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
  const [devs, setDevs] = useState([]);

  
  useEffect(() => {
    async function loadDevs(){
      const response = await api.get('/devs');
      setDevs(response.data);
    }
    loadDevs();
  },[]);

  async function handleAddDev(data){
    const response = await api.post('/devs', data);
    setDevs([...devs, response.data]);
  }
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev} />
      </aside>
      <main>

        <ul>

          {devs.map(dev =>(
            <DevItem key={dev._id} dev={dev}/>
          ))}
          
        </ul>

      </main>
    </div>
  );
}

export default App;
