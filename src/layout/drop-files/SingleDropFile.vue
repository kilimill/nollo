<template>
  <div class="files">
    <ul class="files__list grid grid_4 mb-32" v-if="preview?.url">
      <li class="files__item">
        <div class="files__controls files__controls--single">
          <button
            class="files__btn"
            @click.prevent="deleteMedia"
            tooltip="Удалить"
            positionTool="bottom"
          >
            <TrashIcon />
          </button>
        </div>
        <img class="files__preview" :src="preview.url" alt="Выбранное фото" />
      </li>
    </ul>
    <div class="file__drag-drop mb-16">
      <p class="controls_middle mb-12">
        <span class="files__text c-green">Выберите файл</span>
        <span class="files__text mobile-hide"> или перетащите в эту область</span>
      </p>

      <p class="controls_small">PNG, jpg, gif не более 10 MB</p>
      <input
        class="files__input"
        ref="fileForm"
        type="file"
        @change="onChangeFile"
        accept="image/png,image/jpeg,image/gif,image/jpg"
        :name="name"
      />
    </div>

    <p class="controls_middle btn_red" v-if="error">{{ error[0] }}</p>
  </div>
</template>

<script setup>
import { watch, computed, onMounted, ref } from "vue";
import { useApi } from "@/composables/useApi";
import { TrashIcon } from "@/layout/icon/index";
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  media: {
    type: [Array, Boolean],
    default: null,
  },
  id: [String, Number],
  errors: {
    type: Object,
    default: null,
  },
  errorKey: {
    type: String,
    default: null,
  },
});

const fileForm = ref(props.name);
const preview = ref({});

const error = computed(
  () => props.errors?.[props.errorKey ? props.errorKey : props.name]
);

const emits = defineEmits(["update:media"]);

const getImagePreviews = (file) => {
  let reader = new FileReader();
  reader.readAsDataURL(file);
  reader.addEventListener(
    "load",
    function () {
      preview.value.url = reader.result;
      emits("update:media", true);
    },
    false
  );
};

const removeFile = () => {
  preview.value = {};
  fileForm.value.value = null;
};

const deleteMedia = (key) => {
  if (preview.value?.id) {
    useApi()
      .deleteFrom(`hotels/${props.id}/media/${preview.value.id}`)
      .then(() => {
        removeFile(key);
      });
  } else {
    removeFile(key);
  }
};

const onChangeFile = (e) => {
  getImagePreviews(e.target.files[0]);
  if (!props.errors) {
    return;
  }
  props.errors[props.errorKey ? props.errorKey : props.name] = null;
};

const initPreview = () => {
  if (props.media?.length) {
    preview.value = props.media[0];
  } else if (props.media == true) {
    return;
  } else {
    removeFile();
  }
};

watch(
  () => props.media,
  () => initPreview()
);

onMounted(() => initPreview());
</script>
<style lang="stylus" scoped>
@import '../../assets/styles/layout/drop-files.styl';
</style>
