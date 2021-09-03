import React, { Component } from 'react';

export default class Padre extends Component {

    state ={
        contador: 0    
    };

    incrementarContador = (e) => {
        this.setState({
            contador: this.state.contador + 1
        });
    } 

    render() {
        return (
            <>
                <h2>Comunicacion entre componentes</h2>
                <p>Conador <b>{this.state.contador}</b></p>
                <Hijo mensaje="Este es un hijo" incrementarContador={this.incrementarContador}/>
                <Hijo mensaje="Este es otro hijo" />
            </>
        );
    }
}

function Hijo(props) {
    return (
        <>
            <h3>{props.mensaje}</h3>
            <button onClick={props.incrementarContador}>+</button>
        </>
    );
}