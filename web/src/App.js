import React, { useEffect, useState } from 'react';

//import Header from './Header'
import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';



//component: Bloco isolado de HTML, CSS e JS O qual não interfere no restante da aplicação
//Property: informações que o component Pai possa para o Filho
//Estate: informações mantidas pelo component (lembrar: imutabilidade)

function App() {

  const [latitude, setLatitude] = useState('');
  const [longitude, setlongitude] = useState('');
  const [github_username, setGithubUsername] = useState('');
  const [techs, setTechs] = useState('');



  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const {latitude, longitude} = position.coords;

        setLatitude(latitude);
        setlongitude(longitude);
      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 30000,
      }
    );
  }, []);

  async function handleAddDev(e) {
    e.preventDefault();

    
  }
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário Github</label>
            <input name="github_username"
             id="github_username" 
             required
             onChange={e => setGithubUsername(e.target.value)}
             />
          </div>
          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs"
             id="techs"
              required 
              onChange={e => setTechs(e.target.value)}
              />
          </div>
          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input type="number"
               name="latitude"
                id="latitude"
                 required 
                 value={latitude}
                 onChange={e => setLatitude(e.target.value)}                 
                 />
            </div>
            <div className="input-block">
              <label htmlFor="longitude">Longitute</label>
              <input type="number" 
              name="longitude" 
              id="longitude" 
              required 
              value={longitude} 
              onChange={e => setlongitude(e.target.value)}
              />
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>

      <main>
        <ul>
        
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/7118953?s=460&v=4" alt="Cipolli" />
              <div className="user-info">
                <strong>Cipolli</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Desenvolvedor motha fullStack and freestyle workaround</p>
            <a href="https://github.com/cipolli">Acessar perfil no Github</a>
          </li>
          
        
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/7118953?s=460&v=4" alt="Cipolli" />
              <div className="user-info">
                <strong>Cipolli</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Desenvolvedor motha fullStack and freestyle workaround</p>
            <a href="https://github.com/cipolli">Acessar perfil no Github</a>
          </li>
        
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/7118953?s=460&v=4" alt="Cipolli" />
              <div className="user-info">
                <strong>Cipolli</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Desenvolvedor motha fullStack and freestyle workaround</p>
            <a href="https://github.com/cipolli">Acessar perfil no Github</a>
          </li>

        </ul>
      </main>
    </div>

  );
}

export default App;
