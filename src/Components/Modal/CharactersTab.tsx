import { observer } from "mobx-react";
import { useEffect } from "react";

import SeriesStore from "../../Store/SeriesStors";
import { charTab, charImg, characterStyle } from "./EpisodeModalStyle";
import useGetCharacterDetails from "../../hooks/queries/GetCharacterDetails/useGetCharacterDetails";
import CharacterInfo from "./CharacterInfo";
import ModalStore from "../../Store/ModalStore";
import Loader from "../Loader";
import useGetCharacters from "../../hooks/queries/GetCharacters/useGetCharacters";
import { cancelContainer, close } from "./EpisodeModalStyle";
import { CHARACTER_TAB } from "../../Constant";

interface props {
  handelCloseModal: () => void;
  activeTab: string;
}

const CharactersTab = (props: props) => {
  const { handelCloseModal, activeTab } = props;
  const { handelFetchCharacterInfo, loading, error } = useGetCharacterDetails();
  const {
    handelFetchCharacters,
    loading: charactersLoading,
    error: charactersError,
  } = useGetCharacters();
  function handleCharacter(id: string) {
    SeriesStore.setCharacterSelectedId(id);
    handelFetchCharacterInfo();
    ModalStore.openCharacterDetails();
  }
  useEffect(() => {
    handelFetchCharacters();
  }, []);

  const closeButton = () => {
    const showBackButton =
      ModalStore.isCharacterDetailsOpen && activeTab === CHARACTER_TAB;
    if (!error && !loading && !charactersLoading) {
      return (
        <div className={`${cancelContainer} mt-8`}>
          {showBackButton ? (
            <button
              className={close}
              onClick={ModalStore.closeCharacterDetails}
            >
              Back
            </button>
          ) : undefined}
          <button className={close} onClick={handelCloseModal}>
            Close
          </button>
        </div>
      );
    }
  };

  const characters = () => {
    switch (true) {
      case charactersLoading: {
        return <Loader />;
      }
      case charactersError !== undefined: {
        return <p>Failed to Fetch data</p>;
      }
      default: {
        return (
          <ul className={charTab}>
            {SeriesStore.episodeCharacters.map((eachChar) => (
              <li
                key={eachChar.id}
                className={characterStyle}
                onClick={() => handleCharacter(eachChar.id)}
              >
                <img
                  src={eachChar.image}
                  className={charImg}
                  alt={eachChar.name}
                />
                <p>{eachChar.name}</p>
              </li>
            ))}
          </ul>
        );
      }
    }
  };

  const characterDetails = () => {
    switch (true) {
      case loading: {
        return <Loader />;
      }
      case error !== undefined: {
        return <p>Failed to Fetch data</p>;
      }
      default: {
        return (
          <>
            <CharacterInfo />
          </>
        );
      }
    }
  };

  return (
    <>
      <div className="text-white max-h-[245px] overflow-auto scroll">
        {ModalStore.isCharacterDetailsOpen ? characterDetails() : characters()}
      </div>
      {closeButton()}
    </>
  );
};

export default observer(CharactersTab);
