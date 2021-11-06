import { SearchComponent, Input, Button } from "./styles";
import IconSearch from "../../images/icon-search.svg";
import IconSearchWhite from "../../images/icon-search-white.svg";

const Search = () => {
  return (
    <SearchComponent>
      <Input type="search" placeholder="Busca gifts" />
      <Button>
        <img src={IconSearchWhite} />
      </Button>
    </SearchComponent>
  );
};

export { Search };
