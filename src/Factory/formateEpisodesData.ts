import { EpisodeBeforeFormat } from "../types";

function formateEpisodesData(data: EpisodeBeforeFormat[]) {
  return data.map((eachEpisode) => ({
    id: eachEpisode.id,
    name: eachEpisode.name,
    created: eachEpisode.created,
    airDate: eachEpisode.air_date,
  }));
}

export const formatEpisodeData = (data: EpisodeBeforeFormat) => {
  return {
    id: data.id,
    name: data.name,
    created: data.created,
    airDate: data.air_date,
  };
};

export default formateEpisodesData;
