import 'react-native-gesture-handler';
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import StoreProvider from './src/components/StoreProvider';

export default function Main() {
  return (
    <StoreProvider>
      <App />
    </StoreProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
