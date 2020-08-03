import axios from 'axios';
import swal from 'sweetalert';
import '../styles/swal.css';

const userSendMail = async ({ name, email, subject, message }) => {
  // Valida que se llenen todos los datos
  if (name.value && email.value && subject.value && message.value) {
    // Valida formato del campo correo
    const pattern = /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g;
    const isMail = pattern.test(email.value);
    if (isMail) {
      const data = {
        name: name.value,
        email: email.value,
        subject: subject.value,
        message: message.value,
      };

      try {
        const response = await axios.post(
          'http://localhost:3000/api/contact',
          data
        );
        swal(
          'Correo enviado con éxito.',
          '¡Te responderé lo más pronto posible!!',
          'success'
        );
        name.setValue('');
        email.setValue('');
        subject.setValue('');
        message.setValue('');
      } catch (error) {
        swal(
          'Error enviando correo.',
          'Por favor intenta directamente a registroviajero@gmail.com',
          'error'
        );
        console.error(error);
      }
    } else {
      swal(
        'Contacto',
        'Por favor ingresa la dirección de tu correo correctamente',
        'info'
      );
    }
  } else {
    swal(
      'Contacto',
      'Por favor diligenciar todos los campos del formulario',
      'info'
    );
  }
};

export default userSendMail;
