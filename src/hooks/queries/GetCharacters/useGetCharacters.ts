import { useLazyQuery } from "@apollo/client";

import GET_CHARACTERS from "./Query";
import useResponseHandler from "./responseHandler";
import { useEffect } from "react";
import SeriesStore from "../../../Store/SeriesStors";

function useGetCharacters() {
  const [fetchCharacter, { data, loading, error }] = useLazyQuery(
    GET_CHARACTERS,
    {
      variables: { episodeId: SeriesStore.selectedEpisodeId },
      fetchPolicy: "cache-first",
    }
  );
  const { setCharacterDetails } = useResponseHandler();
  useEffect(() => {
    if (data) {
      setCharacterDetails(data.episode.characters);
    }
  }, [data]);

  function handelFetchCharacters() {
    fetchCharacter({ variables: { episodeId: SeriesStore.selectedEpisodeId } });
  }
  return { handelFetchCharacters, data, loading, error };
}
export default useGetCharacters;
