export interface EpisodeBeforeFormat {
  id: string;
  name: string;
  created: string;
  air_date: string;
}
export interface Episode {
  id: string;
  name: string;
  created: string;
  airDate: string;
}

export enum Gender {
  Male = "Male",
  Female = "Female",
  Unknown = "Unknown",
}
export enum AliveStatue {
  Alive = "Alive",
  Dead = "Dead",
  Unknown = "Unknown",
}
export interface Character {
  id: string;
  image: string;
  name: string;
  gender: Gender;
  status: AliveStatue;
}

export interface Origin {
  dimension: string;
  name: string;
}
export interface CharacterInfo {
  id: string;
  image: string;
  name: string;
  gender: Gender;
  status: AliveStatue;
  type: string;
  species: string;
  origin: Origin;
}
