import React, { Component } from 'react'
import data from './data.json'
import Aventura from './components/Aventura'

class App extends Component {
  render() {
    return (
      <div className='App'>
        {//paso el json como prop para tener un componente aventura mas generico, que le puedo pasar distintas historias para hacerlo reutilizable
  }
        <Aventura historia={data}/>
      </div>
    )
  }
}

export default App