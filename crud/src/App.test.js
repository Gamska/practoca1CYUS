import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import axios from "axios";
const url="https://apicrudcitoutm.herokuapp.com/";


test('Obtener Datos',()=>{
  axios.get(url).then(response=>{
    this.setState({data: response.data});
  }).catch(error=>{
    console.log(error.message);
  })
  });