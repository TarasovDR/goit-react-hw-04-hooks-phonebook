import PropTypes from 'prop-types';
import { MdRemoveCircle } from 'react-icons/md';
import { ContactContainer, ContactItem, ContactButton } from './ContactList.styled';

export default function ContactList ({contacts, onDeleteContact}) {
  return (
    <ContactContainer>
      {contacts.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          name={name}
          number={number}
        ><span>{name}:</span><span>{number}</span>
          <ContactButton onClick={() => onDeleteContact(id)}>
            <MdRemoveCircle/>
            Delete
          </ContactButton>
        </ContactItem>
      ))}
    </ContactContainer>
  )
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string,
      number: PropTypes.string,
    }),
  ),
  onDeleteContact: PropTypes.func.isRequired
}