import "./App.css";
import { Header } from "../components/Header/";
import { Hero } from "../components/Hero";
import { Search } from "../components/Search";
import { ListOfGifts } from "../components/ListOfGifts";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero>
        <Search />
      </Hero>
      <ListOfGifts />
    </div>
  );
}

export default App;
