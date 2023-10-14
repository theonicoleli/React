//Componentes
import FirstComponent from "./componentes/FirstComponent";
import TemplatesExpressions from "./componentes/TemplatesExpression";
import MyComponent from "./componentes/MyComponent";
import Events from "./componentes/Events";
import Challenge from "./componentes/Challenge";


//Styles|CSS
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <FirstComponent/>
      <TemplatesExpressions/>
      <MyComponent/>
      <Events/>
      <Challenge/>
    </div>
  );
}

export default App;