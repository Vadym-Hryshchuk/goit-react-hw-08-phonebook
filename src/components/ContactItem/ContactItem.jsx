import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { deleteContact } from 'redux/contacts/contactsOperation';
import { selectIsLoading } from 'redux/contacts/contactsSelectors';

export const ContactItem = ({ id, name, number }) => {
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  return (
    <p>
      <span>{name}:</span>
      <span>{number}</span>
      <button
        type="button"
        onClick={() => {
          dispatch(deleteContact(id));
          !isLoading && toast.success(`The contact ${name} is deleting`);
        }}
      >
        Remove
      </button>
    </p>
  );
};
