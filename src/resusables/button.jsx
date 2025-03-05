const Button = (props)=> {

    const{textContent, onClick, type, style, name} = props;
    return(
        <>
            <button className={style} onClick={onClick} type={type} name={name}>{textContent}</button>
        </>
    )
}


export default Button