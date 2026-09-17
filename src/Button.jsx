function Button({text,onClick,style}){
    return(
        <div>
            <button onClick={onClick} className={style}>   {text}</button>
        </div>
    )
}
export default Button