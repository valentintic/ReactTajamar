import React, { Component } from 'react'

export default class DibujosComplejosReact extends Component {
    state = {
        nombres: ["Lucia", "Roman", "Pedro", "Sofia", "Diana", "Carlos", "Maria", "Jose", "Luis", "Ana"]
    }

    generarNombre = ()  => {
        this.state.nombres.push("Nuevo nombre")
        this.setState({
            nombres: this.state.nombres
        })
    }

  render() {
    return (
      <>
      <h1>Dibujos Complejos react Collection</h1>
      <button onClick={() => {
        this.generarNombre()
      }}>Generar nombre</button>

      {
        this.state.nombres.map((name, index) => {

            return <h1 style={{color: "blue"}} key={index}>Nombre: {name}</h1>

        })
    }      

      </>
    )
  }
}
