/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { FormContainer, Form, RightForm, UpForm, Input, Button, InputText } from './styles';
import useInputValue from '../../hooks/useInputValue';
import userSendMail from '../../hooks/useSendMail';
import LoadingRing from '../LoadingRing';

const ContactForm = () => {
  const [loading, setLoading] = useState(false);

  const name = useInputValue('');
  const email = useInputValue('');
  const subject = useInputValue('');
  const message = useInputValue('');

  const handleClick = (e) => {
    e.preventDefault();

    //Peticion envio correo
    setLoading(true);
    userSendMail({ name, email, subject, message })
      .then(() => setLoading(false));
  };

  return (
    <>
      <UpForm />
      <FormContainer>
        <Form>
          <label>
            <p>Tu nombre</p>
            <Input
              disabled={loading}
              type='text'
              name='name'
              required='required'
              value={name.value}
              onChange={name.onChange}
            />
          </label>
          <label>
            <p>Tu correo</p>
            <Input
              disabled={loading}
              className='form-input'
              type='email'
              name='email'
              required='required'
              value={email.value}
              onChange={email.onChange}
            />
          </label>
          <label>
            <p>Asunto</p>
            <Input
              disabled={loading}
              className='form-input'
              type='text'
              name='asunto'
              required='required'
              value={subject.value}
              onChange={subject.onChange}
            />
          </label>
          <label>
            <p>Mensaje</p>
            <InputText
              disabled={loading}
              className='form-input'
              name='mensaje'
              id=''
              cols='40'
              rows='10'
              required
              value={message.value}
              onChange={message.onChange}
            />
          </label>
          <Button disabled={loading} onClick={handleClick}>
            { loading ? <LoadingRing /> : 'Enviar'}
          </Button>
        </Form>
        <RightForm />
      </FormContainer>
    </>
  );
};

export default ContactForm;
