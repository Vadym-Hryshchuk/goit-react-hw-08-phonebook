import { useDispatch } from 'react-redux';

import { useSelector } from 'react-redux';
import { logOut } from 'redux/auth/authOperation';
import { selectUserName } from 'redux/auth/authSelector';
import { LogOut, UserName } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUserName);

  return (
    <div>
      <UserName>{user}</UserName>

      <LogOut type="button" onClick={() => dispatch(logOut())}>
        LogOut
      </LogOut>
    </div>
  );
};
