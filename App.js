import React from 'react';
import { StyleSheet, View } from 'react-native';

import Index from './components';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

const App = () => (
  <View style={styles.container}>
    <Index />
  </View>
);

export default App;
