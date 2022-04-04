import React, { Component } from "react";
import Historial from "./Historial";
import Opciones from "./Opciones";

export class Aventura extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador : 1,
      historial : [],
      seleccionPrevia : "",
      historiaActual : {}
    };
  }

  static getDerivedStateFromProps(props, state) {
    return { historiaActual : props.historia.find((historia) => historia.id === state.contador.toString() + state.seleccionPrevia.toLowerCase())}
  }

  actualizar = (letter) => {
    if((this.props.historia.length - 1)/2 < this.state.contador) {alert("Fin."); return}
    this.setState({
      contador : this.state.contador + 1,
      historial : (this.state.contador !== 1) ? [...this.state.historial, letter] : [],
      seleccionPrevia : letter
    })
  } 

  render() {
    //let historiaActual = this.props.historia.find((historia) => historia.id === (this.state.contador.toString() + this.state.seleccionPrevia.toLowerCase()));
    return (
      <div className="layout">
        <h1 className="aventura">{this.state.historiaActual.historia}</h1>
        <Opciones opciones={this.state.historiaActual.opciones} evento={this.actualizar}/>
        <Historial historial={this.state.historial} seleccionPrevia={this.state.seleccionPrevia}/>
      </div>
    );
  }
}

export default Aventura;
