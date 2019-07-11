import React, { Component } from 'react'

class Formulario extends Component {

    categoryRef = React.createRef();

    obtenerCategoria = (e) =>{
        
        e.preventDefault();

        this.props.consultarNoticias(this.categoryRef.current.value);
        // console.log(data);
    }

    render() {
        return (
            <div className="buscador row">
                <div className="col s12 m8 offset-m2">
                    <form onSubmit={this.obtenerCategoria}>
                        <h2>Noticias por Categoria</h2>
                        <div className="input-field col s12 m8">
                            <select ref={this.categoryRef} id="">
                                <option value="general" defaultValue>General</option>
                                <option value="entertainment">Entretenimiento</option>
                                <option value="business">Negocios</option>
                                <option value="health">Salud</option>
                                <option value="sports">Deportes</option>
                                <option value="science">Ciencia</option>
                                <option value="technology">Tecnologia</option>
                            </select>
                        </div>
                        <div className="input-field col s12 m4 enviar">
                            <input type="submit" value="Buscar..." className="btn amber darken-2"/>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

// entertainment, general, health, science, technology

export default Formulario
