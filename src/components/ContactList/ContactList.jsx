import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { delContactsThunk } from 'redux/contactsThunk';
import { ButtonDelete, ItemContact, List } from './ContactList.module';

export const ContactList = ({ listContact }) => {
  const dispatch = useDispatch();
  return (
    <List>
      {listContact.map((contact) => (
        <ItemContact key={contact.id}>
          {contact.name}: {contact.number}
          <ButtonDelete
            type="button"
            onClick={() => dispatch(delContactsThunk(contact.id))}
          >
            Delete
          </ButtonDelete>
        </ItemContact>
      ))}
    </List>
  );
};

ContactList.propTypes = {
  listContact: PropTypes.array.isRequired,
};
