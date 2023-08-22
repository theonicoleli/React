const Challenge = () => {

    let x = 10;
    let y = 7;

    function handleSomaColor(x, y) {
        let divColor = document.getElementById("divColor")
        console.log(x+y)

        divColor.style.color = "red";
    }

    return(
        <div>
            <div id="divColor">
                <p>Os números são: {x} e {y}</p>
            </div>
            <div>
                <button onClick={handleSomaColor}>Clique aqui para somar!</button>
            </div>
        </div>
    )
}

export default Challenge;