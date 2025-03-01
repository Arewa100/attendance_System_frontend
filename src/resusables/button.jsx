const Button = (props)=> {

    const{textContent, onClick, type, style} = props;
    return(
        <>
            <button className={style} onClick={onClick} type={type}>{textContent}</button>
        </>
    )
}


export default Button