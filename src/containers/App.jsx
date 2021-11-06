import "./App.css";
import { Header } from "../components/Header/";
import { Hero } from "../components/Hero";
import { Search } from "../components/Search";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero>
        <Search />
      </Hero>
    </div>
  );
}

export default App;
