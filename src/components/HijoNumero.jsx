import React, { Component } from 'react'

export default class HijoNumero extends Component {

    sumarNumeros =  () => {
        this.props.incrementarSuma(this.props.numero);
    }
  render() {
    return (
        <>
            <h2 style={{color: "green"}}>{this.props.numero}</h2>
            <button onClick={this.sumarNumeros}>
                Incrementar Suma
            </button>
        </>
    )
  }
}
