import React, {Component} from 'react';

class Formulario extends Component{

  categoriaRef = React.createRef();

  cambiarCategoria = (e) =>{
      e.preventDefault();
    
      this.props.consultarNoticias(this.categoriaRef.current.value);
  }

  render() {
    return (
          <div className="buscador row">
            <div className ="col s12 m8 offset-m2">
              <form onSubmit={this.cambiarCategoria}>
                <h2>Noticias por categoria</h2>
                <div className="input-field col s12 m8">
                  <select ref={this.categoriaRef}>
                    <option value="general" defaultValue>General</option>
                    <option value="business" defaultValue>Negocios</option>
                    <option value="science" defaultValue>Ciencia</option>
                    <option value="health" defaultValue>Salud</option>
                    <option value="sports" defaultValue>Deportes</option>
                    <option value="technology" defaultValue>Tecnologia</option>
                  </select>
                </div>
                <div className="input-field col s12 m4 enviar">
                  <input type="submit" className="btn amber darken-2" value="Buscar"/>
                </div>
              </form>
            </div>
          </div>
    )
  }
}

export default Formulario;
