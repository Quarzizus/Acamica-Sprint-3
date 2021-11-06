import { HeroComponent, Img } from "./styles";
import HeroImage from "../../images/HeroImage.svg";

const Hero = ({ children }) => {
  return (
    <HeroComponent>
      <h2>
        ¡Inpirate y busca los mejores <span>gifts</span>!
      </h2>
      <Img src={HeroImage} />
      {children}
      <p>Resultados de la busqueda</p>
    </HeroComponent>
  );
};

export { Hero };
