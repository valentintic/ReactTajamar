import React, { Component } from 'react'

export default class HijoDeporte extends Component {

    seleccionarFavorito = () => { 
        let deporte = this.props.nombre;
        this.props.mostrarFavorito(deporte);
    }



  render() {
    return (
      <>
        <h2 style={{color: "blue", textShadow: "10px 10px 20px black"}}>{this.props.nombre}</h2>
        <button onClick={this.seleccionarFavorito}>
            Seleccionar favorito
        </button>
        
      </>
    )
  }
}
