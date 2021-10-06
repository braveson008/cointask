const INITIAL_STATE = {
  coinInfo: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_SELECTED_COIN':
      return {
        ...state,
        coinInfo: action.coinInfo,
      };

    default:
      return state;
  }
};
