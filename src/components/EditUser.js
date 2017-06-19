import React, { Component } from 'react';
import { Link } from 'react-router';
import Nav from './Nav';
import Footer from './Footer';
import {Form, TextField, PasswordField, NumberField, DateField} from 'react-forms-ui'
import {Grid, Panel} from 'react-bootstrap'

const validations = {
  myText: {
    minLength: 4,
    maxLength: 10,
  },
  myNumber: {
    required: true,
  },
  mySurname: {
    required: true,
  },
  myEmail: {
    required: true,
  },
  myPassword: {
    required: true,
    minLength: 4,
    maxLength: 10,
  },
  myPasswordAgain: {
    required: true,
    minLength: 4,
    maxLength: 10,
  },
}

export default React.createClass({
  getInitialState() {
    return {}
  },
  render() {
    const fieldClasses = 'col-sm-2,col-sm-6,col-sm-4' // label,input,error
    return (
      <Grid fluid>
        <Nav/>
        <Form state={this.state} setState={this.setState.bind(this)} validations={validations}
              onSubmit={this.onSubmit}>
          <Panel header={<h3>Editar mis datos</h3>}>
            <TextField id="myText" label="Nombre" placeholder="Ingrese su nombre" classes={fieldClasses}/>
            <PasswordField id="mySurname" label="Apellido" placeholder="Ingrese su nombre"  classes={fieldClasses}/>
            <PasswordField id="myEmail" label="Email" placeholder="Ingrese su Email"  classes={fieldClasses}/>
            <NumberField id="myNumber" label="Mi número" format="0,0.[00]" classes={fieldClasses}/>
            <PasswordField id="myPassword" label="Contraseña" placeholder="Ingrese su nueva contraseña"  classes={fieldClasses}/>
            <PasswordField id="myPasswordAgain" label="Repita la nueva contraseña" placeholder="Ingrese nuevamente su contraseña"  classes={fieldClasses}/>
            <DateField id="myDate" label="Fecha de nacimiento" classes={fieldClasses}/>
          </Panel>
        </Form>
        <Footer/>
      </Grid>

    )
  },
  onSubmit() {
    const {values} = this.state
    console.log(values)
  }
})
