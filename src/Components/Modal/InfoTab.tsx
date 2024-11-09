import { observer } from "mobx-react";

import SeriesStore from "../../Store/SeriesStors";
import Loader from "../Loader";
import {
  cancelContainer,
  close,
  infoCommon,
  infoContainer,
  infoText,
} from "./EpisodeModalStyle";

interface InfoTabProp {
  loading: boolean;
  handelCloseModal: () => void;
}

const InfoTab = (prop: InfoTabProp) => {
  const { loading, handelCloseModal } = prop;

  const closeButton = () => {
    return (
      <div className={`${cancelContainer} mt-8`}>
        <button className={close} onClick={handelCloseModal}>
          Close
        </button>
      </div>
    );
  };
  console.log(SeriesStore.selectedEpisode);
  const EpisodeInfo = () => {
    if (loading) {
      return <Loader />;
    }
    if (SeriesStore.selectedEpisode) {
      return (
        <div className={infoContainer}>
          <h3 className={infoText}>Episode Info</h3>
          <p>
            <span className={infoCommon}>Episode Name : </span>
            {SeriesStore.selectedEpisode.name}
          </p>
          <p>
            <span className={infoCommon}>Created On : </span>
            {SeriesStore.selectedEpisode.created.slice(0, 10)}
          </p>
          <p>
            <span className={infoCommon}>Air Date : </span>
            {SeriesStore.selectedEpisode.airDate}
          </p>
        </div>
      );
    }
  };

  return (
    <div>
      <EpisodeInfo />
      {closeButton()}
    </div>
  );
};

export default observer(InfoTab);
