import logo from './logo.svg';
import './App.css';
import Componente from './components/Componente';
import Propiedades from './components/Propiedades';
import EventosES6, { EventosES7, MasSobreEventos } from './components/Eventos';
import ComunicacionComponentes from './components/ComunicacionComponentes'
import CicloVida from './components/CicloVida';
import ContadorHooks from './components/ContadorHooks';
import RelojHooks from './components/RelojHooks';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <section>
          <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
        </section>

        <hr />

        <section>
          <RelojHooks />
        </section>

      </header>
      
    </div>
  );
}

export default App;
