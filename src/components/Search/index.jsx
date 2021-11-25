import { useState, useContext } from "react";
import { SearchComponent, Input, Button, ContainerSearch } from "./styles";
import { SuggestionsComponent } from "../Suggestions";
import IconSearchWhite from "../../images/icon-search-white.svg";
import { useGetGifts } from "../../hooks/useGetGifts";
import { AppContext } from "../../context/AppContext";

const Search = () => {
  const { handlerSearch } = useContext(AppContext);
  const [inputSearchValue, setInputSearchValue] = useState("");
  const [isSearch, setIsSearch] = useState(false);

  const { gifts } = useGetGifts({
    endpoint: "search/tags", // autocomplete
    limit: 5,
    q: inputSearchValue,
    dependencies: [inputSearchValue],
  });

  const handlerEnter = (e) => {
    if (e.key === "Enter") {
      handlerSearch({ endpoint: "search", q: inputSearchValue });
      e.target.value = "";
      setIsSearch(false);
    }
  };

  const handlerChange = (e) => {
    setInputSearchValue(e.target.value);
    setIsSearch(true);
  };
  return (
    <ContainerSearch>
      <SearchComponent>
        <Input
          type="search"
          placeholder="Busca gifts"
          onChange={handlerChange}
          onKeyPress={handlerEnter}
        />
        <Button
          onClick={() => {
            handlerSearch({
              endpoint: "search",
              q: inputSearchValue,
            });
          }}
        >
          <img src={IconSearchWhite} />
        </Button>
      </SearchComponent>
      <SuggestionsComponent
        suggestions={gifts}
        handlerSearch={handlerSearch}
        isSearch={isSearch}
        setIsSearch={setIsSearch}
      />
    </ContainerSearch>
  );
};

export { Search };
