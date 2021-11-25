import { HeaderComponent, Button } from "./styles";
import { Logo } from "./Logo";

const Header = ({ theme, handlerTheme }) => {
  const modo = theme ? "Modo Nocturno" : "Modo Light";

  return (
    <HeaderComponent>
      <Logo theme={theme ? "#ffffff" : "#4a1ee3"} />
      <Button onClick={handlerTheme}>{modo}</Button>
    </HeaderComponent>
  );
};

export { Header };
