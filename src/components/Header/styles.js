import styled from "styled-components";

const HeaderComponent = styled.header`
  background-color: ${({ theme }) => theme.background};
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 100px;
  @media only screen and (max-width: 550px) {
    padding: 0 10%;
  }
`;

const Button = styled.button`
  border: 2px solid ${({ theme }) => theme.border};
  color: ${({ theme }) => theme.color};
  border-radius: 25px;
  background-color: ${({ theme }) => theme.background};
  text-transform: uppercase;
  height: 40px;
  width: 150px;
  padding: 0 10px;
  cursor: pointer;
`;

export { HeaderComponent, Button };
