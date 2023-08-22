const Events = () => {

    const handleMyEvent = (e) => {
        console.log(e)
    };

    const renderSomething = (x) => {
        if(x) {
            return <h1>Renderizando isso!</h1>;
        }
        else {
            return <h1>Também pode renderizar isso!</h1>;
        }
    }

    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique Aqui!</button> {/*Funções grandes devem conter nome e função separadamente*/}
            </div>
            <div>
                <button onClick={() => console.log("Clicou!")}>Clique aqui também!</button> {/*Funções pequenas podem ser escritas na linha*/}
                <button onClick={() => {
                    if (true) {
                        console.log("Isso deve ser separado!")
                    }
                }}> {/*Não se deve fazer desta maneira */}
                    Por favor, pressione o botão!</button>
            </div>
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    );
};

export default Events;