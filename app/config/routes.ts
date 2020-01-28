import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/Home';
import CurrencyList from '../screens/CurrencyList';
import Options from '../screens/Options';
import Themes from '../screens/Themes';

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        header: () => null
      }
    },
    Options: {
      screen: Options
    },
    Themes: {
      screen: Themes
    }
  },
  {
    headerMode: 'screen'
  }
);

const MainNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions: {
        header: () => null
      }
    },
    CurrencyList: {
      screen: CurrencyList,
      navigationOptions: ({ navigation }) => ({
        headerTitle: navigation.state.params.title
      })
    }
  },
  {
    mode: 'modal'
  }
);

const App = createAppContainer(MainNavigator);
export default App;
