export const shuffle = (choices) => {
  for (let index = choices.length - 1; index >= 0; index--) {
    let index_2 = Math.floor(Math.random() * (index + 1));
    let temp = choices[index];
    choices[index] = choices[index_2];
    choices[index_2] = temp;
  }
  return [...choices];
};
