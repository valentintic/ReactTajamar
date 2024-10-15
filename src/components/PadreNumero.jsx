import React, { Component } from 'react'
import HijoNumero from './HijoNumero';

export default class PadreNumero extends Component {
    state = {
        suma: 0,
        numeros: []
    }

    generarNumero = () => {
        this.state.numeros.push(Math.floor(Math.random() * 10 + 1))
        this.setState({
            numeros: this.state.numeros
        })
    }

    incrementarSuma = (numero) => {
        this.setState({
            suma: this.state.suma + numero
        })
    }


  render() {
    return (
      <>
      <h1 style={{color: "red"}}>Suma Numeros</h1>
      <button onClick={this.generarNumero}>Generar Numero</button>
      <h2>{this.state.suma}</h2>
        {
            this.state.numeros.map((numero, index) => {
                return <HijoNumero key={index} numero={numero} incrementarSuma={this.incrementarSuma} />
            })
        }

        <br />
        <br />
      </>
    )
  }
}
