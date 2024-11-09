import { makeAutoObservable } from "mobx";
import { Character } from "../types";

class CharacterModel {
  id: string;
  image: string;
  name: string;
  constructor(character: Character) {
    this.id = character.id;
    this.image = character.image;
    this.name = character.name;
    makeAutoObservable(this, {}, { autoBind: true });
  }
}

export default CharacterModel;
