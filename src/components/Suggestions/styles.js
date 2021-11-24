import styled, { css } from "styled-components";

const Suggestions = styled.ul`
  width: 100%;
  ${({ border }) =>
    border &&
    css`
      border: 1px solid #4a1ee3;
    `};
  border-radius: 20px;
  overflow: hidden;
  list-style: none;
  position: absolute;
  top: 55px;
  z-index: 1;
  li {
    display: flex;
    align-items: center;
    padding: 0 0 0 15px;
    height: 50px;
    border-bottom: 1px solid gray;
    cursor: pointer;
    background-color: white;
  }
  li:hover {
    background-color: rgba(142, 144, 143, 1);
  }
`;

export { Suggestions };
