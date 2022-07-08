import { useEffect, useState } from "react";
// import "./fcStyle.css";
import styled from "styled-components";

const Button = styled.button`
    background-color: orange;
    color: white;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;`

export const FunctionComponent = ({message, onChange}: {message: string, onChange: any}) => {
    const [contador, setContador] = useState<number>(0);

    const execute = () => {
        setContador(contador + 1);
        onChange(`El componente message ${message}  ha cambiado su valor  ahora es ${contador + 1}`)
    }
    //estados
    // useEffect(() => {
    //     console.log("Function component montado");
    //     return () => {
    //         console.log("Function component desmontado");
    //     }
    // },[])

    // useEffect(() => {
    //     console.log("Function component contador actualizado", contador);
    // }, [contador])

    return (
        <div>
            <h1>{message}</h1>
            <h2>{contador}</h2>
            <Button className="btn" onClick={execute}>Incrementar</Button>
        </div>
    );
}