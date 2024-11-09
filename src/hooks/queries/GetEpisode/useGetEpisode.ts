import { useLazyQuery } from "@apollo/client";
import GET_EPISODE from "./Query";
import SeriesStore from "../../../Store/SeriesStors";
import { useEffect } from "react";
import useResponseHandler from "./ResponseHnadler";

function useGetEpisode() {
  const [fetchEpisode, { data, loading, error }] = useLazyQuery(GET_EPISODE, {
    fetchPolicy: "cache-first",
  });
  const { setEpisodeData } = useResponseHandler();
  useEffect(() => {
    if (data) {
      setEpisodeData(data.episode);
    }
  }, [data]);
  function handleFetchEpisode() {
    fetchEpisode({ variables: { episodeId: SeriesStore.selectedEpisodeId } });
  }

  return { handleFetchEpisode, loading, error };
}

export default useGetEpisode;
