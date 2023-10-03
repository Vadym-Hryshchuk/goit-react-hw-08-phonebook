import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavLinkStyled = styled(NavLink)`
  display: inline-block;
  color: white;
  padding: 8px 12px;
  margin: 10px 20px;
  border-radius: 12px;

  letter-spacing: 2px;
  border: 1px solid;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  background-image: linear-gradient(
    to left,
    rgba(255, 215, 0, 0.7) 0%,
    rgba(0, 87, 184, 0.7) 51%,
    rgba(255, 215, 0, 0.7) 100%
  );
  background-size: 200% auto;

  text-transform: uppercase;

  text-decoration: none;
  transition: 0.5s;

  &.active {
    color: yellow;
  }
  &:hover {
    background-position: right center;
  }
`;
