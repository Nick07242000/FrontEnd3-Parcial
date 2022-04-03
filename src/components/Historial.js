import React, { Component } from "react";

export class Historial extends Component {
  render() {
    return (
      <div className="historial">
        <h3>Selección anterior: {this.props.seleccionPrevia}</h3>
        <h4>
          Historial de opciones elegidas:
          <ul>
            {this.props.historial.map((item, index) => (
              <li key={index}>{item.toUpperCase()}</li>
            ))}
          </ul>
        </h4>
      </div>
    );
  }
}

export default Historial;
