import React, { Component } from 'react';

export default class EventosES6 extends Component {

    constructor(props) {
        super(props);

        this.state = {
            contador: 0
        };

        this.sumar = this.sumar.bind(this);
        this.restar = this.restar.bind(this);
    }

    sumar(e) {
        console.log("sumando");
        this.setState({
            contador: this.state.contador + 1
        });
    }

    restar(e) {
        console.log("restando");
        this.setState({
            contador: this.state.contador - 1
        });
    }

    render() {
        return(
            <div>
                <h3>Evento en componentes de clases ES6</h3>
                <h3>{this.state.contador}</h3>

                <button onClick={this.sumar}>+</button>
                <button onClick={this.restar}>-</button>
            </div>
        );
    }

}


export class EventosES7 extends Component {

    state = {
        contador: 0
    };

    sumar = (e) => {
        console.log("sumando");
        this.setState({
            contador: this.state.contador + 1
        });
    }

    restar = (e) => {
        console.log("restando");
        this.setState({
            contador: this.state.contador - 1
        });
    }

    render() {
        return(
            <div>
                <h3>Evento en componentes de clases ES7</h3>
                <h3>{this.state.contador}</h3>

                <button onClick={this.sumar}>+</button>
                <button onClick={this.restar}>-</button>
            </div>
        );
    }

}


export class MasSobreEventos extends Component {


    handleClick = (e) => {
        console.log(e);
        console.log(e.target);
    }

    render() {
        return (
            <div>
                <h3>Mas sobre eventos</h3>

                <button onClick={this.handleClick}>Saludar</button>
            </div>
        );
    }
}