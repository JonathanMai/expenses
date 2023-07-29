import 'react-native-gesture-handler';

import React from 'react';
import Root from './src/navigation/Root';
import {Provider} from 'react-redux';
import {persistor, store} from './src/features/store';
import StatusBar from './src/components/common/StatusBar';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {PersistGate} from 'redux-persist/integration/react';
import {StyleSheet} from 'react-native';

const App = () => {
  return (
    <GestureHandlerRootView style={styles.container}>
      <StatusBar />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Root />
        </PersistGate>
      </Provider>
    </GestureHandlerRootView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {flex: 1},
});
