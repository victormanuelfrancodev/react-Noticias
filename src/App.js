import React, { Component } from 'react';
import Header from './componentes/Header';
import Noticias from './componentes/Noticias';
import Formulario from './componentes/Formulario';
import './index.css';

class App extends Component {

  state = {
    noticias : []
  }
  componentDidMount(){
    this.consultarNoticias();
  }

  consultarNoticias = (categoria='general') => {
    let url = `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=b8b6febf2cad4cbb9bb1e77f3dde1e75`;
    console.log(categoria);
    fetch(url)
      .then(respuesta => {
        return respuesta.json();
      })
      .then(noticias =>{
        console.log(noticias.articles);
        this.setState({
          noticias : noticias.articles
        })
      })
  }

  render() {
    return (
      <div className="contenedor-app">
        <Header
          titulo="Noticias"
          />
          <Formulario
            consultarNoticias ={this.consultarNoticias}
          />
          <div className = "container white contenedor-noticias">
              <Noticias
                noticias = {this.state.noticias}
              />
          </div>
      </div>
    );
  }
}

export default App;
