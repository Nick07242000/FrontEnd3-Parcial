import React, { Component } from "react";

export class Opcion extends Component {
  render() {
      const { letter, content, evento } = this.props;
    return (
      <div className="opcion">
        <button id={letter} className="botones" onClick={evento.bind(this, letter)}>{letter}</button>
        <h2>{content}</h2>
      </div>
    );
  }
}

export default Opcion;
