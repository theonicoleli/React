//componentes
import MyComponent from "./MyComponent";


//arquivos de estilo


const FirstComponent = () => {
    //essa função faz isso

    return (
        <div> {/*Outra forma de comentar*/}
            <h1>Meu primeiro Componente</h1>
            <p>Meu texto</p>
            <MyComponent/>
        </div>
    )
}

export default FirstComponent;