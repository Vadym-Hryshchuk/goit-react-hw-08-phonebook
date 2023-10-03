import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/contactsOperation';

import { ContactItem } from 'components/ContactItem/ContactItem';
import { Item } from './ContactList.styled';
import {
  selectContacts,
  selectFilter,
  selectIsLoading,
  selectError,
} from 'redux/contacts/contactsSelectors';
import { Loader } from 'components/Loader/Loader';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const contactsStore = useSelector(selectContacts);
  const filterStore = useSelector(selectFilter);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const visibleContacts = contactsStore.filter(contact =>
    contact.name.toLowerCase().includes(filterStore.toLowerCase())
  );

  return (
    <>
      {isLoading && <Loader />}
      {error && <p>{error}</p>}
      {visibleContacts.length > 0 ? (
        <ul>
          {visibleContacts.map(({ id, name, number }) => {
            return (
              <Item key={id}>
                <ContactItem id={id} name={name} number={number} />
              </Item>
            );
          })}
        </ul>
      ) : (
        <p>Phone book is empty!</p>
      )}
    </>
  );
};
