import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

import { FcTwoSmartphones } from 'react-icons/fc';
import { Navigation } from 'components/Navigation/Navigation';
import { selectIsLoggedIn, selectLoadingStatus } from 'redux/auth/authSelector';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { Container, Header } from './AppBar.styled';
import { Loader } from 'components/Loader/Loader';

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isLoadingCurrentUser = useSelector(selectLoadingStatus);

  return (
    <Container>
      <Header>
        <div>
          <FcTwoSmartphones size={36} />
          <h1>PHONEBOOK APP</h1>
          <Navigation />
        </div>
        {!isLoggedIn && !isLoadingCurrentUser ? <AuthNav /> : <UserMenu />}
      </Header>
      {!isLoadingCurrentUser ? <Outlet /> : <Loader />}
    </Container>
  );
};
