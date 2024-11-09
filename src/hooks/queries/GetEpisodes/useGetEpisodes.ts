import { useQuery } from "@apollo/client";
import { useEffect } from "react";

import GET_EPISODES from "./Query";
import useResponseHandler from "./responseHandler";

function useGetEpisodes() {
  const { data, loading, error, fetchMore } = useQuery(GET_EPISODES, {
    fetchPolicy: "cache-first",
  });
  const { setEpisodeDataInStore } = useResponseHandler();
  useEffect(() => {
    if (data) {
      setEpisodeDataInStore(data.episodes.results);
    }
  }, [data]);

  return { fetchMore, data, loading, error };
}

export default useGetEpisodes;
