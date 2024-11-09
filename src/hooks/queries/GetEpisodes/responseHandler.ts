import { EpisodeBeforeFormat } from "../../../types";
import formateEpisodesData from "../../../Factory/formateEpisodesData";
import SeriesStore from "../../../Store/SeriesStors";

function useResponseHandler() {
  const setEpisodeDataInStore = (data: EpisodeBeforeFormat[]) => {
    const formattedData = formateEpisodesData(
      data.slice(SeriesStore.allEpisodesDetails.length)
    );
    SeriesStore.setAllEpisodes(formattedData);
  };
  return { setEpisodeDataInStore };
}

export default useResponseHandler;
