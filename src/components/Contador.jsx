import { Component } from 'react'

    function metodoExterno() {
        console.log("Funcion externa de la clase")
    }

class Contador extends Component {

    numero = 1;

    incrementarNumero = () => {
        this.numero += 1;
        console.log("Valor de numero:", this.numero);
    }

    state = {
        valor: parseInt(this.props.inicio)
    }

    incrementarValorState = () => {
        this.setState({
            valor: this.state.valor + 1
        });

        var titulos = []
    }

    render() {
        return (
            <>
                <h1>Class Component Contador</h1>
                <h2 style={{color:"blue"}}>Inicio del contador: {this.props.inicio}</h2>
                <h2 style={{color:"red"}}>Valor del state: {this.state.valor}</h2>
                <button onClick={this.incrementarValorState}>Incrementar valor state</button>
                <button onClick={() => {
                    this.incrementarNumero();
                    metodoExterno();
                }}>Incrementar numero</button>
            </>
        )
    }

}

export default Contador