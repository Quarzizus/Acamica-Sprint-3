import styled from "styled-components";

const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  background-color: #e7e7e7;
  padding: 30px 15px;
  gap: 15px;
  img {
    width: 100%;
    height: 240px;
    object-fit: cover;
    border: 1px solid rgba(190, 190, 190, 1);
  }
  h2 {
    grid-column: 1 /-1;
    text-align: center;
    color: #4a1ee3;
  }
`;

export { Grid };
