import { defineStore } from "pinia";

export const useCommonStore = defineStore("common", {
  state: () => ({
    mobile: window.innerWidth <= 1025
  }),

  actions: {
    handleResize() {
      if (window.innerWidth <= 1025) {
        this.mobile = true;
      } else {
        this.mobile = false;
      }
    },
  },
});
