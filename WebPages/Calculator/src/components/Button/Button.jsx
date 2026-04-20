import './Button.css'

function Button(props){
    return(
        <>
        <button className={props.color} onClick={()=>{props.buttonPressed(props.value)}}>{props.name}</button>
        </>
    )
}

export default Button;