import { useEffect, useMemo, useState } from "react";
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
    const [contador2, setContador2] = useState<number>(0);
    // const [suma, setSuma] = useState<number>(0);
    const suma = useMemo(() => {
        if(contador % 2 === 0 && contador2 % 2 === 0) {
            return "son numeros pares y sumados son ${contador + contador2}";
        }
        return "no son pares";
    }, [contador, contador2]);
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
    //     // console.log("Function component contador actualizado", contador);
    //     if(contador % 2 === 0 && contador2 % 2 === 0){
    //         // console.log(`contador es par ${contador}`);
    //         setSuma(contador + contador2);
    //     }
    // }, [contador, contador2])

    return (
        <div>
            <h1>{message}</h1>
            <h2>{contador}</h2>
            <Button className="btn" onClick={(c)=> setContador2((c) =>c + 2)}>Incrementar</Button>
            <Button className="btn" onClick={execute}>Incrementar2 {contador2}</Button>
        suma: {suma}

        </div>
    );
}