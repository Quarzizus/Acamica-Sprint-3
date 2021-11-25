import { useContext } from "react";
import { Suggestions } from "./styles";
import { AppContext } from "../../context/AppContext";

const SuggestionsComponent = ({
  suggestions,
  handlerSearch,
  setIsSearch,
  isSearch,
}) => {
  if (!isSearch) {
    return null;
  } else {
    return (
      <Suggestions border={suggestions.length}>
        {suggestions.map((sugg, i) => (
          <li
            key={i}
            onClick={(e) => {
              handlerSearch({ q: e.target.innerText, endpoint: "search" });
              setIsSearch(!isSearch);
            }}
          >
            {sugg.name}
          </li>
        ))}
      </Suggestions>
    );
  }
};

export { SuggestionsComponent };
