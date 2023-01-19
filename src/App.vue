<template>
  <main class="main" :class="checkRoute">
    <FlashMessage />
    <div class="bg" v-if="checkRoute == 'gradient'">
      <div class="bg__item"></div>
    </div>
    <div class="main__content">
      <BurgerMenu />
      <v-header v-if="checkRoute !== 'log-in'" />
      <router-view v-slot="{ Component }">
        <Transition name="fade" mode="out-in">
          <component :is="Component"></component>
        </Transition>
      </router-view>
    </div>
    <v-footer v-if="checkRoute !== 'log-in'" />
  </main>
</template>

<script setup>
import { onMounted, onUnmounted } from "vue";
import useInit from "@/composables/useInit.js";
import findClass from "@/helpers/findClass.js";
import VHeader from "@/components/VHeader.vue";
import VFooter from "@/components/VFooter.vue";
import BurgerMenu from "@/layout/BurgerMenu.vue";
import FlashMessage from "@/layout/FlashMessage.vue";

const { init, destroy } = useInit();
const { checkRoute } = findClass();
onMounted(() => {
  init();
});

onUnmounted(() => {
  destroy();
});
</script>

<style lang="stylus" scoped>
@import '/assets/styles/vars.styl';
.main {
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  &__content {
    position: relative;
    z-index: 11;
    flex: 1 0 auto;
  }

  &.light {
    background-color: #FFFFFF;
  }

  &.content-white {
    background-color: #FFFFFF;
  }

  .footer {
    flex: 0 0 auto;
  }
}

.bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 1000px;

  &::before, &::after {
    content: '';
    position: absolute;
    -webkit-filter: blur(132px);
    filter: blur(132px);
    // backdrop-filter: blur(132px)
    border-radius: 50%;
  }

  &::after {
    // width vw(689)
    // height vw(689)
    width: 689px;
    height: 689px;
    top: -32%;
    left: 50%;
    transform: translateX(-50%);
    background-color: #A4FFA6;

    @media $tablet {
      right: 88px;
      transform: translateX(0);
      left: auto;
    }

    @media $mobile {
      top: 0;
      left: 50%;
      transform: translate(-35%, -29%);
      width: 471px;
      height: 471px;
    }
  }

  &::before {
    // width vw(627)
    // height vw(627)
    width: 627px;
    height: 627px;
    top: 132px;
    left: 0;
    // filter: blur(101px);
    // filter: blur(142px);
    transform: translateX(-15%);
    background-color: #D8FF8A;
    z-index: 1;

    @media $mobile {
      top: 94px;
      transform: translateX(-50%);
      width: 428px;
      height: 428px;
    }
  }

  &__item {
    position: absolute;
    // width vw(847)
    // height vw(847)
    width: 847px;
    height: 847px;
    top: 145px;
    left: auto;
    right: -5%;
    background-color: #8AFFAC;
    opacity: 0.48;
    filter: blur(275px);
    border-radius: 50%;
  }
}
</style>
