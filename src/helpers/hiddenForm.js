export default function hiddenForm(form) {
  // const closeForm = (e) => {
  //   if (e.target.offsetParent !== form.value) {
  //     cancelForm()
  //   }
  // };

  const cancelForm = () => {
    form.value?.classList.remove("active");
    // window.removeEventListener("click", closeForm);
  }

  const openForm = () => {
    form.value?.classList.add("active");
    // window.addEventListener("click", closeForm);
  };

  return {
    openForm,
    cancelForm
  };
}
