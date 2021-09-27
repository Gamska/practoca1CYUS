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
//mostrar el modal de  editar 
mostrarModalActualizar = (dato) => {
  this.setState({
    form: dato,
    modalActualizar: true,
  });
};

cerrarModalActualizar = () => {
  this.setState({ modalActualizar: false });
};
//mandar valores del editar 
editar = (dato) => {
  var contador = 0;
  var arreglo = this.state.data;
  arreglo.map((registro) => {
    if (dato.id == registro.id) {
      arreglo[contador].nombre = dato.nombre;
      arreglo[contador].correo = dato.correo;
      arreglo[contador].fecha = dato.fecha;
    }
    contador++;
  });
  this.setState({ data: arreglo, modalActualizar: false });
};
//insertar empleado
insertar= ()=>{
  var valorNuevo= {...this.state.form};
  valorNuevo.id=this.state.data.length+1;
  var lista= this.state.data;
  lista.push(valorNuevo);
  this.setState({ modalInsertar: false, data: lista });
}
//eliminar empleado
eliminar = (dato) => {
  var opcion = window.confirm("Estás Seguro que deseas Eliminar el elemento "+dato.id);
  if (opcion == true) {
    var contador = 0;
    var arreglo = this.state.data;
    arreglo.map((registro) => {
      if (dato.id == registro.id) {
        arreglo.splice(contador, 1);
      }
      contador++;
    });
    this.setState({ data: arreglo, modalActualizar: false });
  }
};

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
        <h1>GESTION DE EMPLEADOS FINAL</h1>
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
                  <Button color="primary" onClick={() => this.mostrarModalActualizar(dato)}>Editar </Button>{" "}
                    <Button color="danger" onClick={()=> this.eliminar(dato)}>Eliminar</Button>
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
     
        <Modal isOpen={this.state.modalActualizar}>
          <ModalHeader>
           <div><h3>Editar Registro</h3></div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>
               Id:
              </label>
            
              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.form.id}
              />
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
                value={this.state.form.nombre}
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
                value={this.state.form.correo}
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
                value={this.state.form.fecha}
              />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button
              color="primary"
              onClick={() => this.editar(this.state.form)}
            >
              Editar
            </Button>
            <Button
              color="danger"
              onClick={() => this.cerrarModalActualizar()}
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
