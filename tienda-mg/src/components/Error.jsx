
function Error(){
    const handleRedirect = () => {
        window.location.href = "/";
    };

    return(
        <div className="errorNotFound">
            <h1 className="title-Error">Error </h1>
            <h2 className="text-Error">No encontramos lo que estás buscando...</h2>
            <button id="handleBtn" onClick={handleRedirect}>Volver al Inicio</button>
        </div>
    )
}

export default Error