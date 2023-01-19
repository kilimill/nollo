<template>
  <div class="files">
    <ul class="files__list grid grid_4 mb-32" v-if="media?.length">
      <li class="files__item" v-for="(file, key) in media" :key="key">
        <div class="files__controls">
          <button
            class="files__btn"
            :class="{ selected: file.is_preview }"
            :tooltip="file.is_preview ? 'Убрать с главной' : 'Сделать главной'"
            @click.prevent="onChangeMain(file.id, key)"
          >
            <StarIcon />
          </button>
          <button
            @click.prevent="deleteMedia(key)"
            class="files__btn"
            tooltip="Удалить"
            positionTool="bottom"
          >
            <TrashIcon />
          </button>
        </div>
        <img class="files__preview" :src="file.url" alt="" />
      </li>
    </ul>

    <form class="file__drag-drop mb-16" ref="fileForm">
      <p class="controls_middle mb-12">
        <span class="files__text c-green">Выберите файл </span>
        <span class="files__text mobile-hide">или перетащите в эту область</span>
      </p>

      <p class="controls_small">PNG, jpg, gif не более 10 MB</p>
      <input
        class="files__input"
        type="file"
        accept="image/png,image/jpeg,image/gif,image/jpg"
        :name="name"
        @change="onChangeFile"
        multiple
      />
    </form>
    <p class="controls_middle btn_red" v-if="errors">
      Каждая фотография должна быть: PNG, jpg, gif не более 10 MB
    </p>
  </div>
</template>

<script setup>
import { inject, ref } from "vue";
import { useApi } from "@/composables/useApi";
import useToggleApi from "@/composables/useToggleApi";
import { StarIcon, TrashIcon } from "@/layout/icon/index";

const { hotelData, fecthHotel } = inject("create");
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  media: {
    type: Array,
    default: null,
  },
  id: [String, Number],
  errors: {
    type: Object,
    default: null,
  },
});

const fileForm = ref();

const { toggleApi } = useToggleApi("is_preview");
const onChangeMain = (id, key) => {
  if (!props.media[key].is_preview) {
    props.media.forEach((item) => {
      item.is_preview = false;
    });
  }

  const url = `hotels/${hotelData.id}/media/${id}/main`;
  toggleApi(url, props.media[key]);
};

const deleteMedia = (key) => {
  useApi()
    .deleteFrom(`hotels/${props.id}/media/${props.media[key].id}`)
    .then(() => props.media.splice(key, 1));
};

const onChangeFile = () => {
  const data = new FormData(fileForm.value);
  data.append("status_id", 1);
  fecthHotel(data);
  if (!props.errors) {
    return;
  }

  props.errors = null;
};
</script>

<style scoped lang="stylus">
@import '../../assets/styles/layout/drop-files.styl';
</style>
