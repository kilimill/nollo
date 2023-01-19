const declensionWords = {
  days: ["день", "дня", "дней"],
  guests: ["гость", "гостя", "гостей"],
  nights: ["ночь", "ночи", "ночей"],
};

const findDeclensionWords = (word) => {
  return declensionWords[word];
};

const glueString = (value, word) => {
  return value + ' ' + word
}

export const decline = (value, word) => {
  const words = findDeclensionWords(word);
  value = Math.abs(value) % 100;
  let num = value % 10;
  if (value > 10 && value < 20) return glueString(value, words[2]);
  if (num > 1 && num < 5) return glueString(value, words[1]);
  if (num == 1) return glueString(value, words[0]);
  return glueString(value, words[2]);
};
