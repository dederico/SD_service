import React from 'react'
import {
  Form, FormGroup,
  Label, Input,
  FormFeedback, Button
} from 'reactstrap'

export default function FormularioD() {
  return (
    <div><Form>
  <FormGroup>
    <Label for="formulario">
          Formulario
        </Label>
    <Input type="text" name="formulario_nombre" id="formulario_nombre" placeholder="Nombre Completo" />

  </FormGroup>
  <FormGroup>
    <Label for="exampleEmail">
      Correo
    </Label>
    <Input valid />
    <FormFeedback valid>
      Excelente! este correo esta dispoible
    </FormFeedback>
    </FormGroup>
    </Form>
      <Button id="Submit"> Enviar </Button>
    </div>
  )
}
