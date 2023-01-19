import { defineStore } from "pinia";

export const useFlashStore = defineStore("flash", {
  state: () => ({
    messages: [],
  }),
  actions: {
    addMessage(message) {
      this.messages.push(message);
    },
    hideMessage(message) {
      message.show = false;
    },
  },
});
