import { Form } from 'formik';
import styled from 'styled-components';

export const AuthRegisterForm = styled(Form)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 10px;
  padding: 10px;
  border-radius: 10px;
  background-color: rgba(152, 187, 132, 0.7);
  label {
    margin-right: 20px;
    text-align: center;
    font-weight: 700;
    font-size: 16px;
  }
  input {
    margin-left: 10px;
    padding: 5px;
    border-radius: 10px;
    font-size: 16px;
    font-weight: 600;
    text-align: center;
  }
  button {
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
    cursor: pointer;
    &:hover {
      background-position: right center;
    }
  }
`;
