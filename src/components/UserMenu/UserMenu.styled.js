import styled from 'styled-components';

export const UserName = styled.p`
  padding: 10px;
  border-radius: 12px;
  text-align: center;
  font-weight: 600;
  letter-spacing: 2px;
  color: rgb(223, 224, 207);
  background-color: rgba(255, 174, 0, 0.8);
`;
export const LogOut = styled.button`
  display: inline-block;
  color: white;
  padding: 8px 12px;
  margin: 10px 20px;
  border: 1px solid;
  border-radius: 12px;

  letter-spacing: 2px;
  background-image: linear-gradient(
    to right,
    rgba(255, 215, 0, 0.7) 0%,
    rgba(0, 87, 184, 0.7) 51%,
    rgba(255, 215, 0, 0.7) 100%
  );
  background-size: 200% auto;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  transition: 0.5s;

  &:hover {
    background-position: right center;
  }
`;
