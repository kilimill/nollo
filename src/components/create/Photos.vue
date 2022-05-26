<template lang="pug">
section.create__photos
  h2.title_up-middle Фотографии
  p.text_middle.opacity-50.mb-24 Создайте галерею фотографий и отметьте одну, которая будет отображаться в карточке

  ul.create__photos-list(v-if="files.length")
    li.create__photos-photo(v-for="(file, key) in files", :key="key")
      img.create__photos-preview(v-bind:ref="'preview' + parseInt(key)")

  input.file__drag-drop(ref="fileform", type="file")
  //- .file__drag-drop(ref="fileform")
  //-   p.controls_middle
  //-     span.create__photos-text Выберите файл
  //-     span.create__photos-text или перетащите в эту область

  //-   p.controls_small PNG, jpg, gif не более 10 MB

  //-   .remove-container
  //-     a.remove(v-on:click="removeFile(key)") Remove
</template>

<script>
export default {
  data() {
    return {
      dragAndDropCapable: true,
      files: [],
    };
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
      this.$refs.fileform.addEventListener(
        "drop",
        function (e) {
          const files = Array.from(e.dataTransfer.files),
            filesExt = ["image/jpeg", "image/jpg", "image/gif", "image/png"],
            size = 10 * 1024 * 1024;
          // var parts = files.val().split('.');
          // let result = arr.find(item => item.id == 1)
          // files.forEach(item => {
          // item.
          // })
          if(files.length > 10) {
            return
          }
          console.log(files);
          console.log(filesExt.join());
          files.forEach((item) => {
            if (filesExt.join().search(item.type) === -1) {
              console.log("Попался!");
              console.log(filesExt.join().search(item.type));
              return
            }
          });
          files.reduce((previousValue, currentValue) => {
            if(size > previousValue) {
              return previousValue + currentValue.size;
            } 
          }, 0);
          console.log("Много!");
          // if (size < esf) {
          //   return
          //   //   // файл больше 5 мегабайт
          // }
          // for (let i = 0; i < e.dataTransfer.files.length; i++) {
          //   this.files.push(e.dataTransfer.files[i]);
          //   this.getImagePreviews();
          // }
        }.bind(this)
      );
    }
  },
};
</script>

<style scoped lang='stylus'>
@import '@/assets/styles/vars.styl';
@import '@/assets/styles/mixins.styl';

.create__photos {
  &-text:first-child {
    color: $green;
  }

  &-list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    // grid-template-rows: repeat(4, 1fr);
    grid-column-gap: vw(32);
    grid-row-gap: vw(32);
    margin-bottom: 32px;
  }

  &-photo {
    text-align: center;
    height: vw(120);
    border-radius: 8px;
    overflow: hidden;
    color: white;
  }

  &-preview {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
}

.file__drag-drop {
  padding: 24px;
  border: 1px dashed $green;
  border-radius: var(--radius);

  .controls_middle {
    margin-bottom: 12px;
  }
}
</style>