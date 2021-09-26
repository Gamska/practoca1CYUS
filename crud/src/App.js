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

  render() {
    return (
      <Container>
        <br />
        <h1>GESTION DE EMPLEADOS</h1>
          <br />
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

    );
  };
}

export default App;
