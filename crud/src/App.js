import React from "react";
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Table,
  Button,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter,
} from "reactstrap";

const data = [
  { id: 1, nombre: "Cano Ku David", correo: "gamska@gmail.com",fecha: "18 de enero del 2000" },
  { id: 2, nombre: "Rubio Urtecho", correo: "rubiourtecho@gmail.com",fecha: "18 de marzo del 2001" },
];


class App extends React.Component {

  state = {
    data: data,
    modalActualizar: false,
    modalInsertar: false,
    form: {
      id: "",
      nombre: "",
      correo: "",
      fecha: "",
    },
  };
//mostrar modal de insertar 
mostrarModalInsertar = () => {
  this.setState({
    modalInsertar: true,
  });
};
cerrarModalInsertar = () => {
  this.setState({ modalInsertar: false });
};
//insertar empleado
insertar= ()=>{
  var valorNuevo= {...this.state.form};
  valorNuevo.id=this.state.data.length+1;
  var lista= this.state.data;
  lista.push(valorNuevo);
  this.setState({ modalInsertar: false, data: lista });
}

handleChange = (e) => {
  this.setState({
    form: {
      ...this.state.form,
      [e.target.name]: e.target.value,
    },
  });
};

  render() {
    return (
      <>
      <Container>
        <br />
        <h1>GESTION DE EMPLEADOS</h1>
          <br />
          <Button color="success" onClick={()=>this.mostrarModalInsertar()}>Crear</Button>
          <br />
          <Table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Correo</th>
                <th>Fecha de Ingreso</th>
                <th>Acción</th>
              </tr>
            </thead>

            <tbody>
              {this.state.data.map((dato) => (
                <tr key={dato.id}>
                  <td>{dato.id}</td>
                  <td>{dato.nombre}</td>
                  <td>{dato.correo}</td>
                  <td>{dato.fecha}</td>
                  <td>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
        <Modal isOpen={this.state.modalInsertar}>
          <ModalHeader>
           <div><h3>Insertar Nuevo Empleado</h3></div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>Id: </label>
              <input className="form-control" readOnly type="text" value={this.state.data.length+1}/>
            </FormGroup>
            <FormGroup>
              <label>
                Nombre: 
              </label>
              <input
                className="form-control"
                name="nombre"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Correo: 
              </label>
              <input
                className="form-control"
                name="correo"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Fecha de Ingreso: 
              </label>
              <input
                className="form-control"
                name="fecha"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button
              color="primary"
              onClick={() => this.insertar()}
            >
              Insertar
            </Button>
            <Button
              className="btn btn-danger"
              onClick={() => this.cerrarModalInsertar()}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>
     

</>
    );
  };
}

export default App;
