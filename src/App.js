/*
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ContainerVariables from './components/ContainerVariables/ContainerVariables';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

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
        <ItemDetailContainer/>
      </body>
    </div>
  );
}

export default App;

*/


import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ContainerVariables from './components/ContainerVariables/ContainerVariables';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className= "App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ContainerVariables/>}/>
          <Route path='/category/:categoryId' element={<ContainerVariables/>}/>
          <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
          <Route path='*' element={<h1>404 NOT FOUND</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;

