import { NavLinkStyled } from './AuthNav.Styled';

export const AuthNav = () => {
  return (
    <div>
      <NavLinkStyled to="/register">Register</NavLinkStyled>
      <NavLinkStyled to="/login">Log In</NavLinkStyled>
    </div>
  );
};
