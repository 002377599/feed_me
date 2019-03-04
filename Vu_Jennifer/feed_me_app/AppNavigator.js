import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './Home';
import UserLogin from './UserLogin'

const AppNavigator = createStackNavigator({
  Home: { screen: Home },
  UserLogin: { screen: UserLogin},
});
const App = createAppContainer(AppNavigator);
export default App;
