import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './Home';
import UserLogin from './UserLogin'
import NearbyFoodTrucks from './NearbyFoodTrucks'

const AppNavigator = createStackNavigator({
  Home: { screen: Home },
  UserLogin: { screen: UserLogin},
  NearbyFoodTrucks: {screen: NearbyFoodTrucks},
});
const App = createAppContainer(AppNavigator);
export default App;
