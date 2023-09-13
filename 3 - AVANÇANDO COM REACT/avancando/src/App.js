import './App.css';
import Fazenda from './assets/fazenda.jpg'
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';

function App() {
  return (
    <div className="App">
      <h1>Avançando em react</h1>
      {/*Imagem em público*/}
      <div>
        <img src="/imagem_teste.jpg" alt="Fundo" />
      </div>
      {/*Imagem em asset*/}
      <div>
        <img src={Fazenda} alt="Paisagem" />
      </div>
      <ManageData/>
      <ListRender/>
    </div>
  );
}

export default App;