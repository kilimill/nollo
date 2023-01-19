<template>
  <section class="added">
    <div class="added__inner">
      <img
        class="added__img mb-16"
        src="@/assets/images/details/added.jpg"
        alt="Картинка 'доавблено'"
      />
      <h2 class="title_up-middle added__title mb-16">Объект добавлен</h2>
      <p class="text_middle opacity-50 mb-32">
        Перед публикацией модератор проверит все данные. Вы можете отслеживать статус в
        своём профиле.
      </p>
      <router-link
        class="btn btn_green"
        :to="{ name: 'Profile', query: { startPage: 2 } }"
      >
        Понятно
      </router-link>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "@/stores/userStore";
import { roleId } from "@/helpers/constants";

const router = useRouter();

onMounted(() => {
  if (roleId.OWNER !== useUserStore().user.role_id) {
    router.push({ name: "Home" });
  }
});
</script>

<style scoped lang="stylus">
@import '../../assets/styles/vars.styl';
.added {
  padding: 56px 15px 0;

  &__inner {
    max-width: 470px;
    width: 100%;
    margin: 0 auto;
    text-align: center;

    @media $tablet {
      max-width: 448px
    }

    @media $mobile {
      max-width: 328px
    }
  }

  &__img {
    width: 100%;
    height: 256px;
    object-fit: cover;
    object-position: center;
  }

  .btn {
    margin: 0 auto;
  }
}
</style>
