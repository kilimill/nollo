import { defineStore } from "pinia";

export const useDefaultStore = defineStore("default", {
  state: () => ({
    meals: [],
    tags: [],
    allHotels: [],
  }),
  actions: {
    setMeals(payload) {
      this.meals = payload;
    },
    setAllHotels(payload) {
      this.allHotels = payload;
    },
    setTags(payload) {
      this.tags = payload;
    },
  },
});
