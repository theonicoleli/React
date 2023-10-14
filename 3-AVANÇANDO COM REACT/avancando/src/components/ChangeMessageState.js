const ChangeMessageState = ({ handleMessage }) => {
    const messages = ["Oi", "Olá", "Oi, tudo bem?"];

    return (
        <div>
            {messages.map((message, index) => (
            <button key={index} onClick={() => handleMessage(message)}>
                {index + 1}
            </button>
            ))}
        </div>
    );
};

export default ChangeMessageState;
