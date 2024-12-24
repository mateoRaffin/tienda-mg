
function Error(){
    const handleRedirect = () => {
        window.location.href = "/";
    };

    return(
        <div>
            <h1>Error </h1>
            <h2>No encontramos lo que estás buscando...</h2>
            <button onClick={handleRedirect}>Volver al Inicio</button>
        </div>
    )
}

export default Error