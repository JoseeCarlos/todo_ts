import { useState } from "react";

export const FunctionComponent = ({message}: {message: string}) => {
    const [contador, setContador] = useState(0);

    const execute = () => {
        setContador(contador + 1);
    }

    return (
        <div>
            <h1>{message}</h1>
            <h2>{contador}</h2>
            <button onClick={execute}>Incrementar</button>
        </div>
    );
}