<template>
  <div class="select" data-state="">
    <div class="select__title" data-default="Option 0">Option 0</div>
    <div class="select__content">
      <input
        id="singleSelect0"
        class="select__input"
        type="radio"
        name="singleSelect"
        checked
      />
      <label for="singleSelect0" class="select__label">Option 0</label>
      <input
        id="singleSelect1"
        class="select__input"
        type="radio"
        name="singleSelect"
      />
      <label for="singleSelect1" class="select__label">Option 1</label>
      <input
        id="singleSelect2"
        class="select__input"
        type="radio"
        name="singleSelect"
        disabled
      />
      <label for="singleSelect2" class="select__label"
        >Option 2 (disabled)</label
      >
      <input
        id="singleSelect3"
        class="select__input"
        type="radio"
        name="singleSelect"
      />
      <label for="singleSelect3" class="select__label">Option 3</label>
      <input
        id="singleSelect4"
        class="select__input"
        type="radio"
        name="singleSelect"
      />
      <label for="singleSelect4" class="select__label">Option 4</label>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    const selectSingle = document.querySelector(".select");
    const selectSingle_title = selectSingle.querySelector(".select__title");
    const selectSingle_labels =
      selectSingle.querySelectorAll(".select__label");

    // Toggle menu
    selectSingle_title.addEventListener("click", () => {
      if ("active" === selectSingle.getAttribute("data-state")) {
        selectSingle.setAttribute("data-state", "");
      } else {
        selectSingle.setAttribute("data-state", "active");
      }
    });

    // Close when click to option
    for (let i = 0; i < selectSingle_labels.length; i++) {
      selectSingle_labels[i].addEventListener("click", (evt) => {
        selectSingle_title.textContent = evt.target.textContent;
        selectSingle.setAttribute("data-state", "");
      });
    }

    // Reset title
    // const reset = document.querySelector(".reset");
    // reset.addEventListener("click", () => {
    //   selectSingle_title.textContent =
    //     selectSingle_title.getAttribute("data-default");
    // });
  },
};
</script>

<style scoped lang='stylus'>
@import '@/assets/styles/vars.styl'
@import '@/assets/styles/mixins.styl'

.select {
  position: relative;
  width: 100%;
  height var(--heigth-elems)
  border-radius: var(--radius-def)
  background-color #F5F5F5

  &[data-state='active'] {
    .select__title {
      &::before {
        transform: translate(-3px, -50%) rotate(-45deg);
      }

      &::after {
        transform: translate(3px, -50%) rotate(45deg);
      }
    }

    .select__content {
      opacity: 1;
    }

    .select__label + .select__input + .select__label {
      max-height: 100%;
      border-top-width: 1px;
    }
  }
}

.select__title {
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 22px 27px;
  cursor: pointer;

  &::before, &::after {
    content: '';
    position: absolute;
    top: 50%;
    right: 16px;
    display: block;
    width: 10px;
    height: 3px;
    transition: all 0.3s ease-out;
    background-color: $black;
    transform: translate(-3px, -50%) rotate(45deg);
  }

  &::after {
    transform: translate(3px, -50%) rotate(-45deg);
  }
}

.reset {
  display: flex;
  width: 230px;
  padding: 8px 16px;
  margin: 0 auto;
  margin-bottom: 10px;
  border: solid 1px #c7ccd1;
  border-radius: 5px;
  transition: all 0.2s ease-out;
  cursor: pointer;
  font-weight: bold;
  background-color: #ffffff;
  color: #333333;

  &:hover {
    background-color: #D8093A;
    color: #ffffff;
  }
}

.select__content {
  position: absolute;
  overflow: hidden
  top: 85%;
  left: 0;
  right 0
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #F5F5F5;
  border-top: none;
  border-bottom-left-radius: var(--radius-def);
  border-bottom-right-radius: var(--radius-def);
  transition: all 0.3s ease-out;
  opacity: 0;
  z-index: 8;
  box-shadow: -9px -10px 11px rgba(0, 0, 0, 0.01), 18px 20px 37px rgba(0, 0, 0, 0.06);
}

.select__input {
  display: none;

  &:checked + label {
    background-color: #dedede;
  }

  &:disabled + label {
    opacity: 0.6;
    pointer-events: none;
  }
}

.select__label {
  position relative
  display: flex;
  align-items: center;
  width: 100%;
  height: var(--heigth-elems)
  max-height: 0;
  padding: 0 24px;
  transition: background-color 0.2s ease-out;
  cursor: pointer;
  overflow: hidden;
  color: $black;

  &::before {
    content ''
    position absolute
    left 0
    bottom 0
    height 100%
    width 4px
    background-color transparent
    transition background-color .2s
  }

  & + input + & {
    border-top: 0 solid #C7CCD160;
  }

  &:hover {
    background-color: #BFFDE3 !important;

    &::before {
      background-color $green
    }
  }
}
</style>