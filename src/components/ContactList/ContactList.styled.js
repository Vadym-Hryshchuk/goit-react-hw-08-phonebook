import styled from 'styled-components';

export const Item = styled.li`
  margin: 5px;
  padding: 5px;
  position: relative;
  border-radius: 10px;
  &:hover {
    transform: scale(1.01);
  }
  &::marker {
    font-size: 1.5em;
    color: red;
  }
  background: linear-gradient(
    90deg,
    rgba(152, 187, 132, 0.7) 39%,
    rgba(132, 136, 187, 0.7) 40%,
    rgba(28, 166, 184, 0.7) 85%,
    #6987d9 86%
  );
  span {
    margin-left: 20px;
    font-weight: 700;
    font-size: 24px;
    &:not(:first-child) {
      position: absolute;
      left: 38%;
      color: rgb(216, 211, 204);
    }
  }
  button {
    position: absolute;
    top: 20%;
    right: 0;
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
