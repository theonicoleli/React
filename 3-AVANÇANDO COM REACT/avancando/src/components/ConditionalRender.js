import { useState } from "react"

const ConditionalRender = () => {

    const [x] = useState(true);

    const [name, setName] = useState("Fabio");

    return (
        <div>
            <h1>
                Isso será Exibido?
            </h1>
            {x && <p>Se x for true, sim!</p>}
            {!x && <p>Agora x é falso</p>}

            <h1>If ternário</h1>

            {name === "Théo" ? (
                <div>
                    <p>O nome é {name}</p>
                </div>
            ) : (
                <div>
                    <p>Nome não encontrado: {name}</p>
                </div>
            )}

            <button onClick={() => setName("Théo")}>Clique aqui para alterar o nome</button>
        </div>
    )
}

export default ConditionalRender;