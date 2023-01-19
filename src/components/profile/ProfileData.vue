<template>
  <section class="profile-data">
    <div class="profile-data__item">
      <h2 class="title_middle mb-32">Контактная информация</h2>

      <form class="wrapper" @submit.prevent="updateUser" ref="formPersonalData">
        <div class="profile-data__avatar">
          <label class="profile-data__avatar-file">
            <input
              type="file"
              name="avatar"
              accept="image/png,image/jpeg"
              @change="onAvatarChange"
            />
          </label>
          <div class="profile-data__file" v-if="!user.avatar">
            <p class="controls_middle">Добавить фото</p>
          </div>
          <div class="profile-data__avatar-content" v-else>
            <img class="profile-data__avatar-img" :src="user.avatar" alt="Аватарка" />
            <div class="profile-data__avatar-bg"></div>
          </div>
        </div>
        <div class="profile-data__contacts">
          <v-input
            class="mb-24"
            icon="profile"
            label="Имя"
            name="name"
            :errors="errors"
            v-model:value="user.name"
            required
          />

          <v-input
            class="mb-24"
            icon="mail"
            label="Email"
            name="email"
            :errors="errors"
            v-model:value="user.email"
            required
          />

          <v-phone
            class="mb-24"
            icon="phone"
            label="Телефон"
            name="phone"
            :errors="errors"
            v-model:value="user.phone"
            required
          />
        </div>
        <button hidden type="submit" ref="hiddenBtn" :disabled="isSent"></button>
      </form>
      <div class="hidden-form hidden-form--white" ref="personalHiddenForm">
        <button
          class="hidden-form__btn btn btn_green btn_block"
          type="submit"
          @click.prevent="updateUser"
          :disabled="isSent"
        >
          Сохранить изменения
        </button>
        <form class="hidden-form__content" @submit.prevent="sendConfirmation">
          <v-input
            class="mr-16"
            label="Введите код..."
            name="code"
            :errors="errors"
            v-model:value="confirmationCode"
            required
          />
          <button class="btn btn_green btn_chat" type="submit" :disabled="isSent">
            <span class="btn__text not-desktop-hide">Отправить</span>
            <TelegramIcon class="desktop-hide" />
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from "vue";
import vPhone from "../vue-custom/vPhone.vue";
import { useUserStore } from "@/stores/userStore";
import { useApi } from "@/composables/useApi";
import hiddenForm from "@/helpers/hiddenForm";
import { TelegramIcon } from "@/layout/icon/index";

const userStore = useUserStore();
let user = reactive({
  name: userStore.user.name,
  avatar: userStore.user.avatar,
  phone: userStore.user.phone,
  email: userStore.user.email,
});
const formPersonalData = ref();
const hiddenBtn = ref();
const confirmationCode = ref();
const personalHiddenForm = ref();
const { openForm, cancelForm } = hiddenForm(personalHiddenForm);

const errors = ref({});

const isSent = ref(false);
const updateUser = () => {
  if (!formPersonalData.value.checkValidity()) {
    hiddenBtn.value.click();
    return;
  }
  const formData = new FormData(formPersonalData.value);
  isSent.value = true;
  useApi()
    .postTo("profile/update", formData, true)
    .then((data) => {
      if (!data.data.name) {
        openForm();
      } else {
        userStore.setUser(data.data);
      }
    })
    .catch((respone) => {
      if (respone.data.errors) {
        errors.value = respone.data.errors;
      }
    })
    .finally(() => (isSent.value = false));
};

const onAvatarChange = (e) => {
  const img = e.target.files[0];

  let reader = new FileReader();
  reader.readAsDataURL(img);
  reader.addEventListener(
    "load",
    function () {
      user.avatar = reader.result;
    },
    false
  );
};

const sendConfirmation = () => {
  isSent.value = true;
  useApi()
    .postTo("profile/input-phone-code", {
      code: confirmationCode.value,
      phone: user.phone,
    })
    .then((data) => {
      userStore.setUser(data.data);
      cancelForm();
      confirmationCode.value = "";
    })
    .catch((respone) => {
      if (respone.data.errors) {
        errors.value = respone.data.errors;
      }
    })
    .finally(() => (isSent.value = false));
};
</script>

<style scoped lang="stylus">
@import '../../assets/styles/vars.styl';
.profile-data {
  width: 100%;

  &__item {
    padding: 40px;
    background-color: #FFFFFF;
    border-radius: var(--radius-def);
    margin-bottom: var(--offset-up-mid);

    @media $mobile {
      padding: 32px 24px;

      &:first-child {
        margin-bottom: 24px;
      }
    }
  }

  &__file {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: $gray;
    cursor: pointer;

    .controls_middle {
      max-width: 104px;
      text-align: center;
    }

    &-input {
      position: absolute;
      visibility: hidden;
      opacity: 0;
    }
  }

  &__avatar {
    position: relative;
    width: 152px;
    height: 152px;
    flex-shrink: 0;
    margin-right: 32px;
    overflow: hidden;
    border-radius: 20px;

    @media $mobile {
      margin-right: 0;
      margin-bottom: 24px;
    }

    &-input {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 0;
      height: 0;
      opacity: 0;
    }

    &-content {
      position: relative;
      height: 100%;
    }

    &-bg,
    &-file {
      cursor: pointer;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
    }

    &-file{
      z-index 2

      &:hover ~ .profile-data__avatar-content .profile-data__avatar-bg {
        opacity: 1;
      }
    }

    &-bg {
      z-index 3
      pointer-events none
      display: flex;
      align-items: center;
      justify-content: center;
      transition: opacity 0.3s;
      background: linear-gradient(0deg, rgba(0, 0, 0, 0.42), rgba(0, 0, 0, 0.42));

      &::before {
        content: '';
        display: inline-block;
        background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M3.55132 15.6617L17.5525 1.66054C17.5891 1.64879 17.632 1.63592 17.6805 1.62278C17.8837 1.56774 18.1757 1.51068 18.5188 1.50595C19.1849 1.49676 20.0653 1.68066 20.9201 2.53553C21.775 3.3904 21.9589 4.27079 21.9497 4.93692C21.945 5.27995 21.8879 5.57197 21.8329 5.77516C21.8198 5.82368 21.8069 5.86655 21.7951 5.90318L7.79396 19.9044L2.97278 20.4829L3.55132 15.6617Z' stroke='white' stroke-width='2' stroke-linecap='round'/%3E%3Cpath d='M14.2676 3.53125L19.6551 8.91873' stroke='white' stroke-width='2'/%3E%3C/svg%3E%0A");
        width: 24px;
        height: 24px;
      }

      @media $mobile {
        display: none;
      }
    }

    &-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }

  &__contacts {
    width: 100%;
  }

  .hidden-form__btn {
    width: 100%;
  }
}

@media $mobile {
  .wrapper {
    display: block;
  }
}
</style>
