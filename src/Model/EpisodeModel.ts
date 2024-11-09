import { makeAutoObservable } from "mobx";

import { Episode } from "../types";

class EpisodeModel {
  id: string;
  name: string;
  created: string;
  airDate: string;
  constructor(episodeData: Episode) {
    this.id = episodeData.id;
    this.name = episodeData.name;
    this.created = episodeData.created;
    this.airDate = episodeData.airDate;
    makeAutoObservable(this, {}, { autoBind: true });
  }
}
export default EpisodeModel;
