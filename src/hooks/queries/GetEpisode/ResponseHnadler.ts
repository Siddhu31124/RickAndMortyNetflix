import { EpisodeBeforeFormat } from "../../../types";
import { formatData } from "../../../Factory/formateEpisodesData";
import SeriesStore from "../../../Store/SeriesStors";

function useResponseHandler() {
  const setEpisodeData = (data: EpisodeBeforeFormat) => {
    const formattedData = formatData(data);
    SeriesStore.setSelectedEpisode(formattedData);
  };
  return { setEpisodeData };
}

export default useResponseHandler;
