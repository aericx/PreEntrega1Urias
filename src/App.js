import './App.css';
import NavBar from './components/NavBar/NavBar';
import ContainerVariables from './components/ContainerVariables/ContainerVariables';

function App() {
  return (
    <div>
      <div className="App">
        <header className="App-header container">
          <NavBar/>
        </header>
        </div>
      <body className="container">
        <ContainerVariables greeting={'Bienvenidos a la Barra del Chef'}/>
      </body>
    </div>
  );
}

export default App;
