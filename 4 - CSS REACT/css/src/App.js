import './App.css';
import MyComponent from './components/MyComponent';

import { useState } from 'react';
import Title from './components/Title';

function App() {

  const n = 15;
  const [name] = useState("Théo")
  
  const redTitle = false;

  return (
    <div className="App">
      {/* CSS GLOBAL */}
      <h1>React com CSS</h1>
      {/* CSS de componente */}
      <MyComponent/>
      <p>Este parágrafo é do app.js</p>
      {/* Inline CSS */}
      <p style={{
        color: "blue", 
        padding: "25px", 
        backgroundColor: "white", 
        borderTop: "2px solid red"}}>
        Este elemento foi estilizado de forma inline
      </p>
      {/* Inline CSS Dinâmico */}
      <h2 style={n < 10 ? {color: "purple"} : {color: "pink"}}>
        CSS dinâmico
      </h2>
      <h2 style={n < 10 ? {color: "purple"} : {color: "pink"}}>
        CSS dinâmico
      </h2>
      <h2 style={
        name === "Théo" 
        ? {color: "blue", backgroundColor: "#000"} 
        : null}>
        Teste Name
      </h2>
      {/* Classe Dinâmica */}
      <h2 className={
        redTitle 
        ? "red-title" 
        : "title"}>
          Este título vai ter classe dinâmica
      </h2>
      {/* Css Modules */}
      <Title/>
    </div>
  );
}

export default App;
