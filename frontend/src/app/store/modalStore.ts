import { makeAutoObservable } from "mobx";

class ModalStore {
  isOpen = false;

  title = "";
  msg = "";

  constructor() {
    makeAutoObservable(this);
  }

  run(title: string, msg: string) {
    this.title = title;
    this.msg = msg;
    this.isOpen = true;
  }

  close() {
    this.isOpen = false;
  }
}

export const modalStore = new ModalStore();
