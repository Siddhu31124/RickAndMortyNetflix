import { makeAutoObservable } from "mobx";

import { Character, CharacterInfo, Episode } from "../types";
import EpisodeModel from "../Model/EpisodeModel";
import CharacterModel from "../Model/CharacterModel";
import CharacterInfoModel from "../Model/CharacterInfoModel";

class _SeriesStore {
  allEpisodesDetails: EpisodeModel[];
  episodeCharacters: CharacterModel[];
  selectedEpisode: EpisodeModel | null;
  selectedEpisodeId: string;
  characterInfo: CharacterInfoModel | null;
  selectedCharacterId: string;
  constructor() {
    this.allEpisodesDetails = [];
    this.episodeCharacters = [];
    this.selectedEpisodeId = "";
    this.characterInfo = null;
    this.selectedCharacterId = "";
    this.selectedEpisode = null;
    makeAutoObservable(this, {}, { autoBind: true });
  }

  setAllEpisodes(data: Episode[]) {
    data.map((eachEpisode) =>
      this.allEpisodesDetails.push(new EpisodeModel(eachEpisode))
    );
  }
  setCharacters(data: Character[]) {
    this.episodeCharacters = data.map(
      (eachCharacter) => new CharacterModel(eachCharacter)
    );
  }
  setCharacter(data: CharacterInfo) {
    this.characterInfo = new CharacterInfoModel(data);
  }
  setSelectedId(id: string) {
    this.selectedEpisodeId = id;
  }
  setCharacterSelectedId(id: string) {
    this.selectedCharacterId = id;
  }
  setSelectedEpisode(data: Episode) {
    this.selectedEpisode = new EpisodeModel(data);
  }
}

const SeriesStore = new _SeriesStore();
export default SeriesStore;
