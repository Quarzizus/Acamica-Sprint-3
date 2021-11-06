import styled from "styled-components";

const HeroComponent = styled.section`
  height: 500px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  h2,
  p {
    color: #4a1ee3;
    text-align: center;
  }

  h2 {
    font-weight: 500;
    font-size: 36px;
    span {
      font-weight: bold;
      text-transform: uppercase;
    }
  }
  p {
    font-size: 1.4em;
  }
`;

const Img = styled.img`
  position: relative;
`;

export { HeroComponent, Img };
