import SeriesStore from "../../../Store/SeriesStors";
import { Character } from "../../../types";

function useResponseHandler() {
  const setCharacterDetails = (data: Character[]) => {
    SeriesStore.setCharacters(data);
  };
  return { setCharacterDetails };
}

export default useResponseHandler;
