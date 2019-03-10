import React from 'react';

const Noticia = (props) => {

  const {
      urlToImage,url,title,description,source
  } = props.noticia;

  const imagen = (urlToImage) ?
  <div className= "card-image">
    <img src={urlToImage} alt={title}/>
    <span className="card-title">{source.name}</span>
  </div>
  :
  '';

  return (
    <div className="col s12 m6 14">
      <div className ="card">
        {imagen}
      </div>
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="card-action">
        <a href={url} target="_blank"
        className="waves-effects waves-light btn">
          Leer más
        </a>
      </div>
    </div>
  )
}

export default Noticia;
