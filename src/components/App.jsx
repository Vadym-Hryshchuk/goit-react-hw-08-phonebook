import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Contacts from 'page/Contacts';
import Register from 'page/Register';
import { AppBar } from 'components/AppBar/AppBar';
import Login from 'page/Login';
import { fetchCurrentUser } from 'redux/auth/authOperation';
import { selectLoadingStatus } from 'redux/auth/authSelector';
import { RestrictedRoute } from 'components/RestrictedRoute';
import { PrivateRoute } from 'components/PrivateRoute';
import { Toaster } from 'react-hot-toast';

export const App = () => {
  const dispatch = useDispatch();
  const isLoadingCurrentUser = useSelector(selectLoadingStatus);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      {!isLoadingCurrentUser && (
        <Routes>
          <Route path="/" element={<AppBar />}>
            <Route index element={<Register />} />
            <Route
              path="register"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<Register />}
                />
              }
            />
            <Route
              path="login"
              element={
                <RestrictedRoute redirectTo="/contacts" component={<Login />} />
              }
            />

            <Route
              path="contacts"
              element={
                <PrivateRoute redirectTo="/login" component={<Contacts />} />
              }
            />
          </Route>
        </Routes>
      )}
      <Toaster />
    </>
  );
};
