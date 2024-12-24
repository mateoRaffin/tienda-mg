function Boton({onClick,label,color}){
    const style = {
        backgroundColor: color,
        padding: '10px 10px',
        color: '#FFF',
        border: 'none',
        cursor: 'pointer'
    }
    return(
        <div id="cont-btn">
            <button id="btnMulti" style={style} onClick={onClick}>
                {label}
            </button>
        </div>
    )
}

export default Boton