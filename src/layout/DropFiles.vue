<template lang="pug">
.files
  ul.files__list(v-if="files.length")
    li.files__item(v-for="(file, key) in files", :key="key")
      .files__controls
        .files__btn
          button
            StarIcon.icon
        .files__btn
          button(v-on:click="removeFile(key)")
            TrashIcon.icon

      img.files__preview(v-bind:ref="'preview' + parseInt(key)")

  .file__drag-drop
    p.controls_middle
      span.files__text Выберите файл
      span.files__text или перетащите в эту область

    p.controls_small PNG, jpg, gif не более 10 MB
    input.files__input(ref="fileform", type="file", multiple)
</template>

<script>
import { StarIcon, TrashIcon } from "@/layout/icon/index";
export default {
  data() {
    return {
      dragAndDropCapable: true,
      files: [],
    };
  },
  components: {
    StarIcon,
    TrashIcon,
  },
  methods: {
    determineDragAndDropCapable() {
      var div = document.createElement("div");
      return (
        ("draggable" in div || ("ondragstart" in div && "ondrop" in div)) &&
        "FormData" in window &&
        "FileReader" in window
      );
    },
    fff(de) {
      console.log("sefsef");
      console.log(de);
    },
    getImagePreviews() {
      for (let i = 0; i < this.files.length; i++) {
        if (/\.(jpe?g|png|gif)$/i.test(this.files[i].name)) {
          let reader = new FileReader();
          reader.addEventListener(
            "load",
            function () {
              this.$refs["preview" + parseInt(i)][0].src = reader.result;
            }.bind(this),
            false
          );
          reader.readAsDataURL(this.files[i]);
        } else {
          this.$nextTick(function () {
            this.$refs["preview" + parseInt(i)][0].src = "/images/file.png";
          });
        }
      }
    },
    removeFile(key) {
      this.files.splice(key, 1);
    },
    ewfef(e) {
      const files =
          e.type === "drop"
            ? Array.from(e.dataTransfer.files)
            : Array.from(this.$refs.fileform.files),
        filesExt = ["image/jpeg", "image/jpg", "image/gif", "image/png"],
        size = 10 * 1024 * 1024;
      // var parts = files.val().split('.');
      // let result = arr.find(item => item.id == 1)
      // files.forEach(item => {
      // item.
      // })
      if (files.length > 10) {
        return;
      }
      console.log(files);
      console.log(filesExt.join());
      files.forEach((item) => {
        if (filesExt.join().search(item.type) === -1) {
          console.log("Попался!");
          console.log(filesExt.join().search(item.type));
          return;
        }
      });
      files.reduce((previousValue, currentValue) => {
        if (size > previousValue) {
          return previousValue + currentValue.size;
        }
      }, 0);
      // if (size < esf) {
      //   return
      //   //   // файл больше 5 мегабайт
      // }
      for (let i = 0; i < files.length; i++) {
        this.files.push(files[i]);
        this.getImagePreviews();
      }
      console.log(this.files);
    },
  },
  mounted() {
    this.dragAndDropCapable = this.determineDragAndDropCapable();
    if (this.dragAndDropCapable) {
      [
        "drag",
        "dragstart",
        "dragend",
        "dragover",
        "dragenter",
        "dragleave",
        "drop",
      ].forEach(
        function (evt) {
          this.$refs.fileform.addEventListener(
            evt,
            function (e) {
              e.preventDefault();
              e.stopPropagation();
            }.bind(this),
            false
          );
        }.bind(this)
      );
      this.$refs.fileform.addEventListener("drop", this.ewfef.bind(this));
      this.$refs.fileform.addEventListener("change", this.ewfef);
    }
  },
};
</script>

<style scoped lang='stylus'>
@import '@/assets/styles/vars.styl';
@import '@/assets/styles/mixins.styl';

.files {
  &__input {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  .files__btn {
    .icon path {
      stroke: #fff;
    }
  }

  &__text:first-child {
    color: $green;
  }

  &__controls {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4));
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__btn:first-child {
    margin-right: 40px;
  }

  &__list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    // grid-template-rows: repeat(4, 1fr);
    grid-column-gap: vw(32);
    grid-row-gap: vw(32);
    margin-bottom: 32px;
  }

  &__item {
    position: relative;
    text-align: center;
    height: vw(120);
    border-radius: 8px;
    overflow: hidden;
    color: white;
  }

  &__preview {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
}

.file__drag-drop {
  position: relative;
  padding: 24px;
  border: 1px dashed $green;
  border-radius: var(--radius);

  .controls_middle {
    margin-bottom: 12px;
  }
}
</style>