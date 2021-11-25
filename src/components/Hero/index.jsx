import { HeroComponent, Wrapper } from "./styles";
import HeroImage from "../../images/HeroImage.svg";

const Hero = ({ children }) => {
  return (
    <HeroComponent>
      <h2>
        ¡Inspirate y busca los mejores <span>gifts</span>!
      </h2>
      <Wrapper>
        <img src={HeroImage} className="Hero_img" />
        {children}
      </Wrapper>
      <p>Resultados de la busqueda</p>
    </HeroComponent>
  );
};

export { Hero };
