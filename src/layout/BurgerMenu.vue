<template>
  <div class="burger-menu">
    <div class="burger-menu__content">
      <div class="burger-menu__inner">
        <div class="burger-menu__location">
          <MapIcon class="mr-16" />
          <span class="controls_middle">Москва</span>
        </div>

        <ul class="burger-menu__list">
          <li class="burger-menu__item" v-for="(item, i) in burgerList" :key="i">
            <button
              class="burger-menu__link"
              @click.prevent="following(item.route, item?.props)"
            >
              <component class="icon icon--small mr-16" :is="item.ico" />
              <span class="controls_middle">{{ item.title }}</span>
            </button>
          </li>
        </ul>
      </div>
      <div class="burger-menu__social">
        <p class="controls_middle">Наши социальные сети</p>

        <ul class="burger-menu__list">
          <li class="burger-menu__social-item">
            <a class="burger-menu__social-link" href="#">
              <VkIcon class="icon icon--small" />
            </a>
          </li>
          <li class="burger-menu__social-item">
            <a class="burger-menu__social-link" href="#">
              <OdnoklassnikiIcon class="icon icon--small" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import {
  ProfileIcon,
  SearchIcon,
  PhoneIcon,
  CardIcon,
  OdnoklassnikiIcon,
  VkIcon,
  MapIcon,
} from "@/layout/icon/index";

const router = useRouter();

// const logIn = () => {
//   router.push({ name: "Authorization" });
// };

const burgerList = [
  {
    title: "Профиль",
    route: "Profile",
    ico: ProfileIcon,
  },
  {
    title: "Каталог",
    route: "Search",
    ico: CardIcon,
  },
  {
    title: "Поиск",
    route: "Search",
    ico: SearchIcon,
  },
  {
    title: "Контакты",
    route: "Contacts",
    ico: PhoneIcon,
  },
];

const following = (routerName) => {
  document.body.classList.remove("burger-open");
  router.push({ name: routerName });
};
</script>

<style scoped lang="stylus">
@import '../assets/styles/vars.styl';
.burger-menu {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 31;
  width: 0;
  min-height: 100vh
  max-height: 600px
  overflow: hidden;
  opacity: 0;
  transition: width 0.3s, opacity 0.2s;

  &__content {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 95%;
    height: 100%;
    padding: 110px 0 28px;
    background-color: #fff;

    &::after {
      content: '';
      position: absolute;
      left: 100%;
      top: 0;
      width: 100%;
      height: 100%;
      background: rgba(34, 34, 34, 0.48);
    }
  }

  &__item {
    border-bottom: 2px solid $gray;

    &:first-child {
      border-top: 2px solid $gray;
    }
  }

  &__link {
    display: flex;
    width: 100%;
    padding: 24px;
  }

  &__location {
    margin-bottom: 38px;
    padding: 0 24px;
  }

  &__social {
    margin-left: 24px;

    .controls_middle {
      margin-bottom: 12px;
    }

    &-item {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      margin-left: 12px;
      background-color: $gray;
      border-radius: 8px;

      &:first-child {
        margin-left: 0;
      }
    }
  }
}
</style>
