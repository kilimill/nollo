export default function timeoutDecorator(delay, func) {
  let timeout;

  const delayDecor = () => {
    clearTimeout(timeout);
    timeout = setTimeout(func, delay);
  };

  return {
    delayDecor,
  };
}