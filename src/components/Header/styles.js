import styled from "styled-components";

const HeaderComponent = styled.header`
  background-color: white;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 100px;
`;

const Button = styled.button`
  border: 2px solid #4a1ee3;
  color: #4a1ee3;
  border-radius: 25px;
  background-color: white;
  text-transform: uppercase;
  height: 40px;
  padding: 0 10px;
  cursor: pointer;
`;

export { HeaderComponent, Button };
