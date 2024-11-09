import { observer } from "mobx-react";

import SeriesStore from "../../Store/SeriesStors";
import {
  characterImg,
  charGender,
  charImgContainer,
  charName,
  charOrigin,
  charTab,
  commonChar,
  commonInfo,
} from "./EpisodeModalStyle";
import { CHARACTER_ORIGIN, CHARACTER_TYPE } from "../../Constant";

const CharacterInfo = observer(() => {
  if (!SeriesStore.characterInfo) {
    return null;
  }
  const { image, name, gender, type, status, species, origin } =
    SeriesStore.characterInfo;

  const characterImgContainer = () => {
    return (
      <div className={charImgContainer}>
        <img className={characterImg} src={image} alt={name} />
      </div>
    );
  };

  const characterOriginDetails = () => {
    return (
      <div className="mt-4">
        <h3 className={charOrigin}>Origin</h3>
        <p className={commonChar}>
          Dimension:{" "}
          <span className={commonInfo}>
            {origin?.dimension || CHARACTER_ORIGIN}
          </span>
        </p>
        <p className={commonChar}>
          Name:{" "}
          <span className={commonInfo}>{origin?.name || CHARACTER_TYPE}</span>
        </p>
      </div>
    );
  };
  const characterInfoContainer = () => {
    return (
      <div className="text-left flex flex-col gap-1">
        <h2 className={charName}>
          <span className={commonInfo}>{name}</span>
        </h2>
        <p className={charGender}>
          Gender: <span className={commonInfo}>{gender}</span>
        </p>
        <p className={commonChar}>
          Status: <span className={commonInfo}>{status}</span>
        </p>
        <p className={commonChar}>
          Type: <span className={commonInfo}>{type || CHARACTER_TYPE}</span>
        </p>
        <p className={commonChar}>
          Species: <span className={commonInfo}>{species}</span>
        </p>
        {characterOriginDetails()}
      </div>
    );
  };
  return (
    <div className={charTab}>
      {characterImgContainer()}
      {characterInfoContainer()}
    </div>
  );
});

export default CharacterInfo;
