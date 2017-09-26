import { StackNavigator } from 'react-navigation';

import HomeScreen from './homeScreen';
import ProfileScreen from './profileScreen';

const Index = StackNavigator({
  Home: { screen: HomeScreen },
  Profile: { screen: ProfileScreen },
});

export default Index;
