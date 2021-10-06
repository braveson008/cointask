import React from 'react';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import Navigator from './src/navigation';

import rootReducer from './src/redux/root';

const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
};

export default App;
