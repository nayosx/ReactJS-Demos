import React, { Component } from 'react';


class Reloj extends Component {

    componentWillUnmount() {
        console.log(3, "El componente a sido eliminado del DOM");
    }

    render() {
        return <h3>{this.props.hora}</h3>
    }
}

export default class CicloVida extends Component {

    constructor(props) {
        super(props);

        console.log(0, "El componente se inicia");

        this.state = {
            hora: new Date().toLocaleTimeString(),
            visible: false
        }

        this.temporizador = null;
    }


    iniciar = (e) => {
        this.tictac();
        this.setState({
            visible: true
        });
    }

    detener = (e) => {
        clearInterval(this.temporizador);
        this.setState({
            visible: false
        });
    }

    tictac = () => {
        this.temporizador = setInterval( () => {
            this.setState({
                hora: new Date().toLocaleTimeString()
            })
        }, 1000);
    }

    componentDidMount() {
        console.log(1, "El componente ya se encuentra en el DOM");
    }

    componentDidUpdate() {
        console.log(2, "El componente se esta actualizando");
    }

    

    render() {
        console.log(4, "El componente se dibuja o se redibuja por cambios en el DOM")
        return (
            <>
                <h2>Ciclo de vida de los components</h2>
                {this.state.visible && <Reloj hora={this.state.hora} />}
                <button onClick={this.iniciar}>Iniciar</button>
                <button onClick={this.detener}>Detener</button>
            </>
        )
    }
}