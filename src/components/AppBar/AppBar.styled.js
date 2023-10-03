import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  border-style: solid double;
`;
export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 0 16px;
  padding: 12px;
  height: 48px;
  border-radius: 12px;
  background: linear-gradient(
    8deg,
    rgba(255, 215, 0, 0.7) 30%,
    rgba(0, 87, 184, 0.7) 52%
  );
  div {
    display: flex;
    align-items: center;
  }
  h1 {
    font-family: 'Open Sans', sans-serif;
    position: relative;
    color: rgba(37, 70, 120, 0.7);
    font-size: 2em;
    font-weight: normal;
    line-height: 1;
    padding: 10px 0;

    display: inline-block;
    margin: 0 10px 0 0;
  }
`;
