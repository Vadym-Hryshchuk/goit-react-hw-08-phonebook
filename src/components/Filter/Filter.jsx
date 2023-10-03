import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/contacts/filterSlice';
import { Label } from './Filter.styled';
import { selectFilter } from 'redux/contacts/contactsSelectors';

export const Filter = () => {
  const dispatch = useDispatch();

  const filterStore = useSelector(selectFilter);

  return (
    <div>
      <Label>
        Finds contacts by name
        <input
          type="text"
          value={filterStore}
          onChange={evt => dispatch(setFilter(evt.target.value))}
        />
      </Label>
    </div>
  );
};
