import React from 'react';
import Header from './components/Header';
import Noticias from './components/Noticias';
import Formulario from './components/Formulario';


class App extends React.Component {

  state = {
    noticias: []
  }

  componentDidMount() {
    this.consultarNoticias();
  }

  consultarNoticias = (data = 'general') => {

    let category = data;

    let url = `https://newsapi.org/v2/top-headlines?country=ve&category=${category}&apiKey=92918d15f662453facb2fa7b17c80367`;

    fetch(url)
    .then(respuesta => respuesta.json())
    .then(noticias => {
      this.setState({
        noticias: noticias.articles
      })
    });
  }
  

  render(){
    return (
      <div className="contenedor-app">
        <Header  titulo="Noticias Gabo" />

        <div className="container white contenedor-noticias">
          <Formulario
            consultarNoticias={this.consultarNoticias}
          />
          <Noticias  noticias={this.state.noticias} />
        </div>

      </div>
    )
  }
}

export default App;




// MI API KEY
// 92918d15f662453facb2fa7b17c80367