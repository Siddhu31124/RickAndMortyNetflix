import { EpisodeBeforeFormat } from "../../../types";
import { formatEpisodeData } from "../../../Factory/formateEpisodesData";
import SeriesStore from "../../../Store/SeriesStors";

function useResponseHandler() {
  const setEpisodeData = (data: EpisodeBeforeFormat) => {
    const formattedData = formatEpisodeData(data);
    SeriesStore.setSelectedEpisode(formattedData);
  };
  return { setEpisodeData };
}

export default useResponseHandler;
