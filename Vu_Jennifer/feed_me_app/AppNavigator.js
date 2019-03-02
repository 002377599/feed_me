import { createStackNavigator } from 'react-navigation';
import Home from './Home';

const AppNavigator = createStackNavigator({
  Home: { screen: Home },
  UserLogin: { screen: UserLogin},
});

export default AppNavigator;
