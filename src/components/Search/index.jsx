import { useState } from "react";
import { SearchComponent, Input, Button, ContainerSearch } from "./styles";
import IconSearch from "../../images/icon-search.svg";
import { SuggestionsComponent } from "../Suggestions";
import IconSearchWhite from "../../images/icon-search-white.svg";
import { useGetGifts } from "../../hooks/useGetGifts";

const Search = () => {
  const [inputSearchValue, setInputSearchValue] = useState("");

  const { gifts } = useGetGifts({
    endpoint: "search/tags",
    limit: 5,
    q: inputSearchValue,
    dependencies: [inputSearchValue],
  });

  const handlerChange = (e) => {
    setInputSearchValue(e.target.value);
  };
  return (
    <ContainerSearch>
      <SearchComponent>
        <Input
          type="search"
          placeholder="Busca gifts"
          onChange={handlerChange}
        />
        <Button>
          <img src={IconSearchWhite} />
        </Button>
      </SearchComponent>
      <SuggestionsComponent suggestions={gifts} />
    </ContainerSearch>
  );
};

export { Search };
