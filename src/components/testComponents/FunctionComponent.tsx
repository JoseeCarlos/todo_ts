import { useEffect, useState } from "react";
// import "./fcStyle.css";
// import styled from "styled-components";

// const Button = styled.button`
//     background-color: orange;`
    

export const FunctionComponent = ({message, onChange}: {message: string, onChange:any}) => {
    const [contador, setContador] = useState(0);


    const execute = () => {
        setContador(contador + 1);
        onChange("El componente message ha cambiado");
        
    }

    // useEffect(() => {
    //     console.log("FunctionComponent se ha montado");
    //     return () => {
    //         console.log("FunctionComponent desmontado");
    //     }

    // },[])

    // useEffect(() => {
    //     if(contador > 0){
    //         console.log("El contador se ha actualizado", contador);
    //     }
    // }, [contador])

    return (
        <div>
            <h1>{message}</h1>
            <h2>{contador}</h2>
            <button className="btn" onClick={execute}>Incrementar</button>
            {/* <Button onClick={execute}>Incrementar</Button> */}
        </div>
    );
}