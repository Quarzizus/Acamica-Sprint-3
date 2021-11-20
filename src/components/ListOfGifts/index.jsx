import { useContext, useEffect } from "react";
import { AppContext } from "../../context/AppContext";
import { useGetGifts } from "../../hooks/useGetGifts";
import { Grid } from "./styles";
import { Gift } from "../Gift";

const ListOfGifts = () => {
  const { totalGifts, setTotalGifts } = useContext(AppContext);

  const { gifts, loading, error } = useGetGifts({
    endpoint: "trending",
    limit: 15,
  });

  return (
    <Grid>
      {error && <h2>Error</h2>}
      {loading && <h2>Loading</h2>}
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
