import { observer } from "mobx-react";

import useGetEpisode from "../../hooks/queries/GetEpisode/useGetEpisode";
import SeriesStore from "../../Store/SeriesStors";
import Loader from "../Loader";
import {
  cancelContainer,
  close,
  infoCommon,
  infoContainer,
  infoText,
} from "./EpisodeModalStyle";
import { useEffect } from "react";
import ModalStore from "../../Store/ModalStore";

interface InfoTabProp {
  handelCloseModal: () => void;
}

const InfoTab = (prop: InfoTabProp) => {
  const { handelCloseModal } = prop;
  const { handleFetchEpisode, loading, error } = useGetEpisode();

  useEffect(() => {
    if (ModalStore.isModalOpen) {
      handleFetchEpisode();
    }
  }, [ModalStore.isModalOpen, SeriesStore.selectedEpisode]);

  const closeButton = () => {
    return (
      <div className={`${cancelContainer} mt-8`}>
        <button className={close} onClick={handelCloseModal}>
          Close
        </button>
      </div>
    );
  };
  const episodeInfo = () => {
    switch (true) {
      case loading: {
        return <Loader />;
      }
      case error !== undefined: {
        return <p className="text-red-500">Failed To Fetch Data</p>;
      }
      case SeriesStore.selectedEpisode !== null: {
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
    }
  };

  return (
    <div>
      {episodeInfo()}
      {closeButton()}
    </div>
  );
};

export default observer(InfoTab);
