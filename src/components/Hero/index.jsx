import { HeroComponent, Wrapper } from "./styles";
import HeroImage from "../../images/HeroImage.svg";

const Hero = ({ children }) => {
  return (
    <HeroComponent>
      <h2>
        ¡Inpirate y busca los mejores <span>gifts</span>!
      </h2>
      <Wrapper>
        <img src={HeroImage} />
        {children}
      </Wrapper>
      <p>Resultados de la busqueda</p>
    </HeroComponent>
  );
};

export { Hero };
