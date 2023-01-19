<template>
  <section class="authorization">
    <header class="authorization__header">
      <div class="authorization__header-content mobile-hide">
        <router-link class="header__wrapper" :to="{ name: 'Home' }">
          <img class="logo" src="/images/logo.svg" alt="Логотип" />

          <span class="controls_middle header__text"
            >Найди идеальное место для своего отдыха</span
          >
        </router-link>

        <router-link class="btn btn_control btn_black" btn_black to="/">
          <GetOutIcon class="icon icon--small" />
          <span class="controls_middle">Вернуться к сервису</span>
        </router-link>
      </div>

      <router-link class="authorization__header-close not-mobile-hide" to="/">
        <CloseIcon class="icon icon--def" />
      </router-link>
    </header>

    <div class="authorization__content">
      <Login v-model:confirm="confirm" :class="{ hide: confirm }" />
      <Confirmation v-model:confirm="confirm" :class="{ hide: !confirm }" />
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import Login from "@/components/login/Index.vue";
import Confirmation from "@/components/login/Confirmation.vue";
import { CloseIcon, GetOutIcon } from "@/layout/icon/index";

const confirm = ref(undefined);
</script>
