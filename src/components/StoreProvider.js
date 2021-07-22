import React from 'react';
import { Provider } from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper';
import store from '../reducers/store';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const StoreProvider = ({children}) => {
  return (
    <PaperProvider>
      <Provider store={store}>
        <SafeAreaProvider>
          {children}
        </SafeAreaProvider>
      </Provider>
    </PaperProvider>
  );
}

export default StoreProvider;