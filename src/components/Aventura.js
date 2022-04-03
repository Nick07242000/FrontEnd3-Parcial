import React, { Component } from "react";
import Historial from "./Historial";
import Opciones from "./Opciones";

export class Aventura extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador : 1,
      historial : [],
      seleccionPrevia : ""
    };
  }

  historiaActual = () => {
    let h = this.state.contador.toString() + this.state.seleccionPrevia.toLowerCase();
    return this.props.historia.find((historia) => historia.id === h)
  }

  actualizar = (letter) => {
    if(this.historiaActual().opciones.a === "FIN.") {alert("Fin."); return}
    this.setState({
      contador : this.state.contador + 1,
      historial : (this.state.contador !== 1) ? [...this.state.historial, letter] : [],
      seleccionPrevia : letter
    })
  }

  render() {
    return (
      <div className="layout">
        <h1 className="aventura">{this.historiaActual().historia}</h1>
        <Opciones opciones={this.historiaActual().opciones} evento={this.actualizar}/>
        <Historial historial={this.state.historial} seleccionPrevia={this.state.seleccionPrevia}/>
      </div>
    );
  }
}

export default Aventura;
