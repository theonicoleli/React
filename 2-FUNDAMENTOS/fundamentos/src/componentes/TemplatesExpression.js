const TemplatesExpressions = () => {

    const name = "Théo"
    const data = {
        age: 19,
        job: "Programmer",
    };

    return (
        <div>
            <h1>Olá, {name}!! Tudo bem?!</h1>
            <p>Você atua como: {data.job}</p>
            <p>Sua idade é: {data.age}</p>
            <p>A soma entre 4 e 4 é: {4 + 4}</p>
            <p>{console.log("JSX React")}</p>
        </div>
    )


}

export default TemplatesExpressions;