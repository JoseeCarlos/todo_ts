import { useState } from "react"
import "./fcStyle.css";
import { Step } from "./Step";
export const Task = ({item}: any) => {
    const [showSteps, setShowSteps] = useState(false);
    
    return(
        <div style={{borderStyle: 'solid'}} className="row" >
            <div>   
            <div className="column">
                <button onClick={() => setShowSteps(!showSteps)}>{showSteps ? '^' : 'v'}</button>
            </div>
            <div className="column">
                <h3>{item.name}</h3>
            </div>
            <div className="column">
                <input type="checkbox" onChange={() => console.log("Mensaje de consola") }/>
            </div>
            </div>
            <div>
                {showSteps && ( 
                    <Step step={item.steps}/>
                )}
            </div>
            <div>
                <h1>{item.description}</h1>
            </div>
        </div>
    )
}