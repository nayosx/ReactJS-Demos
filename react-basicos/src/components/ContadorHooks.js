import React, { useState } from 'react';

export default function ContadorHooks(props) {

    const [contador, setContador] = useState(0);

    const sumar = (e) => {
        setContador(contador + 1);
    }

    const restar = (e) => {
        setContador(contador - 1);
    }

    return(
        <>
            <h2>Hooks -useStage</h2>
            <button onClick={sumar}>+</button>
            <button onClick={restar}>-</button>
            <p>Contador de {props.titulo}</p>
            <h3>{contador}</h3>
        </>
    );
}

ContadorHooks.defaultProps = {
    titulo: "Clicks"
};