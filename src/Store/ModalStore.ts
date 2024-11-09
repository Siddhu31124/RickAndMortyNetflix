import { makeAutoObservable } from "mobx";

class _ModalStore {
  isModalOpen: boolean;
  isCharacterDetailsOpen: boolean;
  constructor() {
    this.isModalOpen = false;
    this.isCharacterDetailsOpen = false;
    makeAutoObservable(this, {}, { autoBind: true });
  }
  openModal() {
    this.isModalOpen = true;
  }
  closeModal() {
    this.isModalOpen = false;
    this.isCharacterDetailsOpen = false;
  }
  openCharacterDetails() {
    this.isCharacterDetailsOpen = true;
  }
  closeCharacterDetails() {
    this.isCharacterDetailsOpen = false;
  }
}
const ModalStore = new _ModalStore();
export default ModalStore;
