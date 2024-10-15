import React, { Component } from 'react'
import HijoDeporte from './HijoDeporte'

export default class PadreDeporte extends Component {
    deportes = ["Petanca", "Curling", "Futbol", "Baloncesto", "Tenis", "Padel", "Golf"]

    mostrarFavorito = (deporteSeleccionado) => {
        this.setState({
            favorito: deporteSeleccionado
        })
    }

    state = {
        favorito: ""
    }

  render() {
    return (
        <>
            <h1 style={{color: "red"}}>Padre Deporte</h1>
            <h4 style={{backgroundColor: "blue"}}>Su deporte favorito es : {this.state.favorito}</h4>
            {
                this.deportes.map((deporte, index) => {
                    return <HijoDeporte key={index} nombre={deporte} mostrarFavorito={this.mostrarFavorito} />
                })
            }
        </>
    )
  }
}
