import { Suggestions } from "./styles";

const SuggestionsComponent = ({ suggestions }) => {
  return (
    <Suggestions border={suggestions.length}>
      {suggestions.map((sugg) => (
        <li>{sugg.name}</li>
      ))}
    </Suggestions>
  );
};

export { SuggestionsComponent };
