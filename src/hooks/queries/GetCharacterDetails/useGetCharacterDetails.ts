import { useLazyQuery } from "@apollo/client";
import { useEffect } from "react";

import GET_CHARACTER_DETAILS from "./Query";
import SeriesStore from "../../../Store/SeriesStors";

function useGetCharacterDetails() {
  const [fetchCharacterInfo, { data, loading, error }] = useLazyQuery(
    GET_CHARACTER_DETAILS,
    {
      fetchPolicy: "cache-first",
    }
  );
  const handelFetchCharacterInfo = () => {
    fetchCharacterInfo({
      variables: { characterId: SeriesStore.selectedCharacterId },
    });
  };
  useEffect(() => {
    if (data) {
      SeriesStore.setCharacter(data.character);
    }
  }, [data]);
  return { handelFetchCharacterInfo, loading, error };
}
export default useGetCharacterDetails;
