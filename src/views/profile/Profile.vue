<template>
  <section class="profile">
    <div class="profile__wrapper" v-if="!userStore.isBusy">
      <div class="container">
        <BreadCrumbs :crumbs="[{ name: 'Профиль', to: '/profile' }]" />

        <h1 class="title_bigger mb-32">Профиль</h1>
      </div>
      <div class="container container_mob-hide">
        <div class="wrapper wrapper-h-btw">
          <Aside
            :list="componentList"
            :active-index="currentComponent.id"
            @next-component="findComponent"
          />

          <div class="profile__content">
            <transition name="fade" mode="out-in">
              <component :is="currentComponent.name" />
            </transition>
          </div>
        </div>
      </div>
    </div>
    <Loader v-else />
  </section>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import tabComponents from "@/helpers/tabComponents/index";
import { useUserStore } from "@/stores/userStore";
import Aside from "@/components/Aside.vue";
import BreadCrumbs from "@/layout/BreadCrumbs.vue";
import Loader from "@/layout/Loader.vue";

const userStore = useUserStore();
const router = useRoute();

const startPage = ref(router.query?.startPage);

const { componentList, currentComponent, findComponent } = tabComponents(
  "profile",
  startPage.value ? startPage.value : 0
);
</script>

<style scoped lang="stylus">
@import '../../assets/styles/vars.styl';
.profile {
  &__content {
    width: 100%;
  }

  @media $mobile {
    .wrapper {
      display: block;
    }
  }
}
</style>
