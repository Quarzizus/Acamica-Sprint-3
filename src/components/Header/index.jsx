import { HeaderComponent, Button } from "./styles";
import { Logo } from "./Logo";

const Header = () => {
  return (
    <HeaderComponent>
      <Logo />
      <Button>Modo Nocturno</Button>
    </HeaderComponent>
  );
};

export { Header };
