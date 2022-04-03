import React, { Component } from "react";
import Opcion from "./Opcion";

export class Opciones extends Component {
  generarOpciones = () => {
    const object = this.props.opciones;
    const opciones = [];
    let count = 0;
    for (const property in object) {
      opciones.push(<Opcion key={count} letter={`${property}`.toUpperCase()} content={`${object[property]}`} evento={this.props.evento}/>);
      count++;
    }
    return opciones;
  }

  render() {
    return (
      <div className="opciones">
        {this.generarOpciones()}
      </div>
    );
  }
}

export default Opciones;
