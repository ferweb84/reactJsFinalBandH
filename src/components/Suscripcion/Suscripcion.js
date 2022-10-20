import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



export const Suscripcion = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xzprr5s', 'template_8amglno', form.current, '1zHool9GL-wwujzE_')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nombre y Apellido</Form.Label>
        <Form.Control placeholder="Ingresa Nombre y Apellido" />   
      </Form.Group>       
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Direccion de Email</Form.Label>
        <Form.Control type="email" placeholder="Ingresa Email" />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Escribe tu Mensaje </Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Seleccionar para enviar" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Enviar
      </Button>
    </Form>
    </form>
  );
};

export default Suscripcion;