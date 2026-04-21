import { useState } from "react";
import Button from "../Button/Button.jsx";
import './Calculator.css';

function Calculator(){

    let [expression, setExpression] = useState("");
    let [result, setResult] = useState(0)

    function buttonPressed(value){
        setExpression((old)=>{
            return(old+value);
        })
    }

    function genResult(){
        if(expression)
        {
            setResult(eval(expression));
            setExpression("")
        }
    }

    function clearDisplay(){
        setExpression("")
        setResult(0);
    }

    function backspace(){
        setExpression((old)=>{
            return(old.slice(0,old.length-1));
        })
    }

    let buttonGrid = [{value:"%",color:"special"},{value:"/",color:"operator"},{value:"7",color:"num"},{value:"8",color:"num"},{value:"9",color:"num"},{value:"*",color:"operator"},{value:"4",color:"num"},{value:"5",color:"num"},{value:"6",color:"num"},{value:"-",color:"operator"},{value:"1",color:"num"},{value:"2",color:"num"},{value:"3",color:"num"},{value:"+",color:"operator"},{value:"(",color:"num"},{value:"0",color:"num"},{value:")",color:"num"}];

    return (
        <>
           <div className='main-window'>
                <div className="display">
                    <p id="expression">{expression}</p>
                    <p id="result">{result}</p>
                </div>
                <div className="button-grid">
                    <Button name="AC" value="AC" buttonPressed={clearDisplay} color="special" />
                    <Button name="<=" value="<=" buttonPressed={backspace} color="special" />
                    {buttonGrid.map((value)=>{return(<Button name={value.value} value={value.value} buttonPressed={buttonPressed} color={value.color} />)})}
                    <Button name="=" value="=" buttonPressed={genResult} color="operator" />
                    </div>
           </div>
        </>
    )
}

export default Calculator;