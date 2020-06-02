import React, { useRef } from "react";

const Step = (props) => {
   
  let clickRef = useRef(null);
  let step = props.stepValue;

   return (
        <div className="step">
            <p>Kroki:</p>
            <input ref={clickRef} onChange={props.addStepMethod} type="number" value={step}/>
            
       </div>
   )
}

export default Step;