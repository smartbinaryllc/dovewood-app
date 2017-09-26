// @flow
import React from 'react';
import { Button } from 'react-native';

const HomeScreen = ({ navigation }: { navigation: any }) => {
  const { navigate } = navigation;
  return <Button title="View Profile" onPress={() => navigate('Profile', { name: 'Todd' })} />;
};

HomeScreen.navigationOptions = {
  title: 'welcome',
};

export default HomeScreen;
