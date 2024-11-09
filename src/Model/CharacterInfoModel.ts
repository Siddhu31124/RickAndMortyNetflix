import { makeAutoObservable } from "mobx";

import { Origin, Gender, AliveStatue, CharacterInfo } from "../types";
import OriginModal from "./OrginModel";
class CharacterInfoModel {
  id: string;
  image: string;
  name: string;
  gender: Gender;
  status: AliveStatue;
  type: string;
  species: string;
  origin: Origin;
  constructor(char: CharacterInfo) {
    this.id = char.id;
    this.image = char.image;
    this.name = char.name;
    this.gender = char.gender;
    this.status = char.status;
    this.type = char.type;
    this.species = char.species;
    this.origin = new OriginModal(char.origin);
    makeAutoObservable(this, {}, { autoBind: true });
  }
}

export default CharacterInfoModel;
