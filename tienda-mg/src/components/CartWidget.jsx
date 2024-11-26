function Cart({onClick}) {
    
    const style = {
        backgroundColor: color,
        padding: '10px 20px',
        border: 'none',
        color: 'white',
        cursor: 'pointer'
    }
    return (
        <div>
            <button style={style} onClick={onClick}></button>
        </div>
    )
}


export default Cart