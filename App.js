/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
// NAVIGATION
import Entry from './entry';

// REDUX
import {getStore, getPersistor} from './src/store';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import FlashMessage from 'react-native-flash-message';

const App: () => Node = () => {
  const myStore = getStore();
  const myPersistor = getPersistor();
  return (
    <Provider store={myStore}>
      <PersistGate persistor={myPersistor}>
        <FlashMessage floating={true} position={'top'} hideOnPress={true} />
        <Entry />
      </PersistGate>
    </Provider>
  );
};

export default App;
