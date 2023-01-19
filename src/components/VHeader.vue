<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <button class="header__burger not-mobile-hide" @click="toggleBurgerMenu">
          <BurgerMenuIcon class="header__burger-icon header__burger-icon--lines" />
          <CloseIcon class="header__burger-icon header__burger-icon--close icon" />
        </button>

        <div class="header__wrapper">
          <router-link class="header__wrapper" :to="{ name: 'Home' }">
            <img class="logo" src="/images/logo.svg" alt="Логотип" />

            <span class="controls_middle header__text mobile-hide">
              Найди идеальное место для своего отдыха
            </span>
          </router-link>

          <div class="header__location btn_location mobile-hide">
            <MapIcon class="mr-16" />
            <span class="controls_middle" v-if="userStore.city">{{
              userStore.city
            }}</span>
            <span class="controls_middle" v-else>Москва</span>
          </div>
        </div>

        <div class="header__wrapper">
          <button class="header__notify mr-32 alarm" v-if="userStore.isUserAuth">
            <NotifyIcon class="icon icon--small" />
            <div class="notify-count"></div>
          </button>

          <div class="header__profile">
            <button
              class="header__profile-user"
              v-on="
                useCommonStore().mobile
                  ? {
                      click: toggleProfileMenu,
                    }
                  : {}
              "
              ref="profileBtn"
            >
              <div class="header__profile-content" v-if="!userStore.isUserAuth">
                <ProfileIcon class="icon icon--def mr-16" />
                <span class="controls_middle mobile-hide">Профиль</span>
              </div>
              <div class="header__wrapper header__profile-content" v-else>
                <img
                  class="header__profile-avatar"
                  v-if="userStore.user?.avatar"
                  :src="userStore.user.avatar"
                  alt="Аватарка"
                />
                <ProfileIcon class="icon icon--def" v-else />
                <p class="controls_middle ml-16 mobile-hide">
                  {{ userStore.user?.name }}
                </p>
              </div>
            </button>

            <div class="drop-down" ref="dropDownList">
              <div class="drop-down__wrapper" v-if="userStore.isUserAuth">
                <div class="drop-down__item">
                  <button
                    class="drop-down__btn"
                    v-if="route.name !== 'Profile'"
                    @click="headerLink('Profile')"
                  >
                    <ProfileIcon class="icon icon--def" />
                    <span class="drop-down__text">Профиль</span>
                  </button>
                </div>
                <!-- <li class="drop-down__item">
                <button
                  class="drop-down__btn"
                  v-if="route.name !== 'Profile'"
                  @click="headerLink('Profile', 4)"
                >
                    <MailIcon class="icon icon--def" />
                    <span class="drop-down__text">Мои сообщения</span>
                  </button>
                </li> -->
                <div class="drop-down__item" v-if="route.name !== 'Profile'">
                  <button class="drop-down__btn" @click="headerLink('Profile', 3)">
                    <div class="header__notify alarm mr-12">
                      <CalendarIcon class="icon icon--def" />
                      <div class="notify-count"></div>
                    </div>
                    <span class="drop-down__text">Мои бронирования</span>
                  </button>
                </div>
                <div class="drop-down__item">
                  <button class="drop-down__btn" @click="logOut">
                    <GetOutIcon class="icon icon--def" />
                    <span class="drop-down__text">Выйти</span>
                  </button>
                </div>
              </div>
              <div class="drop-down__item" v-else>
                <button class="drop-down__btn" @click="headerLink('Authorization')">
                  <ProfileIcon class="icon icon--def" />
                  <span class="drop-down__text">Регистрация</span>
                </button>
              </div>
            </div>
          </div>
          <ul class="social mobile-hide">
            <li class="social__item">
              <a class="btn social__btn" href="#">
                <VkIcon class="icon icon--small" />
              </a>
            </li>
            <li class="social__item">
              <a class="btn social__btn" href="#">
                <OdnoklassnikiIcon class="icon icon--small" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useUserStore } from "@/stores/userStore";
import { useCommonStore } from "@/stores/commonStore";
import { useApi } from "@/composables/useApi";
import {
  BurgerMenuIcon,
  CalendarIcon,
  CloseIcon,
  GetOutIcon,
  // MailIcon,
  MapIcon,
  NotifyIcon,
  OdnoklassnikiIcon,
  ProfileIcon,
  VkIcon,
} from "@/layout/icon/index";

const userStore = useUserStore();
const commonStore = useCommonStore();
const router = useRouter();
const route = useRoute();

const headerLink = (src, props) => {
  let obj = { name: src };

  if (props) {
    obj.query = { startPage: props };
  }

  router.push(obj);
};

const profileBtn = ref();
const dropDownList = ref();

const toggleProfileMenu = () => {
  const classList = dropDownList.value.classList;
  if (classList.contains("open")) {
    classList.remove("open");
  } else {
    classList.add("open");
  }
};

const closeProfileMenu = (e) => {
  if (e.target !== profileBtn.value) {
    dropDownList.value.classList.remove("open");
  }
};

const toggleBurgerMenu = () => {
  if (document.body.classList.contains("burger-open")) {
    document.body.classList.remove("burger-open");
  } else {
    document.body.classList.add("burger-open");
  }
};

const logOut = () => {
  router.push({ name: "Home" });
  useApi().logout();
};

onMounted(() => {
  if (commonStore.mobile) {
    window.addEventListener("click", closeProfileMenu);
  }
});

onUnmounted(() => {
  if (commonStore.mobile) {
    window.removeEventListener("click", closeProfileMenu);
  }
});
</script>
