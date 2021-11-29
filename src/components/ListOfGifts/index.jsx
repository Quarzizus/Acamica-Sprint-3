import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { Grid } from "./styles";
import { Gift } from "../Gift";
import { useGetGifts } from "../../hooks/useGetGifts";
import { Spinner } from "../Spinner";

const ListOfGifts = () => {
  const { state } = useContext(AppContext);
  const { gifts, loading, error } = useGetGifts(state);
  return (
    <Grid>
      {error && <h2>Houston, we have a problem</h2>}
      {loading && <Spinner />}
      {!error && !loading && !gifts.length && (
        <h2>
          Oh raios :c, parece que no hay gifts con este termino. Intenta con
          otro :3
        </h2>
      )}
      {!error &&
        !loading &&
        gifts.length &&
        gifts.map((gift) => (
          <Gift
            src={gift.images.downsized_medium.url}
            key={gift.id}
            href={gift.url}
            alt={gift.title}
          />
        ))}
    </Grid>
  );
};

export { ListOfGifts };
