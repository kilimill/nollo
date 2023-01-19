import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    isBusy: true,
    user: {
      name: null,
      avatar: null,
      phone: null,
      email: null,
    },
    isTokenExist: false,
    isUserAuth: false,
    city: null,
    coordinates: null,
    isGotLocation: false
  }),
  getters: {
    getUser: (state) => state.user,
  },
  actions: {
    setUser(payload) {
      this.user = payload;
    },
    setTokenExistTrue() {
      this.isTokenExist = true;
    },
    setUserAuthTrue() {
      this.isUserAuth = true;
    },
    logout() {
      this.isTokenExist = false;
      this.isUserAuth = false;
      this.user = undefined
    },
    setIsBusy(payload) {
      this.isBusy = payload;
    },
    setCity(city) {
      this.city = city;
    },
    setCoordinates(coordinates) {
      this.coordinates = coordinates;
    },
    setIsGotLocation(payload) {
      this.isGotLocation = payload;
    },
  },
});
