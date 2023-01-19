import { useFlashStore } from "@/stores/flashStore";

export const showFlashError = (response) => {
  showFlashMessage(response.data, "error");
};

export const showFlashSuccess = (response) => {
  if (response.message) {
    showFlashMessage(response, "success");
  }
};

const showFlashMessage = (response, type) => {
  const flashStore = useFlashStore();
  const commonError = "Что-то пошло не так, обратитесь в поддержку.";
  if (!response) {
    flash("error", commonError);

    return;
  }

  if (response.errors && !response.message) {
    for (const key of Object.keys(response.errors)) {
      flash(type, response.errors[key].join());
    }

    return;
  }

  if (!response.message) {
    response.message = commonError;
  }

  flash(type, response.message);

  function flash(type, text) {
    flashStore.addMessage({
      type: type,
      text: text,
      show: true,
    });
  }
};
