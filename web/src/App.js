import React, { useState } from 'react';
import Header from './Header'
import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';


//component: Bloco isolado de HTML, CSS e JS O qual não interfere no restante da aplicação
//Property: informações que o component Pai possa para o Filho
//Estate: informações mantidas pelo component (lembrar: imutabilidade)

function App() {
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário Github</label>
            <input name="github_username" id="github_username" required />
          </div>
          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required />
          </div>
          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required />
            </div>
            <div className="input-block">
              <label htmlFor="longitude">Longitute</label>
              <input name="longitude" id="longitude" required />
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
