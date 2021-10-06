// Since i only need one action i dont create saparate actionTypes.js file

export const setSelectedCoin = coinInfo => ({
  type: 'SET_SELECTED_COIN',
  coinInfo,
});
