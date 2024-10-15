import React, { Component } from 'react'

export default class DibujosComplejos extends Component {

    dibujarNumeros = () => {
        let numeros = []
        for (let i = 0; i < 10; i++) {
            let numero = parseInt(Math.random() * 100) + 1
            numeros.push(<p key={i}>Numero: {numero}</p>)
        }
        return numeros;
    }
    
    
render() {
    return (
      <>
        <h1>Dibujos complejos HTML</h1>
        <div>
            <ul>{this.dibujarNumeros()}</ul>
        </div>
      </>
    )
  }
}
