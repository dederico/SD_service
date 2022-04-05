import './App.css';
import NavbarD from './Componentes/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import TableD from './Componentes/Table';
import FormularioD from './Componentes/Formulario';

function App() {
  return (
    <div className="App">
      <NavbarD></NavbarD>
      <TableD></TableD>
     
      <header className="App-header">
         <FormularioD></FormularioD>
        <p>
          
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
