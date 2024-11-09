import { createPortal } from "react-dom";
import { useRef, useEffect, useState } from "react";
import { observer } from "mobx-react";
import { MdCancel } from "react-icons/md";

import useGetEpisode from "../../hooks/queries/GetEpisode/useGetEpisode";
import ModalStore from "../../Store/ModalStore";
import InfoTab from "./InfoTab";
import CharactersTab from "./CharactersTab";
import TabButtons from "./TabButtons";
import Loader from "../Loader";
import { INFO_TAB } from "../../Constant";
import { cancel, cancelContainer, tabContainer } from "./EpisodeModalStyle";

const EpisodeModal = observer(() => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [activeTab, setActiveTab] = useState(INFO_TAB);
  const { handleFetchEpisode, loading, error } = useGetEpisode();
  useEffect(() => {
    if (dialogRef.current) {
      if (ModalStore.isModalOpen) {
        dialogRef.current.showModal();
        handleFetchEpisode();
      } else {
        dialogRef.current.close();
      }
    }
  }, [ModalStore.isModalOpen]);

  const modalContainer = document.getElementById("modal");
  if (!modalContainer) {
    return null;
  }

  function handelCloseModal() {
    ModalStore.closeModal();
    setActiveTab(INFO_TAB);
  }
  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const cancelButton = () => {
    return (
      <div className={cancelContainer}>
        <MdCancel className={cancel} onClick={handelCloseModal} />
      </div>
    );
  };
  const activeTabContent = () => {
    if (activeTab === INFO_TAB) {
      return <InfoTab handelCloseModal={handelCloseModal} loading={loading} />;
    }
    return (
      <CharactersTab
        handelCloseModal={handelCloseModal}
        activeTab={activeTab}
      />
    );
  };
  const displayTabContent = () => {
    switch (true) {
      case loading: {
        return <Loader />;
      }
      case error !== undefined: {
        return <p className="mt-10 text-red-600">Failed To Fetch data</p>;
      }
      case !error && !loading: {
        return <div className="mt-4">{activeTabContent()}</div>;
      }
    }
  };

  return createPortal(
    <dialog className="modal" ref={dialogRef}>
      {cancelButton()}
      <div className={tabContainer}>
        <TabButtons activeTab={activeTab} handleTabClick={handleTabClick} />
      </div>
      {displayTabContent()}
    </dialog>,
    modalContainer
  );
});

export default EpisodeModal;
