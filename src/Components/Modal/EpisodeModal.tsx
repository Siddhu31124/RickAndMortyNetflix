import { createPortal } from "react-dom";
import { useRef, useEffect, useState } from "react";
import { observer } from "mobx-react";
import { MdCancel } from "react-icons/md";

import ModalStore from "../../Store/ModalStore";
import InfoTab from "./InfoTab";
import CharactersTab from "./CharactersTab";
import TabButtons from "./TabButtons";
import { INFO_TAB } from "../../Constant";
import { cancel, cancelContainer, tabContainer } from "./EpisodeModalStyle";

const EpisodeModal = observer(() => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [activeTab, setActiveTab] = useState(INFO_TAB);
  useEffect(() => {
    if (dialogRef.current) {
      if (ModalStore.isModalOpen) {
        dialogRef.current.showModal();
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
      return <InfoTab handelCloseModal={handelCloseModal} />;
    }
    return (
      <CharactersTab
        handelCloseModal={handelCloseModal}
        activeTab={activeTab}
      />
    );
  };

  return createPortal(
    <dialog className="modal" ref={dialogRef}>
      {cancelButton()}
      <div className={tabContainer}>
        <TabButtons activeTab={activeTab} handleTabClick={handleTabClick} />
      </div>
      {activeTabContent()}
    </dialog>,
    modalContainer
  );
});

export default EpisodeModal;
