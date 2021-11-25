import styled from "styled-components";

const HeroComponent = styled.section`
  height: 500px;
  background-color: ${({ theme }) => theme.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
  h2,
  p {
    color: ${({ theme }) => theme.color};
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

const Wrapper = styled.section`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (max-width: 550px) {
    .Hero_img {
      width: 120%;
    }
  }
`;

export { HeroComponent, Wrapper };
