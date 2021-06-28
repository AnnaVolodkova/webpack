import _ from "lodash";

const collectData = () => {
  let clicks = 0;

  const listener = () => clicks++;

  document.addEventListener('click', listener);

  return {
    destroy: () => {
      document.removeEventListener('click', listener)
    },
    getClicks: () => { return clicks },
  };
};

window.analytics = collectData();

console.log('Optimization splitChunks example', _.union([2,1], [1, 2, 3]));
