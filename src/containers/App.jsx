import { Header } from "../components/Header/";
import { useState } from "react";
import { Hero } from "../components/Hero";
import { Search } from "../components/Search";
import { ListOfGifts } from "../components/ListOfGifts";
import { ThemeProvider } from "styled-components";
import { Themes } from "../context/Themes";
import { GlobalStyles } from "../containers/GlobalStyles";

function App() {
  const [theme, setTheme] = useState(false);

  const handlerTheme = () => {
    setTheme(!theme);
  };

  return (
    <ThemeProvider theme={theme ? Themes["darkMode"] : Themes["lightMode"]}>
      <GlobalStyles />
      <div className="App">
        <Header handlerTheme={handlerTheme} theme={theme} />
        <Hero>
          <Search />
        </Hero>
        <ListOfGifts />
      </div>
    </ThemeProvider>
  );
}

export default App;
