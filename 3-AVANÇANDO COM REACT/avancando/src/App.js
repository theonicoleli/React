import { useState } from 'react';
import './App.css';

import Fazenda from './assets/fazenda.jpg'
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import Fragments from './components/Fragments';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';

function App() {
  //const name = "Ricardo";
  const [userName] = useState("Maria")
  const cars = [
    {id: 1, brand: "Ferrari", color: "Amarelo", newCar: true, km: 60},
    {id: 2, brand: "Lamborghini", color: "red", newCar: true, km: 30},
    {id: 3, brand: "Mercedes", color: "black", newCar: true, km: 1000},
    {id: 4, brand: "Maserati", color: "Green", newCar: false, km: 300000},
  ]

  function showMessage() {
    console.log("Evento de componente pai!")
  }

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  }

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
      <ConditionalRender/>
      {/* props */}
      <ShowUserName name={userName}/>
      {/* Destructuring */}
      <CarDetails brand="VW" km={100000} color="azul" newCar={false}/>
      {/* Reaproveitando */}
      <CarDetails brand="McLaren" km={1000} color="red" newCar={true}/>
      <CarDetails brand="Ford" km={20000} color="black" newCar={true}/>
      {/* Loop em array objetos */}
      {cars.map((car) => (
        <CarDetails 
        key={car.id}
        brand={car.brand} 
        color={car.color} 
        km={car.km} 
        newCar={car.newCar}
        />
      ))}
      {/* Fragments */}
      <Fragments propFragments="teste"/>
      {/* Children */}
      <Container myValue="testing">
        <p>E este é o conteúdo</p>
      </Container>
      <Container myValue="testing 2">
        <h5>Testando o container</h5>
      </Container>
      {/* Executar função */}
      <ExecuteFunction myFunction={showMessage} />
      {/* State Lift */}
      <Message msg={message}/>
      <ChangeMessageState handleMessage={handleMessage}/>
    </div>
  );
}

export default App;