<template>
  <aside class="aside">
    <nav class="aside__nav">
      <ul class="aside__list">
        <li class="aside__list-item" v-for="item in list" :key="item.id">
          <button
            class="aside__link wrapper wrapper_v-ctr"
            :class="{ active: activeIndex === item.id, error: errors?.[item.name] }"
            @click="$emit('next-component', item.id, false)"
          >
            <component class="icon icon--def mr-16" :is="item.icon" v-if="item.icon" />
            <span class="aside__link-text controls_middle"> {{ item.title }}</span>
            <div class="aside__link-icons mobile-hide">
              <div
                class="aside__link-item"
                v-if="page === 'UpsertHotel' || page === 'CreateHotel'"
              >
                <CheckIcon
                  class="icon icon--def aside__link-ico"
                  v-if="valid.includes(item.name) && !errors?.[item.name]"
                />

                <div
                  class="hint"
                  v-else-if="errors?.[item.name] && activeIndex == item.id"
                  tooltip="Поля заполнены некорректно"
                  positionTool="bottom"
                >
                  <AlertInfoIcon class="icon--def hint__ico" />
                </div>
              </div>
              <div class="aside__link-item" v-else>
                <div class="notify-count" v-if="checkPage(item.title)">
                  <span class="controls_small">1</span>
                </div>
              </div>
            </div>
          </button>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script setup>
import { CheckIcon, AlertInfoIcon } from "@/layout/icon/index";
defineProps({
  list: Array,
  activeIndex: Number,
  page: String,
  errors: {
    type: Object,
    default: null,
  },
  valid: {
    type: Array,
    default: null,
  },
});

defineEmits(["next-component"]);

const pageWithMessages = ["Бронирования", "Сообщения"];

const checkPage = (pageName) => {
  if (pageWithMessages.includes(pageName)) {
    return true;
  }
};
</script>
