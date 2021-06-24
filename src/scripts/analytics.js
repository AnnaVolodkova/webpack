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
