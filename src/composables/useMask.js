export const toMask = (value) => {
  if (!value?.length) return value;

  let formattedInputValue = "+7" + " ";
  if (value.length > 1) {
    formattedInputValue += "(" + value.substring(1, 4);
  }
  if (value.length >= 5) {
    formattedInputValue += ") " + value.substring(4, 7);
  }
  if (value.length >= 8) {
    formattedInputValue += "-" + value.substring(7, 9);
  }
  if (value.length >= 10) {
    formattedInputValue += "-" + value.substring(9, 11);
  }

  return formattedInputValue;
};
