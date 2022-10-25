import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from'react-bootstrap/Alert';
// import './Suscripcion.css';


export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xzprr5s', 'template_8amglno', e.target, '1zHool9GL-wwujzE_')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
    <div className='container'>
    <form ref={form} onSubmit={sendEmail}>
      <Alert variant="success" className="tituloForm">
      <Alert.Heading>Bienvenidos a BUY & HOLD .-</Alert.Heading>
     <p>
        SUSCRIPCION:
      </p>
       <hr />
       <p className="mb-0">
        Rellena el siguiente Formulario para que te enviemos todas las novedades y descuentos de Buy & Hold.-
       </p>
       </Alert>

       <Form.Group className="mb-3" controlId="formBasicEmail">
       <Form.Label >Nombre y Apellido</Form.Label >
       <Form.Control placeholder="Nombre y apellido" name="nombre" type="text"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label >Direccion de Email</Form.Label>
      <Form.Control  placeholder="Email"name="email"  type="email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
       <Form.Label >Escribe tu Mensaje </Form.Label>
       <Form.Control placeholder="Mensaje"  name="message" as="textarea" rows={3}  />
      </Form.Group>

      <Button variant="primary" type="submit" value="Send">
         Enviar
      </Button>
    </form>
    </div>
  );
};
