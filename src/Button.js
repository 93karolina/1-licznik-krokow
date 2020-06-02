import React from "react";

const Button = (props)=>{

    return (
        <div className="buttons">
            <button onClick={props.addCounterMethod}>Add 1</button>
            <button onClick={()=>props.zeroOrReset(false)}>Set 0</button>
            <button onClick={()=>props.zeroOrReset(true)}>Reset</button>
        </div>
    );
}

export default Button;