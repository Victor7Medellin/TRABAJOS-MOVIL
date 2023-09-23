import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: '',
      apellidoPaterno: '',
      apellidoMaterno: '',
      telefono: '',
      registros: [],
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { nombre, apellidoPaterno, apellidoMaterno, telefono } = this.state;
    if (nombre && apellidoPaterno && apellidoMaterno && telefono) {
      const nuevoRegistro = {
        nombre,
        apellidoPaterno,
        apellidoMaterno,
        telefono,
      };
      this.setState((prevState) => ({
        registros: [...prevState.registros, nuevoRegistro],
        nombre: '',
        apellidoPaterno: '',
        apellidoMaterno: '',
        telefono: '',
      }));
    }
  };

  handleCancelar = () => {
    this.setState({
      nombre: '',
      apellidoPaterno: '',
      apellidoMaterno: '',
      telefono: '',
    });
  };

  render() {
    const { nombre, apellidoPaterno, apellidoMaterno, telefono, registros } =
      this.state;

    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <div>
          <h1>Formulario</h1>
          <form onSubmit={this.handleSubmit} style={{ textAlign: 'center' }}>
            <div>
              <label>Nombre:</label>
              <input
                type="text"
                name="nombre"
                value={nombre}
                onChange={this.handleChange}
                pattern="[A-Za-z]+"
                required
              />
            </div>
            <div>
              <label>Apellido Paterno:</label>
              <input
                type="text"
                name="apellidoPaterno"
                value={apellidoPaterno}
                onChange={this.handleChange}
                pattern="[A-Za-z]+"
                required
              />
            </div>
            <div>
              <label>Apellido Materno:</label>
              <input
                type="text"
                name="apellidoMaterno"
                value={apellidoMaterno}
                onChange={this.handleChange}
                pattern="[A-Za-z]+"
                required
              />
            </div>
            <div>
              <label>Teléfono:</label>
              <input
                type="tel"
                name="telefono"
                value={telefono}
                onChange={this.handleChange}
                pattern="[0-9]+"
                required
              />
            </div>
            <div>
              <button type="submit">Guardar</button>
              <button type="button" onClick={this.handleCancelar}>
                Cancelar
              </button>
            </div>
          </form>
          <h2>Registros</h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ margin: '0 auto' }}>
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Apellido Paterno</th>
                  <th>Apellido Materno</th>
                  <th>Teléfono</th>
                </tr>
              </thead>
              <tbody>
                {registros.map((registro, index) => (
                  <tr key={index}>
                    <td>{registro.nombre}</td>
                    <td>{registro.apellidoPaterno}</td>
                    <td>{registro.apellidoMaterno}</td>
                    <td>{registro.telefono}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div >
    );
  }
}

export default App;
