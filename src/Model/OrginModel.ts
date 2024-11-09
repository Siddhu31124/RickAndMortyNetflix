import { makeAutoObservable } from "mobx";

import { Origin } from "../types";

class OriginModal {
  dimension: string;
  name: string;
  constructor(origin: Origin) {
    this.dimension = origin.dimension;
    this.name = origin.name;
    makeAutoObservable(this, {}, { autoBind: true });
  }
}

export default OriginModal;
