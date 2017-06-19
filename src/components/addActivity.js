import React, { Component } from 'react';
import { Link } from 'react-router';
import Nav from './Nav';
import Footer from './Footer';
import {Form, TextField, PasswordField, NumberField, DateField, SelectField} from 'react-forms-ui'
import Select from 'react-select';
import {Grid, Panel} from 'react-bootstrap'

const validations = {
  name: {
    minLength: 4,
    maxLength: 10,
  },
  coaches: {
    required: true,
  },
  description: {
    minLength: 4,
    maxLength: 40,
  },
  credit: {
    required: true,
  },
  oneTimeCredit: {
    required: true,
  },
  dayOfTheWeek: {
    required: true,
  },
  hourIn: {
    required: true,
  },
  hourOut: {
    required: true,
  }
}

export default React.createClass({
  getInitialState() {
    return {}
  },
  render() {
    const fieldClasses = 'col-sm-2,col-sm-6,col-sm-4' // label,input,error
    const hours = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]
    return (
      <Grid fluid>
        <Nav/>
        <Form state={this.state} setState={this.setState.bind(this)} validations={validations}
              onSubmit={this.onSubmit}>
          <Panel header={<h3>Editar mis datos</h3>}>
            <TextField id="name" label="Nombre" placeholder="Ingrese nombre de actividad" classes={fieldClasses}/>
            <PasswordField id="coaches" label="Coach" placeholder="Elija coach/s"  classes={fieldClasses}/>
            <PasswordField id="description" label="Descripción" placeholder="Ingrese una descripción"  classes={fieldClasses}/>
            <NumberField id="credit" label="Crédito" format="0,0.[00]" classes={fieldClasses}/>
            <PasswordField id="oneTimeCredit" label="Crditos por Clase" placeholder="Ingrese créditos"  classes={fieldClasses}/>
            <PasswordField id="dayOfTheWeek" label="Créditos por Curso" placeholder="Ingrese créditos"  classes={fieldClasses}/>
            <DateField id="hourIn" label="Fecha de nacimiento" classes={fieldClasses}/>
            <SelectField id="hourOut" name="hourOut-field"
                            values={{
                              "selectValue": {
                                "id": 1,
                                "name": "Acme"
                              }}}
                            classes={fieldClasses}/>
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

