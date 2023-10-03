import { useSelector } from 'react-redux';

import { selectIsLoggedIn } from 'redux/auth/authSelector';
import { NavLinkStyled } from './Navigation.styled';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav>
      {isLoggedIn && <NavLinkStyled to="/contacts">contacts</NavLinkStyled>}
    </nav>
  );
};
