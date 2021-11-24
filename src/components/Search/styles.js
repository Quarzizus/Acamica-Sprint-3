import styled from "styled-components";

const ContainerSearch = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
`;

const SearchComponent = styled.section`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  border-radius: 25px;
  border: 1px solid #4a1ee3;
`;

const Input = styled.input`
  width: 85%;
  border: none;
  height: 50%;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  margin: 0 50px;
  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  width: 15%;
  border: none;
  border-radius: 0 21px 21px 0;
  height: 100%;
  background-color: #4a1ee3;
  cursor: pointer;
`;

export { SearchComponent, Input, Button, ContainerSearch };
