<template>
  <div class="flash-message">
    <transition name="fade" :class="msg.type" v-for="(msg, i) in messages" :key="i">
      <div class="flash-message__item" v-if="msg.show">
        <span class="text_middle"> {{ msg.text }}</span>
        <button class="btn_link" @click.prevent="msg.show = false">
          <CloseIcon class="flash-message__icon" />
        </button>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { watch } from "vue";
import { useFlashStore } from "@/stores/flashStore";
import { CloseIcon } from "@/layout/icon/index";

const flashStore = useFlashStore();
const messages = flashStore.messages;

watch(messages, () => {
  messages.forEach((item) => setTimeout(() => flashStore.hideMessage(item), 3000));
});
</script>

<style scoped lang="stylus">
@import '../assets/styles/vars.styl';
.flash-message {
  display flex
  flex-direction column
  align-items: flex-end
  position: fixed;
  z-index 100;
  top: 25px;
  right: 25px;

  @media $mobile {
    right: 5px;
  }

  &__item{
    display flex
    align-items center
    padding: 5px 15px;
    border-radius: 5px

    &.success {
      background-color #06cc79a1;
    }

    &.error {
      background-color #ff000087;
    }

    & + & {
      margin-top: 10px;
    }
  }

  &__icon {
    width 12px
    height 12px
    margin-left 7px
    stroke #ffffff
  }

  .text_middle {
    color: #fff;
  }
}
</style>
