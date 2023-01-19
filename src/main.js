import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import vInput from "./components/vue-custom/vInput.vue";
import "./assets/styles/imports.styl";
const pinia = createPinia();


createApp(App)
  .component("v-input", vInput)
  .use(pinia)
  .use(router)
  .mount("#app");
