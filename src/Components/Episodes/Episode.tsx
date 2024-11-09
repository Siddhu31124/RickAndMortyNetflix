import { FaPlay } from "react-icons/fa";

import ModalStore from "../../Store/ModalStore";
import SeriesStore from "../../Store/SeriesStors";
import { episodeStyle } from "./EpisodesStyles";
import EpisodeModel from "../../Model/EpisodeModel";

interface EpisodeProp {
  episode: EpisodeModel;
}
//Define the prop types here itself
const Episode = (props: EpisodeProp) => {
  const { episode } = props;
  //Trigger this API in the modal
  function handelSelectedEpisode(id: string) {
    SeriesStore.setSelectedId(id);
    ModalStore.openModal();
  }
  return (
    <li
      className={episodeStyle}
      onClick={() => handelSelectedEpisode(episode.id)}
    >
      <FaPlay className="ml-5" />
      <p>{episode.name}</p>
    </li>
  );
};
export default Episode;
