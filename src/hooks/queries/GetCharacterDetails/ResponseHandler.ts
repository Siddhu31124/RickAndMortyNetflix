import SeriesStore from "../../../Store/SeriesStors";
import { CharacterInfo } from "../../../types";

export default function useResponseHandler() {
  const setCharacterDetails = (data: CharacterInfo) => {
    SeriesStore.setCharacter(data);
  };
  return { setCharacterDetails };
}
