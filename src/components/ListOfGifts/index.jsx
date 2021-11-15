import { useGetGifts } from "../../hooks/useGetGifts";
import { Grid } from "./styles";

const ListOfGifts = () => {
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
        gifts.map((gift) => <img src={gift.images.downsized_medium.url} />)}
    </Grid>
  );
};

export { ListOfGifts };
