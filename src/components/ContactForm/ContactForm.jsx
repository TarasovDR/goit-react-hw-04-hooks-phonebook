import React, { useState } from 'react';
import SubTitle from 'components/SubTitle';

import { Form, Label, Input, AddButton } from './ContactForm.styled';
import { TiUserAdd, TiUser, TiPhone } from 'react-icons/ti';

export default function ContactForm ({onSubmit}) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
            default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit(name, number);
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };
  
  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        <SubTitle text={'Name'}/>
        <TiUser/>
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          onChange={handleChange}
          placeholder="Name"
          value={name}
        />
      </Label>
      <Label>
        <SubTitle text={'Number'}/>
        <TiPhone/>
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          onChange={handleChange}
          placeholder="+xxx xx xxx-xx-xx"
          value={number}
        />
      </Label>

      <AddButton type="submit">
        <TiUserAdd/>
        Add contact</AddButton>
    </Form>
  )
}